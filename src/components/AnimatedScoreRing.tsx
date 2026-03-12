"use client";

import { useEffect, useRef, useState } from "react";

type Props = { score: number; label: string };

export function AnimatedScoreRing({ score, label }: Props) {
  const r = 32;
  const size = 84;
  const c = size / 2;
  const circumference = 2 * Math.PI * r;
  const targetOffset = circumference - circumference * (score / 100);
  const color = score >= 90 ? "#a7ea00" : score >= 50 ? "#f59e0b" : "#f87171";

  const [dashOffset, setDashOffset] = useState(circumference);
  const [displayScore, setDisplayScore] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const triggered = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && !triggered.current) {
          triggered.current = true;

          // Slight delay so all rings in a row start together
          setTimeout(() => {
            setDashOffset(targetOffset);

            const duration = 1000;
            const startTime = performance.now();
            const animate = (now: number) => {
              const t = Math.min((now - startTime) / duration, 1);
              const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
              setDisplayScore(Math.round(eased * score));
              if (t < 1) requestAnimationFrame(animate);
            };
            requestAnimationFrame(animate);
          }, 100);
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [score, targetOffset]);

  return (
    <div ref={ref} className="flex flex-col items-center gap-3">
      <div className="relative" style={{ width: size, height: size }}>
        {/* SVG rotated so arc starts from 12 o'clock */}
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          style={{ transform: "rotate(-90deg)" }}
          aria-hidden="true"
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
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
            style={{
              transition: "stroke-dashoffset 1s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          />
        </svg>
        {/* Score number overlaid in the center */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          aria-label={`${label}: ${score}`}
        >
          <span className="tabular-nums text-base font-light text-slate-900">
            {displayScore}
          </span>
        </div>
      </div>
      <p className="max-w-[84px] text-center text-[9px] font-medium leading-tight tracking-wide text-slate-400 uppercase">
        {label}
      </p>
    </div>
  );
}
