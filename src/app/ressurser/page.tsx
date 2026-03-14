import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ressurser og fagartikler om webutvikling",
  description:
    "Fagartikler og guider om webutvikling, tilgjengelighet, verktøy og teknologi — skrevet av Dev AS.",
};

const articles = [
  {
    href: "/ressurser/inkluderende-design",
    label: "Tilgjengelighet",
    title: "Webutvikling og inkluderende design: hvorfor det betyr noe i praksis",
    desc: "Universell utforming, kontraster, tastaturnavigasjon og semantikk — og hva det gjør for brukere, bedrifter og søkemotorer.",
    readTime: "6 min",
  },
  {
    href: "/ressurser/verktoy-webutvikling",
    label: "Verktøy",
    title: "Hvilke verktøy vi bruker i moderne webutvikling",
    desc: "En gjennomgang av stacken vi bruker og hvorfor vi har valgt hvert verktøy — ikke som en kursliste, men som en profesjonell begrunnelse.",
    readTime: "5 min",
  },
  {
    href: "/ressurser/teknologier-webutvikling",
    label: "Teknologi",
    title: "Hva er de grunnleggende teknologiene for webutvikling?",
    desc: "Fra HTML og CSS til rammeverk, databaser og hosting — de teknologiske lagene som utgjør en moderne nettside.",
    readTime: "7 min",
  },
  {
    href: "/ressurser/hci-webutvikling",
    label: "Faglig",
    title: "Hva webutvikling kan lære av HCI og brukersentrert design",
    desc: "Fitt's Law, kognitiv belastning og mentale modeller — og hva disse prinsippene betyr for nettsider som faktisk fungerer.",
    readTime: "6 min",
  },
];

export default function RessurserPage() {
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
        <section className="relative overflow-hidden border-b border-slate-100 px-6 py-20">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.3]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
            aria-hidden="true"
          />
          <div className="relative z-10 mx-auto max-w-3xl">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
              Dev AS
            </p>
            <h1 className="text-4xl font-light tracking-tight text-slate-900 sm:text-5xl">
              Ressurser
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed font-light text-slate-500">
              Fagartikler om webutvikling, tilgjengelighet, verktøy og
              teknologi. Skrevet for de som vil forstå hva som skiller god
              webutvikling fra dårlig.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-16">
          <div className="grid gap-px bg-slate-200 sm:grid-cols-2">
            {articles.map(({ href, label, title, desc, readTime }) => (
              <Link
                key={href}
                href={href}
                className="group flex flex-col bg-white p-8 transition-colors hover:bg-slate-50"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span
                    className="inline-block px-2 py-0.5 font-mono text-xs font-medium"
                    style={{ background: "#a7ea00", color: "#0f172a" }}
                  >
                    Guide
                  </span>
                  <span className="text-xs font-medium tracking-[0.15em] text-slate-400 uppercase">
                    {label}
                  </span>
                </div>
                <h2 className="mb-3 text-base font-medium leading-snug tracking-tight text-slate-900 transition-colors group-hover:text-slate-700">
                  {title}
                </h2>
                <p className="grow text-sm leading-relaxed font-light text-slate-500">
                  {desc}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xs font-light text-slate-400">
                    {readTime} lesing
                  </span>
                  <span className="text-sm font-light text-slate-400 transition-transform duration-200 group-hover:translate-x-0.5">
                    →
                  </span>
                </div>
              </Link>
            ))}
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
