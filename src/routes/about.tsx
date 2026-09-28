import { createFileRoute } from "@tanstack/react-router";
import { Eye, Heart, Target, Wrench } from "lucide-react";
import aboutImg from "@/assets/images/misc/about-team.jpg";
import heroImg from "@/assets/images/hero/hero-industrial.jpg";
import { CredentialsSection } from "@/components/credentials";
import { CTASection, Industries, Statistics } from "@/components/sections";
import { CeoMessage, ManagementGrid, OrganizationalStructure } from "@/components/team";
import { PageHero, Reveal, SectionHeading } from "@/components/ui-kit";
import { services } from "@/data/services";
import { values } from "@/data/site";

const coreValues = [
  {
    icon: Eye,
    title: "OUR VISION",
    content: [
      "To emerge as a premier engineering enterprise, recognized across key industrial sectors for innovation, operational excellence, technical expertise, and lasting client partnerships.",
    ],
  },
  {
    icon: Wrench,
    title: "OUR CORE STRENGTHS",
    content: [
      "Engineering & Fabrication",
      "Erection & Project Execution",
      "HSE & Strategic Planning",
      "Technical Leadership",
    ],
  },
  {
    icon: Target,
    title: "OUR MISSION",
    content: [
      "To deliver top-tier engineering, fabrication, machining, structural erection, and project execution with uncompromised precision, quality, quality, and complete adherence to global safety standards.",
    ],
  },
  {
    icon: Heart,
    title: "OUR PHILOSOPHY",
    content: [
      "Providing engineering solution with Quality and Safety.",
      "Precision Engineering, Safety First, and Integrity.",
    ],
  },
];

function CoreValues() {
  return (
    <section className="py-20 lg:py-28">
      <div className="shell">
        <SectionHeading
          eyebrow="Corporate Values"
          title="OUR CORE VALUES"
          text="The principles that guide our engineering, execution and client relationships."
          align="center"
        />

        <ul className="mt-14 grid gap-6 sm:grid-cols-2">
          {coreValues.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal as="li" key={item.title} delay={i * 80}>
                <div className="group h-full rounded-2xl border border-border bg-white/80 p-7 shadow-card backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift sm:p-8">
                  <div className="flex items-start gap-5">
                    <span
                      className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white"
                      aria-hidden="true"
                    >
                      <Icon className="size-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg text-foreground transition-colors duration-300 group-hover:text-primary sm:text-xl">
                        {item.title}
                      </h3>
                      <div className="mt-3 space-y-2">
                        {item.content.map((line) => (
                          <p
                            key={line}
                            className="text-sm leading-relaxed text-muted-foreground"
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}


export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About MEEC | Engineering Trust Since 2003" },
      {
        name: "description",
        content:
          "Masha Allah Engineering Enterprises was established in 2003, delivering multidisciplinary engineering, fabrication, erection and construction services across Pakistan's industrial sectors.",
      },
      { property: "og:title", content: "About MEEC | Engineering Trust Since 2003" },
      {
        property: "og:description",
        content:
          "An established Pakistani engineering and industrial services company operating since 2003.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

function About() {
  return (
    <>
      <PageHero
        image={heroImg}
        eyebrow="About MEEC"
        title="Engineering Trust Since 2003"
        text="An established Pakistani engineering and industrial services company built on multidisciplinary capability, professional execution and quality-focused delivery."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "About" }]}
      />

      <section className="py-20 lg:py-28">
        <div className="shell grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative">
            <div className="overflow-hidden rounded-3xl shadow-lift">
              <img
                src={aboutImg}
                alt="MEEC engineering team reviewing fabrication drawings"
                width={1280}
                height={1440}
                loading="lazy"
                className="aspect-4/5 w-full object-cover"
              />
            </div>
            <div className="glass absolute -bottom-6 -right-2 rounded-2xl p-5 sm:-left-6 sm:right-auto">
              <p className="text-3xl font-extrabold text-gradient-brand">EST. 2003</p>
              <p className="mt-1 text-xs font-bold tracking-widest text-muted-foreground uppercase">
                Engineering Excellence
              </p>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="Company Introduction"
              title="A multidisciplinary engineering partner for industry."
              text="Masha Allah Engineering Enterprises (MEEC) was established in 2003 and has since developed into a multidisciplinary engineering and industrial services company serving clients across Pakistan."
            />
            <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                MEEC operates from Karachi with a head office in Gohar Green City, Malir, and a
                workshop facility at Yousuf Goth. From these bases our teams mobilise to plants and
                project sites for planned works, maintenance, shutdowns and new construction.
              </p>
              <p>
                Our strength is the ability to combine mechanical, electrical and civil disciplines
                with specialist services such as surface preparation, equipment and manpower supply
                and testing — so clients can hand over a complete scope to one accountable
                contractor.
              </p>
              <p>
                Every engagement is approached with the same principles: understand the technical
                requirement, plan the work, execute safely and verify the result.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CeoMessage />

      <CoreValues />

      <Statistics />

      <section className="py-20 lg:py-28">
        <div className="shell">
          <SectionHeading
            eyebrow="What We Do"
            title="Engineering, fabrication, erection and construction."
            text="Ten core capability areas covering the industrial project lifecycle."
            align="center"
          />

          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal as="li" key={s.id} delay={i * 60}>
                <div className="h-full rounded-2xl border border-border bg-white/75 p-6 backdrop-blur-sm">
                  <span className="text-xs font-bold tracking-widest text-accent-dark">
                    {s.number}
                  </span>
                  <h3 className="mt-2 text-lg">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {s.shortDescription}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <ManagementGrid />
      <OrganizationalStructure />
      <CredentialsSection />

      <Industries />


      <section className="gradient-light py-20 lg:py-28">
        <div className="shell">
          <SectionHeading
            eyebrow="Our Values"
            title="How we work"
            text="The standards that shape every MEEC project."
            align="center"
          />
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((v, i) => (
              <Reveal as="li" key={v.title} delay={i * 60}>
                <div className="h-full rounded-2xl border border-white/70 bg-white/70 p-6 text-center backdrop-blur-md">
                  <h3 className="text-base">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CTASection title="Ready to discuss your next project?" />
    </>
  );
}
