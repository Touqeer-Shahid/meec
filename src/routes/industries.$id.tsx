import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { CTASection } from "@/components/sections";
import { PageHero, Reveal, SectionHeading } from "@/components/ui-kit";
import { getIndustry, industries } from "@/data/industries";
import { getService } from "@/data/services";

export const Route = createFileRoute("/industries/$id")({
  loader: ({ params }) => {
    const industry = getIndustry(params.id);
    if (!industry) throw notFound();
    return { industry };
  },
  component: IndustryDetail,
  head: ({ params, loaderData }) => {
    const name = loaderData?.industry.name ?? "Industry";
    const desc = loaderData?.industry.description ?? "MEEC industrial sector experience.";
    return {
      meta: [
        { title: `${name} Sector Services | MEEC Pakistan` },
        { name: "description", content: desc },
        { property: "og:title", content: `${name} Sector Services | MEEC` },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/industries/${params.id}` },
      ],
      links: [{ rel: "canonical", href: `/industries/${params.id}` }],
    };
  },
});

function IndustryDetail() {
  const { industry } = Route.useLoaderData();
  const others = industries.filter((i) => i.id !== industry.id);
  const linkedServices = industry.services
    .map((slug) => getService(slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      <PageHero
        image={industry.image}
        eyebrow="Industries We Serve"
        title={industry.name}
        text={industry.description}
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Industries", to: "/industries" },
          { label: industry.name },
        ]}
      />

      <section className="py-20 lg:py-24">
        <div className="shell grid gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
          <div>
            <SectionHeading eyebrow="Overview" title={`MEEC in ${industry.name}`} />
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{industry.intro}</p>
            {industry.overview.map((p) => (
              <p key={p} className="mt-4 text-base leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}

            <h3 className="mt-12 text-xl">Our involvement</h3>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {industry.involvement.map((it, i) => (
                <Reveal as="li" key={it.title} delay={i * 50}>
                  <div className="h-full rounded-2xl border border-border bg-white/75 p-5 backdrop-blur-sm">
                    <p className="text-sm font-extrabold text-primary">{it.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.text}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>

          <aside className="space-y-6">
            <div className="glass rounded-2xl p-7">
              <p className="text-xs font-bold tracking-widest text-primary uppercase">
                Representative clients
              </p>
              <ul className="mt-4 space-y-2.5">
                {industry.clients.map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-md bg-accent-light text-accent-dark">
                      <Check className="size-3.5" />
                    </span>
                    <span className="text-sm font-semibold">{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-white/75 p-7 backdrop-blur-sm">
              <p className="text-xs font-bold tracking-widest text-primary uppercase">
                Services applied
              </p>
              <ul className="mt-4 space-y-2">
                {linkedServices.map((s) => (
                  <li key={s.slug}>
                    <Link
                      to="/services/$slug"
                      params={{ slug: s.slug }}
                      className="group inline-flex items-center gap-2 text-sm font-bold text-primary"
                    >
                      {s.title}
                      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="gradient-light py-20 lg:py-24">
        <div className="shell">
          <SectionHeading
            eyebrow="On site"
            title={`${industry.name} work in progress`}
            align="center"
          />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industry.gallery.map((g, i) => (
              <Reveal as="li" key={g.src} delay={i * 60}>
                <figure className="overflow-hidden rounded-2xl border border-border bg-white shadow-soft">
                  <img
                    src={g.src}
                    alt={g.alt}
                    loading="lazy"
                    decoding="async"
                    className="aspect-4/3 w-full object-cover"
                  />
                  <figcaption className="p-4 text-sm leading-snug text-muted-foreground">
                    {g.alt}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="shell">
          <SectionHeading eyebrow="Other sectors" title="Explore more industries" />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((o, i) => (
              <Reveal as="li" key={o.id} delay={i * 60}>
                <Link
                  to="/industries/$id"
                  params={{ id: o.id }}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-white/75 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-primary/45 hover:shadow-lift"
                >
                  <h3 className="text-base group-hover:text-primary">{o.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {o.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary">
                    View sector
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CTASection title={`Planning ${industry.name} scope? Let's talk.`} />
    </>
  );
}
