"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, MapPin, Menu, Phone, X } from "lucide-react";
import ServiceIcon from "@/components/services/ServiceIcon";
import { productCategories } from "@/lib/products";
import { services } from "@/lib/services";
import { navLinks, siteConfig } from "@/lib/site";

export default function Navbar() {
  const [open, setOpen] = useState(false); // mobile menu
  const [mobileServices, setMobileServices] = useState(false);
  const [dropdown, setDropdown] = useState(false); // desktop services dropdown
  const [productsDropdown, setProductsDropdown] = useState(false); // desktop products dropdown
  const [mobileProducts, setMobileProducts] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close everything after navigation
  useEffect(() => {
    setOpen(false);
    setDropdown(false);
    setProductsDropdown(false);
  }, [pathname]);

  // close the dropdown on outside click or Escape
  useEffect(() => {
    if (!dropdown) return;
    const onDown = (e: MouseEvent) => {
      if (!dropdownRef.current?.contains(e.target as Node)) setDropdown(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setDropdown(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [dropdown]);

  useEffect(() => {
    if (!productsDropdown) return;
    const onDown = (e: MouseEvent) => {
      if (!productsRef.current?.contains(e.target as Node)) setProductsDropdown(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setProductsDropdown(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [productsDropdown]);

  const close = () => {
    setOpen(false);
    setDropdown(false);
    setProductsDropdown(false);
  };
  const productsActive = pathname.startsWith("/products");
  const solutionsActive = pathname.startsWith("/solutions");
  const otherLinks = navLinks.filter((l) => l.href !== "/products");
  const servicesActive = pathname.startsWith("/services");
  const linkClass = (active: boolean) =>
    `whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-white ${active ? "text-white" : "text-slate-300"}`;

  return (
    <>
      {/* Utility bar (desktop): location and phone */}
      <div className="hidden bg-navy-800 text-xs text-slate-300 lg:block">
        <div className="container-x flex h-9 items-center justify-between">
          <span className="flex items-center gap-2">
            <MapPin size={13} className="text-brand-400" aria-hidden />
            {siteConfig.address}
          </span>
          <a href={siteConfig.phoneHref} className="flex items-center gap-2 font-medium hover:text-white">
            <Phone size={13} className="text-brand-400" aria-hidden />
            <span className="text-slate-400">Call us:</span> {siteConfig.phone}
          </a>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 border-b bg-navy-900/95 text-white backdrop-blur transition-shadow ${
          scrolled ? "border-white/10 shadow-lg shadow-black/20" : "border-transparent"
        }`}
      >
        <div className="container-x flex h-[68px] items-center justify-between">
          <Link href="/" className="flex items-center gap-3" aria-label="Saudi K-KEM home">
            <Image src="/logo.png" alt="" width={48} height={48} priority className="h-11 w-11 sm:h-12 sm:w-12" />
            <span className="leading-tight">
              <span className="block whitespace-nowrap font-display text-lg font-bold">
                Saudi <span className="text-brand-400">K-KEM</span>
              </span>
              <span className="hidden whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.16em] text-slate-400 min-[1400px]:block">
                Inspection · Engineering · Maintenance
              </span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav aria-label="Primary" className="hidden items-center gap-0.5 xl:flex">
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setDropdown(true)}
              onMouseLeave={() => setDropdown(false)}
            >
              <button
                type="button"
                aria-expanded={dropdown}
                aria-haspopup="true"
                onClick={() => setDropdown((v) => !v)}
                className={`${linkClass(servicesActive)} inline-flex items-center gap-1`}
              >
                Services
                <ChevronDown size={14} className={`transition-transform ${dropdown ? "rotate-180" : ""}`} aria-hidden />
              </button>

              {dropdown && (
                <div className="absolute left-0 top-full w-[26rem] pt-2">
                  <div className="overflow-hidden rounded-xl border border-white/10 bg-navy-800 shadow-2xl shadow-black/40">
                    <ul className="p-2">
                      {services.map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={`/services/${s.slug}`}
                            onClick={close}
                            className="flex items-start gap-3 rounded-lg p-3 hover:bg-white/5"
                          >
                            <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-md bg-brand-500/15 text-brand-400">
                              <ServiceIcon name={s.icon} size={18} />
                            </span>
                            <span>
                              <span className="block text-sm font-semibold">{s.shortName}</span>
                              <span className="mt-0.5 block text-xs leading-snug text-slate-400">{s.tagline}</span>
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/services"
                      onClick={close}
                      className="flex items-center justify-between border-t border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-brand-300 hover:text-white"
                    >
                      View all services <ArrowRight size={14} aria-hidden />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/solutions" className={linkClass(solutionsActive)}>
              Solutions
            </Link>

            <div
              ref={productsRef}
              className="relative"
              onMouseEnter={() => setProductsDropdown(true)}
              onMouseLeave={() => setProductsDropdown(false)}
            >
              <button
                type="button"
                aria-expanded={productsDropdown}
                aria-haspopup="true"
                onClick={() => setProductsDropdown((v) => !v)}
                className={`${linkClass(productsActive)} inline-flex items-center gap-1`}
              >
                Products
                <ChevronDown size={14} className={`transition-transform ${productsDropdown ? "rotate-180" : ""}`} aria-hidden />
              </button>

              {productsDropdown && (
                <div className="absolute left-0 top-full w-[24rem] pt-2">
                  <div className="overflow-hidden rounded-xl border border-white/10 bg-navy-800 shadow-2xl shadow-black/40">
                    <ul className="p-2">
                      {productCategories.map((c) => (
                        <li key={c.slug}>
                          <Link href={`/products/${c.slug}`} onClick={close} className="block rounded-lg p-3 hover:bg-white/5">
                            <span className="block text-sm font-semibold">{c.title}</span>
                            <span className="mt-0.5 line-clamp-2 block text-xs leading-snug text-slate-400">{c.shortDescription}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/products"
                      onClick={close}
                      className="flex items-center justify-between border-t border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-brand-300 hover:text-white"
                    >
                      View all products <ArrowRight size={14} aria-hidden />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {otherLinks.map((l) => (
              <Link key={l.href} href={l.href} className={linkClass(pathname === l.href)}>
                {l.label}
              </Link>
            ))}

            <Link href="/contact?type=rfp#quote" className="btn-primary ml-3 whitespace-nowrap !py-2">
              Request RFP / Quote
            </Link>
          </nav>

          {/* Mobile: tap-to-call + menu button */}
          <div className="flex items-center gap-1 xl:hidden">
            <a
              href={siteConfig.phoneHref}
              aria-label={`Call Saudi K-KEM on ${siteConfig.phone}`}
              className="rounded-md p-2 text-brand-300 hover:bg-white/5"
            >
              <Phone size={22} aria-hidden />
            </a>
            <button
              type="button"
              className="rounded-md p-2"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {open && (
          <nav id="mobile-menu" aria-label="Mobile" className="max-h-[calc(100vh-68px)] overflow-y-auto border-t border-white/10 bg-navy-900 xl:hidden">
            <div className="container-x flex flex-col py-3">
              <button
                type="button"
                aria-expanded={mobileServices}
                onClick={() => setMobileServices((v) => !v)}
                className="flex items-center justify-between rounded-md px-2 py-3 text-left font-medium hover:bg-white/5"
              >
                Services
                <ChevronDown size={18} className={`transition-transform ${mobileServices ? "rotate-180" : ""}`} aria-hidden />
              </button>
              {mobileServices && (
                <ul className="mb-1 ml-2 border-l border-white/10 pl-3">
                  {services.map((s) => (
                    <li key={s.slug}>
                      <Link href={`/services/${s.slug}`} onClick={close} className="block rounded-md px-2 py-2.5 text-sm text-slate-300 hover:bg-white/5 hover:text-white">
                        {s.shortName}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link href="/services" onClick={close} className="block px-2 py-2.5 text-sm font-semibold text-brand-300">
                      View all services
                    </Link>
                  </li>
                </ul>
              )}

              <Link href="/solutions" onClick={close} className="rounded-md px-2 py-3 font-medium hover:bg-white/5">
                Solutions
              </Link>

              <button
                type="button"
                aria-expanded={mobileProducts}
                onClick={() => setMobileProducts((v) => !v)}
                className="flex items-center justify-between rounded-md px-2 py-3 text-left font-medium hover:bg-white/5"
              >
                Products
                <ChevronDown size={18} className={`transition-transform ${mobileProducts ? "rotate-180" : ""}`} aria-hidden />
              </button>
              {mobileProducts && (
                <ul className="mb-1 ml-2 border-l border-white/10 pl-3">
                  {productCategories.map((c) => (
                    <li key={c.slug}>
                      <Link href={`/products/${c.slug}`} onClick={close} className="block rounded-md px-2 py-2.5 text-sm text-slate-300 hover:bg-white/5 hover:text-white">
                        {c.title}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link href="/products" onClick={close} className="block px-2 py-2.5 text-sm font-semibold text-brand-300">
                      View all products
                    </Link>
                  </li>
                </ul>
              )}

              {otherLinks.map((l) => (
                <Link key={l.href} href={l.href} onClick={close} className="rounded-md px-2 py-3 font-medium hover:bg-white/5">
                  {l.label}
                </Link>
              ))}
              <Link href="/contact?type=rfp#quote" onClick={close} className="btn-primary mt-3">
                Request RFP / Quote
              </Link>
              <a href={siteConfig.phoneHref} className="btn-outline mt-2">
                <Phone size={16} aria-hidden /> {siteConfig.phone}
              </a>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
