import { BadgeCheck, ShieldCheck } from "lucide-react";
import certFront from "@/assets/images/credentials/cert-pec-licence.jpg";
import certBack from "@/assets/images/credentials/cert-pec-engineers.jpg";
import { ButtonLink, Reveal, SectionHeading } from "@/components/ui-kit";
import { credentials } from "@/data/team";

export function CredentialsSection({ compact = false }: { compact?: boolean }) {
  return (
    <section className="gradient-light py-20 lg:py-28">
      <div className="shell">
        <SectionHeading
          eyebrow="Credentials"
          title="Licensed, registered and verifiable."
          text="MEEC operates as a formally registered engineering contractor — licensed with the Pakistan Engineering Council and tax registered for corporate contracting."
          align="center"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {credentials.map((c, i) => (
            <Reveal key={c.title} delay={i * 70}>
              <div className="glass h-full rounded-2xl p-7">
                <span className="flex size-12 items-center justify-center rounded-xl gradient-brand text-white">
                  <BadgeCheck className="size-6" />
                </span>
                <h3 className="mt-5 text-lg">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {!compact && (
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              { src: certFront, label: "PEC Licence — Front" },
              { src: certBack, label: "PEC Licence — Registered Engineers" },
            ].map((c, i) => (
              <Reveal key={c.label} delay={i * 80}>
                <figure className="glass overflow-hidden rounded-2xl p-3">
                  <img
                    src={c.src}
                    alt={`Masha Allah Engineering Enterprises ${c.label}`}
                    loading="lazy"
                    className="w-full rounded-xl object-contain"
                  />
                  <figcaption className="px-2 py-3 text-xs font-bold tracking-widest text-muted-foreground uppercase">
                    {c.label}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        )}

        {compact && (
          <div className="mt-10 flex justify-center">
            <ButtonLink to="/about" variant="outline" arrow>
              View Company Credentials
            </ButtonLink>
          </div>
        )}
      </div>
    </section>
  );
}

export function CredentialsStrip() {
  return (
    <div className="glass flex flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-2xl px-6 py-4">
      <span className="flex items-center gap-2 text-sm font-bold">
        <ShieldCheck className="size-5 text-primary" /> PEC Licensed Contractor
      </span>
      <span className="flex items-center gap-2 text-sm font-bold">
        <BadgeCheck className="size-5 text-accent-dark" /> NTN & Sales Tax Registered
      </span>
      <span className="flex items-center gap-2 text-sm font-bold">
        <ShieldCheck className="size-5 text-primary" /> Registered Professional Engineers
      </span>
    </div>
  );
}
