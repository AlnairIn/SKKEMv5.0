import type { Metadata } from "next";
import { Mail } from "lucide-react";
import NewsBrowser from "@/components/newsroom/NewsBrowser";
import { newsArticles, sortedNews } from "@/lib/news";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Newsroom & Media Center",
  description:
    "Latest corporate announcements, project milestones, industry exhibitions and technical updates from Saudi K-KEM Engineering.",
  alternates: { canonical: "/newsroom" },
};

export default function NewsroomPage() {
  const hasSample = newsArticles.some((a) => a.sample);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-900 py-16 text-white sm:py-24">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div aria-hidden className="absolute -right-32 -top-32 h-[24rem] w-[24rem] rounded-full bg-brand-600/25 blur-3xl" />
        <div className="container-x relative">
          <p className="eyebrow !text-brand-400">Newsroom</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold sm:text-5xl">Newsroom &amp; Media Center</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            Latest corporate announcements, project milestones, industry exhibitions, and technical updates from Saudi K-KEM
          </p>
        </div>
      </section>

      {/* Filters, featured story and grid */}
      <section className="bg-navy-800 py-12 text-white sm:py-16">
        <div className="container-x">
          <NewsBrowser articles={sortedNews} />
        </div>
      </section>

      {/* Media & PR contact */}
      <section className="bg-navy-900 py-12 text-white sm:py-14">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-5 rounded-2xl border border-brand-400/30 bg-gradient-to-r from-brand-700/30 to-navy-800 p-8 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-xl font-bold sm:text-2xl">Media &amp; PR inquiries</h2>
              <p className="mt-1 text-slate-300">
                For press releases, interviews, images or company information, contact our team.
              </p>
            </div>
            <a href={`mailto:${siteConfig.email}`} className="btn-primary shrink-0">
              <Mail size={16} aria-hidden /> {siteConfig.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
