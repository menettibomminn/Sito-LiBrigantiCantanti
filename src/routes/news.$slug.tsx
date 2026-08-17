import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

import { Breadcrumb } from "@/components/Breadcrumb";
import { NewsCard } from "@/components/NewsCard";
import { formatNewsDate, news } from "@/data/news";
import { site } from "@/data/site";

export const Route = createFileRoute("/news/$slug")({
  loader: ({ params }) => {
    const article = news.find((a) => a.slug === params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: `Articolo non disponibile — ${site.fullName}` }, { name: "robots", content: "noindex" }],
      };
    }
    const { article } = loaderData;
    return {
      meta: [
        { title: `${article.title} — ${site.fullName}` },
        { name: "description", content: article.excerpt },
        { property: "og:title", content: article.title },
        { property: "og:description", content: article.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/news/${article.slug}` },
      ],
      links: [{ rel: "canonical", href: `/news/${article.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            datePublished: article.date,
            description: article.excerpt,
            author: { "@type": "Organization", name: site.fullName },
          }),
        },
      ],
    };
  },
  component: ArticlePage,
});

function ArticlePage() {
  const { article } = Route.useLoaderData();
  const others = news.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <article>
        <div className="bg-ink">
          <div className="mx-auto max-w-3xl px-4 pb-14 pt-10 sm:px-6 sm:pb-16">
            <Breadcrumb items={[{ label: "News e curiosità", to: "/news" }]} current={article.title} />
            <time
              dateTime={article.date}
              className="mt-8 block text-xs font-extrabold uppercase tracking-wide text-gold"
            >
              {formatNewsDate(article.date)}
            </time>
            <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl leading-[1.1] text-ink-foreground sm:text-5xl">
              {article.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-foreground/80">{article.excerpt}</p>
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <img
            src={article.image}
            alt={article.imageAlt}
            width={1280}
            height={800}
            className="-mt-8 w-full object-cover sm:-mt-10"
          />
          <div className="prose-warm mt-10 text-base">
            {article.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <Link
            to="/news"
            className="mt-12 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-forest"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Torna a News e curiosità
          </Link>
        </div>
      </article>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <h2 className="rule-gold font-[family-name:var(--font-display)] text-2xl text-foreground sm:text-3xl">
          Altri articoli
        </h2>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((a) => (
            <li key={a.slug}>
              <NewsCard article={a} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
