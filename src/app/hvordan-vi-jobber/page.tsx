import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hvordan vi jobber — prosess og samarbeidsform | Dev AS",
  description:
    "Fra første samtale til ferdig nettside. Slik ser et typisk prosjekt ut hos oss: konkret scope, direkte kommunikasjon og ingen overraskelser.",
};

const steps = [
  {
    step: "01",
    title: "Første samtale",
    desc: "Vi snakker gjennom hva du trenger. Ingen salgsscript — bare spørsmål og svar. Vi prøver å forstå hva du faktisk trenger, ikke bare hva du ber om.",
  },
  {
    step: "02",
    title: "Tilbud og scope",
    desc: "Du får et skriftlig tilbud med konkret leveranse og fast pris. Vi beskriver nøyaktig hva som er inkludert og hva som ikke er det. Ingen dynamisk prising som eskalerer underveis.",
  },
  {
    step: "03",
    title: "Designutkast",
    desc: "Vi starter med struktur og flyt — ikke pixelperfekt design fra time én. Du gir tilbakemelding tidlig, og vi justerer før vi er dypt nedi koden.",
  },
  {
    step: "04",
    title: "Utvikling",
    desc: "Du har løpende tilgang til fremdrift. Spørsmål besvares direkte. Endringer underveis håndteres pragmatisk — ikke formelt gjennom et ticketsystem.",
  },
  {
    step: "05",
    title: "Gjennomgang og testing",
    desc: "Vi går gjennom siden sammen før lansering. Ytelse, tilgjengelighet, mobilvisning, SEO-grunnmur. Ikke en sjekkliste for syns skyld — faktiske tester.",
  },
  {
    step: "06",
    title: "Lansering",
    desc: "Vi håndterer DNS-pek, SSL og deployment. Du slipper å koordinere mellom domeneregistrar, hosting og oss.",
  },
  {
    step: "07",
    title: "Etter lansering",
    desc: "Vi er tilgjengelige for spørsmål og videre arbeid. Ikke via en support-portal — via en melding. Direkte.",
  },
];

const principles = [
  {
    id: "A",
    title: "Ærlighet om scope",
    body: "Hvis noe du vil ha er urealistisk innenfor budsjettet, sier vi det rett ut. Ikke etter halvparten av timene er brukt.",
  },
  {
    id: "B",
    title: "Én ansvarlig",
    body: "Én person eier leveransen fra start til slutt. Du vet hvem du skal kontakte og hvem som faktisk svarer.",
  },
  {
    id: "C",
    title: "Dokumentasjon som fungerer",
    body: "Du får det du trenger for å bruke og vedlikeholde siden. Ikke en 40-siders rapport — nyttig, konkret informasjon.",
  },
  {
    id: "D",
    title: "Du eier alt",
    desc: "Kode, innhold, domene, hosting-tilgang. Ingenting holdes tilbake som forhandlingskort.",
    body: "Kode, innhold, domene, hosting-tilgang. Ingenting holdes tilbake som forhandlingskort.",
  },
];

const cornerBrackets = [
  "top-6 left-6 border-l-2 border-t-2",
  "top-6 right-6 border-r-2 border-t-2",
  "bottom-6 left-6 border-l-2 border-b-2",
  "bottom-6 right-6 border-r-2 border-b-2",
];

export default function HvordanViJobberPage() {
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
              Dev AS — prosess
            </p>
            <h1 className="text-4xl font-light leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Slik jobber{" "}
              <span className="font-semibold">vi</span>
            </h1>
            <p className="mt-3 text-2xl font-light tracking-tight text-slate-400 sm:text-3xl">
              Fra første samtale til ferdig nettside
            </p>
            <p className="mt-8 max-w-xl text-lg leading-relaxed font-light text-slate-500">
              Ingen overraskelser, ingen unødvendige runder. Et
              nettstedsprosjekt bør ikke være komplisert — og hos oss er det
              det ikke.
            </p>
          </div>
        </section>

        {/* Process steps */}
        <section className="border-b border-slate-100 bg-slate-50 px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12">
              <p className="mb-3 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
                Prosjektforløpet
              </p>
              <h2 className="text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
                Steg for steg —{" "}
                <span className="font-semibold">hva som skjer</span>
              </h2>
            </div>

            <div className="space-y-px bg-slate-200">
              {steps.map(({ step, title, desc }) => (
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

        {/* Principles */}
        <section className="border-b border-slate-100 bg-slate-950 px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12">
              <p className="mb-3 text-xs font-medium tracking-[0.2em] text-slate-500 uppercase">
                Prinsippene bak
              </p>
              <h2 className="text-2xl font-light tracking-tight text-white sm:text-3xl">
                Hva vi holder fast på —{" "}
                <span className="font-semibold">uansett prosjekt</span>
              </h2>
            </div>

            <div className="grid gap-px bg-slate-800 sm:grid-cols-2">
              {principles.map(({ id, title, body }) => (
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

        {/* Honest note */}
        <section className="border-b border-slate-100 px-6 py-20">
          <div className="mx-auto max-w-3xl">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
              Ærlig sagt
            </p>
            <h2 className="mb-8 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
              Det er ikke alltid lineært
            </h2>
            <div className="space-y-5 text-sm leading-relaxed font-light text-slate-600">
              <p>
                Prosjekter er sjelden perfekt sekvensielle. Noen ganger oppdager
                vi tekniske begrensninger underveis som endrer rekkefølgen. Noen
                ganger vil du endre retning etter å ha sett et utkast. Det er
                greit.
              </p>
              <p>
                Det vi garanterer er at du alltid vet hvor vi er, hva som gjenstår
                og hva det koster hvis retningen endres. Ingen overraskelser på
                slutten.
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
              Klar for å starte?
            </p>
            <h2 className="text-3xl font-light tracking-tight text-white sm:text-4xl">
              Ta en prat med oss
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-light text-slate-400">
              Første samtale er uforpliktende. Vi stiller de riktige spørsmålene
              og gir deg et ærlig svar på hva vi kan gjøre for deg.
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
