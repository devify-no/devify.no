import Image from "next/image";
import { AnimatedProcessGrid } from "~/components/AnimatedProcessGrid";
import { AnimatedScoreRing } from "~/components/AnimatedScoreRing";
import { AnimatedServiceList } from "~/components/AnimatedServiceList";
import { ContactForm } from "~/components/ContactForm";
import { FAQSection } from "~/components/FAQSection";
import { HeroBrowserMockup } from "~/components/HeroBrowserMockup";
import { StickyNav } from "~/components/StickyNav";
import { faqs } from "~/lib/faq";
import { getPageSpeedScores, type PSIData } from "~/lib/pagespeed";

const scoreMetrics: { key: keyof PSIData["desktop"]; label: string }[] = [
  { key: "performance", label: "Ytelse" },
  { key: "accessibility", label: "Tilgjengelighet" },
  { key: "bestPractices", label: "Beste praksis" },
  { key: "seo", label: "SEO" },
];

export default async function HomePage() {
  const scores = await getPageSpeedScores("https://www.devify.no");

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Dev AS",
    alternateName: "devify.no",
    url: "https://www.devify.no",
    logo: "https://www.devify.no/android-chrome-512x512.png",
    foundingDate: "2018",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Drognesjordet 113",
      postalCode: "2150",
      addressLocality: "Årnes",
      addressCountry: "NO",
    },
    telephone: "+4790227000",
    email: "hei@devify.no",
    areaServed: "NO",
    knowsLanguage: ["nb", "en"],
    sameAs: ["https://github.com/devify-no"],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Dev AS",
    url: "https://www.devify.no",
    inLanguage: "nb-NO",
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
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

        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_460px] xl:gap-20">
            {/* Text content */}
            <div className="text-center lg:text-left">
              {/* Eyebrow */}
              <div
                className="animate-fade-up mb-8 flex items-center justify-center gap-4 lg:justify-start"
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
                className="animate-fade-up text-6xl leading-[1.05] font-light tracking-tight text-slate-900 sm:text-7xl xl:text-8xl"
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
                className="animate-fade-up mx-auto mt-8 max-w-xl text-lg leading-relaxed font-light text-slate-500 sm:text-xl lg:mx-0"
                style={{ animationDelay: "240ms" }}
              >
                Vi bygger raske, gjennomtenkte nettsider og webløsninger for
                små og mellomstore bedrifter — med direkte dialog fra første
                møte til lansering.
              </p>

              {/* CTA */}
              <div
                className="animate-fade-up mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
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

            {/* Browser mockup — desktop only */}
            <div
              className="animate-fade-up hidden lg:block"
              style={{ animationDelay: "480ms" }}
            >
              <HeroBrowserMockup />
            </div>
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

      {/* Trust strip */}
      <div className="border-b border-slate-100">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {(
              [
                { label: "Ingen mellomledd", desc: "Du snakker alltid med utvikleren" },
                { label: "Etablert 2018", desc: "Lang erfaring med norske bedrifter" },
                { label: "Klar plan fra start", desc: "Pris, tidslinje og leveranser avtalt" },
                { label: "Teknisk SEO", desc: "Bygget inn i løsningen fra dag én" },
              ] as const
            ).map(({ label, desc }, i) => (
              <div
                key={label}
                className={[
                  "py-7",
                  i === 0 ? "pr-6" : "px-6",
                  i > 0 ? "border-l border-slate-100" : "",
                  i >= 2 ? "border-t border-slate-100 md:border-t-0" : "",
                  // item 2 has no left border on mobile (starts new row), but does on md+
                  i === 2 ? "border-l-0 md:border-l" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <p className="text-xs font-medium tracking-[0.15em] text-slate-900 uppercase">
                  {label}
                </p>
                <p className="mt-1.5 text-xs font-light leading-relaxed text-slate-400">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="tjenester" className="mx-auto max-w-5xl px-6 py-32">
        <h2 className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
          Hva gjør vi
        </h2>
        <AnimatedServiceList />
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
                  Lighthouse. De oppdateres automatisk og viser hvordan siden
                  presterer på desktop og mobil. Prosjektet er også offentlig
                  tilgjengelig på GitHub for de som ønsker innsyn.
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
                        <AnimatedScoreRing
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
              selskapet fordi jeg ville bygge noe lite og skikkelig: et sted der
              kunden alltid vet hvem som gjør jobben, og der det er den personen
              du faktisk snakker med.
            </p>
            <p className="mt-4 leading-relaxed font-light text-slate-500">
              Ingen mellomledd betyr mer enn kortere e-posttråder. Det betyr at
              den som forstår hva du trenger, også er den som bygger det — og
              som kan svare deg ærlig om hva som er mulig, og hva som ikke er
              det.
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
          <AnimatedProcessGrid />
        </div>
      </section>

      <FAQSection />

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
                  { href: "#faq", label: "FAQ" },
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
