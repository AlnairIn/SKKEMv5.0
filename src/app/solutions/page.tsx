import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  ClipboardCheck,
  Cpu,
  DraftingCompass,
  Gauge,
  Layers,
  LineChart,
  Radar,
  Radio,
  SlidersHorizontal,
  Waves,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import {
  solutionPillars,
  solutionsIntro,
  solutionsQuoteHref,
  type SolutionIcon,
} from "@/lib/solutions";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Saudi K-KEM Solutions: a one-stop center for asset integrity management and Smart Plant Solutions for industry digitization and IoT.",
  alternates: { canonical: "/solutions" },
};

const icons: Record<SolutionIcon, LucideIcon> = {
  rehab: Wrench,
  reliability: Gauge,
  optimization: SlidersHorizontal,
  predictive: LineChart,
  engineering: DraftingCompass,
  reassessment: ClipboardCheck,
  ut: Radio,
  vibration: Waves,
  valve: Activity,
  drone: Radar,
};

const pillarIcons = [Layers, Cpu];

export default function SolutionsPage() {
  return (
    <>
      {/* Hero and core value proposition */}
      <section className="bg-navy-900 py-16 text-white sm:py-24">
        <div className="container-x">
          <p className="eyebrow !text-brand-400">Saudi K-KEM Solutions</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold sm:text-5xl">{solutionsIntro.heading}</h1>
          <div className="mt-6 max-w-3xl space-y-4 text-lg leading-relaxed text-slate-300">
            {solutionsIntro.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={solutionsQuoteHref} className="btn-primary">
              Request Quote <ArrowRight size={16} aria-hidden />
            </Link>
            <a href="#asset-integrity" className="btn-outline">
              Explore our solutions
            </a>
          </div>
        </div>
      </section>

      {/* Strategic pillars */}
      {solutionPillars.map((pillar, i) => {
        const PillarIcon = pillarIcons[i] ?? Layers;
        const dark = i % 2 === 0;
        return (
          <section
            key={pillar.id}
            id={pillar.id}
            className={`scroll-mt-24 py-16 text-white sm:py-20 ${dark ? "bg-navy-800" : "bg-navy-900"}`}
          >
            <div className="container-x">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10">
                <span className="grid h-16 w-16 shrink-0 place-items-center rounded-xl bg-brand-400/15 text-brand-400">
                  <PillarIcon size={32} aria-hidden />
                </span>
                <div className="max-w-3xl">
                  <p className="font-display text-sm font-semibold tracking-widest text-brand-400">
                    PILLAR {pillar.number}
                    {pillar.subtitle ? ` · ${pillar.subtitle.toUpperCase()}` : ""}
                  </p>
                  <h2 className="mt-2 text-3xl font-bold sm:text-4xl">{pillar.title}</h2>
                  <p className="mt-4 text-lg leading-relaxed text-slate-300">{pillar.intro}</p>
                </div>
              </div>

              <h3 className="mt-12 text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                {pillar.listHeading}
              </h3>
              <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {pillar.items.map((item) => {
                  const Icon = icons[item.icon];
                  return (
                    <li
                      key={item.name}
                      className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-5 transition-colors hover:border-brand-400/50 hover:bg-white/[0.08]"
                    >
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-brand-400/15 text-brand-400">
                        <Icon size={22} aria-hidden />
                      </span>
                      <span className="pt-1 font-semibold leading-snug">{item.name}</span>
                    </li>
                  );
                })}
              </ul>

              {pillar.id === "smart-plant" && (
                <p className="mt-8 text-slate-300">
                  Looking for the devices themselves?{" "}
                  <Link
                    href="/products/smart-plant-solutions"
                    className="font-semibold text-brand-300 underline underline-offset-4 hover:text-white"
                  >
                    See Smart Plant Solutions in our products
                  </Link>
                  .
                </p>
              )}
            </div>
          </section>
        );
      })}

      {/* Closing CTA */}
      <section className="bg-navy-900 pb-16 pt-4 text-white sm:pb-20">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-brand-400/30 bg-gradient-to-r from-brand-700/30 to-navy-800 p-8 sm:p-10 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold sm:text-3xl">Plan your next integrity or Smart Plant project</h2>
              <p className="mt-2 text-slate-300">
                Tell us about your facility, turnaround or monitoring needs and our engineers will respond with a tailored
                proposal.
              </p>
            </div>
            <Link href={solutionsQuoteHref} className="btn-primary shrink-0 !px-7 !py-3.5 text-base">
              Request Quote <ArrowRight size={18} aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
