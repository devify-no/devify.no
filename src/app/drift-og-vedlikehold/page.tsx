import { Fragment } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Drift og vedlikehold av nettside | Dev AS",
  description:
    "Vi tar hånd om hosting, oppdateringer, overvåking og support etter lansering. Nettsiden din fungerer — uten at du trenger å tenke på det.",
};

const included = [
  {
    id: "01",
    title: "Hosting og infrastruktur",
    body: "Vi setter opp og drifter hosting på moderne plattformer med god oppetid. SSL-sertifikat, CDN og automatisk skalering er inkludert.",
  },
  {
    id: "02",
    title: "Sikkerhetsoppdateringer",
    body: "Avhengigheter og rammeverk holdes oppdatert. Kjente sårbarheter tettes før de blir et problem.",
  },
  {
    id: "03",
    title: "Overvåking og varsling",
    body: "Vi overvåker oppetid og ytelse. Hvis noe går ned, vet vi om det — gjerne før du gjør det.",
  },
  {
    id: "04",
    title: "Innholdsoppdateringer",
    body: "Trenger du å endre tekst, bilder eller struktur? Vi ordner det raskt, uten at du trenger å lære deg et CMS.",
  },
  {
    id: "05",
    title: "Backup og gjenoppretting",
    body: "Daglige sikkerhetskopier og en klar plan for gjenoppretting. Hvis noe skjer, kommer vi oss tilbake raskt.",
  },
  {
    id: "06",
    title: "Teknisk support",
    body: "Du har direkte tilgang til oss for tekniske spørsmål. Ikke et ticketsystem — en melding.",
  },
];

const comparison = [
  {
    topic: "Tilgjengelighet",
    self: "Du er ansvarlig for å følge med, oppdatere og reagere på problemer.",
    us: "Vi overvåker og handler. Du slipper å tenke på det.",
  },
  {
    topic: "Oppdateringer",
    self: "Manuelt arbeid som ofte utsettes til det er for sent.",
    us: "Løpende, planlagt vedlikehold — ikke brannslukking.",
  },
  {
    topic: "Innholdsendringer",
    self: "Krever enten CMS-opplæring eller å vente på en utvikler.",
    us: "Send en melding. Vi fikser det, gjerne samme dag.",
  },
  {
    topic: "Kostnader",
    self: "Uforutsigbare — store regninger når noe går galt.",
    us: "Fast månedspris. Du vet hva du betaler.",
  },
];

const cornerBrackets = [
  "top-6 left-6 border-l-2 border-t-2",
  "top-6 right-6 border-r-2 border-t-2",
  "bottom-6 left-6 border-l-2 border-b-2",
  "bottom-6 right-6 border-r-2 border-b-2",
];

export default function DriftOgVedlikeholdPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="border-b border-slate-100">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-light text-slate-500 transition-colors hover:text-slate-900"
          >
            ← Forsiden
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo-icon.svg"
              alt=""
              width={16}
              height={18}
              aria-hidden="true"
            />
            <span className="font-mono text-xs text-slate-400">Dev AS</span>
          </Link>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-slate-100 px-6 py-24 sm:py-32">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.3]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute top-0 right-0 h-[600px] w-[600px] opacity-20"
            style={{
              background:
                "radial-gradient(ellipse at top right, #a7ea00 0%, transparent 65%)",
            }}
            aria-hidden="true"
          />
          <div className="relative z-10 mx-auto max-w-3xl">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
              Dev AS — drift
            </p>
            <h1 className="text-4xl font-light leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Drift og{" "}
              <span className="font-semibold">vedlikehold</span>
            </h1>
            <p className="mt-3 text-2xl font-light tracking-tight text-slate-400 sm:text-3xl">
              Nettsiden din i gode hender
            </p>
            <p className="mt-8 max-w-xl text-lg leading-relaxed font-light text-slate-500">
              Lansering er ikke slutten — det er starten. Vi sørger for at
              nettsiden din fungerer, er oppdatert og er sikker, dag etter dag.
            </p>
          </div>
        </section>

        {/* What's included */}
        <section className="border-b border-slate-100 bg-slate-950 px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12">
              <p className="mb-3 text-xs font-medium tracking-[0.2em] text-slate-500 uppercase">
                Hva som er inkludert
              </p>
              <h2 className="text-2xl font-light tracking-tight text-white sm:text-3xl">
                Alt du trenger —{" "}
                <span className="font-semibold">ingenting du ikke trenger</span>
              </h2>
            </div>

            <div className="grid gap-px bg-slate-800 sm:grid-cols-2 lg:grid-cols-3">
              {included.map(({ id, title, body }) => (
                <div key={id} className="flex flex-col bg-slate-950 p-8">
                  <span
                    className="mb-5 inline-block self-start px-2 py-0.5 font-mono text-xs font-medium"
                    style={{ background: "#a7ea00", color: "#0f172a" }}
                  >
                    {id}
                  </span>
                  <h3 className="mb-3 text-base font-semibold tracking-tight text-white">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed font-light text-slate-400">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="border-b border-slate-100 px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12">
              <p className="mb-3 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
                Med og uten driftsavtale
              </p>
              <h2 className="text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
                Hva du slipper —{" "}
                <span className="font-semibold">og hva du beholder</span>
              </h2>
            </div>

            <div className="overflow-x-auto">
              <div className="min-w-[560px]">
                <div className="grid grid-cols-[1fr_1fr_1fr] gap-px bg-slate-200">
                  <div className="bg-slate-900 px-5 py-3">
                    <span className="text-xs font-medium tracking-[0.15em] text-slate-400 uppercase">
                      Område
                    </span>
                  </div>
                  <div className="bg-slate-900 px-5 py-3">
                    <span className="text-xs font-medium text-slate-400">
                      Uten driftsavtale
                    </span>
                  </div>
                  <div className="bg-slate-900 px-5 py-3">
                    <span
                      className="font-mono text-xs font-medium"
                      style={{ color: "#a7ea00" }}
                    >
                      Med Dev AS
                    </span>
                  </div>
                  {comparison.map(({ topic, self, us }) => (
                    <Fragment key={topic}>
                      <div className="bg-white px-5 py-4">
                        <p className="text-sm font-medium text-slate-900">
                          {topic}
                        </p>
                      </div>
                      <div className="bg-white px-5 py-4">
                        <p className="text-sm font-light leading-relaxed text-slate-500">
                          {self}
                        </p>
                      </div>
                      <div className="bg-white px-5 py-4">
                        <p className="text-sm font-light leading-relaxed text-slate-700">
                          {us}
                        </p>
                      </div>
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Honest framing */}
        <section className="border-b border-slate-100 bg-slate-50 px-6 py-20">
          <div className="mx-auto max-w-3xl">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
              Ærlig sagt
            </p>
            <h2 className="mb-8 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
              Ikke alle trenger en driftsavtale
            </h2>
            <div className="space-y-5 text-sm leading-relaxed font-light text-slate-600">
              <p>
                Har du en intern utvikler som tar hånd om dette, eller en enkel
                statisk side som sjelden endres, er en driftsavtale kanskje ikke
                nødvendig. Vi presser det ikke på noen.
              </p>
              <p>
                Men for de fleste bedrifter som bruker nettsiden sin aktivt og
                ikke vil bruke tid på teknisk forvaltning, er det en fornuftig
                investering. Faste kostnader slår uforutsigbare regninger for
                krisehåndtering.
              </p>
              <p>
                Usikker? Ta en prat — vi gir deg et ærlig svar på om du
                trenger det.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-slate-950">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
              `,
              backgroundSize: "48px 48px",
            }}
            aria-hidden="true"
          />
          {cornerBrackets.map((cls) => (
            <div
              key={cls}
              className={`pointer-events-none absolute h-8 w-8 border-brand opacity-20 ${cls}`}
              aria-hidden="true"
            />
          ))}
          <div className="relative z-10 mx-auto max-w-2xl px-6 py-24 text-center">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-500 uppercase">
              La oss ta oss av det tekniske
            </p>
            <h2 className="text-3xl font-light tracking-tight text-white sm:text-4xl">
              Nettsiden din i trygge hender
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-light text-slate-400">
              Fokuser på bedriften din. Vi passer på at nettsiden fungerer.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/#kontakt"
                className="group inline-flex items-center gap-2 bg-brand px-8 py-3.5 text-sm font-medium tracking-wide text-slate-950 transition-all hover:bg-white"
              >
                Ta kontakt
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
              <Link
                href="/tjenester"
                className="text-sm font-light text-slate-400 transition-colors hover:text-slate-300"
              >
                Se alle tjenester →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-5xl px-6 py-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs font-light text-slate-600">
              Dev AS © 2018–{new Date().getFullYear()}
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <Link
                href="/ressurser"
                className="text-xs font-light text-slate-600 transition-colors hover:text-slate-400"
              >
                Ressurser
              </Link>
              <Link
                href="/filosofi"
                className="text-xs font-light text-slate-600 transition-colors hover:text-slate-400"
              >
                Filosofi
              </Link>
              <Link
                href="/personvern"
                className="text-xs font-light text-slate-600 transition-colors hover:text-slate-400"
              >
                Personvern
              </Link>
              <Link
                href="/"
                className="text-xs font-light text-slate-600 transition-colors hover:text-slate-400"
              >
                Forsiden
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
