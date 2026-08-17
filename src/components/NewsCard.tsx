import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { formatNewsDate, type NewsArticle } from "@/data/news";

export function NewsCard({ article }: { article: NewsArticle }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border-2 border-border bg-card transition-all hover:-translate-y-0.5 hover:border-gold">
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={article.image}
          alt={article.imageAlt}
          loading="lazy"
          width={1280}
          height={800}
          className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <time dateTime={article.date} className="text-xs font-extrabold uppercase tracking-wide text-primary">
          {formatNewsDate(article.date)}
        </time>
        <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl leading-snug text-foreground">
          {article.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{article.excerpt}</p>
        <Link
          to="/news/$slug"
          params={{ slug: article.slug }}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-forest"
        >
          Leggi tutto
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
