import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hva er de grunnleggende teknologiene for webutvikling?",
  description:
    "En gjennomgang av de teknologiske lagene som utgjør en moderne nettside — fra HTML og CSS til rammeverk, databaser og hosting.",
};

// The stack layers — unique visual element
const stackLayers = [
  {
    layer: "01",
    name: "HTML",
    role: "Struktur",
    desc: "HyperText Markup Language definerer innholdet og strukturen på en side. Overskrifter, avsnitt, lenker, bilder, skjemaer — alt dette er HTML. Riktig HTML er ikke bare teknisk korrekthet; det er grunnlaget for SEO, tilgjengelighet og lesbarhet for søkemotorer.",
    example: "<h1>, <nav>, <article>, <button>",
  },
  {
    layer: "02",
    name: "CSS",
    role: "Presentasjon",
    desc: "Cascading Style Sheets styrer utseendet: farger, typografi, layout, responsivt design og animasjoner. Moderne CSS med custom properties og grid/flexbox har erstattet mye av det som tidligere krevde JavaScript eller tredjepartsbiblioteker.",
    example: "Grid, Flexbox, Custom Properties, Media Queries",
  },
  {
    layer: "03",
    name: "JavaScript",
    role: "Interaktivitet",
    desc: "JavaScript gjør sider dynamiske — validering av skjemaer, henting av data uten sideoppdatering, animasjoner og brukerinteraksjon. I dag kjører JavaScript også på server-siden (Node.js), som visker ut grensen mellom frontend og backend.",
    example: "DOM-manipulasjon, fetch(), event handlers",
  },
  {
    layer: "04",
    name: "Rammeverk",
    role: "Skalerbarhet",
    desc: "Rammeverk som React, Next.js, Vue og Svelte gir struktur til JavaScript-kode og gjør det enklere å bygge komplekse brukergrensesnitt. Next.js legger til server-side rendering, routing og API-ruter oppå React, og er i dag en standard for profesjonelle webapplikasjoner.",
    example: "React, Next.js, Vue, Svelte",
  },
  {
    layer: "05",
    name: "Database",
    role: "Persistens",
    desc: "De fleste nettsider trenger å lagre data — brukerinformasjon, innlegg, produkter. Relasjonsdatabaser (PostgreSQL, MySQL) er strukturerte og passer for de fleste formål. Dokument-databaser (MongoDB) passer bedre for ustrukturerte data. CMS-er som Sanity og Contentful er et brukervennlig lag oppå database-lagringen.",
    example: "PostgreSQL, Sanity, Contentful, Supabase",
  },
  {
    layer: "06",
    name: "Hosting og infrastruktur",
    role: "Leveranse",
    desc: "Koden må kjøre et sted. Moderne hosting-plattformer som Vercel og Netlify gjør det enkelt å distribuere Next.js-applikasjoner globalt via CDN, med automatisk skalering og null konfigurasjon. Tradisjonelle VPS-løsninger gir mer kontroll, men krever mer drift.",
    example: "Vercel, Netlify, AWS, VPS",
  },
];

const howItFitsTogehter = [
  {
    title: "Statiske nettsider",
    desc: "HTML, CSS og minimal JavaScript. Rask, billig å hoste, ingen database. Passer for presentasjonsnettsider og portaler uten dynamisk innhold.",
  },
  {
    title: "Server-rendered applikasjoner",
    desc: "Next.js henter data fra database eller API på serveren og sender ferdig HTML til nettleseren. God for SEO, rask innlasting, og passer for de fleste bedriftsnettsider.",
  },
  {
    title: "Single Page Applications (SPA)",
    desc: "Siden lastes én gang, og React oppdaterer innholdet dynamisk uten full sideoppdatering. Rask brukeropplevelse, men krever mer arbeid for god SEO.",
  },
  {
    title: "Headless CMS",
    desc: "Innhold administreres i et eget system (Sanity, Contentful) og hentes via API. Gir ikke-tekniske brukere mulighet til å oppdatere innhold uten å røre koden.",
  },
];

const cornerBrackets = [
  "top-6 left-6 border-l-2 border-t-2",
  "top-6 right-6 border-r-2 border-t-2",
  "bottom-6 left-6 border-l-2 border-b-2",
  "bottom-6 right-6 border-r-2 border-b-2",
];

export default function TeknologierWebutviklingPage() {
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
                Ca. 7 minutters lesing
              </span>
            </div>
            <h1 className="text-4xl leading-tight font-light tracking-tight text-slate-900 sm:text-5xl">
              Hva er de grunnleggende
              <br />
              <span className="font-semibold">teknologiene for webutvikling?</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed font-light text-slate-500">
              En moderne nettside er bygget i lag. Her er hva hvert lag
              gjør — og hvorfor valgene som tas her påvirker alt fra
              fart og SEO til vedlikeholdskostnader.
            </p>
          </div>
        </section>

        {/* Stack layers — unique visual element */}
        <section className="border-b border-slate-100 bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
              Teknologistacken
            </p>
            <h2 className="mb-12 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
              De seks lagene i en{" "}
              <span className="font-medium">moderne nettside</span>
            </h2>

            <div className="space-y-px bg-slate-200">
              {stackLayers.map(({ layer, name, role, desc, example }) => (
                <div
                  key={layer}
                  className="grid gap-0 bg-white sm:grid-cols-[200px_1fr]"
                >
                  {/* Left: layer identity */}
                  <div className="flex flex-col justify-between border-b border-slate-100 p-6 sm:border-b-0 sm:border-r">
                    <div>
                      <span
                        className="mb-3 inline-block font-mono text-xs font-medium"
                        style={{ color: "#a7ea00" }}
                      >
                        {layer}
                      </span>
                      <p className="text-lg font-medium tracking-tight text-slate-900">
                        {name}
                      </p>
                      <p className="mt-1 text-xs font-medium tracking-[0.15em] text-slate-400 uppercase">
                        {role}
                      </p>
                    </div>
                    <p className="mt-4 font-mono text-xs text-slate-400">
                      {example}
                    </p>
                  </div>

                  {/* Right: description */}
                  <div className="p-6">
                    <p className="text-sm leading-relaxed font-light text-slate-600">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it fits together */}
        <section className="border-b border-slate-100">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
              I praksis
            </p>
            <h2 className="mb-12 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
              Slik settes lagene{" "}
              <span className="font-medium">sammen</span>
            </h2>
            <div className="grid gap-px bg-slate-200 sm:grid-cols-2">
              {howItFitsTogehter.map(({ title, desc }) => (
                <div key={title} className="bg-white p-7">
                  <h3 className="mb-2 text-sm font-medium text-slate-900">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed font-light text-slate-500">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Professional context */}
        <section className="mx-auto max-w-3xl px-6 py-20">
          <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
            Profesjonell praksis
          </p>
          <h2 className="mb-8 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
            Valg av teknologi er{" "}
            <span className="font-medium">ikke nøytralt</span>
          </h2>
          <div className="space-y-5 text-sm leading-relaxed font-light text-slate-600">
            <p>
              De teknologiske valgene som tas tidlig i et prosjekt bestemmer
              hvor enkelt det er å vedlikeholde, skalere og overlevere løsningen
              til noen andre. En nettside bygget på proprietær teknologi er
              vanskeligere å flytte. En nettside bygget på veldefinerte, åpne
              standarder er varig.
            </p>
            <p>
              Hos Dev AS bruker vi etablerte verktøy med bred community-støtte —
              ikke fordi vi følger trender, men fordi det betyr at løsningene
              vi leverer kan driftes, forstås og videreutvikles av hvem som
              helst. Du eier ikke bare koden; du eier noe som faktisk kan
              overleveres.
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
              Trenger du en nettside?
            </p>
            <h2 className="text-3xl font-light tracking-tight text-white sm:text-4xl">
              Vi bygger med riktig teknologi for din situasjon
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-light text-slate-400">
              Ta kontakt for en uforpliktende prat om hva som passer.
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
