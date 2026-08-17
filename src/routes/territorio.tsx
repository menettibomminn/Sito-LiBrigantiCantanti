import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaSection } from "@/components/CtaSection";
import { territoryHero, territoryPlaces, territorySections } from "@/data/territory";
import { site } from "@/data/site";

const description =
  "Il territorio del coro: Savigno, Zocca e l'Appennino tra Bologna e Modena, tra pievi romaniche, borghi in pietra, boschi e tradizioni locali.";

export const Route = createFileRoute("/territorio")({
  head: () => ({
    meta: [
      { title: `Il nostro territorio — ${site.fullName}` },
      { name: "description", content: description },
      { property: "og:title", content: `Il nostro territorio — ${site.fullName}` },
      { property: "og:description", content: description },
      { property: "og:url", content: "/territorio" },
    ],
    links: [{ rel: "canonical", href: "/territorio" }],
  }),
  component: TerritorioPage,
});

function TerritorioPage() {
  return (
    <>
      <PageHero
        eyebrow="Il nostro territorio"
        title="Tra Savigno, Zocca e l'Appennino"
        intro="Le valli, i paesi e le chiese dove viviamo e dove ci capita più spesso di cantare."
        image={territoryHero.src}
        imageAlt={territoryHero.alt}
        breadcrumb={{ label: "Il nostro territorio" }}
      />

      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="space-y-20">
          {territorySections.map((sec, index) => (
            <section key={sec.id} aria-labelledby={sec.id} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className={index % 2 === 1 ? "lg:order-2" : undefined}>
                <SectionHeading as="h2" title={sec.heading} className="max-w-none" />
                <div className="prose-warm mt-6">
                  {sec.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                <span id={sec.id} className="sr-only" />
              </div>
              {sec.image ? (
                <figure className={index % 2 === 1 ? "lg:order-1" : undefined}>
                  <img
                    src={sec.image.src}
                    alt={sec.image.alt}
                    loading="lazy"
                    width={1280}
                    height={960}
                    className="aspect-[4/3] w-full rounded-xl object-cover"
                  />
                  <figcaption className="mt-2 text-xs text-muted-foreground">
                    {sec.image.alt}
                  </figcaption>
                </figure>
              ) : null}
            </section>
          ))}
        </div>
      </div>

      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
          <SectionHeading
            eyebrow="Da vedere"
            title="Luoghi interessanti"
            description="Alcuni luoghi che consigliamo a chi viene ad ascoltarci e vuole scoprire le nostre valli."
          />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2">
            {territoryPlaces.map((p) => (
              <li key={p.name} className="border-l-2 border-gold bg-card p-6">
                <h3 className="font-[family-name:var(--font-display)] text-xl text-foreground">
                  {p.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaSection
        title="Vieni ad ascoltarci nel nostro Appennino"
        text="Molti dei nostri concerti si tengono in chiese e piazze di grande bellezza: dai un'occhiata al calendario e organizza la tua visita."
        buttonLabel="Prossimi concerti"
        to="/dove-siamo-e-prossimi-concerti"
      />
    </>
  );
}
