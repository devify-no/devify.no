"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { RecaptchaWrapper } from "~/components/RecaptchaWrapper";

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

export default function HomePage() {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus("idle");

    try {
      // Get the reCAPTCHA token
      const tokenInput = document.getElementById(
        "recaptcha-token",
      ) as HTMLInputElement;
      const recaptchaToken = tokenInput?.value;

      if (!recaptchaToken) {
        setSubmitStatus("error");
        return;
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          recaptchaToken,
        }),
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Hero Section */}
      <section className="mx-auto max-w-4xl px-6 pt-24 pb-20">
        <div className="text-center">
          <h2 className="text-5xl leading-tight font-light tracking-tight text-slate-900 sm:text-7xl lg:text-8xl">
            Webutvikling som{" "}
            <span className="bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text font-semibold text-transparent">
              fungerer
            </span>
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed font-light text-slate-600">
            Dev AS er et lite utviklerfirma som lager skreddersydde nettsider.
            Vi jobber tett med våre kunder – fra spennende start-ups og
            foreninger til etablerte bedrifter som vil ha kvalitet uten å måtte
            betale formuer.
          </p>
        </div>
      </section>

      {/* What we do section */}
      <section className="mx-auto max-w-4xl px-6 pb-20">
        <div className="text-center">
          <h3 className="mb-12 text-2xl font-light tracking-tight text-slate-900">
            Hva gjør vi?
          </h3>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="text-left">
              <h4 className="mb-3 text-lg font-medium text-slate-900">
                Webutvikling
              </h4>
              <p className="leading-relaxed font-light text-slate-600">
                Responsive nettsider og webapplikasjoner med React, Next.js og
                moderne teknologi. Rask, sikker og bygget for å vokse med din
                bedrift.
              </p>
            </div>
            <div className="text-left">
              <h4 className="mb-3 text-lg font-medium text-slate-900">SEO</h4>
              <p className="leading-relaxed font-light text-slate-600">
                Søkemotoroptimalisering som faktisk gir resultater. Vi hjelper
                deg å bli synlig på Google og tiltrekke de rette kundene.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="border-t border-slate-200/60 bg-white/50 backdrop-blur-sm">
        <div className="mx-auto max-w-2xl px-6 py-24">
          <div className="mb-16 text-center">
            <h3 className="text-3xl font-light tracking-tight text-slate-900">
              Har du et spennende prosjekt?
            </h3>
            <p className="mt-4 text-lg font-light text-slate-600">
              Send oss en melding, så tar vi en uformell prat på kort varsel.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <RecaptchaWrapper action="contact_form" />

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-3 block text-sm font-medium text-slate-700"
                >
                  Navn
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name")}
                  className={`block w-full rounded-none border-0 border-b-2 bg-transparent px-0 py-3 text-slate-900 placeholder-slate-400 transition-colors focus:ring-0 focus:outline-none ${
                    errors.name
                      ? "border-red-300 focus:border-red-500"
                      : "border-slate-200 focus:border-slate-900"
                  }`}
                  placeholder="Ditt navn"
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-3 block text-sm font-medium text-slate-700"
                >
                  E-post
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  className={`block w-full rounded-none border-0 border-b-2 bg-transparent px-0 py-3 text-slate-900 placeholder-slate-400 transition-colors focus:ring-0 focus:outline-none ${
                    errors.email
                      ? "border-red-300 focus:border-red-500"
                      : "border-slate-200 focus:border-slate-900"
                  }`}
                  placeholder="din@epost.no"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-3 block text-sm font-medium text-slate-700"
              >
                Melding
              </label>
              <textarea
                id="message"
                rows={5}
                {...register("message")}
                className={`block w-full resize-none rounded-none border-0 border-b-2 bg-transparent px-0 py-3 text-slate-900 placeholder-slate-400 transition-colors focus:ring-0 focus:outline-none ${
                  errors.message
                    ? "border-red-300 focus:border-red-500"
                    : "border-slate-200 focus:border-slate-900"
                }`}
                placeholder="Fortell oss om prosjektet ditt..."
              />
              {errors.message && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.message.message}
                </p>
              )}
            </div>

            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full transform cursor-pointer bg-slate-900 px-8 py-4 font-medium tracking-wide text-white transition-all duration-200 hover:scale-[1.02] hover:bg-slate-800 focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 focus:outline-none active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? "Sender..." : "Send melding"}
              </button>
            </div>

            {submitStatus === "success" && (
              <div className="mt-6 border border-emerald-200 bg-emerald-50 p-6">
                <p className="text-center font-medium text-emerald-800">
                  Takk for meldingen! Vi tar kontakt innen 24 timer.
                </p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mt-6 border border-red-200 bg-red-50 p-6">
                <p className="text-center font-medium text-red-800">
                  Noe gikk galt. Prøv igjen eller ring oss direkte.
                </p>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200/60 bg-white/30 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {/* Company Info */}
            <div>
              <h4 className="mb-3 text-sm font-medium text-slate-900">
                Dev AS
              </h4>
              <p className="text-sm font-light text-slate-600 not-italic">
                Org.nr. 920 937 160 MVA
                <br />
                Foretaksregisteret
              </p>
            </div>

            {/* Address */}
            <div>
              <h4 className="mb-3 text-sm font-medium text-slate-700">
                Adresse
              </h4>
              <address className="text-sm font-light text-slate-600 not-italic">
                Drognesjordet 113
                <br />
                2150 ÅRNES
              </address>
            </div>

            {/* Postal Address */}
            <div>
              <h4 className="mb-3 text-sm font-medium text-slate-700">
                Postadresse
              </h4>
              <address className="text-sm font-light text-slate-600 not-italic">
                Postboks 25
                <br />
                2151 ÅRNES
              </address>
            </div>

            <div>
              <h4 className="mb-3 text-sm font-medium text-slate-700">
                Kontaktinformasjon
              </h4>
              <address className="text-sm font-light text-slate-600 not-italic">
                (+47) 90 22 70 00
                <br />
                hei@devify.no
              </address>
            </div>
          </div>

          <div className="mt-12 border-t border-slate-200/60 pt-8 text-center">
            <p className="text-sm font-light tracking-wide text-slate-500">
              Dev AS © 2018-{new Date().getFullYear()}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
