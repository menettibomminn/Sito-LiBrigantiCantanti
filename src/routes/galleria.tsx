import { createFileRoute } from "@tanstack/react-router";
import { PlayCircle } from "lucide-react";

import concertSquare from "@/assets/concert-square.jpg";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { GalleryGrid } from "@/components/GalleryGrid";
import { CtaSection } from "@/components/CtaSection";
import { photos, videos } from "@/data/gallery";
import { site } from "@/data/site";

const description =
  "Fotografie e video dei nostri concerti, delle prove e delle serate insieme: sfoglia la galleria del coro.";

export const Route = createFileRoute("/galleria")({
  head: () => ({
    meta: [
      { title: `Galleria foto e video — ${site.fullName}` },
      { name: "description", content: description },
      { property: "og:title", content: `Galleria foto e video — ${site.fullName}` },
      { property: "og:description", content: description },
      { property: "og:url", content: "/galleria" },
    ],
    links: [{ rel: "canonical", href: "/galleria" }],
  }),
  component: GalleriaPage,
});

function GalleriaPage() {
  return (
    <>
      <PageHero
        eyebrow="Galleria"
        title="Foto e video"
        intro="Immagini e riprese dei concerti, delle prove e delle trasferte del coro."
        image={concertSquare}
        imageAlt="Concerto serale del coro nella piazza di un borgo"
        breadcrumb={{ label: "Galleria foto e video" }}
      />

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <SectionHeading
          eyebrow="Fotografie"
          title="Il nostro archivio fotografico"
          description="Clicca su una fotografia per vederla ingrandita; puoi scorrere le immagini con le frecce."
        />
        <div className="mt-12">
          <GalleryGrid items={photos} />
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
          <SectionHeading
            eyebrow="Video"
            title="Ascoltaci cantare"
            description="Riprese dei concerti e momenti di prova. I collegamenti ai video verranno pubblicati progressivamente."
          />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((v) => {
              const Wrapper = v.url ? "a" : "div";
              return (
                <li key={v.id}>
                  <Wrapper
                    {...(v.url
                      ? { href: v.url, target: "_blank", rel: "noreferrer noopener" }
                      : {})}
                    className="group flex h-full flex-col overflow-hidden rounded-xl border-2 border-border bg-card transition-all hover:-translate-y-0.5 hover:border-gold"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={v.thumbnail}
                        alt={v.thumbnailAlt}
                        loading="lazy"
                        width={1280}
                        height={720}
                        className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                      <span className="absolute inset-0 flex items-center justify-center bg-ink/40 transition-colors group-hover:bg-ink/25">
                        <PlayCircle className="size-12 text-gold" aria-hidden="true" />
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="font-[family-name:var(--font-display)] text-xl leading-snug text-foreground">
                        {v.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {v.description}
                      </p>
                      <p className="mt-4 text-xs font-extrabold uppercase tracking-wider text-primary">
                        {v.url ? "Guarda il video" : "Video in arrivo"}
                      </p>
                    </div>
                  </Wrapper>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <CtaSection
        title="Hai fotografie o riprese dei nostri concerti?"
        text="Se hai scattato foto o registrato un video durante una nostra serata, saremo felici di aggiungerli alla galleria del coro."
        buttonLabel="Scrivici"
        to="/contatti"
      />
    </>
  );
}
