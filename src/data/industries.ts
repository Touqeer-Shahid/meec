import indOilGas from "@/assets/images/hero/hero-industrial.jpg";
import indFertilizer from "@/assets/images/industries/ind-fertilizer.jpg";
import indPower from "@/assets/images/industries/ind-power.jpg";
import indCement from "@/assets/images/industries/ind-cement.jpg";
import indPublic from "@/assets/images/industries/ind-public.jpg";
import refineryErection from "@/assets/images/projects/pr-refinery-erection.jpeg";
import kilnShell from "@/assets/images/projects/pr-kiln-shell-fabrication.jpeg";
import kilnShellInternal from "@/assets/images/projects/pr-kiln-shell-internal.jpeg";
import rebarDeck from "@/assets/images/projects/pr-rebar-deck.jpeg";
import scaffoldingGrid from "@/assets/images/projects/pr-scaffolding-grid.jpeg";
import civilStructure from "@/assets/images/projects/pr-civil-scaffolding-structure.jpeg";
import shellSection from "@/assets/images/projects/pr-shell-section-site.jpeg";
import vesselFab from "@/assets/images/gallery/g-vessel-fabrication.jpeg";
import vesselGrinding from "@/assets/images/gallery/g-vessel-grinding.jpeg";
import cranePipeLift from "@/assets/images/gallery/g-crane-pipe-lift.jpeg";
import compressorSite from "@/assets/images/gallery/g-compressor-site.jpeg";
import tandemLift from "@/assets/images/gallery/g-tandem-lift.jpeg";

export type Industry = {
  id: string;
  slug: string;
  name: string;
  /** Card + hero one-liner */
  description: string;
  image: string;
  /** Detail page content */
  intro: string;
  overview: string[];
  involvement: { title: string; text: string }[];
  /** Service slugs from src/data/services.ts */
  services: string[];
  clients: string[];
  gallery: { src: string; alt: string }[];
};

export const industries: Industry[] = [
  {
    id: "oil-gas",
    slug: "oil-gas",
    name: "Oil & Gas",
    description: "Piping, pipeline maintenance and shutdown support for process facilities.",
    image: indOilGas,
    intro:
      "MEEC supports refineries, terminals and midstream facilities with mechanical execution inside live hydrocarbon environments — where permits, isolation and hot-work discipline matter as much as the welding itself.",
    overview: [
      "Refinery and terminal work is planned around plant availability. Our teams mobilise against the shutdown or turnaround window, work under permit and hand the scope back with test records and as-built documentation.",
      "Scopes range from plant piping spools, pipeline maintenance and tie-ins through to vessel and column erection, equipment overhauling and heavy lifting under approved lift plans.",
    ],
    involvement: [
      {
        title: "Plant Piping & Tie-ins",
        text: "Spool fabrication, erection, alignment and hydro-testing of process and utility piping systems.",
      },
      {
        title: "Turnaround & Shutdown",
        text: "Round-the-clock manpower and supervision for annual turnarounds (ATA) and planned shutdowns.",
      },
      {
        title: "Static Equipment",
        text: "Vessel, column and exchanger erection, internals work, overhauling and repair.",
      },
      {
        title: "Surface Protection",
        text: "Grit blasting, industrial painting, coating systems and pipe wrapping for corrosion control.",
      },
    ],
    services: ["mechanical", "plant-maintenance", "surface-preparation", "testing"],
    clients: ["National Refinery Limited (NRL)", "TOTAL / PARCO", "Bosicor Pakistan Limited"],
    gallery: [
      { src: refineryErection, alt: "MEEC crew executing erection work at a refinery facility" },
      { src: cranePipeLift, alt: "Crane rigging and lifting a large pipe section on site" },
      { src: vesselFab, alt: "Vessel shell under fabrication on site supports" },
    ],
  },
  {
    id: "fertilizer",
    slug: "fertilizer",
    name: "Fertilizer",
    description: "Mechanical erection, testing and maintenance inside process plants.",
    image: indFertilizer,
    intro:
      "Fertilizer and chemical complexes run continuously, so maintenance windows are tight and fully planned. MEEC provides the supervision, trade teams and equipment to complete mechanical scopes inside those windows.",
    overview: [
      "We work inside operating process plants on piping, static and rotating equipment, structural steel and utility systems — coordinated with plant engineering and executed under the client's permit-to-work system.",
      "Testing and verification are part of the delivery: welds are subjected to RT, UT or DPT where specified, and equipment is functionally tested before handover.",
    ],
    involvement: [
      {
        title: "Equipment Erection & Overhaul",
        text: "Pumps, vessels, columns and rotating equipment installed, aligned, overhauled and tested.",
      },
      {
        title: "Process Piping",
        text: "Fabrication and erection of process, steam and utility piping with documented testing.",
      },
      {
        title: "Structural Fabrication",
        text: "Platforms, pipe racks, supports and access structures fabricated and erected on site.",
      },
      {
        title: "Manpower & Equipment Supply",
        text: "Skilled trade manpower with cranes, compressors and generators mobilised on demand.",
      },
    ],
    services: ["mechanical", "equipment-manpower", "testing", "plant-maintenance"],
    clients: ["Engro Polymer & Chemicals", "Engro Zarkhez", "Synergyco Pvt Ltd"],
    gallery: [
      { src: shellSection, alt: "Fabricated shell section staged at a process plant work front" },
      { src: compressorSite, alt: "Air compressor supporting mechanical work at a plant site" },
      { src: vesselGrinding, alt: "Technician grinding a vessel surface during fabrication" },
    ],
  },
  {
    id: "power",
    slug: "power",
    name: "Power",
    description: "Boiler refractory brickwork, electrical works and equipment repair.",
    image: indPower,
    intro:
      "Power generation assets demand outage work that finishes on time. MEEC delivers boiler-side mechanical works, refractory brickwork, electrical installations and equipment repair for power and captive generation plants.",
    overview: [
      "Outage scopes are prepared in advance — method statements, manpower histograms, rigging studies and inspection plans — so the work front is productive from the first shift.",
      "Our electrical division supports the same plants with HT and LT works, cable laying and terminations, transformer and distribution board installation, and energisation support.",
    ],
    involvement: [
      {
        title: "Boiler & Refractory Works",
        text: "Refractory brickwork, casting, insulation and pressure-part maintenance during outages.",
      },
      {
        title: "Electrical Installations",
        text: "HT/LT systems, cable laying and terminations, transformers and distribution boards.",
      },
      {
        title: "Equipment Repair",
        text: "Overhauling, in-situ repair and precision machining of plant components.",
      },
      {
        title: "Heavy Lifting",
        text: "Crane and boom truck operations under approved lift plans and rigging checks.",
      },
    ],
    services: ["mechanical", "electrical", "machine-shop", "plant-maintenance"],
    clients: ["Sindh Engro Coal Mining Company (SECMC)", "KHTL", "Power Cement Limited"],
    gallery: [
      { src: tandemLift, alt: "Two mobile cranes performing a tandem lift at a plant facility" },
      { src: kilnShellInternal, alt: "Internal view of a fabricated shell during erection works" },
      { src: scaffoldingGrid, alt: "Scaffolding grid erected to provide maintenance access" },
    ],
  },
  {
    id: "cement",
    slug: "cement",
    name: "Cement",
    description: "Kiln brickwork, structural fabrication and plant erection works.",
    image: indCement,
    intro:
      "Cement plants are among the most demanding mechanical environments in the country. MEEC executes kiln, mill and material-handling scopes — from refractory brickwork to heavy structural erection.",
    overview: [
      "We fabricate and replace kiln shell sections, execute refractory brickwork, and erect ducting, chutes, conveyors and structural steel across the pyro and grinding sections.",
      "Work is completed within planned stoppages using our own lifting fleet, welding resources and supervised trade teams, and verified through NDT and dimensional checks.",
    ],
    involvement: [
      {
        title: "Kiln Shell Fabrication",
        text: "Shell section fabrication, replacement, alignment and welding with NDT verification.",
      },
      {
        title: "Refractory Brickwork",
        text: "Kiln and cooler brickwork, casting and insulation carried out to specification.",
      },
      {
        title: "Structural & Material Handling",
        text: "Ducting, chutes, conveyors, pipe racks and platform fabrication and erection.",
      },
      {
        title: "Surface Preparation",
        text: "Blasting, painting and protective coating of fabricated structures and equipment.",
      },
    ],
    services: ["mechanical", "civil", "surface-preparation", "plant-maintenance"],
    clients: ["Power Cement Limited", "Bestway Cement", "Maple Leaf Premium Cement"],
    gallery: [
      { src: kilnShell, alt: "Kiln shell section under fabrication at a cement plant" },
      { src: kilnShellInternal, alt: "Fabricated kiln shell staged for erection" },
      { src: vesselFab, alt: "Heavy fabricated section prepared for installation" },
    ],
  },
  {
    id: "public",
    slug: "public",
    name: "Public Sector",
    description: "Civil structures, road works, trenching and infrastructure projects.",
    image: indPublic,
    intro:
      "For public-sector and housing authority clients, MEEC delivers civil and infrastructure works — reinforced concrete structures, roads, trenching, drainage and boundary works — with documented quality control.",
    overview: [
      "Civil scopes are executed with in-house shuttering, rebar and concreting teams, supported by soil, tensile and concrete strength testing to confirm compliance with specification.",
      "We also deliver associated electrical and mechanical works, allowing infrastructure packages to be handed over complete rather than split across multiple contractors.",
    ],
    involvement: [
      {
        title: "Reinforced Concrete Structures",
        text: "Foundations, slabs, columns and buildings executed to approved drawings.",
      },
      {
        title: "Roads & Trenching",
        text: "Road works, excavation, trenching, backfilling and drainage installation.",
      },
      {
        title: "Material Testing",
        text: "Soil, tensile and concrete strength testing with documented results.",
      },
      {
        title: "Building Services",
        text: "Electrical wiring, lighting, distribution and associated mechanical installations.",
      },
    ],
    services: ["civil", "electrical", "testing", "equipment-manpower"],
    clients: [
      "Pakistan Defence Officers Housing Authority, Karachi",
      "Oil & Gas Development Company Limited",
    ],
    gallery: [
      { src: rebarDeck, alt: "Civil crew working on a rebar-reinforced concrete roof deck" },
      { src: civilStructure, alt: "Reinforced concrete structure under construction with scaffolding" },
      { src: scaffoldingGrid, alt: "Scaffolding and formwork on a civil construction site" },
    ],
  },
];

export const getIndustry = (slug: string) => industries.find((i) => i.slug === slug);
