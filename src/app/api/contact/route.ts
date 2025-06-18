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

// Type for reCAPTCHA Enterprise API response
interface RecaptchaResponse {
  riskAnalysis?: {
    score?: number;
  };
  tokenProperties?: {
    valid?: boolean;
  };
  error?: {
    code?: number;
    message?: string;
  };
}

export async function POST(request: NextRequest) {
  try {
    const body: unknown = await request.json();

    // Parse and validate the request body with Zod schema
    const { name, email, message, recaptchaToken } = contactSchema.parse(body);

    console.log("Verifying reCAPTCHA token...");

    // Verify reCAPTCHA token
    const recaptchaResponse = await fetch(
      `https://recaptchaenterprise.googleapis.com/v1/projects/${env.GOOGLE_CLOUD_PROJECT_ID}/assessments?key=${env.GOOGLE_RECAPTCHA_SECRET_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          event: {
            token: recaptchaToken,
            expectedAction: "contact_form",
            siteKey: env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
          },
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

    // Check for API errors
    if (recaptchaData.error) {
      console.error("reCAPTCHA API error:", recaptchaData.error);
      return NextResponse.json(
        { error: "reCAPTCHA API error", details: recaptchaData.error.message },
        { status: 400 },
      );
    }

    // Check if the reCAPTCHA is valid
    if (
      !recaptchaData?.riskAnalysis?.score ||
      recaptchaData?.tokenProperties?.valid !== true
    ) {
      console.log(
        "reCAPTCHA failed validation:",
        JSON.stringify(recaptchaData, null, 2),
      );
      return NextResponse.json(
        { error: "reCAPTCHA validation failed" },
        { status: 400 },
      );
    }

    console.log(
      "reCAPTCHA verified successfully, score:",
      recaptchaData.riskAnalysis.score,
    );

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
        <p><small>reCAPTCHA Score: ${recaptchaData.riskAnalysis.score}</small></p>
      `,
      text: `
        Ny henvendelse fra nettside
        
        Navn: ${name}
        E-post: ${email}
        Melding: ${message}
        
        reCAPTCHA Score: ${recaptchaData.riskAnalysis.score}
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
