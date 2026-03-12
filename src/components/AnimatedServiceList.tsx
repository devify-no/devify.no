"use client";

import { useEffect, useRef, useState } from "react";

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

export function AnimatedServiceList() {
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
      { threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="mt-10 divide-y divide-slate-200">
      {services.map((service, i) => (
        <div
          key={service.number}
          className="group flex flex-col gap-2 py-8 sm:flex-row sm:items-start sm:gap-12"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(14px)",
            transition: "opacity 0.55s ease, transform 0.55s ease",
            transitionDelay: `${i * 110}ms`,
          }}
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
  );
}
