import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

import { navigation, site } from "@/data/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <h2 className="font-[family-name:var(--font-display)] text-2xl">{site.fullName}</h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-foreground/75">
            {site.shortDescription}
          </p>
          <ul className="mt-6 flex flex-wrap gap-4">
            {site.social.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="border-b border-gold/60 pb-0.5 text-sm text-ink-foreground/85 transition-colors hover:text-gold"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Collegamenti rapidi">
          <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-gold">
            Collegamenti rapidi
          </h3>
          <ul className="mt-5 space-y-2.5">
            {navigation.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm text-ink-foreground/80 transition-colors hover:text-gold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Contatti</h3>
          <ul className="mt-5 space-y-4 text-sm text-ink-foreground/80">
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
              <a href={`mailto:${site.email}`} className="transition-colors hover:text-gold">
                {site.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-gold">
                {site.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
              <span>{site.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-foreground/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs text-ink-foreground/65 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {year} {site.fullName} — {site.vatOrCf}
          </p>
          <ul className="flex flex-wrap gap-5">
            <li>
              <Link to="/privacy" className="transition-colors hover:text-gold">
                Privacy policy
              </Link>
            </li>
            <li>
              <Link to="/cookie" className="transition-colors hover:text-gold">
                Cookie policy
              </Link>
            </li>
            <li>
              <Link to="/contatti" className="transition-colors hover:text-gold">
                Contatti
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
