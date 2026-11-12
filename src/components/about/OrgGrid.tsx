"use client";

import { useState } from "react";
import type { Organisation } from "@/lib/clients";

const EXTENSIONS = ["png", "jpg", "jpeg", "webp", "svg"];

/** Shows the logo (trying each supported extension in turn) and falls back to the name if no file exists. */
function Tile({ org, dark }: { org: Organisation; dark: boolean }) {
  const [attempt, setAttempt] = useState(0);
  const showLogo = org.logo && attempt < EXTENSIONS.length;

  return (
    <li
      className={`grid h-20 place-items-center rounded-lg border px-3 text-center font-display text-base font-semibold ${
        dark ? "border-white/10 bg-white/5 text-white" : "border-slate-200 bg-white text-navy-800 shadow-card"
      }`}
    >
      {showLogo ? (
        // Plain <img>: logos are optional static files, and a missing one must fall back to the name.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={attempt}
          src={`${org.logo}.${EXTENSIONS[attempt]}`}
          alt={org.name}
          loading="lazy"
          onError={() => setAttempt((a) => a + 1)}
          className="max-h-14 w-auto max-w-full object-contain"
        />
      ) : (
        org.name
      )}
    </li>
  );
}

/** Grid of client or partner tiles. */
export default function OrgGrid({ items, label, dark = false }: { items: Organisation[]; label: string; dark?: boolean }) {
  return (
    <ul aria-label={label} className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {items.map((o) => (
        <Tile key={o.name} org={o} dark={dark} />
      ))}
    </ul>
  );
}
