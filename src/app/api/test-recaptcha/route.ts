import { NextResponse } from "next/server";
import { env } from "~/env";

export async function GET() {
  try {
    // Check if environment variables are properly loaded
    const envCheck = {
      hasGoogleCloudProjectId: !!env.GOOGLE_CLOUD_PROJECT_ID,
      hasGoogleRecaptchaSecretKey: !!env.GOOGLE_RECAPTCHA_SECRET_KEY,
      hasRecaptchaSiteKey: !!env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
      googleCloudProjectIdLength: env.GOOGLE_CLOUD_PROJECT_ID?.length || 0,
      secretKeyLength: env.GOOGLE_RECAPTCHA_SECRET_KEY?.length || 0,
      siteKeyLength: env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY?.length || 0,
    };

    return NextResponse.json({
      message: "reCAPTCHA configuration check",
      envCheck,
      instructions: [
        "1. Make sure you have set up Google Cloud reCAPTCHA Enterprise",
        "2. Enable the reCAPTCHA Enterprise API in Google Cloud Console",
        "3. Create an API key in Google Cloud Console with reCAPTCHA Enterprise API access",
        "4. Set GOOGLE_CLOUD_PROJECT_ID to your Google Cloud project ID",
        "5. Set GOOGLE_RECAPTCHA_SECRET_KEY to your Google Cloud API key",
        "6. Set NEXT_PUBLIC_RECAPTCHA_SITE_KEY to your reCAPTCHA site key",
      ],
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to check configuration", details: error },
      { status: 500 },
    );
  }
}
