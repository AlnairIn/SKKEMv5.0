import Image from "next/image";
import Link from "next/link";
import { Building2, Facebook, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { services } from "@/lib/services";
import { navLinks, siteConfig } from "@/lib/site";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/saudikkem/" },
  { label: "Facebook", href: "https://www.facebook.com/saudikkem" },
  { label: "X (Twitter)", href: "https://x.com/SAUDIKKEM" },
] as const;

function XLogo({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function SocialIcon({ label }: { label: (typeof socials)[number]["label"] }) {
  if (label === "LinkedIn") return <Linkedin size={18} aria-hidden />;
  if (label === "Facebook") return <Facebook size={18} aria-hidden />;
  return <XLogo />;
}

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-slate-200">
      <div className="container-x grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="" width={48} height={48} className="h-12 w-12" />
            <p className="font-display text-xl font-bold text-white">
              Saudi <span className="text-brand-400">K-KEM</span>
            </p>
          </div>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-400">
            Industrial services and engineering consultation: inspection, integrity, condition monitoring and aerial
            inspection for process industries.
          </p>
          <address className="mt-4 text-sm not-italic leading-relaxed text-slate-300">
            <span className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-brand-400" aria-hidden />
              Headquarters: {siteConfig.address}
            </span>
            <span className="mt-1 flex items-start gap-2">
              <Building2 size={16} className="mt-0.5 shrink-0 text-brand-400" aria-hidden />
              Branch Office: {siteConfig.branchAddress}
            </span>
            <a href={`mailto:${siteConfig.email}`} className="mt-3 flex items-center gap-2 hover:text-white">
              <Mail size={16} className="shrink-0 text-brand-400" aria-hidden />
              {siteConfig.email}
            </a>
            <a href={siteConfig.phoneHref} className="mt-1 flex items-center gap-2 hover:text-white">
              <Phone size={16} className="shrink-0 text-brand-400" aria-hidden />
              {siteConfig.phone}
            </a>
          </address>
          <ul className="mt-5 flex items-center gap-3" aria-label="Social media">
            {socials.map((x) => (
              <li key={x.label}>
                <a
                  href={x.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Saudi K-KEM on ${x.label}`}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-slate-300 transition-colors hover:border-brand-400 hover:bg-brand-400/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400"
                >
                  <SocialIcon label={x.label} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Services</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-white">
                  {s.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Company</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            <li>
              <Link href="/solutions" className="hover:text-white">
                Solutions
              </Link>
            </li>
            {navLinks
              .filter((l) => l.label !== "Safety Commitment")
              .map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/hse-policy" className="hover:text-white">
                HSE Policy
              </Link>
            </li>
            <li>
              <Link href="/quality-policy" className="hover:text-white">
                Quality Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
      </div>
    </footer>
  );
}
