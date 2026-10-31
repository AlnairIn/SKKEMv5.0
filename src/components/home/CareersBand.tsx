import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CareersBand() {
  return (
    <section className="container-x pb-20 sm:pb-24">
      <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-navy-900 p-8 text-white sm:p-10 lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          <p className="eyebrow !text-brand-400">Join us</p>
          <h2 className="mt-2 text-2xl font-bold sm:text-3xl">Build your career with Saudi K-KEM</h2>
          <p className="mt-2 text-slate-300">Explore current openings in inspection, engineering and technical services.</p>
        </div>
        <Link href="/careers" className="btn-primary shrink-0">
          View open positions <ArrowRight size={16} aria-hidden />
        </Link>
      </div>
    </section>
  );
}
