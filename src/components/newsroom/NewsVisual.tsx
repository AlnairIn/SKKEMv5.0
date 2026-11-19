"use client";

import { useEffect, useRef, useState } from "react";
import { Award, CalendarDays, Cpu, Newspaper, type LucideIcon } from "lucide-react";
import type { NewsCategory } from "@/lib/news";

const icons: Record<NewsCategory, LucideIcon> = {
  "Press Releases": Newspaper,
  "Events & Exhibitions": CalendarDays,
  "Company Milestones": Award,
  "Technical Updates": Cpu,
};

/** Article image. If the image file does not exist yet, a branded blueprint-style graphic is shown instead. */
export default function NewsVisual({
  image,
  category,
  alt = "",
  className = "",
}: {
  image: string;
  category: NewsCategory;
  alt?: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // A missing file can fail before React attaches onError (server-rendered <img>), so also check after mount.
  useEffect(() => {
    const el = imgRef.current;
    if (el && el.complete && el.naturalWidth === 0) setFailed(true);
  }, []);
  const Icon = icons[category];

  if (!failed) {
    return (
      // Plain <img>: images are optional static files and a missing one must fall back to the graphic.
      // eslint-disable-next-line @next/next/no-img-element
      <img ref={imgRef} src={image} alt={alt} loading="lazy" onError={() => setFailed(true)} className={`object-cover ${className}`} />
    );
  }

  return (
    <div className={`relative grid place-items-center overflow-hidden bg-gradient-to-br from-navy-700 to-navy-900 ${className}`} aria-hidden>
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-600/30 blur-3xl" />
      <span className="relative grid h-16 w-16 place-items-center rounded-2xl border border-white/15 bg-white/5 text-brand-400">
        <Icon size={32} />
      </span>
    </div>
  );
}
