import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nettsider uten byrålag — hva betyr det i praksis? | Dev AS",
  description:
    "Direkte kontakt, tydeligere ansvar og mer fokus på selve leveransen. Slik jobber vi — og derfor kaller vi det nettsider uten byrålag.",
};

const pillars = [
  {
    id: "01",
    title: "Direkte kontakt",
    body: "Du kommuniserer med den som faktisk skriver koden. Ingen prosjektleder som videresender beskjeder, ingen account manager som tolker kravene dine. Det du sier, er det vi hører.",
  },
  {
    id: "02",
    title: "Færre ledd",
    body: "I et tradisjonelt byrå går en oppgave gjennom salg, prosjektledelse, design, utvikling og QA — hvert ledd legger til tid, pris og potensiell misforståelse. Vi kutter de fleste av dem.",
  },
  {
    id: "03",
    title: "Tydeligere ansvar",
    body: "Hvem eier kvaliteten? I et stort byrå er det diffust. Hos oss er det klart. Én person er ansvarlig for det som leveres — og det er den du snakker med.",
  },
  {
    id: "04",
    title: "Mer realistiske prosesser",
    body: "Byråer selger skreddersydde prosesser, men kjører dem gjennom standardiserte maler. Vi tilpasser arbeidsmåten til prosjektet — ikke prosjektet til arbeidsmåten.",
  },
  {
    id: "05",
    title: "Mindre overhead",
    body: "Kontorlokaler i Aker Brygge, merkevarefilm og en rekke fagledere som ikke er involvert i prosjektet ditt — alt det koster noe, og du betaler for det. Vi har ikke det.",
  },
  {
    id: "06",
    title: "Mer fokus på leveransen",
    body: "Uten lag å administrere og presentasjoner å produsere, kan vi bruke mer av prosjekttiden på det som faktisk betyr noe: å bygge noe godt.",
  },
];

const comparison = [
  {
    topic: "Hvem du snakker med",
    agency: "En account manager eller prosjektleder. Utvikleren treffer du kanskje aldri.",
    us: "Den som bygger nettsiden. Direkte.",
  },
  {
    topic: "Tilbakemelding og endringer",
    agency: "Noteres i et ticketsystem, prioriteres i neste sprint, leveres i neste release.",
    us: "Tas opp i samtalen. Fikses raskt om det er enkelt, estimeres ærlig om det er komplekst.",
  },
  {
    topic: "Prising",
    agency: "Timepriser inkluderer overhead for alle som ikke jobber på prosjektet ditt.",
    us: "Du betaler for faktisk arbeid. Ikke for møtene vi ikke har.",
  },
  {
    topic: "Ansvarsforhold",
    agency: "Fordelt på roller. Lett å skylde på hverandre når noe går galt.",
    us: "Klart og udelt. En person, ett ansvar.",
  },
  {
    topic: "Prosjektvarighet",
    agency: "Byråprosesser har innebygde forsinkelser: godkjenningsrunder, kapasitetsplanlegging, handover mellom team.",
    us: "Kortere løp fordi vi ikke venter på hverandre.",
  },
  {
    topic: "Hva du betaler for",
    agency: "Tid brukt av mange mennesker, inkludert de som koordinerer de som koordinerer de som jobber.",
    us: "Resultatet.",
  },
];

const process = [
  {
    step: "01",
    title: "Første samtale",
    desc: "Du snakker med den som skal bygge prosjektet — ikke en selger som overleverer til et team. Vi stiller spørsmål, du stiller spørsmål, og vi finner ut om vi er riktig match.",
  },
  {
    step: "02",
    title: "Tilbud og scope",
    desc: "Vi sender et skriftlig tilbud med konkret scope og pris. Ingen dynamisk prising som eskalerer, ingen «det avhenger av»-svar uten forklaring.",
  },
  {
    step: "03",
    title: "Bygging",
    desc: "Du har løpende tilgang til fremdrift. Spørsmål besvares direkte. Endringer underveis håndteres pragmatisk — ikke formelt.",
  },
  {
    step: "04",
    title: "Levering",
    desc: "Du får koden, tilgangene og dokumentasjonen. Ingenting holdes tilbake som forhandlingskort for fremtidige kontrakter.",
  },
  {
    step: "05",
    title: "Etter levering",
    desc: "Vi er tilgjengelige for spørsmål og videre utvikling. Ikke via en support-portal — via en melding.",
  },
];

const cornerBrackets = [
  "top-6 left-6 border-l-2 border-t-2",
  "top-6 right-6 border-r-2 border-t-2",
  "bottom-6 left-6 border-l-2 border-b-2",
  "bottom-6 right-6 border-r-2 border-b-2",
];

export default function UtenByralagPage() {
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
              Dev AS — posisjon
            </p>
            <h1 className="text-4xl font-light leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Nettsider{" "}
              <span className="font-semibold">uten byrålag</span>
            </h1>
            <p className="mt-3 text-2xl font-light tracking-tight text-slate-400 sm:text-3xl">
              Hva betyr det i praksis?
            </p>
            <p className="mt-8 max-w-xl text-lg leading-relaxed font-light text-slate-500">
              Det er ikke et slagord. Det er en beskrivelse av hvordan vi er
              organisert, hvem du snakker med, og hva du faktisk betaler for.
            </p>
          </div>
        </section>

        {/* Problem with layers */}
        <section className="border-b border-slate-100 px-6 py-20">
          <div className="mx-auto max-w-3xl">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
              Problemet med lag
            </p>
            <h2 className="mb-8 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
              Byrålag er ikke en feil —{" "}
              <span className="font-semibold">de er et valg</span>
            </h2>
            <div className="space-y-5 text-sm leading-relaxed font-light text-slate-600">
              <p>
                Store byråer er bygget for store kunder. De har prosesser,
                hierarkier og roller fordi de håndterer mange prosjekter
                parallelt, med mange mennesker involvert. Det gir mening
                i den konteksten.
              </p>
              <p>
                Men for en bedrift som trenger en god nettside — ikke en
                kampanje som skal koordineres på tvers av ti markeder — er
                de lagene friksjon. Du betaler for strukturen. Du venter på
                godkjenningsrundene. Du forklarer det samme tre ganger til
                tre forskjellige personer.
              </p>
              <p>
                Vi har valgt å ikke bygge den strukturen. Ikke fordi vi ikke
                kan — men fordi vi mener et godt nettstedsprosjekt ikke
                trenger det. Det trenger kompetente folk, direkte kommunikasjon
                og et klart fokus på hva som skal leveres.
              </p>
            </div>
          </div>
        </section>

        {/* Six pillars */}
        <section className="border-b border-slate-100 bg-slate-950 px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12">
              <p className="mb-3 text-xs font-medium tracking-[0.2em] text-slate-500 uppercase">
                Hva det innebærer
              </p>
              <h2 className="text-2xl font-light tracking-tight text-white sm:text-3xl">
                Seks konkrete ting det betyr for deg
              </h2>
            </div>

            <div className="grid gap-px bg-slate-800 sm:grid-cols-2 lg:grid-cols-3">
              {pillars.map(({ id, title, body }) => (
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

        {/* Comparison */}
        <section className="border-b border-slate-100 px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12">
              <p className="mb-3 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
                Konkret forskjell
              </p>
              <h2 className="text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
                Med byrålag —{" "}
                <span className="font-semibold">og uten</span>
              </h2>
            </div>

            <div className="overflow-x-auto">
              <div className="min-w-[560px]">
                <div className="grid grid-cols-[1fr_1fr_1fr] gap-px bg-slate-200">
                  <div className="bg-slate-900 px-5 py-3">
                    <span className="text-xs font-medium tracking-[0.15em] text-slate-400 uppercase">
                      Område
                    </span>
                  </div>
                  <div className="bg-slate-900 px-5 py-3">
                    <span className="text-xs font-medium text-slate-400">
                      Tradisjonelt byrå
                    </span>
                  </div>
                  <div className="bg-slate-900 px-5 py-3">
                    <span
                      className="font-mono text-xs font-medium"
                      style={{ color: "#a7ea00" }}
                    >
                      Dev AS
                    </span>
                  </div>
                  {comparison.map(({ topic, agency, us }) => (
                    <>
                      <div
                        key={`${topic}-t`}
                        className="bg-white px-5 py-4"
                      >
                        <p className="text-sm font-medium text-slate-900">
                          {topic}
                        </p>
                      </div>
                      <div
                        key={`${topic}-a`}
                        className="bg-white px-5 py-4"
                      >
                        <p className="text-sm font-light leading-relaxed text-slate-500">
                          {agency}
                        </p>
                      </div>
                      <div
                        key={`${topic}-u`}
                        className="bg-white px-5 py-4"
                      >
                        <p className="text-sm font-light leading-relaxed text-slate-700">
                          {us}
                        </p>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="border-b border-slate-100 bg-slate-50 px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12">
              <p className="mb-3 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
                Slik ser det ut i praksis
              </p>
              <h2 className="text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
                En typisk prosjektprosess —{" "}
                <span className="font-semibold">uten unødvendige runder</span>
              </h2>
            </div>

            <div className="space-y-px bg-slate-200">
              {process.map(({ step, title, desc }) => (
                <div
                  key={step}
                  className="flex items-start gap-8 bg-white px-8 py-7"
                >
                  <div className="flex shrink-0 flex-col items-center gap-1.5">
                    <span
                      className="inline-block px-2 py-0.5 font-mono text-xs font-medium"
                      style={{ background: "#a7ea00", color: "#0f172a" }}
                    >
                      {step}
                    </span>
                  </div>
                  <div>
                    <h3 className="mb-1.5 text-sm font-semibold tracking-tight text-slate-900">
                      {title}
                    </h3>
                    <p className="text-sm font-light leading-relaxed text-slate-500">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The honest caveat */}
        <section className="border-b border-slate-100 px-6 py-20">
          <div className="mx-auto max-w-3xl">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
              Ærlig sagt
            </p>
            <h2 className="mb-8 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
              Det er ikke riktig for alle
            </h2>
            <div className="space-y-5 text-sm leading-relaxed font-light text-slate-600">
              <p>
                Noen prosjekter trenger byråstørrelse. Et nettsted med ti
                dedikerte redaktører, fem markeder og integrasjoner mot
                et enterprise-CMS er et annet dyr enn det vi beskriver her.
                Store organisasjoner har legitime grunner til å velge store
                byråer.
              </p>
              <p>
                Men for flertallet av norske bedrifter — som trenger en
                profesjonell, rask og vedlikeholdbar nettside som faktisk
                representerer dem godt — er byråstrukturen mer hinder enn
                hjelp.
              </p>
              <p>
                Hvis du lurer på om vi er riktig match, er det raskeste svaret
                å ta en prat. Det koster ingenting og forplikter ingen.
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
              className={`pointer-events-none absolute h-8 w-8 border-brand opacity-20 ${cls}`}
              aria-hidden="true"
            />
          ))}
          <div className="relative z-10 mx-auto max-w-2xl px-6 py-24 text-center">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-500 uppercase">
              Klar for en direkte samtale?
            </p>
            <h2 className="text-3xl font-light tracking-tight text-white sm:text-4xl">
              Du snakker med den som bygger det
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-light text-slate-400">
              Ikke med en selger. Ikke med en prosjektleder. Med den som faktisk
              skal lage nettsiden din.
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
                href="/filosofi"
                className="text-sm font-light text-slate-400 transition-colors hover:text-slate-300"
              >
                Les om filosofien vår →
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
