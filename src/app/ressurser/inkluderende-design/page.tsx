import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Webutvikling og inkluderende design: hvorfor det betyr noe i praksis",
  description:
    "Universell utforming, WCAG, kontraster, tastaturnavigasjon og semantisk HTML — og hva tilgjengelighet gjør for brukere, bedrifter og søkemotorer.",
};

// WCAG criteria checklist — unique visual element
const wcagCriteria = [
  {
    id: "1.1.1",
    level: "A",
    label: "Alternativ tekst",
    desc: "Alle bilder som formidler innhold må ha en beskrivende alt-tekst. Dekorative bilder skal ha tom alt-tekst så skjermlesere hopper over dem.",
    example: "alt=\"Portrettfoto av Moritz, grunnlegger av Dev AS\"",
    category: "Oppfattbar",
  },
  {
    id: "1.3.1",
    level: "A",
    label: "Semantisk struktur",
    desc: "Bruk HTML-elementer etter deres betydning: <h1>–<h6> for overskrifter, <nav> for navigasjon, <main> for hovedinnhold. Ikke bruk <div> for alt.",
    example: "<h1>, <nav>, <main>, <article>, <button>",
    category: "Oppfattbar",
  },
  {
    id: "1.4.3",
    level: "AA",
    label: "Fargekontrast",
    desc: "Normal tekst trenger kontrastforhold på minst 4,5:1 mot bakgrunnen. Stor tekst (18px+) trenger 3:1. Dette er ikke bare regler — dårlig kontrast gjør tekst ulesbar i sollys og for synshemmede.",
    example: "Mørk tekst på lys bakgrunn: ✓   Lys grå på hvit: ✗",
    category: "Oppfattbar",
  },
  {
    id: "2.1.1",
    level: "A",
    label: "Tastaturnavigasjon",
    desc: "All funksjonalitet på siden må kunne brukes kun med tastatur — Tab for navigasjon, Enter/Space for aktivering. Brukere som ikke kan bruke mus er avhengige av dette.",
    example: "Test ved å navigere siden din kun med Tab-tasten",
    category: "Opererbar",
  },
  {
    id: "2.4.7",
    level: "AA",
    label: "Synlig fokusindikator",
    desc: "Det must alltid være synlig hvilken knapp eller lenke som er aktiv ved tastaturnavigasjon. Å fjerne outline med CSS uten å erstatte det er en av de vanligste tilgjengelighetsfeilene.",
    example: ":focus { outline: 2px solid #a7ea00; }",
    category: "Opererbar",
  },
  {
    id: "3.3.1",
    level: "A",
    label: "Skjemafeil",
    desc: "Feilmeldinger i skjemaer må beskrive hva som er feil og hvordan det rettes. «Ugyldig inndata» er ikke en nyttig feilmelding.",
    example: "«E-postadressen ser ikke riktig ut. Sjekk at du har inkludert @.»",
    category: "Forståelig",
  },
  {
    id: "4.1.2",
    level: "A",
    label: "Navn, rolle, verdi",
    desc: "Alle interaktive elementer må ha et navn som skjermlesere kan lese opp, en korrekt rolle (button, link, checkbox) og en verdi der det er relevant.",
    example: "<button aria-label=\"Lukk dialogboks\">×</button>",
    category: "Robust",
  },
];

const businessCase = [
  {
    label: "Juridisk krav",
    desc: "Norsk lov (Likestillings- og diskrimineringsloven, IKT-forskriften) krever at kommersielle nettsider tilfredsstiller WCAG 2.1 nivå A og AA. Manglende etterlevelse kan medføre sanksjoner.",
  },
  {
    label: "Bredere publikum",
    desc: "Rundt 15–20 % av befolkningen har en eller annen form for funksjonsnedsettelse. Tilgjengelig design inkluderer disse — og forbedrer opplevelsen for alle.",
  },
  {
    label: "Bedre SEO",
    desc: "Google leser nettsider omtrent som en skjermleser: tekst, semantikk, struktur. En tilgjengelig nettside er som regel en godt indeksert nettside.",
  },
  {
    label: "Raskere sider",
    desc: "Mange tilgjengelighetsmessige god praksis — semantisk HTML, riktig bildeoptimalisering, fokus på innholdsstruktur — overlapper direkte med ytelsesoptimalisering.",
  },
];

const categoryColors: Record<string, string> = {
  Oppfattbar: "bg-slate-100 text-slate-600",
  Opererbar: "bg-slate-100 text-slate-600",
  Forståelig: "bg-slate-100 text-slate-600",
  Robust: "bg-slate-100 text-slate-600",
};

const cornerBrackets = [
  "top-6 left-6 border-l-2 border-t-2",
  "top-6 right-6 border-r-2 border-t-2",
  "bottom-6 left-6 border-l-2 border-b-2",
  "bottom-6 right-6 border-r-2 border-b-2",
];

export default function InkluderendeDesignPage() {
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
                Ca. 6 minutters lesing
              </span>
            </div>
            <h1 className="text-4xl leading-tight font-light tracking-tight text-slate-900 sm:text-5xl">
              Webutvikling og inkluderende design:
              <br />
              <span className="font-semibold">hvorfor det betyr noe i praksis</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed font-light text-slate-500">
              Universell utforming er ikke et compliance-kryss. Det er god
              webutvikling — og det betyr noe for brukere, søkemotorer og
              norsk lov.
            </p>
          </div>
        </section>

        {/* Editorial intro */}
        <section className="mx-auto max-w-3xl px-6 py-20">
          <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
            Hva det handler om
          </p>
          <h2 className="mb-8 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
            Tilgjengelighet er ikke et tillegg —
            <br />
            <span className="font-medium">det er et grunnprinsipp</span>
          </h2>
          <div className="space-y-5 text-sm leading-relaxed font-light text-slate-600">
            <p>
              Mange behandler universell utforming (UU) som noe man legger til
              etter at siden er ferdig. Det er feil tilnærming. Tilgjengelighet
              er bygget inn i grunnstrukturen til siden — i HTML-semantikken,
              fargevalgene, typografien og interaksjonsdesignet.
            </p>
            <p>
              WCAG (Web Content Accessibility Guidelines) er den internasjonale
              standarden for tilgjengelighet på nett. I Norge er WCAG 2.1
              nivå A og AA et juridisk krav for kommersielle nettsider, nedfelt
              i IKT-forskriften. Det gjelder deg.
            </p>
            <p>
              Men utover loven: en nettside som er designet for alle er
              vanligvis bedre for alle. Klarere hierarki, bedre kontraster,
              enklere navigasjon — disse tingene er ikke spesielle behov.
              Det er god design.
            </p>
          </div>
        </section>

        {/* WCAG criteria — unique visual element */}
        <section className="border-t border-slate-100 bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
              WCAG 2.1 i praksis
            </p>
            <h2 className="mb-3 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
              De viktigste kriteriene —{" "}
              <span className="font-medium">og hva de betyr</span>
            </h2>
            <p className="mb-12 text-sm leading-relaxed font-light text-slate-500">
              WCAG er organisert i fire prinsipper: Oppfattbar, Opererbar,
              Forståelig og Robust. Her er de kriteriene vi ser mangler oftest.
            </p>

            <div className="space-y-px bg-slate-200">
              {wcagCriteria.map(({ id, level, label, desc, example, category }) => (
                <div
                  key={id}
                  className="grid gap-0 bg-white sm:grid-cols-[160px_1fr]"
                >
                  {/* Left: criterion identity */}
                  <div className="flex flex-col gap-2 border-b border-slate-100 p-5 sm:border-b-0 sm:border-r">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-slate-400">
                        {id}
                      </span>
                      <span
                        className="inline-block rounded px-1.5 py-0.5 font-mono text-xs font-medium"
                        style={
                          level === "A"
                            ? { background: "#f1f5f9", color: "#64748b" }
                            : { background: "#a7ea00", color: "#0f172a" }
                        }
                      >
                        {level}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-slate-900">{label}</p>
                    <p className={`inline-block self-start rounded px-2 py-0.5 text-xs font-light ${categoryColors[category]}`}>
                      {category}
                    </p>
                  </div>

                  {/* Right: description + example */}
                  <div className="p-5">
                    <p className="mb-3 text-sm leading-relaxed font-light text-slate-600">
                      {desc}
                    </p>
                    <p className="font-mono text-xs text-slate-400">{example}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm font-light text-slate-400">
              Nivå{" "}
              <span className="font-mono">A</span> = minimumskrav.
              Nivå{" "}
              <span
                className="inline-block rounded px-1.5 font-mono text-xs font-medium"
                style={{ background: "#a7ea00", color: "#0f172a" }}
              >
                AA
              </span>{" "}
              = det norsk lov krever for kommersielle nettsider.
            </p>
          </div>
        </section>

        {/* Business case */}
        <section className="border-t border-slate-100">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
              Hvorfor bry seg
            </p>
            <h2 className="mb-12 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
              Det er ikke bare det rette å gjøre —{" "}
              <span className="font-medium">det lønner seg</span>
            </h2>
            <div className="grid gap-px bg-slate-200 sm:grid-cols-2">
              {businessCase.map(({ label, desc }) => (
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

        {/* Lighthouse connection */}
        <section className="border-t border-slate-100 bg-slate-50">
          <div className="mx-auto max-w-3xl px-6 py-20">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
              Mål, ikke synsing
            </p>
            <h2 className="mb-8 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
              Lighthouse-tilgjengelighet er{" "}
              <span className="font-medium">målbar</span>
            </h2>
            <div className="space-y-5 text-sm leading-relaxed font-light text-slate-600">
              <p>
                Google Lighthouse har en egen tilgjengelighets-kategori som
                tester en rekke WCAG-kriterier automatisk: kontrast, alt-tekst,
                form-labels, ARIA-bruk og mer. Det er ikke en fullstendig test —
                noen ting krever manuell gjennomgang — men det er et godt
                utgangspunkt.
              </p>
              <p>
                Vi dokumenterer tilgjengelighetsscorer for prosjektene vi
                leverer, på samme måte som ytelse, SEO og beste praksis. Det
                er ikke et selvrosende tiltak — det er en form for ansvarlighet
                overfor det vi leverer.
              </p>
              <p>
                En score på 100 i tilgjengelighet er mulig og bør være målet.
                Det betyr ikke at alt er perfekt — men det betyr at de vanligste
                og mest målbare problemene er løst.
              </p>
            </div>
            <div className="mt-8">
              <a
                href="https://pagespeed.web.dev/analysis?url=https://www.devify.no"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-light text-slate-500 transition-colors hover:text-slate-800"
              >
                Se Lighthouse-rapport for devify.no ↗
              </a>
            </div>
          </div>
        </section>

        {/* Related reading */}
        <section className="border-t border-slate-100 px-6 py-12">
          <div className="mx-auto max-w-5xl">
            <p className="mb-5 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
              Les også
            </p>
            <div className="flex flex-col gap-5 sm:flex-row sm:gap-12">
              <Link
                href="/ressurser/ytelse-tilgjengelighet-seo"
                className="group flex items-start gap-3 text-sm text-slate-600 transition-colors hover:text-slate-900"
              >
                <span className="mt-0.5 shrink-0 text-slate-300 transition-transform duration-200 group-hover:translate-x-0.5">
                  →
                </span>
                <span>
                  <span className="block font-medium text-slate-900 group-hover:text-slate-700">
                    Ytelse, tilgjengelighet og SEO henger sammen
                  </span>
                  <span className="text-xs font-light text-slate-400">
                    Faglig · 7 min lesing
                  </span>
                </span>
              </Link>
              <Link
                href="/filosofi"
                className="group flex items-start gap-3 text-sm text-slate-600 transition-colors hover:text-slate-900"
              >
                <span className="mt-0.5 shrink-0 text-slate-300 transition-transform duration-200 group-hover:translate-x-0.5">
                  →
                </span>
                <span>
                  <span className="block font-medium text-slate-900 group-hover:text-slate-700">
                    Prinsippene vi bygger etter
                  </span>
                  <span className="text-xs font-light text-slate-400">
                    Filosofi
                  </span>
                </span>
              </Link>
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
              className={`pointer-events-none absolute h-8 w-8 border-[#a7ea00] opacity-20 ${cls}`}
              aria-hidden="true"
            />
          ))}
          <div className="relative z-10 mx-auto max-w-2xl px-6 py-24 text-center">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-500 uppercase">
              Bygget inn fra start
            </p>
            <h2 className="text-3xl font-light tracking-tight text-white sm:text-4xl">
              Vi bygger tilgjengelighet inn — ikke på etterpå
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-light text-slate-400">
              Ta kontakt for å snakke om hva en tilgjengelig nettside betyr
              for din bedrift.
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
                href="/uten-byralag"
                className="text-xs font-light text-slate-600 transition-colors hover:text-slate-400"
              >
                Uten byrålag
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
