/**
 * Newsroom content. Add a new item to `newsArticles` and it appears on /newsroom, gets its own
 * /newsroom/[slug] page and is included in the sitemap. Swap this file for a CMS fetch later if needed.
 *
 * IMPORTANT (content owner): every article below is SAMPLE COPY written as a starting point.
 * Verify each claim, date and name, or replace the article, before publishing.
 *
 * Images: put files in /public/images/news/ and set `image` (e.g. "/images/news/ptp-distributorship.jpg").
 * While a file is missing, the site shows a branded graphic instead.
 */
export const newsCategories = [
  "Press Releases",
  "Events & Exhibitions",
  "Company Milestones",
  "Technical Updates",
] as const;

export type NewsCategory = (typeof newsCategories)[number];

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  /** One string per paragraph. */
  content: string[];
  /** ISO date, YYYY-MM-DD. */
  date: string;
  category: NewsCategory;
  /** Path under /public. Optional file: a branded graphic shows when it is missing. */
  image: string;
  featured: boolean;
  /** Sample copy that has not been verified. Remove the flag once the article is approved. */
  sample?: boolean;
}

export const newsArticles: NewsArticle[] = [
    {
    id: "n-001",
    slug: "ampp-jubail-chapter-technical-events",
    title: "Saudi K-KEM Engineering Sponsors NACE Jubail Technical Event on Asset Integrity & Corrosion Management",
    excerpt:
      "Al Jubail Saudi Arabia, December 07, 2010 - Saudi K-KEM Engineering Service Co. proudly served as an official sponsor of the NACE International Jubail Section Technical Meeting, held on December 7, 2010, at the InterContinental Hotel Al-Jubail, Kingdom of Saudi Arabia.",
    content: [
      "The technical dinner meeting focused on critical asset integrity methodologies under the theme Tank Bottom Floor Inspection Using Acoustic Emission & The Development of Piping Corrosion Circuit. The session brought together corrosion engineers, inspection specialists, and industrial asset managers from across Al Jubail’s petrochemical and energy sectors to examine advanced non-intrusive tank floor assessment techniques and structured corrosion loop modeling for piping systems.",
      "By sponsoring this specialized NACE technical forum, Saudi K-KEM Engineering Service Co. reinforced its active support for regional knowledge exchange, industry best practices, and continuous professional development in corrosion prevention and nondestructive testing.",
      "Saudi K-KEM Engineering Service Co. remains committed to partnering with leading technical societies and supporting the Kingdom’s industrial community with reliable inspection solutions and engineering expertise.",
    ],
    date: "2010-12-07",
    category: "Events & Exhibitions",
    image: "/images/news/ampp-jubail.jpg",
    featured: false,
    sample: true,
  },
  {
    id: "n-002",
    slug: "authorized-distributorship-partnership-ptp-ksa",
    title: "Saudi K-KEM Announces Authorized Distributorship Partnership with Piping Technology & Products (PT&P) in K.S.A.",
    excerpt:
      "Al Jubail Saudi Arabia, May 27, 2012 - Saudi K-KEM will supply PT&P pipe supports, spring hangers, expansion joints and related piping products to industrial clients across the Kingdom, backed by local technical support from Al Jubail.",
    content: [
      "Al Jubail, Saudi Arabia: Saudi K-KEM Engineering Service Company today announced an authorized distributorship partnership with Piping Technology & Products (PT&P) for the Kingdom of Saudi Arabia.",
      "Under the partnership, Saudi K-KEM will supply PT&P's range of pipe supports and hangers, engineered spring supports, expansion joints, snubbers and sway braces, pipe clamps and related products to refineries, petrochemical plants, power plants and other process facilities.",
      "The agreement complements Saudi K-KEM's inspection and asset integrity services. Clients can now source piping support and expansion products alongside the engineering and inspection expertise that helps specify, assess and maintain them.",
      "Our technical team in Al Jubail provides sizing support, datasheets and quotation assistance. Clients can request a quote for any product line through the Products section of the website or by contacting the team directly.",
    ],
    date: "2012-05-21",
    category: "Press Releases",
    image: "/images/news/ptp.jpeg",
    featured: false,
    sample: true,
  },
  {
    id: "n-003",
    slug: "11th-sabic-technical-meeting",
    title: "Saudi K-KEM Engineering Service Co. Exhibits at the 11th SABIC Technical Meeting (STM-11)",
    excerpt:
      "Al Jubail Saudi Arabia, November 3 – 5, 2014 - Saudi K-KEM Engineering Service Co. proudly participated as an official exhibitor at the 11th SABIC Technical Meeting (STM-11), held from November 3 – 5, 2014, at the King Abdullah bin Abdulaziz Cultural Center in Jubail Industrial City.",
    content: [
      "Marking two decades of the prestigious STM series under the theme 'Commitment to Reliability & Sustainability,' the landmark event brought together industry leaders, technical specialists, and global solution providers to exchange advancements in petrochemical manufacturing, asset integrity, and environmental stewardship.",
      "At our exhibition booth, the Saudi K-KEM team showcased our specialized portfolio of industrial engineering services, technical consumables, and reliability-focused solutions tailored for demanding petrochemical environments. Throughout the three-day conference, our specialists engaged directly with SABIC engineers, operational teams, and industry partners to discuss practical approaches to asset reliability, quality assurance, and localized technical support.",
      "Participating as an exhibitor at STM-11 reflects Saudi K-KEM Engineering Service Co.’s longstanding commitment to supporting the Kingdom’s petrochemical sector with dependable engineering expertise and responsive local service.",
    ],
    date: "2014-11-03",
    category: "Events & Exhibitions",
    image: "/images/news/STM-11.jpg",
    featured: false,
    sample: true,
  },
  {
    id: "n-004",
    slug: "ar-razi-reliability-campaign-2015",
    title: "Saudi K-KEM Engineering Service Co. Exhibits Specialized Solutions at Ar-Razi Reliability Campaign 2015",
    excerpt:
      "Al Jubail Saudi Arabia, November 17, 2015  - Saudi K-KEM Engineering Service Co. participated as an official exhibitor at the Ar-Razi Reliability Campaign 2015, hosted by the Saudi Methanol Company (Ar-Razi) in Jubail Industrial City.",
    content: [
      "Dedicated to strengthening plant asset integrity, operational uptime, and preventive maintenance excellence, the campaign brought together reliability engineers, maintenance specialists, and trusted technical solution providers across the petrochemical facility.",
      "At our exhibition booth, the Saudi K-KEM team showcased our specialized portfolio of industrial services, technical consumables, and reliability-focused engineering solutions tailored to demanding petrochemical environments. Throughout the event, our specialists engaged directly with Ar-Razi operations and maintenance personnel to discuss practical approaches to minimizing downtime, extending equipment lifecycle, and optimizing plant performance.",
      "Participating in the Ar-Razi Reliability Campaign underscores Saudi K-KEM Engineering Service Co.’s commitment to supporting the Kingdom’s core petrochemical facilities with responsive, localized engineering expertise and dependable industrial solutions.",
    ],
    date: "2015-11-17",
    category: "Events & Exhibitions",
    image: "/images/news/ar-razi-reliability-campaign.jpg",
    featured: false,
    sample: true,
  },
  {
    id: "n-005",
    slug: "7th-middle-east-nondestructive-testing-conference-&-exhibition",
    title: "Saudi K-KEM Engineering Service Co. Exhibits Advanced NDT Solutions at 7th Middle East Nondestructive Testing Conference",
    excerpt:
      "Manama Bahrain, September 13 - 16, 2015 - Saudi K-KEM Engineering Service Co. successfully participated as an official exhibitor at the 7th Middle East Nondestructive Testing Conference & Exhibition (7th MENDT), held from September 13 – 16, 2015, at the Gulf Convention Centre in Manama, Bahrain.",
    content: [
      "Organized by the Bahrain Society of Engineers in collaboration with the American Society for Nondestructive Testing (ASNT), the 7th MENDT served as the region’s premier technical forum for asset integrity, material testing, and inspection professionals across the oil, gas, petrochemical, and power sectors.",
      "range of specialized nondestructive testing (NDT) consumables, inspection equipment, and industrial engineering solutions. Throughout the four-day event, our specialists connected with regional NDT practitioners, quality assurance leaders, and industry decision-makers to address critical inspection challenges and demonstrate reliable, high-performance testing methodologies.",
      "Our active presence at the 7th MENDT reinforces Saudi K-KEM Engineering Service Co.’s dedication to advancing inspection standards, supporting regional asset integrity programs, and delivering trusted technical solutions across Saudi Arabia and the wider GCC.",
    ],
    date: "2015-09-13",
    category: "Events & Exhibitions",
    image: "/images/news/7MENDT.jpg",
    featured: false,
    sample: true,
  },
  {
    id: "n-006",
    slug: "12th-sabic-technical-conference",
    title: "Saudi K-KEM Engineering Service Co. Exhibits at the 12th SABIC Technical Conference (STC-12)",
    excerpt:
      "Al Jubail Saudi Arabia, November 06 - 09, 2016 - Saudi K-KEM Engineering Service Co. proudly participated as an official exhibitor at the 12th SABIC Technical Conference (STC-12), held from November 6 – 9, 2016, at the King Abdullah bin Abdulaziz Cultural Center in Jubail Industrial City.",
    content: [
      "Centered on the theme 'Innovation & Sustainability: The Path to Competitiveness,' STC-12 brought together global technology leaders, engineers, researchers, and petrochemical specialists to exchange insights on operational efficiency, asset reliability, and sustainable industrial development.",
      "At our exhibition booth, the Saudi K-KEM team showcased our specialized industrial engineering services, technical consumables, and asset integrity solutions tailored to the evolving requirements of the petrochemical and energy sectors. Throughout the four-day conference, our specialists engaged with SABIC engineers, industry partners, and technical decision-makers to discuss localized support, quality assurance, and innovative approaches to enhancing plant performance.",
      "Exhibiting at STC-12 reflects Saudi K-KEM Engineering Service Co.’s ongoing commitment to supporting the Kingdom’s industrial growth and delivering reliable, high-standard engineering solutions across Saudi Arabia and the GCC.",
    ],
    date: "2016-11-06",
    category: "Events & Exhibitions",
    image: "/images/news/STC-12.jpg",
    featured: false,
    sample: true,
  },
  {
    id: "n-007",
    slug: "13th-sabic-technical-conference",
    title: "Saudi K-KEM Engineering Service Co. Exhibits at the SABIC Conference & Exhibition 2020 (STC-13)",
    excerpt:
      "Al Jubail, Saudi Arabia, January 19 - 23, 2020 — Saudi K-KEM Engineering Service Co. proudly participated as an official exhibitor at the 13th SABIC Technical Conference & Exhibition (STC-13), held from January 19 – 23, 2020, at the King Abdullah bin Abdulaziz Cultural Center in Jubail Industrial City.",
    content: [
      "Organized under the theme Innovation & Sustainability: The Path to Competitiveness, the premier international gathering convened global industry leaders, researchers, engineers, and technology providers to exchange insights on operational excellence, asset integrity, and sustainable industrial development across the petrochemical sector.",
      "At our exhibition booth, the Saudi K-KEM team presented our specialized portfolio of industrial engineering services, nondestructive testing (NDT) consumables, and reliability-focused technical solutions. Throughout the five-day event, our specialists engaged directly with SABIC engineers, operational teams, and industry partners to discuss localized technical support, quality assurance, and practical solutions designed to maximize plant reliability and efficiency.",
      "Participating as an exhibitor at the SABIC Conference & Exhibition 2020 reflects Saudi K-KEM Engineering Service Co.’s continued commitment to supporting the Kingdom’s industrial growth and delivering dependable engineering excellence across Saudi Arabia and the wider GCC.",
    ],
    date: "2020-01-19",
    category: "Events & Exhibitions",
    image: "/images/news/STC-13.jpg",
    featured: false,
    sample: true,
  },
  {
    id: "n-008",
    slug: "4th-ramcon-reliability-and-maintainability-conference-and-exhibition-2023",
    title: "Saudi K-KEM Engineering Service Co. Exhibits at the 4th Reliability & Maintainability Conference and Exhibition (RAMCon 2023)",
    excerpt:
      "Al-Khobar Saudi Arabia, November 26 - 28, 2023 - Saudi K-KEM Engineering Service Co. proudly participated as an official exhibitor at the 4th Reliability & Maintainability Conference and Exhibition (RAMCon 2023), held from November 26 – 28, 2023, at the Grand Hyatt Al-Khobar, Kingdom of Saudi Arabia.",
    content: [
      "Dedicated to advancing asset performance, operational excellence, and maintenance engineering across the region, the 4th RAMCon brought together reliability leaders, maintenance specialists, plant engineers, and solution providers from the petrochemical, oil and gas, power, and manufacturing sectors.",
      "At our exhibition booth, the Saudi K-KEM team showcased our specialized range of asset integrity solutions, nondestructive testing (NDT) consumables, and reliability-focused engineering services designed to maximize equipment uptime and minimize operational risk. Throughout the three-day event, our specialists engaged with industry professionals and decision-makers to exchange technical insights and discuss localized support strategies tailored to demanding industrial facilities.",
      "Participating as an exhibitor at RAMCon 2023 underscores Saudi K-KEM Engineering Service Co.’s ongoing commitment to driving reliability standards, supporting the Kingdom’s industrial sector, and delivering trusted engineering solutions across Saudi Arabia and the GCC. initiatives.",
    ],
    date: "2023-11-26",
    category: "Events & Exhibitions",
    image: "/images/news/RAMCon-2023.jpeg",
    featured: false,
    sample: true,
  },
  {
    id: "n-009",
    slug: "2nd-asset-integrity-and-process-safety-conference-2023",
    title: "Saudi K-KEM Engineering Service Co. Joins the 2nd Asset Integrity and Process Safety Conference as Strategic Partner",
    excerpt:
      "Al Jubail, Saudi Arabia — April 24 - 25, 2024 — Saudi K-KEM Engineering Service Co. proudly served as a Strategic Partner for the 2nd Asset Integrity and Process Safety Conference, held in Jubail Industrial City, Kingdom of Saudi Arabia. The event opened with specialized Technical Workshops on April 23, 2024, followed by the main conference and exhibition on April 24 – 25, 2024.",
    content: [
      "Bringing together asset integrity professionals, process safety leaders, engineers, and key industry stakeholders from across the Kingdom’s petrochemical, oil and gas, and energy sectors, the conference focused on advancing operational safety, risk management, and plant reliability standards.",
      "As a Strategic Partner, Saudi K-KEM Engineering Service Co. actively contributed to technical discussions and engaged with industry peers to showcase our specialized inspection solutions, nondestructive testing (NDT) capabilities, and reliability-driven engineering services designed to safeguard critical industrial infrastructure.",
      "Partnering with the 2nd Asset Integrity and Process Safety Conference underscores Saudi K-KEM Engineering Service Co.’s ongoing commitment to fostering a culture of safety, driving operational excellence, and supporting the Kingdom’s industrial sector with trusted engineering expertise.",
    ],
    date: "2024-04-24",
    category: "Events & Exhibitions",
    image: "/images/news/Asset-Integrity-and-Process-Safety-Conference.jpeg",
    featured: false,
    sample: true,
  },
  {
    id: "n-010",
    slug: "energy-localization-forum-2024",
    title: "Saudi K-KEM Engineering Service Co. Signs Strategic Supplier Agreement with SABIC at the Energy Localization Forum 2024",
    excerpt:
      "Riyadh, Saudi Arabia, October 23, 2024 — Saudi K-KEM Engineering Service Co. proudly marked a major milestone at the Energy Localization Forum 2024, inaugurated by His Royal Highness Prince Abdulaziz bin Salman, Minister of Energy. Held under the theme Enabling Localization of Energy Supply, the premier forum brought together national energy leaders, global industrial enterprises, and key supply chain partners to accelerate domestic manufacturing and local content development across the Kingdom.",
    content: [
      "During the event, Saudi K-KEM Engineering Service Co.—recognized as one of the Middle East’s leading industrial service providers—formally signed a strategic supplier agreement with SABIC. This landmark partnership reinforces Saudi K-KEM’s role in strengthening in-Kingdom supply chain resilience, delivering localized engineering solutions, and supporting operational excellence across the regional petrochemical and energy sectors.",
      "By entering into this agreement, Saudi K-KEM Engineering Service Co. reaffirms its deep commitment to advancing the Saudi government’s energy localization initiatives and contributing directly to the strategic objectives of Saudi Vision 2030.",
      "Saudi K-KEM remains dedicated to investing in local capabilities, fostering long-term strategic alliances, and providing dependable, high-standard industrial services that empower the Kingdom’s energy ecosystem.",
    ],
    date: "2024-10-23",
    category: "Press Releases",
    image: "/images/news/Energylocalization.jpg",
    featured: false,
    sample: true,
  },
  {
    id: "n-011",
    slug: "14th-sabic-technical-meeting-and-exhibition-stm-2025",
    title: "Saudi K-KEM Engineering Service Co. Exhibits at the 14th SABIC Technical Meeting & Exhibition (STM-2025)",
    excerpt:
      "Al Jubail Saudi Arabia, January 26 - 30, 2025 - Saudi K-KEM Engineering Service Co. proudly participated as an official exhibitor at the 14th SABIC Technical Meeting & Exhibition (STM-2025), held from January 26 – 30, 2025, in Jubail Industrial City.",
    content: [
      "Recognized as one of the premier technical conferences and industrial exhibitions in the global petrochemical sector, STM-2025 convened industry leaders, technology pioneers, engineers, and strategic suppliers to exchange insights on operational excellence, energy transition, asset reliability, and industrial localization.",
      "At our exhibition booth, the Saudi K-KEM team presented our expanded portfolio of specialized engineering services, industrial consumables, and asset integrity solutions designed to support high-efficiency operations across the Kingdom’s energy and petrochemical facilities. Throughout the five-day event, our specialists engaged directly with SABIC professionals, regional partners, and technical decision-makers to explore localized supply chain collaborations and innovative maintenance solutions.",
      "Participating as an exhibitor at STM-2025 underscores Saudi K-KEM Engineering Service Co.’s continued commitment to advancing local industrial capabilities, supporting Saudi Vision 2030 localization initiatives, and delivering dependable engineering excellence across the GCC.",
    ],
    date: "2025-01-26",
    category: "Events & Exhibitions",
    image: "/images/news/STM-2025.jpg",
    featured: false,
    sample: true,
  },
  {
    id: "n-012",
    slug: "smart-plant-monitoring-and-drone-inspection-capabilities",
    title: "Expanding Smart Plant Online Condition Monitoring and Drone Inspection Capabilities",
    excerpt:
      "Al Jubail Saudi Arabia, March 03, 2025 - Online UT and guided wave, vibration and valve monitoring devices, together with industrial aerial visual inspection, give plant owners earlier warning and safer access.",
    content: [
      "Saudi K-KEM is expanding its Smart Plant offering to help asset owners move from periodic inspection to continuous insight.",
      "The portfolio now covers online ultrasonic thickness and guided wave monitoring, online condition and vibration monitoring, and online monitoring of valves, PSVs and PRVs. These devices feed data that supports predictive, risk-based maintenance decisions.",
      "Alongside monitoring, our industrial aerial visual drone inspection and rope access teams reduce the need for scaffolding and work at height on flare stacks, tall columns, tanks and transmission assets.",
      "Together, these capabilities support planned turnarounds, remaining life assessments and ongoing asset integrity programs. Clients can discuss a tailored solution through the Solutions page.",
    ],
    date: "2026-08-30",
    category: "Technical Updates",
    image: "/images/news/smart-plant-monitoring.jpg",
    featured: false,
    sample: true,
  },

  {
    id: "n-013",
    slug: "confined-space-monitoring-and-plant-gate-entry-services",
    title: "Saudi K-KEM Highlights Confined Space Monitoring and Plant Gate Entry Safety Services",
    excerpt:
      "Al Jubail Saudi Arabia, 5 April 2025 - AI-based confined space monitoring and a portable contractor gate entry system help clients control risk during turnarounds and high-volume mobilization.",
    content: [
      "Saudi K-KEM is highlighting its Safety Services line, designed for plants and turnarounds where people, access and risk must be controlled.",
      "The Confined Space Monitoring System gives clients continuous visibility of what is happening inside a confined space, with trained technicians, gas monitoring, communication and clear alarm conditions. Plant Temporary Gate Entry provides a portable, scalable system for managing a high inflow of contractors, and Plant ID services support records and access.",
      "The services help clients enforce HSSE policies and keep accurate contractor records. Contact the team to discuss requirements for your next shutdown.",
    ],
    date: "2025-04-25",
    category: "Press Releases",
    image: "/images/news/ConfinedSpaceMonitoring.jpg",
    featured: false,
    sample: true,
  },
  {
    id: "n-014",
    slug: "certificate-of-appreciation-by-sabic",
    title: "Saudi K-KEM Engineering Service Co. Honored with SABIC Certificate of Appreciation for Excellence in Performance",
    excerpt:
      "November 15, 2026 - Saudi K-KEM Engineering Service Co. is proud to announce that it has been awarded a prestigious Certificate of Appreciation by SABIC, recognizing the company's exceptional overall performance and positive contribution throughout the year.",
    content: [
      "Presented by Mr. Abdulaziz Al-Oudan, Executive Vice President of Shared Services at SABIC, this official recognition underscores Saudi K-KEM’s unwavering dedication to service excellence, operational reliability, and high-standard engineering support.",
      "Receiving this acknowledgment from one of the world's leading petrochemical enterprises reflects the hard work, technical expertise, and reliability of the entire Saudi K-KEM team. It reinforces our commitment to fostering enduring partnerships, maintaining rigorous quality standards, and delivering dependable, value-driven solutions across the Kingdom’s industrial sector.",
      "Saudi K-KEM Engineering Service Co. extends its sincere gratitude to SABIC for this recognition and looks forward to continuing our journey of shared growth and collaborative success in supporting Saudi Vision 2030.",
    ],
    date: "2026-11-15",
    category: "Company Milestones",
    image: "/images/news/SABIC-Certificate-of-appreciation-SAUDI-K-KEM.jpg",
    featured: true,
    sample: true,
  },
  {
    id: "n-015",
    slug: "safe-man-hours-milestone",
    title: "Saudi K-KEM Surpasses 4,137,857 Recorded Safe Man-Hours",
    excerpt:
      "Al Jubail Saudi Arabia, November 17, 2026 - A safety milestone built on competent people, disciplined work permits and job safety analysis across every site we support.",
    content: [
      "Al Jubail, Saudi Arabia: Saudi K-KEM has passed 4,137,857 recorded safe man-hours across its inspection, engineering and technical service operations.",
      "The milestone reflects a safety-first culture that starts with management and is carried out by every technician on site: hazard identification before work begins, work permits and job safety analyses, regular EHS training and prompt correction of any shortcoming.",
      "We thank our clients for their partnership and our people for their commitment to working safely. Our goal remains the same: every person goes home safe, every day.",
    ],
    date: "2026-11-17",
    category: "Company Milestones",
    image: "/images/news/safe-man-hours.jpeg",
    featured: false,
    sample: true,
  },
];

/** Newest first. */
export const sortedNews = [...newsArticles].sort((a, b) => b.date.localeCompare(a.date));

export const getArticle = (slug: string) => newsArticles.find((a) => a.slug === slug);

export const formatNewsDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

/** Two related articles: same category first, then the most recent others. */
export function relatedArticles(slug: string, count = 2): NewsArticle[] {
  const current = getArticle(slug);
  const others = sortedNews.filter((a) => a.slug !== slug);
  const same = others.filter((a) => a.category === current?.category);
  return [...same, ...others.filter((a) => !same.includes(a))].slice(0, count);
}
