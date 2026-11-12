"use client";

import { useEffect, useRef, useState } from "react";

function format(n: number, mode: "full" | "compact") {
  if (mode === "compact" && n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  return n.toLocaleString("en-US");
}

/**
 * Counts up when scrolled into view. The final value is rendered on the server (good for SEO and
 * no-JS), and users who prefer reduced motion never see the animation.
 */
export default function StatsCounter({
  value,
  suffix = "",
  mode = "full",
  className = "",
}: {
  value: number;
  suffix?: string;
  mode?: "full" | "compact";
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(value);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    const run = () => {
      const start = performance.now();
      const duration = 1600;
      setN(0);
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          io.disconnect();
          run();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);

  return (
    <span ref={ref} className={className}>
      <span aria-hidden>
        {format(n, mode)}
        {suffix}
      </span>
      <span className="sr-only">
        {format(value, mode)}
        {suffix}
      </span>
    </span>
  );
}
