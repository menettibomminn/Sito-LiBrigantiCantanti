import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import sheetMusic from "@/assets/sheet-music.jpg";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaSection } from "@/components/CtaSection";
import { repertoire } from "@/data/repertoire";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

const description =
  "Il repertorio del coro: musica sacra, canti popolari e alpini, musica italiana e internazionale, polifonia antica e brani contemporanei.";

export const Route = createFileRoute("/repertorio")({
  head: () => ({
    meta: [
      { title: `Repertorio — ${site.fullName}` },
      { name: "description", content: description },
      { property: "og:title", content: `Repertorio — ${site.fullName}` },
      { property: "og:description", content: description },
      { property: "og:url", content: "/repertorio" },
    ],
    links: [{ rel: "canonical", href: "/repertorio" }],
  }),
  component: RepertorioPage,
});

function RepertorioPage() {
  const [filter, setFilter] = useState<string>("tutti");
  const shown = filter === "tutti" ? repertoire : repertoire.filter((c) => c.id === filter);
  const total = repertoire.reduce((n, c) => n + c.pieces.length, 0);

  return (
    <>
      <PageHero
        eyebrow="Repertorio"
        title="I brani che cantiamo"
        intro={`Oltre ${total} brani divisi per genere, dalla polifonia sacra ai canti della tradizione popolare e alpina.`}
        image={sheetMusic}
        imageAlt="Spartiti corali su un tavolo di legno"
        breadcrumb={{ label: "Repertorio" }}
      />

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <SectionHeading
          eyebrow="Per categoria"
          title="Sfoglia il repertorio"
          description="Usa i filtri per vedere una singola categoria di brani."
        />

        <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Filtra per categoria">
          <FilterButton active={filter === "tutti"} onClick={() => setFilter("tutti")}>
            Tutte le categorie
          </FilterButton>
          {repertoire.map((c) => (
            <FilterButton key={c.id} active={filter === c.id} onClick={() => setFilter(c.id)}>
              {c.name}
            </FilterButton>
          ))}
        </div>

        <div className="mt-14 space-y-14">
          {shown.map((cat) => (
            <section key={cat.id} aria-labelledby={`cat-${cat.id}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-3 border-b-2 border-gold pb-3">
                <h2
                  id={`cat-${cat.id}`}
                  className="font-[family-name:var(--font-display)] text-2xl text-foreground sm:text-3xl"
                >
                  {cat.name}
                </h2>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {cat.pieces.length} brani
                </p>
              </div>
              {cat.note ? <p className="mt-3 text-sm text-muted-foreground">{cat.note}</p> : null}
              <ol className="mt-5 grid gap-x-10 sm:grid-cols-2">
                {cat.pieces.map((p, i) => (
                  <li
                    key={`${cat.id}-${i}`}
                    className="flex items-baseline gap-3 border-b border-border py-3 text-sm"
                  >
                    <span className="w-6 shrink-0 text-xs text-muted-foreground/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-medium text-foreground">{p.title}</span>
                    <span className="ml-auto text-right text-muted-foreground">{p.author}</span>
                  </li>
                ))}
              </ol>
            </section>
          ))}
        </div>
      </section>

      <CtaSection
        title="Vuoi invitarci a un concerto?"
        text="Componiamo il programma insieme, scegliendo tra i brani del nostro repertorio in base all'occasione e al luogo."
        buttonLabel="Contattaci"
        to="/contatti"
        variant="light"
      />
    </>
  );
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "border px-4 py-2 text-sm font-medium transition-colors",
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-card text-foreground/80 hover:border-primary hover:text-primary",
      )}
    >
      {children}
    </button>
  );
}
