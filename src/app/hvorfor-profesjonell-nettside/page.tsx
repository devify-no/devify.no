import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hvorfor en profesjonell nettside fortsatt er viktig for bedrifter",
  description:
    "Tillit, førsteinntrykk, synlighet, konvertering og rekruttering — fem konkrete grunner til at en profesjonell nettside fortsatt er en av de viktigste investeringene en bedrift kan gjøre.",
};

// Impact cards — unique element, one per pillar with a key insight
const pillars = [
  {
    n: "01",
    label: "Tillit",
    insight: "Det tar under 50 millisekunder å danne et visuelt inntrykk av en nettside.",
    body: "Tillit er ikke rasjonelt — det er emosjonelt og umiddelbart. En nettside som ser amatørmessig ut sender et signal om at bedriften er amatørmessig, uansett hva du faktisk leverer. Profesjonelt design, tydelig avsender og ekte innhold er investering i troverdighet, ikke estetikk.",
    callout: "Forskning fra University of Surrey: 75 % av forbrukere vurderer en bedrifts troverdighet basert på nettsiden.",
  },
  {
    n: "02",
    label: "Førsteinntrykk",
    insight: "94 % av førsteinntrykk er designrelatert — ikke innholdsrelatert.",
    body: "Folk leser ikke nettsiden din — de scanner den. De bestemmer på sekunder om de vil bli, om de stoler på deg, og om det er verdt å lese videre. En uklar struktur, for mye tekst eller et forvirrende layout gjør at de klikker seg vekk — og du vet aldri hvem du mistet.",
    callout: "Det holder ikke å ha riktig innhold. Innholdet må også presenteres riktig.",
  },
  {
    n: "03",
    label: "Synlighet",
    insight: "93 % av alle kjøpsreiser starter med et søk på nett.",
    body: "En nettside ingen finner er en nettside som ikke eksisterer. Teknisk SEO — riktig struktur, hastighet, metadata og semantisk kode — er ikke et tillegg du kjøper etterpå, det er et fundamentalt trekk ved siden. Uten det leverer du innhold ingen ser.",
    callout: "Google belønner sider som laster raskt, er strukturert riktig og gir en god brukeropplevelse. Det er målbare kriterier, ikke en gjettelek.",
  },
  {
    n: "04",
    label: "Konvertering",
    insight: "En tydelig CTA kan øke konverteringsraten med 200–300 %.",
    body: "En nettside som ikke konverterer er en kostnad, ikke en investering. Konvertering betyr ikke at siden er manipulerende — det betyr at den gjør det enkelt for en interessert besøkende å ta neste steg. Én tydelig handling, gjentatt konsekvent, slår alltid en side full av valg.",
    callout: "De fleste nettsider har for mange valg. Resultatet er at besøkende velger ingenting.",
  },
  {
    n: "05",
    label: "Rekruttering",
    insight: "70 % av jobbsøkere sjekker selskapets nettside før de sender søknad.",
    body: "Nettsiden din er ikke bare for kunder — den er for potensielle ansatte, samarbeidspartnere og investorer også. En bedrift som ser etablert og profesjonell ut digitalt tiltrekker seg bedre kandidater. En slitt nettside sender signaler om en slitt bedrift, selv om det ikke stemmer.",
    callout: "Talent velger arbeidsgivere. En god digital tilstedeværelse er en del av å vinne den konkurransen.",
  },
];

const withoutGoodSite = [
  "Potensielle kunder finner konkurrenter i stedet for deg i søk",
  "Høy bounce rate — folk forlater siden uten å ta kontakt",
  "Tapte henvendelser fra mobile brukere med dårlig opplevelse",
  "Redusert troverdighet i møte med nye samarbeidspartnere",
  "Vanskeligere rekruttering av kvalifisert personell",
  "Ingen mulighet til å fortelle din versjon av historien din",
];

const cornerBrackets = [
  "top-6 left-6 border-l-2 border-t-2",
  "top-6 right-6 border-r-2 border-t-2",
  "bottom-6 left-6 border-l-2 border-b-2",
  "bottom-6 right-6 border-r-2 border-b-2",
];

export default function HvorforProfesjonellNettstedPage() {
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
                Ca. 5 minutters lesing
              </span>
            </div>
            <h1 className="text-4xl leading-tight font-light tracking-tight text-slate-900 sm:text-5xl">
              Hvorfor en profesjonell nettside
              <br />
              <span className="font-semibold">fortsatt er viktig</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed font-light text-slate-500">
              Sosiale medier er ikke en erstatning. Google My Business er
              ikke en erstatning. Nettsiden din er det eneste stedet på nett
              der du har full kontroll over historien du forteller.
            </p>
          </div>
        </section>

        {/* Opening editorial */}
        <section className="mx-auto max-w-3xl px-6 py-20">
          <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
            Utgangspunktet
          </p>
          <h2 className="mb-8 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
            «Vi har jo Facebook og Instagram»
          </h2>
          <div className="space-y-5 text-sm leading-relaxed font-light text-slate-600">
            <p>
              Det er et argument vi hører regelmessig. Og det er sant at
              sosiale medier kan gi synlighet. Men det er en vesentlig
              forskjell: på en nettside eier du innholdet og konteksten. På
              sosiale medier er du gjest på andres plattform — med andres
              algoritmer, andres annonsestandarder og andres betingelser.
            </p>
            <p>
              En potensiell kunde som googler bedriften din og ikke finner en
              profesjonell nettside, finner deg ikke — eller finner noe som
              gjør at de ringer konkurrenten i stedet.
            </p>
            <p>
              Her er de fem grunnene til at det fortsatt er viktig, i 2025 og
              fremover.
            </p>
          </div>
        </section>

        {/* Impact cards — unique element */}
        <section className="border-t border-slate-100 bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
              Fem grunner
            </p>
            <h2 className="mb-14 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
              Hva en profesjonell nettside{" "}
              <span className="font-medium">faktisk gjør for deg</span>
            </h2>

            <div className="space-y-px bg-slate-200">
              {pillars.map(({ n, label, insight, body, callout }) => (
                <div key={n} className="bg-white">
                  {/* Pillar header */}
                  <div className="grid gap-6 px-8 pt-8 sm:grid-cols-[56px_1fr]">
                    <div className="pt-0.5">
                      <div
                        className="inline-block px-2 py-0.5 font-mono text-xs font-medium"
                        style={{ background: "#a7ea00", color: "#0f172a" }}
                      >
                        {n}
                      </div>
                    </div>
                    <div>
                      <h3 className="mb-3 text-base font-medium tracking-tight text-slate-900">
                        {label}
                      </h3>
                      <p className="mb-4 text-sm font-medium leading-relaxed text-slate-700">
                        {insight}
                      </p>
                      <p className="text-sm leading-relaxed font-light text-slate-600">
                        {body}
                      </p>
                    </div>
                  </div>
                  {/* Callout — aligned with content column */}
                  <div className="grid gap-6 px-8 pb-8 pt-5 sm:grid-cols-[56px_1fr]">
                    <div />
                    <div className="border-l-2 border-slate-200 py-1 pl-5">
                      <p className="text-sm leading-relaxed font-light text-slate-500 italic">
                        {callout}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Without a good site */}
        <section className="border-t border-slate-100">
          <div className="mx-auto max-w-3xl px-6 py-20">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
              Konsekvenser
            </p>
            <h2 className="mb-10 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
              Hva som skjer uten en{" "}
              <span className="font-medium">god nettside</span>
            </h2>
            <ul className="space-y-4">
              {withoutGoodSite.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="mt-1 shrink-0 text-xs text-slate-300">
                    ◆
                  </span>
                  <p className="text-sm leading-relaxed font-light text-slate-600">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Closing editorial */}
        <section className="border-t border-slate-100 bg-slate-50">
          <div className="mx-auto max-w-3xl px-6 py-20">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
              Oppsummert
            </p>
            <h2 className="mb-8 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
              Det handler om{" "}
              <span className="font-medium">kontroll</span>
            </h2>
            <div className="space-y-5 text-sm leading-relaxed font-light text-slate-600">
              <p>
                En profesjonell nettside er ikke en luksus for store bedrifter
                — det er et basisnivå for å bli tatt seriøst i et marked der
                den første Google-søket avgjør om du i det hele tatt er i
                betraktningen.
              </p>
              <p>
                Det trenger ikke å koste en formue. Men det bør gjøres
                gjennomtenkt: med et tydelig mål, god struktur, teknisk
                kvalitet og en klar vei for besøkende til å ta kontakt.
              </p>
              <p>
                Alternativet er å overlate den vurderingen til tilfeldigheter —
                og håpe at de som finner deg, finner nok til å bli.
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
              Neste steg
            </p>
            <h2 className="text-3xl font-light tracking-tight text-white sm:text-4xl">
              Trenger din bedrift en bedre nettside?
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-light text-slate-400">
              Send oss en melding. Vi tar en uforpliktende prat om hva som
              skal til.
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
