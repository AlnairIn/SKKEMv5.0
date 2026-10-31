/**
 * Official "Solutions" wording supplied by Saudi K-KEM. Keep the text verbatim.
 * Icons are looked up by name in src/app/solutions/page.tsx.
 */
export type SolutionIcon =
  | "rehab"
  | "reliability"
  | "optimization"
  | "predictive"
  | "engineering"
  | "reassessment"
  | "ut"
  | "vibration"
  | "valve"
  | "drone";

export interface SolutionItem {
  name: string;
  icon: SolutionIcon;
}

export interface SolutionPillar {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  intro: string;
  listHeading: string;
  items: SolutionItem[];
}

export const solutionsIntro = {
  heading: "Inspection data turned into engineering decisions",
  paragraphs: [
    "Driven by a commitment to reliability and engineering precision, Saudi K-KEM Solutions bridges the gap between complex inspection data and strategic decision-making. By integrating expertise across multidisciplinary engineering sectors, we deliver industry best practices tailored to client-specific operational needs. Whether supporting planned turnarounds, evaluating high-performance asset systems, or conducting comprehensive remaining life assessments, our service delivery is optimized to drive continuous operational excellence.",
    "A partnership with Saudi K-KEM Solutions guarantees expert technical oversight, maximized asset lifespans, and rigorous inspection compliance across your facility.",
  ],
};

export const solutionPillars: SolutionPillar[] = [
  {
    id: "asset-integrity",
    number: "01",
    title: "One Stop Center for Asset Integrity Management",
    intro:
      "With our expertise, we are capable providing a custom-made Asset integrity solution tailoring from different discipline such as NDT, Inspection, RBI, RCM, RCA, Static & Rotating equipment, Laboratory evaluation, Engineering solution & etc.",
    listHeading: "Supported engineering services",
    items: [
      { name: "Asset Rehabilitation Analysis", icon: "rehab" },
      { name: "Asset Reliability & Efficiency Study", icon: "reliability" },
      { name: "Asset Optimization Analysis", icon: "optimization" },
      { name: "Predictive & Risk-Based Strategy", icon: "predictive" },
      { name: "Reactive & Design Engineering", icon: "engineering" },
      { name: "RBI, RCA, RCM reassessment", icon: "reassessment" },
    ],
  },
  {
    id: "smart-plant",
    number: "02",
    title: "Smart Plant Solutions",
    subtitle: "Industry digitization & IoT",
    intro:
      "In lieu of industry digitization & IoT development. We have an available technology that can be customized based on client needs to provide a Smart Plant Solution which supporting Autonomous & AI Plant operation which tailor with Plant availability.",
    listHeading: "Technology offerings",
    items: [
      { name: "Online UT and Guided Wave Monitoring Device", icon: "ut" },
      { name: "Online Condition & Vibration Monitoring Device", icon: "vibration" },
      { name: "Online Valve/PSV/PRV Monitoring Device", icon: "valve" },
      { name: "Online Remote Drone Security & Surveillance", icon: "drone" },
    ],
  },
];

export const solutionsQuoteHref = "/contact?type=quote#quote";
