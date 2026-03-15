import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Headless CMS eller tradisjonell løsning? — Dev AS",
  description:
    "Når gir headless CMS mening, når gjør det ikke det, og hva bør du egentlig tenke på? En moden vurdering uten teknologihype.",
};

const headlessWhen = [
  {
    title: "Innholdet skal vises på flere kanaler",
    desc: "Nettside, app, digitalt skilt, e-post — om innholdet skal ut på mer enn én flate, er headless riktig. Du skriver én gang og distribuerer til alle kanaler via API.",
  },
  {
    title: "Frontenden krever full kontroll",
    desc: "Bygger du en Next.js-frontend med spesifikke ytelseskrav, animasjoner eller brukeropplevelse som Gutenberg-editoren aldri vil tillate? Da er headless veien å gå.",
  },
  {
    title: "Utviklings- og innholdsteamet jobber separat",
    desc: "Headless lar redaksjonelle brukere jobbe i et brukervennlig CMS-grensesnitt (Sanity, Contentful) mens utviklere jobber fritt i koden — uten at de blokkerer hverandre.",
  },
  {
    title: "Sikkerhet er kritisk",
    desc: "Et headless CMS eksponerer ikke databasen eller admin-panelet mot internett på samme måte som WordPress gjør. Angrepsvektoren er vesentlig smalere.",
  },
];

const headlessWhenNot = [
  {
    title: "Budsjettet er begrenset",
    desc: "Headless er dyrere å sette opp og krever mer kompetanse. For et enkelt nettsted med begrenset budsjett kan WordPress eller Squarespace gi langt bedre verdi per krone.",
  },
  {
    title: "Kunden trenger full selvstendighet fra dag én",
    desc: "Vil du at en ikke-teknisk person skal kunne redigere alt, legge til sider og endre layout uten hjelp? Da er WordPress med et godt tema fortsatt et fornuftig valg.",
  },
  {
    title: "Det er ingen vits å bygge det man kan kjøpe",
    desc: "Trenger du en blogg, en enkel porteføljeside eller en liten informasjonsside? Da er headless overkill. Ikke all kompleksitet er verdt prisen.",
  },
];

const cmsOptions = [
  {
    name: "Sanity",
    type: "Headless",
    strength: "Svært fleksibel skjemamodellering, React-basert studio som kan tilpasses, GROQ-spørringer.",
    suits: "Skreddersydde prosjekter der innholdsmodellen er kompleks eller unik.",
  },
  {
    name: "Contentful",
    type: "Headless",
    strength: "Modent system, god dokumentasjon, enkelt API. Bransjenes go-to for større team.",
    suits: "Bedrifter med dedikert innholdsteam og behov for robusthet.",
  },
  {
    name: "WordPress (headless)",
    type: "Hybrid",
    strength: "Kjent redigeringsgrensesnitt, stort plugin-bibliotek. REST API og WPGraphQL gjør det mulig å bruke WP som backend med custom frontend.",
    suits: "Kunder som allerede kjenner WordPress og ikke vil lære et nytt system.",
  },
  {
    name: "WordPress (tradisjonell)",
    type: "Tradisjonell",
    strength: "Alt i én pakke. Lavest terskel for oppsett og innholdsredigering. Stor community.",
    suits: "Informasjonssider, blogger og prosjekter med begrenset budsjett og teknisk kompetanse.",
  },
];

const customerQuestions = [
  {
    q: "Hvem skal oppdatere innholdet?",
    a: "En teknisk person med tid til å lære? Eller en markedsansvarlig som trenger noe intuitivt? Svaret påvirker CMS-valget mer enn noe annet.",
  },
  {
    q: "Skal nettstedet vokse eller er det stabilt?",
    a: "En headless arkitektur er mye lettere å skalere og utvide. Et tradisjonelt oppsett er raskere å komme i gang med.",
  },
  {
    q: "Hva er budsjettet for vedlikehold?",
    a: "Headless krever utviklerbistand ved strukturelle endringer. Tradisjonelle løsninger gir mer selvstendighet — men også mer teknisk gjeld over tid.",
  },
  {
    q: "Er innholdet ditt strukturert eller fri tekst?",
    a: "Strukturert innhold (produkter, bloggposter med faste felt, ansatte) passer perfekt for headless CMS. Fri tekstpublisering fungerer like godt i WordPress.",
  },
];

const cornerBrackets = [
  "top-6 left-6 border-l-2 border-t-2",
  "top-6 right-6 border-r-2 border-t-2",
  "bottom-6 left-6 border-l-2 border-b-2",
  "bottom-6 right-6 border-r-2 border-b-2",
];

export default function HeadlessCmsPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-slate-100">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <Link
            href="/ressurser"
            className="flex items-center gap-2 text-sm font-light text-slate-500 transition-colors hover:text-slate-900"
          >
            ← Ressurser
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
                Ca. 6 minutters lesing
              </span>
            </div>
            <h1 className="text-4xl leading-tight font-light tracking-tight text-slate-900 sm:text-5xl">
              Headless CMS eller{" "}
              <br />
              <span className="font-semibold">tradisjonell løsning?</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed font-light text-slate-500">
              Det finnes ikke ett riktig svar. Men det finnes tydelige signaler
              på hva som passer for ditt prosjekt — og det handler mer om
              bruksbehov enn om teknologi.
            </p>
          </div>
        </section>

        {/* Editorial intro */}
        <section className="mx-auto max-w-3xl px-6 py-20">
          <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
            Hva er forskjellen
          </p>
          <h2 className="mb-8 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
            Headless betyr at frontend og{" "}
            <span className="font-medium">innholdssystemet er separert</span>
          </h2>
          <div className="space-y-5 text-sm leading-relaxed font-light text-slate-600">
            <p>
              I en tradisjonell løsning — tenk WordPress — er publiseringsverktøy,
              database og frontend koblet tett sammen. Du logger inn, skriver et
              innlegg, og WordPress genererer HTML-siden. Enkelt og samlet.
            </p>
            <p>
              I en headless-arkitektur er innholdssystemet (CMS) kun ansvarlig
              for å lagre og levere innhold via et API. Frontenden — nettsiden
              du faktisk ser — er en separat applikasjon som henter innhold og
              bestemmer selv hvordan det vises. CMS-et har ingen «head», altså
              ingen presentasjonslag.
            </p>
            <p>
              Fordelen er fleksibilitet og separasjon av ansvar. Ulempen er
              mer kompleksitet og høyere oppsettskostnad. Det er ikke en valuta
              alle bør betale.
            </p>
          </div>
        </section>

        {/* When headless */}
        <section className="border-t border-slate-100 bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
              Når gir det mening
            </p>
            <h2 className="mb-12 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
              Velg headless CMS når…
            </h2>

            <div className="grid gap-px bg-slate-200 sm:grid-cols-2">
              {headlessWhen.map(({ title, desc }) => (
                <div key={title} className="bg-white p-7">
                  <div className="mb-3 flex items-start gap-3">
                    <span
                      className="mt-0.5 shrink-0 text-base leading-none"
                      style={{ color: "#a7ea00" }}
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    <h3 className="text-sm font-semibold tracking-tight text-slate-900">
                      {title}
                    </h3>
                  </div>
                  <p className="pl-6 text-sm leading-relaxed font-light text-slate-500">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* When not headless */}
        <section className="border-t border-slate-100">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
              Når gir det ikke mening
            </p>
            <h2 className="mb-12 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
              Headless er <span className="font-medium">ikke for alle</span>
            </h2>

            <div className="grid gap-px bg-slate-200 sm:grid-cols-3">
              {headlessWhenNot.map(({ title, desc }) => (
                <div key={title} className="bg-white p-7">
                  <div className="mb-3 flex items-start gap-3">
                    <span
                      className="mt-0.5 shrink-0 text-base leading-none text-slate-400"
                      aria-hidden="true"
                    >
                      ✗
                    </span>
                    <h3 className="text-sm font-semibold tracking-tight text-slate-900">
                      {title}
                    </h3>
                  </div>
                  <p className="pl-6 text-sm leading-relaxed font-light text-slate-500">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CMS options */}
        <section className="border-t border-slate-100 bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
              Konkrete valg
            </p>
            <h2 className="mb-3 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
              Systemene vi jobber med —{" "}
              <span className="font-medium">og hva de passer til</span>
            </h2>
            <p className="mb-12 text-sm font-light leading-relaxed text-slate-500">
              Det er ikke teknologien som bestemmer valget — det er
              bruksbehovet. Her er en kort karakteristikk av de vi kjenner best.
            </p>

            <div className="space-y-px bg-slate-200">
              {cmsOptions.map(({ name, type, strength, suits }) => (
                <div
                  key={name}
                  className="grid bg-white sm:grid-cols-[140px_1fr_1fr]"
                >
                  <div className="flex flex-col justify-center gap-1.5 border-b border-slate-100 p-5 sm:border-b-0 sm:border-r">
                    <p className="text-sm font-semibold text-slate-900">{name}</p>
                    <span
                      className="inline-block self-start px-2 py-0.5 font-mono text-xs font-medium"
                      style={
                        type === "Headless"
                          ? { background: "#a7ea00", color: "#0f172a" }
                          : type === "Hybrid"
                            ? { background: "#f1f5f9", color: "#475569" }
                            : { background: "#f1f5f9", color: "#64748b" }
                      }
                    >
                      {type}
                    </span>
                  </div>
                  <div className="border-b border-slate-100 p-5 sm:border-b-0 sm:border-r">
                    <p className="mb-1 text-xs font-medium tracking-wide text-slate-400 uppercase">
                      Styrke
                    </p>
                    <p className="text-sm font-light leading-relaxed text-slate-600">
                      {strength}
                    </p>
                  </div>
                  <div className="p-5">
                    <p className="mb-1 text-xs font-medium tracking-wide text-slate-400 uppercase">
                      Passer for
                    </p>
                    <p className="text-sm font-light leading-relaxed text-slate-600">
                      {suits}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Customer questions */}
        <section className="border-t border-slate-100">
          <div className="mx-auto max-w-3xl px-6 py-20">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
              Hva du bør tenke på
            </p>
            <h2 className="mb-8 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
              Fire spørsmål som gir deg svaret
            </h2>
            <div className="space-y-8">
              {customerQuestions.map(({ q, a }, i) => (
                <div key={q} className="flex gap-6">
                  <span className="shrink-0 font-mono text-xs text-slate-300 mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="mb-2 text-sm font-semibold text-slate-900">
                      {q}
                    </p>
                    <p className="text-sm font-light leading-relaxed text-slate-500">
                      {a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related reading */}
        <section className="border-t border-slate-100 px-6 py-12">
          <div className="mx-auto max-w-5xl">
            <p className="mb-5 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
              Les også
            </p>
            <div className="flex flex-col gap-5 sm:flex-row sm:gap-12">
              <Link
                href="/ressurser/nextjs-bedriftsnettsider"
                className="group flex items-start gap-3 text-sm text-slate-600 transition-colors hover:text-slate-900"
              >
                <span className="mt-0.5 shrink-0 text-slate-300 transition-transform duration-200 group-hover:translate-x-0.5">
                  →
                </span>
                <span>
                  <span className="block font-medium text-slate-900 group-hover:text-slate-700">
                    Hvorfor vi bruker Next.js til moderne bedriftsnettsider
                  </span>
                  <span className="text-xs font-light text-slate-400">
                    Faglig · 5 min lesing
                  </span>
                </span>
              </Link>
              <Link
                href="/ressurser/skreddersydd-nettside"
                className="group flex items-start gap-3 text-sm text-slate-600 transition-colors hover:text-slate-900"
              >
                <span className="mt-0.5 shrink-0 text-slate-300 transition-transform duration-200 group-hover:translate-x-0.5">
                  →
                </span>
                <span>
                  <span className="block font-medium text-slate-900 group-hover:text-slate-700">
                    Når lønner det seg å bygge skreddersydd?
                  </span>
                  <span className="text-xs font-light text-slate-400">
                    Guide · 5 min lesing
                  </span>
                </span>
              </Link>
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
              Usikker på hva som passer?
            </p>
            <h2 className="text-3xl font-light tracking-tight text-white sm:text-4xl">
              Vi hjelper deg å velge riktig løsning
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-light text-slate-400">
              Send oss en beskrivelse av prosjektet. Vi kommer med en ærlig
              anbefaling — uten å pushe den dyreste løsningen.
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
                href="/ressurser"
                className="text-sm font-light text-slate-400 transition-colors hover:text-slate-300"
              >
                ← Tilbake til ressurser
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
