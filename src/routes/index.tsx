import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { CredentialsSection } from "@/components/credentials";
import {
  EquipmentPreview,
  GalleryPreview,
  QualitySafetyPreview,
} from "@/components/home-previews";
import {
  AboutSection,
  CTASection,
  ClientLogoMarquee,
  Industries,
  
  ProjectGrid,
  ServiceGrid,
  Statistics,
  WhyMeec,
} from "@/components/sections";
import { ButtonLink, SectionHeading } from "@/components/ui-kit";
import { featuredProjects } from "@/data/projects";


export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "MEEC | Industrial Engineering & Construction Services, Pakistan" },
      {
        name: "description",
        content:
          "Masha Allah Engineering Enterprises (MEEC) — multidisciplinary engineering since 2003. Mechanical, electrical, civil, surface preparation, equipment supply and testing services.",
      },
      { property: "og:title", content: "MEEC | Engineering Solutions for Industrial Performance" },
      {
        property: "og:description",
        content:
          "Multidisciplinary engineering, fabrication, erection and industrial services across Pakistan since 2003.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Home() {
  const featured = featuredProjects();

  return (
    <>
      <Hero />
      <AboutSection />
      <Statistics />

      <section className="py-20 lg:py-28">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Services"
              title="Our Engineering Capabilities"
              text="Eight disciplines delivered by one contractor — planned, supervised and executed to industrial standards."
            />
            <ButtonLink to="/services" variant="outline" arrow className="shrink-0">
              View All Services
            </ButtonLink>
          </div>
          <div className="mt-14">
            <ServiceGrid />
          </div>
        </div>
      </section>

      <WhyMeec />
      <QualitySafetyPreview />
      <EquipmentPreview />
      <Industries />

      {/* <section className="py-20 lg:py-28">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Portfolio"
              title="Projects"
              text="Engineering and industrial works currently being delivered by our teams."
            />
            <ButtonLink to="/projects" variant="outline" arrow className="shrink-0">
              View All Projects
            </ButtonLink>
          </div>

          <div className="mt-14">
            <ProjectGrid items={featured} />
          </div>

        </div>
      </section> */}

      <GalleryPreview />
      <CredentialsSection compact />
      <ClientLogoMarquee />

      <CTASection
        title="Engineering Experience You Can Build On."
        text="From plant piping to civil structures, MEEC mobilises the people, equipment and supervision your project needs."
      />
    </>
  );
}
