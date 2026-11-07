import { Link } from "@tanstack/react-router";
import { ArrowRight, Quote, User } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/ui-kit";
import organizationalChart from "@/assets/images/organization/organizational-chart.jpg";
import { Lightbox, useLightbox } from "@/components/Lightbox";
import { ceo, management, type Manager } from "@/data/team";

export function CeoMessage() {
  return (
    <section className="py-20 lg:py-28">
      <div className="shell grid items-start gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
        <Reveal className="relative">
          <div className="overflow-hidden rounded-3xl shadow-lift">
            <img
              src={ceo.photo}
              alt={`${ceo.name}, ${ceo.role} of Masha Allah Engineering Enterprises`}
              loading="lazy"
              className="aspect-4/5 w-full object-cover"
            />
          </div>
          <div className="glass absolute -bottom-6 left-4 right-4 rounded-2xl p-5 text-center">
            <p className="text-lg font-extrabold text-gradient-brand">{ceo.name}</p>
            <p className="mt-1 text-xs font-bold tracking-widest text-muted-foreground uppercase">
              {ceo.role}
            </p>
          </div>
        </Reveal>

        <div className="mt-10 lg:mt-0">
          <SectionHeading
            eyebrow="Message from the CEO"
            title="Engineering work that plants can rely on."
          />
          <Quote className="mt-6 size-9 text-accent" aria-hidden="true" />
          <div className="mt-4 space-y-4 leading-relaxed text-muted-foreground">
            {ceo.message.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <p className="mt-8 text-sm font-bold text-foreground">
            {ceo.name}
            <span className="mt-1 block text-xs font-bold tracking-widest text-primary uppercase">
              {ceo.role}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export function Portrait({ member, className = "" }: { member: Manager; className?: string }) {
  if (member.photo) {
    return (
      <img
        src={member.photo}
        alt={`${member.name}, ${member.role} at MEEC`}
        loading="lazy"
        decoding="async"
        className={`size-full object-cover object-top ${className}`}
      />
    );
  }
  return (
    <div className="flex size-full flex-col items-center justify-center gap-2 bg-contrast text-primary">
      <User className="size-8" aria-hidden="true" />
      <span className="text-lg font-extrabold tracking-widest">{initials(member.name)}</span>
    </div>
  );
}

export function ManagementGrid() {
  return (
    <section id="management-team" className="py-20 lg:py-28">
      <div className="shell">
        <SectionHeading
          eyebrow="Management Team"
          title="Experienced people behind every scope."
          text="A management structure that keeps engineering, execution, safety and planning accountable on every project. Select a team member to read their full profile."
          align="center"
        />
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {management.map((m, i) => (
            <Reveal as="li" key={m.slug} delay={Math.min(i * 50, 400)}>
              <Link
                to="/management-team/$slug"
                params={{ slug: m.slug }}
                aria-label={`View profile of ${m.name}, ${m.role}`}
                className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-border bg-white/75 text-left backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 hover:shadow-lift"
              >
                <div className="aspect-4/5 w-full overflow-hidden">
                  <Portrait
                    member={m}
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-base font-bold text-foreground transition-colors group-hover:text-primary">
                    {m.name}
                  </h3>
                  <p className="mt-1 text-xs font-bold tracking-widest text-primary uppercase">
                    {m.role}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {m.focus}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-accent-dark uppercase">
                    View profile
                    <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* --------------------------- Organisation chart --------------------------- */

const LINE = "var(--color-primary-dark, #08517F)";

export function OrganizationalStructure() {
  const lightbox = useLightbox();

  const CHART_ALT =
    "MEEC organizational chart: the Board of Directors and Chief Executive Officer Shahid Hameed lead the General Manager and eight departments (HR & Administration, Finance, Planning & Estimation, Procurement & Purchase, Operations, Commercial & Business Development, HSE and the International Division), with the Technical Team covering Mechanical & Fabrication, Piping, Scaffolding, Rigging & Heavy Lifting, Surface Preparation, Electrical & Instrumentation, Civil, Supply & Manpower, Workshop, and Stores & Machinery departments.";

  return (
    <section className="gradient-light py-20 lg:py-28">
      <div className="shell">
        <SectionHeading
          eyebrow="Corporate Management Structure"
          title="Organization Chart"
          text="From executive direction through to department-level delivery teams."
          align="center"
        />

        <div className="mx-auto mt-14 max-w-6xl">
          <div
            className="overflow-hidden rounded-2xl bg-white shadow-soft"
            style={{ border: `2px solid ${LINE}` }}
          >
            <div className="overflow-x-auto pb-2">
              <button
                type="button"
                onClick={() => lightbox.open(0)}
                aria-label="View the MEEC organizational chart full size"
                className="block w-full min-w-[900px] cursor-zoom-in lg:min-w-0"
              >
                <img
                  src={organizationalChart}
                  alt={CHART_ALT}
                  loading="lazy"
                  className="h-auto w-full"
                />
              </button>
            </div>
          </div>
          <p className="mt-3 text-center text-xs font-bold tracking-widest text-muted-foreground uppercase">
            Scroll sideways on mobile — click the chart to view full size
          </p>

          <Lightbox
            items={[
              {
                src: organizationalChart,
                alt: CHART_ALT,
                caption: "MEEC Organizational Chart",
              },
            ]}
            index={lightbox.index}
            onClose={lightbox.close}
            onIndexChange={lightbox.setIndex}
          />
        </div>
      </div>
    </section>
  );
}
