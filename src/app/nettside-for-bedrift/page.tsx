import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Profesjonell nettside for bedrift",
  description:
    "Hva bør en moderne bedriftsnettside inneholde? Vi forklarer hva som skiller en god nettside fra en billig en — mobil, fart, SEO, tillit og kontaktflyt.",
};

const pillars = [
  {
    id: "01",
    label: "Mobil",
    desc: "Over 70 % av norsk netttrafikk er mobil. En nettside som ikke fungerer på telefon, fungerer ikke.",
  },
  {
    id: "02",
    label: "Fart",
    desc: "Google bruker Core Web Vitals som rangeringsfaktor. Trege sider taper besøkende og søkesynlighet.",
  },
  {
    id: "03",
    label: "SEO",
    desc: "En vakker side ingen finner er verdiløs. Teknisk SEO legger grunnlaget for organisk vekst.",
  },
  {
    id: "04",
    label: "Tillit",
    desc: "Profesjonelt design og tydelig avsender bygger tillit raskere enn en salgsbrosjyre noen gang gjør.",
  },
  {
    id: "05",
    label: "Kontaktflyt",
    desc: "Gjør det latterlig enkelt å ta kontakt. Én tydelig CTA slår fem uklare valg hver gang.",
  },
];

const comparison = [
  {
    label: "Bygget på",
    cheap: "Mal — Wix, Squarespace o.l.",
    good: "Tilpasset løsning",
  },
  {
    label: "Hastighet",
    cheap: "Ofte treg, ukontrollert",
    good: "Optimalisert fra dag én",
  },
  {
    label: "SEO",
    cheap: "Grunnleggende plugin-SEO",
    good: "Teknisk SEO innebygd i koden",
  },
  {
    label: "Vedlikehold",
    cheap: "Du ordner det selv",
    good: "Noen har ansvar",
  },
  {
    label: "Eierskap",
    cheap: "Plattformens betingelser",
    good: "Du eier koden fullt ut",
  },
  {
    label: "Konvertering",
    cheap: "Ikke fokus",
    good: "Designet for å gi henvendelser",
  },
];

const cornerBrackets = [
  "top-6 left-6 border-l-2 border-t-2",
  "top-6 right-6 border-r-2 border-t-2",
  "bottom-6 left-6 border-l-2 border-b-2",
  "bottom-6 right-6 border-r-2 border-b-2",
];

export default function NettsidenForBedriftPage() {
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
              Nettside for bedrift
            </p>
            <h1 className="text-4xl leading-tight font-light tracking-tight text-slate-900 sm:text-5xl">
              Hva bør en moderne
              <br />
              <span className="font-semibold">bedriftsnettside inneholde?</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed font-light text-slate-500">
              De fleste bedrifter vet de trenger en nettside. Færre vet hva som
              faktisk skiller en side som konverterer, fra en som bare finnes.
            </p>
            <div className="mt-8">
              <Link
                href="/#kontakt"
                className="group inline-flex items-center gap-2 border border-slate-900 px-6 py-3 text-sm font-medium tracking-wide text-slate-900 transition-all hover:border-[#a7ea00] hover:bg-[#a7ea00] hover:text-slate-950"
              >
                Ta en uforpliktende prat
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Editorial */}
        <section className="mx-auto max-w-3xl px-6 py-20">
          <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
            Hvorfor det fortsatt er viktig
          </p>
          <h2 className="mb-8 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
            De fleste sjekker deg på nett{" "}
            <span className="font-medium">før de ringer</span>
          </h2>
          <div className="space-y-5 text-sm leading-relaxed font-light text-slate-600">
            <p>
              Rundt 80 % av norske forbrukere søker på Google før de tar
              kontakt med en lokal bedrift. Har du ingen nettside — eller en
              som ser gammel og uprofesjonell ut — er du allerede bak i løpet.
            </p>
            <p>
              En nettside er ikke bare et digitalt visittkort. Gjort riktig er
              det en salgskanal som jobber for deg hele døgnet: fanger
              henvendelser mens du sover og gjør at kunden allerede har bestemt
              seg for å ringe deg — <em>før</em> de faktisk gjør det.
            </p>
            <p>
              Det handler ikke om å ha noe. Det handler om å ha noe som{" "}
              <strong className="font-medium text-slate-800">fungerer</strong>.
            </p>
          </div>
        </section>

        {/* 5 Pillars */}
        <section className="border-t border-slate-100 bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
              De fem pilarene
            </p>
            <h2 className="mb-12 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
              Hva en god nettside{" "}
              <span className="font-medium">faktisk trenger</span>
            </h2>
            <div className="grid gap-px bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
              {pillars.map(({ id, label, desc }) => (
                <div key={id} className="bg-white p-7">
                  <div
                    className="mb-3 inline-block px-2 py-0.5 font-mono text-xs font-medium"
                    style={{ background: "#a7ea00", color: "#0f172a" }}
                  >
                    {id}
                  </div>
                  <h3 className="mb-2 text-sm font-medium tracking-tight text-slate-900">
                    {label}
                  </h3>
                  <p className="text-sm leading-relaxed font-light text-slate-500">
                    {desc}
                  </p>
                </div>
              ))}
              {/* Filler cell to complete the grid visually */}
              <div className="hidden bg-slate-50 lg:block" />
            </div>
          </div>
        </section>

        {/* Comparison table — unique element */}
        <section className="border-t border-slate-100">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
              Hva du faktisk får
            </p>
            <h2 className="mb-3 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
              Billig nettside vs.{" "}
              <span className="font-medium">god nettside</span>
            </h2>
            <p className="mb-12 text-sm leading-relaxed font-light text-slate-500">
              Prisen på en nettside forteller deg lite om hva du faktisk får.
              Her er de konkrete forskjellene som betyr noe.
            </p>

            <div className="overflow-hidden border border-slate-200">
              {/* Header row */}
              <div className="grid grid-cols-3 border-b border-slate-200 bg-slate-50">
                <div className="px-5 py-3.5" />
                <div className="border-l border-slate-200 px-5 py-3.5">
                  <p className="text-xs font-medium tracking-[0.15em] text-slate-400 uppercase">
                    Billig
                  </p>
                </div>
                <div className="border-l border-slate-200 px-5 py-3.5">
                  <p
                    className="text-xs font-medium tracking-[0.15em] uppercase"
                    style={{ color: "#a7ea00" }}
                  >
                    God
                  </p>
                </div>
              </div>

              {comparison.map(({ label, cheap, good }, i) => (
                <div
                  key={label}
                  className={`grid grid-cols-3 ${i < comparison.length - 1 ? "border-b border-slate-100" : ""}`}
                >
                  <div className="px-5 py-4">
                    <p className="text-xs font-medium tracking-[0.1em] text-slate-700 uppercase">
                      {label}
                    </p>
                  </div>
                  <div className="border-l border-slate-100 px-5 py-4">
                    <p className="text-sm font-light text-slate-400">{cheap}</p>
                  </div>
                  <div className="border-l border-slate-100 px-5 py-4">
                    <p className="text-sm font-light text-slate-700">{good}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm leading-relaxed font-light text-slate-500">
              En billig nettside kan være riktig for noen — men hvis du vil ha
              noe som faktisk konverterer besøkende til henvendelser, er det
              verdt å gjøre det skikkelig.
            </p>
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
              Klar for neste steg?
            </p>
            <h2 className="text-3xl font-light tracking-tight text-white sm:text-4xl">
              La oss se på hva din bedrift trenger
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-light text-slate-400">
              Send oss en melding, så tar vi en uforpliktende prat om
              muligheter og pris.
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
