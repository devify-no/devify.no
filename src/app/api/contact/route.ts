import { NextRequest, NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";
import { z } from "zod";
import { env } from "~/env";

sgMail.setApiKey(env.SENDGRID_API_KEY);

const contactSchema = z.object({
  name: z.string().min(1, "Navn er påkrevd"),
  email: z.string().email("Ugyldig e-postadresse"),
  message: z.string().min(1, "Melding er påkrevd"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = contactSchema.parse(body);

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
      `,
      text: `
        Ny henvendelse fra nettside
        
        Navn: ${name}
        E-post: ${email}
        Melding: ${message}
      `,
    };

    await sgMail.send(msg);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Ugyldig data", details: error.errors },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { error: "Feil ved sending av e-post" },
      { status: 500 },
    );
  }
}
