import Image from "next/image";
import type { Organisation } from "@/lib/clients";

/** Grid of client or partner tiles: logo when provided, otherwise the organisation name. */
export default function OrgGrid({ items, label, dark = false }: { items: Organisation[]; label: string; dark?: boolean }) {
  return (
    <ul aria-label={label} className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {items.map((o) => (
        <li
          key={o.name}
          className={`grid h-20 place-items-center rounded-lg border px-3 text-center font-display text-base font-semibold ${
            dark ? "border-white/10 bg-white/5 text-white" : "border-slate-200 bg-white text-navy-800 shadow-card"
          }`}
        >
          {o.logo ? <Image src={o.logo} alt={o.name} width={140} height={56} className="max-h-12 w-auto object-contain" /> : o.name}
        </li>
      ))}
    </ul>
  );
}
