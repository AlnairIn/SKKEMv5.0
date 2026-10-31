import type { MetadataRoute } from "next";
import { productCategories } from "@/lib/products";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const pages = ["", "/services", "/solutions", "/products", "/about", "/careers", "/contact"].map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
  }));
  const items = services.map((s) => ({ url: `${base}/services/${s.slug}`, lastModified: new Date() }));
  const products = productCategories.map((c) => ({ url: `${base}/products/${c.slug}`, lastModified: new Date() }));
  return [...pages, ...items, ...products];
}
