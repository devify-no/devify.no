import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Slik finner du riktig webutviklingsbyrå i Norge",
  description:
    "Hva bør små bedrifter se etter når de velger webutviklingsbyrå? Konkrete kriterier, røde flagg og råd om direkte kontakt vs. mange mellomledd.",
};

const criteria = [
  "Du snakker direkte med utvikleren — ikke en account manager",
  "Fast pris avtalt skriftlig på forhånd",
  "Du eier koden og domenet etter levering",
  "Klare leveranser og tidslinje fra start",
  "Norsktalende kontaktpunkt tilgjengelig",
  "Viser konkrete eksempler eller referanser",
  "Transparent prisstruktur uten skjulte ledd",
  "Tydelig plan for vedlikehold og support",
  "Ærlig om hva som er mulig innenfor budsjettet",
];

const redFlags = [
  "Uklar pris — \"vi setter opp tilbud basert på timer\"",
  "Ingen eksempler, referanser eller visning av tidligere arbeid",
  "Lang bindingstid i kontrakt uten klare betingelser",
  "Arbeidet outsources til tredjepart uten å si det",
  "Vanskelig å nå mellom møter eller telefonmøter",
  "Du eier ikke koden etter at prosjektet er levert",
  "Sier ja til alt — uansett hva du spør om",
  "Ingen plan for hva som skjer etter lansering",
];

const directVsMiddlemen = [
  {
    title: "Store byråer med mellomledd",
    desc: "Meldingen din passerer gjerne account manager, prosjektleder og designer før den når utvikleren. Det tar tid, koster penger i koordinering, og noe går alltid tapt i oversettelsen.",
  },
  {
    title: "Direkte kontakt",
    desc: "Den som forstår behovet ditt er den samme som bygger løsningen. Det gir kortere vei fra idé til resultat, og du slipper å forklare deg to ganger.",
  },
];

const ownershipPoints = [
  {
    label: "Domeneeierskap",
    desc: "Domenet bør stå i ditt navn, ikke byråets. Det gjelder uansett hvem som registrerer det.",
  },
  {
    label: "Kode og kildekode",
    desc: "Spør eksplisitt: \"Kan jeg ta med koden til en annen leverandør om jeg vil?\" Svaret bør være ja.",
  },
  {
    label: "CMS og innhold",
    desc: "Innholdet ditt bør være eksporterbart. Ikke låst inne i en proprietær plattform.",
  },
  {
    label: "Hosting",
    desc: "Du bør kunne bytte hostingleverandør uten å miste siden. Unngå løsninger som krever at du bruker byråets hosting.",
  },
];

const cornerBrackets = [
  "top-6 left-6 border-l-2 border-t-2",
  "top-6 right-6 border-r-2 border-t-2",
  "bottom-6 left-6 border-l-2 border-b-2",
  "bottom-6 right-6 border-r-2 border-b-2",
];

export default function WebutviklingsbyraaPage() {
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
              Velge webutviklingsbyrå
            </p>
            <h1 className="text-4xl leading-tight font-light tracking-tight text-slate-900 sm:text-5xl">
              Slik finner du riktig
              <br />
              <span className="font-semibold">webutviklingsbyrå</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed font-light text-slate-500">
              For små og mellomstore bedrifter i Norge. Hva du bør se etter,
              hva du bør styre unna, og spørsmålene som skiller et godt byrå
              fra et dårlig.
            </p>
            <div className="mt-8">
              <Link
                href="/#kontakt"
                className="group inline-flex items-center gap-2 border border-slate-900 px-6 py-3 text-sm font-medium tracking-wide text-slate-900 transition-all hover:border-[#a7ea00] hover:bg-[#a7ea00] hover:text-slate-950"
              >
                Snakk med oss
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Direct contact vs middlemen */}
        <section className="mx-auto max-w-3xl px-6 py-20">
          <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
            Struktur
          </p>
          <h2 className="mb-8 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
            Direkte kontakt vs.{" "}
            <span className="font-medium">mange mellomledd</span>
          </h2>
          <div className="space-y-6">
            {directVsMiddlemen.map(({ title, desc }) => (
              <div
                key={title}
                className="border-l-2 border-slate-200 pl-6"
              >
                <h3 className="mb-2 text-sm font-medium text-slate-900">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed font-light text-slate-500">
                  {desc}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm leading-relaxed font-light text-slate-600">
            Det betyr ikke at store byråer alltid er dårligere — men for små
            bedrifter er direkte kontakt vanligvis billigere, raskere og gir
            bedre resultat.
          </p>
        </section>

        {/* Criteria + Red flags — unique element */}
        <section className="border-t border-slate-100 bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
              Sjekkliste
            </p>
            <h2 className="mb-12 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
              Hva du bør se etter —{" "}
              <span className="font-medium">og styre unna</span>
            </h2>

            <div className="grid gap-px bg-slate-200 md:grid-cols-2">
              {/* Criteria — green */}
              <div className="bg-white p-8">
                <div className="mb-6 flex items-center gap-3">
                  <span
                    className="h-px w-6"
                    style={{ background: "#a7ea00" }}
                  />
                  <h3 className="text-sm font-medium tracking-[0.15em] text-slate-700 uppercase">
                    Hva du bør se etter
                  </h3>
                </div>
                <ul className="space-y-3.5">
                  {criteria.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm font-light text-slate-700"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        className="mt-0.5 shrink-0"
                        aria-hidden="true"
                      >
                        <circle cx="7" cy="7" r="7" fill="#a7ea00" />
                        <path
                          d="M4 7l2 2 4-4"
                          stroke="#0f172a"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Red flags */}
              <div className="bg-white p-8">
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-6 bg-red-300" />
                  <h3 className="text-sm font-medium tracking-[0.15em] text-slate-500 uppercase">
                    Røde flagg
                  </h3>
                </div>
                <ul className="space-y-3.5">
                  {redFlags.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm font-light text-slate-500"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        className="mt-0.5 shrink-0"
                        aria-hidden="true"
                      >
                        <circle cx="7" cy="7" r="7" fill="#fecaca" />
                        <path
                          d="M4.5 4.5l5 5M9.5 4.5l-5 5"
                          stroke="#ef4444"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Ownership */}
        <section className="border-t border-slate-100">
          <div className="mx-auto max-w-3xl px-6 py-20">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
              Eierskap
            </p>
            <h2 className="mb-3 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
              Du bør eie din <span className="font-medium">egen løsning</span>
            </h2>
            <p className="mb-10 text-sm leading-relaxed font-light text-slate-500">
              Mange bedrifter oppdager for sent at de ikke eier det byrået har
              bygget. Her er de fire punktene å sjekke.
            </p>

            <div className="space-y-6">
              {ownershipPoints.map(({ label, desc }) => (
                <div key={label} className="flex gap-6">
                  <div
                    className="mt-1 h-2 w-2 shrink-0 rounded-full"
                    style={{ background: "#a7ea00" }}
                  />
                  <div>
                    <p className="mb-1 text-sm font-medium text-slate-900">
                      {label}
                    </p>
                    <p className="text-sm leading-relaxed font-light text-slate-500">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Positioning — Dev AS */}
        <section className="relative overflow-hidden border-t border-slate-100 bg-slate-50">
          {/* Large faint watermark */}
          <div
            className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] leading-none font-bold tracking-tighter text-slate-900 opacity-[0.03] select-none"
            aria-hidden="true"
          >
            Dev
          </div>
          <div className="relative z-10 mx-auto max-w-3xl px-6 py-20">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
              Hvem er vi
            </p>
            <h2 className="mb-6 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
              Slik er{" "}
              <span className="font-medium">Dev AS strukturert</span>
            </h2>
            <div className="space-y-4 text-sm leading-relaxed font-light text-slate-600">
              <p>
                Vi er et lite og bevisst valg: ingen mellomledd, én person
                med ansvar for hele løpet fra første samtale til lansering.
                Du snakker alltid med Moritz — som er den som bygger.
              </p>
              <p>
                Vi tar på oss et begrenset antall prosjekter samtidig, nettopp
                fordi vi ikke vil havne i en situasjon der noen venter. Fast
                pris, klare leveranser og tydelig eierskap — det er standarden,
                ikke et tillegg du betaler for.
              </p>
              <p>
                Etablert i 2018. Over 50 leveranser gjennomført for norske SMB-er.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Ingen mellomledd", "Fast pris", "Du eier løsningen", "Teknisk SEO", "Norsk"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="border border-slate-200 bg-white px-3 py-1.5 font-mono text-xs text-slate-500"
                  >
                    {tag}
                  </span>
                ),
              )}
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
              Ta neste steg
            </p>
            <h2 className="text-3xl font-light tracking-tight text-white sm:text-4xl">
              Vil du se om vi passer for deg?
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-light text-slate-400">
              Send oss en melding og fortell kort hva du trenger. Vi gir deg
              et ærlig svar.
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
