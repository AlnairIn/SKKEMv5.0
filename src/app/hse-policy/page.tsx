import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "HSE Policy",
  description:
    "Saudi K-KEM Environment, Health & Safety (HSE) Policy: our commitment to the health and safety of employees, partners, clients and visitors, and to protecting the environment. Safety is our core value.",
  alternates: { canonical: "/hse-policy" },
};

const intro = [
  "We at Saudi K-KEM Engineering Service Company are strongly committed to health and safety of our employees, partners, clients and visitors as well as protection of the environment where our work activities are carried out. Commitment starts from top management downward. Safety is our core value.",
  "We comply with environment, health and safety standards of our clients in order to keep a healthy and safe workplace. In general, we perform the following EHS arrangements:",
];

const arrangements = [
  "We conduct regular training related to environment, health and safety to upgrade the knowledge and skills of our employees. We believe that competency is a key to safety.",
  "We develop and implement a recognition program to award our employees who work safely and healthily as well as participate in reporting significant observations and incidents.",
  "We always oblige our employees to follow the Life Saving Rules (LSRs) to avoid personal injuries and property damages.",
  "We identify the hazards before the work starts, assess the risks associated with them and recommend control measures. Work Permits, Job Safety Analysis and Standard Maintenance Procedures are strictly followed.",
  "We do not tolerate any unsafe acts and unsafe conditions that will result in incidents. Appropriate disciplinary actions are implemented in case of non-compliance and violations.",
  "We proactively and reactively monitor the Environment, Health and Safety Key Performance Indicators (KPIs) of our employees for continuous improvement. Any shortcomings detected are immediately corrected. Inspection together with correction equals protection.",
  "We periodically review this policy to stay updated and relevant and communicate to all concerned employees.",
];

export default function HsePolicyPage() {
  return (
    <>
      <section className="bg-navy-900 py-16 text-white sm:py-20">
        <div className="container-x">
          <nav aria-label="Breadcrumb" className="text-sm text-slate-400">
            <Link href="/about" className="hover:text-white">
              About Us
            </Link>{" "}
            / HSE Policy
          </nav>
          <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-start">
            <span className="grid h-16 w-16 shrink-0 place-items-center rounded-xl bg-brand-400/15 text-brand-400">
              <ShieldCheck size={32} aria-hidden />
            </span>
            <div>
              <p className="eyebrow !text-brand-400">Policy</p>
              <h1 className="mt-2 max-w-3xl text-3xl font-bold sm:text-5xl">Environment, Health &amp; Safety (HSE) Policy</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy-800 py-14 text-white sm:py-20">
        <div className="container-x max-w-5xl">
          <div className="space-y-4 rounded-xl border border-white/10 bg-white/5 p-6 text-lg leading-relaxed text-slate-200 sm:p-8">
            {intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <ol className="mt-6 grid gap-4 md:grid-cols-2">
            {arrangements.map((text, i) => (
              <li
                key={text}
                className={`flex gap-4 rounded-xl border border-white/10 bg-white/5 p-6 ${
                  i === arrangements.length - 1 && arrangements.length % 2 === 1 ? "md:col-span-2" : ""
                }`}
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-400/15 font-display text-sm font-bold text-brand-400">
                  {i + 1}
                </span>
                <p className="leading-relaxed text-slate-200">{text}</p>
              </li>
            ))}
          </ol>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href="/quality-policy" className="btn-outline">
              Read our Quality Policy <ArrowRight size={16} aria-hidden />
            </Link>
            <Link href="/contact" className="btn-primary">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
