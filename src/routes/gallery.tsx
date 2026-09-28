import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroImg from "@/assets/images/gallery/g-tandem-lift.jpeg";
import { Lightbox, useLightbox } from "@/components/Lightbox";
import { CTASection } from "@/components/sections";
import { PageHero, Reveal, SectionHeading } from "@/components/ui-kit";
import { gallery, galleryCategories, type GalleryCategory } from "@/data/gallery";
import { cn } from "@/lib/utils";


export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [
      { title: "Company Gallery | MEEC Projects, Equipment & Teams" },
      {
        name: "description",
        content:
          "Photographs from MEEC work fronts — heavy lifting, vessel fabrication, scaffolding, civil works, equipment fleet, HSE toolbox talks and our site teams.",
      },
      { property: "og:title", content: "Company Gallery | MEEC" },
      {
        property: "og:description",
        content:
          "Authentic photographs from MEEC projects, equipment fleet, HSE activities and site teams.",
      },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
});

function GalleryPage() {
  const [active, setActive] = useState<GalleryCategory>("All");
  const lightbox = useLightbox();
  const items = active === "All" ? gallery : gallery.filter((g) => g.category === active);


  return (
    <>
      <PageHero
        image={heroImg}
        eyebrow="Company Gallery"
        title="Our Work, As It Happens"
        text="Photographs from MEEC project sites, the workshop, our equipment fleet and the teams behind every delivery."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Gallery" }]}
      />

      <section className="py-20 lg:py-28">
        <div className="shell">
          <SectionHeading
            eyebrow="Photo Library"
            title="Projects, equipment, HSE and people"
            align="center"
          />

          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {galleryCategories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => {
                  setActive(c);
                  lightbox.close();
                }}
                aria-pressed={active === c}
                className={cn(
                  "rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300",
                  active === c
                    ? "gradient-brand text-white shadow-soft"
                    : "border border-border bg-white text-foreground hover:border-primary hover:text-primary",
                )}
              >
                {c}
              </button>
            ))}
          </div>

          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((g, i) => (
              <Reveal as="li" key={g.src} delay={(i % 6) * 50}>
                <figure className="group h-full overflow-hidden rounded-2xl border border-border bg-white shadow-soft">
                  <button
                    type="button"
                    onClick={() => lightbox.open(i)}
                    aria-label={`Open image: ${g.alt}`}
                    className="block w-full cursor-zoom-in overflow-hidden"
                  >
                    <img
                      src={g.src}
                      alt={g.alt}
                      loading="lazy"
                      decoding="async"
                      className="aspect-4/3 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </button>
                  <figcaption className="flex items-center justify-between gap-3 p-4">
                    <span className="text-sm leading-snug text-muted-foreground">{g.alt}</span>
                    <span className="shrink-0 rounded-full bg-primary-light px-3 py-1 text-[0.65rem] font-bold tracking-widest text-primary uppercase">
                      {g.category}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <Lightbox
        items={items}
        index={lightbox.index}
        onClose={lightbox.close}
        onIndexChange={lightbox.setIndex}
      />

      <CTASection title="Let's add your project to the gallery." />

    </>
  );
}
