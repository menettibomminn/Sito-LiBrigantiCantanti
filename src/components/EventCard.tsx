import { CalendarDays, Clock, MapPin, Users } from "lucide-react";

import { concertDateParts, formatConcertDate, type Concert } from "@/data/concerts";

/** Card evento con immagine — usata per "ultimi concerti" e archivio. */
export function EventCard({ concert }: { concert: Concert }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border-2 border-border bg-card transition-all hover:-translate-y-0.5 hover:border-gold">
      {concert.image ? (
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={concert.image}
            alt={concert.imageAlt ?? concert.title}
            loading="lazy"
            width={1280}
            height={960}
            className="size-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
          <p className="absolute left-3 top-3 rounded-full bg-gold px-3 py-1 text-xs font-extrabold text-gold-foreground">
            {formatConcertDate(concert.date)}
          </p>
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-[family-name:var(--font-display)] text-xl leading-snug text-foreground">
          {concert.title}
        </h3>
        <p className="mt-2 flex items-start gap-2 text-sm font-semibold text-foreground/75">
          <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
          <span>
            {concert.venue} — {concert.city}
          </span>
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{concert.description}</p>
        {concert.guests?.length ? (
          <p className="mt-4 flex items-start gap-2 border-t-2 border-dashed border-border pt-4 text-xs text-muted-foreground">
            <Users className="mt-0.5 size-3.5 shrink-0 text-forest" aria-hidden="true" />
            <span>Con noi: {concert.guests.join(", ")}</span>
          </p>
        ) : null}
      </div>
    </article>
  );
}

/**
 * Riga evento in stile locandina di paese: data grande a sinistra,
 * informazioni essenziali e un "Vi aspettiamo!" finale.
 */
export function EventRow({ concert }: { concert: Concert }) {
  const { day, month, year } = concertDateParts(concert.date);
  return (
    <article className="flex flex-col gap-5 rounded-xl border-2 border-border bg-card p-5 transition-colors hover:border-gold sm:flex-row sm:gap-7 sm:p-6">
      <div className="flex shrink-0 items-center gap-3 rounded-xl bg-forest px-4 py-3 text-forest-foreground sm:w-28 sm:flex-col sm:justify-center sm:gap-0 sm:py-5">
        <span className="font-[family-name:var(--font-display)] text-4xl font-extrabold leading-none sm:text-5xl">
          {day}
        </span>
        <span className="text-sm font-extrabold uppercase tracking-wide">{month}</span>
        <span className="text-sm opacity-80 sm:mt-1">{year}</span>
      </div>
      <div className="min-w-0">
        <h3 className="font-[family-name:var(--font-display)] text-2xl leading-snug text-foreground">
          {concert.title}
        </h3>
        <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-foreground/80">
          {concert.time ? (
            <li className="flex items-center gap-2">
              <Clock className="size-4 text-primary" aria-hidden="true" />
              ore {concert.time}
            </li>
          ) : null}
          <li className="flex items-center gap-2">
            <MapPin className="size-4 text-primary" aria-hidden="true" />
            {concert.venue}, {concert.city}
          </li>
        </ul>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{concert.description}</p>
        {(concert.guests?.length || concert.conductors?.length) && (
          <dl className="mt-4 space-y-1.5 border-t-2 border-dashed border-border pt-4 text-xs text-muted-foreground">
            {concert.guests?.length ? (
              <div className="flex flex-wrap gap-2">
                <dt className="font-extrabold">Cantiamo con:</dt>
                <dd>{concert.guests.join(", ")}</dd>
              </div>
            ) : null}
            {concert.conductors?.length ? (
              <div className="flex flex-wrap gap-2">
                <dt className="font-extrabold">Chi ci dirige:</dt>
                <dd>{concert.conductors.join(", ")}</dd>
              </div>
            ) : null}
          </dl>
        )}
        <p className="mt-5 inline-block rounded-full bg-gold px-3 py-1 text-sm font-extrabold text-gold-foreground">
          Vi aspettiamo! Ingresso libero
        </p>
      </div>
    </article>
  );
}

/** Elenco eventi in formato calendario. */
export function EventList({ concerts }: { concerts: Concert[] }) {
  if (concerts.length === 0) {
    return (
      <p className="flex items-center gap-3 rounded-xl border-2 border-dashed border-border bg-card p-6 text-sm text-muted-foreground">
        <CalendarDays className="size-5 text-primary" aria-hidden="true" />
        Per ora non c'è nessun concerto in programma: torna a trovarci, aggiorniamo spesso.
      </p>
    );
  }
  return (
    <div className="space-y-5">
      {concerts.map((c) => (
        <EventRow key={c.id} concert={c} />
      ))}
    </div>
  );
}
