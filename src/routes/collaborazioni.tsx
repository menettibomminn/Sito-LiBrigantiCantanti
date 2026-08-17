import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";

import group from "@/assets/group.jpg";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaSection } from "@/components/CtaSection";
import { partnerCategories, partners } from "@/data/partners";
import { site } from "@/data/site";

const description =
  "Le collaborazioni del coro: altri cori, associazioni, enti locali, organizzatori di eventi e realtà culturali del territorio.";

export const Route = createFileRoute("/collaborazioni")({
  head: () => ({
    meta: [
      { title: `Collaborazioni — ${site.fullName}` },
      { name: "description", content: description },
      { property: "og:title", content: `Collaborazioni — ${site.fullName}` },
      { property: "og:description", content: description },
      { property: "og:url", content: "/collaborazioni" },
    ],
    links: [{ rel: "canonical", href: "/collaborazioni" }],
  }),
  component: CollaborazioniPage,
});

function CollaborazioniPage() {
  return (
    <>
      <PageHero
        eyebrow="Collaborazioni"
        title="Chi canta e lavora con noi"
        intro="Cori amici, associazioni, comuni e realtà culturali con cui condividiamo rassegne, progetti e serate."
        image={group}
        imageAlt="Coristi di cori diversi insieme dopo una rassegna"
        breadcrumb={{ label: "Collaborazioni" }}
      />

      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <SectionHeading
          eyebrow="Una rete di amicizie"
          title="Le nostre collaborazioni"
          description="Cantare insieme ad altri è parte della nostra storia: ogni rassegna nasce da rapporti costruiti negli anni."
        />

        <div className="mt-16 space-y-16">
          {partnerCategories.map((cat) => {
            const items = partners.filter((p) => p.category === cat);
            if (items.length === 0) return null;
            return (
              <section key={cat} aria-labelledby={`cat-${cat}`}>
                <h2
                  id={`cat-${cat}`}
                  className="border-b-2 border-gold pb-3 font-[family-name:var(--font-display)] text-2xl text-foreground sm:text-3xl"
                >
                  {cat}
                </h2>
                <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((p) => (
                    <li key={p.id}>
                      <article className="flex h-full flex-col border border-border bg-card p-6">
                        <div className="flex items-center gap-4">
                          {p.logo ? (
                            <img
                              src={p.logo}
                              alt={`Logo di ${p.name}`}
                              loading="lazy"
                              width={64}
                              height={64}
                              className="size-14 object-contain"
                            />
                          ) : (
                            <span
                              aria-hidden="true"
                              className="flex size-14 shrink-0 items-center justify-center border border-border bg-secondary font-[family-name:var(--font-display)] text-2xl text-primary"
                            >
                              {p.name.charAt(0)}
                            </span>
                          )}
                          <h3 className="font-[family-name:var(--font-display)] text-xl leading-snug text-foreground">
                            {p.name}
                          </h3>
                        </div>
                        <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                          {p.description}
                        </p>
                        {p.href ? (
                          <a
                            href={p.href}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-forest"
                          >
                            Vai al sito
                            <ExternalLink className="size-4" aria-hidden="true" />
                          </a>
                        ) : (
                          <p className="mt-5 text-xs uppercase tracking-wider text-muted-foreground">
                            Sito non disponibile
                          </p>
                        )}
                      </article>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      </div>

      <CtaSection
        title="Vuoi collaborare con il nostro coro?"
        text="Siamo disponibili per rassegne, concerti benefici, animazione liturgica e progetti culturali sul territorio."
        buttonLabel="Parliamone"
        to="/contatti"
      />
    </>
  );
}
