import type { Metadata } from "next";
import Link from "next/link";
import ServiceCard from "@/components/services/ServiceCard";
import { rfpHref, serviceLineCount, services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "NDT and inspection, engineering and asset management consultancy, vibration and condition monitoring, drone inspection and rotating equipment support from Saudi K-KEM.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-navy-900 py-16 text-white sm:py-20">
        <div className="container-x">
          <p className="eyebrow !text-brand-400">Services</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold sm:text-5xl">Inspection, integrity and reliability services</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            {serviceLineCount} service lines covering more than 67 technical and inspection services for refineries,
            petrochemical and power plants.
          </p>
        </div>
      </section>

      <section className="container-x py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 rounded-xl bg-slate-50 p-8 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-semibold text-navy-800">Have a scope of work or tender?</h2>
            <p className="mt-1 text-sm text-slate-500">Send it to us and we will respond with a proposal.</p>
          </div>
          <Link href={rfpHref()} className="btn-primary shrink-0">
            Request RFP / Quote
          </Link>
        </div>
      </section>
    </>
  );
}
