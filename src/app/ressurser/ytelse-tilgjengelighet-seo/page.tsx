import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ytelse, tilgjengelighet og SEO henger sammen — Dev AS",
  description:
    "Core Web Vitals, semantisk HTML og tilgjengelighet er ikke tre separate sjekklister. De er uttrykk for det samme underliggende prinsippet: en nettside som er bygget godt.",
};

const connections = [
  {
    from: "Ytelse",
    to: "SEO",
    desc: "Google bruker Core Web Vitals som direkte rankingfaktor. LCP, CLS og INP måler brukeropplevelse — og dårlig ytelse straffer plasseringen din i søkeresultater.",
  },
  {
    from: "Tilgjengelighet",
    to: "SEO",
    desc: "Google-crawleren leser nettsider omtrent som en skjermleser: semantisk HTML, logisk innholdsstruktur, meningsbærende lenketekster. En tilgjengelig nettside er som regel en godt indeksert nettside.",
  },
  {
    from: "Ytelse",
    to: "Tilgjengelighet",
    desc: "En rask nettside er også mer tilgjengelig. Brukere med eldre enheter, dårlig nettilgang eller kognitive utfordringer er de første som forlater en treg side. God ytelse er inkluderende.",
  },
];

const vitals = [
  {
    metric: "LCP",
    full: "Largest Contentful Paint",
    target: "< 2,5 sek",
    what: "Hvor lang tid tar det før det største innholdselementet på siden er synlig?",
    impact:
      "Direkte rankingfaktor. Treg LCP = dårlig brukeropplevelse + lavere SEO-score.",
  },
  {
    metric: "CLS",
    full: "Cumulative Layout Shift",
    target: "< 0,1",
    what: "Forskyves elementer på siden mens den lastes? Tekst som hopper, knapper som flytter seg.",
    impact:
      "Irriterende for brukere. Spesielt kritisk for klikk på mobil — og Google straffer det.",
  },
  {
    metric: "INP",
    full: "Interaction to Next Paint",
    target: "< 200 ms",
    what: "Hvor responsiv er siden til brukerinteraksjon? Klikk, tastetrykk, scrolling.",
    impact:
      "Erstattet FID fra 2024. Mål på om JavaScript-koden blokkerer interaksjoner.",
  },
  {
    metric: "TTFB",
    full: "Time to First Byte",
    target: "< 800 ms",
    what: "Hvor lang tid tar det fra nettleseren sender en forespørsel til den mottar det første byteet fra serveren?",
    impact:
      "Ikke en offisiell Core Web Vital, men en viktig indikator på server- og infrastrukturytelse.",
  },
];

const practicalChecklist = [
  {
    category: "HTML og struktur",
    items: [
      "Én <h1> per side som beskriver innholdet presist",
      "Logisk overskriftshierarki (h1 → h2 → h3, ingen hopp)",
      "Semantiske elementer: <nav>, <main>, <article>, <section>, <footer>",
      "Meningsbærende lenketekster — ikke «klikk her» eller «les mer»",
    ],
  },
  {
    category: "Bilder og media",
    items: [
      "Alt-tekst på alle innholdsbærende bilder",
      "Eksplisitt width og height-attributt for å unngå CLS",
      "Lazy loading på bilder under folden",
      "WebP-format med fallback",
    ],
  },
  {
    category: "Ytelse",
    items: [
      "Minifisert CSS og JavaScript",
      "Ingen blokkerende ressurser i <head>",
      'Fonter forhåndslastet med <link rel="preload">',
      "Statisk generering eller server-side rendering — ikke client-only rendering for innholdsider",
    ],
  },
  {
    category: "Tilgjengelighet",
    items: [
      "Tilstrekkelig fargekontrast (4,5:1 for normal tekst, 3:1 for stor tekst)",
      "Alle interaktive elementer tilgjengelige med tastatur",
      "Synlig fokusindikator på alle fokusbare elementer",
      "ARIA-attributter kun der de faktisk trengs — ikke som erstatning for semantisk HTML",
    ],
  },
];

const myths = [
  {
    myth: "«SEO handler om nøkkelord og metadata»",
    reality:
      "Metadata er viktig, men Google vurderer i dag primært brukeropplevelse: lastetid, struktur, relevans og autoritet. Nøkkelord uten god teknisk grunnmur gir lite.",
  },
  {
    myth: "«Tilgjengelighet er bare for blinde»",
    reality:
      "15–20 % av befolkningen har en eller annen form for funksjonsnedsettelse. Men tilgjengelig design forbedrer opplevelsen for alle: eldre enheter, dårlig lys, stress, svakt nettverk.",
  },
  {
    myth: "«Vi fikser ytelse etter lansering»",
    reality:
      "Ytelse er arkitektur. Å fikse det i etterkant betyr å rive opp fundamentet. En treg React-app som laster 4 MB JavaScript er ikke noe du optimaliserer — du bygger den om.",
  },
  {
    myth: "«PageSpeed 100 er urealistisk for ekte nettsider»",
    reality:
      "Det er absolutt mulig med Next.js og riktig arkitektur. Vi dokumenterer det for våre egne prosjekter. Det krever disiplin, men det er ikke magi.",
  },
];

const cornerBrackets = [
  "top-6 left-6 border-l-2 border-t-2",
  "top-6 right-6 border-r-2 border-t-2",
  "bottom-6 left-6 border-l-2 border-b-2",
  "bottom-6 right-6 border-r-2 border-b-2",
];

export default function YtelseTilgjengelighetSeoPage() {
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
                Faglig
              </span>
              <span className="text-xs font-light text-slate-400">
                Ca. 7 minutters lesing
              </span>
            </div>
            <h1 className="text-4xl leading-tight font-light tracking-tight text-slate-900 sm:text-5xl">
              Ytelse, tilgjengelighet og SEO <br />
              <span className="font-semibold">henger sammen</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed font-light text-slate-500">
              De behandles ofte som tre separate sjekklister med tre separate
              eksperter. Men de springer alle ut av det samme: en nettside som
              er bygget godt.
            </p>
          </div>
        </section>

        {/* Editorial intro */}
        <section className="mx-auto max-w-3xl px-6 py-20">
          <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
            Sammenhengen
          </p>
          <h2 className="mb-8 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
            Tre begreper — ett underliggende prinsipp
          </h2>
          <div className="space-y-5 text-sm leading-relaxed font-light text-slate-600">
            <p>
              Ytelse, tilgjengelighet og SEO behandles i mange organisasjoner
              som separate disipliner. Ytelsesoptimalisering er «noe utviklerne
              gjør». Tilgjengelighet er «juridisk compliance». SEO er «noe
              markedsavdelingen håndterer med plugins».
            </p>
            <p>
              Den inndelingen er feil, og den er kostbar. De tre fagområdene
              overlapper massivt — og de sterkeste forbedringene man kan gjøre
              for ett av dem, gir som regel gevinst i de to andre.
            </p>
            <p>
              Årsaken er enkel: alle tre handler om å lage en nettside som er
              lett å forstå, rask å bruke og strukturert på en logisk måte — for
              mennesker og for maskiner. Det er det samme problemet. Det er den
              samme løsningen.
            </p>
          </div>
        </section>

        {/* Connections */}
        <section className="border-t border-slate-100 bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
              Koblingene i praksis
            </p>
            <h2 className="mb-12 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
              Slik påvirker de hverandre
            </h2>
            <div className="grid gap-px bg-slate-200 sm:grid-cols-3">
              {connections.map(({ from, to, desc }) => (
                <div key={`${from}-${to}`} className="bg-white p-7">
                  <div className="mb-4 flex items-center gap-2">
                    <span
                      className="inline-block px-2 py-0.5 font-mono text-xs font-medium"
                      style={{ background: "#a7ea00", color: "#0f172a" }}
                    >
                      {from}
                    </span>
                    <span className="text-xs text-slate-400">→</span>
                    <span className="inline-block rounded bg-slate-100 px-2 py-0.5 font-mono text-xs font-medium text-slate-600">
                      {to}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed font-light text-slate-500">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Web Vitals */}
        <section className="border-t border-slate-100">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
              Målbare ytelseskrav
            </p>
            <h2 className="mb-3 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
              Core Web Vitals —{" "}
              <span className="font-medium">Googles ytelsesstandarder</span>
            </h2>
            <p className="mb-12 text-sm leading-relaxed font-light text-slate-500">
              Siden 2021 er Core Web Vitals en direkte rankingfaktor. Her er de
              fire nøkkelmålene du bør kjenne til.
            </p>

            <div className="space-y-px bg-slate-200">
              {vitals.map(({ metric, full, target, what, impact }) => (
                <div
                  key={metric}
                  className="grid bg-white sm:grid-cols-[100px_1fr_1fr]"
                >
                  <div className="flex flex-col justify-center gap-1.5 border-b border-slate-100 p-5 sm:border-r sm:border-b-0">
                    <span
                      className="inline-block self-start px-2 py-0.5 font-mono text-sm font-semibold"
                      style={{ background: "#a7ea00", color: "#0f172a" }}
                    >
                      {metric}
                    </span>
                    <p className="text-xs font-light text-slate-400">{full}</p>
                    <p className="font-mono text-xs font-medium text-slate-700">
                      {target}
                    </p>
                  </div>
                  <div className="border-b border-slate-100 p-5 sm:border-r sm:border-b-0">
                    <p className="mb-1 text-xs font-medium tracking-wide text-slate-400 uppercase">
                      Hva måles
                    </p>
                    <p className="text-sm leading-relaxed font-light text-slate-600">
                      {what}
                    </p>
                  </div>
                  <div className="p-5">
                    <p className="mb-1 text-xs font-medium tracking-wide text-slate-400 uppercase">
                      Praktisk betydning
                    </p>
                    <p className="text-sm leading-relaxed font-light text-slate-600">
                      {impact}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Practical checklist */}
        <section className="border-t border-slate-100 bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
              I praksis
            </p>
            <h2 className="mb-3 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
              Sjekklisten som dekker alle tre
            </h2>
            <p className="mb-12 text-sm leading-relaxed font-light text-slate-500">
              Det meste på denne listen forbedrer ytelse, tilgjengelighet og SEO
              samtidig. Det er ikke tilfeldig.
            </p>

            <div className="grid gap-8 sm:grid-cols-2">
              {practicalChecklist.map(({ category, items }) => (
                <div key={category}>
                  <p className="mb-4 text-xs font-medium tracking-[0.15em] text-slate-500 uppercase">
                    {category}
                  </p>
                  <ul className="space-y-2.5">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span
                          className="mt-0.5 shrink-0 text-sm leading-none"
                          style={{ color: "#a7ea00" }}
                          aria-hidden="true"
                        >
                          ✓
                        </span>
                        <span className="text-sm leading-relaxed font-light text-slate-600">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Myths */}
        <section className="border-t border-slate-100">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
              Vanlige misforståelser
            </p>
            <h2 className="mb-12 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
              Fire myter vi hører for ofte
            </h2>

            <div className="grid gap-px bg-slate-200 sm:grid-cols-2">
              {myths.map(({ myth, reality }) => (
                <div key={myth} className="bg-white p-7">
                  <p className="mb-3 text-sm font-medium text-slate-400 italic">
                    {myth}
                  </p>
                  <p className="text-sm leading-relaxed font-light text-slate-600">
                    {reality}
                  </p>
                </div>
              ))}
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
                href="/ressurser/inkluderende-design"
                className="group flex items-start gap-3 text-sm text-slate-600 transition-colors hover:text-slate-900"
              >
                <span className="mt-0.5 shrink-0 text-slate-300 transition-transform duration-200 group-hover:translate-x-0.5">
                  →
                </span>
                <span>
                  <span className="block font-medium text-slate-900 group-hover:text-slate-700">
                    Webutvikling og inkluderende design
                  </span>
                  <span className="text-xs font-light text-slate-400">
                    Tilgjengelighet · 6 min lesing
                  </span>
                </span>
              </Link>
              <Link
                href="/ressurser/nextjs-bedriftsnettsider"
                className="group flex items-start gap-3 text-sm text-slate-600 transition-colors hover:text-slate-900"
              >
                <span className="mt-0.5 shrink-0 text-slate-300 transition-transform duration-200 group-hover:translate-x-0.5">
                  →
                </span>
                <span>
                  <span className="block font-medium text-slate-900 group-hover:text-slate-700">
                    Hvorfor vi bruker Next.js til moderne bedriftsnettsider
                  </span>
                  <span className="text-xs font-light text-slate-400">
                    Faglig · 5 min lesing
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
              className={`border-brand pointer-events-none absolute h-8 w-8 opacity-20 ${cls}`}
              aria-hidden="true"
            />
          ))}
          <div className="relative z-10 mx-auto max-w-2xl px-6 py-24 text-center">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-500 uppercase">
              Vil du se det i praksis?
            </p>
            <h2 className="text-3xl font-light tracking-tight text-white sm:text-4xl">
              Vi dokumenterer ytelse, tilgjengelighet og SEO
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-light text-slate-400">
              Vi leverer ikke nettsider uten å vise deg Lighthouse-scorer og
              Core Web Vitals. Det er en del av avtalen.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/#kontakt"
                className="group bg-brand inline-flex items-center gap-2 px-8 py-3.5 text-sm font-medium tracking-wide text-slate-950 transition-all hover:bg-white"
              >
                Ta kontakt
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                  →
                </span>
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
