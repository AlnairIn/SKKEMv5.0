import Link from "next/link";
import { ArrowRight } from "lucide-react";
import OrgGrid from "@/components/about/OrgGrid";
import { clients } from "@/lib/clients";

export default function ClientsStrip() {
  return (
    <section id="clients" className="container-x scroll-mt-20 py-20 sm:py-24">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div className="max-w-2xl">
          <p className="eyebrow">Our clients</p>
          <h2 className="mt-2 text-3xl font-bold text-navy-800 sm:text-4xl">Trusted by the Kingdom&apos;s major operators</h2>
          <p className="mt-3 leading-relaxed text-slate-500">
            We support leading energy, petrochemical, mining and industrial companies across Saudi Arabia.
          </p>
        </div>
        <Link href="/about#clients" className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700">
          View all clients <ArrowRight size={14} aria-hidden />
        </Link>
      </div>
      <div className="mt-8">
        <OrgGrid items={clients.slice(0, 10)} label="Selected clients" />
      </div>
    </section>
  );
}
