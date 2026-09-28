export type ProjectStatus = "Ongoing" | "Completed";

export type Project = {
  id: string;
  slug: string;
  title: string;
  category: string;
  status: ProjectStatus;
  client?: string;
  location?: string;
  description: string;
  scope: string[];
  /** Service slugs from src/data/services.ts */
  services: string[];
  images: string[];
  featured?: boolean;
};

/**
 * PROJECT PORTFOLIO — awaiting verified content from MEEC.
 *
 * No projects are invented here. Add verified entries to this array and the
 * homepage section, /projects listing, filters and /projects/[slug] detail
 * pages will populate automatically. Example shape:
 *
 * {
 *   id: "p1",
 *   slug: "plant-piping-upgrade",
 *   title: "Plant Piping Upgrade",
 *   category: "Mechanical",
 *   status: "Completed",
 *   client: "Client name",
 *   location: "Karachi, Pakistan",
 *   description: "Verified project overview.",
 *   scope: ["Verified scope item"],
 *   services: ["mechanical", "testing"],
 *   images: ["/path/to/image.jpg"],
 *   featured: true,
 * }
 */
export const projects: Project[] = [];

export const featuredProjects = () => projects.filter((p) => p.featured).slice(0, 3);
export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
