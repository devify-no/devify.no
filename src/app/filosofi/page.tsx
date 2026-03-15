import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vår filosofi om webutvikling — Dev AS",
  description:
    "Prinsippene vi bygger etter, når du ikke bør bruke et byrå, og hvordan du vurderer om nettsiden din bør bygges på nytt.",
};

const principles = [
  {
    id: "01",
    title: "Tydelig struktur",
    body: "Brukeren skal alltid vite hvor de er og hva de kan gjøre. En forvirret besøkende er en tapt besøkende — uavhengig av hvor pent det ser ut.",
  },
  {
    id: "02",
    title: "Rask lastetid",
    body: "Hvert ekstra sekund teller. En nettside som bruker fire sekunder på å laste, har allerede mistet halvparten av mobilbrukerne sine — før de har lest en eneste linje.",
  },
  {
    id: "03",
    title: "Mobil først",
    body: "Ikke som en ettertanke vi fikser til slutt, men som utgangspunktet vi designer fra. De fleste brukere er på telefonen. Vi tar det på alvor fra dag én.",
  },
  {
    id: "04",
    title: "Enkel videreutvikling",
    body: "Kode som ingen forstår om tolv måneder — inkludert den som skrev det — er ikke god kode. Vi bygger med fremtidig vedlikehold i tankene.",
  },
  {
    id: "05",
    title: "Direkte kommunikasjon",
    body: "Ingen markedsføringsspråk. Ingen løfter vi ikke kan holde. Vi sier hva vi mener, estimerer ærlig, og sier fra når noe ikke er en god idé.",
  },
  {
    id: "06",
    title: "Færre unødvendige lag",
    body: "Hvert lag — teknisk, visuelt eller organisatorisk — er et potensielt feilpunkt. Vi spør alltid: trenger vi dette? Kan vi løse det enklere?",
  },
];

const notForYouReasons = [
  {
    title: "Behovet er veldig lite",
    body: "Trenger du bare en enkel CV-side eller en midlertidig landingsside? Da er Squarespace, Webflow eller en gratis mal sannsynligvis riktigere valg. Det er ikke verdt å betale for skreddersøm for noe du kan sette opp selv på en ettermiddag.",
  },
  {
    title: "Du vet ikke hva du egentlig trenger ennå",
    body: "Det er ikke noe å skamme seg over — det er faktisk ærlig. Men å bestille en nettside uten å vite hvilke problemer den skal løse, er å kaste penger ut av vinduet. Bruk litt tid på å tenke gjennom det først. Vi tar gjerne en uforpliktende prat, men vi vil ikke selge deg noe du ikke er klar for.",
  },
  {
    title: "Du bør starte enklere",
    body: "Noen ideer og bedrifter trenger ikke en nettside fra dag én. Start med en LinkedIn-profil, en Google Business-oppføring eller en enkel Notion-side. Kom tilbake til oss når du har fått litt traction og vet hva du faktisk trenger.",
  },
  {
    title: "Du har ingen plan for innholdet",
    body: "En nettside uten godt innhold er et tomt skall. Om du ikke har tenkt igjennom tekst, bilder og budskap — venter du bare på en vond overraskelse når prosjektet er ferdig. Innhold bør komme før design, ikke etter.",
  },
];

const rebuildSignals = [
  {
    signal: "Laster sakte",
    desc: "Over tre sekunder på mobil er et tydelig tegn på at noe er galt under panseret — for mange plugins, gammel kode, eller et bloated rammeverk.",
  },
  {
    signal: "Ingen har kode-tilgang",
    desc: "Om ingen vet hvem som eier koden, hvor den er hostet, eller hvem som kan endre den — er du låst. Det er ikke en vedlikeholdsstrategi, det er en tidsbombe.",
  },
  {
    signal: "Ser dårlig ut på mobil",
    desc: "Ikke responsiv, tekst man må zoome inn på, knapper som ikke er klikkbare med tommelen. Over halvparten av trafikken din er sannsynligvis mobil.",
  },
  {
    signal: "Innholdsoppdateringer krever hjelp",
    desc: "Å endre en tekst skal ikke koste penger eller ta en uke. Om du er avhengig av noen andre for å oppdatere din egen nettside, er systemet for komplisert.",
  },
  {
    signal: "Designet er mer enn 4–5 år gammelt",
    desc: "Webdesign eldes fort. Det som så moderne ut i 2019, ser utdatert ut nå. Brukerforventninger og standarder utvikler seg kontinuerlig.",
  },
  {
    signal: "Du skjemmes over å vise den frem",
    desc: "Dette er kanskje det sterkeste signalet av alle. Om du nøler med å sende en potensiell kunde til nettsiden din, er det på tide å gjøre noe med det.",
  },
];

export default function FilosofiPage() {
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
        <section className="relative overflow-hidden border-b border-slate-100 px-6 py-24">
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
            className="pointer-events-none absolute top-0 left-0 h-[500px] w-[500px] opacity-20"
            style={{
              background:
                "radial-gradient(ellipse at top left, #a7ea00 0%, transparent 65%)",
            }}
            aria-hidden="true"
          />
          <div className="relative z-10 mx-auto max-w-3xl">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
              Dev AS — Filosofi
            </p>
            <h1 className="text-4xl font-light tracking-tight text-slate-900 sm:text-5xl">
              Hva vi mener god{" "}
              <span className="font-semibold">webutvikling</span> bør være
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed font-light text-slate-500">
              Prinsippene vi bygger etter. Når et byrå faktisk ikke er riktig
              valg. Og hvordan du vurderer om nettsiden din er moden for et
              generasjonsskifte.
            </p>
          </div>
        </section>

        {/* Principles */}
        <section className="border-b border-slate-100 px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12">
              <p className="mb-3 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
                Prinsippene
              </p>
              <h2 className="text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
                Slik tenker vi når vi bygger
              </h2>
              <p className="mt-3 max-w-xl text-base font-light leading-relaxed text-slate-500">
                Ikke en liste over teknologier vi bruker, men en liste over
                avgjørelser vi tar — bevisst — i hvert prosjekt.
              </p>
            </div>

            <div className="grid gap-px bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
              {principles.map(({ id, title, body }) => (
                <div key={id} className="flex flex-col bg-white p-8">
                  <span
                    className="mb-5 inline-block self-start px-2 py-0.5 font-mono text-xs font-medium"
                    style={{ background: "#a7ea00", color: "#0f172a" }}
                  >
                    {id}
                  </span>
                  <h3 className="mb-3 text-base font-semibold tracking-tight text-slate-900">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed font-light text-slate-500">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Not for you section */}
        <section className="border-b border-slate-100 bg-slate-950 px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12">
              <p className="mb-3 text-xs font-medium tracking-[0.2em] text-slate-500 uppercase">
                Ærlig snakk
              </p>
              <h2 className="text-2xl font-light tracking-tight text-white sm:text-3xl">
                Når bør du{" "}
                <span className="font-semibold">ikke</span> bruke et byrå?
              </h2>
              <p className="mt-3 max-w-xl text-base font-light leading-relaxed text-slate-400">
                Vi tjener ingenting på å si dette. Men vi tror at ærlighet på
                lang sikt er bedre forretning enn å selge alle som banker på
                døren.
              </p>
            </div>

            <div className="grid gap-px bg-slate-800 sm:grid-cols-2">
              {notForYouReasons.map(({ title, body }) => (
                <div key={title} className="flex flex-col bg-slate-950 p-8">
                  <div className="mb-4 flex items-start gap-3">
                    <span
                      className="mt-0.5 shrink-0 text-lg leading-none"
                      aria-hidden="true"
                      style={{ color: "#a7ea00" }}
                    >
                      ✗
                    </span>
                    <h3 className="text-base font-semibold tracking-tight text-white">
                      {title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed font-light text-slate-400">
                    {body}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-10 max-w-2xl text-sm font-light leading-relaxed text-slate-500">
              Gjenkjenner du deg i noen av disse? Send oss en e-post likevel —
              vi hjelper deg å finne riktig retning, selv om svaret ikke er oss.{" "}
              <Link
                href="/#kontakt"
                className="text-slate-400 underline underline-offset-4 transition-colors hover:text-white"
              >
                Ta kontakt
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Rebuild evaluation */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12">
              <p className="mb-3 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
                Vurdering
              </p>
              <h2 className="text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
                Bør nettsiden din bygges på nytt?
              </h2>
              <p className="mt-3 max-w-xl text-base font-light leading-relaxed text-slate-500">
                Det er ikke alltid åpenbart. Men det finnes noen tydelige
                signaler. Kjenner du igjen to eller flere av disse, er det
                sannsynligvis på tide.
              </p>
            </div>

            <div className="space-y-px bg-slate-100">
              {rebuildSignals.map(({ signal, desc }, i) => (
                <div
                  key={signal}
                  className="flex items-start gap-6 bg-white px-8 py-6"
                >
                  <span className="mt-0.5 shrink-0 font-mono text-xs text-slate-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="mb-1.5 text-sm font-semibold tracking-tight text-slate-900">
                      {signal}
                    </h3>
                    <p className="text-sm font-light leading-relaxed text-slate-500">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 border border-slate-100 bg-slate-50 p-8">
              <p className="mb-1 text-sm font-semibold text-slate-900">
                Usikker?
              </p>
              <p className="mb-5 text-sm font-light leading-relaxed text-slate-500">
                Send oss lenken til nettsiden din. Vi ser på den og gir deg en
                ærlig vurdering — uten forpliktelser og uten salgspress.
              </p>
              <Link
                href="/#kontakt"
                className="inline-flex items-center gap-2 bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-slate-700"
              >
                Be om en vurdering →
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Les videre */}
      <section className="border-t border-slate-100 px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <p className="mb-5 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
            Les videre
          </p>
          <div className="flex flex-col gap-5 sm:flex-row sm:gap-12">
            <Link
              href="/uten-byralag"
              className="group flex items-start gap-3 text-sm text-slate-600 transition-colors hover:text-slate-900"
            >
              <span className="mt-0.5 shrink-0 text-slate-300 transition-transform duration-200 group-hover:translate-x-0.5">
                →
              </span>
              <span>
                <span className="block font-medium text-slate-900 group-hover:text-slate-700">
                  Nettsider uten byrålag — hva betyr det i praksis?
                </span>
                <span className="text-xs font-light text-slate-400">
                  Posisjon
                </span>
              </span>
            </Link>
            <Link
              href="/ressurser"
              className="group flex items-start gap-3 text-sm text-slate-600 transition-colors hover:text-slate-900"
            >
              <span className="mt-0.5 shrink-0 text-slate-300 transition-transform duration-200 group-hover:translate-x-0.5">
                →
              </span>
              <span>
                <span className="block font-medium text-slate-900 group-hover:text-slate-700">
                  Fagartikler om webutvikling
                </span>
                <span className="text-xs font-light text-slate-400">
                  Ressurser
                </span>
              </span>
            </Link>
          </div>
        </div>
      </section>

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
