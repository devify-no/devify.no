import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Webutvikling i Oslo for små og mellomstore bedrifter",
  description:
    "Vi jobber med bedrifter i Oslo og leverer nasjonalt. Ingen byrålag, ingen mellomledd — direkte kontakt med utvikleren fra første møte til lansering.",
};

// Where budget goes in a traditional agency vs. direct
const agencyBreakdown = [
  { label: "Byråmargin", pct: 35 },
  { label: "Account management", pct: 15 },
  { label: "Prosjektledelse", pct: 12 },
  { label: "Faktisk utvikling", pct: 38 },
];

const directBreakdown = [
  { label: "Faktisk utvikling og design", pct: 85 },
  { label: "Kommunikasjon og planlegging", pct: 15 },
];

const whatWeDeliver = [
  {
    label: "Teknisk SEO",
    desc: "Bygget inn fra start, ikke lagt til etterpå. Oslo-markedet er konkurransepreget — synlighet teller.",
  },
  {
    label: "Rask levering",
    desc: "Ingen lange kø-systemer. Typisk prosjekttid 2–6 uker for en standard bedriftsside.",
  },
  {
    label: "Fast pris",
    desc: "Du vet hva det koster før vi starter. Ingen timebasert overraskelse i etterkant.",
  },
  {
    label: "Du eier løsningen",
    desc: "Kode, domene og innhold er ditt. Vil du bytte leverandør, er det ingenting i veien.",
  },
];

const cornerBrackets = [
  "top-6 left-6 border-l-2 border-t-2",
  "top-6 right-6 border-r-2 border-t-2",
  "bottom-6 left-6 border-l-2 border-b-2",
  "bottom-6 right-6 border-r-2 border-b-2",
];

export default function WebutviklingOsloPage() {
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
              Webutvikling · Oslo
            </p>
            <h1 className="text-4xl leading-tight font-light tracking-tight text-slate-900 sm:text-5xl">
              Webutvikling i Oslo
              <br />
              <span className="font-semibold">uten Oslo-priser</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed font-light text-slate-500">
              Vi er ikke et Oslo-byrå med kontorer på Aker Brygge. Vi er en
              liten, direkteopererende utvikler som jobber med bedrifter i
              Oslo og over hele landet — uten lagene som driver prisen opp.
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

        {/* Editorial — who we are, honestly */}
        <section className="mx-auto max-w-3xl px-6 py-20">
          <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
            Ærlig om hvem vi er
          </p>
          <h2 className="mb-8 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
            Vi er ikke et Oslo-byrå.
            <br />
            <span className="font-medium">Det er et poeng.</span>
          </h2>
          <div className="space-y-5 text-sm leading-relaxed font-light text-slate-600">
            <p>
              Store byråer i Oslo har kontorer, account managere, prosjektledere
              og designere som alle tar sin del av fakturaen — lenge før en
              utvikler rører koden. Det er ikke noe galt i det modellen, men
              den betyr at en stor del av det du betaler aldri ender opp i
              selve nettsiden.
            </p>
            <p>
              Vi er én person med ansvar for hele løpet. Det betyr at du
              snakker direkte med den som faktisk bygger løsningen, at det
              ikke er noen som "tar det videre til teamet", og at ingenting
              går tapt i oversettelsen mellom avdelinger.
            </p>
            <p>
              Vi tar på oss oppdrag fra Oslo-bedrifter regelmessig. Geografisk
              avstand er ikke et hinder — mesteparten av kommunikasjonen skjer
              digitalt uansett, og vi kan møtes fysisk ved behov.
            </p>
          </div>
        </section>

        {/* Where your budget goes — unique visual element */}
        <section className="border-t border-slate-100 bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
              Pengene dine
            </p>
            <h2 className="mb-3 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
              Hvor budsjett ditt
              <span className="font-medium"> faktisk går</span>
            </h2>
            <p className="mb-12 text-sm leading-relaxed font-light text-slate-500">
              Omtrentlig fordeling av hva du betaler for — hos et tradisjonelt
              byrå versus direkte kontakt.
            </p>

            <div className="grid gap-px bg-slate-200 md:grid-cols-2">
              {/* Traditional agency */}
              <div className="bg-white p-8">
                <h3 className="mb-6 text-sm font-medium tracking-[0.15em] text-slate-400 uppercase">
                  Stort byrå
                </h3>
                <div className="space-y-4">
                  {agencyBreakdown.map(({ label, pct }) => (
                    <div key={label}>
                      <div className="mb-1.5 flex items-center justify-between">
                        <span className="text-xs font-light text-slate-500">
                          {label}
                        </span>
                        <span className="font-mono text-xs text-slate-400">
                          ~{pct}%
                        </span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-100">
                        <div
                          className="h-full bg-slate-300"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct contact */}
              <div className="relative bg-white p-8">
                <div
                  className="pointer-events-none absolute top-0 left-0 h-1 w-full"
                  style={{ background: "#a7ea00" }}
                  aria-hidden="true"
                />
                <h3 className="mb-6 text-sm font-medium tracking-[0.15em] text-slate-700 uppercase">
                  Direkte kontakt
                </h3>
                <div className="space-y-4">
                  {directBreakdown.map(({ label, pct }) => (
                    <div key={label}>
                      <div className="mb-1.5 flex items-center justify-between">
                        <span className="text-xs font-light text-slate-600">
                          {label}
                        </span>
                        <span className="font-mono text-xs text-slate-500">
                          ~{pct}%
                        </span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-100">
                        <div
                          className="h-full"
                          style={{
                            width: `${pct}%`,
                            background: "#a7ea00",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-8 text-xs leading-relaxed font-light text-slate-400">
                  Tallene er estimater og varierer. Poenget er at strukturen er
                  fundamentalt forskjellig — ikke at vi er billigst.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What we deliver */}
        <section className="border-t border-slate-100">
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
              Oslo-bedrifter
            </p>
            <h2 className="text-3xl font-light tracking-tight text-white sm:text-4xl">
              Trenger du en ny nettside?
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-light text-slate-400">
              Fortell oss hva du driver med. Vi svarer med et konkret forslag
              og en fast pris — ingen timerapporter.
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
