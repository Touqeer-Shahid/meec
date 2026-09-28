import { createFileRoute } from "@tanstack/react-router";
import { Play, Video } from "lucide-react";
import { useState } from "react";
import { CTASection } from "@/components/sections";
import { PageHero, Reveal, SectionHeading } from "@/components/ui-kit";
import heroImg from "@/assets/images/services/svc-civil.jpg";
import { clients, ongoingClients } from "@/data/clients";
import { projectVideos } from "@/data/videos";
import { cn } from "@/lib/utils";

type Partition = "ongoing" | "completed" | "videos";

export const Route = createFileRoute("/projects/")({
  component: ProjectsIndex,
  validateSearch: (search: Record<string, unknown>): { filter?: Partition } => {
    const f = search["filter"];
    if (f === "ongoing" || f === "Ongoing") return { filter: "ongoing" };
    if (f === "completed" || f === "Completed") return { filter: "completed" };
    if (f === "videos") return { filter: "videos" };
    return {};
  },
  head: () => ({
    meta: [
      { title: "Projects | Ongoing, Completed & Project Videos | MEEC" },
      {
        name: "description",
        content:
          "MEEC project portfolio — ongoing industrial projects, completed projects for leading Pakistani clients, and project videos.",
      },
      { property: "og:title", content: "Projects | Ongoing & Completed | MEEC" },
      {
        property: "og:description",
        content:
          "Ongoing and completed industrial engineering projects delivered by Masha Allah Engineering Enterprises.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
});

/**
 * Completed projects are drawn from the existing MEEC client list. Clients that
 * are currently active (see ongoingClients) are excluded so a client never
 * appears in both partitions.
 */
const ongoingIds = new Set(["power-cement", "nrl", "engro"]);
const completedClients = clients.filter((c) => !ongoingIds.has(c.id));

const partitions: { label: string; value: Partition }[] = [
  { label: "Ongoing Projects", value: "ongoing" },
  { label: "Completed Projects", value: "completed" },
  { label: "Videos", value: "videos" },
];

function StatusPill({ label, tone }: { label: string; tone: "ongoing" | "completed" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-[0.65rem] font-bold tracking-widest uppercase",
        tone === "ongoing"
          ? "bg-accent-light text-accent-dark"
          : "bg-primary-light text-primary-dark",
      )}
    >
      {label}
    </span>
  );
}

function LogoFrame({ src, name }: { src: string; name: string }) {
  return (
    <div className="flex h-32 items-center justify-center bg-contrast p-5">
      <img
        src={src}
        alt={`${name} logo`}
        loading="lazy"
        decoding="async"
        className="max-h-20 w-auto max-w-[70%] object-contain"
      />
    </div>
  );
}

function ProjectsIndex() {
  const search = Route.useSearch();
  const [active, setActive] = useState<Partition>(search.filter ?? "ongoing");

  return (
    <>
      <PageHero
        image={heroImg}
        eyebrow="Portfolio"
        title="Projects"
        text="Ongoing industrial projects, completed projects and project videos — engineering, fabrication, erection and construction works delivered across Pakistan."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Projects" }]}
      />

      <section className="py-14 lg:py-16">
        <div className="shell">
          <div className="flex flex-wrap gap-2.5">
            {partitions.map((p) => (
              <button
                key={p.value}
                type="button"
                onClick={() => setActive(p.value)}
                aria-pressed={active === p.value}
                className={cn(
                  "rounded-lg border px-5 py-2.5 text-sm font-bold transition-all",
                  active === p.value
                    ? "border-transparent gradient-blue text-white shadow-soft"
                    : "border-border bg-white text-muted-foreground hover:border-primary hover:text-primary",
                )}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------ 1. ONGOING ---------------------------- */}
      {active === "ongoing" && (
        <section id="ongoing" className="pb-20 lg:pb-24">
          <div className="shell">
            <SectionHeading
              eyebrow="Ongoing Projects"
              title="Projects currently in execution"
              text="Active project engagements across refining, petrochemicals, fertilizer, cement, textile, mining and terminal operations."
            />
            <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {ongoingClients.map((c, i) => (
                <Reveal as="li" key={c.id} delay={Math.min(i * 60, 420)}>
                  <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white/75 shadow-soft backdrop-blur-sm transition-all duration-400 hover:-translate-y-1 hover:border-primary/45 hover:shadow-lift">
                    <LogoFrame src={c.logo} name={c.name} />
                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex flex-wrap items-center gap-2">
                        <StatusPill label="Ongoing Project" tone="ongoing" />
                        <span className="text-[0.65rem] font-bold tracking-widest text-primary uppercase">
                          {c.sector}
                        </span>
                      </div>
                      <h3 className="mt-3 text-base">{c.name}</h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {c.scope}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ----------------------------- 2. COMPLETED --------------------------- */}
      {active === "completed" && (
        <section id="completed" className="pb-20 lg:pb-24">
          <div className="shell">
            <SectionHeading
              eyebrow="Completed Projects"
              title="Projects delivered and handed over"
              text="Completed project engagements for industrial and public-sector organisations across Pakistan."
            />
            <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {completedClients.map((c, i) => (
                <Reveal as="li" key={c.id} delay={Math.min(i * 60, 420)}>
                  <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white/75 shadow-soft backdrop-blur-sm transition-all duration-400 hover:-translate-y-1 hover:border-primary/45 hover:shadow-lift">
                    <LogoFrame src={c.logo} name={c.name} />
                    <div className="flex flex-1 flex-col p-6">
                      <StatusPill label="Completed Project" tone="completed" />
                      <h3 className="mt-3 text-base">{c.name}</h3>
                    </div>
                  </article>
                </Reveal>
              ))}
            </ul>
            <p className="mt-10 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              Detailed project references, scope documentation and completion records are available
              on request for any of the above engagements.
            </p>
          </div>
        </section>
      )}

      {/* ------------------------------- 3. VIDEOS --------------------------- */}
      {active === "videos" && (
        <section id="videos" className="pb-20 lg:pb-24">
          <div className="shell">
            <SectionHeading
              eyebrow="Videos"
              title="Project videos"
              text="Site footage from our fabrication, erection, maintenance and lifting operations."
            />

            {projectVideos.length === 0 ? (
              <div className="glass mx-auto mt-12 max-w-2xl rounded-2xl p-10 text-center">
                <span className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary-light text-primary">
                  <Video className="size-7" />
                </span>
                <h3 className="mt-5 text-2xl">Videos Coming Soon</h3>
                <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                  Project videos are being prepared and will be published in this section.
                </p>
              </div>
            ) : (
              <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projectVideos.map((v, i) => (
                  <Reveal as="li" key={v.id} delay={Math.min(i * 60, 420)}>
                    <a
                      href={v.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white/75 shadow-soft backdrop-blur-sm transition-all duration-400 hover:-translate-y-1 hover:border-primary/45 hover:shadow-lift"
                    >
                      <div className="relative flex aspect-16/9 items-center justify-center bg-contrast">
                        {v.thumbnail ? (
                          <img
                            src={v.thumbnail}
                            alt={v.title}
                            loading="lazy"
                            className="size-full object-cover"
                          />
                        ) : null}
                        <span className="absolute flex size-14 items-center justify-center rounded-full bg-white/90 text-primary shadow-lift transition-transform group-hover:scale-110">
                          <Play className="size-6" />
                        </span>
                        {v.duration && (
                          <span className="absolute right-3 bottom-3 rounded-md bg-primary-dark/85 px-2 py-1 text-[0.7rem] font-bold text-white">
                            {v.duration}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <h3 className="text-base group-hover:text-primary">{v.title}</h3>
                        {v.description && (
                          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                            {v.description}
                          </p>
                        )}
                      </div>
                    </a>
                  </Reveal>
                ))}
              </ul>
            )}
          </div>
        </section>
      )}

      <CTASection title="Have a Similar Project?" />
    </>
  );
}
