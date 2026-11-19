import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Award, Globe2, Handshake, Users, type LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Quality Policy",
  description:
    "Saudi K-KEM Quality Policy: openness in communication, integrity in serving customers, fairness and concern for employees, and responsibility to the communities where we operate.",
  alternates: { canonical: "/quality-policy" },
};

interface Principle {
  title: string;
  icon: LucideIcon;
  paragraphs: string[];
  /** Optional lead-in sentence and bullet list. */
  listIntro?: string;
  list?: string[];
}

const principles: Principle[] = [
  {
    title: "Our People",
    icon: Users,
    paragraphs: [
      "Saudi K-KEM is committed to equality in employment opportunity and rewards, embracing wholeheartedly the cultural diversity within the communities we call home. Our employees’ welfare and interests are foremost throughout all aspects of our business and how we conduct our affairs.",
    ],
    listIntro: "These includes:",
    list: [
      "Creating and nurturing an environment of success based on honesty and integrity;",
      "Empowerment through training and communication;",
      "Designing and providing a safe and secure work environment.",
    ],
  },
  {
    title: "Our Customers",
    icon: Handshake,
    paragraphs: [
      "Customer needs are paramount and represent the highest priority within our business. Our obligation is to proactively seek out and define customer needs and expectations while addressing all requests expeditiously while strive to meet or exceed their needs without creating false expectations.",
    ],
  },
  {
    title: "Our Communities",
    icon: Globe2,
    paragraphs: [
      "Saudi K-KEM is committed to supporting the communities within which we operate. We believe in the practice of social responsibility and encourage similar behavior in our employees and suppliers. We support the conservation of the physical environment and the prevention of pollution at our facilities. We proactively comply with all applicable safety, environmental, legal, and regulatory requirements to which we subscribe.",
    ],
  },
  {
    title: "Our Quality",
    icon: Award,
    paragraphs: [
      "Saudi K-KEM is committed to achieving competitive excellence and providing and maintaining our customers with Quality of Services to meet or exceed their expectations by:",
    ],
    list: [
      "Complying with all customer, statutory, and regulatory requirements;",
      "Enabling employees to achieve business and professional goals;",
      "Continually improving our QMS and process via QMS;",
      "Extending our QMS practices throughout our supply chain.",
    ],
  },
];

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
        <div className="container-x max-w-5xl">
          <p className="rounded-xl border border-white/10 bg-white/5 p-6 text-lg leading-relaxed text-slate-200 sm:p-8">
            Saudi K-KEM is committed to an operating philosophy based on openness in communication, integrity in serving our
            customers, fairness and concern for our employees, and responsibility to the communities within which we
            operate. We are dedicated to creating a profitable business culture that is based on the following principles:
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {principles.map(({ title, icon: Icon, paragraphs, listIntro, list }) => (
              <section key={title} className="rounded-xl border border-white/10 bg-white/5 p-6 sm:p-8">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand-400/15 text-brand-400">
                  <Icon size={22} aria-hidden />
                </span>
                <h2 className="mt-4 text-xl font-semibold uppercase tracking-wide">{title}</h2>
                <div className="mt-3 space-y-3 leading-relaxed text-slate-300">
                  {paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                  {listIntro && <p className="font-medium text-slate-200">{listIntro}</p>}
                  {list && (
                    <ul className="list-disc space-y-1.5 pl-5 marker:text-brand-400">
                      {list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            ))}
          </div>

         <p className="mt-6 rounded-xl border border-white/10 bg-white/5 p-6 text-lg leading-relaxed text-slate-200 sm:p-8">
            
          </p> 

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
