import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hvordan lage en profesjonell nettside for bedrift",
  description:
    "En steg-for-steg guide til å lage en profesjonell bedriftsnettside — fra mål og struktur til design, tekst, mobil, hastighet, SEO og vedlikehold.",
};

// Eight steps — the unique element: detailed, structured how-to
const steps = [
  {
    n: "01",
    label: "Definer målet",
    summary: "Hva skal nettsiden faktisk oppnå?",
    content: [
      "Før du velger farger eller fonts, må du vite hva siden er laget for å gjøre. Er det å generere henvendelser? Selge produkter? Rekruttere? Forklare et komplekst tilbud?",
      "Velg én primær handling du vil at en besøkende skal ta. Alt annet på siden støtter den handlingen. Jo tydeligere målet er, jo enklere er det å ta gode beslutninger i alt som følger.",
      "En vanlig feil er å starte med design uten å ha svart på dette spørsmålet. Resultatet er en vakker side som ikke gjør noe konkret.",
    ],
    tip: "Skriv én setning: «En besøkende er ferdig med å besøke siden når de har [gjort X].»",
  },
  {
    n: "02",
    label: "Planlegg strukturen",
    summary: "Hvilke sider trenger du, og hva skal på hver?",
    content: [
      "De fleste bedriftsnettsider trenger ikke mer enn 4–6 sider: Forside, Tjenester/Produkter, Om oss, Kontakt — og eventuelt en blogg eller prosjektside.",
      "Forsiden er den viktigste. Den skal svare på tre spørsmål i løpet av sekunder: Hvem er dere? Hva gjør dere? Hva skal jeg gjøre her?",
      "Lag et enkelt kartlegg (pen og papir holder fint) med sidene og hva som skal være på hver av dem, før du begynner å bygge.",
    ],
    tip: "Ikke legg til sider fordi du «kan». Legg til sider fordi en besøkende trenger dem.",
  },
  {
    n: "03",
    label: "Design for tydlighet",
    summary: "Design som kommuniserer, ikke imponerer.",
    content: [
      "Profesjonelt design betyr ikke avansert design. Det betyr konsistent, tydelig og gjennomtenkt. Riktige farger, nok hvitt rom, lesbare fonter og en visuell hierarki som leder øyet.",
      "Vær forsiktig med å blande for mange farger, skrifttyper eller stilarter. Konsistens skaper tillit. Kaos skaper tvil.",
      "Om du bruker en mal, velg én som er enkel og godt bygget — og tilpass den til å reflektere din bedrift. En mal alle kjenner igjen er verre enn en enkel original.",
    ],
    tip: "Spørsmål å stille: Ser siden ut som den er laget av en seriøs bedrift? Er svaret usikkert, vet du hva du trenger å jobbe med.",
  },
  {
    n: "04",
    label: "Skriv tekst som konverterer",
    summary: "Folk leser ikke — de scanner.",
    content: [
      "Hold setningene korte. Bruk overskrifter og korte avsnitt. Skriv for den som er i tvil — ikke for den som allerede er overbevist.",
      "Unngå jargon og interne begreper. Skriv slik du ville forklart det til en ny bekjent på ti sekunder.",
      "Hvert avsnitt bør gi noe verdifullt. Om du sletter et avsnitt og ingen savner det, trengte det ikke å være der.",
    ],
    tip: "Skriv innholdet ditt i et tekstdokument før du begynner å bygge siden. Innhold former design — ikke omvendt.",
  },
  {
    n: "05",
    label: "Optimaliser for mobil",
    summary: "Over 70 % av norsk netttrafikk er mobil.",
    content: [
      "En responsiv side tilpasser seg skjermstørrelse — men det er ikke det samme som en god mobilopplevelse. Test siden aktivt på en ekte telefon, ikke bare i nettleserens dev-verktøy.",
      "Knapper og lenker må være store nok til å trykke på. Tekst må være lesbar uten å zoome. Kontaktskjema må fungere med mobilens tastatur.",
      "Bilder og video som ser bra ut på desktop kan ødelegge mobilopplevelsen om de ikke er tilpasset. Last ned Google PageSpeed Insights og test med en ekte mobil-URL.",
    ],
    tip: "Design mobilversjonen før desktopversjonen. Det tvinger deg til å prioritere det viktigste.",
  },
  {
    n: "06",
    label: "Optimaliser for hastighet",
    summary: "Trege sider mister besøkende og synlighet.",
    content: [
      "De vanligste synderne: for store bilder, for mange skripts fra tredjeparter og dårlig hosting. Bildene alene er ansvarlig for 60–70 % av tregheten i de fleste nettsider.",
      "Bruk riktige bildeformater (WebP fremfor JPEG/PNG), komprimer alltid, og sørg for at bilder er dimensjonert for faktisk visning — ikke 4000px-bilde i en 400px kolonne.",
      "Google Lighthouse og PageSpeed Insights gir deg konkrete tall og forslag. Mål — ikke gjett.",
    ],
    tip: "Mål siden din på PageSpeed Insights. Scor under 70 på mobil betyr at du har et konkret problem å løse.",
  },
  {
    n: "07",
    label: "Bygg inn SEO fra start",
    summary: "En side ingen finner er en side som ikke eksisterer.",
    content: [
      "Teknisk SEO starter med riktig HTML-struktur: én H1 per side, logisk H2/H3-hierarki, metatittel og metabeskrivelse på hver side, og en sitemap.xml som Google kan indeksere.",
      "Innholdsbasert SEO handler om å svare på spørsmål folk faktisk stiller. Tenk på hvilke søk din ideelle kunde gjør — og sørg for at innholdet ditt er det beste svaret på dem.",
      "Schema markup (strukturerte data) hjelper Google å forstå hva siden handler om og kan gi rich results i søk. Ikke avansert, men konsekvent oversett.",
    ],
    tip: "Installer Google Search Console gratis og verifiser siden. Det gir deg direkte innsikt i hvordan Google ser den.",
  },
  {
    n: "08",
    label: "Planlegg vedlikehold",
    summary: "En nettside som ikke vedlikeholdes, råtner sakte.",
    content: [
      "Teknisk vedlikehold: oppdateringer av plattform og plugins, SSL-sertifikat, backup-rutiner og overvåkning av nedetid. Avklar hvem som har ansvar for dette.",
      "Innholdsmessig vedlikehold: er informasjonen på siden fortsatt korrekt? Priser, tjenester og kontaktinformasjon utdateres raskere enn de fleste tror.",
      "En vedlikeholdsavtale med en leverandør er ikke nødvendig, men det er viktig at noen har definert ansvar. Om svaret er «ingen», er det et problem.",
    ],
    tip: "Sett av en halvtime i kalenderen annenhver måned for å gå gjennom siden selv — lenker, priser, innhold og ytelse.",
  },
];

const cornerBrackets = [
  "top-6 left-6 border-l-2 border-t-2",
  "top-6 right-6 border-r-2 border-t-2",
  "bottom-6 left-6 border-l-2 border-b-2",
  "bottom-6 right-6 border-r-2 border-b-2",
];

export default function LageProfesjonellNettstedPage() {
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
            <div className="mb-5 flex items-center gap-4">
              <span
                className="inline-block px-2.5 py-1 font-mono text-xs font-medium"
                style={{ background: "#a7ea00", color: "#0f172a" }}
              >
                Guide
              </span>
              <span className="text-xs font-light text-slate-400">
                Ca. 10 minutters lesing
              </span>
            </div>
            <h1 className="text-4xl leading-tight font-light tracking-tight text-slate-900 sm:text-5xl">
              Hvordan lage en profesjonell
              <br />
              <span className="font-semibold">nettside for bedrift</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed font-light text-slate-500">
              Åtte steg — fra mål og struktur til tekst, mobiloptimalisering,
              hastighet, SEO og vedlikehold. Gjort i riktig rekkefølge, med
              riktige prioriteringer.
            </p>
          </div>
        </section>

        {/* Opening */}
        <section className="mx-auto max-w-3xl px-6 py-20">
          <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
            Før du starter
          </p>
          <h2 className="mb-8 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
            De fleste starter i{" "}
            <span className="font-medium">feil ende</span>
          </h2>
          <div className="space-y-5 text-sm leading-relaxed font-light text-slate-600">
            <p>
              Den vanligste feilen er å starte med design og utseende — og
              skrive innholdet etterpå. Det gir en side som ser bra ut men
              ikke kommuniserer noe. Innhold former design, ikke omvendt.
            </p>
            <p>
              En annen vanlig feil er å forsøke å gjøre for mye på en gang.
              En nettside trenger ikke å svare på alle mulige spørsmål. Den
              trenger å svare på de tre viktigste: hvem er dere, hva gjør dere,
              og hva skal besøkende gjøre her.
            </p>
            <p>
              Denne guiden gir deg åtte steg i den rekkefølgen de bør gjøres.
              Hvert steg bygger på det forrige.
            </p>
          </div>
        </section>

        {/* Steps — unique element: detailed how-to */}
        <section className="border-t border-slate-100 bg-slate-50">
          <div className="mx-auto max-w-4xl px-6 py-20">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
              Steg for steg
            </p>
            <h2 className="mb-14 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
              De åtte stegene — i{" "}
              <span className="font-medium">riktig rekkefølge</span>
            </h2>

            <div className="space-y-px bg-slate-200">
              {steps.map(({ n, label, summary, content, tip }) => (
                <div key={n} className="bg-white">
                  {/* Step header */}
                  <div className="grid gap-4 px-8 pt-8 sm:grid-cols-[64px_1fr]">
                    <div>
                      <div
                        className="inline-block px-2 py-0.5 font-mono text-xs font-medium"
                        style={{ background: "#a7ea00", color: "#0f172a" }}
                      >
                        {n}
                      </div>
                    </div>
                    <div>
                      <h3 className="mb-1 text-base font-medium tracking-tight text-slate-900">
                        {label}
                      </h3>
                      <p className="text-sm font-light text-slate-500">
                        {summary}
                      </p>
                    </div>
                  </div>

                  {/* Step body */}
                  <div className="grid gap-4 px-8 pt-5 sm:grid-cols-[64px_1fr]">
                    <div />
                    <div className="space-y-3.5">
                      {content.map((para, i) => (
                        <p
                          key={i}
                          className="text-sm leading-relaxed font-light text-slate-600"
                        >
                          {para}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Tip */}
                  <div className="grid gap-4 px-8 pt-5 pb-8 sm:grid-cols-[64px_1fr]">
                    <div />
                    <div className="border-l-2 border-slate-200 pl-5">
                      <p className="text-xs font-medium tracking-[0.1em] text-slate-400 uppercase">
                        Tips
                      </p>
                      <p className="mt-1 text-sm leading-relaxed font-light text-slate-500 italic">
                        {tip}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="border-t border-slate-100">
          <div className="mx-auto max-w-3xl px-6 py-20">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
              Oppsummert
            </p>
            <h2 className="mb-8 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
              Gjort riktig er det en{" "}
              <span className="font-medium">investering</span>
            </h2>
            <div className="space-y-5 text-sm leading-relaxed font-light text-slate-600">
              <p>
                En profesjonell nettside tar tid å gjøre riktig. Men gjort
                riktig jobber den for bedriften din hele døgnet — fanger
                henvendelser, bygger tillit og hjelper folk å finne deg.
              </p>
              <p>
                Vil du gjøre det selv? Bruk denne guiden som sjekkliste.
                Vil du ha hjelp? Vi tar på oss prosjekter der vi har kapasitet
                til å gjøre det skikkelig — direkte kontakt, fast pris, og
                du eier alt.
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
              Trenger du hjelp?
            </p>
            <h2 className="text-3xl font-light tracking-tight text-white sm:text-4xl">
              Vi hjelper deg fra mål til lansering
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-light text-slate-400">
              Send oss en melding og fortell hva du trenger. Vi svarer
              konkret og uten salgssnakk.
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
