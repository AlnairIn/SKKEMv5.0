import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Download, Eye, Handshake, HardHat, Target, Users } from "lucide-react";
import OrgGrid from "@/components/about/OrgGrid";
import { clients, partners } from "@/lib/clients";
import { services } from "@/lib/services";
import { siteConfig, stats } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Saudi K-KEM Engineering Service Company: a reliable resource for NDT, inspection and asset integrity management, headquartered in Al Jubail, Saudi Arabia.",
  alternates: { canonical: "/about" },
};

// Company text below follows the About, Vision & Mission, HSE, Quality, Clients and Partners pages on saudikkem.com.
// TODO (content owner): confirm wording; add leadership, locations and certifications when approved.
const mission = [
  "Stand out from competitors by offering new inspection techniques",
  "Ensure client satisfaction through strong commitment and high quality across projects",
  "Maintain a competent, highly skilled workforce",
  "Promote Saudization",
];

const quality = [
  { title: "Our people", text: "Equal employment opportunity, employee welfare first, honest communication, training and a safe, secure workplace." },
  { title: "Our customers", text: "Customer needs are paramount: we aim to anticipate them and meet or exceed them without overpromising." },
  { title: "Our communities", text: "Support for the communities where we operate, social responsibility, pollution prevention and compliance with safety, environmental and legal requirements." },
  { title: "Our quality", text: "Meeting customer, statutory and regulatory requirements and continually improving our quality management system across the supply chain." },
];

const hse = [
  "Safety is our core value, set from the top down",
  "Regular EHS training: competency is a key to safety",
  "Hazard identification and risk assessment before work, with work permits and job safety analyses",
  "Mandatory adherence to Life Saving Rules",
  "Zero tolerance for unsafe acts and conditions",
  "Ongoing monitoring of EHS KPIs and prompt correction",
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy-900 py-16 text-white sm:py-20">
        <div className="container-x">
          <p className="eyebrow !text-brand-400">About Saudi K-KEM</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold sm:text-5xl">
            A reliable resource for NDT, inspection and asset integrity management
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            We are different, here to fulfil your business needs. Headquartered in {siteConfig.address}, we help asset
            owners inspect, understand and maintain critical plant equipment.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Contact us <ArrowRight size={16} aria-hidden />
            </Link>
            <a href="https://www.saudikkem.com/Files/SKKEM.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline">
              <Download size={16} aria-hidden /> Company profile (PDF)
            </a>
          </div>
        </div>
      </section>

      <div className="container-x space-y-20 py-16">
        {/* Corporate overview + stats */}
        <section className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="text-2xl font-semibold text-navy-800">Corporate overview</h2>
            <div className="mt-4 space-y-4 leading-relaxed text-slate-500">
              <p>
                {siteConfig.legalName} provides non-destructive testing (NDT), inspection and asset integrity management
                to the oil, gas, petrochemical and power plant industries, mainly in Saudi Arabia, supported by a
                worldwide network of specialists.
              </p>
              <p>
                Our qualified personnel, quality standards and up-to-date inspection equipment help clients improve
                equipment integrity, quality and efficiency, support safe working conditions and reduce the impact of
                industry on the environment.
              </p>
            </div>
          </div>
          <dl className="grid gap-4 sm:grid-cols-3 lg:col-span-5 lg:grid-cols-1">
            {stats.map((s) => (
              <div key={s.label} className="card flex flex-col-reverse justify-end p-5">
                <dt className="mt-1 text-sm text-slate-500">{s.label}</dt>
                <dd className="font-display text-3xl font-bold text-navy-800">
                  {s.value.toLocaleString("en-US")}
                  {s.suffix}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Vision and mission */}
        <section>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card p-6 sm:p-8">
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand-50 text-brand-600">
                <Eye size={22} aria-hidden />
              </span>
              <h2 className="mt-4 text-xl font-semibold text-navy-800">Our vision</h2>
              <p className="mt-2 leading-relaxed text-slate-500">
                To be a successful corporation built on loyalty, integrity, honesty, cohesiveness and professionalism.
              </p>
            </div>
            <div className="card p-6 sm:p-8">
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand-50 text-brand-600">
                <Target size={22} aria-hidden />
              </span>
              <h2 className="mt-4 text-xl font-semibold text-navy-800">Our mission</h2>
              <ul className="mt-2 list-disc space-y-1.5 pl-5 leading-relaxed text-slate-500">
                {mission.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* What we do */}
        <section>
          <h2 className="text-2xl font-semibold text-navy-800">What we do</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-slate-500">
            Six service lines span the asset lifecycle, from inspection and integrity management to condition
            monitoring, engineering and site safety.
          </p>
          <ul className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <li key={s.slug} className="card p-5">
                <Link href={`/services/${s.slug}`} className="font-semibold text-brand-600 hover:text-brand-700">
                  {s.name}
                </Link>
                <p className="mt-1.5 text-sm text-slate-500">{s.includes.join(" · ")}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* HSE and quality */}
        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl bg-navy-900 p-6 text-white sm:p-8">
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand-400/15 text-brand-400">
              <HardHat size={22} aria-hidden />
            </span>
            <h2 className="mt-4 text-xl font-semibold">HSE policy</h2>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-slate-300">
              {hse.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
          <div className="card p-6 sm:p-8">
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand-50 text-brand-600">
              <Users size={22} aria-hidden />
            </span>
            <h2 className="mt-4 text-xl font-semibold text-navy-800">Quality policy</h2>
            <dl className="mt-3 space-y-3">
              {quality.map((q) => (
                <div key={q.title}>
                  <dt className="text-sm font-semibold text-navy-800">{q.title}</dt>
                  <dd className="text-sm leading-relaxed text-slate-500">{q.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Major clients */}
        <section id="clients" className="scroll-mt-24">
          <p className="eyebrow">Our clients</p>
          <h2 className="mt-2 text-2xl font-semibold text-navy-800">Major clients</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-slate-500">
            We serve leading energy, petrochemical, mining and industrial companies across Saudi Arabia.
          </p>
          <div className="mt-6">
            <OrgGrid items={clients} label="Major clients" />
          </div>
        </section>

        {/* Partners */}
        <section id="partners" className="scroll-mt-24">
          <h2 className="flex items-center gap-2 text-2xl font-semibold text-navy-800">
            <Handshake size={22} className="text-brand-600" aria-hidden /> Our partners
          </h2>
          <div className="mt-6 max-w-3xl">
            <OrgGrid items={partners} label="Partners" />
          </div>
        </section>

        <section className="border-t border-slate-200 pt-8 text-sm text-slate-500">
          {siteConfig.legalName} &middot; CR No. 2055012533
        </section>
      </div>
    </>
  );
}
