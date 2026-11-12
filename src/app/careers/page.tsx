import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Saudi K-KEM. Explore current job openings in engineering, inspection and technical services.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  return (
    <>
      <section className="bg-navy-900 py-16 text-white sm:py-20">
        <div className="container-x">
          <p className="eyebrow !text-brand-400">Careers</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold sm:text-5xl">Join Our Team</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            Explore current career opportunities at Saudi K-KEM Engineering Service Co.
          </p>
        </div>
      </section>

      <section className="container-x py-12">
        <h2 className="mb-4 text-xl font-semibold text-navy-800">Current openings</h2>

        {/* Odoo ERP job board. Sandboxed: it keeps scripts, forms and its own cookies, but gets no access to this site.
            The Odoo site header is hidden by shifting the frame up inside a clipped container (cross-origin, so it can't be removed with CSS).
            Adjust the top offset below if Odoo's header height changes. */}
        <div className="card relative h-[750px] overflow-hidden">
          <iframe
            src={siteConfig.careersUrl}
            title="Saudi K-KEM job openings"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox allow-modals"
            className="absolute left-0 w-full border-0"
            style={{ top: "-110px", height: "calc(100% + 180px)" }}
          />
        </div>
      </section>
    </>
  );
}
