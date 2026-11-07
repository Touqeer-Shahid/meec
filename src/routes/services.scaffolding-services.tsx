import { createFileRoute } from "@tanstack/react-router";
import {
  Badge,
  ClipboardCheck,
  Factory,
  Gauge,
  HardHat,
  History,
  Layers,
  ShieldCheck,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { CTASection } from "@/components/sections";
import {
  ButtonLink,
  PageHero,
  Reveal,
  SectionHeading,
} from "@/components/ui-kit";
import scaffoldingImage from "@/assets/images/services/scaffolding-services.jpg";

const capabilities: { icon: LucideIcon; title: string; description: string }[] =
  [
    {
      icon: HardHat,
      title: "Scaffolding Installation & Erection",
      description:
        "Installation and erection of scaffolding systems for project access requirements.",
    },
    {
      icon: Wrench,
      title: "Scaffolding Dismantling",
      description:
        "Dismantling scaffolding systems as project work is completed.",
    },
    {
      icon: ClipboardCheck,
      title: "Scaffolding Inspection",
      description:
        "Inspection of scaffolding systems as part of safe working access.",
    },
    {
      icon: Gauge,
      title: "Scaffolding Maintenance",
      description:
        "Maintenance of scaffolding systems in support of ongoing project needs.",
    },
    {
      icon: Factory,
      title: "Industrial Maintenance Scaffolding",
      description: "Scaffolding access for industrial maintenance activities.",
    },
    {
      icon: Layers,
      title: "Construction & Fabrication Support",
      description: "Working access for construction and fabrication projects.",
    },
    {
      icon: History,
      title: "Shutdown Scaffolding",
      description: "Scaffolding support for industrial shutdown activities.",
    },
    {
      icon: Badge,
      title: "Turnaround Scaffolding Activities",
      description: "Scaffolding support for turnaround activities.",
    },
  ];

const priorities: { icon: LucideIcon; title: string }[] = [
  { icon: ShieldCheck, title: "Workplace Safety" },
  { icon: Layers, title: "High-Quality Materials" },
  { icon: HardHat, title: "Professional Supervision" },
  { icon: History, title: "Timely Execution" },
  { icon: Gauge, title: "Operational Efficiency" },
  { icon: ClipboardCheck, title: "Industry Safety Standards" },
];

export const Route = createFileRoute("/services/scaffolding-services")({
  component: ScaffoldingServices,
  head: () => ({
    meta: [
      { title: "Scaffolding Services | MEEC Engineering Enterprises" },
      {
        name: "description",
        content:
          "Safe, reliable and professional scaffolding solutions for industrial and commercial projects by MashaAllah Engineering Enterprises.",
      },
      { property: "og:title", content: "Scaffolding Services | MEEC" },
      {
        property: "og:description",
        content:
          "Safe, reliable and professional scaffolding solutions for industrial and commercial projects.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services/scaffolding-services" }],
  }),
});

function ScaffoldingServices() {
  return (
    <>
      <PageHero
        image={scaffoldingImage}
        eyebrow="Service 11"
        title="Scaffolding Services"
        text="Safe, Reliable & Professional Scaffolding Solutions for Industrial and Commercial Projects."
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Services", to: "/services" },
          { label: "Scaffolding Services" },
        ]}
      />

      <section className="py-20 lg:py-24">
        <div className="shell grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <SectionHeading
            eyebrow="Overview"
            title="Professional Scaffolding Solutions"
          />
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              MashaAllah Engineering Enterprises offers comprehensive and
              professional scaffolding services, providing safe, reliable, and
              efficient access solutions for industrial, commercial, and
              large-scale engineering projects.
            </p>
            <p>
              We maintain a strong inventory of brand-new, high-quality
              scaffolding materials, supported by a highly skilled, experienced,
              and dedicated scaffolding team committed to delivering work in
              accordance with industry safety standards and project
              requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="gradient-light py-20 lg:py-24">
        <div className="shell">
          <SectionHeading
            eyebrow="Our Scaffolding Capabilities"
            title="Comprehensive Scaffolding Services"
            text="Our scaffolding services cover the installation, erection, dismantling, inspection, and maintenance of scaffolding systems, ensuring safe working access for construction, fabrication, maintenance, shutdowns, and turnaround activities."
            align="center"
          />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map(({ icon: Icon, title, description }, index) => (
              <Reveal as="li" key={title} delay={index * 45}>
                <div className="h-full rounded-2xl border border-white/80 bg-white/75 p-6 shadow-soft backdrop-blur-sm">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-primary-light text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-base font-bold leading-snug">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <SectionHeading
            eyebrow="Annual Service Contracts"
            title="Trusted Industrial Partnerships"
            text="We are proud to have established annual scaffolding service contracts with renowned industrial organizations, including:"
          />
          <div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {[
                "Engro Polymer & Chemicals",
                "National Refinery Limited (NRL)",
              ].map((client, index) => (
                <Reveal as="li" key={client} delay={index * 70}>
                  <div className="flex min-h-32 items-center gap-5 rounded-2xl border border-border bg-white/75 p-6 shadow-soft">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
                      <Factory className="size-6" aria-hidden="true" />
                    </span>
                    <h3 className="text-lg font-bold leading-snug">{client}</h3>
                  </div>
                </Reveal>
              ))}
            </ul>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              In addition to these long-term contractual engagements, we
              continuously provide scaffolding services to our other valued
              clients across various industrial sectors.
            </p>
          </div>
        </div>
      </section>

      <section className="gradient-light py-20 lg:py-24">
        <div className="shell">
          <SectionHeading
            eyebrow="Safety & Quality"
            title="Our Commitment to Safety & Quality"
            text="At MashaAllah Engineering Enterprises, we prioritize workplace safety, material quality, professional supervision, timely execution, and operational efficiency. Our commitment is to deliver dependable scaffolding solutions that meet our clients' expectations and support smooth, safe, and uninterrupted project operations."
            align="center"
          />
          <ul className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {priorities.map(({ icon: Icon, title }, index) => (
              <Reveal as="li" key={title} delay={index * 50}>
                <div className="flex min-h-20 items-center gap-4 rounded-xl border border-white/80 bg-white/75 px-5 py-4 shadow-soft backdrop-blur-sm">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary-light text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="font-bold">{title}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        title="Need Reliable Scaffolding Solutions for Your Project?"
        text="Our experienced team is ready to support your industrial and commercial scaffolding requirements."
      >
        <ButtonLink to="/contact" arrow>
          Contact Us
        </ButtonLink>
      </CTASection>
    </>
  );
}
