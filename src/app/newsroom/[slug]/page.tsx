import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import NewsVisual from "@/components/newsroom/NewsVisual";
import ShareButtons from "@/components/newsroom/ShareButtons";
import { formatNewsDate, getArticle, newsArticles, relatedArticles } from "@/lib/news";
import { siteConfig } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return newsArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/newsroom/${article.slug}` },
    openGraph: { title: article.title, description: article.excerpt, type: "article", publishedTime: article.date },
  };
}

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const url = `${siteConfig.url}/newsroom/${article.slug}`;
  const related = relatedArticles(article.slug, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    mainEntityOfPage: url,
    articleSection: article.category,
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Header */}
      <section className="bg-navy-900 py-12 text-white sm:py-16">
        <div className="container-x max-w-4xl">
          <nav aria-label="Breadcrumb" className="text-sm text-slate-400">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/newsroom" className="hover:text-white">
                  Newsroom
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li aria-current="page" className="text-slate-200">
                {article.title}
              </li>
            </ol>
          </nav>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm">
            <span className="rounded-full bg-brand-400/15 px-3 py-1 font-semibold text-brand-300">{article.category}</span>
            <time dateTime={article.date} className="text-slate-300">
              {formatNewsDate(article.date)}
            </time>
          </div>
          <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">{article.title}</h1>
        </div>
      </section>

      {/* Body */}
      <article className="bg-white py-12 sm:py-16">
        <div className="container-x max-w-4xl">
          <NewsVisual image={article.image} category={article.category} alt="Saudi K-KEM News" className="h-56 w-full rounded-xl sm:h-80" />

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-6">
            <Link href="/newsroom" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-600">
              <ArrowLeft size={16} aria-hidden /> Back to Newsroom
            </Link>
            <ShareButtons url={url} title={article.title} />
          </div>

          <div className="mt-8 max-w-3xl space-y-6 text-lg leading-8 text-slate-700">
            <p className="text-xl font-medium leading-8 text-navy-800">{article.excerpt}</p>
            {article.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <p className="mt-10 max-w-3xl border-t border-slate-200 pt-6 text-sm text-slate-500">
            Media contact: <a href={`mailto:${siteConfig.email}`} className="font-semibold text-brand-700 hover:underline">{siteConfig.email}</a>
          </p>
        </div>
      </article>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-slate-50 py-12 sm:py-16">
          <div className="container-x">
            <h2 className="text-2xl font-bold text-navy-800">Related news</h2>
            <ul className="mt-6 grid gap-6 md:grid-cols-2">
              {related.map((r) => (
                <li key={r.id}>
                  <Link href={`/newsroom/${r.slug}`} className="card group flex h-full flex-col overflow-hidden transition-shadow hover:shadow-lg">
                    <NewsVisual image={r.image} category={r.category} className="h-40 w-full" />
                    <div className="flex flex-1 flex-col p-5">
                      <p className="text-xs font-semibold text-brand-700">
                        {r.category} <span className="font-normal text-slate-500">&middot; {formatNewsDate(r.date)}</span>
                      </p>
                      <h3 className="mt-2 font-semibold leading-snug text-navy-800">{r.title}</h3>
                      <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold text-brand-700">
                        Read More <ArrowRight size={14} aria-hidden className="transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link href="/newsroom" className="btn-primary">
                <ArrowLeft size={16} aria-hidden /> Back to Newsroom
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
