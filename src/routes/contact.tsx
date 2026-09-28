import { createFileRoute } from "@tanstack/react-router";
import { Factory, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms";
import { CTASection } from "@/components/sections";
import { PageHero, Reveal, SectionHeading } from "@/components/ui-kit";
import heroImg from "@/assets/images/services/svc-equipment.jpg";
import { company } from "@/data/site";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact MEEC | Karachi Engineering & Industrial Services" },
      {
        name: "description",
        content:
          "Contact Masha Allah Engineering Enterprises — head office R-82 Gohar Green City, Malir, Karachi. Phone +92 300 3600203, email info@meec.com.pk.",
      },
      { property: "og:title", content: "Contact MEEC" },
      {
        property: "og:description",
        content: "Speak to our engineering team in Karachi about your industrial project.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

/** MEE Workshop — client-confirmed location (24.863548, 67.260686). */
const mapEmbedSrc =
  "https://www.google.com/maps?q=24.863548,67.260686&z=16&hl=en&output=embed";
const mapLink = "https://maps.app.goo.gl/xqKjCJD49ow8oqqKA";

function Contact() {
  const cards = [
    {
      icon: MapPin,
      title: "Head Office",
      lines: [company.headOffice],
    },
    {
      icon: Factory,
      title: "Workshop",
      lines: [company.workshop],
    },
    {
      icon: Phone,
      title: "Phone",
      lines: [company.phone],
      href: `tel:${company.phoneHref}`,
    },
    {
      icon: Mail,
      title: "Email",
      lines: [company.email, company.altEmail],
      href: `mailto:${company.email}`,
    },
  ];

  return (
    <>
      <PageHero
        image={heroImg}
        eyebrow="Contact"
        title="Talk to Our Engineering Team"
        text="Share your requirement and we will respond with the right technical contact, scope and commercial proposal."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
      />

      <section className="py-20 lg:py-24">
        <div className="shell">
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((c, i) => (
              <Reveal as="li" key={c.title} delay={i * 70}>
                <div className="h-full rounded-2xl border border-border bg-white/75 p-6 shadow-soft backdrop-blur-sm">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-primary-light text-primary">
                    <c.icon className="size-5" />
                  </span>
                  <h2 className="mt-5 text-base">{c.title}</h2>
                  <div className="mt-2 space-y-1 text-sm leading-relaxed text-muted-foreground">
                    {c.lines.map((l) =>
                      c.href ? (
                        <a
                          key={l}
                          href={l.includes("@") ? `mailto:${l}` : c.href}
                          className="block hover:text-primary"
                        >
                          {l}
                        </a>
                      ) : (
                        <p key={l}>{l}</p>
                      ),
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>

          <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <SectionHeading
                eyebrow="Send a Message"
                title="How can we help?"
                text="Complete the form and our team will get back to you promptly."
              />
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
            <div>
              <SectionHeading eyebrow="Location" title="Find us in Karachi" />
              <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-card">
                <iframe
                  title="MEEC head office location map"
                  src={mapEmbedSrc}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-[420px] w-full border-0 lg:h-[520px]"
                />
              </div>
              <a
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Prefer a formal quotation?" primaryLabel="Request a Quote" />
    </>
  );
}
