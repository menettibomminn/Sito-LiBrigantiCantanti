import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, Clock, MapPin, Users } from "lucide-react";

import heroChoir from "@/assets/hero-choir.jpg";
import rehearsal from "@/assets/rehearsal.jpg";
import { SectionHeading } from "@/components/SectionHeading";
import { EventCard } from "@/components/EventCard";
import { NewsCard } from "@/components/NewsCard";
import { CtaSection } from "@/components/CtaSection";
import { formatConcertDate, pastConcerts, upcomingConcerts } from "@/data/concerts";
import { photos } from "@/data/gallery";
import { news } from "@/data/news";
import { site } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${site.fullName} — ${site.tagline}` },
      { name: "description", content: site.shortDescription },
      { property: "og:title", content: `${site.fullName} — ${site.tagline}` },
      { property: "og:description", content: site.shortDescription },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  const next = upcomingConcerts[0];
  const latest = pastConcerts.slice(0, 3);
  const preview = photos.slice(0, 6);

  return (
    <>
      {/* HERO */}
      <section className="relative isolate flex min-h-[78vh] items-end overflow-hidden bg-ink">
        <img
          src={heroChoir}
          alt="Il coro durante un'esibizione in una chiesa storica"
          width={1920}
          height={1088}
          className="absolute inset-0 size-full object-cover opacity-80"
        />
        <div
          className="absolute inset-0 bg-ink/55"
          aria-hidden="true"
        />
        <div className="relative mx-auto w-full max-w-6xl px-4 pb-16 pt-28 sm:px-6 sm:pb-24">
          <p className="sticker">{site.name}</p>
          <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-4xl leading-[1.1] text-ink-foreground sm:text-5xl md:text-6xl">
            Cantiamo insieme da tanti anni
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-foreground/85">
            {site.claim}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/chi-siamo"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-base font-bold text-gold-foreground transition-colors hover:bg-gold/90"
            >
              Conosciamoci
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link
              to="/dove-siamo-e-prossimi-concerti"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink-foreground/40 px-6 py-3.5 text-base font-bold text-ink-foreground transition-colors hover:border-gold hover:text-gold"
            >
              Prossimi concerti
            </Link>
          </div>
        </div>
      </section>

      {/* INTRODUZIONE */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Chi siamo"
              title="Siamo un coro di paese"
              description={site.shortDescription}
            />
            <div className="prose-warm mt-6 max-w-xl">
              <p>
                Ci troviamo ogni settimana per le prove: si impara qualche brano nuovo, si ride
                un po' e alla fine si finisce spesso a chiacchierare. Durante l'anno cantiamo nelle
                chiese, nelle sale del paese e alle feste del territorio. Il nostro repertorio mette
                insieme canti popolari, brani sacri e qualche pezzo che ci è entrato nel cuore.
              </p>
            </div>
            <Link
              to="/chi-siamo"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-bold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Chi siamo
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <figure className="relative">
            <img
              src={rehearsal}
              alt="I coristi durante una prova attorno al pianoforte"
              loading="lazy"
              width={1280}
              height={960}
              className="w-full rounded-xl object-cover"
            />
            <figcaption className="mt-3 text-xs text-muted-foreground">
              Le prove settimanali del coro.
            </figcaption>
            <span
              className="pointer-events-none absolute -bottom-3 -right-3 -z-10 hidden size-full rounded-xl border-2 border-gold/70 sm:block"
              aria-hidden="true"
            />
          </figure>
        </div>
      </section>

      {/* PROSSIMO CONCERTO */}
      {next ? (
        <section className="bg-ink text-ink-foreground">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
            <p className="text-xs font-extrabold uppercase tracking-wide text-gold">
              Il prossimo concerto
            </p>
            <div className="mt-8 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
              <div>
                <h2 className="font-[family-name:var(--font-display)] text-3xl leading-tight sm:text-4xl md:text-5xl">
                  {next.title}
                </h2>
                <ul className="mt-7 grid gap-4 sm:grid-cols-3">
                  <li className="flex items-start gap-3">
                    <CalendarDays className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden="true" />
                    <span>
                      <span className="block text-xs uppercase tracking-wider text-ink-foreground/60">
                        Data
                      </span>
                      {formatConcertDate(next.date)}
                    </span>
                  </li>
                  {next.time ? (
                    <li className="flex items-start gap-3">
                      <Clock className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden="true" />
                      <span>
                        <span className="block text-xs uppercase tracking-wider text-ink-foreground/60">
                          Ora
                        </span>
                        {next.time}
                      </span>
                    </li>
                  ) : null}
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden="true" />
                    <span>
                      <span className="block text-xs uppercase tracking-wider text-ink-foreground/60">
                        Luogo
                      </span>
                      {next.venue}, {next.city}
                    </span>
                  </li>
                </ul>
                <p className="mt-7 max-w-2xl leading-relaxed text-ink-foreground/80">
                  {next.description}
                </p>
                {next.guests?.length ? (
                  <p className="mt-5 flex items-center gap-2 text-sm text-ink-foreground/70">
                    <Users className="size-4 text-gold" aria-hidden="true" />
                    Insieme a: {next.guests.join(", ")}
                  </p>
                ) : null}
                <Link
                  to="/dove-siamo-e-prossimi-concerti"
                  className="mt-9 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-base font-bold text-gold-foreground transition-colors hover:bg-gold/90"
                >
                  Vieni a sentirci
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
              {next.image ? (
                <img
                  src={next.image}
                  alt={next.imageAlt ?? next.title}
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="aspect-[4/3] w-full rounded-xl object-cover"
                />
              ) : null}
            </div>
          </div>
        </section>
      ) : null}

      {/* ULTIMI EVENTI */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <SectionHeading
          eyebrow="Archivio"
          title="Gli ultimi concerti"
          description="Qualche serata delle ultime stagioni, tra chiese di montagna, sale parrocchiali e piazze di paese."
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latest.map((c) => (
            <li key={c.id}>
              <EventCard concert={c} />
            </li>
          ))}
        </ul>
        <Link
          to="/concerti-del-passato"
          className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-forest"
        >
          Vedi tutto l'archivio
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </section>

      {/* GALLERIA PREVIEW */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
          <SectionHeading
            eyebrow="Galleria"
            title="Foto di concerti e di prove"
            description="Qualche foto scattata da noi, senza troppe pretese."
          />
          <ul className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
            {preview.map((p) => (
              <li key={p.id} className="overflow-hidden rounded-xl">
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="aspect-[4/3] w-full rounded-xl object-cover transition-transform duration-300 hover:scale-[1.03]"
                />
              </li>
            ))}
          </ul>
          <Link
            to="/galleria"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-bold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Vai alla galleria
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* NEWS */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <SectionHeading
          eyebrow="News e curiosità"
          title="Il diario del coro"
          description="Trasferte, incontri con altri cori, curiosità sui brani e piccole cose della vita del gruppo."
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {news.slice(0, 3).map((a) => (
            <li key={a.slug}>
              <NewsCard article={a} />
            </li>
          ))}
        </ul>
      </section>

      <CtaSection
        title="Ti va di cantare con noi?"
        text="Scrivici due righe: per invitarci a cantare, per organizzare una serata insieme oppure per venire a una prova e vedere se ti piace. Non serve saper leggere la musica."
        buttonLabel="Contattaci"
        to="/contatti"
      />
    </>
  );
}
