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
import p9 from "@/assets/images/gallery/post10.jfif";
import p10 from "@/assets/images/gallery/post11.jfif";
import p11 from "@/assets/images/gallery/post12.jfif";
import p12 from "@/assets/images/gallery/post13.jfif";
import p13 from "@/assets/images/gallery/post14.jfif";
import p14 from "@/assets/images/gallery/post15.jfif";
import p15 from "@/assets/images/gallery/post16.jfif";
import p16 from "@/assets/images/gallery/post17.jfif";
import p17 from "@/assets/images/gallery/post18.jfif";
import p18 from "@/assets/images/gallery/post19.jfif";
import p19 from "@/assets/images/gallery/post20.jfif";
import p20 from "@/assets/images/gallery/post21.jfif";
import p21 from "@/assets/images/gallery/post22.jfif";
import p22 from "@/assets/images/gallery/post23.jfif";
import p23 from "@/assets/images/gallery/post24.jfif";
import p24 from "@/assets/images/gallery/post25.jfif";
import p25 from "@/assets/images/gallery/post26.jfif";
import p26 from "@/assets/images/gallery/post27.jfif";
import p27 from "@/assets/images/gallery/post28.jfif";
import p28 from "@/assets/images/gallery/post29.jfif";
import p29 from "@/assets/images/gallery/post30.jfif";
import p30 from "@/assets/images/gallery/post31.jfif";
import p31 from "@/assets/images/gallery/post32.jfif";
import p32 from "@/assets/images/gallery/post33.jfif";
import p33 from "@/assets/images/gallery/post34.jfif";
import p34 from "@/assets/images/gallery/post35.jfif";
import p35 from "@/assets/images/gallery/post36.jfif";
import p36 from "@/assets/images/gallery/post37.jfif";
import p37 from "@/assets/images/gallery/post38.jfif";
import p38 from "@/assets/images/gallery/post39.jfif";
import p39 from "@/assets/images/gallery/post40.jfif";
import p40 from "@/assets/images/gallery/post41.jfif";
import p41 from "@/assets/images/gallery/post42.jfif";
import p42 from "@/assets/images/gallery/post43.jfif";
import p43 from "@/assets/images/gallery/post44.jfif";
import p44 from "@/assets/images/gallery/post45.jfif";
import p45 from "@/assets/images/gallery/post46.jfif";
import p46 from "@/assets/images/gallery/post47.jfif";
import p47 from "@/assets/images/gallery/post48.jfif";
import p48 from "@/assets/images/gallery/post49.jfif";
import p49 from "@/assets/images/gallery/post50.jfif";
import p50 from "@/assets/images/gallery/post51.jfif";
import p51 from "@/assets/images/gallery/post52.jfif";
import p52 from "@/assets/images/gallery/post53.jfif";
import p53 from "@/assets/images/gallery/post54.jfif";
import p54 from "@/assets/images/gallery/post55.jfif";
import p55 from "@/assets/images/gallery/post56.jfif";
import p56 from "@/assets/images/gallery/post57.jfif";

export const galleryCategories = ["All", "Videos"] as const;
export type GalleryCategory = (typeof galleryCategories)[number];

export type GalleryItem = {
  src: string;
  alt: string;
  // Items keep their own tags; only "All" and "Videos" are shown as filter tabs.
  category: "Projects" | "Equipment" | "HSE" | "Team" | "Videos";
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
  // {
  //   src: cranePipeLift,
  //   alt: "Crane rigging and lifting a large pipe section with supervision on site",
  //   category: "Equipment",
  // },
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
  {
    src: p9,
    alt: "",
    category: "Team",
  },
    {
    src: p10,
    alt: "",
    category: "Team",
  },
  {
    src: p11,
    alt: "",
    category: "Team",
  },
  {
    src: p12,
    alt: "",
    category: "Team",
  },
  {
    src: p13,
    alt: "",
    category: "Team",
  },
  {
    src: p14,
    alt: "",
    category: "Team",
  },
  // {
  //   src: p15,
  //   alt: "",
  //   category: "Team",
  // },
  {
    src: p16,
    alt: "",
    category: "Team",
  },
  {
    src: p17,
    alt: "",
    category: "Team",
  },
  {
    src: p18,
    alt: "",
    category: "Team",
  },
  {
    src: p19,
    alt: "",
    category: "Team",
  },
  {
    src: p20,
    alt: "",
    category: "Team",
  },
  {
    src: p21,
    alt: "",
    category: "Team",
  },
  {
    src: p22,
    alt: "",
    category: "Team",
  },
  {
    src: p23,
    alt: "",
    category: "Team",
  },
  {
    src: p24,
    alt: "",
    category: "Team",
  },
  {
    src: p25,
    alt: "",
    category: "Team",
  },
  {
    src: p26,
    alt: "",
    category: "Team",
  },
  {
    src: p27,
    alt: "",
    category: "Team",
  },
  {
    src: p28,
    alt: "",
    category: "Team",
  },
  {
    src: p29,
    alt: "",
    category: "Team",
  },
  {
    src: p30,
    alt: "",
    category: "Team",
  },
  {
    src: p31,
    alt: "",
    category: "Team",
  },
  {
    src: p32,
    alt: "",
    category: "Team",
  },
  {
    src: p33,
    alt: "",
    category: "Team",
  },
  {
    src: p34,
    alt: "",
    category: "Team",
  },
  {
    src: p35,
    alt: "",
    category: "Team",
  },
  {
    src: p36,
    alt: "",
    category: "Team",
  },
  {
    src: p37,
    alt: "",
    category: "Team",
  },
  {
    src: p38,
    alt: "",
    category: "Team",
  },
  {
    src: p39,
    alt: "",
    category: "Team",
  },
  {
    src: p40,
    alt: "",
    category: "Team",
  },
  {
    src: p41,
    alt: "",
    category: "Team",
  },
  {
    src: p42,
    alt: "",
    category: "Team",
  },
  {
    src: p43,
    alt: "",
    category: "Team",
  },
  {
    src: p44,
    alt: "",
    category: "Team",
  },
    {
    src: p45,
    alt: "",
    category: "Team",
  },
  {
    src: p46,
    alt: "",
    category: "Team",
  },
  {
    src: p47,
    alt: "",
    category: "Team",
  },
  {
    src: p48,
    alt: "",
    category: "Team",
  },
  {
    src: p49,
    alt: "",
    category: "Team",
  },
  {
    src: p50,
    alt: "",
    category: "Team",
  },
  {
    src: p51,
    alt: "",
    category: "Team",
  },
  {
    src: p52,
    alt: "",
    category: "Team",
  },
  {
    src: p53,
    alt: "",
    category: "Team",
  },
  {
    src: p54,
    alt: "",
    category: "Team",
  },
  {
    src: p55,
    alt: "",
    category: "Team",
  },
  {
    src: p56,
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
