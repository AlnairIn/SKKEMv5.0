import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { services } from "@/lib/services";
import { navLinks, siteConfig } from "@/lib/site";

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
            <a href={`mailto:${siteConfig.email}`} className="mt-1 block hover:text-white">
              {siteConfig.email}
            </a>
            <a href={siteConfig.phoneHref} className="block hover:text-white">
              {siteConfig.phone}
            </a>
          </address>
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
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact?type=rfp#quote" className="hover:text-white">
                Request RFP / Quote
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
