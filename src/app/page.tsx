import Image from "next/image";
import { ContactForm } from "~/components/ContactForm";
import { StickyNav } from "~/components/StickyNav";
import { getPageSpeedScores, type PSIData } from "~/lib/pagespeed";

const services = [
  {
    number: "01",
    title: "Webutvikling",
    description:
      "Vi bygger raske, stabile nettsider og webløsninger som ser profesjonelle ut, fungerer godt på mobil og er enkle å videreutvikle når behovene endrer seg.",
  },
  {
    number: "02",
    title: "SEO",
    description:
      "Teknisk og innholdsmessig søkemotoroptimalisering som gjør nettsiden bedre rustet til å bli funnet av de riktige kundene på Google.",
  },
  {
    number: "03",
    title: "Vedlikehold",
    description:
      "Vi kan ta ansvar for drift, oppdateringer og teknisk oppfølging etter lansering, slik at du slipper å tenke på det og kan fokusere på kjernevirksomheten.",
  },
];

const scoreMetrics: { key: keyof PSIData["desktop"]; label: string }[] = [
  { key: "performance", label: "Ytelse" },
  { key: "accessibility", label: "Tilgjengelighet" },
  { key: "bestPractices", label: "Beste praksis" },
  { key: "seo", label: "SEO" },
];

function ScoreRing({ score, label }: { score: number; label: string }) {
  const r = 32;
  const size = 84;
  const c = size / 2;
  const circumference = 2 * Math.PI * r;
  const arc = circumference * (score / 100);
  const offset = circumference * 0.25;
  const color = score >= 90 ? "#a7ea00" : score >= 50 ? "#f59e0b" : "#f87171";

  return (
    <div className="flex flex-col items-center gap-3">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        aria-label={`${label}: ${score}`}
      >
        <circle
          cx={c}
          cy={c}
          r={r}
          fill="none"
          stroke="#f1f5f9"
          strokeWidth="3"
        />
        <circle
          cx={c}
          cy={c}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={`${arc} ${circumference}`}
          strokeDashoffset={offset}
        />
        <text
          x={c}
          y={c + 1}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="16"
          fontWeight="300"
          fill="#0f172a"
        >
          {score}
        </text>
      </svg>
      <p className="max-w-[84px] text-center text-[9px] leading-tight font-medium tracking-wide text-slate-400 uppercase">
        {label}
      </p>
    </div>
  );
}

export default async function HomePage() {
  const scores = await getPageSpeedScores("https://www.devify.no");

  return (
    <div className="min-h-screen bg-white">
      <StickyNav />

      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-16">
        {/* Dot grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
          aria-hidden="true"
        />

        {/* Lime glow top-right */}
        <div
          className="pointer-events-none absolute top-0 right-0 h-[700px] w-[700px] opacity-25"
          style={{
            background:
              "radial-gradient(ellipse at top right, #a7ea00 0%, transparent 65%)",
          }}
          aria-hidden="true"
        />

        {/* Lime glow bottom-left */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 h-[500px] w-[500px] opacity-10"
          style={{
            background:
              "radial-gradient(ellipse at bottom left, #a7ea00 0%, transparent 65%)",
          }}
          aria-hidden="true"
        />

        {/* Code fragment — left */}
        <div
          className="animate-float-a pointer-events-none absolute top-[14%] left-6 hidden select-none xl:block"
          style={{ opacity: 0.11 }}
          aria-hidden="true"
        >
          <div className="w-56 border-l-2 border-[#a7ea00] bg-white/60 py-3 pr-5 pl-4 backdrop-blur-[1px]">
            <pre className="font-mono text-[10px] leading-[1.7] text-slate-800">{`// app/page.tsx
import type { Metadata }
  from "next"

export const metadata: Metadata = {
  title: "Dev AS",
  openGraph: {
    type: "website",
    locale: "nb_NO",
  },
}

export default async
function Page() {
  return <HomePage />
}`}</pre>
          </div>
        </div>

        {/* Code fragment — right */}
        <div
          className="animate-float-b pointer-events-none absolute right-6 bottom-[18%] hidden select-none xl:block"
          style={{ opacity: 0.11 }}
          aria-hidden="true"
        >
          <div className="w-60 border-l-2 border-[#a7ea00] bg-white/60 py-3 pr-5 pl-4 backdrop-blur-[1px]">
            <pre className="font-mono text-[10px] leading-[1.7] text-slate-800">{`// api/contact/route.ts
export async function POST(
  req: Request,
) {
  const body = await req.json()
  const token = await verify(
    body.recaptchaToken,
  )
  if (!token.success) {
    return Response.json(
      { error: "Invalid token" },
      { status: 400 },
    )
  }
  await sendEmail(body)
  return Response.json({ ok: true })
}`}</pre>
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          {/* Eyebrow */}
          <div
            className="animate-fade-up mb-8 flex items-center justify-center gap-4"
            style={{ animationDelay: "0ms" }}
          >
            <span className="h-px w-10" style={{ background: "#a7ea00" }} />
            <span className="text-xs font-medium tracking-[0.2em] text-slate-500 uppercase">
              Norsk utviklerbyrå
            </span>
            <span className="h-px w-10" style={{ background: "#a7ea00" }} />
          </div>

          {/* Heading */}
          <h1
            className="animate-fade-up text-6xl leading-[1.05] font-light tracking-tight text-slate-900 sm:text-7xl lg:text-8xl xl:text-9xl"
            style={{ animationDelay: "120ms" }}
          >
            Nettsider uten
            <br />
            <span className="bg-gradient-to-br from-slate-900 via-slate-700 to-slate-500 bg-clip-text font-semibold text-transparent">
              byrålag
            </span>
          </h1>

          {/* Subtext */}
          <p
            className="animate-fade-up mx-auto mt-8 max-w-xl text-lg leading-relaxed font-light text-slate-500 sm:text-xl"
            style={{ animationDelay: "240ms" }}
          >
            Vi bygger raske, gjennomtenkte nettsider og webløsninger for små og
            mellomstore bedrifter — med direkte dialog fra første møte til
            lansering.
          </p>

          {/* CTA */}
          <div
            className="animate-fade-up mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            style={{ animationDelay: "360ms" }}
          >
            <a
              href="#kontakt"
              className="group inline-flex items-center gap-2 border border-slate-900 px-8 py-3.5 text-sm font-medium tracking-wide text-slate-900 transition-all duration-200 hover:border-[#a7ea00] hover:bg-[#a7ea00] hover:text-slate-950"
            >
              Ta kontakt
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                →
              </span>
            </a>
            <a
              href="#hvordan"
              className="text-sm font-light text-slate-400 transition-colors hover:text-slate-700"
            >
              Slik jobber vi ↓
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="animate-fade-up absolute bottom-10 left-1/2 -translate-x-1/2"
          style={{ animationDelay: "600ms" }}
        >
          <div
            className="animate-scroll-bounce flex flex-col items-center gap-1.5"
            style={{ color: "#a7ea00" }}
          >
            <span className="text-xs tracking-widest text-slate-400 uppercase">
              Scroll
            </span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M6 1v10M1 6l5 5 5-5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <div className="border-y border-slate-100">
        <div className="mx-auto grid max-w-5xl grid-cols-3 divide-x divide-slate-100 px-6">
          {[
            { value: "2018", label: "Etablert" },
            { value: "50+", label: "Leveranser gjennomført" },
            { value: "1 dag", label: "Vanlig svartid" },
          ].map(({ value, label }) => (
            <div key={label} className="py-10 text-center">
              <p className="text-4xl font-light tracking-tight text-slate-900">
                {value}
              </p>
              <p className="mt-1 text-xs font-medium tracking-[0.15em] text-slate-400 uppercase">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Tech / trust marquee */}
      <div className="overflow-hidden border-b border-slate-100 py-4">
        <div className="animate-marquee flex w-max items-center whitespace-nowrap">
          {Array.from({ length: 4 }, (_, copy) =>
            [
              "Utviklet i Norge",
              "Etablert i 2018",
              "Direkte dialog",
              "Små team, høy kvalitet",
              "Tydelige prosesser",
              "Stabil teknologi",
              "Langsiktig samarbeid",
              "Profesjonell oppfølging",
            ].map((item, i) => (
              <span
                key={`${copy}-${i}`}
                className="flex items-center"
                aria-hidden={copy > 0}
              >
                <span className="font-mono text-[11px] font-light tracking-widest text-slate-400 uppercase">
                  {item}
                </span>
                <span
                  className="mx-6 text-[10px]"
                  style={{ color: "#a7ea00" }}
                  aria-hidden="true"
                >
                  ·
                </span>
              </span>
            )),
          )}
        </div>
      </div>

      {/* Services Section */}
      <section id="tjenester" className="mx-auto max-w-5xl px-6 py-32">
        <h2 className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
          Hva gjør vi
        </h2>
        <div className="mt-10 divide-y divide-slate-200">
          {services.map((service) => (
            <div
              key={service.number}
              className="group flex flex-col gap-2 py-8 sm:flex-row sm:items-start sm:gap-12"
            >
              <span className="w-8 shrink-0 font-mono text-sm font-light text-slate-300 transition-colors">
                <span className="transition-colors duration-200 group-hover:text-[#a7ea00]">
                  {service.number}
                </span>
              </span>
              <div className="flex flex-1 flex-col gap-2 sm:flex-row sm:items-start sm:gap-12">
                <h3 className="w-44 shrink-0 text-base font-medium text-slate-900">
                  {service.title}
                </h3>
                <p className="flex-1 leading-relaxed font-light text-slate-500">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Proof / quality section — only renders when live scores are available */}
      {scores && (
        <section className="border-t border-slate-100">
          <div className="mx-auto max-w-5xl px-6 py-28">
            <div className="grid gap-16 lg:grid-cols-[360px_1fr] lg:items-start">
              {/* Left: editorial copy */}
              <div>
                <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
                  Dokumentert kvalitet
                </p>
                <h2 className="text-3xl leading-snug font-light tracking-tight text-slate-900 sm:text-4xl">
                  Målt, ikke bare
                  <br />
                  <span className="font-medium">påstått</span>
                </h2>
                <p className="mt-6 text-sm leading-relaxed font-light text-slate-500">
                  Scorene er hentet fra denne nettsiden og målt med Google
                  Lighthouse. De oppdateres automatisk og dokumenterer
                  kvaliteten over tid. Prosjektet er også offentlig tilgjengelig
                  på GitHub for de som ønsker innsyn.
                </p>
                <div className="mt-8 flex flex-col gap-2.5">
                  <a
                    href="https://pagespeed.web.dev/analysis?url=https://www.devify.no"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-slate-400 transition-colors hover:text-slate-700"
                  >
                    Se full Lighthouse-rapport ↗
                  </a>
                  <a
                    href="https://github.com/devify-no/devify.no"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-slate-400 transition-colors hover:text-slate-700"
                  >
                    Se prosjektet på GitHub ↗
                  </a>
                </div>
              </div>

              {/* Right: score rings */}
              <div className="space-y-10">
                {(
                  [
                    { label: "Desktop", data: scores.desktop },
                    { label: "Mobil", data: scores.mobile },
                  ] as const
                ).map(({ label, data }) => (
                  <div key={label}>
                    <p className="mb-6 text-xs font-medium tracking-[0.15em] text-slate-400 uppercase">
                      {label}
                    </p>
                    <div className="grid grid-cols-4 gap-4 sm:gap-8">
                      {scoreMetrics.map(({ key, label: metricLabel }) => (
                        <ScoreRing
                          key={key}
                          score={data[key]}
                          label={metricLabel}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* About / founder section */}
      <section
        id="om-oss"
        className="relative overflow-hidden border-t border-slate-100"
      >
        {/* Large faint watermark */}
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[28vw] leading-none font-bold tracking-tighter text-slate-900 opacity-[0.025] select-none"
          aria-hidden="true"
        >
          Dev
        </div>

        <div className="mx-auto grid max-w-5xl gap-16 px-6 py-28 md:grid-cols-2 md:items-center">
          <div className="order-2 md:order-1">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
              Hvem er vi
            </p>
            <h2 className="text-3xl leading-snug font-light tracking-tight text-slate-900 sm:text-4xl">
              Du snakker direkte
              <br />
              <span className="font-medium">med utvikleren</span>
            </h2>
            <p className="mt-6 leading-relaxed font-light text-slate-500">
              Hei, jeg er Moritz — grunnleggeren av Dev AS. Jeg startet
              selskapet fordi jeg opplevde at mange kunder måtte velge mellom
              upersonlige byråprosesser og billige leveranser med varierende
              kvalitet.
            </p>
            <p className="mt-4 leading-relaxed font-light text-slate-500">
              Hos oss er det ingen mellomledd. Du kommuniserer direkte med
              personen som bygger løsningen, fra første samtale til lansering og
              videre oppfølging.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Next.js", "TypeScript", "React", "Tailwind", "Vercel"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="border border-slate-200 px-3 py-1.5 font-mono text-xs text-slate-500"
                  >
                    {tech}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="relative order-1 md:order-2">
            {/* Offset lime frame */}
            <div
              className="pointer-events-none absolute inset-0 hidden translate-x-4 translate-y-4 border border-[#a7ea00]/50 md:block"
              aria-hidden="true"
            />
            <div className="relative z-10 aspect-[3/4] w-full max-w-sm md:ml-auto">
              <Image
                src="/moritz.jpeg"
                alt="Moritz, grunnlegger av Dev AS"
                fill
                sizes="(max-width: 768px) 100vw, 384px"
                className="object-cover grayscale"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process section */}
      <section id="hvordan" className="border-t border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-28">
          <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
            Slik jobber vi
          </p>
          <h2 className="mb-16 text-3xl font-light tracking-tight text-slate-900 sm:text-4xl">
            Forutsigbart fra start til mål
          </h2>
          <div className="grid gap-px bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Innledende prat",
                body: "Vi tar en uformell samtale om hva du trenger og hva som er målet. Ingen forpliktelse.",
              },
              {
                step: "02",
                title: "Tilbud og plan",
                body: "Du får et tydelig tilbud med pris, leveranser og estimert tidslinje — ingen overraskelser.",
              },
              {
                step: "03",
                title: "Design og utvikling",
                body: "Vi jobber iterativt og holder deg oppdatert underveis, slik at du ser hvordan prosjektet utvikler seg før lansering.",
              },
              {
                step: "04",
                title: "Lansering og oppfølging",
                body: "Vi hjelper med lansering og er tilgjengelige for spørsmål og justeringer etter at siden er live.",
              },
            ].map(({ step, title, body }) => (
              <div key={step} className="bg-white p-8">
                <span className="font-mono text-xs font-light text-slate-300">
                  {step}
                </span>
                <h3 className="mt-4 text-base font-medium text-slate-900">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed font-light text-slate-500">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section — inverted */}
      <section id="kontakt" className="relative overflow-hidden bg-slate-950">
        {/* Crosshatch grid */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
          aria-hidden="true"
        />

        {/* Corner viewfinder brackets */}
        {(
          [
            "top-8 left-8 border-l-2 border-t-2",
            "top-8 right-8 border-r-2 border-t-2",
            "bottom-8 left-8 border-l-2 border-b-2",
            "bottom-8 right-8 border-r-2 border-b-2",
          ] as const
        ).map((cls) => (
          <div
            key={cls}
            className={`pointer-events-none absolute h-10 w-10 border-[#a7ea00] opacity-20 ${cls}`}
            aria-hidden="true"
          />
        ))}

        {/* Concentric circles */}
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#a7ea00] opacity-[0.05]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 h-[820px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#a7ea00] opacity-[0.03]"
          aria-hidden="true"
        />

        {/* Closing brace */}
        <div
          className="pointer-events-none absolute right-6 bottom-12 hidden font-mono text-[22rem] leading-none font-thin text-white opacity-[0.06] select-none xl:block"
          aria-hidden="true"
        >
          {"}"}
        </div>

        <div className="relative z-10 mx-auto max-w-2xl px-6 py-28">
          <div className="mb-16">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-6" style={{ background: "#a7ea00" }} />
              <p className="text-xs font-medium tracking-[0.2em] text-slate-500 uppercase">
                Kontakt
              </p>
            </div>
            <h2 className="text-3xl font-light tracking-tight text-white sm:text-4xl">
              Trenger du ny nettside eller hjelp med en eksisterende løsning?
            </h2>
            <p className="mt-4 font-light text-slate-400">
              Send oss en melding, så tar vi en uforpliktende prat om behov og
              muligheter.
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Vanlig svartid: innen 1 virkedag.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
            <div className="col-span-2 md:col-span-1">
              <div className="mb-2 flex items-center gap-2">
                <Image
                  src="/logo-icon.svg"
                  alt=""
                  width={20}
                  height={23}
                  aria-hidden="true"
                />
                <p className="text-xs font-medium tracking-wide text-slate-400 uppercase">
                  Dev AS
                </p>
              </div>
              <p className="text-sm font-light text-slate-500">
                Org.nr. 920 937 160 MVA
                <br />
                <a
                  href="https://w2.brreg.no/enhet/sok/detalj.jsp?orgnr=920937160"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-slate-300"
                >
                  Foretaksregisteret
                </a>
              </p>
              <p className="mt-4 text-xs font-light text-slate-600">
                Utviklet og driftet i Norge
              </p>
            </div>

            <div>
              <p className="mb-3 text-xs font-medium tracking-wide text-slate-400 uppercase">
                Navigasjon
              </p>
              <nav className="flex flex-col gap-2">
                {[
                  { href: "#tjenester", label: "Tjenester" },
                  { href: "#om-oss", label: "Om oss" },
                  { href: "#hvordan", label: "Slik jobber vi" },
                  { href: "#kontakt", label: "Kontakt" },
                ].map(({ href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="text-sm font-light text-slate-500 transition-colors hover:text-slate-300"
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </div>

            <div>
              <p className="mb-3 text-xs font-medium tracking-wide text-slate-400 uppercase">
                Adresse
              </p>
              <address className="text-sm font-light text-slate-500 not-italic">
                Drognesjordet 113
                <br />
                2150 ÅRNES
              </address>
            </div>

            <div>
              <p className="mb-3 text-xs font-medium tracking-wide text-slate-400 uppercase">
                Postadresse
              </p>
              <address className="text-sm font-light text-slate-500 not-italic">
                Postboks 25
                <br />
                2151 ÅRNES
              </address>
            </div>

            <div>
              <p className="mb-3 text-xs font-medium tracking-wide text-slate-400 uppercase">
                Kontakt
              </p>
              <address className="text-sm font-light text-slate-500 not-italic">
                <a
                  href="tel:+4790227000"
                  className="block transition-colors hover:text-slate-300"
                >
                  (+47) 90 22 70 00
                </a>
                <a
                  href="mailto:hei@devify.no"
                  className="block transition-colors hover:text-slate-300"
                >
                  hei@devify.no
                </a>
              </address>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 sm:flex-row">
            <p className="text-xs font-light tracking-widest text-slate-600 uppercase">
              Dev AS © 2018–{new Date().getFullYear()}
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/devify-no"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-light text-slate-600 transition-colors hover:text-slate-300"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                GitHub
              </a>
              <a
                href="/personvern"
                className="text-xs font-light text-slate-600 transition-colors hover:text-slate-400"
              >
                Personvern
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
