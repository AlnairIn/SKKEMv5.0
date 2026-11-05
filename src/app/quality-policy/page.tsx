import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Quality Policy",
  description:
    "Saudi K-KEM Quality Policy: openness in communication, integrity in serving customers and technical excellence through industrial experts and state-of-the-art equipment.",
  alternates: { canonical: "/quality-policy" },
};

export default function QualityPolicyPage() {
  return (
    <>
      <section className="bg-navy-900 py-16 text-white sm:py-20">
        <div className="container-x">
          <nav aria-label="Breadcrumb" className="text-sm text-slate-400">
            <Link href="/about" className="hover:text-white">
              About Us
            </Link>{" "}
            / Quality Policy
          </nav>
          <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-start">
            <span className="grid h-16 w-16 shrink-0 place-items-center rounded-xl bg-brand-400/15 text-brand-400">
              <Award size={32} aria-hidden />
            </span>
            <div>
              <p className="eyebrow !text-brand-400">Policy</p>
              <h1 className="mt-2 max-w-3xl text-3xl font-bold sm:text-5xl">Quality Policy</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy-800 py-14 text-white sm:py-20">
        <div className="container-x max-w-4xl">
          <div className="space-y-5">
            <p className="rounded-xl border border-white/10 bg-white/5 p-6 text-lg leading-relaxed text-slate-200 sm:p-8">
              Saudi K-KEM is committed to an operating philosophy based on openness in communication, integrity in serving
              our customers, and delivering technical excellence through industrial experts and state-of-the-art
              equipment.
            </p>
            <p className="rounded-xl border border-white/10 bg-white/5 p-6 text-lg leading-relaxed text-slate-200 sm:p-8">
              After going through a numerous number of projects in Saudi Arabia, we have the confidence that we could
              deliver the highest quality of services thus becoming a benchmark to the industries and meeting our client
              expectation and satisfaction.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href="/hse-policy" className="btn-outline">
              Read our HSE Policy <ArrowRight size={16} aria-hidden />
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
