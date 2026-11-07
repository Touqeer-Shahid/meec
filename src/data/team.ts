import ceoAsset from "@/assets/images/ceo/ceo-shahid-hameed.jpg";
import abdulSalamPhoto from "@/assets/images/team/Abdul_Salam.png";
import rashid_hse from "@/assets/images/team/Rashid_Hse.jpeg";
import fayyazPhoto from "@/assets/images/team/Fayyaz_ul_Hasan.jpeg";
import najamPhoto from "@/assets/images/team/Najam.jpg";
import rashidRizwanPhoto from "@/assets/images/team/Rasid_Rizwan.png";
import zulfiqar from "@/assets/images/team/zulfiqar.png";
import shahwaiz from "@/assets/images/team/shahwaiz_majeed.jpeg";
import project_manager from "@/assets/images/team/Project_manager.jpeg";

export const ceo = {
  name: "Shahid Hameed",
  role: "Chief Executive Officer",
  photo: ceoAsset,
  message: [
    "Masha Allah Engineering Enterprises was founded on a simple commitment: deliver engineering work that plants can rely on, and stand behind it. Since 2003 that commitment has taken us from small mechanical jobs to multidisciplinary contracts with some of Pakistan's leading industrial names.",
    "Our people are the reason clients return. Experienced supervisors, qualified engineers and skilled trade teams plan the work, execute it safely and verify the result — whether it is a turnaround with a fixed window, a precision machining requirement or a heavy lift on a live plant.",
    "We continue to invest in our machine shop, our equipment fleet and above all in HSE and quality systems, so that every project is completed on schedule, within specification and without harm to people.",
  ],
};

export type Manager = {
  slug: string;
  name: string;
  role: string;
  focus: string;
  /** Optional portrait; cards fall back to initials when absent. */
  photo?: string;
  /** Longer profile shown in the member profile page. */
  profile: string[];
};

/**
 * Management team members with direct, permanent profile slugs.
 * The CEO is presented separately in the CEO message section,
 * so he is intentionally not repeated here.
 */
export const management: Manager[] = [
  {
    slug: "fayyaz-ul-hassan",
    name: "Fayyaz ul Hassan",
    role: "General Manager",
    focus: "Operations oversight, resource allocation and contract delivery.",
    photo: fayyazPhoto,
    profile: [
      "As General Manager, Fayyaz ul Hassan holds overall responsibility for MEEC operations — translating awarded contracts into resourced, scheduled and supervised site work.",
      "Fayyaz ul Hassan is an experienced engineering and management professional with extensive experience in construction, maintenance, project management, and industrial turnaround/shutdown activities across multiple industries. He has worked with several reputable organizations, gaining valuable expertise in engineering management, project execution, manpower management, construction activities, maintenance, and industrial turnaround projects. His professional experience includes: Fiat Avio Siemens Pakistan – 13 years Engineering Kinematics (Pvt.) Ltd. – 3 years Gasco Engineering Dutch Babcock 7 Star Engineering – 6 years With his diverse industrial experience and strong leadership and management capabilities, he is currently leading Masha Allah Engineering Enterprises as General Manager. His vision is focused on quality workmanship, safety, timely project execution, client satisfaction, professional integrity, and sustainable business growth.",
    ],
  },
  {
    slug: "najam-ali",
    name: "Najam Ali",
    role: "Manager Projects",
    focus: "Project execution, site supervision and client coordination.",
    photo: najamPhoto,
    profile: [
      "Najam Ali leads project execution across MEEC's mechanical, fabrication, erection and maintenance scopes, from mobilisation through to handover.",
      "Najam Ali is a highly accomplished and results-driven Project Manager with over 23 years of extensive professional experience in the engineering, construction, fabrication, and industrial sectors. Throughout his distinguished career, he has developed strong expertise in project planning, execution, site management, fabrication and erection, resource management, team leadership, quality control, and coordination with clients and contractors. Over the course of his career, Najam Ali has been associated with several reputable engineering organizations, including Descon Engineering, Al-Tariq Engineering, Engineering Kinetics, and other well-established companies. Working across diverse and challenging industrial environments has enabled him to gain comprehensive knowledge of engineering projects from planning and mobilization through execution, commissioning, and successful completion. As a Project Manager at MashaAllah Engineering Enterprises, he is responsible for overseeing project activities, coordinating multidisciplinary teams, managing resources, monitoring progress, ensuring compliance with safety and quality standards, and maintaining effective communication with clients and stakeholders. His ability to manage complex projects while maintaining a strong focus on time, cost, quality, safety, and client satisfaction contributes significantly to the successful delivery of our projects. With more than two decades of practical industry experience, combined with strong leadership and problem-solving capabilities, Najam Ali brings valuable technical knowledge and professional expertise to every project. His extensive field exposure and commitment to operational excellence make him an important part of the MashaAllah Engineering Enterprises management team.",
    ],
  },
  {
    slug: "project-management-consultant",
    name: "Project Management Consultant",
    role: "Project Management Consultant",
    focus: "Project Planning, Project Controls, Contracts, and Construction Management.",
    photo: project_manager,
    profile: [
      "Offering a decade of international experience in Engineering.",
      "Project Management Consultant Offering a decade of international experience in Engineering, Project Planning, Project Controls, Contracts, and Construction Management, supporting the successful execution of complex EPC, EPCC, and construction projects across the Oil & Gas, Energy, Power, and Cement sectors. Experienced in providing project controls and execution support to contractors, EPC organizations, and international project teams, with exposure to major projects and organizations including TotalEnergies, Shell, BP (UEG), Total PARCO, China Petroleum, Sinoma/CNBM, and other leading industry stakeholders. Specialized in establishing and managing integrated project planning and controls systems, including Primavera P6 scheduling, baseline development and rebaselining, progress measurement, S-curves, critical path analysis, look-ahead planning, resource planning, delay analysis, recovery planning, risk management, contracts and cost control, performance reporting, and project execution monitoring. Strong experience working within multinational and multicultural project environments, coordinating with clients, EPC contractors, consultants, subcontractors, engineering teams, construction teams, and commercial stakeholders across demanding and remote projects in Africa, the Middle East, and Pakistan. A Mechanical Engineering graduate from UET, supported by professional training and certifications in Oracle Primavera P6, PMI Project Risk Management, NASBA–USA Contracts & Cost Control, SAP/ERP, Microsoft 365, Artificial Intelligence tools, and internationally recognized ISO, Shell, and Arteak-UK credentials covering Project Management, Construction, HSE, Quality, and Engineering. Combining engineering knowledge, project controls expertise, commercial understanding, and hands-on construction experience to help contractors improve schedule performance, productivity, cost visibility, risk management, project recovery, and overall delivery certainty from pre-construction and mobilization through execution, monitoring, recovery, commissioning, and completion.",
    ],
  },
  {
    slug: "abdul-salam",
    name: "Abdul Salam",
    role: "Manager Machine Shop",
    focus: "Machining works, workshop scheduling and precision output quality.",
    photo: abdulSalamPhoto,
    profile: [
      "Abdul Salam manages MEEC's machine shop at Yousuf Goth, covering turning, milling, boring, shaft and sleeve manufacturing, and reclamation of worn rotating components.",
      "Abdul Salam is a highly experienced Machine Shop Manager with an impressive 32 years of professional experience in large-scale industrial and engineering environments. He has been serving MashaAllah Engineering Enterprises since 2005, where he manages and supervises machine shop operations. His extensive career includes valuable experience with Fauji Fertilizer Company Limited, Aeronautical Complex Kamra, and Saudi Arabian Fertilizer Company (SAFCO), Al-Jubail, K.S.A. He has worked extensively with foreign experts during industrial pre-commissioning activities and has developed strong practical expertise in machine-shop operations. Abdul Salam has hands-on expertise in lathe, boring, milling, drilling, shaper, balancing, portable, and various grinding machines. He is also skilled in machine maintenance, job execution, supervision, and reading and preparing technical drawings for parts and equipment. His decades of technical experience, practical knowledge, and leadership in machining operations make him a highly valuable and trusted member of the MashaAllah Engineering Enterprises team.",
    ],
  },
  {
    slug: "rashid-rizwan",
    name: "Rashid Rizwan",
    role: "Manager Estimation & Planning",
    focus: "Tendering, cost estimation, scheduling and progress planning.",
    photo: rashidRizwanPhoto,
    profile: [
      "Rashid Rizwan heads estimation and planning — reviewing enquiry documents, developing quantities and costs, and issuing technical and commercial proposals.",
      "ARAMCO & SABIC Approved, Rashid Rizwan is an experienced Manager – Estimation & Planning with over 29 years of expertise in delivering high-accuracy cost estimates and comprehensive tender solutions for PC, EPC, EPIC, and LSTK projects across the GCC and Pakistan. He specializes in Mechanical Estimation, BOQ Development, Quantity Take-Offs, Man-Hour Modeling, Cost Engineering, Subcontractor Pricing, Tender Evaluation, and Commercial Strategy. His extensive experience includes supporting major ARAMCO, SABIC, and industrial projects, with a strong track record of developing competitive and commercially successful bids. With a proven ability to achieve bid accuracy of approximately ±5%, he focuses on optimizing project costs, improving tender competitiveness, and ensuring compliance with client requirements and applicable industry standards, including SAES, SAMSS, SAEP, SATIP, and SAPMT. His expertise combines technical knowledge, commercial understanding, strategic planning, and project execution experience, enabling organizations to make informed bidding decisions and successfully secure and deliver major projects",
    ],
  },
  {
    slug: "rashid-ali",
    name: "Rashid Ali",
    role: "Lead HSE",
    focus: "Safety planning, toolbox talks, inspections and incident prevention.",
    photo: rashid_hse,
    profile: [
      "Rashid Ali leads health, safety and environment across all MEEC work fronts, implementing job safety analyses, permit compliance and daily toolbox talks.",
      "Rashid Ali is an experienced HSE professional with 5 years of experience in safety management across major industrial, construction, fertilizer, polymer, and automotive projects. He has worked with organizations including Descon Engineering Limited, Geovision Technologies Pvt. Ltd., and Mahar & Brothers Company Ltd., with project exposure at Engro Polymer & Chemicals, Fatima Fertilizer, and Indus Motor Company. He holds a BS-C Civil Technology degree from Islamia University Bahawalpur and an IOSH International Certificate in Occupational Safety and Health (Managing Safely). His expertise includes HSE inspections, risk assessment, toolbox talks, safety inductions, permit-to-work systems, PPE compliance, incident investigation, emergency preparedness, and implementation of site safety requirements. At MashaAllah Engineering Enterprises, his professional approach supports our commitment to maintaining safe, compliant, and accident-prevention-focused operations across all project activities.",
    ],
  },
  {
    slug: "shahwaiz-majeed",
    name: "Shahwaiz Majeed",
    role: "Construction Manager",
    focus: "Shutdown and maintenance scopes, progress and manpower control.",
    photo: shahwaiz,
    profile: [
      "Shahwaiz Majeed manages shutdown, turnaround and routine maintenance scopes where fixed windows and round-the-clock execution are the norm.",
      "Shahwaiz Majeed is an experienced engineering and construction professional with more than 18 years of experience in Mechanical and Civil Construction, particularly within the Oil & Gas, Petrochemical, Fertilizer, and Cement industries in Pakistan and the UAE. His expertise covers piping, storage tanks, steel structures, fabrication & erection, industrial construction, shutdowns, and project execution. With extensive field and leadership experience, he specializes in coordinating teams, resources, construction activities, quality, and HSE requirements. As Project Manager at MashaAllah Engineering Enterprises (MEE), he is committed to delivering projects with safety, quality, efficiency, and client satisfaction.",
    ],
  },
  {
    slug: "zulfiqar",
    name: "Zulfiqar",
    role: "Manager Administration",
    focus: "Administration, logistics, documentation and support functions.",
    photo: zulfiqar,
    profile: [
      "Zulfiqar manages administration and support functions — site logistics, camp and transport arrangements, gate passes, documentation and record keeping.",
      "An experienced and dedicated Administration Professional with extensive experience in the engineering, construction, and industrial sectors. Throughout his professional career, he has developed strong expertise in administrative management, documentation, employee coordination, workforce handling, office operations, record management, and organizational support. Prior to joining MashaAllah Engineering Enterprises, he served with reputable organizations including Descon Engineering and Seven Star Engineering, gaining valuable exposure to professional engineering environments and developing a comprehensive understanding of administrative and operational requirements. At MashaAllah Engineering Enterprises, he is an integral member of the team, responsible for supporting day-to-day administrative activities, coordinating with management and project teams, maintaining records and documentation, facilitating workforce requirements, and ensuring smooth office and site-related administrative operations. His professionalism, organizational capabilities, reliability, and practical industry experience contribute to maintaining an efficient and well-coordinated working environment. His commitment to operational excellence and teamwork makes him a valuable part of the MashaAllah Engineering Enterprises management and support team.",
    ],
  },
  
];

export function getManagerBySlug(slug: string): Manager | undefined {
  return management.find((m) => m.slug.toLowerCase() === slug.toLowerCase());
}

export type OrgBranch = { name: string; role: string; team: string };

/**
 * Corporate management structure exactly as issued by MEEC:
 * CEO -> General Manager -> Manager Projects -> five departments -> teams.
 */
export const orgStructure = {
  top: { name: "Shahid Hameed", role: "Chief Executive Officer" },
  second: { name: "Fayyaz ul Hassan", role: "General Manager" },
  third: { name: "Najam Ali", role: "Manager Projects" },
  branches: [
    { name: "Zulfiqar", role: "Admin", team: "Account Team" },
    { name: "Rashid Ali", role: "Lead HSE", team: "HSE Team" },
    { name: "Shahwaiz Majeed", role: "Project Manager", team: "Execution Team" },
    { name: "Abdul Salam", role: "Manager Machine Shop", team: "Machining Team" },
    {
      name: "Rashid Rizwan",
      role: "Mngr. Estimation and Planning",
      team: "Planning & Estimation Team",
    },
  ] satisfies OrgBranch[],
  functions: [
    "Engineering",
    "Planning",
    "Construction",
    "Fabrication",
    "Erection",
    "Shutdown",
    "Maintenance",
    "Hydrojetting",
    "QHSE",
  ],
};

export const credentials = [
  {
    title: "Pakistan Engineering Council (PEC)",
    text: "MEEC is a licensed constructor/operator registered with the Pakistan Engineering Council, with registered professional engineers and approved specialisation codes.",
  },
  {
    title: "National Tax Number (NTN)",
    text: "Registered with the Federal Board of Revenue and holding an active National Tax Number, enabling compliant contracting and invoicing with corporate clients.",
  },
  {
    title: "Sales Tax Registration",
    text: "Sales tax registered for industrial contracting works, supporting documented procurement and vendor onboarding requirements.",
  },
];
