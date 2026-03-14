import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lage nettside for bedrift: selv eller bruke byrå?",
  description:
    "Skal du lage nettsiden selv eller bruke byrå? Vi går gjennom valgene, hva du bør ha klart før du starter, og de vanligste feilene å unngå.",
};

const selfPros = [
  "Lav inngangsbarriere — kom i gang raskt",
  "Full kontroll over innhold og oppdateringer",
  "Billig på kort sikt",
];

const selfCons = [
  "Tar mer tid enn du tror",
  "Begrenset av plattformens muligheter",
  "Du eier ikke koden",
  "SEO er begrenset og manuelt",
  "Alt vedlikehold ligger på deg",
  "Resultatet speiler ferdighetene dine",
];

const agencyPros = [
  "Profesjonelt resultat fra dag én",
  "Teknisk SEO innebygd i løsningen",
  "Skreddersydd til din bedrift",
  "Du eier koden og løsningen",
  "Noen har ansvar for vedlikehold",
  "Konverterende design — ikke bare pent",
];

const agencyCons = [
  "Høyere startpris",
  "Du er avhengig av andres tidslinje",
];

const beforeYouStart = [
  {
    n: "01",
    title: "Hvem er du, og hva tilbyr du?",
    desc: "Klart budskap først. Nettsiden er et verktøy for å kommunisere dette — ikke et sted å finne det ut.",
  },
  {
    n: "02",
    title: "Hvem er kunden din?",
    desc: "Alder, behov, søkevaner. Jo tydeligere bilde du har, jo bedre kan siden snakke til dem.",
  },
  {
    n: "03",
    title: "Hva skal kunden gjøre på siden?",
    desc: "Ring deg? Fylle ut skjema? Bestille? Velg én primær handling og gjør den enkel.",
  },
  {
    n: "04",
    title: "Har du innhold klart?",
    desc: "Tekst, bilder, logo. Hvis ikke — avklar om det er inkludert i løsningen, eller om du ordner det selv.",
  },
  {
    n: "05",
    title: "Hva er budsjettet ditt?",
    desc: "Vær ærlig. Det avgjør hva som er realistisk — og hjelper en leverandør å gi deg et godt tilbud.",
  },
];

const commonMistakes = [
  "Starter med design, ikke innhold — resulterer i en pen side som ikke kommuniserer noe",
  "For mye tekst, for lite fokus — ingen leser essayet om historien din",
  "Ingen tydelig CTA — besøkende vet ikke hva de skal gjøre",
  "Glemmer mobilversjonen til det er for sent",
  "Manglende kontaktinformasjon — du gjemmer deg",
  "Ingen plan for vedlikehold — siden råtner sakte men sikkert",
];

const cornerBrackets = [
  "top-6 left-6 border-l-2 border-t-2",
  "top-6 right-6 border-r-2 border-t-2",
  "bottom-6 left-6 border-l-2 border-b-2",
  "bottom-6 right-6 border-r-2 border-b-2",
];

export default function LageNettsidenForBedriftPage() {
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
            className="pointer-events-none absolute bottom-0 left-0 h-[350px] w-[350px] opacity-15"
            style={{
              background:
                "radial-gradient(ellipse at bottom left, #a7ea00 0%, transparent 65%)",
            }}
            aria-hidden="true"
          />
          <div className="relative z-10 mx-auto max-w-3xl">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
              Lage nettside for bedrift
            </p>
            <h1 className="text-4xl leading-tight font-light tracking-tight text-slate-900 sm:text-5xl">
              Selv eller
              <br />
              <span className="font-semibold">bruke byrå?</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed font-light text-slate-500">
              Begge veier kan fungere — men de passer ikke for alle. Her er
              hva du bør vurdere før du bestemmer deg.
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

        {/* Selv vs Byrå — unique element */}
        <section className="border-b border-slate-100">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
              Valget
            </p>
            <h2 className="mb-12 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
              Gjør-det-selv vs.{" "}
              <span className="font-medium">bruke byrå</span>
            </h2>

            <div className="grid gap-px bg-slate-200 md:grid-cols-2">
              {/* Self-serve card */}
              <div className="bg-white p-8">
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-6 bg-slate-300" />
                  <h3 className="text-sm font-medium tracking-[0.15em] text-slate-500 uppercase">
                    Gjør det selv
                  </h3>
                </div>

                <ul className="mb-6 space-y-2.5">
                  {selfPros.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm font-light text-slate-600"
                    >
                      <span className="mt-0.5 text-slate-400">+</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <ul className="mb-8 space-y-2.5">
                  {selfCons.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm font-light text-slate-400"
                    >
                      <span className="mt-0.5 text-slate-300">−</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="border-t border-slate-100 pt-6">
                  <p className="mb-1 text-xs font-medium tracking-[0.1em] text-slate-400 uppercase">
                    Passer best for
                  </p>
                  <p className="text-sm font-light leading-relaxed text-slate-500">
                    Enkel tilstedeværelse på nett, lavt budsjett, og du har
                    tid til å lære deg verktøyene.
                  </p>
                </div>
              </div>

              {/* Agency card */}
              <div className="relative bg-white p-8">
                <div
                  className="pointer-events-none absolute top-0 left-0 h-1 w-full"
                  style={{ background: "#a7ea00" }}
                  aria-hidden="true"
                />
                <div className="mb-6 flex items-center gap-3">
                  <span
                    className="h-px w-6"
                    style={{ background: "#a7ea00" }}
                  />
                  <h3 className="text-sm font-medium tracking-[0.15em] text-slate-700 uppercase">
                    Bruke byrå
                  </h3>
                </div>

                <ul className="mb-6 space-y-2.5">
                  {agencyPros.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm font-light text-slate-700"
                    >
                      <span className="mt-0.5" style={{ color: "#a7ea00" }}>
                        +
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <ul className="mb-8 space-y-2.5">
                  {agencyCons.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm font-light text-slate-400"
                    >
                      <span className="mt-0.5 text-slate-300">−</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="border-t border-slate-100 pt-6">
                  <p className="mb-1 text-xs font-medium tracking-[0.1em] text-slate-400 uppercase">
                    Passer best for
                  </p>
                  <p className="text-sm font-light leading-relaxed text-slate-500">
                    Bedrifter som vil ha en løsning som faktisk jobber for dem
                    — og ikke vil bruke måneder på å lære seg webdesign.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Before you start — numbered steps */}
        <section className="bg-slate-50">
          <div className="mx-auto max-w-3xl px-6 py-20">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
              Forberedelse
            </p>
            <h2 className="mb-12 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
              Hva bør være klart{" "}
              <span className="font-medium">før du starter</span>
            </h2>

            <div className="space-y-px bg-slate-200">
              {beforeYouStart.map(({ n, title, desc }) => (
                <div
                  key={n}
                  className="flex gap-6 bg-white px-7 py-6"
                >
                  <span
                    className="shrink-0 font-mono text-xs font-medium"
                    style={{ color: "#a7ea00" }}
                  >
                    {n}
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

        {/* Common mistakes */}
        <section className="border-t border-slate-100">
          <div className="mx-auto max-w-3xl px-6 py-20">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
              Lær av andres feil
            </p>
            <h2 className="mb-10 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
              Vanlige feil når bedrifter{" "}
              <span className="font-medium">lager nettside</span>
            </h2>

            <ul className="space-y-4">
              {commonMistakes.map((mistake) => (
                <li key={mistake} className="flex items-start gap-4">
                  <span className="mt-1 shrink-0 text-xs text-slate-300">
                    ◆
                  </span>
                  <p className="text-sm leading-relaxed font-light text-slate-600">
                    {mistake}
                  </p>
                </li>
              ))}
            </ul>
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
              Vil du ha hjelp?
            </p>
            <h2 className="text-3xl font-light tracking-tight text-white sm:text-4xl">
              Vi tar en innledende prat — uten forpliktelse
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-light text-slate-400">
              Fortell oss hva du driver med og hva du trenger. Vi gir deg et
              ærlig svar på hva som passer best.
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
