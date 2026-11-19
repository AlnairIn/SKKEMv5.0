"use client";

import { useState } from "react";
import { Check, Facebook, Link2, Linkedin } from "lucide-react";

/** Share on LinkedIn / X, or copy the article link. `url` must be the absolute article URL. */
export default function ShareButtons({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt("Copy this link:", url);
    }
  };

  const item =
    "grid h-10 w-10 place-items-center rounded-full border border-slate-200 text-navy-800 transition-colors hover:border-brand-600 hover:bg-brand-50 hover:text-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600";

  return (
    <div className="flex items-center gap-2" role="group" aria-label="Share this article">
      <span className="mr-1 text-sm font-semibold text-slate-500">Share</span>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        className={item}
      >
        <Linkedin size={18} aria-hidden />
      </a>
      <a
        href={`https://x.com/intent/post?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on X"
        className={item}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Facebook"
        className={item}
      >
        <Facebook size={18} aria-hidden />
      </a>
      <button type="button" onClick={copy} aria-label={copied ? "Link copied" : "Copy link"} className={item}>
        {copied ? <Check size={18} aria-hidden /> : <Link2 size={18} aria-hidden />}
      </button>
      <span className="sr-only" aria-live="polite">
        {copied ? "Link copied to clipboard" : ""}
      </span>
    </div>
  );
}
