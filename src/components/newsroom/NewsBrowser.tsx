"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import NewsVisual from "@/components/newsroom/NewsVisual";
import { formatNewsDate, newsCategories, type NewsArticle, type NewsCategory } from "@/lib/news";

type Filter = "All" | NewsCategory;
const filters: Filter[] = ["All", ...newsCategories];

function Meta({ article }: { article: NewsArticle }) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
      <span className="rounded-full bg-brand-400/15 px-2.5 py-1 font-semibold text-brand-300">{article.category}</span>
      <time dateTime={article.date} className="text-slate-400">
        {formatNewsDate(article.date)}
      </time>
    </div>
  );
}

/** Category filter, featured card and article grid. Filtering happens in the browser, with no page reload. */
export default function NewsBrowser({ articles }: { articles: NewsArticle[] }) {
  const [filter, setFilter] = useState<Filter>("All");

  const visible = useMemo(() => (filter === "All" ? articles : articles.filter((a) => a.category === filter)), [articles, filter]);
  const featured = visible.find((a) => a.featured);
  const rest = visible.filter((a) => a !== featured);

  return (
    <div>
      <div role="group" aria-label="Filter news by category" className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400 ${
              filter === f
                ? "border-brand-600 bg-brand-600 text-white"
                : "border-white/15 bg-white/5 text-slate-300 hover:border-brand-400/60 hover:text-white"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <p className="sr-only" aria-live="polite">
        {visible.length} {visible.length === 1 ? "article" : "articles"} shown
      </p>

      {visible.length === 0 && (
        <p className="mt-10 rounded-xl border border-white/10 bg-white/5 p-8 text-center text-slate-300">
          No articles in this category yet.
        </p>
      )}

      {featured && (
        <Link
          href={`/newsroom/${featured.slug}`}
          className="group mt-8 grid overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-colors hover:border-brand-400/50 lg:grid-cols-2"
        >
          <NewsVisual image={featured.image} category={featured.category} className="min-h-[14rem] w-full lg:h-full" />
          <div className="flex flex-col justify-center p-6 sm:p-10">
            <Meta article={featured} />
            <h2 className="mt-4 text-2xl font-bold leading-snug sm:text-3xl">{featured.title}</h2>
            <p className="mt-3 leading-relaxed text-slate-300">{featured.excerpt}</p>
            <span className="btn-primary mt-6 self-start">
              Read Full Release <ArrowRight size={16} aria-hidden className="transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </Link>
      )}

      {rest.length > 0 && (
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((a) => (
            <li key={a.id}>
              <Link
                href={`/newsroom/${a.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-all duration-200 hover:-translate-y-1 hover:border-brand-400/50 hover:shadow-xl hover:shadow-black/30"
              >
                <NewsVisual image={a.image} category={a.category} className="h-44 w-full" />
                <div className="flex flex-1 flex-col p-5">
                  <Meta article={a} />
                  <h3 className="mt-3 text-lg font-semibold leading-snug">{a.title}</h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-300">{a.excerpt}</p>
                  <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold text-brand-300 group-hover:text-white">
                    Read More <ArrowRight size={14} aria-hidden className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
