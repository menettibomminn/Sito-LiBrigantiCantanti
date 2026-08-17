import { createFileRoute } from "@tanstack/react-router";

import { Breadcrumb } from "@/components/Breadcrumb";
import { site } from "@/data/site";

const description =
  "Cookie policy del sito del coro: quali cookie tecnici utilizziamo e come gestirli dal tuo browser.";

export const Route = createFileRoute("/cookie")({
  head: () => ({
    meta: [
      { title: `Cookie policy — ${site.fullName}` },
      { name: "description", content: description },
      { property: "og:title", content: `Cookie policy — ${site.fullName}` },
      { property: "og:description", content: description },
      { property: "og:url", content: "/cookie" },
    ],
    links: [{ rel: "canonical", href: "/cookie" }],
  }),
  component: CookiePage,
});

function CookiePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
      <Breadcrumb current="Cookie policy" onDark={false} />
      <h1 className="rule-gold mt-8 font-[family-name:var(--font-display)] text-4xl text-foreground">
        Cookie policy
      </h1>
      <div className="prose-warm mt-8">
        <p>
          [Testo da completare] Elencare i cookie tecnici utilizzati dal sito, eventuali servizi di
          terze parti (mappe, video incorporati) e le modalità per disattivarli dal browser.
        </p>
        <p>
          Per informazioni puoi contattarci all'indirizzo{" "}
          <a href={`mailto:${site.email}`} className="text-primary underline">
            {site.email}
          </a>
          .
        </p>
      </div>
    </article>
  );
}
