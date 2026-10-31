import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CategoryIcon from "@/components/products/CategoryIcon";
import { categoryQuoteHref, productCategories } from "@/lib/products";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Spring supports, expansion joints and snubbers (PT&P), online condition monitoring devices (Smart Plant Solutions), and NDT equipment and accessories from Saudi K-KEM.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Saudi K-KEM product lines",
    itemListElement: productCategories.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.title,
      url: `${siteConfig.url}/products/${c.slug}`,
    })),
  };

  return (
    <>
      <section className="bg-navy-900 py-16 text-white sm:py-20">
        <div className="container-x">
          <p className="eyebrow !text-brand-400">Products</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold sm:text-5xl">Products for inspection, integrity and reliability</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            Piping supports, online monitoring devices and NDT equipment for industrial plants.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={categoryQuoteHref()} className="btn-primary">
              Request a Quote <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <section className="container-x space-y-8 py-14">
        {productCategories.map((c) => (
          <article key={c.id} id={c.slug} className="card scroll-mt-24 p-6 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <span className="grid h-12 w-12 place-items-center rounded-lg bg-navy-800 text-brand-400">
                  <CategoryIcon slug={c.slug} size={24} />
                </span>
                <h2 className="mt-5 text-2xl font-semibold text-navy-800">
                  <Link href={`/products/${c.slug}`} className="hover:text-brand-600">
                    {c.title}
                  </Link>
                </h2>
                <p className="mt-3 leading-relaxed text-slate-500">{c.shortDescription}</p>
                <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold">
                  <Link href={`/products/${c.slug}`} className="inline-flex items-center gap-1 text-navy-800 hover:text-brand-600">
                    View details <ArrowRight size={14} aria-hidden />
                  </Link>
                  <Link href={categoryQuoteHref(c.slug)} className="text-brand-600 hover:text-brand-700">
                    Request a quote
                  </Link>
                </div>
              </div>

              <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
                {c.items.map((item) => (
                  <li key={item.name} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                    <h3 className="text-sm font-semibold text-navy-800">{item.name}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}

        <div className="flex flex-col items-start justify-between gap-4 rounded-xl bg-navy-900 p-8 text-white sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-semibold">Need something specific?</h2>
            <p className="mt-1 max-w-xl text-sm text-slate-300">
              Send us your specification, drawings or data sheet and our team will respond with a quotation.
            </p>
          </div>
          <Link href={categoryQuoteHref()} className="btn-primary shrink-0">
            Request a Quote
          </Link>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
