import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import { Lightbox, useLightbox } from "@/components/Lightbox";
import { ButtonLink, Reveal, SectionHeading } from "@/components/ui-kit";
import { equipment, equipmentSummary } from "@/data/equipment";
import { gallery } from "@/data/gallery";
import { hsePolicy, qualityPolicy } from "@/data/quality";

/* ------------------------------ HSE & Quality ----------------------------- */

export function QualitySafetyPreview() {
  return (
    <section className="py-20 lg:py-28">
      <div className="shell grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="HSE & Quality"
            title="Safe execution, verified quality."
            text={hsePolicy.statement}
          />
          <ul className="mt-8 space-y-3">
            {hsePolicy.promises.map((o) => (
              <li key={o} className="flex items-start gap-3">
                <Check className="mt-0.5 size-5 shrink-0 text-accent-dark" />
                <span className="text-sm leading-relaxed text-muted-foreground">{o}</span>
              </li>
            ))}
          </ul>
          <ButtonLink to="/quality-safety" variant="outline" arrow className="mt-9">
            HSE & Quality Standards
          </ButtonLink>
        </div>

        <Reveal>
          <div className="glass h-full rounded-2xl p-7 lg:p-9">
            <span className="flex size-11 items-center justify-center rounded-xl gradient-brand text-white">
              <ShieldCheck className="size-5" />
            </span>
            <h3 className="mt-5 text-xl">{qualityPolicy.heading}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {qualityPolicy.statement}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------- Equipment ------------------------------- */

export function EquipmentPreview() {
  const items = equipment.filter((e) => e.image).slice(0, 4);

  return (
    <section className="gradient-light py-20 lg:py-28">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Equipment & Resources"
            title="An owned fleet, ready to mobilise"
            text="Lifting, power and fabrication resources maintained in-house — no waiting on hired plant."
          />
          <ButtonLink to="/equipment" variant="outline" arrow className="shrink-0">
            View All Equipments
          </ButtonLink>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {equipmentSummary.map((s, i) => (
            <Reveal as="li" key={s.label} delay={i * 50}>
              <div className="glass h-full rounded-2xl p-5 text-center">
                <p className="text-2xl font-extrabold text-gradient-brand">{s.value}</p>
                <p className="mt-1 text-[0.7rem] font-bold tracking-widest text-muted-foreground uppercase">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>

        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((e, i) => (
            <Reveal as="li" key={e.name} delay={i * 60}>
              <div className="h-full overflow-hidden rounded-2xl border border-white/70 bg-white/80 backdrop-blur-md">
                <img
                  src={e.image}
                  alt={`${e.name} in the MEEC equipment fleet`}
                  loading="lazy"
                  className="aspect-4/3 w-full object-cover"
                />
                <div className="flex items-center justify-between gap-2 p-4">
                  <h3 className="text-sm">{e.name}</h3>
                  <span className="shrink-0 text-xs font-bold text-primary">× {e.quantity}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* --------------------------------- Gallery -------------------------------- */

export function GalleryPreview() {
  const items = gallery.slice(0, 6);
  const lightbox = useLightbox();

  return (
    <section className="py-20 lg:py-28">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Company Gallery"
            title="Our work, as it happens"
            text="Photographs from MEEC project sites, workshop activity, equipment and site teams."
          />
          <ButtonLink to="/gallery" variant="outline" arrow className="shrink-0">
            Open Gallery
          </ButtonLink>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((g, i) => (
            <Reveal as="li" key={g.src} delay={i * 50}>
              <button
                type="button"
                onClick={() => lightbox.open(i)}
                aria-label={`Open image: ${g.alt}`}
                className="group block w-full cursor-zoom-in overflow-hidden rounded-2xl border border-border bg-white shadow-soft"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={g.src}
                    alt={g.alt}
                    loading="lazy"
                    className="aspect-4/3 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute right-3 bottom-3 inline-flex items-center gap-1 rounded-full gradient-brand px-3 py-1 text-[0.65rem] font-bold tracking-widest text-white uppercase opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    View <ArrowRight className="size-3" />
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </ul>

        <Lightbox
          items={items}
          index={lightbox.index}
          onClose={lightbox.close}
          onIndexChange={lightbox.setIndex}
        />
      </div>
    </section>
  );
}
