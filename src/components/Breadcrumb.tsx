import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

type Crumb = { label: string; to: string };

type Props = {
  /** eventuali livelli intermedi tra la home e la pagina corrente */
  items?: Crumb[];
  current: string;
  /** true quando il breadcrumb è su fondo scuro */
  onDark?: boolean;
};

export function Breadcrumb({ items = [], current, onDark = true }: Props) {
  const base = onDark ? "text-ink-foreground/70" : "text-muted-foreground";
  const link = onDark ? "hover:text-gold" : "hover:text-primary";

  return (
    <nav aria-label="Percorso di navigazione" className={`text-xs ${base}`}>
      <ol className="flex flex-wrap items-center gap-1.5">
        <li>
          <Link to="/" className={`transition-colors ${link}`}>
            Home
          </Link>
        </li>
        {items.map((item) => (
          <li key={item.to} className="flex items-center gap-1.5">
            <ChevronRight className="size-3" aria-hidden="true" />
            <Link to={item.to} className={`transition-colors ${link}`}>
              {item.label}
            </Link>
          </li>
        ))}
        <li className="flex items-center gap-1.5">
          <ChevronRight className="size-3" aria-hidden="true" />
          <span aria-current="page" className={onDark ? "text-ink-foreground" : "text-foreground"}>
            {current}
          </span>
        </li>
      </ol>
    </nav>
  );
}
