import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Badge,
  Building2,
  ClipboardCheck,
  Cog,
  Factory,
  Gauge,
  HardHat,
  History,
  Layers,
  PaintBucket,
  ShieldCheck,
  Truck,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { ButtonLink, Reveal, SectionHeading } from "@/components/ui-kit";
import aboutImg from "@/assets/images/gallery/about-img.jpeg";
import { clients, ongoingClients } from "@/data/clients";
import type { Project } from "@/data/projects";
import { services, type Service } from "@/data/services";
import { company, industries, stats, whyMeec } from "@/data/site";
import { cn } from "@/lib/utils";

const serviceIcons: Record<Service["icon"], LucideIcon> = {
  wrench: Wrench,
  zap: Zap,
  building: Building2,
  spray: PaintBucket,
  truck: Truck,
  gauge: Gauge,
  cog: Cog,
  hardhat: HardHat,
};


const whyIcons: Record<string, LucideIcon> = {
  history: History,
  layers: Layers,
  factory: Factory,
  clipboard: ClipboardCheck,
  badge: Badge,
  shield: ShieldCheck,
};

/* ------------------------------- ServiceCard ------------------------------ */

export function ServiceCard({ service, delay = 0 }: { service: Service; delay?: number }) {
  const Icon = serviceIcons[service.icon];
  return (
    <Reveal as="li" delay={delay} className="h-full">
      <Link
        to="/services/$slug"
        params={{ slug: service.slug }}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white/75 shadow-soft backdrop-blur-sm transition-all duration-400 hover:-translate-y-1.5 hover:border-primary/45 hover:shadow-lift"
      >
        <div className="relative overflow-hidden">
          <img
            src={service.image}
            alt={`${service.title} at MEEC`}
            loading="lazy"
            decoding="async"
            className="aspect-16/10 w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <span
            className="absolute inset-0"
            style={{
              background: "linear-gradient(180deg, rgba(8,81,127,0) 45%, rgba(8,81,127,0.55) 100%)",
            }}
            aria-hidden="true"
          />
        </div>
        <div className="flex flex-1 flex-col p-7">
        <div className="mb-6 flex items-start justify-between">
          <span className="flex size-12 items-center justify-center rounded-xl bg-primary-light text-primary transition-all duration-300 group-hover:scale-110 group-hover:gradient-brand group-hover:text-white">
            <Icon className="size-6" />
          </span>
          <span className="text-2xl font-extrabold text-border transition-colors group-hover:text-accent">
            {service.number}
          </span>
        </div>
        <h3 className="text-xl group-hover:text-primary">{service.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {service.shortDescription}
        </p>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary">
          Explore service
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1.5" />
        </span>
        </div>
      </Link>
    </Reveal>
  );
}

export function ServiceGrid({ items = services }: { items?: Service[] }) {
  return (
    <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((s, i) => (
        <ServiceCard key={s.id} service={s} delay={i * 70} />
      ))}
    </ul>
  );
}

/* ------------------------------- Statistics ------------------------------- */

export function Statistics() {
  return (
    <section className="relative isolate overflow-hidden bg-contrast py-16 lg:py-20">
      <div
        className="absolute inset-0 -z-10 opacity-70"
        style={{ background: "linear-gradient(135deg, #127DC2 0%, #0B5F96 55%, #08517F 100%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute -right-20 -top-24 -z-10 size-80 rounded-full opacity-25 blur-3xl"
        style={{ background: "var(--gradient-brand)" }}
        aria-hidden="true"
      />
      <div className="shell grid grid-cols-2 gap-6 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal
            key={s.label}
            delay={i * 90}
            className="rounded-2xl border border-white/15 bg-white/[0.07] p-6 text-center backdrop-blur-md lg:p-8"
          >
            <div className="text-4xl font-extrabold text-white lg:text-5xl">
              <AnimatedCounter value={s.value} suffix={s.suffix} />
            </div>
            <p className="mt-3 text-xs font-bold tracking-widest text-white/65 uppercase">
              {s.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------ AboutSection ------------------------------ */

export function AboutSection() {
  const highlights = [
    { title: "Multidisciplinary Expertise", text: "Mechanical, electrical and civil in one team." },
    { title: "Industrial Experience", text: "Work delivered inside live plant environments." },
    { title: "Professional Execution", text: "Planned, supervised and documented delivery." },
  ];

  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <div
        className="absolute -left-40 top-20 -z-10 size-96 rounded-full opacity-40 blur-3xl gradient-light"
        aria-hidden="true"
      />
      <div className="shell grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <div className="overflow-hidden rounded-3xl shadow-lift">
            <img
              src={aboutImg}
              alt="MEEC engineers reviewing drawings on a steel fabrication workshop floor"
              width={1280}
              height={1440}
              loading="lazy"
              className="aspect-4/5 w-full object-cover sm:aspect-square lg:aspect-4/5"
            />
          </div>
          <div className="glass absolute -bottom-6 -right-2 rounded-2xl p-5 sm:right-auto sm:-left-6 lg:p-6">
            <p className="text-3xl font-extrabold text-gradient-brand">EST. 2003</p>
            <p className="mt-1 text-xs font-bold tracking-widest text-muted-foreground uppercase">
              Engineering Excellence
            </p>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            eyebrow="About MEEC"
            title="Engineering Experience You Can Build On."
            text="Masha Allah Engineering Enterprises was established in 2003 as a multidisciplinary engineering and industrial services company. We deliver engineering, fabrication, erection, construction and related industrial works for clients across Pakistan's industrial sectors."
          />
          <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            Our approach is straightforward: understand the plant, plan the work properly, mobilise
            the right people and equipment, and execute with a focus on quality, safety and
            reliability.
          </p>

          <ul className="mt-10 space-y-4">
            {highlights.map((h, i) => (
              <Reveal as="li" key={h.title} delay={i * 80}>
                <div className="flex gap-4 rounded-xl border border-border bg-white/70 p-4 backdrop-blur-sm">
                  <span className="mt-1 size-2.5 shrink-0 rounded-full gradient-brand" />
                  <div>
                    <p className="font-bold">{h.title}</p>
                    <p className="text-sm text-muted-foreground">{h.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>

          <div className="mt-10 rounded-2xl border border-border bg-white/70 p-6 backdrop-blur-sm lg:p-7">
            <p className="text-xs font-bold tracking-widest text-accent-dark uppercase">
              Objective
            </p>
            <p className="mt-3 text-base leading-relaxed text-foreground sm:text-lg">
              To build long-lasting partnerships with our clients founded on trust, strengthened by
              exceptional service, innovative engineering solutions, and consistently outstanding
              performance.
            </p>
          </div>

          <div className="mt-10">
            <ButtonLink to="/about" variant="outline" arrow>
              Discover Our Story
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- WhyMeec -------------------------------- */

export function WhyMeec() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="shell">
        <SectionHeading
          eyebrow="Why MEEC"
          title="Built on experience, delivered with discipline."
          text="Six reasons industrial clients keep MEEC on their contractor list."
          align="center"
        />
        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {whyMeec.map((item, i) => {
            const Icon = whyIcons[item.icon] ?? ShieldCheck;
            return (
              <Reveal as="li" key={item.title} delay={i * 70}>
                <div className="h-full rounded-2xl border border-border bg-white/70 p-7 shadow-soft backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-card">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-accent-light text-accent-dark">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-5 text-lg">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/* -------------------------------- Industries ------------------------------ */

export function Industries() {
  return (
    <section className="py-20 lg:py-28">
      <div className="shell">
        <SectionHeading
          eyebrow="Sectors"
          title="Industries We Serve"
          text="Experience across the industrial environments where precision and uptime matter."
        />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map((ind, i) => (
            <Reveal as="li" key={ind.id} delay={i * 70}>
              <Link
                to="/industries/$id"
                params={{ id: ind.id }}
                className="group relative block h-72 overflow-hidden rounded-2xl shadow-card transition-transform duration-400 hover:-translate-y-1.5 lg:h-80"
              >
                <img
                  src={ind.image}
                  alt={`${ind.name} sector work`}
                  loading="lazy"
                  className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(8,81,127,0.15) 20%, rgba(8,81,127,0.9) 100%)",
                  }}
                  aria-hidden="true"
                />
                <div className="absolute inset-x-3 bottom-3 rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-md">
                  <h3 className="text-base text-white">{ind.name}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-white/75">{ind.description}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-[0.7rem] font-bold tracking-widest text-white uppercase">
                    View sector
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
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

/* ------------------------------- ProjectCard ------------------------------ */

export function ProjectCard({ project, delay = 0 }: { project: Project; delay?: number }) {
  return (
    <Reveal as="li" delay={delay} className="h-full">
      <Link
        to="/projects/$slug"
        params={{ slug: project.slug }}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-soft transition-all duration-400 hover:-translate-y-1.5 hover:shadow-lift"
      >
        <div className="relative h-56 overflow-hidden">
          {project.images[0] ? (
            <img
              src={project.images[0]}
              alt={project.title}
              loading="lazy"
              className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="size-full gradient-blue" aria-hidden="true" />
          )}
          <span className="absolute left-4 top-4 rounded-md bg-white/85 px-3 py-1 text-[0.7rem] font-bold tracking-wider text-primary-dark uppercase backdrop-blur">
            {project.category}
          </span>
          <span
            className={cn(
              "absolute right-4 top-4 rounded-md px-3 py-1 text-[0.7rem] font-bold tracking-wider text-white uppercase",
              project.status === "Ongoing" ? "bg-primary" : "bg-accent-dark",
            )}
          >
            {project.status}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-lg group-hover:text-primary">{project.title}</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary">
            View project
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1.5" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

export function ProjectGrid({ items }: { items: Project[] }) {
  if (items.length === 0) return <ProjectsEmptyState />;
  return (
    <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((p, i) => (
        <ProjectCard key={p.id} project={p} delay={i * 70} />
      ))}
    </ul>
  );
}

export function OngoingProjectsGrid() {
  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {ongoingClients.map((c, i) => (
        <Reveal as="li" key={c.id} delay={i * 60}>
          <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white/75 shadow-soft backdrop-blur-sm transition-all duration-400 hover:-translate-y-1 hover:border-primary/45 hover:shadow-lift">
            <div className="flex h-32 items-center justify-center bg-contrast p-5">
              <img
                src={c.logo}
                alt={`${c.name} logo`}
                loading="lazy"
                decoding="async"
                className="max-h-20 w-auto max-w-[70%] object-contain"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-light px-3 py-1 text-[0.65rem] font-bold tracking-widest text-accent-dark uppercase">
                  Ongoing
                </span>
                <span className="text-[0.65rem] font-bold tracking-widest text-primary uppercase">
                  {c.sector}
                </span>
              </div>
              <h4 className="mt-3 text-base font-bold">{c.name}</h4>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{c.scope}</p>
            </div>
          </article>
        </Reveal>
      ))}
    </ul>
  );
}

export function ProjectsEmptyState() {
  return (
    <div className="glass mx-auto max-w-2xl rounded-2xl p-10 text-center">
      <p className="eyebrow justify-center text-primary">Portfolio</p>
      <h3 className="mt-4 text-2xl">Project portfolio being compiled</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        We publish only verified project information. Detailed references for our mechanical,
        electrical, civil and specialist works are available on request — contact our team and we
        will share documentation relevant to your scope.
      </p>
      <div className="mt-7 flex flex-wrap justify-center gap-3">
        <ButtonLink to="/request-a-quote" arrow>
          Request References
        </ButtonLink>
        <ButtonLink to="/services" variant="outline">
          View Our Services
        </ButtonLink>
      </div>
    </div>
  );
}

/* ---------------------------- Client presentation ------------------------- */

function MarqueeRow({ items, direction }: { items: typeof clients; direction: "left" | "right" }) {
  // The list is rendered twice; the track moves exactly half its width so the loop is seamless.
  const row = [...items, ...items];
  return (
    <div
      className={cn(
        "flex w-max items-center gap-4 motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center",
        direction === "left"
          ? "animate-[marquee_46s_linear_infinite]"
          : "animate-[marquee-reverse_46s_linear_infinite]",
      )}
    >
      {row.map((c, i) => (
        <div
          key={`${c.id}-${i}`}
          aria-hidden={i >= items.length ? true : undefined}
          className="flex h-28 w-52 shrink-0 items-center justify-center rounded-2xl border border-border bg-white/70 px-6 backdrop-blur-sm"
        >
          <img
            src={c.logo}
            alt={i >= items.length ? "" : c.name}
            loading="lazy"
            className="max-h-16 w-auto max-w-full object-contain"
          />
        </div>
      ))}
    </div>
  );
}

export function ClientLogoMarquee() {
  // Second row shows the same official logos in reverse order so the rows don't mirror each other.
  const reversed = [...clients].reverse();
  return (
    <section className="overflow-hidden py-20 lg:py-24">
      <div className="shell">
        <SectionHeading
          eyebrow="Clients"
          title="Trusted by Industry Leaders"
          text="MEEC works with established industrial and public-sector organisations across Pakistan."
          align="center"
        />
      </div>
      <div className="relative mt-14 space-y-4 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent"
          aria-hidden="true"
        />
        <MarqueeRow items={clients} direction="right" />
        <MarqueeRow items={reversed} direction="left" />
      </div>
      <div className="shell mt-12 text-center">
        <ButtonLink to="/clients" variant="outline" arrow>
          View All Clients
        </ButtonLink>
      </div>
    </section>
  );
}

export function ClientGrid() {
  return (
    <ul className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
      {clients.map((c, i) => (
        <Reveal as="li" key={c.id} delay={i * 50}>
          <div className="flex h-36 items-center justify-center rounded-2xl border border-border bg-white p-6 shadow-soft transition-shadow hover:shadow-card">
            <img
              src={c.logo}
              alt={c.name}
              loading="lazy"
              className="max-h-20 w-auto max-w-full object-contain"
            />
          </div>
          <p className="mt-3 text-center text-xs font-semibold text-muted-foreground">{c.name}</p>
        </Reveal>
      ))}
    </ul>
  );
}

/* ------------------------------- CTASection ------------------------------- */

export function CTASection({
  title = "Have an Engineering Requirement?",
  text = "Tell us about your plant, scope and timeline. Our team will respond with a professional proposal.",
  primaryLabel = "Request a Quote",
  children,
}: {
  title?: string;
  text?: string;
  primaryLabel?: string;
  children?: ReactNode;
}) {
  return (
    <section className="py-20 lg:py-24">
      <div className="shell">
        <div
          className="relative isolate overflow-hidden rounded-3xl px-8 py-14 text-center lg:px-16 lg:py-20"
          style={{ background: "var(--gradient-blue)" }}
        >
          <div
            className="absolute -bottom-24 -right-24 -z-10 size-96 rounded-full opacity-40 blur-3xl"
            style={{ background: "var(--gradient-brand)" }}
            aria-hidden="true"
          />
          <h2 className="mx-auto max-w-2xl text-3xl text-white lg:text-4xl">{title}</h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-white/80">{text}</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            {children ?? (
              <>
                <ButtonLink
                  to="/request-a-quote"
                  variant="outline"
                  arrow
                  className="bg-white bg-none text-primary-dark hover:bg-accent hover:text-white"
                >
                  {primaryLabel}
                </ButtonLink>
                <ButtonLink href={`tel:${company.phoneHref}`} variant="glass">
                  Call {company.phone}
                </ButtonLink>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
