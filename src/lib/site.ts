export const siteConfig = {
  name: "Saudi K-KEM",
  legalName: "Saudi K-KEM Engineering Service Company",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.saudikkem.com",
  description:
    "Saudi K-KEM is an industrial services and engineering consultation company in Al Jubail, Saudi Arabia, providing NDT and inspection, engineering and asset management consultancy, vibration and condition monitoring, drone inspection and rotating equipment support.",
  // TODO: replace with verified company details before launch
  email: "info@saudikkem.com",
  careersUrl: "https://k-kem.odoo.com/jobs", // Odoo ERP recruitment portal, embedded on /careers
  phone: "013 344 8522",
  phoneHref: "tel:+966133448522",
  phoneIntl: "+966 13 344 8522",
  address: "Al Jubail, Eastern Province, Saudi Arabia",
  locality: "Al Jubail",
  region: "Eastern Province",
  country: "SA",
};

export const stats = [
  { value: 13, suffix: "+", label: "Years of industrial excellence", format: "full" as const },
  { value: 67, suffix: "+", label: "Technical & inspection services", format: "full" as const },
  { value: 4137857, suffix: "+", label: "Recorded safe man-hours", format: "full" as const },
];

// "Services" is rendered as a dropdown from services.ts, so it is not listed here.
export const navLinks = [
  { href: "/products", label: "Products" },
  { href: "/about", label: "About Us" },
  { href: "/#track-record", label: "Track Record" },
  { href: "/#safety", label: "Safety Commitment" },
  { href: "/careers", label: "Careers" },
] as const;
