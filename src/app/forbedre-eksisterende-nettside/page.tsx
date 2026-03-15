import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Forbedre eksisterende nettside | Dev AS",
  description:
    "Har du en nettside som ikke leverer? Vi gjennomgår den, identifiserer svakhetene og fikser det som faktisk gir effekt — uten å starte fra null.",
};

const improvements = [
  {
    id: "01",
    title: "Ytelsesforbedring",
    body: "Vi analyserer hva som bremser siden og fikser det. Ofte er det bilder, tung JavaScript eller dårlig caching. Resultatet er synlig med en gang.",
  },
  {
    id: "02",
    title: "Teknisk SEO-gjennomgang",
    body: "Strukturert data, canonical-tagger, crawlbarhet og metadata. Vi lager en prioritert liste og tar oss av det som gir størst effekt.",
  },
  {
    id: "03",
    title: "Designforbedringer",
    body: "Ikke nødvendigvis en fullstendig redesign — men målrettede endringer som gjør siden enklere å bruke og mer troverdig.",
  },
  {
    id: "04",
    title: "Tilgjengelighet",
    body: "WCAG-compliance, tastaturnavigasjon, kontrast og skjermleserkompatibilitet. Vi fikser det som er feil og dokumenterer hva som er i orden.",
  },
  {
    id: "05",
    title: "Plattformmigrering",
    body: "Fra WordPress til Next.js, fra Squarespace til noe du faktisk eier. Vi håndterer redirect-kartlegging og SEO-bevaring gjennom migreringen.",
  },
  {
    id: "06",
    title: "Innholdsstruktur",
    body: "Navigasjon, informasjonsarkitektur og URL-struktur. Sider folk ikke finner, hjelper ingen.",
  },
];

const process = [
  {
    step: "01",
    title: "Gjennomgang og audit",
    desc: "Vi ser på ytelse, teknisk SEO, tilgjengelighet og brukeropplevelse. Ikke en automatisert rapport — en menneskelig vurdering av hva som faktisk er problemet.",
  },
  {
    step: "02",
    title: "Prioritert tiltaksliste",
    desc: "Du får en konkret liste over hva vi anbefaler å gjøre, rangert etter forventet effekt. Du bestemmer hva vi går videre med.",
  },
  {
    step: "03",
    title: "Implementering",
    desc: "Vi gjennomfører tiltakene. Enten som en engangspakke eller løpende i samarbeid med deg.",
  },
  {
    step: "04",
    title: "Verifisering",
    desc: "Vi dokumenterer tilstand før og etter. Du skal kunne se hva som er gjort og hva det faktisk endret.",
  },
];

const signs = [
  "Siden laster tregt på mobil",
  "Google-rangeringen din har falt uten åpenbar grunn",
  "Brukerne dine finner ikke det de leter etter",
  "Siden ser utdatert ut sammenlignet med konkurrentene",
  "Du har arvet en nettside og vet ikke hva som er galt",
  "Konverteringen er lav selv om trafikken er ok",
];

const cornerBrackets = [
  "top-6 left-6 border-l-2 border-t-2",
  "top-6 right-6 border-r-2 border-t-2",
  "bottom-6 left-6 border-l-2 border-b-2",
  "bottom-6 right-6 border-r-2 border-b-2",
];

export default function ForbedreEksisterendeNettside() {
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
              Dev AS — forbedring
            </p>
            <h1 className="text-4xl font-light leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Forbedre{" "}
              <span className="font-semibold">eksisterende nettside</span>
            </h1>
            <p className="mt-3 text-2xl font-light tracking-tight text-slate-400 sm:text-3xl">
              Ikke alltid nødvendig å starte fra null
            </p>
            <p className="mt-8 max-w-xl text-lg leading-relaxed font-light text-slate-500">
              Har du en nettside som ikke leverer? Vi ser på hva som faktisk er
              galt og fikser det — uten å selge deg en fullstendig nybygging
              hvis det ikke er nødvendig.
            </p>
          </div>
        </section>

        {/* Signs you need help */}
        <section className="border-b border-slate-100 px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12">
              <p className="mb-3 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
                Kjenner du igjen dette?
              </p>
              <h2 className="text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
                Tegn på at nettsiden din{" "}
                <span className="font-semibold">trenger hjelp</span>
              </h2>
            </div>

            <div className="grid gap-px bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
              {signs.map((sign, i) => (
                <div key={sign} className="flex items-start gap-4 bg-white p-6">
                  <span
                    className="mt-0.5 shrink-0 inline-block px-2 py-0.5 font-mono text-xs font-medium"
                    style={{ background: "#a7ea00", color: "#0f172a" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm font-light leading-relaxed text-slate-600">
                    {sign}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What we can do */}
        <section className="border-b border-slate-100 bg-slate-950 px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12">
              <p className="mb-3 text-xs font-medium tracking-[0.2em] text-slate-500 uppercase">
                Hva vi kan gjøre
              </p>
              <h2 className="text-2xl font-light tracking-tight text-white sm:text-3xl">
                Forbedringer vi gjennomfører —{" "}
                <span className="font-semibold">målrettet og konkret</span>
              </h2>
            </div>

            <div className="grid gap-px bg-slate-800 sm:grid-cols-2 lg:grid-cols-3">
              {improvements.map(({ id, title, body }) => (
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

        {/* Process */}
        <section className="border-b border-slate-100 bg-slate-50 px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12">
              <p className="mb-3 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
                Slik gjør vi det
              </p>
              <h2 className="text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
                En prosess som starter med{" "}
                <span className="font-semibold">å forstå problemet</span>
              </h2>
            </div>

            <div className="space-y-px bg-slate-200">
              {process.map(({ step, title, desc }) => (
                <div
                  key={step}
                  className="flex items-start gap-8 bg-white px-8 py-7"
                >
                  <div className="shrink-0">
                    <span
                      className="inline-block px-2 py-0.5 font-mono text-xs font-medium"
                      style={{ background: "#a7ea00", color: "#0f172a" }}
                    >
                      {step}
                    </span>
                  </div>
                  <div>
                    <h3 className="mb-1.5 text-sm font-semibold tracking-tight text-slate-900">
                      {title}
                    </h3>
                    <p className="text-sm font-light leading-relaxed text-slate-500">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
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
              Usikker på hva som er galt?
            </p>
            <h2 className="text-3xl font-light tracking-tight text-white sm:text-4xl">
              Send oss lenken
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-light text-slate-400">
              Vi tar en kikk og gir deg en ærlig vurdering av hva vi ser, hva
              det koster å fikse og om det er verdt det.
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
