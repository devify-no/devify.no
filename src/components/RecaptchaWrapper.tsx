"use client";

import Script from "next/script";
import { env } from "~/env";

export function RecaptchaWrapper() {
  return (
    <Script
      src={`https://www.google.com/recaptcha/api.js?render=${env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
      strategy="afterInteractive"
      onError={(e) => console.error("Failed to load reCAPTCHA script:", e)}
    />
  );
}
