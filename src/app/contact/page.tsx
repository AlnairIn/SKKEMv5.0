import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import InquiryForm from "@/components/forms/InquiryForm";
import { getPipingCategory } from "@/lib/piping-products";
import { getProductCategory } from "@/lib/products";
import { getService } from "@/lib/services";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Request RFP / Quote",
  description: "Send an RFP, quote request or technical enquiry to the Saudi K-KEM team in Al Jubail.",
  alternates: { canonical: "/contact" },
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string; service?: string; product?: string }>;
}) {
  const { type, service, product } = await searchParams;
  const selected = service ? getService(service) : undefined;
  // `product` is a product line slug (/products/[slug]) or a piping family id on the PT&P page
  const selectedProduct = product ? (getProductCategory(product) ?? getPipingCategory(product)) : undefined;

  return (
    <div className="container-x py-16">
      <p className="eyebrow">Contact</p>
      <h1 className="mt-2 text-4xl font-bold text-navy-800">Request an RFP, proposal or quote</h1>
      {selected && <p className="mt-3 text-slate-500">Service selected: {selected.name}</p>}
      {selectedProduct && <p className="mt-3 text-slate-500">Product category: {selectedProduct.title}</p>}

      <div className="mt-10 grid gap-10 lg:grid-cols-12">
        <ul className="space-y-5 text-sm lg:col-span-4">
          <li className="flex gap-3">
            <MapPin size={18} className="mt-0.5 shrink-0 text-brand-600" aria-hidden />
            Headquarters: {siteConfig.address}
          </li>
          <li className="flex gap-3">
            <Mail size={18} className="mt-0.5 shrink-0 text-brand-600" aria-hidden />
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </li>
          <li className="flex gap-3">
            <Phone size={18} className="mt-0.5 shrink-0 text-brand-600" aria-hidden />
            <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
          </li>
        </ul>
        <div id="quote" className="card scroll-mt-24 p-6 sm:p-8 lg:col-span-8">
          <InquiryForm
            defaultService={selected?.name}
            defaultType={type}
            defaultMessage={
              selectedProduct ? `Quote request for: ${selectedProduct.title}\n\nItems, sizes and quantities:\n` : undefined
            }
          />
        </div>
      </div>
    </div>
  );
}
