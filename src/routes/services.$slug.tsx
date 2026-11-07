import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { CTASection } from "@/components/sections";
import { PageHero, Reveal, SectionHeading } from "@/components/ui-kit";
import { getService, services } from "@/data/services";
import { cn } from "@/lib/utils";


export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  component: ServiceDetail,
  head: ({ params, loaderData }) => {
    const title = loaderData?.service.title ?? "Service";
    const desc = loaderData?.service.shortDescription ?? "MEEC engineering services.";
    return {
      meta: [
        { title: `${title} | MEEC Engineering Services` },
        { name: "description", content: desc },
        { property: "og:title", content: `${title} | MEEC` },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/services/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/services/${params.slug}` }],
    };
  },
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero
        image={service.image}
        eyebrow={`Service ${service.number}`}
        title={service.title}
        text={service.shortDescription}
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Services", to: "/services" },
          { label: service.title },
        ]}
      />

      <section className="py-20 lg:py-24">
        <div className="shell grid gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
          <div>
            <SectionHeading eyebrow="Overview" title={`${service.title} at MEEC`} />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
              {service.intro.map((p) => (
                <p key={p.slice(0, 32)}>{p}</p>
              ))}
            </div>

            {service.blocks.map((block, bi) => (
              <div key={block.heading ?? `block-${bi}`} className="mt-12">
                {block.heading && <h2 className="text-xl">{block.heading}</h2>}
                {block.paragraphs && (
                  <div
                    className={cn(
                      "space-y-4 leading-relaxed text-muted-foreground",
                      block.heading ? "mt-4" : "",
                    )}
                  >
                    {block.paragraphs.map((p) => (
                      <p key={p.slice(0, 32)}>{p}</p>
                    ))}
                  </div>
                )}
                {block.items && (
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {block.items.map((c, i) => (
                      <Reveal as="li" key={c} delay={Math.min(i * 35, 400)}>
                        <div className="flex items-center gap-3 rounded-xl border border-border bg-white/75 px-4 py-3 backdrop-blur-sm">
                          <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-accent-light text-accent-dark">
                            <Check className="size-3.5" />
                          </span>
                          <span className="text-sm font-semibold">{c}</span>
                        </div>
                      </Reveal>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>


          <Reveal className="lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-3xl shadow-lift">
              <img
                src={service.image}
                alt={`${service.title} work carried out by MEEC`}
                width={1280}
                height={860}
                loading="lazy"
                className="aspect-4/3 w-full object-cover"
              />
            </div>
            <div className="glass mt-6 rounded-2xl p-6">
              <p className="eyebrow text-primary">Discuss this scope</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Send us your drawings, BOQ or plant requirement and our team will prepare a
                proposal covering manpower, equipment and schedule.
              </p>
              <Link
                to="/request-a-quote"
                className="group mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary"
              >
                Request a Quote
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="gradient-light py-20 lg:py-24">
        <div className="shell">
          <SectionHeading eyebrow="Related" title="Other services" align="center" />
          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {related.map((s, i) => (
              <Reveal as="li" key={s.id} delay={i * 70}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group flex h-full flex-col rounded-2xl border border-white/70 bg-white/75 p-6 backdrop-blur-md transition-all hover:-translate-y-1 hover:shadow-card"
                >
                  <span className="text-xs font-bold tracking-widest text-accent-dark">
                    {s.number}
                  </span>
                  <h3 className="mt-2 text-lg group-hover:text-primary">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {s.shortDescription}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary">
                    Explore
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CTASection title={`Planning ${service.title.toLowerCase()} works?`} />
    </>
  );
}
