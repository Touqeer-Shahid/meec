export const company = {
  name: "Masha Allah Engineering Enterprises",
  short: "MEEC",
  founded: 2003,
  phone: "+92 300 3600203",
  phoneHref: "+923003600203",
  email: "info@meec.com.pk",
  altEmail: "shahidmes1@gmail.com",
  headOffice: "R-82, Gohar Green City, Malir, Karachi, Sindh, Pakistan",
  workshop: "Opposite FAST University, Yousuf Goth, Karachi",
};

export type Stat = { value: number; suffix: string; label: string };

/** Client-confirmed company figures. */
export const stats: Stat[] = [
  { value: 23, suffix: "+", label: "Years of Experience" },
  { value: 100, suffix: "+", label: "Clients" },
  { value: 400, suffix: "+", label: "Projects Completed" },
  { value: 500, suffix: "+", label: "Man Power" },
];

export { industries, getIndustry, type Industry } from "@/data/industries";


export const values = [
  { title: "Integrity", text: "Straightforward commitments and transparent execution." },
  { title: "Quality", text: "Workmanship verified through inspection and testing." },
  { title: "Safety", text: "Safety-conscious planning on every industrial site." },
  { title: "Reliability", text: "Resources mobilised when the plant needs them." },
  { title: "Professionalism", text: "Experienced supervision and clear documentation." },
];

export const whyMeec = [
  {
    title: "Established Experience",
    text: "Operating since 2003 across Pakistan's industrial base.",
    icon: "history",
  },
  {
    title: "Multidisciplinary Expertise",
    text: "Mechanical, electrical, civil and specialist works under one contractor.",
    icon: "layers",
  },
  {
    title: "Industrial Capability",
    text: "Experience working inside live process and manufacturing environments.",
    icon: "factory",
  },
  {
    title: "Professional Execution",
    text: "Planned mobilisation, experienced supervision, reliable delivery.",
    icon: "clipboard",
  },
  {
    title: "Quality Focus",
    text: "Quality-oriented workmanship supported by in-house testing services.",
    icon: "badge",
  },
  {
    title: "Safety",
    text: "Safety-conscious operations and site discipline as standard practice.",
    icon: "shield",
  },
];
