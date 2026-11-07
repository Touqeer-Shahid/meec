import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "@/assets/images/logo/meec-logo.png";
import { services } from "@/data/services";
import { company } from "@/data/site";
import { cn } from "@/lib/utils";
import { btnStyles } from "@/components/ui-kit";

const nav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  // { label: "Industries", to: "/industries" },
  { label: "Equipment", to: "/equipment" },
  { label: "HSE & Quality", to: "/quality-safety" },
  { label: "Projects", to: "/projects" },
  { label: "Career", to: "/career" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];


function Brand(_props: { compact?: boolean }) {
  return (
    <Link to="/" className="flex items-center" aria-label={`${company.short} — home`}>
      <img
        src={logo}
        alt="Masha Allah Engineering Enterprises logo"
        width={1262}
        height={878}
        className="h-15 w-auto object-contain sm:h-12 lg:h-17"
      />
    </Link>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border/70 bg-white/95 shadow-soft backdrop-blur-xl"
          : "border-b border-border/50 bg-white",
      )}
    >
      <div className="shell flex h-18 items-center justify-between gap-4 py-3">
        <Brand compact={scrolled} />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {nav.map((item) =>
            item.label === "Services" ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  to="/services"
                  className={cn(
                    "flex items-center gap-1 rounded-md px-3.5 py-2 text-sm font-semibold transition-colors",
                    "text-foreground hover:text-primary",
                  )}
                  onFocus={() => setServicesOpen(true)}
                >
                  Services
                  <ChevronDown
                    className={cn("size-4 transition-transform", servicesOpen && "rotate-180")}
                  />
                </Link>
                <div
                  className={cn(
                    "absolute left-1/2 top-full w-[34rem] -translate-x-1/2 pt-3 transition-all duration-200",
                    servicesOpen
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-1 opacity-0",
                  )}
                >
                  <div className="grid grid-cols-2 gap-1 rounded-xl border border-border bg-white p-3 shadow-lift">
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        to="/services/$slug"
                        params={{ slug: s.slug }}
                        className="group rounded-lg p-3 transition-colors hover:bg-primary-light"
                        onClick={() => setServicesOpen(false)}
                      >
                        <span className="text-[0.7rem] font-bold tracking-widest text-accent-dark">
                          {s.number}
                        </span>
                        <span className="block text-sm font-bold group-hover:text-primary">
                          {s.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className={cn(
                  "rounded-md px-3.5 py-2 text-sm font-semibold transition-colors",
                  "text-foreground hover:text-primary",
                )}
                activeProps={{ className: "text-primary" }}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          {/* <a
            href={`tel:${company.phoneHref}`}
            className={cn(
              "flex items-center gap-2 text-sm font-semibold transition-colors",
              "text-muted-foreground hover:text-primary",
            )}
          >
            <Phone className="size-4" />
            {company.phone}
          </a> */}
          <Link to="/request-a-quote" className={cn(btnStyles.primary, "px-5 py-2.5")}>
            Get a Quote
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "flex size-11 items-center justify-center rounded-lg border transition-colors lg:hidden",
            "border-border bg-white text-foreground",
          )}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-border bg-white transition-[max-height] duration-500 lg:hidden",
          open ? "max-h-[80vh] overflow-y-auto" : "max-h-0 border-t-0",
        )}
      >
        <nav className="shell flex flex-col gap-1 py-5" aria-label="Mobile">
          {nav.map((item) =>
            item.label === "Services" ? (
              <div key="services-m">
                <div className="flex items-center">
                  <Link
                    to="/services"
                    onClick={() => setOpen(false)}
                    className="flex-1 py-3 text-base font-bold"
                  >
                    Services
                  </Link>
                  <button
                    type="button"
                    aria-label="Toggle services list"
                    aria-expanded={mobileServices}
                    onClick={() => setMobileServices((v) => !v)}
                    className="flex size-10 items-center justify-center rounded-md border border-border"
                  >
                    <ChevronDown
                      className={cn("size-4 transition-transform", mobileServices && "rotate-180")}
                    />
                  </button>
                </div>
                {mobileServices && (
                  <ul className="mb-2 space-y-1 border-l-2 border-accent pl-4">
                    {services.map((s) => (
                      <li key={s.slug}>
                        <Link
                          to="/services/$slug"
                          params={{ slug: s.slug }}
                          onClick={() => setOpen(false)}
                          className="block py-2 text-sm font-semibold text-muted-foreground"
                        >
                          {s.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 text-base font-bold last:border-0"
              >
                {item.label}
              </Link>
            ),
          )}
          <Link
            to="/request-a-quote"
            onClick={() => setOpen(false)}
            className={cn(btnStyles.primary, "mt-4 w-full")}
          >
            Request a Quote
          </Link>
          <a
            href={`tel:${company.phoneHref}`}
            className="mt-2 flex items-center justify-center gap-2 py-2 text-sm font-semibold text-muted-foreground"
          >
            <Phone className="size-4" /> {company.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}
