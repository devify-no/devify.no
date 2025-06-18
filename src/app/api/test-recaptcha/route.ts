import { NextResponse } from "next/server";
import { env } from "~/env";

export async function GET() {
  try {
    // Check if environment variables are properly loaded
    const envCheck = {
      hasRecaptchaSecretKey: !!env.RECAPTCHA_SECRET_KEY,
      hasRecaptchaSiteKey: !!env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
      secretKeyLength: env.RECAPTCHA_SECRET_KEY,
      siteKeyLength: env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
    };

    return NextResponse.json({
      message: "reCAPTCHA v3 configuration check",
      envCheck,
      instructions: [
        "1. Go to https://www.google.com/recaptcha/admin",
        "2. Create a new reCAPTCHA v3 site",
        "3. Add your domain (localhost for development)",
        "4. Copy the Site Key to NEXT_PUBLIC_RECAPTCHA_SITE_KEY",
        "5. Copy the Secret Key to RECAPTCHA_SECRET_KEY",
        "6. No Google Cloud setup needed for regular reCAPTCHA v3!",
      ],
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to check configuration", details: error },
      { status: 500 },
    );
  }
}
