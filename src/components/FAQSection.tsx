"use client";

import { useState } from "react";
import { faqs } from "~/lib/faq";

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="border-t border-slate-100">
      <div className="mx-auto max-w-5xl px-6 py-28">
        <div className="grid gap-16 lg:grid-cols-[280px_1fr] lg:items-start">
          {/* Left: heading */}
          <div className="lg:sticky lg:top-28">
            <p className="mb-4 text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">
              Vanlige spørsmål
            </p>
            <h2 className="text-3xl leading-snug font-light tracking-tight text-slate-900 sm:text-4xl">
              Noen korte svar
              <br />
              <span className="font-medium">på det mange lurer på</span>
            </h2>
            <a
              href="#kontakt"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-light text-slate-400 transition-colors hover:text-slate-700"
            >
              Ikke funnet svar?{" "}
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                Ta kontakt →
              </span>
            </a>
          </div>

          {/* Right: accordion */}
          <div className="divide-y divide-slate-100">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div key={i}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="group flex w-full cursor-pointer items-start justify-between gap-6 py-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`text-base font-light tracking-tight transition-colors ${
                        isOpen
                          ? "text-slate-900"
                          : "text-slate-600 group-hover:text-slate-900"
                      }`}
                    >
                      {faq.q}
                    </span>
                    <span
                      className="mt-0.5 shrink-0 text-sm transition-colors"
                      style={{ color: isOpen ? "#a7ea00" : undefined }}
                      aria-hidden="true"
                    >
                      {isOpen ? "—" : "+"}
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p
                        className="border-l-2 pl-4 text-sm leading-relaxed font-light text-slate-500"
                        style={{ borderColor: "#a7ea00" }}
                      >
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
