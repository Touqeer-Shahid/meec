import { createFileRoute } from "@tanstack/react-router";
import { CTASection, ClientGrid } from "@/components/sections";
import { PageHero, SectionHeading } from "@/components/ui-kit";
import heroImg from "@/assets/images/industries/ind-cement.jpg";

export const Route = createFileRoute("/clients")({
  component: Clients,
  head: () => ({
    meta: [
      { title: "Our Clients | Trusted by Industry Leaders | MEEC" },
      {
        name: "description",
        content:
          "MEEC serves established industrial and public-sector organisations across Pakistan, including cement, oil & gas, fertilizer, power and manufacturing clients.",
      },
      { property: "og:title", content: "Our Clients | MEEC" },
      {
        property: "og:description",
        content: "Industrial and public-sector organisations that work with MEEC.",
      },
      { property: "og:url", content: "/clients" },
    ],
    links: [{ rel: "canonical", href: "/clients" }],
  }),
});

function Clients() {
  return (
    <>
      <PageHero
        image={heroImg}
        eyebrow="Clients"
        title="Trusted by Industry Leaders"
        text="MEEC works with established industrial groups and public-sector organisations across Pakistan."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Clients" }]}
      />

      <section className="py-20 lg:py-28">
        <div className="shell">
          <SectionHeading
            eyebrow="Client Portfolio"
            title="Organisations we have served"
            text="Long-term industrial relationships built on reliable execution and quality-focused delivery."
            align="center"
          />
          <div className="mt-14">
            <ClientGrid />
          </div>
        </div>
      </section>

      <CTASection title="Join the organisations that rely on MEEC" />
    </>
  );
}
