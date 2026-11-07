import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, Phone, ShieldCheck } from "lucide-react";
import { QuoteForm } from "@/components/forms";
import { PageHero, Reveal, SectionHeading } from "@/components/ui-kit";
import heroImg from "@/assets/images/services/svc-mechanical.jpg";
import { company } from "@/data/site";

export const Route = createFileRoute("/request-a-quote")({
  component: RequestQuote,
  head: () => ({
    meta: [
      { title: "Request a Quote | MEEC Engineering Enterprises" },
      {
        name: "description",
        content:
          "Request a quotation from MEEC for mechanical, electrical, civil, surface preparation, equipment supply or industrial testing works in Pakistan.",
      },
      { property: "og:title", content: "Request a Quote | MEEC" },
      {
        property: "og:description",
        content: "Send your engineering scope and receive a professional proposal from MEEC.",
      },
      { property: "og:url", content: "/request-a-quote" },
    ],
    links: [{ rel: "canonical", href: "/request-a-quote" }],
  }),
});

function RequestQuote() {
  const points = [
    { icon: Clock, title: "Prompt response", text: "Enquiries are reviewed by our engineering team." },
    { icon: ShieldCheck, title: "Confidential", text: "Drawings and specifications stay private." },
    { icon: Phone, title: "Direct contact", text: company.phone },
    { icon: Mail, title: "Email us", text: company.email },
  ];

  return (
    <>
      <PageHero
        image={heroImg}
        eyebrow="Request a Quote"
        title="Tell Us About Your Project"
        text="Provide your scope, location and timeline. We will respond with a proposal covering manpower, equipment, testing and schedule."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Request a Quote" }]}
      />

      <section className="py-20 lg:py-24">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_1.35fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="B2B Enquiry"
              title="A straightforward quotation process"
              text="Share as much technical detail as you can — the more we know about the plant and scope, the more accurate our proposal."
            />
            <ul className="mt-10 space-y-4">
              {points.map((p, i) => (
                <Reveal as="li" key={p.title} delay={i * 70}>
                  <div className="flex gap-4 rounded-xl border border-border bg-white/75 p-5 backdrop-blur-sm">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent-light text-accent-dark">
                      <p.icon className="size-5" />
                    </span>
                    <div>
                      <p className="font-bold">{p.title}</p>
                      <p className="text-sm text-muted-foreground">{p.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>

          <div>
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
