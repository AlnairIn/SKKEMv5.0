import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import ServiceCard from "@/components/services/ServiceCard";
import ServiceIcon from "@/components/services/ServiceIcon";
import { getService, rfpHref, services } from "@/lib/services";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.tagline,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.summary,
    serviceType: service.shortName,
    url: `${siteConfig.url}/services/${service.slug}`,
    provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    areaServed: { "@type": "Country", name: "Saudi Arabia" },
  };

  return (
    <>
      <section className="bg-navy-900 py-14 text-white sm:py-20">
        <div className="container-x">
          <nav aria-label="Breadcrumb" className="text-sm text-slate-400">
            <Link href="/services" className="hover:text-white">
              Services
            </Link>{" "}
            / {service.shortName}
          </nav>
          <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-start">
            <span className="grid h-16 w-16 shrink-0 place-items-center rounded-xl bg-brand-600/20 text-brand-400">
              <ServiceIcon name={service.icon} size={32} />
            </span>
            <div>
              <h1 className="max-w-3xl text-3xl font-bold sm:text-5xl">{service.name}</h1>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-300">{service.tagline}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={rfpHref(service.slug)} className="btn-primary">
                  {service.rfpLabel} <ArrowRight size={16} aria-hidden />
                </Link>
                <Link href="/services" className="btn-outline">
                  All services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-x grid gap-12 py-16 lg:grid-cols-12">
        <div className="space-y-12 lg:col-span-8">
          <section>
            <h2 className="text-2xl font-semibold text-navy-800">Overview</h2>
            <p className="mt-3 leading-relaxed text-slate-500">{service.summary}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-navy-800">Key capabilities</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {service.features.map((f) => (
                <li key={f} className="card flex gap-3 p-4 text-sm text-slate-700">
                  <Check size={18} className="mt-0.5 shrink-0 text-brand-600" aria-hidden />
                  {f}
                </li>
              ))}
            </ul>
          </section>

          {service.subServices ? (
            <section>
              <h2 className="text-2xl font-semibold text-navy-800">Services included</h2>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {service.subServices.map((sub) => (
                  <div key={sub.name} className="card flex flex-col p-6">
                    <h3 className="text-lg font-semibold text-navy-800">{sub.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-500">{sub.description}</p>
                    <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4 text-sm text-slate-700">
                      {sub.items.map((item) => (
                        <li key={item} className="flex gap-2">
                          <Check size={16} className="mt-0.5 shrink-0 text-brand-600" aria-hidden />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          ) : (
            <section>
              <h2 className="text-2xl font-semibold text-navy-800">Services included</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {service.includes.map((i) => (
                  <li key={i} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-sm font-medium text-navy-700">
                    {i}
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section>
            <h2 className="text-2xl font-semibold text-navy-800">Typical applications</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-500">
              {service.applications.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </section>
        </div>

        <aside className="space-y-6 lg:col-span-4">
          {service.standards.length > 0 && (
          <div className="card p-6">
            <h2 className="text-lg font-semibold text-navy-800">Codes &amp; standards</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-500">
              {service.standards.map((s) => (
                <li key={s} className="flex gap-2">
                  <Check size={16} className="mt-0.5 shrink-0 text-brand-600" aria-hidden />
                  {s}
                </li>
              ))}
            </ul>
          </div>
          )}
          <div className="card p-6">
            <h2 className="text-lg font-semibold text-navy-800">Industries served</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {service.industries.map((i) => (
                <li key={i} className="rounded bg-navy-50 px-2.5 py-1 text-sm font-medium text-navy-700">
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl bg-navy-900 p-6 text-white">
            <h2 className="text-lg font-semibold">Ready to discuss your scope?</h2>
            <p className="mt-2 text-sm text-slate-300">Send us your RFP or requirements and we will respond with a proposal.</p>
            <Link href={rfpHref(service.slug)} className="btn-primary mt-5 w-full">
              {service.rfpLabel}
            </Link>
          </div>
        </aside>
      </div>

      <section className="border-t border-slate-200 bg-slate-50 py-16">
        <div className="container-x">
          <h2 className="text-2xl font-semibold text-navy-800">Related services</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {related.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
