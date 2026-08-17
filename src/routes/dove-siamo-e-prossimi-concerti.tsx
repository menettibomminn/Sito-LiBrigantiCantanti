import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

import church from "@/assets/church.jpg";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { EventList } from "@/components/EventCard";
import { CtaSection } from "@/components/CtaSection";
import { upcomingConcerts } from "@/data/concerts";
import { site } from "@/data/site";

const description =
  "Il calendario dei prossimi concerti del coro, le nostre sedi, i luoghi e gli orari delle prove e tutti i riferimenti per contattarci.";

export const Route = createFileRoute("/dove-siamo-e-prossimi-concerti")({
  head: () => ({
    meta: [
      { title: `Dove siamo e prossimi concerti — ${site.fullName}` },
      { name: "description", content: description },
      { property: "og:title", content: `Dove siamo e prossimi concerti — ${site.fullName}` },
      { property: "og:description", content: description },
      { property: "og:url", content: "/dove-siamo-e-prossimi-concerti" },
    ],
    links: [{ rel: "canonical", href: "/dove-siamo-e-prossimi-concerti" }],
  }),
  component: ProssimiConcertiPage,
});

function ProssimiConcertiPage() {
  return (
    <>
      <PageHero
        eyebrow="Calendario"
        title="Dove siamo e prossimi concerti"
        intro="Tutti gli appuntamenti in programma, le sedi del coro e i luoghi delle prove."
        image={church}
        imageAlt="Interno di una chiesa preparata per un concerto"
        breadcrumb={{ label: "Dove siamo e prossimi concerti" }}
      />

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <SectionHeading
          eyebrow="Prossimi appuntamenti"
          title="Il calendario dei concerti"
          description="Gli appuntamenti sono aggiornati periodicamente: ingresso libero salvo diversa indicazione."
        />
        <div className="mt-12">
          <EventList concerts={upcomingConcerts} />
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
          <SectionHeading
            eyebrow="Dove siamo"
            title="Sedi e luoghi delle prove"
            description="Ci trovi tra Savigno e Zocca, nel cuore dell'Appennino tra Bologna e Modena."
          />
          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <div className="space-y-5">
              {site.venues.map((v) => (
                <article key={v.name} className="rounded-xl border-2 border-border bg-card p-6">
                  <h3 className="font-[family-name:var(--font-display)] text-xl text-foreground">
                    {v.name}
                  </h3>
                  <p className="mt-3 flex items-start gap-2 text-sm text-muted-foreground">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    {v.address}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">{v.note}</p>
                </article>
              ))}
              <article className="rounded-xl border-2 border-border bg-card p-6">
                <h3 className="font-[family-name:var(--font-display)] text-xl text-foreground">
                  Informazioni e contatti
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Mail className="size-4 text-primary" aria-hidden="true" />
                    <a href={`mailto:${site.email}`} className="hover:text-primary">
                      {site.email}
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="size-4 text-primary" aria-hidden="true" />
                    <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-primary">
                      {site.phone}
                    </a>
                  </li>
                </ul>
              </article>
            </div>

            {/* Mappa: incollare l'URL di embed in site.mapsEmbedUrl */}
            <div className="min-h-72 rounded-xl border-2 border-border bg-card">
              {site.mapsEmbedUrl ? (
                <iframe
                  title="Mappa delle sedi del coro"
                  src={site.mapsEmbedUrl}
                  loading="lazy"
                  className="size-full min-h-72"
                />
              ) : (
                <div className="flex h-full min-h-72 flex-col items-center justify-center gap-3 p-8 text-center">
                  <MapPin className="size-8 text-primary" aria-hidden="true" />
                  <p className="font-[family-name:var(--font-display)] text-xl text-foreground">
                    Mappa in arrivo
                  </p>
                  <p className="max-w-xs text-sm text-muted-foreground">
                    Qui verrà inserita la mappa interattiva con le nostre sedi e la sala prove.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title="Abbiamo bisogno di nuove voci!"
        text="Il coro è aperto a chi vuole provare: soprani, contralti, tenori e bassi sono tutti benvenuti. Vieni a trovarci durante una prova, senza impegno."
        buttonLabel="Contattaci"
        to="/contatti"
      />
    </>
  );
}
