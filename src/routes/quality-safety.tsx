import { createFileRoute } from "@tanstack/react-router";
import { Check, HardHat, ShieldCheck } from "lucide-react";
import heroImg from "@/assets/images/gallery/g-site-safety-board.jpeg";
import toolboxImg from "@/assets/images/gallery/g-hse-toolbox-talk.jpeg";
import { CTASection } from "@/components/sections";
import { PageHero, Reveal, SectionHeading } from "@/components/ui-kit";
import { hsePolicy, qualityPolicy, qualityProcess } from "@/data/quality";

export const Route = createFileRoute("/quality-safety")({
  component: QualitySafety,
  head: () => ({
    meta: [
      { title: "HSE & Quality | MEEC Health, Safety and Quality Standards" },
      {
        name: "description",
        content:
          "MEEC's health, safety and environment commitments and quality assurance process — toolbox talks, job hazard analysis, PPE compliance, inspection and testing, and documented handover.",
      },
      { property: "og:title", content: "HSE & Quality | MEEC" },
      {
        property: "og:description",
        content:
          "Safety leadership, PPE compliance, inspection and testing, and documented quality handover on every MEEC project.",
      },
      { property: "og:url", content: "/quality-safety" },
    ],
    links: [{ rel: "canonical", href: "/quality-safety" }],
  }),
});

function QualitySafety() {
  return (
    <>
      <PageHero
        image={heroImg}
        eyebrow="HSE & Quality"
        title="Safe Execution, Verified Quality"
        text="No task is so urgent that it cannot be performed safely — and no scope is complete until it has been inspected, tested and documented."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "HSE & Quality" }]}
      />

      <section className="py-20 lg:py-28">
        <div className="shell grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="overflow-hidden rounded-3xl shadow-lift">
              <img
                src={toolboxImg}
                alt="MEEC site crew attending an HSE toolbox talk before starting work"
                loading="lazy"
                className="aspect-4/3 w-full object-cover"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="HSE Policy"
              title="Health, Safety & Environment"
              text={hsePolicy.statement}
            />
            <div className="mt-6 flex items-center gap-3 text-sm font-bold text-primary">
              <HardHat className="size-5" />
              Dedicated HSE Manager on every major scope
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="shell">
          <h2 className="text-2xl">{hsePolicy.promisesHeading}</h2>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2">
            {hsePolicy.promises.map((p, i) => (
              <Reveal as="li" key={p} delay={i * 50}>
                <div className="h-full rounded-2xl border border-border bg-white/75 p-6 backdrop-blur-sm">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-primary-light text-primary">
                    <ShieldCheck className="size-5" />
                  </span>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="gradient-light py-20 lg:py-28">
        <div className="shell grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            eyebrow="Quality Policy"
            title={qualityPolicy.heading}
            text={qualityPolicy.statement}
          />
          <Reveal>
            <div className="glass flex items-start gap-3 rounded-2xl p-6">
              <Check className="mt-0.5 size-5 shrink-0 text-accent-dark" />
              <p className="text-sm leading-relaxed">
                Every scope is executed to the client's specification, verified against approved
                inspection and test plans, and handed over with complete documentation.
              </p>
            </div>
          </Reveal>
        </div>
      </section>


      <section className="py-20 lg:py-28">
        <div className="shell">
          <SectionHeading
            eyebrow="Quality Process"
            title="How every scope is controlled"
            text="A repeatable five-stage process applied from tender through to handover."
            align="center"
          />
          <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {qualityProcess.map((s, i) => (
              <Reveal as="li" key={s.step} delay={i * 60}>
                <div className="h-full rounded-2xl border border-border bg-white/75 p-6 backdrop-blur-sm">
                  <span className="text-2xl font-extrabold text-gradient-brand">{s.step}</span>
                  <h3 className="mt-3 text-base">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <CTASection title="Working to your HSE and quality requirements." />
    </>
  );
}
