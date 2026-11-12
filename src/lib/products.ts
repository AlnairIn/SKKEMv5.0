// PRODUCT CATALOG - the three product lines shown on /products and /products/[slug].
// Content supplied by the K-KEM team. The full piping range for PT&P lives in piping-products.ts.

export interface SubProduct {
  name: string;
  description: string;
}

export interface ProductCategory {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  items: SubProduct[];
}

export const productCategories: ProductCategory[] = [
  {
    id: "ptp",
    title: "Piping Technology & Products (PT&P)",
    slug: "ptp",
    shortDescription: "Authorized distributor in KSA for spring supports, expansion joints, pipe clamps, and snubbers.",
    items: [
      { name: "Pipe Supports & Hangers", description: "Clevis hangers, clamps, rods, and beam attachments." },
      { name: "Engineered Spring Supports", description: "Constant and variable spring hangers for severe thermal stress." },
      { name: "Expansion Joints & Bellows", description: "Metallic, fabric, and rubber expansion joints." },
      { name: "Snubbers & Sway Braces", description: "Dynamic shock absorbers protecting against seismic & surge loads." },
    ],
  },
  {
    id: "smart-plant-solutions",
    title: "Smart Plant Solutions",
    slug: "smart-plant-solutions",
    shortDescription: "Advanced online condition monitoring devices for continuous real-time asset health tracking.",
    items: [
      {
        name: "Online UT & Guided Wave Monitoring Device",
        description: "Continuous ultrasonic thickness wall-loss and long-range pipe corrosion monitoring.",
      },
      {
        name: "Online Valve / PSV / PRV Monitoring Device",
        description: "Real-time acoustic emission tracking to detect pressure safety valve leaks and pass-by.",
      },
      {
        name: "Online Vibration Monitoring Device",
        description: "Continuous wireless/wired vibration analysis for high-criticality rotating machinery.",
      },
    ],
  },
  {
    id: "ndt-equipment-accessories",
    title: "NDT Equipment & Accessories",
    slug: "ndt-equipment-accessories",
    shortDescription:
      "Comprehensive supply of industrial non-destructive testing equipment, consumables, and calibration accessories.",
    items: [
      {
        name: "Ultrasonic Testing (UT) Instruments & Probes",
        description: "Digital flaw detectors, phased array (PAUT) units, TOFD probes, and calibration blocks.",
      },
      {
        name: "Radiographic Testing (RT) Accessories",
        description:
          "Industrial X-ray/Gamma equipment, darkroom chemicals, lead screens, and digital radiography (CR/DR) plates.",
      },
      {
        name: "Magnetic Particle & Liquid Penetrant Testing (MT/PT)",
        description: "Yokes, UV inspection lamps, visible/fluorescent contrast magnetic inks, and aerosol penetrants.",
      },
      {
        name: "Eddy Current & Hardness Testers",
        description: "Portable ECT flaw detectors, surface coating thickness gauges, and Leeb hardness testers.",
      },
    ],
  },
];

export const getProductCategory = (slug: string) => productCategories.find((c) => c.slug === slug);

/** Link into the quote form with a product category prefilled (works for category slugs and piping range ids). */
export const categoryQuoteHref = (slug?: string) => `/contact?type=quote${slug ? `&product=${slug}` : ""}#quote`;
