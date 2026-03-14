import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hva koster en nettside for bedrift?",
  description:
    "Konkret prisoversikt for nettsideutvikling i Norge. Hva påvirker prisen, hva du kan forvente på ulike budsjettnivåer, og hva du bør spørre om i et tilbud.",
};

const pricingTiers = [
  {
    name: "Presentasjonsside",
    range: "kr 8 000 – 25 000",
    pages: "1–5 sider",
    includes: [
      "Basert på mal med tilpasning",
      "Kontaktskjema",
      "Responsivt design",
      "Grunnleggende SEO",
      "Enkel bildebehandling",
    ],
    bestFor: "Nyoppstartede bedrifter og enkeltpersoner som trenger enkel tilstedeværelse.",
    featured: false,
  },
  {
    name: "Bedriftsside",
    range: "kr 25 000 – 75 000",
    pages: "5–15 sider",
    includes: [
      "Tilpasset design",
      "CMS for innholdsoppdateringer",
      "Teknisk SEO innebygd",
      "Optimalisert kontaktflyt",
      "Core Web Vitals-fokus",
      "Blogg eller nyheter",
    ],
    bestFor: "Etablerte SMB-er som vil ha en løsning som faktisk konverterer.",
    featured: true,
  },
  {
    name: "Tilpasset løsning",
    range: "kr 75 000 – 200 000+",
    pages: "Ubegrenset omfang",
    includes: [
      "Fullt custom design",
      "Nettbutikk eller booking",
      "API-integrasjoner",
      "Avansert CMS",
      "Full SEO-pakke",
      "Ytelsesoptimalisering",
    ],
    bestFor: "Bedrifter med komplekse behov, netthandel eller integrasjonsbehov.",
    featured: false,
  },
];

const priceFactors = [
  {
    label: "Antall sider og innhold",
    desc: "Flere sider, mer tekst og bilder koster mer. Enkel struktur er billigere.",
  },
  {
    label: "Tilpasset design vs. mal",
    desc: "Et unikt design tar lengre tid enn å tilpasse en eksisterende mal.",
  },
  {
    label: "Funksjonalitet",
    desc: "Kontaktskjema er enkelt. Nettbutikk, booking og integrasjoner er komplekst.",
  },
  {
    label: "Innholdsproduksjon",
    desc: "Trenger du hjelp med tekst og bilder? Det er ekstraarbeid som koster.",
  },
  {
    label: "SEO-arbeid",
    desc: "Teknisk SEO kan bygges inn, men strategisk innholdsarbeid er løpende.",
  },
  {
    label: "Hvem gjør jobben",
    desc: "Norsk byrå med direkte kontakt koster mer enn outsourcet arbeid — men gir mer.",
  },
];

const ongoingCosts = [
  { item: "Domene", range: "kr 200–500 / år" },
  { item: "Hosting", range: "kr 1 500–8 000 / år" },
  { item: "Vedlikeholdsavtale", range: "kr 1 000–4 000 / mnd" },
  { item: "SEO-innhold og tekst", range: "kr 2 000–8 000 / mnd" },
  { item: "Annonsering (betalt)", range: "Varierer — separat budsjett" },
];

const offerChecklist = [
  "Fast pris eller timebasis med tak?",
  "Hvem eier koden og domenet etter levering?",
  "Hva er inkludert: design, utvikling, tekst, bilder?",
  "Hvem gjør faktisk arbeidet — eller blir det outsourcet?",
  "Hva koster vedlikehold og endringer i etterkant?",
  "Hva skjer hvis du trenger noe utenfor scope?",
  "Hvem kan du ringe hvis noe går galt?",
];

const cornerBrackets = [
  "top-6 left-6 border-l-2 border-t-2",
  "top-6 right-6 border-r-2 border-t-2",
  "bottom-6 left-6 border-l-2 border-b-2",
  "bottom-6 right-6 border-r-2 border-b-2",
];

export default function PrisNettsidenPage() {
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
            className="pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] opacity-20"
            style={{
              background:
                "radial-gradient(ellipse at top right, #a7ea00 0%, transparent 65%)",
            }}
            aria-hidden="true"
          />
          <div className="relative z-10 mx-auto max-w-3xl">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
              Prisoversikt
            </p>
            <h1 className="text-4xl leading-tight font-light tracking-tight text-slate-900 sm:text-5xl">
              Hva koster en nettside
              <br />
              <span className="font-semibold">for bedrift i Norge?</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed font-light text-slate-500">
              Her er ærlige prisnivåer, hva som faktisk påvirker kostnaden, og
              hva du bør sjekke før du sier ja til et tilbud.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Link
                href="/#kontakt"
                className="group inline-flex items-center gap-2 border border-slate-900 px-6 py-3 text-sm font-medium tracking-wide text-slate-900 transition-all hover:border-[#a7ea00] hover:bg-[#a7ea00] hover:text-slate-950"
              >
                Be om et tilbud
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
              <p className="text-xs font-light text-slate-400">
                Alle priser er eks. mva.
              </p>
            </div>
          </div>
        </section>

        {/* Price factors */}
        <section className="mx-auto max-w-5xl px-6 py-20">
          <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
            Hva påvirker prisen
          </p>
          <h2 className="mb-12 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
            Ingen nettside koster det{" "}
            <span className="font-medium">samme</span>
          </h2>
          <div className="grid gap-px bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
            {priceFactors.map(({ label, desc }) => (
              <div key={label} className="bg-white p-6">
                <h3 className="mb-2 text-sm font-medium text-slate-900">
                  {label}
                </h3>
                <p className="text-sm leading-relaxed font-light text-slate-500">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing tiers — unique element */}
        <section className="border-t border-slate-100 bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
              Prisnivåer
            </p>
            <h2 className="mb-3 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
              Hva du kan forvente på{" "}
              <span className="font-medium">ulike budsjett</span>
            </h2>
            <p className="mb-12 text-sm leading-relaxed font-light text-slate-500">
              Disse er veiledende prisnivåer for det norske markedet. Nøyaktig
              pris avhenger alltid av scope og innhold.
            </p>

            <div className="grid gap-px bg-slate-200 md:grid-cols-3">
              {pricingTiers.map(({ name, range, pages, includes, bestFor, featured }) => (
                <div
                  key={name}
                  className={`relative flex flex-col bg-white p-8 ${featured ? "ring-2 ring-inset" : ""}`}
                  style={featured ? { "--tw-ring-color": "#a7ea00" } as React.CSSProperties : {}}
                >
                  {featured && (
                    <div
                      className="pointer-events-none absolute top-0 left-0 h-1 w-full"
                      style={{ background: "#a7ea00" }}
                      aria-hidden="true"
                    />
                  )}
                  {featured && (
                    <div className="mb-4">
                      <span
                        className="inline-block px-2 py-0.5 font-mono text-xs font-medium"
                        style={{ background: "#a7ea00", color: "#0f172a" }}
                      >
                        Vanligste valg
                      </span>
                    </div>
                  )}
                  {!featured && <div className="mb-4 h-5" />}

                  <h3 className="mb-1 text-base font-medium text-slate-900">
                    {name}
                  </h3>
                  <p className="mb-4 text-xs font-light text-slate-400">
                    {pages}
                  </p>

                  <p className="mb-6 text-2xl font-light tracking-tight text-slate-900">
                    {range}
                  </p>

                  <ul className="mb-8 grow space-y-2.5">
                    {includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm font-light text-slate-600"
                      >
                        <span
                          className="mt-0.5 shrink-0 text-xs"
                          style={{ color: "#a7ea00" }}
                        >
                          ✓
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-slate-100 pt-5">
                    <p className="mb-1 text-xs font-medium tracking-[0.1em] text-slate-400 uppercase">
                      Passer for
                    </p>
                    <p className="text-xs leading-relaxed font-light text-slate-500">
                      {bestFor}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm leading-relaxed font-light text-slate-500">
              Alle prisene er estimater eks. mva. Vil du ha et konkret tilbud
              for din situasjon?{" "}
              <Link
                href="/#kontakt"
                className="text-slate-700 underline underline-offset-4 transition-colors hover:text-slate-900"
              >
                Send oss en melding
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Ongoing costs */}
        <section className="border-t border-slate-100">
          <div className="mx-auto max-w-3xl px-6 py-20">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
              Løpende kostnader
            </p>
            <h2 className="mb-3 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
              Etter lansering koster det{" "}
              <span className="font-medium">også noe</span>
            </h2>
            <p className="mb-10 text-sm leading-relaxed font-light text-slate-500">
              Mange fokuserer bare på byggekostnaden. Men en nettside som lever
              over tid har løpende utgifter.
            </p>

            <div className="space-y-px border border-slate-200">
              {ongoingCosts.map(({ item, range }, i) => (
                <div
                  key={item}
                  className={`flex items-center justify-between px-6 py-4 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}
                >
                  <p className="text-sm font-light text-slate-700">{item}</p>
                  <p className="font-mono text-sm text-slate-400">{range}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm leading-relaxed font-light text-slate-500">
              En vedlikeholdsavtale er ikke nødvendig, men anbefalt. Den sikrer
              at noen har ansvar for oppdateringer, sikkerhet og at siden
              fortsetter å fungere.
            </p>
          </div>
        </section>

        {/* Offer checklist */}
        <section className="border-t border-slate-100 bg-slate-50">
          <div className="mx-auto max-w-3xl px-6 py-20">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
              Sjekkliste
            </p>
            <h2 className="mb-3 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
              Hva du bør spørre om{" "}
              <span className="font-medium">i et tilbud</span>
            </h2>
            <p className="mb-10 text-sm leading-relaxed font-light text-slate-500">
              En god leverandør svarer tydelig på alle disse punktene. Er
              svarene vage — gå videre.
            </p>

            <ul className="space-y-3">
              {offerChecklist.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-4 border border-slate-200 bg-white px-5 py-4"
                >
                  <span
                    className="mt-0.5 shrink-0 font-mono text-sm font-medium"
                    style={{ color: "#a7ea00" }}
                  >
                    ?
                  </span>
                  <p className="text-sm leading-relaxed font-light text-slate-700">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Why cheap can be expensive */}
        <section className="border-t border-slate-100">
          <div className="mx-auto max-w-3xl px-6 py-20">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
              Vær obs
            </p>
            <h2 className="mb-8 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
              Hvorfor billig kan ende{" "}
              <span className="font-medium">dyrt</span>
            </h2>
            <div className="space-y-5 text-sm leading-relaxed font-light text-slate-600">
              <p>
                Et tilbud på kr 5 000 for en komplett nettside høres bra ut —
                helt til du oppdager at det er en mal med ditt logo innsatt,
                du eier ingen kode, og all fremtidig hjelp koster timespriser
                ingen fortalte deg om.
              </p>
              <p>
                Lave priser i norsk kontekst betyr ofte at jobben gjøres av
                innleide ressurser i utlandet. Det kan fungere — men det betyr
                gjerne liten kontroll, lang responstid og begrenset norsk
                forståelse av markedet.
              </p>
              <p>
                Det du bør betale for er et{" "}
                <strong className="font-medium text-slate-800">
                  forutsigbart resultat
                </strong>{" "}
                — fast pris, tydelige leveranser og noen som tar ansvar hvis
                noe ikke er som avtalt.
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
              className={`pointer-events-none absolute h-8 w-8 border-[#a7ea00] opacity-20 ${cls}`}
              aria-hidden="true"
            />
          ))}
          <div className="relative z-10 mx-auto max-w-2xl px-6 py-24 text-center">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-500 uppercase">
              Be om tilbud
            </p>
            <h2 className="text-3xl font-light tracking-tight text-white sm:text-4xl">
              Hva koster din løsning konkret?
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-light text-slate-400">
              Send oss en kort beskrivelse av hva du trenger, så gir vi deg en
              fast pris — uten overraskelser.
            </p>
            <div className="mt-8">
              <Link
                href="/#kontakt"
                className="group inline-flex items-center gap-2 bg-[#a7ea00] px-8 py-3.5 text-sm font-medium tracking-wide text-slate-950 transition-all hover:bg-white"
              >
                Be om tilbud
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
