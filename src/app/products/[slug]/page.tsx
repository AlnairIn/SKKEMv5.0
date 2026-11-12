import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import CategoryIcon from "@/components/products/CategoryIcon";
import { pipingProducts, productQuoteHref } from "@/lib/piping-products";
import { categoryQuoteHref, getProductCategory, productCategories } from "@/lib/products";

export function generateStaticParams() {
  return productCategories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = getProductCategory(slug);
  if (!category) return {};
  return {
    title: category.title,
    description: category.shortDescription,
    alternates: { canonical: `/products/${category.slug}` },
  };
}

export default async function ProductCategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getProductCategory(slug);
  if (!category) notFound();

  const others = productCategories.filter((c) => c.slug !== category.slug);
  // PT&P also carries the detailed piping range (supplied separately in piping-products.ts).
  const showPipingRange = category.slug === "ptp";

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: category.title,
    itemListElement: category.items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      description: item.description,
    })),
  };

  return (
    <>
      <section className="bg-navy-900 py-14 text-white sm:py-20">
        <div className="container-x">
          <nav aria-label="Breadcrumb" className="text-sm text-slate-400">
            <Link href="/products" className="hover:text-white">
              Products
            </Link>{" "}
            / {category.title}
          </nav>
          <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-start">
            <span className="grid h-16 w-16 shrink-0 place-items-center rounded-xl bg-brand-400/15 text-brand-400">
              <CategoryIcon slug={category.slug} size={32} />
            </span>
            <div>
              <h1 className="max-w-3xl text-3xl font-bold sm:text-5xl">{category.title}</h1>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-300">{category.shortDescription}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={categoryQuoteHref(category.slug)} className="btn-primary">
                  Request a Quote <ArrowRight size={16} aria-hidden />
                </Link>
                <Link href="/products" className="btn-outline">
                  All products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-x space-y-16 py-14">
        <section>
          <h2 className="text-2xl font-semibold text-navy-800">Product range</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {category.items.map((item) => (
              <li key={item.name} className="card p-6">
                <h3 className="text-lg font-semibold text-navy-800">{item.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{item.description}</p>
              </li>
            ))}
          </ul>
        </section>

        {showPipingRange && (
          <section id="full-range" className="scroll-mt-24">
            <h2 className="text-2xl font-semibold text-navy-800">Complete piping range</h2>
            <p className="mt-2 max-w-2xl text-slate-500">
              Every product family available through PT&amp;P, with quotes by family.
            </p>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {pipingProducts.map((c, i) => (
                <article key={c.id} id={c.id} className="card flex scroll-mt-24 flex-col p-6 sm:p-8">
                  <p className="font-display text-sm font-bold text-brand-600">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-1 text-xl font-semibold text-navy-800">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{c.description}</p>
                  <ul className="mt-5 flex-1 space-y-2 border-t border-slate-100 pt-5 text-sm text-slate-700">
                    {c.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <Check size={16} className="mt-0.5 shrink-0 text-brand-600" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={productQuoteHref(c.id)}
                    className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700"
                  >
                    Request a quote for this family <ArrowRight size={14} aria-hidden />
                  </Link>
                </article>
              ))}
            </div>
          </section>
        )}

        <div className="flex flex-col items-start justify-between gap-4 rounded-xl bg-navy-900 p-8 text-white sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-semibold">Ready to request a quotation?</h2>
            <p className="mt-1 max-w-xl text-sm text-slate-300">
              Tell us the items, sizes and quantities and our team will respond with a quotation.
            </p>
          </div>
          <Link href={categoryQuoteHref(category.slug)} className="btn-primary shrink-0">
            Request a Quote
          </Link>
        </div>
      </div>

      <section className="border-t border-slate-200 bg-slate-50 py-14">
        <div className="container-x">
          <h2 className="text-2xl font-semibold text-navy-800">Other product lines</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {others.map((c) => (
              <Link key={c.slug} href={`/products/${c.slug}`} className="card group flex gap-4 p-6 transition-shadow hover:shadow-lg">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-navy-800 text-brand-400">
                  <CategoryIcon slug={c.slug} size={24} />
                </span>
                <span>
                  <span className="block text-lg font-semibold text-navy-800 group-hover:text-brand-600">{c.title}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-slate-500">{c.shortDescription}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
