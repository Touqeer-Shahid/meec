import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { CTASection, ProjectCard } from "@/components/sections";
import { PageHero, Reveal, SectionHeading } from "@/components/ui-kit";
import { getProject, projects } from "@/data/projects";
import { getService } from "@/data/services";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  component: ProjectDetail,
  head: ({ params, loaderData }) => {
    const title = loaderData?.project.title ?? "Project";
    const desc = loaderData?.project.description ?? "MEEC industrial project.";
    return {
      meta: [
        { title: `${title} | MEEC Projects` },
        { name: "description", content: desc },
        { property: "og:title", content: `${title} | MEEC` },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/projects/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/projects/${params.slug}` }],
    };
  },
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 3);
  const involved = project.services
    .map((slug) => getService(slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const info = [
    { label: "Client", value: project.client },
    { label: "Location", value: project.location },
    { label: "Category", value: project.category },
    { label: "Status", value: project.status },
  ].filter((i) => Boolean(i.value));

  return (
    <>
      <PageHero
        image={project.images[0] ?? ""}
        eyebrow={`${project.category} • ${project.status}`}
        title={project.title}
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Projects", to: "/projects" },
          { label: project.title },
        ]}
      />

      <section className="py-16 lg:py-20">
        <div className="shell">
          <dl className="grid gap-5 rounded-2xl border border-border bg-white p-7 shadow-soft sm:grid-cols-2 lg:grid-cols-4">
            {info.map((i) => (
              <div key={i.label}>
                <dt className="text-xs font-bold tracking-widest text-muted-foreground uppercase">
                  {i.label}
                </dt>
                <dd className="mt-1.5 font-bold">{i.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-16 grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
            <div>
              <SectionHeading eyebrow="Overview" title="Project overview" />
              <p className="mt-6 leading-relaxed text-muted-foreground">{project.description}</p>
            </div>
            {project.scope.length > 0 && (
              <div>
                <h2 className="text-2xl">Scope of Work</h2>
                <ul className="mt-6 space-y-3">
                  {project.scope.map((s) => (
                    <li key={s} className="flex gap-3 text-sm font-semibold">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded bg-accent-light text-accent-dark">
                        <Check className="size-3" />
                      </span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {project.images.length > 1 && (
            <div className="mt-20">
              <h2 className="text-2xl">Gallery</h2>
              <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {project.images.map((img, i) => (
                  <Reveal as="li" key={img} delay={i * 60}>
                    <img
                      src={img}
                      alt={`${project.title} — image ${i + 1}`}
                      loading="lazy"
                      className="aspect-4/3 w-full rounded-2xl object-cover shadow-soft"
                    />
                  </Reveal>
                ))}
              </ul>
            </div>
          )}

          {involved.length > 0 && (
            <div className="mt-20">
              <h2 className="text-2xl">Services Involved</h2>
              <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {involved.map((s) => (
                  <li key={s.id}>
                    <Link
                      to="/services/$slug"
                      params={{ slug: s.slug }}
                      className="group flex h-full flex-col rounded-2xl border border-border bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-card"
                    >
                      <span className="text-xs font-bold tracking-widest text-accent-dark">
                        {s.number}
                      </span>
                      <h3 className="mt-2 text-lg group-hover:text-primary">{s.title}</h3>
                      <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary">
                        Explore
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1.5" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {related.length > 0 && (
            <div className="mt-20">
              <h2 className="text-2xl">Related Projects</h2>
              <ul className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {related.map((p, i) => (
                  <ProjectCard key={p.id} project={p} delay={i * 70} />
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <CTASection title="Have a Similar Project?" />
    </>
  );
}
