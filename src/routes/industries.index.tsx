import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/images/hero/hero-industrial.jpg";
import { CTASection } from "@/components/sections";
import { PageHero, Reveal, SectionHeading } from "@/components/ui-kit";
import { industries } from "@/data/industries";

export const Route = createFileRoute("/industries/")({
  component: IndustriesPage,
  head: () => ({
    meta: [
      { title: "Industries We Serve | MEEC Engineering Pakistan" },
      {
        name: "description",
        content:
          "MEEC delivers mechanical, civil and maintenance execution across oil & gas, fertilizer, power, cement and public sector plants in Pakistan.",
      },
      { property: "og:title", content: "Industries We Serve | MEEC" },
      {
        property: "og:description",
        content: "Sector experience across oil & gas, fertilizer, power, cement and public sector.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
});

function IndustriesPage() {
  return (
    <>
      <PageHero
        image={heroImg}
        eyebrow="Sectors"
        title="Industries We Serve"
        text="Experience across the industrial environments where precision, safety and uptime matter."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Industries" }]}
      />

      <section className="py-20 lg:py-28">
        <div className="shell">
          <SectionHeading
            eyebrow="Sector expertise"
            title="Five sectors, one execution standard."
            text="Select a sector to see the scopes MEEC delivers, the clients we serve and site imagery."
          />
          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind, i) => (
              <Reveal as="li" key={ind.id} delay={i * 70}>
                <Link
                  to="/industries/$id"
                  params={{ id: ind.id }}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-soft transition-all duration-400 hover:-translate-y-1.5 hover:border-primary/45 hover:shadow-lift"
                >
                  <img
                    src={ind.image}
                    alt={`${ind.name} sector work by MEEC`}
                    loading="lazy"
                    decoding="async"
                    className="aspect-16/10 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="text-lg group-hover:text-primary">{ind.name}</h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {ind.intro}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary">
                      View sector
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CTASection title="Tell us which plant you're working on." />
    </>
  );
}
