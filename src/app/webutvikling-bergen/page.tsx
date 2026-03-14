import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Webutvikling i Bergen for bedrifter som vil synes lokalt og nasjonalt",
  description:
    "Vi jobber med Bergen-bedrifter og leverer nasjonalt. Ingen mellomledd, direkte kontakt med utvikleren — og nettsider som faktisk gjør jobben.",
};

// Local SEO breakdown — unique element for Bergen
// Bergen is competitive locally but also has many nationally-reaching businesses
const localSeoPoints = [
  {
    query: "\"webbyrå bergen\"",
    insight:
      "Folk søker lokalt — en nettside optimalisert for Bergen og omegn gir deg organisk synlighet der kundene faktisk befinner seg.",
  },
  {
    query: "\"[bransje] bergen\"",
    insight:
      "Din bransje + Bergen er et søkepar mange bruker. God teknisk SEO og tydelig innhold setter deg øverst.",
  },
  {
    query: "\"hvem leverer X i bergen\"",
    insight:
      "Spesifikt og lokalt. Disse søkerne er klare til å kjøpe. En godt strukturert side med klar CTA konverterer dem.",
  },
  {
    query: "Google Maps-rangering",
    insight:
      "En rask, velfungerende nettside med riktige strukturerte data styrker Google Business-profilen din og kartsøk.",
  },
];

const whatWeDeliver = [
  {
    label: "Lokal og nasjonal synlighet",
    desc: "Bergen-markedet er konkurransepreget. Teknisk SEO fra dag én gir deg et forsprang på de som bare limer inn innhold.",
  },
  {
    label: "Ingen byrålag",
    desc: "Du snakker med Moritz — den som faktisk bygger siden. Ingen account manager som videresender e-poster.",
  },
  {
    label: "Fast pris og tidslinje",
    desc: "Tilbud med klare leveranser og dato. Ikke timebasert med åpen ende.",
  },
  {
    label: "Du eier alt",
    desc: "Kode, domene, innhold — det er ditt. Kan tas videre til hvem som helst, om du ønsker det.",
  },
];

const bergenIndustries = [
  {
    label: "Maritim og shipping",
    desc: "Bergen er Norges maritime hovedstad. Mange aktører i bransjen trenger en profesjonell digital fasade mot internasjonale kunder.",
  },
  {
    label: "Reiseliv og opplevelse",
    desc: "Turister søker på nett før de ankommer. En rask, vakker side selger Bergen-opplevelsen før de er her.",
  },
  {
    label: "Energi og teknologi",
    desc: "Bergen-regionen har en sterk energiklynge. Profesjonell nettilstedeværelse bygger troverdighet i et krevende B2B-marked.",
  },
  {
    label: "Lokal handel og service",
    desc: "Konkurranse fra netthandel og store kjeder gjør lokal SEO avgjørende for bedrifter som selger til bergensere.",
  },
];

const cornerBrackets = [
  "top-6 left-6 border-l-2 border-t-2",
  "top-6 right-6 border-r-2 border-t-2",
  "bottom-6 left-6 border-l-2 border-b-2",
  "bottom-6 right-6 border-r-2 border-b-2",
];

export default function WebutviklingBergenPage() {
  return (
    <div className="min-h-screen bg-white">
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
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
              Webutvikling · Bergen
            </p>
            <h1 className="text-4xl leading-tight font-light tracking-tight text-slate-900 sm:text-5xl">
              Webutvikling i Bergen
              <br />
              <span className="font-semibold">som faktisk gjør jobben</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed font-light text-slate-500">
              Vi jobber med Bergen-bedrifter og leverer nasjonalt. Ikke et
              Bergen-byrå med Bergen-priser — en direkteopererende utvikler
              som bygger nettsider som synes i søk og konverterer besøkende
              til henvendelser.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Link
                href="/#kontakt"
                className="group inline-flex items-center gap-2 border border-slate-900 px-6 py-3 text-sm font-medium tracking-wide text-slate-900 transition-all hover:border-[#a7ea00] hover:bg-[#a7ea00] hover:text-slate-950"
              >
                Ta kontakt
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
              <p className="text-xs font-light text-slate-400">
                Vanlig svartid: 1 virkedag
              </p>
            </div>
          </div>
        </section>

        {/* Editorial */}
        <section className="mx-auto max-w-3xl px-6 py-20">
          <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
            Hvem vi er
          </p>
          <h2 className="mb-8 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
            Ikke Bergen-baserte.
            <br />
            <span className="font-medium">Men godt kjent med Bergen-markedet.</span>
          </h2>
          <div className="space-y-5 text-sm leading-relaxed font-light text-slate-600">
            <p>
              Dev AS er et lite norsk utviklingsbyrå med kunder over hele
              landet. Vi er ikke et byrå i Sandviken eller på Bryggen — men
              vi leverer jevnlig til Bergen-bedrifter og kjenner dynamikken
              i et marked som er lokalt i kultur, men nasjonalt i rekkevidde.
            </p>
            <p>
              Bergen er Norges nest største by med et kompetitivt næringsliv
              innen maritime næringer, reiseliv, teknologi og handel. En
              nettside som bare «finnes» er ikke nok i dette markedet. Den
              må synes i søk, kommunisere tydelig og gjøre det enkelt å ta
              kontakt.
            </p>
            <p>
              Det er det vi leverer — direkte, uten mellomledd og med fast
              pris fra start.
            </p>
          </div>
        </section>

        {/* Local SEO section — unique element */}
        <section className="border-t border-slate-100 bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
              Lokal synlighet
            </p>
            <h2 className="mb-3 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
              Slik søker Bergen-kunder
              <span className="font-medium"> etter deg</span>
            </h2>
            <p className="mb-12 text-sm leading-relaxed font-light text-slate-500">
              En god nettside er ikke bare pent design — det er en side Google
              finner, forstår og viser frem til de riktige søkerne.
            </p>

            <div className="space-y-px border border-slate-200">
              {localSeoPoints.map(({ query, insight }, i) => (
                <div
                  key={query}
                  className={`grid gap-6 px-6 py-5 sm:grid-cols-[220px_1fr] ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className="mt-0.5 shrink-0 font-mono text-xs"
                      style={{ color: "#a7ea00" }}
                    >
                      →
                    </span>
                    <p className="font-mono text-sm text-slate-700">{query}</p>
                  </div>
                  <p className="text-sm leading-relaxed font-light text-slate-500">
                    {insight}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm leading-relaxed font-light text-slate-500">
              Teknisk SEO bygges inn i løsningen fra dag én — ikke lagt til
              som et plugin etterpå. Det er forskjellen på å rangere og ikke
              rangere.
            </p>
          </div>
        </section>

        {/* Bergen industries */}
        <section className="border-t border-slate-100">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
              Bergen-markedet
            </p>
            <h2 className="mb-12 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
              Bransjer vi kjenner{" "}
              <span className="font-medium">i Bergen-regionen</span>
            </h2>
            <div className="grid gap-px bg-slate-200 sm:grid-cols-2">
              {bergenIndustries.map(({ label, desc }) => (
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

        {/* What we deliver */}
        <section className="border-t border-slate-100 bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
              Hva du får
            </p>
            <h2 className="mb-12 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
              Konkret, forutsigbart,{" "}
              <span className="font-medium">levert</span>
            </h2>
            <div className="grid gap-px bg-slate-200 sm:grid-cols-2">
              {whatWeDeliver.map(({ label, desc }) => (
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
              Bergen-bedrifter
            </p>
            <h2 className="text-3xl font-light tracking-tight text-white sm:text-4xl">
              Vil du synes bedre lokalt og nasjonalt?
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-light text-slate-400">
              Send oss en melding og fortell hva du driver med. Vi svarer med
              et konkret forslag og en fast pris.
            </p>
            <div className="mt-8">
              <Link
                href="/#kontakt"
                className="group inline-flex items-center gap-2 bg-[#a7ea00] px-8 py-3.5 text-sm font-medium tracking-wide text-slate-950 transition-all hover:bg-white"
              >
                Ta kontakt
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                  →
                </span>
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
