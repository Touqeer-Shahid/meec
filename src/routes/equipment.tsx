import { createFileRoute } from "@tanstack/react-router";
import { Wrench } from "lucide-react";
import heroImg from "@/assets/images/gallery/g-equipment-yard.jpeg";
import { CTASection } from "@/components/sections";
import { PageHero, Reveal, SectionHeading } from "@/components/ui-kit";
import { equipment, equipmentSummary } from "@/data/equipment";

export const Route = createFileRoute("/equipment")({
  component: EquipmentPage,
  head: () => ({
    meta: [
      { title: "Equipment & Resources | MEEC Owned Fleet" },
      {
        name: "description",
        content:
          "MEEC's owned equipment fleet — 35-ton mobile crane, boom truck, 11 power generators, 3 rolling machines, 3 air compressors, loader, tractor, pickups and crew transport.",
      },
      { property: "og:title", content: "Equipment & Resources | MEEC" },
      {
        property: "og:description",
        content:
          "Cranes, generators, rolling machines, compressors and transport — owned, maintained and mobilised by MEEC.",
      },
      { property: "og:url", content: "/equipment" },
    ],
    links: [{ rel: "canonical", href: "/equipment" }],
  }),
});

function EquipmentPage() {
  return (
    <>
      <PageHero
        image={heroImg}
        eyebrow="Equipment & Resources"
        title="An Owned Fleet, Ready to Mobilise"
        text="Lifting, power, fabrication and transport resources maintained in-house — so shutdowns and projects are not held up waiting on hired plant."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Equipment" }]}
      />

      <section className="py-20 lg:py-28">
        <div className="shell">
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {equipmentSummary.map((s, i) => (
              <Reveal as="li" key={s.label} delay={i * 60}>
                <div className="glass h-full rounded-2xl p-6 text-center">
                  <p className="text-3xl font-extrabold text-gradient-brand">{s.value}</p>
                  <p className="mt-2 text-xs font-bold tracking-widest text-muted-foreground uppercase">
                    {s.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>

          <div className="mt-16">
            <SectionHeading
              eyebrow="Fleet Inventory"
              title="Verified equipment and quantities"
              text="Quantities as listed in the MEEC company profile."
              align="center"
            />
          </div>

          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {equipment.map((e, i) => (
              <Reveal as="li" key={e.name} delay={i * 50}>
                <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  {e.image ? (
                    <img
                      src={e.image}
                      alt={`${e.name} in the MEEC equipment fleet`}
                      loading="lazy"
                      className="aspect-4/3 w-full object-cover"
                    />
                  ) : (
                    <div className="flex aspect-4/3 w-full items-center justify-center gradient-light">
                      <Wrench className="size-10 text-primary" aria-hidden="true" />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-base">{e.name}</h3>
                      <span className="shrink-0 rounded-full gradient-brand px-3 py-1 text-xs font-bold text-white">
                        × {e.quantity}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.note}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        title="Need equipment with supervised crews?"
        text="MEEC mobilises its own lifting, power and fabrication resources alongside skilled manpower."
      />
    </>
  );
}
