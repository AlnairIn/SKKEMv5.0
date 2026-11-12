import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import ServiceIcon from "./ServiceIcon";
import { rfpHref, type Service } from "@/lib/services";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="card group relative flex h-full flex-col p-6 transition-shadow hover:shadow-lg">
      <span className="grid h-12 w-12 place-items-center rounded-lg bg-navy-800 text-brand-400">
        <ServiceIcon name={service.icon} size={24} />
      </span>
      <h3 className="mt-5 text-xl font-semibold text-navy-800">
        <Link href={`/services/${service.slug}`} className="after:absolute after:inset-0 hover:text-brand-600">
          {service.name}
        </Link>
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-500">{service.tagline}</p>

      <ul className="mt-4 space-y-2 text-sm text-slate-700">
        {service.features.slice(0, 3).map((f) => (
          <li key={f} className="flex gap-2">
            <Check size={16} className="mt-0.5 shrink-0 text-brand-600" aria-hidden />
            {f}
          </li>
        ))}
      </ul>

      <div className="relative z-10 mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-slate-100 pt-4 text-sm font-semibold">
        <Link href={`/services/${service.slug}`} className="inline-flex items-center gap-1 text-navy-800 hover:text-brand-600">
          Learn more <ArrowRight size={14} aria-hidden />
        </Link>
        <Link href={rfpHref(service.slug)} className="text-brand-600 hover:text-brand-700">
          {service.rfpLabel}
        </Link>
      </div>
    </article>
  );
}
