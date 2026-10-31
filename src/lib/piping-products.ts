// PIPING PRODUCT RANGE - the detailed families shown in the "Complete piping range" section of the
// PT&P page (/products/ptp), and used for per-family quote prefill.
// Content supplied by the K-KEM team. To add a family, add an object to the array below.

export interface PipingProductCategory {
  id: string;
  title: string;
  description: string;
  items: string[];
}

export const pipingProducts: PipingProductCategory[] = [
  {
    id: "pipe-supports-hangers",
    title: "Pipe Supports & Hangers",
    description: "Standard and engineered pipe attachments, clamps, and hardware for severe industrial loads.",
    items: [
      "Beam Attachments",
      "Clevis Hangers",
      "Hardware, Rods & U-Bolts",
      "Hold-Down Pipe Clamps",
      "Pipe Clamps & Risers",
      "Pipe Saddles & Coverings",
    ],
  },
  {
    id: "engineered-spring-supports",
    title: "Engineered Spring Supports",
    description: "Precision constant and variable spring units to absorb thermal growth and prevent piping stress.",
    items: [
      "Variable Spring Hangers / Supports",
      "Constant Spring Hangers / Supports",
      "Big Ton Spring Supports",
      "Compact / Disc Spring Supports",
    ],
  },
  {
    id: "pipe-shoes-guides",
    title: "Pipe Shoes & Pipe Guides",
    description: "Structural guidance and slide support assemblies for thermal expansion movement.",
    items: [
      "T-Bar & Double T-Bar Shoes",
      "U-Bolt & Bolt Cradle Shoes",
      "Saddle & Cylinder Guides",
      "Slide Plate Options",
    ],
  },
  {
    id: "pre-insulated-supports",
    title: "Pre-Insulated Pipe Supports",
    description: "Engineered cold and hot shoes designed to prevent heat transfer and cryogenic energy loss.",
    items: [
      "Cryogenic Pipe Supports (Cold Shoes)",
      "Insulated Pipe Supports for High Temperature Applications (Hot Shoes)",
    ],
  },
  {
    id: "snubbers-sway-braces",
    title: "Snubbers, Sway Braces & Sway Struts",
    description: "Dynamic load restraints protecting piping from seismic events, water hammer, and thermal transients.",
    items: ["Hydraulic Snubbers", "Mechanical Snubbers", "Sway Braces", "Sway Struts"],
  },
  {
    id: "expansion-joints",
    title: "Expansion Joints & Bellows",
    description: "Metallic, fabric, and rubber expansion joints engineered for extreme pressure and thermal movements.",
    items: [
      "Metallic Expansion Joints",
      "Fabric Expansion Joints",
      "Rubber Expansion Joints",
      "Thick Wall & Ductwork Joints",
      "Pressure Balanced & Universal Joints",
    ],
  },
  {
    id: "slide-plates-wear-pads",
    title: "Slide Bearing Plates & Wear Pads",
    description: "Low-friction bearing surfaces and composite isolation pads to prevent wear and galvano-corrosion.",
    items: [
      "PTFE & Graphite Slide Bearing Plates",
      "Thermoplastic Isolators (TPI)",
      "FRP Wear Pads for Uninsulated Pipes",
    ],
  },
  {
    id: "specialty-products",
    title: "Specialty Piping Products & Isolators",
    description: "Instrument stands, vibration isolators, and specialized structural attachments.",
    items: [
      "Instrument Stands & Supports",
      "Spring Vibration Isolators (Pumps, Chillers, Skids)",
      "Vapor Dispersion Shrouds & Troughs",
    ],
  },
];

export const getPipingCategory = (id: string) => pipingProducts.find((c) => c.id === id);

/** Link into the quote form with the category prefilled. */
export const productQuoteHref = (id?: string) => `/contact?type=quote${id ? `&product=${id}` : ""}#quote`;
