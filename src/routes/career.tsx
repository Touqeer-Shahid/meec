import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, ChevronDown, MapPin } from "lucide-react";
import { useState } from "react";
import heroImg from "@/assets/images/hero/hero-industrial.jpg";
import { VacancyForm } from "@/components/forms";
import { CTASection } from "@/components/sections";
import { PageHero, Reveal, SectionHeading } from "@/components/ui-kit";
import { vacancies } from "@/data/vacancies";
import { cn } from "@/lib/utils";
import { btnStyles } from "@/components/ui-kit";

type Partition = "apply" | "vacancies";

const partitions: { label: string; value: Partition }[] = [
  { label: "Online Apply", value: "apply" },
  { label: "Vacancies", value: "vacancies" },
];

export const Route = createFileRoute("/career")({
  component: Opportunities,
  head: () => ({
    meta: [
      { title: "New Career Opportunities | Careers at MEEC" },
      {
        name: "description",
        content:
          "Apply online to join Masha Allah Engineering Enterprises and view current vacancies across our engineering, project, machine shop and QHSE teams.",
      },
      { property: "og:title", content: "New Career Opportunities | Careers at MEEC" },
      {
        property: "og:description",
        content:
          "Online application and current vacancies at Masha Allah Engineering Enterprises.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/career" },
    ],
    links: [{ rel: "canonical", href: "/career" }],
  }),
});

function VacanciesList({ onApply }: { onApply: () => void }) {
  const [openId, setOpenId] = useState<string | null>(null);

  if (vacancies.length === 0) {
    return (
      <Reveal>
        <div className="rounded-2xl border border-border bg-white/75 p-10 text-center backdrop-blur-sm">
          <Briefcase className="mx-auto size-8 text-primary" />
          <h3 className="mt-4 text-lg">Currently, there are Several vacancies available.</h3>
          <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
            You are welcome to
            submit an online application so your details are on file with our HR team.
          </p>
          <button
            type="button"
            onClick={onApply}
            className="mt-6 text-sm font-bold text-primary underline-offset-4 hover:underline"
          >
            Go to Online Apply
          </button>
        </div>
      </Reveal>
    );
  }

  return (
    <ul className="grid gap-5 lg:grid-cols-2">
      {vacancies.map((v, i) => {
        const open = openId === v.id;
        return (
          <Reveal as="li" key={v.id} delay={i * 60}>
            <div className="h-full rounded-2xl border border-border bg-white/75 p-6 backdrop-blur-sm">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg">{v.title}</h3>
                  {v.department && (
                    <p className="mt-1 text-xs font-bold tracking-widest text-accent-dark uppercase">
                      {v.department}
                    </p>
                  )}
                </div>
                {v.employmentType && (
                  <span className="rounded-full bg-primary-light px-3 py-1 text-[0.65rem] font-bold tracking-widest text-primary-dark uppercase">
                    {v.employmentType}
                  </span>
                )}
              </div>

              <dl className="mt-4 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                {v.location && (
                  <div className="flex items-center gap-2">
                    <MapPin className="size-4 shrink-0 text-primary" /> {v.location}
                  </div>
                )}
                {v.experience && (
                  <div>
                    <span className="font-semibold text-foreground">Experience: </span>
                    {v.experience}
                  </div>
                )}
                {v.qualification && (
                  <div>
                    <span className="font-semibold text-foreground">Qualification: </span>
                    {v.qualification}
                  </div>
                )}
              </dl>

              {v.description && (
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {v.description}
                </p>
              )}

              {v.requirements && v.requirements.length > 0 && (
                <>
                  <button
                    type="button"
                    onClick={() => setOpenId(open ? null : v.id)}
                    aria-expanded={open}
                    className="mt-4 flex items-center gap-1.5 text-sm font-bold text-primary"
                  >
                    {open ? "Hide requirements" : "View requirements"}
                    <ChevronDown className={cn("size-4 transition-transform", open && "rotate-180")} />
                  </button>
                  {open && (
                    <ul className="mt-3 space-y-2 border-l-2 border-accent pl-4 text-sm leading-relaxed text-muted-foreground">
                      {v.requirements.map((r) => (
                        <li key={r}>{r}</li>
                      ))}
                    </ul>
                  )}
                </>
              )}

              <button
                type="button"
                onClick={onApply}
                className="mt-6 text-sm font-bold text-primary underline-offset-4 hover:underline"
              >
                Apply for this role
              </button>
            </div>
          </Reveal>
        );
      })}
    </ul>
  );
}

const handleCopyCareerLink = async () => {
  await navigator.clipboard.writeText("https://meec.com.pk/career");
};

function Opportunities() {
  const [active, setActive] = useState<Partition>("apply");

  return (
    <>
      <PageHero
        image={heroImg}
        eyebrow="Careers"
        title="New Career Opportunities"
        text="Apply online to join MEEC, or review the vacancies currently open across our engineering, project, machine shop and QHSE teams."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "New Career Opportunities" }]}
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
          <br></br>
          <button onClick={handleCopyCareerLink} className={btnStyles.accent}>
                    Copy Page Link
                </button>

          {active === "apply" ? (
            <div className="mt-12 grid items-start gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
              <div>
                <SectionHeading
                  eyebrow="Online Apply"
                  title="Submit your application"
                  text="We continually look for qualified engineers, supervisors and skilled trade professionals to join our project, machine shop and QHSE teams."
                />
                <ul className="mt-8 space-y-3 text-sm leading-relaxed text-muted-foreground">
                  <li>Mechanical, civil, electrical and instrumentation disciplines</li>
                  <li>Site supervisors, welders, fitters, riggers and machinists</li>
                  <li>Planning, estimation, QA/QC and HSE professionals</li>
                </ul>
                <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
                  Complete the application form and your details will be sent directly to our HR
                  team on WhatsApp, where you can also attach your CV.
                </p>
                
              </div>
              <VacancyForm />
            </div>
          ) : (
            <div className="mt-12">
              <SectionHeading
                eyebrow="Vacancies"
                title="Current openings"
                text="Available positions at Masha Allah Engineering Enterprises."
              />
              <div className="mt-10">
                <VacanciesList onApply={() => setActive("apply")} />
              </div>
            </div>
          )}
        </div>
      </section>

      <CTASection title="Have a question about working at MEEC?" />
    </>
  );
}
