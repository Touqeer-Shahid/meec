import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Copy, Share2, ShieldCheck, UserCheck } from "lucide-react";
import { useState } from "react";
import { CTASection } from "@/components/sections";
import { Portrait } from "@/components/team";
import { Breadcrumbs, Reveal, SectionHeading } from "@/components/ui-kit";
import { getManagerBySlug, management, type Manager } from "@/data/team";

export const Route = createFileRoute("/management-team/$slug")({
  loader: ({ params }) => {
    const member = getManagerBySlug(params.slug);
    if (!member) throw notFound();
    return { member };
  },
  head: ({ loaderData }) => {
    const member = loaderData?.member;
    const name = member?.name ?? "Management Team Member";
    const role = member?.role ?? "Management Team";
    const bioExcerpt =
      member?.profile?.[0] ??
      member?.focus ??
      "Management Team Member at MashaAllah Engineering Enterprises (MEEC).";

    return {
      meta: [
        { title: `${name} - ${role} | MashaAllah Engineering Enterprises` },
        { name: "description", content: bioExcerpt },
        { property: "og:title", content: `${name} | ${role} - MEEC` },
        { property: "og:description", content: bioExcerpt },
        { property: "og:type", content: "profile" },
        {
          property: "og:url",
          content: `https://meec.com.pk/management-team/${member?.slug}`,
        },
      ],
      links: [
        {
          rel: "canonical",
          href: `https://meec.com.pk/management-team/${member?.slug}`,
        },
      ],
    };
  },
  component: ManagementMemberProfile,
});

function ShareProfileButton({ name, role }: { name: string; role: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (typeof window !== "undefined") {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    } catch {
      // Fallback if clipboard API is restricted
    }
  };

  const handleNativeShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: `${name} - ${role} | MEEC`,
          text: `Professional profile of ${name}, ${role} at MashaAllah Engineering Enterprises`,
          url: window.location.href,
        });
      } catch {
        // User cancelled or share unsupported
      }
    } else {
      handleCopy();
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-2 pt-2">
      <button
        type="button"
        onClick={handleCopy}
        className="inline-flex items-center gap-2 rounded-xl border border-border bg-white px-4 py-2.5 text-xs font-bold tracking-wide text-foreground shadow-soft transition-all duration-200 hover:border-primary hover:text-primary hover:shadow-card cursor-pointer"
        title="Copy direct profile link to clipboard"
      >
        {copied ? (
          <>
            <Check className="size-4 text-accent-dark" />
            <span className="text-accent-dark">Link Copied!</span>
          </>
        ) : (
          <>
            <Copy className="size-4 text-muted-foreground" />
            <span>Copy Profile Link</span>
          </>
        )}
      </button>

      {typeof navigator !== "undefined" && typeof navigator.share === "function" && (
        <button
          type="button"
          onClick={handleNativeShare}
          className="inline-flex items-center gap-2 rounded-xl border border-border bg-white px-4 py-2.5 text-xs font-bold tracking-wide text-foreground shadow-soft transition-all duration-200 hover:border-primary hover:text-primary hover:shadow-card cursor-pointer"
          title="Share profile"
        >
          <Share2 className="size-4 text-muted-foreground" />
          <span>Share</span>
        </button>
      )}
    </div>
  );
}

function ManagementMemberProfile() {
  const { member } = Route.useLoaderData();
  const otherMembers = management.filter((m: Manager) => m.slug !== member.slug);

  return (
    <>
      {/* Top Banner / Breadcrumb Area */}
      <section className="relative isolate overflow-hidden border-b border-border bg-gradient-to-b from-primary-light/40 via-white to-white pt-32 pb-12 lg:pt-38 lg:pb-16">
        <div className="shell">
          <Breadcrumbs
            items={[
              { label: "Home", to: "/" },
              { label: "About", to: "/about" },
              { label: "Management Team", to: "/about" },
              { label: member.name },
            ]}
          />

          <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
            <Link
              to="/about"
              className="group inline-flex items-center gap-2 text-xs font-bold tracking-widest text-primary uppercase transition-colors hover:text-accent-dark"
            >
              <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to Management Team</span>
            </Link>

            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold tracking-wider text-primary uppercase">
              <ShieldCheck className="size-3.5 text-accent-dark" />
              MEEC Executive Leadership
            </span>
          </div>
        </div>
      </section>

      {/* Main Profile Content */}
      <section className="py-14 lg:py-20">
        <div className="shell grid gap-12 lg:grid-cols-[380px_minmax(0,1fr)] lg:gap-16">
          {/* Left Column: Portrait & Key Details Card */}
          <aside>
            <div className="lg:sticky lg:top-28 space-y-6">
              <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-lift">
                <div className="aspect-4/5 w-full overflow-hidden bg-muted/40">
                  <Portrait member={member} className="size-full object-cover object-top" />
                </div>
                <div className="p-6">
                  <span className="eyebrow text-xs font-bold tracking-widest text-primary uppercase">
                    {member.role}
                  </span>
                  <h1 className="mt-1.5 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    {member.name}
                  </h1>

                  <div className="mt-4 rounded-xl border border-border/80 bg-neutral-50/80 p-4">
                    <p className="text-xs font-bold tracking-wider text-muted-foreground uppercase">
                      Operational Responsibility
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-foreground font-medium">
                      {member.focus}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-border pt-4">
                    <p className="text-xs font-semibold text-muted-foreground">
                      Shareable Permanent Profile:
                    </p>
                    <ShareProfileButton name={member.name} role={member.role} />
                  </div>
                </div>
              </div>

              {/* Direct Link Info Box */}
              <div className="rounded-2xl border border-border bg-white/70 p-5 shadow-soft backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary-light text-primary">
                    <UserCheck className="size-4" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-foreground">Verified Profile</h2>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      Official management profile page for MashaAllah Engineering Enterprises
                      (MEEC), Karachi, Pakistan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Right Column: Biography & Full Details */}
          <main className="space-y-10">
            <div>
              <span className="eyebrow text-primary">Executive Profile</span>
              <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
                Professional Background & Leadership
              </h2>
              <div className="mt-4 h-1 w-16 rounded-full gradient-brand" aria-hidden="true" />
            </div>

            {/* Profile Paragraphs */}
            <div className="space-y-6">
              {member.profile.map((paragraph: string, index: number) => (
                <Reveal key={index} delay={index * 80}>
                  <div className="rounded-2xl border border-border/70 bg-white p-7 shadow-card transition-shadow hover:shadow-lift sm:p-8">
                    <p className="text-base leading-relaxed text-foreground/80 sm:text-lg sm:leading-relaxed">
                      {paragraph}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Core Focus Block */}
            <Reveal delay={200}>
              <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary-light/50 to-white p-7 sm:p-8">
                <h3 className="text-lg font-bold text-foreground">
                  Leadership Scope at MEEC
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {member.focus}
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-xs font-bold tracking-wide text-white shadow-soft transition-all hover:bg-primary-dark"
                  >
                    Contact Management
                    <ArrowRight className="size-3.5" />
                  </Link>
                  <Link
                    to="/request-a-quote"
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-white px-5 py-2.5 text-xs font-bold tracking-wide text-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    Submit Scope / RFP
                  </Link>
                </div>
              </div>
            </Reveal>
          </main>
        </div>
      </section>

      {/* Related Management Team Members Section */}
      <section className="border-t border-border bg-neutral-50/60 py-20 lg:py-24">
        <div className="shell">
          <SectionHeading
            eyebrow="Leadership Team"
            title="Other Management Team Members"
            text="Explore the experienced leadership guiding MEEC across engineering, fabrication, machine shop, HSE, and project execution."
            align="center"
          />

          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherMembers.slice(0, 3).map((m: Manager, i: number) => (
              <Reveal as="li" key={m.slug} delay={i * 60}>
                <Link
                  to="/management-team/$slug"
                  params={{ slug: m.slug }}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white text-left shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 hover:shadow-lift"
                >
                  <div className="aspect-4/5 w-full overflow-hidden bg-muted/40">
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

          <div className="mt-12 text-center">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
            >
              <ArrowLeft className="size-4" />
              View All Management Team Members on About Page
            </Link>
          </div>
        </div>
      </section>

      <CTASection title="Partner with MEEC on your next industrial project." />
    </>
  );
}
