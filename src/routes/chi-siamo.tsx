import { createFileRoute } from "@tanstack/react-router";

import serataEstiva from "@/assets/coro-serata-estiva.jpg.asset.json";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { PersonCard } from "@/components/PersonCard";
import { CtaSection } from "@/components/CtaSection";
import { directors, history, historyImages, voiceSections } from "@/data/choir";
import { site } from "@/data/site";

const description =
  "La storia del coro, i reparti vocali e i direttori: come è nato il gruppo, da dove arrivano i coristi e qual è la nostra idea di musica.";

export const Route = createFileRoute("/chi-siamo")({
  head: () => ({
    meta: [
      { title: `Chi siamo — ${site.fullName}` },
      { name: "description", content: description },
      { property: "og:title", content: `Chi siamo — ${site.fullName}` },
      { property: "og:description", content: description },
      { property: "og:url", content: "/chi-siamo" },
    ],
    links: [{ rel: "canonical", href: "/chi-siamo" }],
  }),
  component: ChiSiamoPage,
});

function ChiSiamoPage() {
  return (
    <>
      <PageHero
        eyebrow="Chi siamo"
        title="La storia del nostro coro"
        intro="Il coro è nato per amicizia e per il piacere di cantare insieme, e da allora non abbiamo più smesso."
        image={serataEstiva.url}
        imageAlt="Il coro che canta durante una serata estiva all'aperto"
        breadcrumb={{ label: "Chi siamo" }}
      />

      {/* STORIA */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow="Le nostre radici" title="Storia del coro" />
            <div className="mt-10 space-y-10">
              {history.map((block) => (
                <article key={block.heading}>
                  <h3 className="font-[family-name:var(--font-display)] text-2xl text-foreground">
                    {block.heading}
                  </h3>
                  <div className="prose-warm mt-3">
                    {block.paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            {historyImages.map((img) => (
              <figure key={img.src}>
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="aspect-[4/3] w-full rounded-xl object-cover"
                />
                <figcaption className="mt-2 text-xs text-muted-foreground">{img.alt}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* REPARTI VOCALI */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
          <SectionHeading
            eyebrow="Il gruppo"
            title="Le nostre voci"
            description="Siamo divisi in quattro voci. Gli elenchi dei coristi sono in aggiornamento: aggiungiamo i nomi appena possibile."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {voiceSections.map((sec) => (
              <article key={sec.id} className="rounded-xl border-2 border-border bg-card p-6">
                <h3 className="font-[family-name:var(--font-display)] text-2xl text-primary">
                  {sec.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {sec.description}
                </p>
                <h4 className="mt-6 text-xs font-extrabold uppercase tracking-wide text-foreground/70">
                  Componenti
                </h4>
                <ul className="mt-3 divide-y divide-border border-t border-border">
                  {sec.members.map((m, i) => (
                    <li key={i} className="py-2 text-sm text-foreground/85">
                      {m}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DIRETTORI */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <SectionHeading
          eyebrow="Alla guida del coro"
          title="I direttori"
          description="Chi prepara le voci, sceglie il repertorio e dirige il coro durante i concerti."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {directors.map((d) => (
            <PersonCard
              key={d.id}
              name={d.name}
              role={d.role}
              bio={d.bio}
              image={d.image}
              imageAlt={d.imageAlt}
            />
          ))}
        </div>
      </section>

      <CtaSection
        title="Ti piacerebbe cantare con noi?"
        text="Cerchiamo sempre nuove voci in tutti i reparti. Non serve saper leggere la musica: basta la passione e la voglia di provare."
        buttonLabel="Scrivici"
        to="/contatti"
      />
    </>
  );
}
