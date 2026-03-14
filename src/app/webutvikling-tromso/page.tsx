import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Webutvikling i Tromsø for moderne bedrifter og organisasjoner",
  description:
    "Vi jobber med bedrifter i Tromsø og Nord-Norge og leverer nasjonalt. Avstand er ikke et hinder — slik fungerer et godt samarbeid på distanse.",
};

// How remote collaboration works — unique to Tromsø page
const remoteSteps = [
  {
    step: "01",
    title: "Første samtale",
    desc: "En videocall på 30–45 minutter. Vi snakker om hva du trenger, hva som er realistisk og hva det koster. Ingen binding.",
  },
  {
    step: "02",
    title: "Skriftlig tilbud",
    desc: "Du mottar et tilbud med fast pris, klare leveranser og en dato å forholde deg til. Alt svart på hvitt.",
  },
  {
    step: "03",
    title: "Løpende oppdateringer",
    desc: "Vi deler fremdrift underveis. Du ser hva som bygges, kan gi tilbakemelding og stille spørsmål direkte — ikke via et ticketsystem.",
  },
  {
    step: "04",
    title: "Ferdigstilling og lansering",
    desc: "Vi lanserer, gjennomgår alt med deg og sørger for at du har full kontroll over alt du eier.",
  },
  {
    step: "05",
    title: "Vedlikehold og oppfølging",
    desc: "Om du vil ha noen som har løpende ansvar for siden, tilbyr vi en vedlikeholdsavtale. Ikke påkrevd, men tilgjengelig.",
  },
];

const northernContext = [
  {
    label: "Reiseliv og opplevelse",
    desc: "Tromsø er et av Norges sterkeste reisemål. En god nettside selger destinasjonen, forklarer tilbudet og gjør bestilling enkel.",
  },
  {
    label: "Forskning og utdanning",
    desc: "UiT og relaterte organisasjoner trenger klare, profesjonelle nettsider som kommuniserer komplekst innhold tilgjengelig.",
  },
  {
    label: "Maritim og fisk",
    desc: "Tradisjonelle næringer med internasjonale kunder. En profesjonell nettside bygger tillit utover landegrensene.",
  },
  {
    label: "Lokal service og handel",
    desc: "Tromsø-bedrifter konkurrerer mot nettet. En god lokal nettside vinner de kundene som faktisk er i nærheten.",
  },
];

const cornerBrackets = [
  "top-6 left-6 border-l-2 border-t-2",
  "top-6 right-6 border-r-2 border-t-2",
  "bottom-6 left-6 border-l-2 border-b-2",
  "bottom-6 right-6 border-r-2 border-b-2",
];

export default function WebutviklingTromsoPage() {
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
          {/* Two subtle glows, evoking northern lights */}
          <div
            className="pointer-events-none absolute top-0 right-0 h-[400px] w-[400px] opacity-15"
            style={{
              background:
                "radial-gradient(ellipse at top right, #a7ea00 0%, transparent 65%)",
            }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute bottom-0 left-0 h-[300px] w-[300px] opacity-10"
            style={{
              background:
                "radial-gradient(ellipse at bottom left, #a7ea00 0%, transparent 65%)",
            }}
            aria-hidden="true"
          />
          <div className="relative z-10 mx-auto max-w-3xl">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
              Webutvikling · Tromsø
            </p>
            <h1 className="text-4xl leading-tight font-light tracking-tight text-slate-900 sm:text-5xl">
              Webutvikling i Tromsø
              <br />
              <span className="font-semibold">— avstand er ikke problemet</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed font-light text-slate-500">
              Nord-Norge fortjener like god digital tilstedeværelse som resten
              av landet. Vi jobber med bedrifter i Tromsø og levererer
              nasjonalt — hele prosessen kan kjøres på distanse uten at
              kvaliteten lider.
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
                Hele prosessen kan kjøres digitalt
              </p>
            </div>
          </div>
        </section>

        {/* Editorial */}
        <section className="mx-auto max-w-3xl px-6 py-20">
          <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
            Nasjonale leveranser
          </p>
          <h2 className="mb-8 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
            Bra webutvikling handler ikke
            <br />
            <span className="font-medium">om hvor noen sitter</span>
          </h2>
          <div className="space-y-5 text-sm leading-relaxed font-light text-slate-600">
            <p>
              Dev AS er basert sør for Tromsø, men det spiller liten rolle.
              Webutvikling er i sin natur et digitalt håndverk — koden skrives
              ikke bedre av å sitte i samme rom som kunden. Det viktigste er
              god kommunikasjon, tydelige avtaler og at noen faktisk tar ansvar
              for det som leveres.
            </p>
            <p>
              Vi har fullført prosjekter for bedrifter i hele landet uten
              fysisk kontakt. Resultatet er det samme: en side som fungerer,
              du eier koden, og du vet hvem du ringer om noe skjærer seg.
            </p>
            <p>
              Det vi hører fra Nord-Norge-kunder er at alternativet ofte er
              et lokalt byrå med begrenset kapasitet — eller et stort byrå
              sørpå med mange mellomledd. Vi er ingen av delene.
            </p>
          </div>
        </section>

        {/* Remote collaboration steps — unique element */}
        <section className="border-t border-slate-100 bg-slate-50">
          <div className="mx-auto max-w-3xl px-6 py-20">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
              Slik fungerer det
            </p>
            <h2 className="mb-3 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
              Et prosjekt fra start til mål
              <span className="font-medium"> — helt digitalt</span>
            </h2>
            <p className="mb-12 text-sm leading-relaxed font-light text-slate-500">
              Slik ser et typisk forløp ut, fra første kontakt til ferdig nettside.
            </p>

            <div className="relative">
              {/* Vertical line */}
              <div
                className="absolute top-0 bottom-0 left-[19px] w-px"
                style={{ background: "#a7ea00", opacity: 0.3 }}
                aria-hidden="true"
              />

              <div className="space-y-0">
                {remoteSteps.map(({ step, title, desc }, i) => (
                  <div key={step} className="relative flex gap-6 pb-8 last:pb-0">
                    {/* Node */}
                    <div className="relative z-10 shrink-0">
                      <div
                        className="flex h-10 w-10 items-center justify-center border border-slate-200 bg-white font-mono text-xs font-medium"
                        style={{ color: "#a7ea00" }}
                      >
                        {i + 1}
                      </div>
                    </div>
                    <div className="pt-2">
                      <p className="mb-1.5 text-sm font-medium text-slate-900">
                        {title}
                      </p>
                      <p className="text-sm leading-relaxed font-light text-slate-500">
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Northern context — local industries */}
        <section className="border-t border-slate-100">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
              Tromsø-markedet
            </p>
            <h2 className="mb-12 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
              Bransjer vi jobber med{" "}
              <span className="font-medium">i nord</span>
            </h2>
            <div className="grid gap-px bg-slate-200 sm:grid-cols-2">
              {northernContext.map(({ label, desc }) => (
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
              Tromsø og Nord-Norge
            </p>
            <h2 className="text-3xl font-light tracking-tight text-white sm:text-4xl">
              Klar for å komme i gang?
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-light text-slate-400">
              Send oss en melding. Vi svarer innen én virkedag og tar en
              uforpliktende prat om hva du trenger.
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
