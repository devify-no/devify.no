import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hvilke verktøy vi bruker i moderne webutvikling",
  description:
    "En gjennomgang av stacken Dev AS bruker — Next.js, TypeScript, Tailwind CSS, Vercel og mer — og den profesjonelle begrunnelsen bak hvert valg.",
};

// Tool cards — unique element: first-person "we use this because"
const tools = [
  {
    name: "Next.js",
    category: "Rammeverk",
    why: "Next.js gir oss server-side rendering og statisk generering ut av boksen. Det betyr sider som lastes raskt og indekseres riktig av Google — uten å måtte konfigurere alt fra bunnen av. React alene er ikke nok for profesjonelle nettsider; Next.js er det naturlige neste steget.",
    replaces: "Ren React SPA, WordPress",
    url: "nextjs.org",
  },
  {
    name: "TypeScript",
    category: "Språk",
    why: "TypeScript er JavaScript med typesikkerhet. Feil oppdages under utvikling i editoren, ikke i produksjon hos kunden. For prosjekter som lever over tid og skal vedlikeholdes av andre, er TypeScript ikke en luksus — det er en forutsetning for kode som kan forstås om et år.",
    replaces: "Vanilla JavaScript",
    url: "typescriptlang.org",
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    why: "Tailwind gir oss et konsistent design-system direkte i markup, uten at CSS-filer vokser seg ukontrollerbare. Resultatet er forutsigbar styling, ingen naming-konflikter og produksjonsbygg med minimal CSS-størrelse. Det er raskere enn custom CSS og mer kontrollerbart enn komponentbiblioteker.",
    replaces: "Custom CSS, Bootstrap, styled-components",
    url: "tailwindcss.com",
  },
  {
    name: "Vercel",
    category: "Hosting",
    why: "Vercel er bygget av de samme som lager Next.js — og det synes. Zero-config deployment, automatisk preview-URLer for hvert branch, global CDN og innebygd støtte for edge functions. For Next.js-prosjekter er det det enkleste stedet å hoste uten å miste ytelse.",
    replaces: "Tradisjonell VPS, Heroku, Netlify",
    url: "vercel.com",
  },
  {
    name: "Git og GitHub",
    category: "Versjonskontroll",
    why: "All kode vi skriver lever i Git. Det gir full historikk, mulighet til å rulle tilbake, og transparens for kunden. GitHub er samarbeidsplattformen — der kunden kan se koden, og der vi kobler deployment til produksjon via push til main.",
    replaces: "FTP-opplasting, ingen versjonskontroll",
    url: "github.com",
  },
  {
    name: "Sanity",
    category: "CMS",
    why: "For prosjekter der kunden skal oppdatere innhold, bruker vi Sanity som headless CMS. Det gir en brukervennlig redigeringsflate uten å binde oss til WordPress sin arkitektur. Innhold og kode er separert — kunden eier innholdet, vi eier koden.",
    replaces: "WordPress, Squarespace",
    url: "sanity.io",
  },
];

const principles = [
  {
    label: "Etablert over trendy",
    desc: "Vi velger verktøy med bred community-støtte og lang levetid fremfor det siste rammeverket som ble populært forrige kvartal.",
  },
  {
    label: "Åpent over proprietært",
    desc: "Løsninger du kan ta med deg til en annen leverandør. Ingen lock-in til vårt eget system eller plattform.",
  },
  {
    label: "Ytelse innebygd",
    desc: "Verktøyene vi bruker er valgt delvis fordi de gjør det enklere å levere raske sider med gode Lighthouse-scorer.",
  },
  {
    label: "Vedlikeholdbart",
    desc: "Kode vi skriver i dag skal fortsatt være forståelig om to år — for oss, for kunden, og for en ny leverandør.",
  },
];

const cornerBrackets = [
  "top-6 left-6 border-l-2 border-t-2",
  "top-6 right-6 border-r-2 border-t-2",
  "bottom-6 left-6 border-l-2 border-b-2",
  "bottom-6 right-6 border-r-2 border-b-2",
];

export default function VerktoyWebutviklingPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-slate-100">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <Link
            href="/ressurser"
            className="flex items-center gap-2 text-sm font-light text-slate-500 transition-colors hover:text-slate-900"
          >
            ← Ressurser
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

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-slate-100 px-6 py-20 sm:py-28">
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
            className="pointer-events-none absolute top-0 right-0 h-[450px] w-[450px] opacity-20"
            style={{
              background:
                "radial-gradient(ellipse at top right, #a7ea00 0%, transparent 65%)",
            }}
            aria-hidden="true"
          />
          <div className="relative z-10 mx-auto max-w-3xl">
            <div className="mb-5 flex items-center gap-4">
              <span
                className="inline-block px-2.5 py-1 font-mono text-xs font-medium"
                style={{ background: "#a7ea00", color: "#0f172a" }}
              >
                Guide
              </span>
              <span className="text-xs font-light text-slate-400">
                Ca. 5 minutters lesing
              </span>
            </div>
            <h1 className="text-4xl leading-tight font-light tracking-tight text-slate-900 sm:text-5xl">
              Hvilke verktøy vi bruker
              <br />
              <span className="font-semibold">i moderne webutvikling</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed font-light text-slate-500">
              Ikke en nøytral kursliste, men en faktisk redegjørelse for
              hvilke verktøy vi bruker hos Dev AS — og den konkrete
              begrunnelsen bak hvert valg.
            </p>
          </div>
        </section>

        {/* Tool cards — unique element */}
        <section className="border-b border-slate-100 bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
              Vår stack
            </p>
            <h2 className="mb-12 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
              Verktøyene vi bruker —{" "}
              <span className="font-medium">og hvorfor</span>
            </h2>

            <div className="space-y-px bg-slate-200">
              {tools.map(({ name, category, why, replaces, url }) => (
                <div
                  key={name}
                  className="grid gap-0 bg-white sm:grid-cols-[180px_1fr]"
                >
                  {/* Left: tool identity */}
                  <div className="flex flex-col justify-between border-b border-slate-100 p-6 sm:border-b-0 sm:border-r">
                    <div>
                      <p className="text-base font-medium text-slate-900">
                        {name}
                      </p>
                      <p className="mt-1 text-xs font-medium tracking-[0.15em] text-slate-400 uppercase">
                        {category}
                      </p>
                    </div>
                    <div className="mt-4">
                      <p className="text-xs font-light text-slate-400">
                        Erstatter
                      </p>
                      <p className="mt-0.5 text-xs font-light text-slate-400 line-through">
                        {replaces}
                      </p>
                      <a
                        href={`https://${url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 block font-mono text-xs text-slate-400 transition-colors hover:text-slate-600"
                      >
                        {url} ↗
                      </a>
                    </div>
                  </div>

                  {/* Right: why we use it */}
                  <div className="p-6">
                    <p className="mb-2 text-xs font-medium tracking-[0.1em] text-slate-400 uppercase">
                      Vi bruker det fordi
                    </p>
                    <p className="text-sm leading-relaxed font-light text-slate-600">
                      {why}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Principles behind our choices */}
        <section className="border-b border-slate-100">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
              Filosofi
            </p>
            <h2 className="mb-12 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
              Prinsippene bak{" "}
              <span className="font-medium">valgene</span>
            </h2>
            <div className="grid gap-px bg-slate-200 sm:grid-cols-2">
              {principles.map(({ label, desc }) => (
                <div key={label} className="bg-white p-7">
                  <h3 className="mb-2 text-sm font-medium text-slate-900">
                    {label}
                  </h3>
                  <p className="text-sm leading-relaxed font-light text-slate-500">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Context */}
        <section className="mx-auto max-w-3xl px-6 py-20">
          <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
            For kunden
          </p>
          <h2 className="mb-8 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
            Hva betyr verktøyvalg{" "}
            <span className="font-medium">for deg som kunde?</span>
          </h2>
          <div className="space-y-5 text-sm leading-relaxed font-light text-slate-600">
            <p>
              Verktøyene vi bruker er ikke bare tekniske preferanser — de
              påvirker hva du ender opp med. Next.js og TypeScript betyr
              kode som er lettere å overlevere til en annen utvikler. Vercel
              betyr at du kan bytte hosting uten å starte fra scratch. Sanity
              betyr at du kan redigere innhold uten å trenge oss til hvert
              lille ord.
            </p>
            <p>
              Vi nevner dette ikke for å imponere, men fordi vi mener det er
              relevant at du forstår hva du kjøper. En nettside er ikke bare
              et visuelt produkt — det er kode som skal leve og vedlikeholdes
              over tid.
            </p>
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
              className={`pointer-events-none absolute h-8 w-8 border-[#a7ea00] opacity-20 ${cls}`}
              aria-hidden="true"
            />
          ))}
          <div className="relative z-10 mx-auto max-w-2xl px-6 py-24 text-center">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-500 uppercase">
              Vil du se det i praksis?
            </p>
            <h2 className="text-3xl font-light tracking-tight text-white sm:text-4xl">
              Vi bruker disse verktøyene på hvert prosjekt vi leverer
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-light text-slate-400">
              Ta kontakt for å snakke om hva vi kan bygge for deg.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/#kontakt"
                className="group inline-flex items-center gap-2 bg-[#a7ea00] px-8 py-3.5 text-sm font-medium tracking-wide text-slate-950 transition-all hover:bg-white"
              >
                Ta kontakt
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
              </Link>
              <Link
                href="/ressurser"
                className="text-sm font-light text-slate-400 transition-colors hover:text-slate-300"
              >
                ← Tilbake til ressurser
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 bg-slate-950">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-8">
          <p className="text-xs font-light text-slate-600">
            Dev AS © 2018–{new Date().getFullYear()}
          </p>
          <div className="flex items-center gap-6">
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
      </footer>
    </div>
  );
}
