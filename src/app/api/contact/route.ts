import { type NextRequest, NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";
import { z } from "zod";
import { env } from "~/env";

sgMail.setApiKey(env.SENDGRID_API_KEY);

const contactSchema = z.object({
  name: z.string().min(1, "Navn er påkrevd"),
  email: z.string().email("Ugyldig e-postadresse"),
  message: z.string().min(1, "Melding er påkrevd"),
  recaptchaToken: z.string().min(1, "reCAPTCHA token er påkrevd"),
});

// Type for regular reCAPTCHA v3 API response
interface RecaptchaResponse {
  success: boolean;
  score?: number;
  action?: string;
  challenge_ts?: string;
  hostname?: string;
  "error-codes"?: string[];
}

export async function POST(request: NextRequest) {
  try {
    const body: unknown = await request.json();

    // Parse and validate the request body with Zod schema
    const { name, email, message, recaptchaToken } = contactSchema.parse(body);

    console.log("Verifying reCAPTCHA token...");

    // Verify reCAPTCHA token using regular reCAPTCHA v3 API
    const recaptchaResponse = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: env.RECAPTCHA_SECRET_KEY,
          response: recaptchaToken,
        }),
      },
    );

    console.log("reCAPTCHA response status:", recaptchaResponse.status);

    if (!recaptchaResponse.ok) {
      const errorText = await recaptchaResponse.text();
      console.error("reCAPTCHA verification failed:", {
        status: recaptchaResponse.status,
        statusText: recaptchaResponse.statusText,
        body: errorText,
      });
      return NextResponse.json(
        { error: "reCAPTCHA verification failed", details: errorText },
        { status: 400 },
      );
    }

    const recaptchaData: RecaptchaResponse =
      (await recaptchaResponse.json()) as RecaptchaResponse;

    console.log(
      "reCAPTCHA response data:",
      JSON.stringify(recaptchaData, null, 2),
    );

    // Check if the reCAPTCHA verification was successful
    if (!recaptchaData.success) {
      console.error("reCAPTCHA failed:", recaptchaData["error-codes"]);
      return NextResponse.json(
        {
          error: "reCAPTCHA validation failed",
          details: recaptchaData["error-codes"],
        },
        { status: 400 },
      );
    }

    // Check the score (optional - reCAPTCHA v3 provides a score between 0.0 and 1.0)
    const score = recaptchaData.score ?? 0;
    console.log("reCAPTCHA verified successfully, score:", score);

    // You can set a minimum score threshold if needed (e.g., 0.5)
    if (score < 0.3) {
      console.warn("reCAPTCHA score too low:", score);
      return NextResponse.json(
        { error: "reCAPTCHA score too low" },
        { status: 400 },
      );
    }

    // Proceed with sending the email if reCAPTCHA is valid
    const msg = {
      to: "moritz@devify.no",
      from: "hei@devify.no",
      replyTo: email, // Customer's email for easy replies
      subject: `Ny henvendelse fra ${name}`,
      html: `
        <h2>Ny henvendelse fra nettside</h2>
        <p><strong>Navn:</strong> ${name}</p>
        <p><strong>E-post:</strong> ${email}</p>
        <p><strong>Melding:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p><small>reCAPTCHA Score: ${score}</small></p>
      `,
      text: `
        Ny henvendelse fra nettside
        
        Navn: ${name}
        E-post: ${email}
        Melding: ${message}
        
        reCAPTCHA Score: ${score}
      `,
    };

    await sgMail.send(msg);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing contact form:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Ugyldig data", details: error.errors },
        { status: 400 },
      );
    }

    // Handle JSON parsing errors
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { error: "Ugyldig JSON format" },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { error: "Feil ved sending av e-post" },
      { status: 500 },
    );
  }
}
