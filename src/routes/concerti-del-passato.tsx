import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import heroChoir from "@/assets/hero-choir.jpg";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { EventCard } from "@/components/EventCard";
import { CtaSection } from "@/components/CtaSection";
import { pastConcerts } from "@/data/concerts";
import { site } from "@/data/site";

const PAGE_SIZE = 6;

const description =
  "L'archivio dei concerti del coro: rassegne, serate di canti popolari, concerti di Natale e incontri con altri cori dell'Appennino.";

export const Route = createFileRoute("/concerti-del-passato")({
  head: () => ({
    meta: [
      { title: `I nostri concerti del passato — ${site.fullName}` },
      { name: "description", content: description },
      { property: "og:title", content: `I nostri concerti del passato — ${site.fullName}` },
      { property: "og:description", content: description },
      { property: "og:url", content: "/concerti-del-passato" },
    ],
    links: [{ rel: "canonical", href: "/concerti-del-passato" }],
  }),
  component: ConcertiPassatiPage,
});

function ConcertiPassatiPage() {
  const [visible, setVisible] = useState(PAGE_SIZE);
  const shown = pastConcerts.slice(0, visible);

  return (
    <>
      <PageHero
        eyebrow="Archivio"
        title="I nostri concerti del passato"
        intro="Le serate che abbiamo condiviso con il pubblico e con gli altri cori del territorio."
        image={heroChoir}
        imageAlt="Il coro durante un concerto in chiesa"
        breadcrumb={{ label: "I nostri concerti del passato" }}
      />

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <SectionHeading
          eyebrow={`${pastConcerts.length} concerti in archivio`}
          title="Dal più recente"
          description="Ogni scheda raccoglie data, luogo, programma e i cori che hanno cantato con noi."
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((c) => (
            <li key={c.id}>
              <EventCard concert={c} />
            </li>
          ))}
        </ul>
        {visible < pastConcerts.length ? (
          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={() => setVisible((v) => v + PAGE_SIZE)}
              className="inline-flex items-center justify-center border border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Carica altri concerti
            </button>
            <p className="mt-3 text-xs text-muted-foreground">
              {shown.length} di {pastConcerts.length}
            </p>
          </div>
        ) : null}
      </section>

      <CtaSection
        title="Il prossimo concerto potrebbe essere vicino a te"
        text="Consulta il calendario aggiornato degli appuntamenti in programma nei paesi dell'Appennino."
        buttonLabel="Prossimi concerti"
        to="/dove-siamo-e-prossimi-concerti"
      />
    </>
  );
}
