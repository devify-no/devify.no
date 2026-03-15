import { Fragment } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Når lønner det seg å bygge skreddersydd nettside?",
  description:
    "Ikke alle nettsider bør bygges skreddersydd. Her er de konkrete tegnene på at en mal ikke er nok — og når det faktisk er verdt investeringen.",
};

const customSignals = [
  {
    id: "01",
    title: "Nettsiden er en del av forretningsmodellen",
    desc: "Er nettsiden selve produktet — eller en kritisk del av salgsprosessen — er en mal et dårlig utgangspunkt. Du vil alltid møte veggene i det systemet er designet for.",
  },
  {
    id: "02",
    title: "Ytelseskrav som maler ikke kan levere",
    desc: "PageSpeed 100 og Core Web Vitals i grønt er mulig — men ikke med tunge WordPress-temaer og plugin-stakker. Skreddersøm lar deg kontrollere hvert kilobyte.",
  },
  {
    id: "03",
    title: "Kompleks innholdsstruktur",
    desc: "Produktkataloger med avansert filtrering, flerespråklig innhold, dynamiske data fra eksterne API-er — ting som krever at du modellerer innholdet selv.",
  },
  {
    id: "04",
    title: "Merkevare som krever distinkt uttrykk",
    desc: "Skal siden skille seg tydelig ut i et mettet marked, er det grenser for hva du kan gjøre med et mal. Skreddersøm er den eneste veien til en virkelig unik brukeropplevelse.",
  },
  {
    id: "05",
    title: "Integrasjoner med interne systemer",
    desc: "ERP, CRM, bookingsystem, betalingsflyt — disse integrasjonene er sjelden enkle å plugge inn i et ferdig tema uten store kompromisser.",
  },
  {
    id: "06",
    title: "Lang forventet levetid",
    desc: "En nettside du planlegger å bruke i fem til ti år, og som skal vokse med bedriften, fortjener et solid fundament. Teknisk gjeld i et mal vokser raskere enn i ren kode.",
  },
];

const templateIsFine = [
  {
    title: "Enkle informasjonssider",
    desc: "Presentasjon av bedriften, tjenestene og kontaktinformasjon. Squarespace eller et godt WordPress-tema gjør jobben til en brøkdel av prisen.",
  },
  {
    title: "Nye bedrifter som tester markedet",
    desc: "Du vet ikke ennå hvilke funksjoner du trenger. Start billig, valider, og bygg ordentlig når du vet mer om hva som faktisk skaper verdi.",
  },
  {
    title: "Prosjekter med stramt budsjett",
    desc: "Det nytter ikke å bygge skreddersydd for enhver pris. Noen ganger er «godt nok og innenfor budsjett» riktigere enn «perfekt og uoverkommelig».",
  },
  {
    title: "Blogg eller innholdsfokusert side",
    desc: "WordPress er fortsatt best i klassen for innholdspublisering. For en blogg uten spesielle tekniske krav er det sjelden grunn til å bygge fra scratch.",
  },
];

const costBreakdown = [
  {
    factor: "Initial investering",
    template: "Lav. Noen tusen til et par titusenlapper.",
    custom: "Høyere. Alt fra 50 000 til flere hundre tusen, avhengig av scope.",
  },
  {
    factor: "Vedlikehold",
    template: "Plugin- og tema-oppdateringer. Kan bli tidkrevende over tid.",
    custom: "Forutsigbart og kontrollert. Du eier koden.",
  },
  {
    factor: "Tilpasningskostnad",
    template: "Lav i starten. Stiger raskt når du trykker mot grensene til malen.",
    custom: "Endringer i ren kode er presise og forutsigbare.",
  },
  {
    factor: "Ytelse",
    template: "Avhengig av mal og plugins. Sjelden optimalt uten mye arbeid.",
    custom: "Du bestemmer. Kan optimaliseres til det ekstreme om nødvendig.",
  },
  {
    factor: "Skalerbarhet",
    template: "Begrenset av hva plattformen støtter.",
    custom: "Ubegrenset. Du legger til det du trenger, når du trenger det.",
  },
];

const questions = [
  "Hva er forventet levetid på nettsiden?",
  "Hvor viktig er ytelse og lastetid for forretningsresultatet?",
  "Har du spesifikke integrasjoner eller funksjoner som ikke finnes i hyllevare?",
  "Hva er budsjettet — for bygging og for løpende vedlikehold?",
  "Kommer bedriften til å vokse på en måte som stiller nye krav til nettsiden?",
];

const cornerBrackets = [
  "top-6 left-6 border-l-2 border-t-2",
  "top-6 right-6 border-r-2 border-t-2",
  "bottom-6 left-6 border-l-2 border-b-2",
  "bottom-6 right-6 border-r-2 border-b-2",
];

export default function SkreddersyddNettside() {
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
                Ca. 5 minutters lesing
              </span>
            </div>
            <h1 className="text-4xl leading-tight font-light tracking-tight text-slate-900 sm:text-5xl">
              Når lønner det seg å{" "}
              <br />
              <span className="font-semibold">bygge skreddersydd?</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed font-light text-slate-500">
              Ikke alle nettsider bør bygges skreddersydd — og vi er de første til
              å si det. Her er de konkrete tegnene på at en mal ikke er nok, og
              når det faktisk er verdt investeringen.
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="mx-auto max-w-3xl px-6 py-20">
          <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
            Utgangspunktet
          </p>
          <h2 className="mb-8 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
            Et spektrum fra Squarespace{" "}
            <span className="font-medium">til fullstendig skreddersøm</span>
          </h2>
          <div className="space-y-5 text-sm leading-relaxed font-light text-slate-600">
            <p>
              Det finnes ikke et binært valg mellom «mal» og «skreddersydd».
              Det er et spektrum. Squarespace og Webflow i den ene enden,
              fullstendig egenutviklet kodebase i den andre — og mange
              kombinasjoner imellom, som WordPress med custom plugin-utvikling
              eller et headless CMS med Next.js-frontend.
            </p>
            <p>
              Valget handler ikke om hva som er «best» i abstrakt forstand. Det
              handler om hva som er riktig for akkurat ditt prosjekt, ditt
              budsjett og dine behov over tid. En mal kan være helt riktig. Et
              skreddersydd prosjekt kan være feil bruk av penger. Det avhenger
              av konteksten.
            </p>
            <p>
              Det vi vet med sikkerhet: mange kjøper skreddersøm de ikke trenger,
              og enda flere bruker maler lenger enn de burde. Her er måten å
              tenke på det.
            </p>
          </div>
        </section>

        {/* Signals for custom */}
        <section className="border-t border-slate-100 bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
              Tydelige signaler
            </p>
            <h2 className="mb-3 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
              Det bør bygges skreddersydd når…
            </h2>
            <p className="mb-12 text-sm font-light leading-relaxed text-slate-500">
              Kjenner du igjen to eller flere av disse, er sannsynligheten høy
              for at en mal vil koste deg mer på sikt.
            </p>

            <div className="grid gap-px bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
              {customSignals.map(({ id, title, desc }) => (
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

        {/* When template is fine */}
        <section className="border-t border-slate-100">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
              Ærlig snakk
            </p>
            <h2 className="mb-3 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
              Når en mal er{" "}
              <span className="font-medium">fullstendig greit</span>
            </h2>
            <p className="mb-12 text-sm font-light leading-relaxed text-slate-500">
              Vi tjener ingenting på å overbevise deg om at du trenger skreddersøm
              om du ikke gjør det.
            </p>

            <div className="grid gap-px bg-slate-200 sm:grid-cols-2">
              {templateIsFine.map(({ title, desc }) => (
                <div key={title} className="bg-white p-7">
                  <h3 className="mb-2 text-sm font-semibold tracking-tight text-slate-900">
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

        {/* Cost comparison */}
        <section className="border-t border-slate-100 bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
              Kostnadsbilde
            </p>
            <h2 className="mb-3 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
              Mal vs. skreddersøm —{" "}
              <span className="font-medium">reelle kostnader</span>
            </h2>
            <p className="mb-12 text-sm font-light leading-relaxed text-slate-500">
              Den lave startkostnaden på en mal kan bli dyr over tid. Her er et
              realistisk bilde.
            </p>

            <div className="overflow-x-auto">
              <div className="min-w-[540px]">
                <div className="grid grid-cols-[1fr_1fr_1fr] gap-px bg-slate-200">
                  <div className="bg-slate-900 px-5 py-3">
                    <span className="text-xs font-medium tracking-[0.15em] text-slate-400 uppercase">
                      Faktor
                    </span>
                  </div>
                  <div className="bg-slate-900 px-5 py-3">
                    <span className="text-xs font-medium text-slate-400">
                      Mal / plattform
                    </span>
                  </div>
                  <div className="bg-slate-900 px-5 py-3">
                    <span
                      className="font-mono text-xs font-medium"
                      style={{ color: "#a7ea00" }}
                    >
                      Skreddersøm
                    </span>
                  </div>
                  {costBreakdown.map(({ factor, template, custom }) => (
                    <Fragment key={factor}>
                      <div className="bg-white px-5 py-4">
                        <p className="text-sm font-medium text-slate-900">
                          {factor}
                        </p>
                      </div>
                      <div className="bg-white px-5 py-4">
                        <p className="text-sm font-light leading-relaxed text-slate-500">
                          {template}
                        </p>
                      </div>
                      <div className="bg-white px-5 py-4">
                        <p className="text-sm font-light leading-relaxed text-slate-600">
                          {custom}
                        </p>
                      </div>
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Questions to ask yourself */}
        <section className="border-t border-slate-100">
          <div className="mx-auto max-w-3xl px-6 py-20">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
              Beslutningsrammeverk
            </p>
            <h2 className="mb-8 text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
              Fem spørsmål du bør stille deg
            </h2>
            <div className="space-y-px bg-slate-100">
              {questions.map((q, i) => (
                <div
                  key={q}
                  className="flex items-start gap-6 bg-white px-6 py-5"
                >
                  <span className="shrink-0 font-mono text-xs text-slate-300 mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm font-light leading-relaxed text-slate-700">
                    {q}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm font-light leading-relaxed text-slate-500">
              Om du ikke vet svaret på disse spørsmålene ennå — vent litt. Den
              beste nettsiden er den du bygger når du faktisk vet hva du trenger.
            </p>
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
                href="/ressurser/headless-cms"
                className="group flex items-start gap-3 text-sm text-slate-600 transition-colors hover:text-slate-900"
              >
                <span className="mt-0.5 shrink-0 text-slate-300 transition-transform duration-200 group-hover:translate-x-0.5">
                  →
                </span>
                <span>
                  <span className="block font-medium text-slate-900 group-hover:text-slate-700">
                    Headless CMS eller tradisjonell løsning?
                  </span>
                  <span className="text-xs font-light text-slate-400">
                    Arkitektur · 6 min lesing
                  </span>
                </span>
              </Link>
              <Link
                href="/filosofi"
                className="group flex items-start gap-3 text-sm text-slate-600 transition-colors hover:text-slate-900"
              >
                <span className="mt-0.5 shrink-0 text-slate-300 transition-transform duration-200 group-hover:translate-x-0.5">
                  →
                </span>
                <span>
                  <span className="block font-medium text-slate-900 group-hover:text-slate-700">
                    Prinsippene vi bygger etter
                  </span>
                  <span className="text-xs font-light text-slate-400">
                    Filosofi
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
              Usikker på hva du trenger?
            </p>
            <h2 className="text-3xl font-light tracking-tight text-white sm:text-4xl">
              Vi hjelper deg å finne riktig nivå
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-light text-slate-400">
              En kort prat om prosjektet ditt er nok til å gi deg en ærlig
              vurdering — uten forpliktelser.
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
