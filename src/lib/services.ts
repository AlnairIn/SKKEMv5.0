// SERVICE CATALOG - single source of truth for the navbar, homepage grid, /services,
// /services/[slug], footer, sitemap and schema markup.
//
// Structure follows the six service lines on saudikkem.com (sub-service names and descriptions are
// paraphrased from the live service pages). TODO (content owner): confirm wording, standards marked as
// "typical" and replace sub-service lists with the full 67+ service list before launch.

export type IconName = "scan-search" | "drafting-compass" | "activity" | "radar" | "cog" | "database" | "shield-check";

export interface SubService {
  name: string;
  description: string;
  items: string[];
}

export interface Service {
  slug: string;
  name: string;
  shortName: string;
  icon: IconName;
  tagline: string;
  summary: string;
  features: string[];
  includes: string[];
  applications: string[];
  industries: string[];
  standards: string[];
  rfpLabel: string;
  /** Optional detailed breakdown; when present the service page shows it instead of the flat "includes" pills. */
  subServices?: SubService[];
}

export const services: Service[] = [
  {
    slug: "ndt-inspection",
    name: "Non-Destructive Testing & Inspection",
    shortName: "NDT & Inspection",
    icon: "scan-search",
    tagline: "Conventional and advanced NDT, third party inspection and NDT training for process plants.",
    summary:
      "A focus on technical excellence, with industrial experts and modern equipment. We inspect plant and equipment without damaging it, from established methods such as MT, PT, UT and RT to advanced scanning, tubing and positive material identification, backed by independent third party inspection and NDT training.",
    features: [
      "Conventional NDT for surface, subsurface and weld discontinuities",
      "Advanced NDT: B-scan / C-scan, tubing inspection, TOFD, phased array and guided wave",
      "Independent third party inspection to API, CSWIP, AWS and AMPP/NACE requirements",
      "NDT Level II training, certification and procedure support",
      "Documented procedures, traceable results and clear reports",
    ],
    includes: ["Conventional NDT", "Advanced NDT", "Third Party Inspection", "NDT Training & Consultancy"],
    subServices: [
      {
        name: "Conventional NDT",
        description:
          "Established non-destructive methods that detect surface and slightly subsurface discontinuities and measure material properties without damaging the item tested.",
        items: [
          "Magnetic Particle Testing (MPT)",
          "Dye Penetrant Testing (DPT)",
          "Ultrasonic Thickness Measurement (UTTM)",
          "Ultrasonic Flaw Detection (UTFD)",
          "Radiography Testing (RT)",
          "Hardness testing",
        ],
      },
      {
        name: "Advanced NDT",
        description:
          "Specialised methods for inspecting plant and equipment without damaging it, covering ultrasonic scanning, tubing, thermography and material identification.",
        items: [
          "Ultrasonic B-scan and C-scan depth and planar mapping",
          "Tubing inspection: eddy current, remote field, magnetic flux leakage and ultrasonic",
          "Eddy current weld testing",
          "Infrared thermography for furnaces and boilers",
          "Handheld XRF positive material identification",
          "TOFD, phased array, guided wave, SCAR radiography, vacuum and holiday testing",
        ],
      },
      {
        name: "Third Party Inspection",
        description:
          "Independent inspection of industrial equipment to confirm it meets regulatory, voluntary or client-specific requirements.",
        items: [
          "Pressure vessels to API 510",
          "Piping to API 570 (metallic and FRP)",
          "Storage tanks to API 653",
          "Refractory to API 936",
          "Welding inspection to CSWIP 3.1/3.2, PCN Level 2 and AWS",
          "Painting and coating inspection (AMPP/NACE, ICORR) and static equipment inspection",
        ],
      },
      {
        name: "NDT Training & Consultancy",
        description:
          "Efficient, cost-effective, high-quality solutions to clients' non-destructive testing problems.",
        items: ["NDT Level II training and certification", "Welder qualification", "NDT procedures", "Radiography film interpreter"],
      },
    ],
    applications: [
      "Pressure vessels, columns and heat exchangers",
      "Process piping and pipelines",
      "Storage tanks",
      "Weld inspection during fabrication and repair",
      "Turnaround and shutdown campaigns",
    ],
    industries: ["Refineries", "Petrochemical", "Power plants"],
    standards: ["API 510 / 570 / 653", "API 936", "CSWIP 3.1 / 3.2, PCN Level 2, AWS", "AMPP/NACE and ICORR (coatings)"],
    rfpLabel: "Request Inspection RFP",
  },
  {
    slug: "condition-monitoring",
    name: "Vibration & Condition Monitoring",
    shortName: "Condition Monitoring",
    icon: "activity",
    tagline: "Predictive maintenance for rotating equipment: vibration, thermography and UT scan.",
    summary:
      "Innovative inspection of rotating equipment for refineries, petrochemical, power and fertilizer plants and drilling rigs. We study mechanical vibration for the predictive maintenance of machinery, reducing the risk of serious breakdowns and improving safety and machine performance.",
    features: [
      "Vibration analysis and monitoring of rotating equipment",
      "Infrared thermography to find deterioration early",
      "UT scan to spot very early bearing faults",
      "Motor current analysis and motion amplification",
      "Reliability Centered Maintenance support",
    ],
    includes: ["Vibration & Rotating Equipment Services", "Thermography", "UT Scan"],
    subServices: [
      {
        name: "Vibration & Rotating Equipment Services",
        description:
          "Condition monitoring that studies mechanical vibration for the predictive maintenance of machinery, lowering the risk of serious breakdowns and improving safety and machine performance.",
        items: [
          "Vibration analysis and monitoring",
          "Infrared thermography",
          "Ultrasound technology",
          "Motor current analysis",
          "Motion amplification",
          "Reliability Centered Maintenance",
        ],
      },
      {
        name: "Thermography",
        description:
          "Thermal imaging used as a diagnostic tool to find deterioration early, performed by ASNT Level I, II or III qualified inspectors with advanced equipment.",
        items: [
          "Detects defects in pipes, metals and plastic parts from temperature variance",
          "Finds hidden defects and material wear early",
          "Identifies corrosion damage and flaws",
          "Inspects hard-to-reach or hazardous areas",
          "Covers large areas in real time without disrupting production",
        ],
      },
      {
        name: "UT Scan",
        description:
          "Ultrasound scanning that spots very early faults, particularly in bearings. It can complement infrared and vibration inspections or be used on its own.",
        items: [
          "Very early bearing fault detection",
          "Works with infrared and vibration inspections or independently",
          "Broad coverage of plant operations",
          "Minimal training needed for effective routine inspection",
        ],
      },
    ],
    applications: ["Pumps and compressors", "Steam and gas turbines", "Electric motors and drives", "Fans, blowers and gearboxes", "Drilling rigs"],
    industries: ["Refineries", "Petrochemical", "Power plants", "Fertilizer plants"],
    standards: ["ISO 20816 (vibration evaluation)", "ISO 13373 (condition monitoring)", "ISO 18436 (analyst qualification)"],
    rfpLabel: "Request Monitoring Proposal",
  },
  // Source: the "Asset Management Consultancy" category on saudikkem.com (RBI Services, Asset Integrity
  // Services, Fitness for Service, Failure Analysis). Those pages name no codes, so the standards below
  // are the usual industry references: confirm them before launch.
  {
    slug: "asset-management-consultancy",
    name: "Asset Management Consultancy",
    shortName: "Asset Management",
    icon: "database",
    tagline: "RBI, asset integrity, fitness-for-service and failure analysis for complex physical assets.",
    summary:
      "Consulting solutions that help asset owners maintain complex physical assets in plants and heavy equipment. We combine risk-based inspection, asset integrity programmes, fitness-for-service assessment and failure analysis, so inspection data becomes clear decisions on risk, remaining life and where maintenance budget is best spent.",
    features: [
      "Risk-based inspection support for petrochemical, oil, gas and power plants",
      "Asset integrity programmes: classification, corrosion loops and CML / TML databases",
      "Fitness-for-Service assessments from Level 1 and 2 to Level 3 with finite element analysis",
      "Failure analysis and root-cause investigation to prevent recurrence",
      "Prioritised cost-saving opportunities with their budget impact assessed",
    ],
    includes: ["RBI Services", "Asset Integrity Services", "Fitness for Service", "Failure Analysis"],
    subServices: [
      {
        name: "RBI Services",
        description:
          "Risk-based inspection develops an inspection scheme based on knowledge of the risk of failure, and the essential process is a risk analysis. We provide RBI support services for petrochemical, oil, gas and power plant industries.",
        items: [
          "Baseline inspection",
          "Asset management database development",
          "Corrosion loop and piping circuitization",
          "Asset damage mechanism identification",
          "TML / CML optimization",
          "Corrosion analysis study",
          "RBI analysis",
          "Pressure safety valve (PSV) RBI analysis",
          "RBI audit",
        ],
      },
      {
        name: "Asset Integrity Services",
        description:
          "Asset management consulting solutions that help maintain complex physical assets in plants and heavy equipment, prioritising cost-saving potential and assessing how each opportunity affects the budget.",
        items: [
          "Piping corrosion loop development",
          "Risk-based inspection analysis",
          "Asset classification and identification",
          "CML database development",
          "Baseline reading inspection",
          "Failure analysis",
          "Project management",
          "CML / TML optimization",
          "Meridium database audit",
        ],
      },
      {
        name: "Fitness for Service",
        description:
          "Fitness-for-Service (FFS) assessments are quantitative engineering evaluations that demonstrate the structural integrity of an in-service component, helping solve problems across the asset lifecycle while minimising risk and cost.",
        items: [
          "FFS Level 1 and 2",
          "FFS Level 3 with finite element analysis",
          "3D laser scan for dimensional check",
          "NDT inspection",
        ],
      },
      {
        name: "Failure Analysis",
        description:
          "Investigation to determine the root cause when an asset or component fails or does not perform as expected, giving the insight to take remedial action and prevent recurrence.",
        items: [
          "Stress analysis",
          "Laser scan and dimensional check",
          "Process simulation (HYSYS)",
          "Dynamic studies",
          "Remaining life analysis",
          "NDT and inspection",
        ],
      },
    ],
    applications: [
      "Plant and heavy equipment integrity programmes",
      "Corrosion loops and piping circuits",
      "Pressure safety valves (PSV)",
      "In-service components with damage or degradation",
      "Investigation of equipment and component failures",
    ],
    industries: ["Petrochemical", "Oil & gas", "Power plants"],
    standards: [
      "API 580 / 581 (risk-based inspection)",
      "API 579-1 / ASME FFS-1 (fitness-for-service)",
      "API 510 / 570 / 653 (in-service inspection)",
    ],
    rfpLabel: "Request Asset Management Proposal",
  },
  {
    slug: "rope-access-drone-inspection",
    name: "Rope Access & Drone Inspection",
    shortName: "Rope Access & Drone",
    icon: "radar",
    tagline: "IRATA rope access and industrial aerial visual drone inspection for hard-to-reach assets.",
    summary:
      "Safe inspection, testing and structural surveys at height or in areas where access is difficult. Our IRATA-based rope access teams and remotely operated aerial vehicles reduce scaffolding and work at height, giving engineers the visual data to assess condition quickly.",
    features: [
      "IRATA-based rope access for inspection, testing and structural surveys",
      "Rope access NDT, welding, cleaning, rigging, painting and maintenance",
      "Aerial visual inspection of flares, stacks and power transmission lines",
      "Situational awareness from visual data, managed in cloud-based software",
      "Less scaffolding and less work at height",
    ],
    includes: ["Rope Access Services (IRATA)", "Industrial Aerial Visual Drone Inspections"],
    subServices: [
      {
        name: "Rope Access Services (IRATA)",
        description:
          "Industrial rope access for safe inspection, testing and structural surveys at height or where access is difficult. IRATA-based services include NDT, inspection, welding, cleaning, rigging, painting and maintenance.",
        items: [
          "Flare repair and inspection",
          "High elevated asset inspection: buildings, towers, columns, pipe racks and similar",
          "Ship terminal pipe inspection",
          "Ship inspection",
          "Rig and platform inspection",
        ],
      },
      {
        name: "Industrial Aerial Visual Drone Inspections",
        description:
          "Drones give oil, gas, petrochemical and power generation businesses situational awareness from visual data, managed through cloud-based software, digitalising industrial assets and streamlining facility data.",
        items: [
          "Online flare inspection",
          "Confined space entry: tank, column, furnace, vessel and similar",
          "Guy wire inspection",
          "Land survey",
          "Piping internal inspection",
          "Underground trench",
        ],
      },
    ],
    applications: ["Flare stacks and flare tips", "Power transmission lines and towers", "Towers, columns and pipe racks", "Rigs, platforms and ship terminals", "Tanks, vessels and furnaces (confined space)"],
    industries: ["Refineries", "Petrochemical", "Power and utilities", "Oil & gas"],
    standards: ["IRATA International (rope access)", "GACA unmanned aircraft regulations", "Client site access and permit-to-work rules"],
    rfpLabel: "Request Rope Access / Drone Quote",
  },
  {
    slug: "engineering-consultancy",
    name: "Engineering Consultancy",
    shortName: "Engineering Consultancy",
    icon: "drafting-compass",
    tagline: "Engineering studies, design, analysis, laser scanning and digital twins.",
    summary:
      "Specialised engineering solutions combined with traditional services at every project stage. Our experienced engineers handle design and mechanical equipment work for oil and gas, petrochemical and power generation clients, focused on fixing, correcting and preventing asset problems.",
    features: [
      "Engineering studies for greenfield and brownfield projects",
      "Basic and detail engineering design (BED / DED)",
      "Stress analysis, FEA, process simulation and remaining life analysis",
      "3D laser scanning, scan-to-services and digital twins",
      "Clear technical reports and actionable recommendations",
    ],
    includes: ["Engineering Studies", "Basic & Detail Engineering Design", "Engineering Analysis", "Laser Scan and Digital Twins"],
    subServices: [
      {
        name: "Engineering Studies",
        description:
          "A team of seasoned engineers handling design and mechanical equipment work for industrial clients, focused on fixing, correcting and preventing asset problems.",
        items: [
          "Oil, gas and petrochemical projects, greenfield and brownfield",
          "Facilities improvement and asset management projects",
          "Renewable energy projects",
          "Plant asset turnaround / changeout",
          "Rejuvenation and early assessment of asset life",
          "Process and risk safety assessment",
        ],
      },
      {
        name: "Basic & Detail Engineering Design",
        description:
          "Technical excellence from industrial experts using the latest technologies to meet client expectations and satisfaction.",
        items: [
          "Basic and detailed engineering design (BED and DED)",
          "Tender preparation, evaluation and procurement support",
          "Construction management and supervision",
          "Drafting, including as-built drawings and 3D intelligent modelling",
          "Engineering studies and stress analysis",
          "Finite element analysis, HYSYS simulations and dynamic studies",
        ],
      },
      {
        name: "Engineering Analysis",
        description:
          "Analysis, design and troubleshooting that helps industry make decisions and guide design for pressure vessels, heat exchangers, mixers, pumps, valves, conveyors and welded assemblies.",
        items: ["Stress analysis", "Finite Element Analysis (FEA)", "HYSYS simulations", "Dynamic studies", "Remaining life analysis"],
      },
      {
        name: "Laser Scan and Digital Twins",
        description:
          "3D laser scanning and scan-to-services work that digitises the as-built environment to fit project requirements and reduce costly problems.",
        items: [
          "3D laser scanning by local teams",
          "Scan-to-services",
          "Best-practice advice on capturing existing facilities",
          "Digitised as-built environments",
          "Support for small and large projects",
        ],
      },
    ],
    applications: [
      "New project design, construction and commissioning support",
      "Operating plant integrity programmes",
      "Life extension and re-rating studies",
      "Brownfield modification and turnaround changeout",
    ],
    industries: ["Oil & gas", "Petrochemical", "Power generation"],
    standards: ["API 579-1 / ASME FFS-1", "ASME B31.3", "ASME Section VIII"],
    rfpLabel: "Request Engineering Proposal",
  },
  {
    slug: "safety-services",
    name: "Safety Services",
    shortName: "Safety Services",
    icon: "shield-check",
    tagline: "Confined space monitoring, plant gate entry and plant ID services for safer sites.",
    summary:
      "Practical safety and site-access solutions for plants and turnarounds: AI-based confined space monitoring, an end-to-end contractor gate entry system, and plant ID support and digitisation so contractors can be mobilised, tracked and reported on with confidence.",
    features: [
      "AI safety monitoring of confined spaces with a control centre",
      "Continuous tracking of workers, communication and gas alarms",
      "Portable, scalable contractor management at plant gates",
      "Plant ID support for technicians entering site",
      "Centralised, searchable contractor records shared with clients",
    ],
    includes: ["Confined Space Monitoring System", "Plant Temporary Gate Entry", "Plant ID Support Services", "Plant ID Portal / Digitization"],
    subServices: [
      {
        name: "Confined Space Monitoring System",
        description:
          "Because confined spaces carry the highest ratio of fatalities to lost-time injuries, our AI safety monitoring solution lets clients know what is happening inside at all times, from a control centre that tracks workers, keeps communication open, monitors toxic gases and raises alarms.",
        items: [
          "Continuous oversight by trained technicians",
          "Clear, visible alarm conditions and status",
          "Communication with technicians inside and outside the space",
          "Visualisation software that centralises, analyses and reports incoming data",
          "Checks on required PPE and potential atmospheric hazards",
        ],
      },
      {
        name: "Plant Temporary Gate Entry",
        description:
          "An end-to-end contractor management solution: a portable, scalable, computerised system used on a temporary basis to manage a high inflow of contractors into working areas.",
        items: ["End-to-end contractor management", "Portable and scalable computerised system", "Helps enforce and monitor HSSE policies"],
      },
      {
        name: "Plant ID Support Services",
        description: "Identification support for all technicians so they can enter plant sites without difficulty.",
        items: ["ID support for technicians", "Easier plant access"],
      },
      {
        name: "Plant ID Portal / Digitization",
        description:
          "A centralised database that helps find records for contractors mobilised during inspections and makes filtering and sharing data with clients faster and more secure.",
        items: ["Faster searching of contractor records", "Information filtering", "Standardised ID processing", "Protection of information", "Quicker data sharing with clients"],
      },
    ],
    applications: ["Tank, column, furnace and vessel entry", "Turnaround and shutdown manpower control", "High-volume contractor mobilisation", "Contractor record keeping and client reporting"],
    industries: ["Refineries", "Petrochemical", "Power plants", "Oil & gas"],
    standards: ["Client HSSE policies and permit-to-work rules"],
    rfpLabel: "Request Safety Services Quote",
  },
];

// Short list for the Safety & Compliance section.
export const codesAndStandards = [
  "ASME Section V",
  "API 510 / 570 / 653",
  "API 580 / 581",
  "API 579-1",
  "ISO 20816",
  "ISO 18436",
  "API 670",
  "ASNT SNT-TC-1A / ISO 9712",
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

// "Six" etc., so headline copy follows the catalog instead of being hardcoded.
const countWords = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];
export const serviceLineCount = countWords[services.length] ?? String(services.length);

export const rfpHref = (slug?: string) => `/contact?type=rfp${slug ? `&service=${slug}` : ""}#quote`;
