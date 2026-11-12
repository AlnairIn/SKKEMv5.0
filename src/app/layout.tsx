import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AccessibilityMenu from "@/components/layout/AccessibilityMenu";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Saudi K-KEM | Industrial Inspection & Engineering Services, Al Jubail",
    template: "%s | Saudi K-KEM",
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: "Saudi K-KEM | Industrial Inspection & Engineering Services",
    description: siteConfig.description,
    url: siteConfig.url,
    locale: "en_SA",
  },
  alternates: { canonical: "/" },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  email: siteConfig.email,
  telephone: siteConfig.phoneIntl,
  logo: `${siteConfig.url}/logo.png`,
  areaServed: { "@type": "Country", name: "Saudi Arabia" },
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.locality,
    addressRegion: siteConfig.region,
    addressCountry: siteConfig.country,
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Industrial services",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.name, url: `${siteConfig.url}/services/${s.slug}` },
    })),
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-white focus:px-3 focus:py-2"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <AccessibilityMenu />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      </body>
    </html>
  );
}
