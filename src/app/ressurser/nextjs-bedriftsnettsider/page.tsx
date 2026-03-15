import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hvorfor vi bruker Next.js til moderne bedriftsnettsider",
  description:
    "Next.js gir ytelse, fleksibilitet og utviklaropplevelse som WordPress og tradisjonelle løsninger ikke kan matche. Her er den faglige begrunnelsen.",
};

const advantages = [
  {
    id: "01",
    title: "Server-side rendering og statisk generering",
    desc: "Next.js lar oss velge per side om innholdet skal genereres statisk ved build-tid, rendres på server, eller hentes dynamisk. Det betyr at en markedsføringsside lastes som ren HTML fra en CDN — uten å vente på JavaScript.",
  },
  {
    id: "02",
    title: "Innebygd bildeoptimalisering",
    desc: "next/image håndterer lazy loading, riktig størrelse per enhet og moderne formater som WebP automatisk. Det er ikke noe man må konfigurere eller huske — det er standardoppsettet.",
  },
  {
    id: "03",
    title: "TypeScript som standard",
    desc: "Typesikker kode betyr færre runtime-feil og bedre utvikleropplevelse. For prosjekter som skal vedlikeholdes over tid — av deg, av oss, eller av en annen utvikler — er dette ikke valgfritt.",
  },
  {
    id: "04",
    title: "Filbasert routing",
    desc: "Mappestruktur i koden speiler URL-strukturen på nettstedet. Det gjør koden lettere å orientere seg i og enklere å overdra.",
  },
  {
    id: "05",
    title: "API-ruter i samme prosjekt",
    desc: "Trenger du et kontaktskjema, en webhook, eller en lett serverside-funksjon? Det bor i samme repo som resten av nettstedet. Ingen separat backend å deployere.",
  },
  {
    id: "06",
    title: "Vercel-integrasjon",
    desc: "Next.js er laget av Vercel, som betyr at deploymenten er triviell og infrastrukturen er optimalisert for nettopp dette rammeverket. Preview-miljøer for hvert PR, automatisk HTTPS, global CDN — inkludert i gratisplanen for de fleste bedriftsnettsteder.",
  },
];

const comparisonRows = [
  {
    topic: "Innlastingstid (mobil)",
    nextjs: "Statisk HTML, CDN-servert. Typisk under 1 s.",
    wordpress: "PHP genererer siden ved hvert besøk. Typisk 2–5 s uten tung caching.",
  },
  {
    topic: "SEO",
    nextjs: "Ferdig-rendret HTML tilgjengelig for crawler fra første byte.",
    wordpress: "Avhenger av plugins (Yoast etc.) og caching-konfigurasjon.",
  },
  {
    topic: "Sikkerhet",
    nextjs: "Ingen database eksponert mot nett, ingen plugin-sårbarhet.",
    wordpress: "Hyppige oppdateringer påkrevd. Plugins er den vanligste angrepsflaten.",
  },
  {
    topic: "Vedlikehold",
    nextjs: "Avhengigheter oppdateres av utvikler. Forutsigbart.",
    wordpress: "Plugin-kompatibilitet etter WP-oppgraderinger er et tilbakevendende problem.",
  },
  {
    topic: "Innholdsredigering",
    nextjs: "Kobles mot et CMS (Sanity, Contentful, etc.) eller MDX-filer.",
    wordpress: "Innebygd redigeringsgrensesnitt — lavere terskel for ikke-tekniske brukere.",
  },
  {
    topic: "Tilpasningsnivå",
    nextjs: "Ubegrenset. Alt er kode.",
    wordpress: "Begrenset av tema og plugin-arkitektur med mindre man bygger custom.",
  },
];

const notRightFor = [
  {
    title: "Enkle informasjonssider med hyppig innholdsoppdatering",
    desc: "Skal markedsavdelingen oppdatere innhold daglig uten teknisk bistand? Da er WordPress eller et dedikert CMS med et godt redigeringsgrensesnitt mer praktisk.",
  },
  {
    title: "Budsjett som ikke strekker til for skreddersøm",
    desc: "Next.js krever en utvikler. For et enklere nettsted med begrenset budsjett kan et WordPress-tema eller Squarespace gi bedre verdi per krone.",
  },
  {
    title: "E-handelsprosjekter av en viss størrelse",
    desc: "For store nettbutikker er Shopify eller WooCommerce modne plattformer med eksisterende infrastruktur for ordre, lager og betalinger. Next.js er et godt valg for custom storefronts på toppen av disse — men er sjelden hele løsningen alene.",
  },
];

const cornerBrackets = [
  "top-6 left-6 border-l-2 border-t-2",
  "top-6 right-6 border-r-2 border-t-2",
  "bottom-6 left-6 border-l-2 border-b-2",
  "bottom-6 right-6 border-r-2 border-b-2",
];

export default function NextjsBedriftsnettsiderPage() {
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
                Faglig
              </span>
              <span className="text-xs font-light text-slate-400">
                Ca. 5 minutters lesing
              </span>
            </div>
            <h1 className="text-4xl leading-tight font-light tracking-tight text-slate-900 sm:text-5xl">
              Hvorfor vi bruker Next.js til{" "}
              <br />
              <span className="font-semibold">moderne bedriftsnettsider</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed font-light text-slate-500">
              Det finnes gode grunner til å velge Next.js fremfor WordPress eller
              andre tradisjonelle løsninger — og det finnes tilfeller der det
              ikke er riktig valg. Her er den ærlige begrunnelsen.
            </p>
          </div>
        </section>

        {/* Editorial intro */}
        <section className="mx-auto max-w-3xl px-6 py-20">
          <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
            Bakgrunn
          </p>
          <h2 className="mb-8 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
            Et rammeverk er et valg —{" "}
            <span className="font-medium">ikke en religion</span>
          </h2>
          <div className="space-y-5 text-sm leading-relaxed font-light text-slate-600">
            <p>
              Vi bruker Next.js fordi det løser de problemene vi møter oftest
              for bedriftsnettsider: treghet, vedlikeholdsgjeld, sikkerhetshull
              og vanskelig skalerbarhet. Det er ikke fordi det er nytt eller
              fordi det er populært på Twitter.
            </p>
            <p>
              Next.js er et React-basert rammeverk som håndterer routing,
              rendering, bildeoptimalisering og mye annet ut av boksen. Det er
              i dag det mest brukte rammeverket for produksjonsklare
              React-applikasjoner, og drives aktivt av Vercel — med bidrag fra
              blant annet Google, Meta og Shopify.
            </p>
            <p>
              For kunden betyr dette i praksis: en nettside som laster raskt,
              rangerer godt, er billig å hoste og holder seg vedlikeholdbar over
              tid. Det er ikke teknologihype — det er konsekvensen av å velge
              riktig verktøy for jobben.
            </p>
          </div>
        </section>

        {/* Advantages grid */}
        <section className="border-t border-slate-100 bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
              Tekniske fordeler
            </p>
            <h2 className="mb-3 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
              Seks ting Next.js gjør{" "}
              <span className="font-medium">bedre enn alternativene</span>
            </h2>
            <p className="mb-12 text-sm leading-relaxed font-light text-slate-500">
              Ikke en uttømmende liste, men de seks egenskapene som har størst
              praktisk betydning for en typisk bedriftsnettside.
            </p>

            <div className="grid gap-px bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
              {advantages.map(({ id, title, desc }) => (
                <div key={id} className="flex flex-col bg-white p-7">
                  <span
                    className="mb-4 inline-block self-start px-2 py-0.5 font-mono text-xs font-medium"
                    style={{ background: "#a7ea00", color: "#0f172a" }}
                  >
                    {id}
                  </span>
                  <h3 className="mb-2.5 text-sm font-semibold tracking-tight text-slate-900">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed font-light text-slate-500">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison table */}
        <section className="border-t border-slate-100">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
              Sammenligning
            </p>
            <h2 className="mb-3 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
              Next.js vs. WordPress —{" "}
              <span className="font-medium">side ved side</span>
            </h2>
            <p className="mb-12 text-sm leading-relaxed font-light text-slate-500">
              WordPress er ikke dårlig. Det er rett og slett designet for
              andre brukstilfeller. Her er de viktigste praktiske forskjellene.
            </p>

            <div className="overflow-x-auto">
              <div className="min-w-[600px]">
                <div className="grid grid-cols-[1fr_1fr_1fr] gap-px bg-slate-200">
                  <div className="bg-slate-900 px-5 py-3">
                    <span className="text-xs font-medium tracking-[0.15em] text-slate-400 uppercase">
                      Område
                    </span>
                  </div>
                  <div className="bg-slate-900 px-5 py-3">
                    <span
                      className="font-mono text-xs font-medium"
                      style={{ color: "#a7ea00" }}
                    >
                      Next.js
                    </span>
                  </div>
                  <div className="bg-slate-900 px-5 py-3">
                    <span className="text-xs font-medium text-slate-400">
                      WordPress
                    </span>
                  </div>
                  {comparisonRows.map(({ topic, nextjs, wordpress }) => (
                    <>
                      <div
                        key={`${topic}-topic`}
                        className="bg-white px-5 py-4"
                      >
                        <p className="text-sm font-medium text-slate-900">
                          {topic}
                        </p>
                      </div>
                      <div
                        key={`${topic}-nextjs`}
                        className="bg-white px-5 py-4"
                      >
                        <p className="text-sm font-light leading-relaxed text-slate-600">
                          {nextjs}
                        </p>
                      </div>
                      <div
                        key={`${topic}-wp`}
                        className="bg-white px-5 py-4"
                      >
                        <p className="text-sm font-light leading-relaxed text-slate-500">
                          {wordpress}
                        </p>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* When it's not right */}
        <section className="border-t border-slate-100 bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
              Ærlig vurdering
            </p>
            <h2 className="mb-3 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
              Når Next.js{" "}
              <span className="font-medium">ikke er riktig valg</span>
            </h2>
            <p className="mb-12 text-sm leading-relaxed font-light text-slate-500">
              Et rammeverk er et verktøy. Det finnes prosjekter der et annet
              verktøy er bedre egnet.
            </p>

            <div className="grid gap-px bg-slate-200 sm:grid-cols-3">
              {notRightFor.map(({ title, desc }) => (
                <div key={title} className="bg-white p-7">
                  <h3 className="mb-2.5 text-sm font-semibold tracking-tight text-slate-900">
                    {title}
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
              className={`pointer-events-none absolute h-8 w-8 border-brand opacity-20 ${cls}`}
              aria-hidden="true"
            />
          ))}
          <div className="relative z-10 mx-auto max-w-2xl px-6 py-24 text-center">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-500 uppercase">
              Nysgjerrig på hva som passer for deg?
            </p>
            <h2 className="text-3xl font-light tracking-tight text-white sm:text-4xl">
              Vi hjelper deg å velge riktig teknologi
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-light text-slate-400">
              Ikke alle trenger Next.js. Men alle fortjener en ærlig vurdering
              av hva løsningen faktisk bør bygges på.
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
