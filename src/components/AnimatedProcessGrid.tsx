"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
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
];

export function AnimatedProcessGrid() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid gap-px bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map(({ step, title, body }, i) => (
        <div
          key={step}
          className="bg-white p-8"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(18px)",
            transition: "opacity 0.5s ease, transform 0.5s ease",
            transitionDelay: `${i * 90}ms`,
          }}
        >
          <span className="font-mono text-xs font-light text-slate-300">
            {step}
          </span>
          <h3 className="mt-4 text-base font-medium text-slate-900">{title}</h3>
          <p className="mt-3 text-sm leading-relaxed font-light text-slate-500">
            {body}
          </p>
        </div>
      ))}
    </div>
  );
}
