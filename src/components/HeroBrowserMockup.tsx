"use client";

import { useState } from "react";

function PreviewContent() {
  return (
    <div className="h-full overflow-hidden bg-white p-6">
      <div className="space-y-5">
        {/* Nav */}
        <div className="flex items-center justify-between">
          <div className="h-2 w-14 rounded-[1px] bg-slate-900" />
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-9 rounded-[1px] bg-slate-200" />
            <div className="h-1.5 w-9 rounded-[1px] bg-slate-200" />
            <div className="h-1.5 w-9 rounded-[1px] bg-slate-200" />
            <div className="h-6 w-16 rounded-[1px] bg-slate-950" />
          </div>
        </div>

        <div className="h-px bg-slate-100" />

        {/* Hero text */}
        <div className="space-y-2 pt-1">
          <div className="h-5 w-3/4 rounded-[1px] bg-slate-900/80" />
          <div className="h-5 w-1/2 rounded-[1px] bg-slate-900/60" />
          <div className="mt-3 space-y-1.5">
            <div className="h-1.5 w-full rounded-[1px] bg-slate-100" />
            <div className="h-1.5 w-11/12 rounded-[1px] bg-slate-100" />
            <div className="h-1.5 w-4/5 rounded-[1px] bg-slate-100" />
          </div>
          <div className="mt-4 flex gap-2">
            <div
              className="h-7 w-24 rounded-[1px]"
              style={{ background: "#a7ea00" }}
            />
            <div className="h-7 w-20 rounded-[1px] border border-slate-200" />
          </div>
        </div>

        {/* Stats row */}
        <div className="flex divide-x divide-slate-100 border-t border-slate-100 pt-4">
          {[8, 12, 10].map((w, i) => (
            <div key={i} className="flex-1 space-y-1.5 px-3 first:pl-0">
              <div className={`h-3 w-${w} rounded-[1px] bg-slate-900/70`} />
              <div className="h-1.5 w-14 rounded-[1px] bg-slate-100" />
            </div>
          ))}
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="space-y-2 border border-slate-100 p-3">
              <div
                className="h-1.5 w-5 rounded-[1px]"
                style={{ background: "#a7ea00" }}
              />
              <div className="h-1.5 w-full rounded-[1px] bg-slate-200" />
              <div className="h-1.5 w-4/5 rounded-[1px] bg-slate-100" />
              <div className="h-1.5 w-3/5 rounded-[1px] bg-slate-100" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CodeContent() {
  return (
    <div className="h-full overflow-hidden bg-slate-950 p-6">
      <pre className="font-mono text-[11px] leading-[1.9] select-none">
        <span className="text-slate-500">{"// app/page.tsx\n"}</span>
        <span className="text-indigo-400">{"import"}</span>
        <span className="text-slate-300">{" type { Metadata } "}</span>
        <span className="text-indigo-400">{"from"}</span>
        <span className="text-amber-400/80">{' "next"\n'}</span>
        <span className="text-indigo-400">{"import"}</span>
        <span className="text-slate-300">{" { Hero } "}</span>
        <span className="text-indigo-400">{"from"}</span>
        <span className="text-amber-400/80">{' "@/components/Hero"\n'}</span>
        <span className="text-indigo-400">{"import"}</span>
        <span className="text-slate-300">{" { Services } "}</span>
        <span className="text-indigo-400">{"from"}</span>
        <span className="text-amber-400/80">
          {' "@/components/Services"\n\n'}
        </span>
        <span className="text-indigo-400">{"export"}</span>
        <span className="text-slate-300"> </span>
        <span className="text-indigo-400">{"const"}</span>
        <span className="text-slate-300">{" metadata: "}</span>
        <span className="text-lime-400">{"Metadata"}</span>
        <span className="text-slate-300">{" = {\n"}</span>
        <span className="text-slate-300">{"  title: "}</span>
        <span className="text-amber-400/80">{'"Prosjekt AS"'}</span>
        <span className="text-slate-300">{"  ,\n}\n\n"}</span>
        <span className="text-indigo-400">{"export default function"}</span>
        <span className="text-lime-400">{" Page"}</span>
        <span className="text-slate-300">{"() {\n"}</span>
        <span className="text-slate-300">{"  "}</span>
        <span className="text-indigo-400">{"return"}</span>
        <span className="text-slate-300">{" (\n"}</span>
        <span className="text-slate-500">
          {"    {/* Bygget med Next.js */}\n"}
        </span>
        <span className="text-slate-300">{"    <"}</span>
        <span className="text-lime-400">{"main"}</span>
        <span className="text-slate-300">{">\n"}</span>
        <span className="text-slate-300">{"      <"}</span>
        <span className="text-lime-400">{"Hero"}</span>
        <span className="text-slate-300">{" />\n"}</span>
        <span className="text-slate-300">{"      <"}</span>
        <span className="text-lime-400">{"Services"}</span>
        <span className="text-slate-300">{" />\n"}</span>
        <span className="text-slate-300">{"    </"}</span>
        <span className="text-lime-400">{"main"}</span>
        <span className="text-slate-300">{">\n  )\n}"}</span>
      </pre>
    </div>
  );
}

export function HeroBrowserMockup() {
  const [tab, setTab] = useState<"preview" | "code">("preview");

  return (
    <div className="animate-float-up overflow-hidden border border-slate-200 shadow-2xl shadow-slate-200/60">
      {/* Chrome bar */}
      <div className="flex items-center gap-3 border-b border-slate-100 bg-slate-50/80 px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-300/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-300/60" />
        </div>
        <div className="flex flex-1 items-center justify-center border border-slate-200 bg-white py-1 font-mono text-[10px] text-slate-400">
          devify.no
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-100 bg-white">
        {(["preview", "code"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`cursor-pointer px-4 py-2 font-mono text-[10px] tracking-widest uppercase transition-colors ${
              tab === t
                ? "border-b-2 text-slate-900"
                : "text-slate-400 hover:text-slate-600"
            }`}
            style={tab === t ? { borderColor: "#a7ea00" } : undefined}
          >
            {t === "preview" ? "Forhåndsvisning" : "Kode"}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="h-[340px]">
        {tab === "preview" ? <PreviewContent /> : <CodeContent />}
      </div>
    </div>
  );
}
