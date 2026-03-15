import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Teknisk SEO for nettsider | Dev AS",
  description:
    "Core Web Vitals, strukturert data, crawlbarhet og metadata. Vi bygger nettsider Google faktisk forstår — og rangerer.",
};

const areas = [
  {
    id: "01",
    title: "Core Web Vitals",
    body: "LCP, INP og CLS er Googles målinger for brukeropplevelse. Vi bygger nettsider som scorer grønt — ikke fordi det ser bra ut, men fordi det påvirker rangeringen.",
  },
  {
    id: "02",
    title: "Crawlbarhet og indeksering",
    body: "robots.txt, XML-sitemap og canonical-tagger. Vi sørger for at søkemotorene finner de riktige sidene og ignorerer de riktige.",
  },
  {
    id: "03",
    title: "Strukturert data",
    body: "JSON-LD for organisasjoner, produkter, artikler og FAQ. Strukturert data gir Google kontekst — og kan gi deg rich results i søkeresultatene.",
  },
  {
    id: "04",
    title: "Metadata og Open Graph",
    body: "Title-tagger, meta descriptions og sosiale kort. Alle sidene dine har presis metadata — generert, ikke kopiert.",
  },
  {
    id: "05",
    title: "Intern lenkestruktur",
    body: "En fornuftig hierarkisk struktur gjør det lettere for crawler og bruker å navigere. Vi planlegger det fra start, ikke som ettertanke.",
  },
  {
    id: "06",
    title: "Teknisk ytelse",
    body: "Sider som laster raskt rangerer bedre. Vi bygger fra grunnen for ytelse — ikke optimiserer en treg WordPress-installasjon.",
  },
];

const myths = [
  {
    myth: "SEO handler bare om søkeord",
    reality:
      "Søkeord er én del av bildet. Teknisk fundament — hastighet, struktur, crawlbarhet — bestemmer om innholdet ditt i det hele tatt blir tatt i betraktning.",
  },
  {
    myth: "Plugins fikser teknisk SEO",
    reality:
      "Yoast og lignende hjelper med metadata, men adresserer ikke ytelse, strukturert data eller crawling-problemer som er innebygd i plattformen.",
  },
  {
    myth: "Teknisk SEO er en engangsoppgave",
    reality:
      "Googles algoritmer endrer seg. Nye sider legges til. Vi anbefaler å gjøre en teknisk gjennomgang minst én gang i året.",
  },
];

const cornerBrackets = [
  "top-6 left-6 border-l-2 border-t-2",
  "top-6 right-6 border-r-2 border-t-2",
  "bottom-6 left-6 border-l-2 border-b-2",
  "bottom-6 right-6 border-r-2 border-b-2",
];

export default function TekniskSeoPage() {
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
              Dev AS — SEO
            </p>
            <h1 className="text-4xl font-light leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Teknisk{" "}
              <span className="font-semibold">SEO</span>
            </h1>
            <p className="mt-3 text-2xl font-light tracking-tight text-slate-400 sm:text-3xl">
              Det Google ser under panseret
            </p>
            <p className="mt-8 max-w-xl text-lg leading-relaxed font-light text-slate-500">
              Godt innhold er ikke nok hvis nettsiden er treg, dårlig
              strukturert eller umulig for søkemotorer å forstå. Vi fikser
              fundamentet.
            </p>
          </div>
        </section>

        {/* What we cover */}
        <section className="border-b border-slate-100 bg-slate-950 px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12">
              <p className="mb-3 text-xs font-medium tracking-[0.2em] text-slate-500 uppercase">
                Hva vi dekker
              </p>
              <h2 className="text-2xl font-light tracking-tight text-white sm:text-3xl">
                Teknisk SEO —{" "}
                <span className="font-semibold">seks konkrete områder</span>
              </h2>
            </div>

            <div className="grid gap-px bg-slate-800 sm:grid-cols-2 lg:grid-cols-3">
              {areas.map(({ id, title, body }) => (
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

        {/* How we approach it */}
        <section className="border-b border-slate-100 px-6 py-20">
          <div className="mx-auto max-w-3xl">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
              Vår tilnærming
            </p>
            <h2 className="mb-8 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
              Teknisk SEO starter med{" "}
              <span className="font-semibold">arkitektur</span>
            </h2>
            <div className="space-y-5 text-sm leading-relaxed font-light text-slate-600">
              <p>
                De fleste SEO-problemer er egentlig arkitekturproblemer. En
                nettside bygget på et tungt CMS med mange plugins vil ha
                ytelsesutfordringer som er vanskelige å løse uten å endre
                fundamentet.
              </p>
              <p>
                Vi bygger med Next.js og statisk generering som standard. Det
                betyr sider som laster raskt uten at vi trenger å optimalisere
                bort problemene etterpå.
              </p>
              <p>
                For eksisterende nettsider gjennomfører vi en teknisk SEO-audit
                og lager en prioritert liste over hva som faktisk påvirker
                rangeringen din. Ikke alt er like viktig — vi fokuserer på det
                som gir reell effekt.
              </p>
            </div>
          </div>
        </section>

        {/* Myths */}
        <section className="border-b border-slate-100 bg-slate-50 px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12">
              <p className="mb-3 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
                Tre vanlige misforståelser
              </p>
              <h2 className="text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
                Det folk tror om SEO —{" "}
                <span className="font-semibold">og virkeligheten</span>
              </h2>
            </div>

            <div className="space-y-px bg-slate-200">
              {myths.map(({ myth, reality }) => (
                <div key={myth} className="bg-white px-8 py-7">
                  <h3 className="mb-2 text-sm font-semibold tracking-tight text-slate-900">
                    «{myth}»
                  </h3>
                  <p className="text-sm font-light leading-relaxed text-slate-500">
                    {reality}
                  </p>
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
              Vil du rangere bedre?
            </p>
            <h2 className="text-3xl font-light tracking-tight text-white sm:text-4xl">
              La oss se på fundamentet ditt
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-light text-slate-400">
              Vi gjennomgår den tekniske SEO-statusen til nettsiden din og gir
              deg en klar prioriteringsliste.
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
                href="/raske-nettsider"
                className="text-sm font-light text-slate-400 transition-colors hover:text-slate-300"
              >
                Les om raske nettsider →
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
