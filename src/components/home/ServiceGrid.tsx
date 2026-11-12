import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ServiceCard from "@/components/services/ServiceCard";
import { serviceLineCount, services } from "@/lib/services";
import { stats } from "@/lib/site";

export default function ServiceGrid() {
  return (
    <section id="services" className="container-x scroll-mt-20 py-20 sm:py-24">
      <div className="max-w-2xl">
        <p className="eyebrow">What we do</p>
        <h2 className="mt-2 text-3xl font-bold text-navy-800 sm:text-4xl">
          {serviceLineCount} service lines, one integrated inspection and engineering partner
        </h2>
        <p className="mt-4 leading-relaxed text-slate-500">
          Choose a single discipline or combine them: inspection findings feed integrity decisions, and condition
          monitoring data guides overhaul scope.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div key={s.slug} className="relative">
            <ServiceCard service={s} />
          </div>
        ))}

        {/* full-width banner so the grid stays balanced whatever the number of services */}
        <div className="flex flex-col gap-6 rounded-xl bg-navy-900 p-6 text-white sm:col-span-2 sm:p-8 lg:col-span-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <p className="font-display text-5xl font-bold text-brand-400">{stats[1].value}+</p>
            <div>
              <h3 className="text-xl font-semibold">Technical &amp; inspection services</h3>
              <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-slate-300">
                Don&apos;t see your requirement? Tell us the scope and we will confirm how we can support it.
              </p>
            </div>
          </div>
          <Link href="/services" className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-brand-300 hover:text-white">
            Browse all services <ArrowRight size={14} aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
