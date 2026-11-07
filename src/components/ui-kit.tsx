import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/* ---------------------------------- Reveal --------------------------------- */

export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article" | "span";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={cn("transition-none", className)}
      style={
        shown
          ? { animation: `fade-up 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}ms both` }
          : { opacity: 0 }
      }
    >
      {children}
    </Tag>
  );
}

/* --------------------------------- Buttons -------------------------------- */

const btnBase =
  "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-bold tracking-wide transition-all duration-300 disabled:opacity-60 disabled:pointer-events-none";

export const btnStyles = {
  primary: cn(
    btnBase,
    "gradient-blue text-white shadow-[0_10px_28px_-12px_rgba(18,125,194,0.75)] hover:shadow-[0_16px_36px_-12px_rgba(103,186,69,0.6)] hover:brightness-110",
  ),
  accent: cn(btnBase, "gradient-brand text-white hover:brightness-110 shadow-soft"),
  glass: cn(
    btnBase,
    "border border-white/45 bg-white/12 text-white backdrop-blur-md hover:bg-white/22",
  ),
  outline: cn(
    btnBase,
    "border border-border bg-white text-foreground hover:border-primary hover:text-primary",
  ),
};

export function ButtonLink({
  to,
  href,
  variant = "primary",
  children,
  className,
  arrow,
}: {
  to?: string;
  href?: string;
  variant?: keyof typeof btnStyles;
  children: ReactNode;
  className?: string;
  arrow?: boolean;
}) {
  const cls = cn(btnStyles[variant], "group", className);
  const inner = (
    <>
      {children}
      {arrow && <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />}
    </>
  );
  if (href) {
    return (
      <a href={href} className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <Link to={to ?? "/"} className={cls}>
      {inner}
    </Link>
  );
}

/* ------------------------------ SectionHeading ---------------------------- */

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
  light = false,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  text?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        light && "text-white",
        className,
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "eyebrow mb-4",
            light ? "text-white/70" : "text-primary",
            align === "center" && "justify-center",
          )}
        >
          <span
            className={cn("h-px w-8", light ? "bg-white/50" : "bg-accent")}
            aria-hidden="true"
          />
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl leading-[1.1] sm:text-4xl lg:text-[2.75rem]">{title}</h2>
      {text && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed",
            light ? "text-white/75" : "text-muted-foreground",
          )}
        >
          {text}
        </p>
      )}
    </div>
  );
}

/* ------------------------------- Breadcrumbs ------------------------------ */

export function Breadcrumbs({
  items,
  light,
}: {
  items: { label: string; to?: string }[];
  light?: boolean;
}) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol
        className={cn(
          "flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wide",
          light ? "text-white/70" : "text-muted-foreground",
        )}
      >
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true">/</span>}
            {item.to ? (
              <Link to={item.to} className={cn("hover:underline", light && "hover:text-white")}>
                {item.label}
              </Link>
            ) : (
              <span className={light ? "text-white" : "text-foreground"}>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/* ------------------------------- PageHero -------------------------------- */

export function PageHero({
  image,
  eyebrow,
  title,
  text,
  breadcrumbs,
  children,
}: {
  image: string;
  eyebrow?: string;
  title: string;
  text?: string;
  breadcrumbs?: { label: string; to?: string }[];
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-24">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 size-full object-cover"
      />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(100deg, rgba(8,81,127,0.93) 0%, rgba(11,95,150,0.7) 55%, rgba(18,125,194,0.28) 100%)",
        }}
        aria-hidden="true"
      />
      <div className="shell">
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} light />}
        {eyebrow && (
          <span className="eyebrow mb-4 text-accent">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            {eyebrow}
          </span>
        )}
        <h1 className="max-w-3xl text-4xl leading-[1.05] text-white sm:text-5xl lg:text-[3.5rem]">
          {title}
        </h1>
        {text && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">{text}</p>}
        {children}
      </div>
    </section>
  );
}
