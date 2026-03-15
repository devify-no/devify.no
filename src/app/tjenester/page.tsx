import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tjenester — webutvikling, SEO og drift | Dev AS",
  description:
    "Oversikt over hva vi tilbyr: skreddersydde nettsider, teknisk SEO, ytelsesoptimalisering, drift og vedlikehold, og forbedring av eksisterende nettsteder.",
};

const services = [
  {
    id: "01",
    title: "Nettside for bedrift",
    slug: "/nettside-for-bedrift",
    body: "En profesjonell nettside bygget fra bunnen av. Tilpasset dine mål, ikke en mal fra en WordPress-markedsplass.",
  },
  {
    id: "02",
    title: "Teknisk SEO",
    slug: "/teknisk-seo",
    body: "Strukturert data, Core Web Vitals, crawlbarhet og alt Google faktisk evaluerer under panseret på nettsiden din.",
  },
  {
    id: "03",
    title: "Raske nettsider",
    slug: "/raske-nettsider",
    body: "Sider som laster på under ett sekund. Ikke fordi det ser bra ut i en presentasjon, men fordi det faktisk påvirker konvertering og rangering.",
  },
  {
    id: "04",
    title: "Drift og vedlikehold",
    slug: "/drift-og-vedlikehold",
    body: "Hosting, oppdateringer, overvåking og support etter lansering. Nettsiden din fungerer — uten at du trenger å tenke på det.",
  },
  {
    id: "05",
    title: "Forbedre eksisterende nettside",
    slug: "/forbedre-eksisterende-nettside",
    body: "Har du allerede en nettside som ikke leverer? Vi gjennomgår den, identifiserer svakhetene og fikser det som faktisk betyr noe.",
  },
  {
    id: "06",
    title: "Skreddersydd nettside",
    slug: "/ressurser/skreddersydd-nettside",
    body: "Når standardløsninger ikke strekker til. Vi bygger akkurat det du trenger — hverken mer eller mindre.",
  },
];

const whyUs = [
  {
    label: "Direkte kontakt",
    desc: "Du snakker med den som bygger det. Ingen mellomled, ingen videresending av beskjeder.",
  },
  {
    label: "Fast pris på scope",
    desc: "Vi sender tilbud med konkret leveranse og pris. Ikke «det avhenger av».",
  },
  {
    label: "Ingen bindingstid",
    desc: "Du eier koden og domenet. Ingen proprietære systemer som låser deg inne.",
  },
  {
    label: "Teknisk tyngde",
    desc: "Next.js, TypeScript, moderne verktøy. Ikke plugins stablet på plugins.",
  },
];

const cornerBrackets = [
  "top-6 left-6 border-l-2 border-t-2",
  "top-6 right-6 border-r-2 border-t-2",
  "bottom-6 left-6 border-l-2 border-b-2",
  "bottom-6 right-6 border-r-2 border-b-2",
];

export default function TjenesterPage() {
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
              Dev AS — tjenester
            </p>
            <h1 className="text-4xl font-light leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Det vi{" "}
              <span className="font-semibold">leverer</span>
            </h1>
            <p className="mt-3 text-2xl font-light tracking-tight text-slate-400 sm:text-3xl">
              Og hvordan det henger sammen
            </p>
            <p className="mt-8 max-w-xl text-lg leading-relaxed font-light text-slate-500">
              Vi bygger nettsider for norske bedrifter. Ikke alt for alle —
              men det vi gjør, gjør vi skikkelig.
            </p>
          </div>
        </section>

        {/* Services grid */}
        <section className="border-b border-slate-100 bg-slate-950 px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12">
              <p className="mb-3 text-xs font-medium tracking-[0.2em] text-slate-500 uppercase">
                Hva vi tilbyr
              </p>
              <h2 className="text-2xl font-light tracking-tight text-white sm:text-3xl">
                Tjenestene våre —{" "}
                <span className="font-semibold">en oversikt</span>
              </h2>
            </div>

            <div className="grid gap-px bg-slate-800 sm:grid-cols-2 lg:grid-cols-3">
              {services.map(({ id, title, slug, body }) => (
                <Link
                  key={id}
                  href={slug}
                  className="group flex flex-col bg-slate-950 p-8 transition-colors hover:bg-slate-900"
                >
                  <span
                    className="mb-5 inline-block self-start px-2 py-0.5 font-mono text-xs font-medium"
                    style={{ background: "#a7ea00", color: "#0f172a" }}
                  >
                    {id}
                  </span>
                  <h3 className="mb-3 text-base font-semibold tracking-tight text-white">
                    {title}
                  </h3>
                  <p className="mb-5 text-sm leading-relaxed font-light text-slate-400">
                    {body}
                  </p>
                  <span
                    className="mt-auto text-xs font-medium transition-colors"
                    style={{ color: "#a7ea00" }}
                  >
                    Les mer →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why us */}
        <section className="border-b border-slate-100 px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12">
              <p className="mb-3 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
                Hvorfor Dev AS
              </p>
              <h2 className="text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
                Det som skiller oss fra{" "}
                <span className="font-semibold">de fleste byråer</span>
              </h2>
            </div>

            <div className="grid gap-px bg-slate-200 sm:grid-cols-2">
              {whyUs.map(({ label, desc }) => (
                <div key={label} className="bg-white px-8 py-7">
                  <h3 className="mb-2 text-sm font-semibold tracking-tight text-slate-900">
                    {label}
                  </h3>
                  <p className="text-sm font-light leading-relaxed text-slate-500">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Honest framing */}
        <section className="border-b border-slate-100 bg-slate-50 px-6 py-20">
          <div className="mx-auto max-w-3xl">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
              Hva vi ikke gjør
            </p>
            <h2 className="mb-8 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
              Vi tar ikke alle oppdrag
            </h2>
            <div className="space-y-5 text-sm leading-relaxed font-light text-slate-600">
              <p>
                Vi jobber best med bedrifter som trenger en profesjonell
                nettside og vil ha et ryddig, direkte samarbeid. Prosjekter
                som krever et fullt byråapparat med mange parallelle team er
                ikke der vi er sterkest.
              </p>
              <p>
                Er du usikker på om vi er riktig match? Ta en kortprat — det
                forplikter ingen, og vi er ærlige om det vi ikke passer til.
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
              Klar til å komme i gang?
            </p>
            <h2 className="text-3xl font-light tracking-tight text-white sm:text-4xl">
              Fortell oss hva du trenger
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-light text-slate-400">
              Vi svarer raskt, stiller de riktige spørsmålene og gir deg et
              konkret svar — ikke en salgsbrosjyre.
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
                href="/hvordan-vi-jobber"
                className="text-sm font-light text-slate-400 transition-colors hover:text-slate-300"
              >
                Slik jobber vi →
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
