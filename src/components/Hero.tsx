import { ArrowRight, FileText } from "lucide-react";
import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/images/hero/hero-industrial.jpg";
import { btnStyles } from "@/components/ui-kit";
import { cn } from "@/lib/utils";

const step = (delay: number) => ({
  animation: `fade-up 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}ms both`,
});

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[42rem] items-center overflow-hidden pt-32 pb-24 lg:min-h-[46rem] lg:pb-28">
      <img
        src={heroImg}
        alt="Industrial refinery plant with piping racks and engineering crew"
        width={1920}
        height={1088}
        fetchPriority="high"
        className="absolute inset-0 -z-20 size-full object-cover"
        style={{ animation: "fade-up 1.2s ease-out both" }}
      />
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--hero-overlay)" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(8,81,127,0.55) 0%, rgba(11,95,150,0.18) 40%, rgba(8,81,127,0.62) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="shell relative">
        <div className="max-w-3xl">
          <p
            className="eyebrow text-accent"
            style={step(120)}
          >
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            Masha Allah Engineering Enterprises
          </p>

          <h1
            className="mt-6 text-4xl leading-[1.04] text-white sm:text-5xl lg:text-[4.25rem]"
            style={step(240)}
          >
            Engineering Solutions Built for{" "}
            <span className="bg-gradient-to-r from-white via-white to-[#67BA45] bg-clip-text text-transparent">
              Industrial Performance.
            </span>
          </h1>

          <p
            className="mt-7 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg"
            style={step(380)}
          >
            Since 2003, MEEC has delivered multidisciplinary engineering and industrial services —
            mechanical, electrical and civil works, fabrication, erection, surface preparation,
            equipment and manpower supply, and testing — for Pakistan's industrial sectors.
          </p>

          <div className="mt-10 flex flex-wrap gap-3" style={step(520)}>
            <Link to="/services" className={cn(btnStyles.accent, "group")}>
              Explore Our Services
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/request-a-quote" className={btnStyles.glass}>
              Request a Quote
            </Link>
            <a
              href="/MEEC-Company-Profile.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(btnStyles.glass, "group")}
            >
              <FileText className="size-4" />
              View Company Profile
            </a>
          </div>
        </div>

        <div
          className="glass-dark mt-14 inline-flex items-center gap-5 rounded-2xl px-6 py-5 lg:absolute lg:right-8 lg:-bottom-4 lg:mt-0"
          style={step(680)}
        >
          <span className="text-3xl font-extrabold text-white lg:text-4xl">EST. 2003</span>
          <span className="h-10 w-px bg-white/25" aria-hidden="true" />
          <span className="max-w-[11rem] text-xs font-bold leading-snug tracking-wider text-white/75 uppercase">
            Engineering Excellence Since 2003
          </span>
        </div>
      </div>
    </section>
  );
}
