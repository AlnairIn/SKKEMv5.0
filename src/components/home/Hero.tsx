import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import ServiceIcon from "@/components/services/ServiceIcon";
import StatsCounter from "./StatsCounter";
import { services } from "@/lib/services";
import { stats } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-900 text-white">
      {/* blueprint grid + glow */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div aria-hidden className="absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-brand-600/25 blur-3xl" />
      <div aria-hidden className="absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-navy-500/30 blur-3xl" />

      <div className="container-x relative pt-16 sm:pt-20 lg:pt-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="eyebrow !text-brand-400">Industrial Services &amp; Engineering Consultation</p>
            <h1 className="mt-4 text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl">
              Inspection and integrity services that keep Saudi industry safe and running.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
              We are different, here to fulfil your business needs. From our headquarters in Al Jubail, we deliver NDT
              and inspection, vibration and condition monitoring, asset management consultancy, rope access and drone
              inspection, engineering consultancy and safety services to refineries, petrochemical and power plants.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/services/ndt-inspection" className="btn-primary">
                Explore Inspection Services <ArrowRight size={16} aria-hidden />
              </Link>
              <Link href="/contact?type=proposal&service=engineering-consultancy#quote" className="btn-outline">
                Request Engineering Proposal
              </Link>
            </div>
          </div>

          <aside className="lg:col-span-5" aria-label="Service lines">
            <div className="rounded-xl border border-white/10 bg-white/5 p-2 backdrop-blur">
              <p className="px-4 pb-1 pt-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Our service lines</p>
              <ul>
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="group flex items-center gap-3 rounded-lg px-4 py-3 transition-colors hover:bg-white/5"
                    >
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-brand-600/20 text-brand-400">
                        <ServiceIcon name={s.icon} size={18} />
                      </span>
                      <span className="flex-1 text-sm font-medium">{s.shortName}</span>
                      <ChevronRight size={16} className="text-slate-500 transition-transform group-hover:translate-x-0.5 group-hover:text-brand-400" aria-hidden />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        {/* key statistics */}
        <dl className="mt-14 grid grid-cols-3 gap-4 border-t border-white/10 py-8 sm:mt-16 sm:gap-8 sm:py-10">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse justify-end">
              <dt className="mt-1 text-xs leading-snug text-slate-400 sm:text-sm">{s.label}</dt>
              <dd className="font-display text-3xl font-bold text-white sm:text-5xl">
                <StatsCounter value={s.value} suffix={s.suffix} mode={s.format} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
