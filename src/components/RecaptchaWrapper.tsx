"use client";

import Script from "next/script";
import { env } from "~/env";

declare global {
  const grecaptcha: {
    enterprise: {
      ready: (cb: () => void) => void;
      execute: (
        siteKey: string,
        options: { action: string },
      ) => Promise<string>;
    };
  };
}

interface Props {
  action: string;
}

export function RecaptchaWrapper({ action }: Props) {
  const executeRecaptcha = () => {
    console.log("reCAPTCHA script loaded, checking grecaptcha...");
    if (typeof grecaptcha !== "undefined") {
      console.log("grecaptcha found, executing...");
      grecaptcha.enterprise.ready(() => {
        console.log("reCAPTCHA ready, generating token...");
        void (async () => {
          try {
            const token = await grecaptcha.enterprise.execute(
              env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
              { action },
            );
            console.log(
              "reCAPTCHA token generated:",
              token.substring(0, 20) + "...",
            );
            const tokenInput = document.getElementById(
              "recaptcha-token",
            ) as HTMLInputElement;
            if (tokenInput) {
              tokenInput.value = token;
              console.log("Token stored in hidden input");
            } else {
              console.error("Token input element not found!");
            }
          } catch (e) {
            console.error("reCAPTCHA execution error:", e);
          }
        })();
      });
    } else {
      console.error("grecaptcha not found!");
    }
  };

  return (
    <>
      <Script
        src={`https://www.google.com/recaptcha/enterprise.js?render=${env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
        strategy="afterInteractive"
        onLoad={executeRecaptcha}
        onError={(e) => console.error("Failed to load reCAPTCHA script:", e)}
      />
      <input type="hidden" name="recaptchaToken" id="recaptcha-token" />
    </>
  );
}
