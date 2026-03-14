import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hva webutvikling kan lære av HCI og brukersentrert design",
  description:
    "Fitt's Law, Hick's Law, kognitiv belastning og mentale modeller — og hva disse prinsippene fra human-computer interaction betyr for nettsider som faktisk fungerer.",
};

// HCI principles — unique visual element: principle cards with web application
const principles = [
  {
    name: "Fitt's Law",
    origin: "Paul Fitts, 1954",
    summary: "Tid til å nå et mål avhenger av avstand til og størrelse på målet.",
    webApplication:
      "Klikkmål må være store nok til å treffe — spesielt på mobil. En \"Send\"-knapp på 32×20px er for liten. En lenke på én bokstav er verste praksis. Primærhandlinger bør ha stor klikkbar flate og stå nær der brukerens fokus allerede er.",
    example: "Callout-knapp i hero: stor, tydelig, sentralt plassert. Ikke et lite tekstlenke i hjørnet.",
  },
  {
    name: "Hick's Law",
    origin: "William Edmund Hick, 1952",
    summary: "Beslutningens tid øker logaritmisk med antall valg.",
    webApplication:
      "Jo flere valg du gir besøkende, jo lenger tid tar det å beslutte — og jo større sjansen for at de ikke bestemmer seg i det hele tatt. Navigasjonsmeny med 10 punkter er dårligere enn en med 5. En forside med tre CTAer konkurrerer mot seg selv.",
    example: "Én tydelig primær-CTA per side, maksimalt én sekundær. Resten er støy.",
  },
  {
    name: "Kognitiv belastning",
    origin: "John Sweller, 1988",
    summary: "Arbeidsminnet er begrenset. For mye informasjon på en gang reduserer forståelse.",
    webApplication:
      "Sider med for mye tekst, for mange elementer eller for kompleks layout tvinger besøkende til å bruke energi på å tolke siden — ikke på innholdet. Progressive disclosure (vis det viktigste først, detaljer etterpå) og god white space er direkte svar på dette.",
    example: "Forsidetekst på tre setninger er sterkere enn tre avsnitt. Bruk underside for detaljer.",
  },
  {
    name: "Mentale modeller",
    origin: "Kenneth Craik, 1943",
    summary: "Brukere forventer at systemer oppfører seg slik de allerede forstår verden.",
    webApplication:
      "Brukere har forventninger til navigasjon, form-felt og knappeplassering basert på alt de har brukt før. Logo øverst til venstre som lenker tilbake til forsiden. Søk øverst til høyre. Kontakt i footeren. Å bryte disse mønstrene krever en god grunn.",
    example: "Kreativ navigasjon som er unik kan virke forvirrende. Konvensjon er tillit.",
  },
  {
    name: "Affordances",
    origin: "James Gibson / Don Norman",
    summary: "Et objekts utseende bør formidle hvordan det brukes.",
    webApplication:
      "Knapper bør se ut som knapper — med litt volum, tydelig ramme eller farge som skiller dem fra omgivelsene. Lenker bør se ut som lenker. Om brukere ikke forstår at noe er klikkbart, klikker de ikke.",
    example: "En flat tekst med samme farge som brødtekst fungerer ikke som CTA, selv om det teknisk er en lenke.",
  },
];

const designProcess = [
  {
    step: "Forstå brukeren",
    desc: "Hvem besøker siden, hva er de ute etter, og hva er konteksten de er i? En mobil bruker på vei til møte har andre behov enn en desktop-bruker som sitter i ro.",
  },
  {
    step: "Definer oppgavene",
    desc: "Hva er de primære oppgavene besøkende prøver å utføre? Design for disse — ikke for hva bedriften ønsker å fortelle.",
  },
  {
    step: "Reduser friksjon",
    desc: "Finn og eliminer unødvendige steg, uklare signaler og forvirrende layout. Hvert ekstra klikk, scroll og lesesteg er friksjon som reduserer konvertering.",
  },
  {
    step: "Test med ekte mennesker",
    desc: "Utviklerens forståelse av en side er aldri brukerens forståelse. Enkle brukertest-øvelser — selv med én til to testpersoner — avslører problemer ingen hadde forestilt seg.",
  },
];

const cornerBrackets = [
  "top-6 left-6 border-l-2 border-t-2",
  "top-6 right-6 border-r-2 border-t-2",
  "bottom-6 left-6 border-l-2 border-b-2",
  "bottom-6 right-6 border-r-2 border-b-2",
];

export default function HciWebutviklingPage() {
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
            className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] opacity-15"
            style={{
              background:
                "radial-gradient(ellipse at bottom left, #a7ea00 0%, transparent 65%)",
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
              Hva webutvikling kan lære av
              <br />
              <span className="font-semibold">HCI og brukersentrert design</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed font-light text-slate-500">
              Human-computer interaction er et forskningsfelt, men prinsippene
              er dagligdagse. Her er fem av dem — og hva de betyr for nettsider
              som faktisk fungerer.
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="mx-auto max-w-3xl px-6 py-20">
          <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
            Bakgrunn
          </p>
          <h2 className="mb-8 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
            HCI er ikke akademisk.
            <br />
            <span className="font-medium">Det er designet vi møter hver dag.</span>
          </h2>
          <div className="space-y-5 text-sm leading-relaxed font-light text-slate-600">
            <p>
              Human-computer interaction (HCI) er studiet av hvordan mennesker
              interagerer med datamaskiner — og hva som gjør den interaksjonen
              effektiv, behagelig og forståelig. Det er et felt som strekker
              seg tilbake til 1960-tallet, men prinsippene er mer relevante enn
              noensinne i en verden der alle bærer en datamaskin i lommen.
            </p>
            <p>
              Mange av de mest grunnleggende lovene og prinsippene innen HCI
              ble formulert lenge før internett eksisterte — men de beskriver
              menneskelig atferd, ikke teknologi, og menneskelig atferd endrer
              seg saktere enn teknologien.
            </p>
            <p>
              Disse prinsippene bør ikke ligge på et akademisk pensum. De bør
              ligge til grunn for hvordan vi designer nettsider.
            </p>
          </div>
        </section>

        {/* HCI principles — unique visual element */}
        <section className="border-t border-slate-100 bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
              Fem prinsipper
            </p>
            <h2 className="mb-12 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
              Fra teori til{" "}
              <span className="font-medium">praktisk nettside</span>
            </h2>

            <div className="space-y-px bg-slate-200">
              {principles.map(({ name, origin, summary, webApplication, example }) => (
                <div key={name} className="bg-white">
                  {/* Header */}
                  <div className="grid gap-4 px-8 pt-7 sm:grid-cols-[200px_1fr]">
                    <div>
                      <p className="text-base font-medium text-slate-900">{name}</p>
                      <p className="mt-1 font-mono text-xs text-slate-400">{origin}</p>
                    </div>
                    <p className="text-sm font-medium leading-relaxed text-slate-700">
                      {summary}
                    </p>
                  </div>

                  {/* Web application */}
                  <div className="grid gap-4 px-8 pt-4 sm:grid-cols-[200px_1fr]">
                    <div>
                      <p className="text-xs font-medium tracking-[0.1em] text-slate-400 uppercase">
                        I webutvikling
                      </p>
                    </div>
                    <p className="text-sm leading-relaxed font-light text-slate-600">
                      {webApplication}
                    </p>
                  </div>

                  {/* Example callout */}
                  <div className="grid gap-4 px-8 pb-7 pt-4 sm:grid-cols-[200px_1fr]">
                    <div />
                    <div className="border-l-2 border-slate-200 pl-5">
                      <p className="text-xs font-medium tracking-[0.1em] text-slate-400 uppercase">
                        Eksempel
                      </p>
                      <p className="mt-1 text-sm font-light italic text-slate-500">
                        {example}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brukersentrert designprosess */}
        <section className="border-t border-slate-100">
          <div className="mx-auto max-w-3xl px-6 py-20">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
              I praksis
            </p>
            <h2 className="mb-12 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
              Brukersentrert design som{" "}
              <span className="font-medium">arbeidsmetode</span>
            </h2>

            <div className="space-y-px border border-slate-200">
              {designProcess.map(({ step, desc }, i) => (
                <div
                  key={step}
                  className={`flex gap-5 px-6 py-5 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}
                >
                  <span
                    className="mt-0.5 shrink-0 font-mono text-xs font-medium"
                    style={{ color: "#a7ea00" }}
                  >
                    0{i + 1}
                  </span>
                  <div>
                    <p className="mb-1 text-sm font-medium text-slate-900">{step}</p>
                    <p className="text-sm leading-relaxed font-light text-slate-500">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="border-t border-slate-100 bg-slate-50">
          <div className="mx-auto max-w-3xl px-6 py-20">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
              Oppsummert
            </p>
            <h2 className="mb-8 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
              En nettside som «fungerer»{" "}
              <span className="font-medium">er ikke tilfeldig</span>
            </h2>
            <div className="space-y-5 text-sm leading-relaxed font-light text-slate-600">
              <p>
                De nettsidene som konverterer godt, holder besøkende lenge og
                gir en god brukeropplevelse, gjør det ikke ved tilfeldighet.
                De er designet med disse prinsippene — bevisst eller intuitivt
                — innebygd i hvert valg.
              </p>
              <p>
                Det er forskjellen på en nettside som ser bra ut i en preview,
                og en nettside som faktisk gjør jobben den er ment å gjøre.
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
              Vi bygger med dette i bakhodet
            </p>
            <h2 className="text-3xl font-light tracking-tight text-white sm:text-4xl">
              Design som fungerer for brukeren, fungerer for deg
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-light text-slate-400">
              Ta kontakt for å snakke om hvordan vi kan bygge noe som faktisk
              konverterer.
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
