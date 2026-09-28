import { createFileRoute } from "@tanstack/react-router";
import { CTASection, ServiceGrid } from "@/components/sections";
import { PageHero, Reveal, SectionHeading } from "@/components/ui-kit";
import mechanicalImg from "@/assets/images/services/svc-mechanical.jpg";
import { services } from "@/data/services";

export const Route = createFileRoute("/services/")({
  component: ServicesIndex,
  head: () => ({
    meta: [
      { title: "Engineering Services | Mechanical, Electrical & Civil | MEEC" },
      {
        name: "description",
        content:
          "MEEC engineering capabilities: mechanical, electrical & instrumentation, civil, surface preparation & coating, equipment & manpower supply, testing & inspection, machine shop, plant maintenance, annual turnarounds and heavy lifting.",
      },
      { property: "og:title", content: "Engineering Services | MEEC" },
      {
        property: "og:description",
        content:
          "Ten engineering service areas delivered by one industrial contractor across Pakistan.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

function ServicesIndex() {
  const allCapabilities = services.flatMap((s) => s.capabilities);

  return (
    <>
      <PageHero
        image={mechanicalImg}
        eyebrow="Services"
        title="Our Engineering Capabilities"
        text="Mechanical, electrical & instrumentation and civil disciplines supported by protective coating, equipment and manpower supply, testing and inspection, precision machining, plant maintenance, annual turnarounds and heavy lifting."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Services" }]}
      />

      <section className="py-20 lg:py-24">
        <div className="shell">
          <SectionHeading
            eyebrow="Overview"
            title="One contractor, ten service areas."
            text="Select any service to open its dedicated page with the full scope of capabilities. Each area is delivered by experienced supervision and trade teams, with equipment and testing arranged in-house so scopes stay under a single line of accountability."
            align="center"
          />
          <div className="mt-14">
            <ServiceGrid />
          </div>
        </div>
      </section>

      <section className="gradient-light py-20 lg:py-24">
        <div className="shell">
          <SectionHeading
            eyebrow="Capability Overview"
            title="A closer look at what we execute"
            align="center"
          />
          <ul className="mx-auto mt-12 flex max-w-5xl flex-wrap justify-center gap-2.5">
            {allCapabilities.map((c, i) => (
              <Reveal as="li" key={`${c}-${i}`} delay={Math.min(i * 18, 500)}>
                <span className="inline-block rounded-lg border border-white/80 bg-white/75 px-4 py-2 text-sm font-semibold text-primary-dark backdrop-blur-sm">
                  {c}
                </span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CTASection title="Need a scope covering multiple disciplines?" />
    </>
  );
}
