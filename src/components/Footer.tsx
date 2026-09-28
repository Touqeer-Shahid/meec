import { Link } from "@tanstack/react-router";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/images/logo/logo-white.png";
import { services } from "@/data/services";
import { company } from "@/data/site";
import "./style.css";

export function Footer() {
  return (
    <footer className="bg-footer text-white/70">
      <div className="shell py-16 lg:py-20">
        {/* CTA band */}
        <div className="mb-16 flex flex-col items-start justify-between gap-6 rounded-2xl border border-white/12 bg-white/[0.06] p-8 backdrop-blur-md md:flex-row md:items-center lg:p-10">
          <div>
            <h2 className="text-2xl text-white lg:text-3xl">Have an Engineering Project in Mind?</h2>
            <p className="mt-2 max-w-xl text-sm">
              Share your scope and our team will respond with a considered proposal.
            </p>
          </div>
          <Link
            to="/request-a-quote"
            className="group inline-flex shrink-0 items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-bold text-[#0B5F96] transition-all hover:bg-accent hover:text-white"
          >
            Request a Quote
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <img
              src={logo}
              alt="Masha Allah Engineering Enterprises logo"
              width={483}
              height={143}
              loading="lazy"
              className="h-9 w-auto"
            />
            <p className="mt-5 text-sm leading-relaxed">
              Masha Allah Engineering Enterprises (MEEC) is a Pakistani engineering and industrial
              services company established in 2003, delivering multidisciplinary engineering,
              fabrication, erection and construction works.
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-bold tracking-widest text-white uppercase">Company</h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: "About", to: "/about" },
                { label: "Services", to: "/services" },
                { label: "Industries", to: "/industries" },
                { label: "Equipment & Resources", to: "/equipment" },
                { label: "HSE & Quality", to: "/quality-safety" },
                { label: "Projects", to: "/projects" },
                { label: "Gallery", to: "/gallery" },
                { label: "Clients", to: "/clients" },
                { label: "Contact", to: "/contact" },
                { label: "Opportunities", to: "/opportunities" },
              ].map((l) => (

                <li key={l.to}>
                  <Link to={l.to} className="transition-colors hover:text-accent">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-bold tracking-widest text-white uppercase">Services</h3>
            <ul className="space-y-3 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="transition-colors hover:text-accent"
                  >
                    {s.title.replace(" Sector", "")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-bold tracking-widest text-white uppercase">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-accent" />
                <a href={`tel:${company.phoneHref}`} className="hover:text-accent">
                  {company.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-accent" />
                <a href={`mailto:${company.email}`} className="hover:text-accent">
                  {company.email}
                </a>
                <p>|</p>
                <a>
                  shahidmes1@gmail.com 
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
                <span>{company.headOffice}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="ncs_credit_div">
        <h1 className="ncs_credit">Powered By NovaCraft Solutions</h1>
        </div>

      <div className="border-t border-white/10">
        <div className="shell flex flex-col gap-2 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Masha Allah Engineering Enterprises. All rights reserved.
          </p>
          <p>Engineering Experience You Can Build On.</p>
        </div>
      </div>
    </footer>
  );
}
