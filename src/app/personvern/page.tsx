import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Personvern — Dev AS",
  description:
    "Personvernerklæring for Dev AS. Informasjon om hvordan vi behandler personopplysninger.",
};

export default function PersonvernPage() {
  const lastUpdated = "12. mars 2026";

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-slate-100">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-light text-slate-500 transition-colors hover:text-slate-900"
          >
            ← Tilbake til forsiden
          </Link>
          <span className="font-mono text-xs text-slate-400">Dev AS</span>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-20">
        <div className="mb-12">
          <p className="mb-3 font-mono text-xs tracking-widest text-slate-400 uppercase">
            Sist oppdatert {lastUpdated}
          </p>
          <h1 className="text-4xl font-light tracking-tight text-slate-900">
            Personvern&shy;erklæring
          </h1>
        </div>

        <div className="space-y-10">
          <div>
            <h2 className="mb-3 text-base font-medium tracking-tight text-slate-900">
              1. Behandlingsansvarlig
            </h2>
            <p className="text-sm leading-relaxed font-light text-slate-600">
              Dev AS, org.nr. 920 937 160 MVA, er behandlingsansvarlig for
              personopplysningene som samles inn via dette nettstedet.
            </p>
            <address className="mt-4 text-sm leading-loose font-light text-slate-600 not-italic">
              Dev AS
              <br />
              Postboks 25
              <br />
              2151 ÅRNES
              <br />
              E-post:{" "}
              <a
                href="mailto:hei@devify.no"
                className="text-slate-900 underline underline-offset-4"
              >
                hei@devify.no
              </a>
              <br />
              Telefon:{" "}
              <a
                href="tel:+4790227000"
                className="text-slate-900 underline underline-offset-4"
              >
                (+47) 90 22 70 00
              </a>
            </address>
          </div>

          <div>
            <h2 className="mb-3 text-base font-medium tracking-tight text-slate-900">
              2. Hvilke opplysninger samler vi inn?
            </h2>
            <p className="text-sm leading-relaxed font-light text-slate-600">
              Via kontaktskjemaet på forsiden behandler vi følgende
              personopplysninger:
            </p>
            <ul className="mt-3 space-y-1.5 pl-4">
              {["Navn", "E-postadresse", "Innholdet i meldingen du sender"].map(
                (item) => (
                  <li
                    key={item}
                    className="list-disc text-sm font-light text-slate-600 marker:text-[#a7ea00]"
                  >
                    {item}
                  </li>
                ),
              )}
            </ul>
            <p className="mt-4 text-sm leading-relaxed font-light text-slate-600">
              Vi samler ikke inn opplysninger ut over det som er nødvendig for å
              besvare henvendelsen din.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-base font-medium tracking-tight text-slate-900">
              3. Formål og rettslig grunnlag
            </h2>
            <p className="text-sm leading-relaxed font-light text-slate-600">
              Opplysningene brukes utelukkende til å besvare din henvendelse og
              eventuelt inngå avtale om tjenester. Rettslig grunnlag er{" "}
              <strong className="font-medium text-slate-800">
                berettiget interesse
              </strong>{" "}
              (GDPR art. 6 nr. 1 f) og, ved inngåelse av avtale,{" "}
              <strong className="font-medium text-slate-800">
                avtaleinngåelse
              </strong>{" "}
              (art. 6 nr. 1 b).
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-base font-medium tracking-tight text-slate-900">
              4. Lagring og sletting
            </h2>
            <p className="text-sm leading-relaxed font-light text-slate-600">
              Henvendelser lagres i e-postsystemet vårt og slettes senest 12
              måneder etter at saken er avsluttet, med mindre vi er pålagt å
              beholde dem lenger av regnskapsmessige årsaker.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-base font-medium tracking-tight text-slate-900">
              5. Deling med tredjeparter
            </h2>
            <p className="text-sm leading-relaxed font-light text-slate-600">
              Vi deler ikke personopplysninger med tredjeparter, med unntak av
              følgende databehandlere:
            </p>
            <ul className="mt-3 space-y-3 pl-4">
              {[
                {
                  name: "Resend",
                  desc: "brukes til å sende e-postvarsler om nye henvendelser. Data behandles innenfor EØS.",
                },
                {
                  name: "Google reCAPTCHA v3",
                  desc: "brukes for å beskytte kontaktskjemaet mot automatisert misbruk. Google kan behandle tekniske data (IP-adresse, nettleserinformasjon) i henhold til Googles personvernregler.",
                },
                {
                  name: "Vercel",
                  desc: "nettstedet driftes på Vercel Inc. sin skyinfrastruktur. Vercel behandler serverlogger som kan inneholde IP-adresser.",
                },
              ].map(({ name, desc }) => (
                <li
                  key={name}
                  className="list-disc text-sm font-light text-slate-600 marker:text-[#a7ea00]"
                >
                  <span className="font-medium text-slate-800">{name}</span> —{" "}
                  {desc}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-base font-medium tracking-tight text-slate-900">
              6. Informasjonskapsler (cookies)
            </h2>
            <p className="text-sm leading-relaxed font-light text-slate-600">
              Dette nettstedet bruker ikke sporings- eller
              markedsføringscookies. Google reCAPTCHA kan sette en funksjonell
              cookie som er nødvendig for å beskytte skjemaet. Ingen data selges
              eller deles til annonsering.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-base font-medium tracking-tight text-slate-900">
              7. Dine rettigheter
            </h2>
            <p className="text-sm leading-relaxed font-light text-slate-600">
              Du har rett til å kreve innsyn i, retting av eller sletting av
              opplysninger vi har lagret om deg. Du har også rett til å klage
              til Datatilsynet dersom du mener vi behandler opplysningene dine i
              strid med gjeldende personvernlovgivning.
            </p>
            <p className="mt-3 text-sm leading-relaxed font-light text-slate-600">
              Kontakt oss på{" "}
              <a
                href="mailto:hei@devify.no"
                className="text-slate-900 underline underline-offset-4"
              >
                hei@devify.no
              </a>{" "}
              for å utøve dine rettigheter.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-base font-medium tracking-tight text-slate-900">
              8. Endringer
            </h2>
            <p className="text-sm leading-relaxed font-light text-slate-600">
              Vi forbeholder oss retten til å oppdatere denne erklæringen. Siste
              versjon vil alltid være tilgjengelig på denne siden.
            </p>
          </div>
        </div>
      </main>

      <footer className="border-t border-slate-100">
        <div className="mx-auto max-w-3xl px-6 py-8">
          <p className="text-xs font-light text-slate-400">
            Dev AS © 2018–{new Date().getFullYear()} · Org.nr. 920 937 160 MVA
          </p>
        </div>
      </footer>
    </div>
  );
}
