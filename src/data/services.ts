import mechanicalImg from "@/assets/images/services/svc-mechanical.jpg";
import electricalImg from "@/assets/images/services/svc-electrical.jpg";
import civilImg from "@/assets/images/services/svc-civil.jpg";
import surfaceImg from "@/assets/images/services/svc-surface.jpg";
import equipmentImg from "@/assets/images/services/svc-equipment.jpg";
import testingImg from "@/assets/images/services/svc-testing.jpg";
import machineShopAsset from "@/assets/images/services/svg_machine_shop.png";
import plantMaintenanceAsset from "@/assets/images/projects/pr-refinery-erection.jpeg";
import ataAsset from "@/assets/images/projects/pr-scaffolding-grid.jpeg";
import liftingAsset from "@/assets/images/projects/pr-shell-section-site.jpeg";

/** A block of client-provided content: optional heading, paragraphs and a list. */
export type ServiceBlock = {
  heading?: string;
  paragraphs?: string[];
  items?: string[];
};

export type Service = {
  id: string;
  slug: string;
  number: string;
  title: string;
  icon: "wrench" | "zap" | "building" | "spray" | "truck" | "gauge" | "cog" | "hardhat";
  shortDescription: string;
  /** Opening paragraphs, exactly as supplied by MEEC. */
  intro: string[];
  /** Detailed content blocks, exactly as supplied by MEEC. */
  blocks: ServiceBlock[];
  /** Flat capability list (used for overview chips and summaries). */
  capabilities: string[];
  image: string;
};

const build = (
  s: Omit<Service, "capabilities"> & { capabilities?: string[] },
): Service => ({
  ...s,
  capabilities: s.capabilities ?? s.blocks.flatMap((b) => b.items ?? []),
});

export const services: Service[] = [
  build({
    id: "mechanical",
    slug: "mechanical",
    number: "01",
    title: "Mechanical Engineering Services",
    icon: "wrench",
    shortDescription:
      "Complete mechanical engineering solutions — fabrication, erection, installation, maintenance, repair, modification and commissioning support.",
    intro: [
      "MashaAllah Engineering Enterprises offers complete mechanical engineering solutions for industrial plants, production facilities, process units, workshops, and infrastructure projects.",
      "Our mechanical capabilities include fabrication, erection, installation, maintenance, repair, modification, and commissioning support for a wide range of industrial equipment and systems.",
    ],
    blocks: [
      {
        heading: "Our Mechanical Services Include",
        items: [
          "Structural and mechanical fabrication",
          "Equipment fabrication and installation",
          "Piping fabrication and erection",
          "Process piping installation",
          "Storage tank fabrication and erection",
          "Pressure vessel installation and maintenance support",
          "Heat exchanger installation and maintenance support",
          "Pumps, compressors and mechanical equipment installation",
          "Valves installation and replacement",
          "Mechanical equipment alignment",
          "Rotating equipment maintenance",
          "Static equipment maintenance",
          "Steel structure fabrication and erection",
          "Platforms, ladders, stairways and walkways",
          "Pipe supports and structural supports",
          "Industrial ducting and chutes",
          "Equipment foundations and mechanical installation coordination",
          "Shutdown and turnaround mechanical works",
          "Plant modification and revamping",
          "Preventive and corrective maintenance",
          "Mechanical repair and troubleshooting",
          "On-site modification and repair works",
        ],
      },
      {
        paragraphs: [
          "Our experienced mechanical teams are capable of executing projects from shop fabrication through site installation, testing, commissioning support, and final handover.",
        ],
      },
    ],
    image: mechanicalImg,
  }),
  build({
    id: "electrical",
    slug: "electrical",
    number: "02",
    title: "Electrical & Instrumentation Services",
    icon: "zap",
    shortDescription:
      "Electrical and instrumentation installation, maintenance, troubleshooting, modification and commissioning activities for industrial plants.",
    intro: [
      "We provide electrical and instrumentation services for industrial plants, manufacturing facilities, process industries, power systems, and infrastructure projects.",
      "Our electrical teams support installation, maintenance, troubleshooting, modification, and commissioning activities while maintaining strict safety and quality standards.",
    ],
    blocks: [
      {
        heading: "Electrical Services",
        items: [
          "Electrical equipment installation",
          "Power cable laying and termination",
          "Cable tray installation",
          "Cable support and routing",
          "Distribution board installation",
          "Electrical panel installation",
          "Motor installation and connection",
          "Industrial lighting installation",
          "Earthing and grounding systems",
          "Cable gland and termination works",
          "Electrical maintenance",
          "Electrical troubleshooting",
          "Power distribution works",
          "Industrial electrical modification",
          "Electrical equipment testing support",
          "Preventive and corrective electrical maintenance",
        ],
      },
      {
        heading: "Instrumentation Services",
        items: [
          "Instrument installation",
          "Instrument tubing",
          "Instrument cable installation",
          "Junction box installation",
          "Instrument calibration support",
          "Control valve installation",
          "Pressure, temperature and flow instrument installation",
          "Instrument loop checking",
          "Instrument commissioning support",
          "Field instrumentation maintenance",
          "Control system installation support",
          "Shutdown and turnaround instrumentation activities",
        ],
      },
      {
        paragraphs: [
          "Our Electrical & Instrumentation teams work closely with mechanical and process teams to ensure smooth integration of plant systems.",
        ],
      },
    ],
    image: electricalImg,
  }),
  build({
    id: "civil",
    slug: "civil",
    number: "03",
    title: "Civil Engineering Services",
    icon: "building",
    shortDescription:
      "Civil construction and industrial infrastructure services supporting new projects, plant expansions, maintenance and facility modifications.",
    intro: [
      "MashaAllah Engineering Enterprises provides civil construction and industrial infrastructure services supporting new projects, plant expansions, maintenance activities, and facility modifications.",
      "Our civil teams are experienced in executing industrial civil works with a strong focus on durability, accuracy, safety, and timely completion.",
    ],
    blocks: [
      {
        heading: "Our Civil Services Include",
        items: [
          "Industrial civil construction",
          "Concrete works",
          "Equipment foundations",
          "Machinery foundations",
          "RCC structures",
          "Reinforcement works",
          "Formwork and shuttering",
          "Masonry works",
          "Flooring works",
          "Industrial platforms",
          "Roads and pathways",
          "Drainage systems",
          "Boundary walls",
          "Structural foundations",
          "Pipe rack foundations",
          "Equipment support foundations",
          "Maintenance and repair of civil structures",
          "Plant infrastructure modification",
          "Site development works",
          "Demolition and reconstruction works",
        ],
      },
      {
        paragraphs: [
          "We coordinate civil activities with mechanical, electrical, and other disciplines to ensure efficient execution without disrupting critical plant operations.",
        ],
      },
    ],
    image: civilImg,
  }),
  build({
    id: "surface-preparation",
    slug: "surface-preparation",
    number: "04",
    title: "Surface Preparation & Protective Coating",
    icon: "spray",
    shortDescription:
      "Blasting, painting and protective coating for industrial equipment, structures, pipelines, tanks and steel components.",
    intro: [
      "We provide professional surface preparation, blasting, painting, and protective coating services for industrial equipment, structures, pipelines, tanks, and steel components.",
      "Our services are designed to protect assets against corrosion, environmental exposure, chemicals, moisture, and industrial operating conditions.",
    ],
    blocks: [
      {
        heading: "Our Surface Preparation Services Include",
        items: [
          "Abrasive blasting",
          "Grit blasting",
          "Mechanical surface preparation",
          "Power-tool cleaning",
          "Surface cleaning and preparation",
          "Rust and corrosion removal",
          "Industrial painting",
          "Protective coating application",
          "Primer application",
          "Intermediate coating",
          "Final/top coating",
          "Tank coating",
          "Pipeline coating",
          "Structural steel coating",
          "Equipment coating",
          "Pipe and fitting coating",
          "Maintenance painting",
          "Touch-up and repair coating",
          "Coating inspection and quality control",
        ],
      },
      {
        paragraphs: [
          "We emphasize proper surface preparation, coating system compliance, environmental controls, and inspection requirements to achieve long-lasting protection.",
        ],
      },
    ],
    image: surfaceImg,
  }),
  build({
    id: "equipment-manpower",
    slug: "equipment-manpower",
    number: "05",
    title: "Equipment & Manpower Supply",
    icon: "truck",
    shortDescription:
      "Industrial equipment, skilled manpower and technical personnel for construction, maintenance, shutdown and turnaround requirements.",
    intro: [
      "MashaAllah Engineering Enterprises provides reliable industrial equipment, skilled manpower, technical personnel, and workforce solutions to support construction, maintenance, shutdown, turnaround, and operational requirements.",
      "Our ability to mobilize manpower and equipment enables clients to maintain project schedules and respond quickly to changing site requirements.",
    ],
    blocks: [
      {
        heading: "Equipment Supply",
        items: [
          "Cranes",
          "Boom trucks",
          "Loaders",
          "Loading vehicles",
          "Compressors",
          "Generators and supporting equipment",
          "Welding equipment",
          "Fabrication equipment",
          "Lifting and handling equipment",
          "Transportation vehicles",
          "Construction support equipment",
          "Specialized industrial equipment",
        ],
      },
      {
        heading: "Manpower Supply",
        items: [
          "Mechanical supervisors",
          "Mechanical technicians",
          "Welders",
          "Fabricators",
          "Fitters",
          "Millwrights",
          "Riggers",
          "Electricians",
          "Instrument technicians",
          "Civil workers",
          "Painters",
          "Blasters",
          "Helpers",
          "Safety personnel",
          "Skilled and semi-skilled workforce",
          "Project support staff",
        ],
      },
      {
        paragraphs: [
          "We can mobilize manpower and equipment according to project scope, duration, location, shutdown requirements, and client specifications.",
        ],
      },
    ],
    image: equipmentImg,
  }),
  build({
    id: "testing",
    slug: "testing",
    number: "06",
    title: "Testing, Inspection & Quality Services",
    icon: "gauge",
    shortDescription:
      "Testing and inspection support verifying the integrity, reliability, dimensional accuracy and quality of industrial works.",
    intro: [
      "Quality assurance and inspection are integral parts of our engineering operations. We provide testing and inspection support to verify the integrity, reliability, dimensional accuracy, and quality of industrial works.",
    ],
    blocks: [
      {
        heading: "Our Testing & Inspection Support Includes",
        items: [
          "Visual inspection",
          "Dimensional inspection",
          "Welding inspection support",
          "Weld quality inspection",
          "Pressure testing",
          "Hydrostatic testing",
          "Pneumatic testing support",
          "Leak testing",
          "Pipeline testing support",
          "Equipment inspection",
          "Coating inspection",
          "Surface profile inspection",
          "Thickness measurement support",
          "Alignment and level checking",
          "Fabrication inspection",
          "Installation inspection",
          "Pre-commissioning inspection",
          "Quality documentation",
          "Inspection reports and records",
        ],
      },
      {
        paragraphs: [
          "Where specialized third-party inspection or NDT is required, we coordinate activities according to applicable project specifications and client requirements.",
          "Our objective is to ensure that every stage of work meets the required technical specifications, quality standards, safety requirements, and client expectations.",
        ],
      },
    ],
    image: testingImg,
  }),
  build({
    id: "machine-shop",
    slug: "machine-shop",
    number: "07",
    title: "Machine Shop & Precision Machining",
    icon: "cog",
    shortDescription:
      "Conventional and precision machining for industrial components, replacement parts, repair works and customized engineering requirements.",
    intro: [
      "Our Machine Shop provides conventional and precision machining services for industrial components, replacement parts, repair works, and customized engineering requirements.",
      "With experienced machinists and skilled technical personnel, we manufacture and repair components according to required dimensions, tolerances, drawings, and site requirements.",
    ],
    blocks: [
      {
        heading: "Our Machining Capabilities Include",
        items: [
          "Lathe turning",
          "Facing",
          "Boring",
          "Drilling",
          "Milling",
          "Threading",
          "Keyway cutting",
          "Shaft machining",
          "Bush and sleeve machining",
          "Flange machining",
          "Grinding",
          "Component repair",
          "Customized component manufacturing",
          "On-site machining support",
          "Dimensional inspection",
          "Precision measurement",
          "Equipment repair machining",
          "Breakdown component manufacturing",
          "Reverse-engineering-based component manufacturing",
        ],
      },
      {
        heading: "Precision Machining",
        paragraphs: [
          "Our precision machining capabilities support industries where accuracy, dimensional control, proper fitment, and reliable performance are critical.",
          "We can manufacture or repair components based on:",
        ],
        items: [
          "Engineering drawings",
          "Samples",
          "Existing components",
          "Client specifications",
          "Required dimensions",
          "Site measurements",
        ],
      },
      {
        paragraphs: [
          "Our machine shop is particularly valuable for urgent breakdown maintenance and customized replacement components, helping reduce equipment downtime and improve plant reliability.",
        ],
      },
    ],
    image: machineShopAsset,
  }),
  build({
    id: "plant-maintenance",
    slug: "plant-maintenance",
    number: "08",
    title: "Plant Maintenance & Industrial Maintenance",
    icon: "hardhat",
    shortDescription:
      "Comprehensive plant maintenance improving equipment reliability, reducing downtime and maintaining safe, efficient plant operations.",
    intro: [
      "MashaAllah Engineering Enterprises provides comprehensive plant maintenance services designed to improve equipment reliability, reduce downtime, and maintain safe and efficient plant operations.",
      "We support both routine maintenance and major shutdown/turnaround activities.",
    ],
    blocks: [
      {
        heading: "Plant Maintenance Services Include",
        items: [
          "Preventive maintenance",
          "Corrective maintenance",
          "Breakdown maintenance",
          "Mechanical maintenance",
          "Electrical maintenance",
          "Instrumentation maintenance",
          "Equipment maintenance",
          "Piping maintenance",
          "Structural maintenance",
          "Tank maintenance",
          "Valve maintenance",
          "Pump maintenance",
          "Compressor maintenance",
          "Rotating equipment support",
          "Static equipment maintenance",
          "Plant modification",
          "Equipment replacement",
          "Repair and refurbishment",
          "Shutdown maintenance",
          "Turnaround maintenance",
          "Emergency maintenance support",
        ],
      },
      {
        heading: "Shutdown & Turnaround Support",
        paragraphs: [
          "Our multidisciplinary teams can be mobilized for planned shutdowns and turnarounds where rapid execution, manpower availability, equipment mobilization, safety, and schedule control are critical.",
          "We coordinate mechanical, electrical, civil, instrumentation, fabrication, inspection, and lifting activities to provide an integrated shutdown solution.",
        ],
      },
    ],
    image: plantMaintenanceAsset,
  }),
  build({
    id: "ata",
    slug: "ata",
    number: "09",
    title: "Shutdown & Turnaround Mechanical Works",
    icon: "hardhat",
    shortDescription:
      "Annual Turnaround (ATA) and major shutdown support with strong planning, rapid mobilization and strict adherence to safety procedures.",
    intro: [
      "MashaAllah Engineering Enterprises has the capability to support Annual Turnaround (ATA) and major shutdown projects across industrial facilities.",
      "Turnaround projects require strong planning, experienced manpower, rapid mobilization, effective coordination, and strict adherence to safety procedures.",
    ],
    blocks: [
      {
        heading: "Our ATA Capabilities Include",
        items: [
          "Shutdown planning support",
          "Pre-shutdown preparation",
          "Equipment isolation support",
          "Mechanical maintenance",
          "Piping works",
          "Valve maintenance",
          "Equipment dismantling and installation",
          "Fabrication and modification",
          "Structural works",
          "Electrical maintenance",
          "Instrumentation activities",
          "Inspection and testing",
          "Surface preparation and painting",
          "Heavy lifting support",
          "Equipment replacement",
          "Plant modification",
          "Reinstatement activities",
          "Pre-commissioning support",
          "Post-maintenance inspection",
          "Emergency breakdown support",
        ],
      },
      {
        paragraphs: [
          "Our multidisciplinary approach allows us to provide single-window project support during critical shutdown and turnaround periods.",
        ],
      },
    ],
    image: ataAsset,
  }),
  build({
    id: "heavy-lifting",
    slug: "heavy-lifting",
    number: "10",
    title: "Heavy Lifting & Rigging",
    icon: "truck",
    shortDescription:
      "Heavy lifting and material handling for industrial construction, plant maintenance, equipment installation and specialized lifting operations.",
    intro: [
      "We provide heavy lifting and material handling solutions for industrial construction, plant maintenance, equipment installation, shutdowns, and specialized lifting operations.",
      "Our lifting capabilities include the mobilization of suitable lifting equipment and trained personnel according to project requirements.",
    ],
    blocks: [
      {
        heading: "Heavy Lifting Services Include",
        items: [
          "Heavy equipment lifting",
          "Industrial equipment installation",
          "Equipment shifting",
          "Equipment loading and unloading",
          "Crane lifting operations",
          "Machinery positioning",
          "Structural lifting",
          "Tank lifting",
          "Vessel lifting support",
          "Pipe and structural material handling",
          "Plant equipment relocation",
          "Rigging operations",
          "Heavy material handling",
          "Transportation and lifting coordination",
          "Shutdown lifting support",
          "Site logistics and lifting support",
        ],
      },
      {
        paragraphs: [
          "Our available lifting and support fleet includes equipment such as 35-ton cranes, loaders, boom trucks, loading vehicles, compressors, and other project-support equipment.",
          "All lifting activities are planned and executed with emphasis on safe lifting practices, proper rigging, competent manpower, equipment suitability, and site-specific requirements.",
        ],
      },
    ],
    image: liftingAsset,
  }),
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
