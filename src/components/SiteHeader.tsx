import { Link } from "@tanstack/react-router";
import { Menu, X, Music2 } from "lucide-react";
import { useEffect, useState } from "react";

import { navigation, site } from "@/data/site";
import { cn } from "@/lib/utils";

/** Voci mostrate nel menu orizzontale desktop (le altre nel menu "Altro") */
const primaryCount = 6;

/** Etichette abbreviate per il menu orizzontale desktop */
const shortLabels: Record<string, string> = {
  "Dove siamo e prossimi concerti": "Concerti",
  "Galleria foto e video": "Galleria",
  "I nostri concerti del passato": "Archivio",
  "News e curiosità": "News",
  "Il nostro territorio": "Territorio",
};

function shortLabel(label: string) {
  return shortLabels[label] ?? label;
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 24);
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

  const primary = navigation.slice(0, primaryCount);
  const secondary = navigation.slice(primaryCount).filter((i) => i.to !== "/contatti");

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur transition-all duration-300",
        compact ? "shadow-[0_1px_12px_rgba(60,40,20,0.10)]" : "",
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 transition-all duration-300 sm:px-6",
          compact ? "py-2" : "py-4",
        )}
      >
        <Link to="/" className="group flex items-center gap-3" aria-label={`${site.fullName} — home`}>
          <span
            className={cn(
              "flex shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-all duration-300",
              compact ? "size-9" : "size-11",
            )}
          >
            <Music2 className={compact ? "size-4" : "size-5"} aria-hidden="true" />
          </span>
          <span className="leading-tight">
            <span
              className={cn(
                "block font-[family-name:var(--font-display)] font-semibold tracking-tight text-foreground transition-all duration-300",
                compact ? "text-lg" : "text-xl sm:text-2xl",
              )}
            >
              {site.name}
            </span>
            <span
              className={cn(
                "block text-[0.72rem] font-semibold text-muted-foreground",
                compact && "hidden sm:block",
              )}
            >
              Cantiamo insieme dal 1998
            </span>
          </span>
        </Link>

        {/* Menu desktop */}
        <nav aria-label="Menu principale" className="hidden items-center gap-1 lg:flex">
          {primary.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-primary after:scale-x-100" }}
              className="relative px-3 py-2 text-sm font-medium text-foreground/80 transition-colors after:absolute after:inset-x-3 after:bottom-1 after:h-[2px] after:origin-left after:scale-x-0 rounded-full after:bg-gold after:transition-transform hover:text-primary hover:after:scale-x-100"
            >
              <span className="whitespace-nowrap">{shortLabel(item.label)}</span>
            </Link>
          ))}
          {secondary.length > 0 ? (
            <div className="group relative">
              <button
                type="button"
                className="px-3 py-2 text-sm font-medium text-foreground/80 transition-colors group-hover:text-primary"
                aria-haspopup="true"
              >
                Altro
              </button>
              <div className="invisible absolute right-0 top-full w-64 rounded-xl border-2 border-border bg-card p-2 opacity-0 shadow-md transition-all group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                {secondary.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    activeProps={{ className: "text-primary" }}
                    className="block px-3 py-2 text-sm text-foreground/85 transition-colors hover:bg-secondary hover:text-primary rounded-lg"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
          <Link
            to="/contatti"
            className="ml-2 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Contatti
          </Link>
        </nav>

        {/* Bottone menu mobile */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Chiudi il menu" : "Apri il menu"}
          className="inline-flex size-11 items-center justify-center border border-border text-foreground transition-colors hover:bg-secondary lg:hidden"
        >
          {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
        </button>
      </div>

      {/* Menu mobile */}
      <div
        id="menu-mobile"
        hidden={!open}
        className="max-h-[calc(100vh-4.5rem)] overflow-y-auto border-t border-border bg-card lg:hidden"
      >
        <nav aria-label="Menu principale mobile" className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
          <ul className="divide-y divide-border">
            {navigation.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{ className: "text-primary" }}
                  onClick={() => setOpen(false)}
                  className="block py-3.5 text-base font-medium text-foreground/90 transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
