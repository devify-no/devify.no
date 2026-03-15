import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hvordan sammenligne priser på webutviklingstjenester i Norge",
  description:
    "En praktisk guide til å vurdere og sammenligne tilbud på webutvikling — hva som faktisk inngår, hvilke spørsmål du må stille, og hva billige tilbud typisk utelater.",
};

const projectComponents = [
  {
    label: "Design",
    desc: "Visuelt uttrykk, farger, typografi, layout. Spørsmål: er dette tilpasset din bedrift, eller er det en mal med logo innsatt?",
  },
  {
    label: "Utvikling",
    desc: "Selve kodearbeidet. Spørsmål: hvem skriver koden, og eier du den når prosjektet er ferdig?",
  },
  {
    label: "Innhold",
    desc: "Tekst, bilder, videoer. Mange tilbud forutsetter at du leverer alt selv — uten å si det eksplisitt.",
  },
  {
    label: "SEO",
    desc: "Teknisk SEO (sidestruktur, metadata, hastighet) vs. innholdsbasert SEO (nøkkelord, blogg). Avklar hva som er inkludert.",
  },
  {
    label: "Testing",
    desc: "Fungerer siden på alle enheter og nettlesere? Mange sparer tid her og det vises.",
  },
  {
    label: "Drift og hosting",
    desc: "Hvem betaler, hvem har ansvar, hva koster det løpende? Ofte en separat kostnad som ikke fremgår av tilbudet.",
  },
  {
    label: "Vedlikehold",
    desc: "Oppdateringer, sikkerhet, backup. Hva skjer etter lansering? Er det din jobb eller noen andres?",
  },
  {
    label: "Opplæring",
    desc: "Hvis det er et CMS — får du opplæring i å bruke det, og er det dokumentert?",
  },
];

// The unique element: offer check matrix
const offerCheckMatrix = [
  {
    item: "Hvem gjør jobben?",
    good: "Navngitt person / team internt i firmaet",
    bad: "Vagt svar — \"teamet vårt\" uten detaljer",
    flag: true,
  },
  {
    item: "Fast pris eller timer?",
    good: "Fast pris med definert scope",
    bad: "Timebasert uten estimat eller tak",
    flag: true,
  },
  {
    item: "Eierskap til kode",
    good: "\"Du eier koden fullt ut etter levering\"",
    bad: "Løsning låst til byrå eller plattform",
    flag: true,
  },
  {
    item: "Inkludert innhold?",
    good: "Tydelig: tekst og bilder inkludert / ikke inkludert",
    bad: "Implisitt at du leverer alt selv",
    flag: false,
  },
  {
    item: "SEO",
    good: "Teknisk SEO spesifisert som del av leveransen",
    bad: "\"SEO-vennlig\" uten konkretisering",
    flag: false,
  },
  {
    item: "Mobilversjon",
    good: "Responsivt design testet og bekreftet",
    bad: "\"Responsivt\" som standardterm uten testing",
    flag: false,
  },
  {
    item: "Leveringsdato",
    good: "Konkret dato eller uke i tilbudet",
    bad: "\"Ca. X uker\" uten bindende dato",
    flag: false,
  },
  {
    item: "Vedlikehold etter lansering",
    good: "Konkret plan eller tilbud om vedlikeholdsavtale",
    bad: "Ingen omtale av hva som skjer etterpå",
    flag: true,
  },
  {
    item: "Referanser",
    good: "Navngitte prosjekter du kan sjekke og ringe",
    bad: "Anonyme eksempler eller ingen referanser",
    flag: true,
  },
];

const missingInCheap = [
  {
    item: "Teknisk SEO",
    detail:
      "Riktige meta-tagger, sidestruktur, structured data og Core Web Vitals. Legges ikke til av seg selv — må bygges inn.",
  },
  {
    item: "Ekte mobiloptimalisering",
    detail:
      "En responsiv mal er ikke det samme som en faktisk mobiloptimalisert side. Tester du på ekte telefon?",
  },
  {
    item: "Bildeoptimalisering",
    detail:
      "Ukomprimerte bilder i feil format er en av de vanligste årsakene til trege sider. Sjelden inkludert i lave tilbud.",
  },
  {
    item: "Kontaktflyt og CTA",
    detail:
      "At siden ser bra ut betyr ikke at noen tar kontakt. Konverterende design er et håndverk, ikke en standard.",
  },
  {
    item: "Testfase",
    detail:
      "Fungerer siden i Safari, Chrome, Firefox? På iPhone og Android? En billig leveranse tester gjerne én nettleser.",
  },
  {
    item: "Eierskap til koden",
    detail:
      "Mange billige løsninger er bygget på proprietære plattformer. Du «leier» siden — eier den ikke.",
  },
];

const cornerBrackets = [
  "top-6 left-6 border-l-2 border-t-2",
  "top-6 right-6 border-r-2 border-t-2",
  "bottom-6 left-6 border-l-2 border-b-2",
  "bottom-6 right-6 border-r-2 border-b-2",
];

export default function SammenlignepriserPage() {
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
              Hvordan sammenligne priser
              <br />
              <span className="font-semibold">på webutvikling i Norge</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed font-light text-slate-500">
              En lavere pris betyr ikke alltid et dårligere resultat — men
              det betyr nesten alltid at noe er utelatt. Her er hva du
              trenger å vite før du sammenligner tilbud.
            </p>
          </div>
        </section>

        {/* Price alone tells you nothing */}
        <section className="mx-auto max-w-3xl px-6 py-20">
          <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
            Utgangspunktet
          </p>
          <h2 className="mb-8 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
            Pris alene forteller deg{" "}
            <span className="font-medium">ingenting</span>
          </h2>
          <div className="space-y-5 text-sm leading-relaxed font-light text-slate-600">
            <p>
              To tilbud på henholdsvis kr 15 000 og kr 60 000 for «en nettside
              for bedrift» er ikke sammenlignbare uten å vite hva som faktisk
              er inkludert. Det ene kan inneholde ferdig innhold, SEO, CMS og
              vedlikeholdsplan. Det andre kan være en mal med logoen din innsatt.
            </p>
            <p>
              Problemet er at tilbud ofte er formulert på en måte som gjør dem
              vanskelige å sammenligne direkte. «Responsivt design» betyr
              ingenting uten kontekst. «SEO-optimalisert» er ikke en leveranse
              — det er et adjektiv.
            </p>
            <p>
              Denne guiden gir deg verktøyene til å stille de riktige
              spørsmålene og avdekke hva du faktisk kjøper.
            </p>
          </div>
        </section>

        {/* What's in a project */}
        <section className="border-t border-slate-100 bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
              Hva inngår
            </p>
            <h2 className="mb-3 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
              De åtte komponentene i et{" "}
              <span className="font-medium">webprosjekt</span>
            </h2>
            <p className="mb-12 text-sm leading-relaxed font-light text-slate-500">
              Et godt tilbud er tydelig på hvilke av disse som er inkludert,
              og hvilke du er ansvarlig for selv.
            </p>
            <div className="grid gap-px bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
              {projectComponents.map(({ label, desc }) => (
                <div key={label} className="bg-white p-6">
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

        {/* Offer check matrix — unique element */}
        <section className="border-t border-slate-100">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
              Tilbudssjekk
            </p>
            <h2 className="mb-3 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
              Spørsmål du{" "}
              <span className="font-medium">må stille</span>
            </h2>
            <p className="mb-12 text-sm leading-relaxed font-light text-slate-500">
              Bruk dette som sjekkliste når du mottar tilbud. Et godt byrå
              svarer konkret på alle disse. Vage svar er informasjon i seg selv.
              <span className="ml-2 inline-flex items-center gap-1.5">
                <span className="inline-block h-2 w-2 rounded-full bg-red-400" />
                <span className="text-xs text-slate-400">= rødt flagg om svaret er vagt</span>
              </span>
            </p>

            <div className="overflow-hidden border border-slate-200">
              {/* Header */}
              <div className="grid grid-cols-[2fr_2fr_2fr_auto] gap-0 border-b border-slate-200 bg-slate-50">
                <div className="px-5 py-3">
                  <p className="text-xs font-medium tracking-[0.1em] text-slate-500 uppercase">
                    Spørsmål
                  </p>
                </div>
                <div className="border-l border-slate-200 px-5 py-3">
                  <p
                    className="text-xs font-medium tracking-[0.1em] uppercase"
                    style={{ color: "#a7ea00" }}
                  >
                    Godt svar
                  </p>
                </div>
                <div className="border-l border-slate-200 px-5 py-3">
                  <p className="text-xs font-medium tracking-[0.1em] text-slate-400 uppercase">
                    Advarselstegn
                  </p>
                </div>
                <div className="border-l border-slate-200 px-4 py-3" />
              </div>

              {offerCheckMatrix.map(({ item, good, bad, flag }, i) => (
                <div
                  key={item}
                  className={`grid grid-cols-[2fr_2fr_2fr_auto] ${i < offerCheckMatrix.length - 1 ? "border-b border-slate-100" : ""}`}
                >
                  <div className="px-5 py-4">
                    <p className="text-sm font-light text-slate-700">{item}</p>
                  </div>
                  <div className="border-l border-slate-100 px-5 py-4">
                    <p className="text-sm font-light text-slate-600">{good}</p>
                  </div>
                  <div className="border-l border-slate-100 px-5 py-4">
                    <p className="text-sm font-light text-slate-400">{bad}</p>
                  </div>
                  <div className="flex items-center border-l border-slate-100 px-4 py-4">
                    {flag && (
                      <span
                        className="h-2 w-2 shrink-0 rounded-full bg-red-400"
                        title="Rødt flagg"
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's missing in cheap offers */}
        <section className="border-t border-slate-100 bg-slate-50">
          <div className="mx-auto max-w-3xl px-6 py-20">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
              Hva mangler
            </p>
            <h2 className="mb-3 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
              Hva billige tilbud{" "}
              <span className="font-medium">typisk utelater</span>
            </h2>
            <p className="mb-10 text-sm leading-relaxed font-light text-slate-500">
              Dette er ikke for å si at billige løsninger alltid er dårlige.
              Men disse seks punktene dukker opp igjen og igjen i prosjekter
              som ikke leverer som forventet.
            </p>

            <div className="space-y-px border border-slate-200">
              {missingInCheap.map(({ item, detail }, i) => (
                <div
                  key={item}
                  className={`flex gap-5 px-6 py-5 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}
                >
                  <span
                    className="mt-0.5 shrink-0 font-mono text-xs font-medium"
                    style={{ color: "#a7ea00" }}
                  >
                    —
                  </span>
                  <div>
                    <p className="mb-1 text-sm font-medium text-slate-900">
                      {item}
                    </p>
                    <p className="text-sm leading-relaxed font-light text-slate-500">
                      {detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What good looks like */}
        <section className="border-t border-slate-100">
          <div className="mx-auto max-w-3xl px-6 py-20">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
              Referansepunkt
            </p>
            <h2 className="mb-8 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
              Slik ser et{" "}
              <span className="font-medium">godt tilbud ut</span>
            </h2>
            <div className="space-y-5 text-sm leading-relaxed font-light text-slate-600">
              <p>
                Et tilbud du bør si ja til er konkret nok til at du kan
                holde leverandøren ansvarlig. Det betyr: navngitt hvem som
                gjør jobben, fast pris med definert scope, klar dato, og
                skriftlig bekreftelse på at du eier koden ved levering.
              </p>
              <p>
                Det trenger ikke å være langt. En god leverandør kan
                oppsummere dette på én til to sider. Mistenkelig lange
                kontrakter fylt med forbehold er gjerne et tegn på at det
                er mange ting leverandøren ikke vil forplikte seg til.
              </p>
              <p>
                Til sist: det billigste tilbudet er sjelden det billigste
                prosjektet. Legg inn kostnaden av å gjøre noe på nytt om
                seks måneder.
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
              className={`pointer-events-none absolute h-8 w-8 border-[#a7ea00] opacity-20 ${cls}`}
              aria-hidden="true"
            />
          ))}
          <div className="relative z-10 mx-auto max-w-2xl px-6 py-24 text-center">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-500 uppercase">
              Vil du sammenligne?
            </p>
            <h2 className="text-3xl font-light tracking-tight text-white sm:text-4xl">
              Vi gir deg et tilbud du kan bruke som referanse
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-light text-slate-400">
              Fast pris, tydelig scope og skriftlig eierskap til koden.
              Ingen forpliktelse i å be om tilbud.
            </p>
            <div className="mt-8">
              <Link
                href="/#kontakt"
                className="group inline-flex items-center gap-2 bg-[#a7ea00] px-8 py-3.5 text-sm font-medium tracking-wide text-slate-950 transition-all hover:bg-white"
              >
                Be om tilbud
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                  →
                </span>
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
