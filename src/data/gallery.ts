import craneLift from "@/assets/images/gallery/g-crane-lift.jpg";
import shellFab from "@/assets/images/gallery/g-shell-fabrication.jpg";
import scaffolding from "@/assets/images/gallery/g-scaffolding.jpg";
import rebar from "@/assets/images/gallery/g-rebar-slab.jpg";
import compressorSite from "@/assets/images/gallery/g-compressor-site.jpeg";
import equipmentYard from "@/assets/images/gallery/g-equipment-yard.jpeg";
import cranePipeLift from "@/assets/images/gallery/g-crane-pipe-lift.jpeg";
import safetyBoard from "@/assets/images/gallery/g-site-safety-board.jpeg";
import award from "@/assets/images/gallery/g-award-ceremony.jpeg";
import vesselFab from "@/assets/images/gallery/g-vessel-fabrication.jpeg";
import vesselGrinding from "@/assets/images/gallery/g-vessel-grinding.jpeg";
import crawlerCrane from "@/assets/images/gallery/g-crawler-crane.jpeg";
import companyBus from "@/assets/images/gallery/g-company-bus.jpeg";
import teamOnsite from "@/assets/images/gallery/g-team-onsite.jpeg";
import toolbox from "@/assets/images/gallery/g-hse-toolbox-talk.jpeg";
import tandemLift from "@/assets/images/gallery/g-tandem-lift.jpeg";
import strength_board from "@/assets/images/core_values/strength.jpeg";
import mission_board from "@/assets/images/core_values/mission.jpeg";
import philosophy_board from "@/assets/images/core_values/philosophy.jpeg";
import vision_board from "@/assets/images/core_values/vision.jpeg";
import p1 from "@/assets/images/gallery/post1.jpeg";
import p2 from "@/assets/images/gallery/post2.jpeg";
import p3 from "@/assets/images/gallery/post3.mp4";
import p4 from "@/assets/images/gallery/post4.jpeg";
import p5 from "@/assets/images/gallery/post5.jpeg";
import p6 from "@/assets/images/gallery/post6.jpeg";
import p7 from "@/assets/images/gallery/post8.jpeg";
import p8 from "@/assets/images/gallery/post9.jpeg";

export const galleryCategories = ["All", "Videos"] as const;
export type GalleryCategory = (typeof galleryCategories)[number];

export type GalleryItem = {
  src: string;
  alt: string;
  category: Exclude<GalleryCategory, "All">;
};

export const gallery: GalleryItem[] = [
  {
    src: craneLift,
    alt: "Mobile crane lifting a fabricated cylindrical tank at an industrial site",
    category: "Projects",
  },
  {
    src: shellFab,
    alt: "Large fabricated pressure vessel shell staged at the fabrication yard",
    category: "Projects",
  },
  {
    src: scaffolding,
    alt: "Erected scaffolding structure supporting plant maintenance access",
    category: "Projects",
  },
  {
    src: rebar,
    alt: "Civil crew working on a rebar-reinforced concrete roof deck",
    category: "Projects",
  },
  {
    src: tandemLift,
    alt: "Two mobile cranes performing a tandem lift at a plant facility",
    category: "Projects",
  },
  {
    src: vesselFab,
    alt: "Vessel shell under fabrication on site supports",
    category: "Projects",
  },
  {
    src: vesselGrinding,
    alt: "Technician in protective equipment grinding a vessel surface",
    category: "Projects",
  },
  {
    src: cranePipeLift,
    alt: "Crane rigging and lifting a large pipe section with supervision on site",
    category: "Equipment",
  },
  {
    src: crawlerCrane,
    alt: "Crawler crane positioned for a heavy lifting operation",
    category: "Equipment",
  },
  {
    src: compressorSite,
    alt: "MEEC air compressor unit deployed at a project site",
    category: "Equipment",
  },
  {
    src: equipmentYard,
    alt: "Equipment and lifting machinery staged in the MEEC yard",
    category: "Equipment",
  },
  {
    src: companyBus,
    alt: "MEEC company transport bus used for daily crew movement",
    category: "Equipment",
  },
  {
    src: safetyBoard,
    alt: "Mandatory site safety signage board at the MEEC workshop entrance",
    category: "HSE",
  },
  {
    src: toolbox,
    alt: "Workers in hard hats attending an HSE toolbox talk session",
    category: "HSE",
  },
  {
    src: award,
    alt: "MEEC management presenting a recognition certificate to a team member",
    category: "Team",
  },
  {
    src: teamOnsite,
    alt: "MEEC trade team assembled at a plant work front",
    category: "Team",
  },
  {
    src: p1,
    alt: "",
    category: "Team",
  },
  {
    src: p2,
    alt: "",
    category: "Projects",
  },
  // {
  //   src: p3,
  //   alt: "",
  //   category: "Projects",
  // },
  {
    src: p4,
    alt: "",
    category: "Team",
  },
  {
    src: p5,
    alt: "",
    category: "Team",
  },
  {
    src: p6,
    alt: "",
    category: "Team",
  },
  {
    src: p7,
    alt: "",
    category: "Team",
  },
  {
    src: p8,
    alt: "",
    category: "Team",
  },
  // {
  //   src: vision_board,
  //   alt: "Our Vision",
  //   category: "Team",
  // },
  // {
  //   src: mission_board,
  //   alt: "Our Mission",
  //   category: "Team",
  // },
  // {
  //   src: philosophy_board,
  //   alt: "Our Philosophy",
  //   category: "Team",
  // },
  // {
  //   src: strength_board,
  //   alt: "Our Strength",
  //   category: "Team",
  // },
];
