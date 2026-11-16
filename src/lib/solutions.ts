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
    "Saudi K-KEM Solutions turns inspection data into clear engineering decisions. We bring NDT, integrity and reliability specialists together to support planned turnarounds, assess asset condition and estimate remaining life.",
    "Working with us gives you experienced technical oversight, longer asset life and inspection programmes that meet code requirements.",
  ],
};

export const solutionPillars: SolutionPillar[] = [
  {
    id: "asset-integrity",
    number: "01",
    title: "One-stop centre for asset integrity management",
    subtitle: "System integration engineering",
    intro:
      "We build asset integrity programmes that combine NDT, inspection, RBI, RCM, RCA, static and rotating equipment expertise, laboratory evaluation and engineering.",
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
      "As plants digitise, we supply online monitoring technology that can be tailored to each site and supports autonomous, AI-assisted operation.",
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
