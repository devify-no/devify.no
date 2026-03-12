"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function StickyNav() {
  const [navDark, setNavDark] = useState(false);

  useEffect(() => {
    const update = () => {
      const section = document.getElementById("kontakt");
      if (!section) return;
      setNavDark(window.scrollY + 72 >= section.offsetTop);
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 border-b backdrop-blur-md transition-colors duration-300 ${
        navDark
          ? "border-slate-800/60 bg-slate-950/90"
          : "border-slate-200/50 bg-white/80"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo-icon.svg"
            alt=""
            width={22}
            height={25}
            aria-hidden="true"
          />
          <span
            className={`text-lg font-medium tracking-tight transition-colors duration-300 ${
              navDark ? "text-white" : "text-slate-900"
            }`}
          >
            Dev
          </span>
        </Link>
        <a
          href="#kontakt"
          className={`text-sm font-medium transition-colors duration-300 ${
            navDark
              ? "text-slate-400 hover:text-white"
              : "text-slate-500 hover:text-slate-900"
          }`}
        >
          Kontakt oss →
        </a>
      </div>
    </header>
  );
}
