import { ClipboardCheck, HardHat, ShieldCheck, UserCheck } from "lucide-react";
import StatsCounter from "./StatsCounter";
import { codesAndStandards } from "@/lib/services";
import { stats } from "@/lib/site";

// TODO (content owner): confirm each commitment matches K-KEM's HSE management system, and add
// certifications / client approvals here only once the documents are available.
const commitments = [
  { icon: HardHat, title: "Safety before schedule", text: "Every job starts with a risk review and a clear plan for working safely on live industrial sites." },
  { icon: UserCheck, title: "Qualified people", text: "Inspection and monitoring work is carried out by trained personnel against recognised qualification schemes." },
  { icon: ClipboardCheck, title: "Documented and traceable", text: "Procedures, results and reports are recorded so clients can audit what was done and why." },
  { icon: ShieldCheck, title: "Lower-exposure methods", text: "Drone and remote techniques reduce time spent at height and in confined or hard-to-reach areas." },
];

export default function SafetyCompliance() {
  const hours = stats[2];
  return (
    <section id="safety" className="scroll-mt-16 bg-slate-50 py-20 sm:py-24">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow">Safety &amp; compliance</p>
            <h2 className="mt-2 text-3xl font-bold text-navy-800 sm:text-4xl">Safety is how we measure every job</h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-slate-500">
              Our people work in some of the most demanding plants in the Kingdom. Safe, compliant delivery is a
              condition of the work, not an extra.
            </p>
          </div>
          <div className="rounded-xl bg-navy-900 p-6 text-white lg:col-span-5">
            <p className="font-display text-5xl font-bold text-brand-400">
              <StatsCounter value={hours.value} suffix={hours.suffix} mode="full" />
            </p>
            <p className="mt-1 text-sm text-slate-300">Total recorded safe man-hours</p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {commitments.map(({ icon: Icon, title, text }) => (
            <div key={title} className="card p-6">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand-50 text-brand-600">
                <Icon size={20} aria-hidden />
              </span>
              <h3 className="mt-4 font-semibold text-navy-800">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-6 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-sm text-sm font-medium text-slate-700">Codes and standards our services are carried out against</p>
          <ul className="flex flex-wrap gap-2">
            {codesAndStandards.map((s) => (
              <li key={s} className="rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-sm font-semibold text-navy-700">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
