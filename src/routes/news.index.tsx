import { createFileRoute } from "@tanstack/react-router";

import sheetMusic from "@/assets/sheet-music.jpg";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { NewsCard } from "@/components/NewsCard";
import { CtaSection } from "@/components/CtaSection";
import { news } from "@/data/news";
import { site } from "@/data/site";

const description =
  "News, racconti e curiosità dal coro: le prove, i brani del repertorio, le trasferte e le novità del gruppo.";

export const Route = createFileRoute("/news/")({
  head: () => ({
    meta: [
      { title: `News e curiosità — ${site.fullName}` },
      { name: "description", content: description },
      { property: "og:title", content: `News e curiosità — ${site.fullName}` },
      { property: "og:description", content: description },
      { property: "og:url", content: "/news" },
    ],
    links: [{ rel: "canonical", href: "/news" }],
  }),
  component: NewsIndexPage,
});

function NewsIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="News"
        title="News e curiosità"
        intro="Storie di brani, appunti dalle prove e racconti delle nostre serate."
        image={sheetMusic}
        imageAlt="Spartiti corali illuminati da una lampada"
        breadcrumb={{ label: "News e curiosità" }}
      />

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <SectionHeading
          eyebrow="Dal coro"
          title="Il diario del coro"
          description="Appunti dalle prove, trasferte, incontri con altri cori e piccole curiosità sui brani."
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {news.map((a) => (
            <li key={a.slug}>
              <NewsCard article={a} />
            </li>
          ))}
        </ul>
      </section>

      <CtaSection
        title="Hai una curiosità da raccontarci?"
        text="Se conosci la storia di un canto della nostra tradizione o hai un ricordo legato al coro, scrivici: ci farebbe piacere pubblicarlo."
        buttonLabel="Scrivici"
        to="/contatti"
        variant="light"
      />
    </>
  );
}
