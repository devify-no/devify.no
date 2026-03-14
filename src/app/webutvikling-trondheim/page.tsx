import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Webutvikling i Trondheim for bedrifter som vil ha direkte dialog",
  description:
    "Vi jobber med Trondheim-bedrifter og leverer nasjonalt. Teknisk solide nettsider med teknisk SEO, rask levering og ingen mellomledd.",
};

// Technical quality grid — appeals to Trondheim's tech-forward culture
const technicalQuality = [
  {
    id: "01",
    label: "Core Web Vitals",
    desc: "Google måler og rangerer etter hastighet, stabilitet og interaktivitet. Vi optimaliserer for disse fra start.",
  },
  {
    id: "02",
    label: "Semantisk HTML",
    desc: "Riktig kodestruktur hjelper søkemotorer å forstå innholdet, og gjør siden tilgjengelig for alle.",
  },
  {
    id: "03",
    label: "Moderne stack",
    desc: "Next.js, TypeScript, Tailwind. Etablerte verktøy med lang levetid — ikke ny trend hvert kvartal.",
  },
  {
    id: "04",
    label: "Ingen unødvendig kode",
    desc: "Tredje-parts biblioteker og plugins introduserer risiko og trege lastetider. Vi bygger det vi trenger.",
  },
  {
    id: "05",
    label: "Åpen kildekode",
    desc: "Du kan se koden, gi den til en annen utvikler, eller ta den videre selv. Ingen lock-in.",
  },
  {
    id: "06",
    label: "Dokumentert levering",
    desc: "Kodebase, innlogginger og veiledning leveres ved prosjektavslutning — ikke gjemt bak support-email.",
  },
];

const howWeWork = [
  {
    step: "01",
    title: "Innledende prat",
    desc: "Vi snakker om hva du trenger. Ingen lang behovsanalyse — bare en ærlig samtale om mål og budsjett.",
  },
  {
    step: "02",
    title: "Tilbud med fast pris",
    desc: "Du får et skriftlig tilbud med scope, pris og tidslinje. Ingen åpne ender.",
  },
  {
    step: "03",
    title: "Bygging og løpende dialog",
    desc: "Vi bygger, du ser fremgang underveis. Du stiller spørsmål direkte til den som bygger.",
  },
  {
    step: "04",
    title: "Lansering og overlevering",
    desc: "Siden lanseres, du får all kode og tilganger. Vedlikeholdsavtale om det er ønskelig.",
  },
];

const cornerBrackets = [
  "top-6 left-6 border-l-2 border-t-2",
  "top-6 right-6 border-r-2 border-t-2",
  "bottom-6 left-6 border-l-2 border-b-2",
  "bottom-6 right-6 border-r-2 border-b-2",
];

export default function WebutviklingTrondheimPage() {
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
            className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] opacity-15"
            style={{
              background:
                "radial-gradient(ellipse at bottom left, #a7ea00 0%, transparent 65%)",
            }}
            aria-hidden="true"
          />
          <div className="relative z-10 mx-auto max-w-3xl">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
              Webutvikling · Trondheim
            </p>
            <h1 className="text-4xl leading-tight font-light tracking-tight text-slate-900 sm:text-5xl">
              Webutvikling i Trondheim
              <br />
              <span className="font-semibold">med teknisk tyngde</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed font-light text-slate-500">
              Trondheim har en sterk teknisk kultur. Vi bygger nettsider som
              holder samme standard: korrekt kode, reel ytelse og ingen
              snarveier. Direkte dialog med utvikleren, fra start til mål.
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
                Nasjonale leveranser, norsk kontaktpunkt
              </p>
            </div>
          </div>
        </section>

        {/* Editorial */}
        <section className="mx-auto max-w-3xl px-6 py-20">
          <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
            Ærlig om hvem vi er
          </p>
          <h2 className="mb-8 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
            Vi er ikke Trondheim-baserte.
            <br />
            <span className="font-medium">Men vi forstår hva dere trenger.</span>
          </h2>
          <div className="space-y-5 text-sm leading-relaxed font-light text-slate-600">
            <p>
              Dev AS er et lite norsk utviklingsbyrå med kunder over hele
              landet — inkludert Trondheim. Vi later ikke som vi sitter i
              Midtbyen, men vi leverer til bedrifter der med jevne mellomrom.
            </p>
            <p>
              Det vi ser i Trondheimsbedrifter er at de ofte stiller høyere
              tekniske krav enn gjennomsnittet. Mange har et forhold til
              teknologi gjennom NTNU-miljøet, startup-kulturen eller
              teknologiindustrien — og de vet forskjellen på en side som ser
              bra ut og en side som <em>er</em> bra.
            </p>
            <p>
              Det er den distinksjonen vi jobber etter: ikke visuell
              overflate, men teknisk solid grunn. Lynraskt, godt strukturert,
              og bygget for å leve lenge.
            </p>
          </div>
        </section>

        {/* Technical quality grid — unique element */}
        <section className="border-t border-slate-100 bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
              Hva teknisk kvalitet betyr i praksis
            </p>
            <h2 className="mb-12 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
              Seks ting vi ikke{" "}
              <span className="font-medium">kutter hjørner på</span>
            </h2>
            <div className="grid gap-px bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
              {technicalQuality.map(({ id, label, desc }) => (
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
            </div>
          </div>
        </section>

        {/* How we work — process steps */}
        <section className="border-t border-slate-100">
          <div className="mx-auto max-w-3xl px-6 py-20">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
              Arbeidsmetode
            </p>
            <h2 className="mb-12 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
              Forutsigbart fra{" "}
              <span className="font-medium">første til siste steg</span>
            </h2>
            <div className="space-y-px bg-slate-200">
              {howWeWork.map(({ step, title, desc }) => (
                <div key={step} className="flex gap-6 bg-white px-7 py-6">
                  <span
                    className="shrink-0 font-mono text-xs font-medium"
                    style={{ color: "#a7ea00" }}
                  >
                    {step}
                  </span>
                  <div>
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
        </section>

        {/* Tech tags strip */}
        <section className="border-t border-slate-100 bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-14">
            <p className="mb-6 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
              Stack
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "Next.js",
                "TypeScript",
                "React",
                "Tailwind CSS",
                "Vercel",
                "PostgreSQL",
                "Sanity",
                "Resend",
              ].map((tech) => (
                <span
                  key={tech}
                  className="border border-slate-200 bg-white px-3 py-1.5 font-mono text-xs text-slate-500"
                >
                  {tech}
                </span>
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
              Trondheim-bedrifter
            </p>
            <h2 className="text-3xl font-light tracking-tight text-white sm:text-4xl">
              Vil du ha en nettside som faktisk holder?
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-light text-slate-400">
              Send oss en melding og fortell hva du trenger. Vi svarer med
              et konkret og ærlig forslag.
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
