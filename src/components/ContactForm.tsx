"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { env } from "~/env";
import { RecaptchaWrapper } from "~/components/RecaptchaWrapper";

declare global {
  const grecaptcha: {
    ready: (cb: () => void) => void;
    execute: (siteKey: string, options: { action: string }) => Promise<string>;
  };
}

const contactSchema = z.object({
  name: z
    .string()
    .min(1, "Navn er påkrevd")
    .min(2, "Navn må være minst 2 tegn"),
  email: z.string().min(1, "E-post er påkrevd").email("Ugyldig e-postadresse"),
  message: z
    .string()
    .min(1, "Melding er påkrevd")
    .min(10, "Meldingen må være minst 10 tegn"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const getRecaptchaToken = (): Promise<string> =>
    new Promise((resolve, reject) => {
      grecaptcha.ready(() => {
        grecaptcha
          .execute(env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY, {
            action: "contact_form",
          })
          .then(resolve)
          .catch(reject);
      });
    });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus("idle");
    try {
      const recaptchaToken = await getRecaptchaToken();
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, recaptchaToken }),
      });
      if (response.ok) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    }
  };

  return (
    <>
      <RecaptchaWrapper />
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="block text-xs font-medium tracking-widest text-slate-500 uppercase"
            >
              Navn
            </label>
            <input
              type="text"
              id="name"
              {...register("name")}
              className={`block w-full border bg-slate-900 px-4 py-3.5 text-sm text-white placeholder-slate-600 transition-all duration-200 focus:outline-none ${
                errors.name
                  ? "border-red-500/60 focus:border-red-400"
                  : "border-slate-800 focus:border-[#a7ea00]/60 focus:bg-slate-900/80"
              }`}
              placeholder="Ditt navn"
            />
            {errors.name && (
              <p className="text-xs text-red-400">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-xs font-medium tracking-widest text-slate-500 uppercase"
            >
              E-post
            </label>
            <input
              type="email"
              id="email"
              {...register("email")}
              className={`block w-full border bg-slate-900 px-4 py-3.5 text-sm text-white placeholder-slate-600 transition-all duration-200 focus:outline-none ${
                errors.email
                  ? "border-red-500/60 focus:border-red-400"
                  : "border-slate-800 focus:border-[#a7ea00]/60 focus:bg-slate-900/80"
              }`}
              placeholder="din@epost.no"
            />
            {errors.email && (
              <p className="text-xs text-red-400">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="message"
            className="block text-xs font-medium tracking-widest text-slate-500 uppercase"
          >
            Melding
          </label>
          <textarea
            id="message"
            rows={6}
            {...register("message")}
            className={`block w-full resize-none border bg-slate-900 px-4 py-3.5 text-sm text-white placeholder-slate-600 transition-all duration-200 focus:outline-none ${
              errors.message
                ? "border-red-500/60 focus:border-red-400"
                : "border-slate-800 focus:border-[#a7ea00]/60 focus:bg-slate-900/80"
            }`}
            placeholder="Fortell oss om prosjektet ditt..."
          />
          {errors.message && (
            <p className="text-xs text-red-400">{errors.message.message}</p>
          )}
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="group flex w-full cursor-pointer items-center justify-center gap-3 bg-white px-8 py-4 text-sm font-medium tracking-wide text-slate-950 transition-all duration-200 hover:bg-[#a7ea00] focus:ring-2 focus:ring-[#a7ea00] focus:ring-offset-2 focus:ring-offset-slate-950 focus:outline-none active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <svg
                  className="h-4 w-4 animate-spin"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8z"
                  />
                </svg>
                Sender...
              </>
            ) : (
              <>
                Send melding
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </>
            )}
          </button>
        </div>

        {submitStatus === "success" && (
          <div className="flex items-start gap-4 border border-[#a7ea00]/20 bg-[#a7ea00]/5 px-5 py-4">
            <svg
              className="mt-0.5 h-4 w-4 shrink-0 text-[#a7ea00]"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2.5 8.5l3.5 3.5 7-7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div>
              <p className="text-sm font-medium text-white">Melding mottatt</p>
              <p className="mt-0.5 text-sm font-light text-slate-400">
                Vi tar kontakt innen 1 virkedag.
              </p>
            </div>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="flex items-start gap-4 border border-red-500/20 bg-red-950/30 px-5 py-4">
            <svg
              className="mt-0.5 h-4 w-4 shrink-0 text-red-400"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M8 2v7M8 12.5v.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <div>
              <p className="text-sm font-medium text-red-300">Noe gikk galt</p>
              <p className="mt-0.5 text-sm font-light text-slate-400">
                Prøv igjen, eller skriv til{" "}
                <a
                  href="mailto:hei@devify.no"
                  className="text-slate-300 underline underline-offset-2 hover:text-white"
                >
                  hei@devify.no
                </a>
                .
              </p>
            </div>
          </div>
        )}
      </form>
    </>
  );
}
