import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

import { navigation, site } from "@/data/site";

/** Voci essenziali: il footer resta semplice, non istituzionale. */
const footerLinks = navigation.filter((i) =>
  ["/", "/chi-siamo", "/dove-siamo-e-prossimi-concerti", "/galleria", "/contatti"].includes(i.to),
);

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <h2 className="font-[family-name:var(--font-display)] text-2xl">{site.fullName}</h2>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-foreground/75">
            Ci piace cantare insieme e portare la nostra musica nelle chiese e nelle feste dei nostri
            paesi.
          </p>
          <ul className="mt-5 flex flex-wrap gap-3">
            {site.social.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-block rounded-full border-2 border-ink-foreground/30 px-3 py-1 text-sm font-semibold transition-colors hover:border-gold hover:text-gold"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Collegamenti">
          <h3 className="text-sm font-extrabold uppercase tracking-wide text-gold">Pagine</h3>
          <ul className="mt-4 space-y-2">
            {footerLinks.map((item) => (
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
          <h3 className="text-sm font-extrabold uppercase tracking-wide text-gold">Scrivici</h3>
          <ul className="mt-4 space-y-3 text-sm text-ink-foreground/80">
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
              <a href={`mailto:${site.email}`} className="transition-colors hover:text-gold">
                {site.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="transition-colors hover:text-gold"
              >
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
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-ink-foreground/65 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {year} {site.fullName} — {site.vatOrCf}
          </p>
          <ul className="flex flex-wrap gap-4">
            <li>
              <Link to="/privacy" className="transition-colors hover:text-gold">
                Privacy
              </Link>
            </li>
            <li>
              <Link to="/cookie" className="transition-colors hover:text-gold">
                Cookie
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
