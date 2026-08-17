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
            className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
          <p className="absolute left-0 top-0 bg-primary px-3 py-1.5 text-xs font-extrabold uppercase tracking-wider text-primary-foreground">
            {formatConcertDate(concert.date)}
          </p>
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-[family-name:var(--font-display)] text-xl leading-snug text-foreground">
          {concert.title}
        </h3>
        <p className="mt-2 flex items-start gap-2 text-sm text-muted-foreground">
          <MapPin className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
          <span>
            {concert.venue} — {concert.city}
          </span>
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{concert.description}</p>
        {concert.guests?.length ? (
          <p className="mt-4 flex items-start gap-2 border-t border-border pt-4 text-xs text-muted-foreground">
            <Users className="mt-0.5 size-3.5 shrink-0 text-gold" aria-hidden="true" />
            <span>Con: {concert.guests.join(", ")}</span>
          </p>
        ) : null}
      </div>
    </article>
  );
}

/** Riga evento in formato calendario, con data in evidenza. */
export function EventRow({ concert }: { concert: Concert }) {
  const { day, month, year } = concertDateParts(concert.date);
  return (
    <article className="flex flex-col gap-5 rounded-xl border-2 border-border bg-card p-5 sm:flex-row sm:gap-7 sm:p-6">
      <div className="flex shrink-0 items-center gap-3 sm:flex-col sm:justify-center sm:gap-0 sm:border-r sm:border-border sm:pr-7">
        <span className="font-[family-name:var(--font-display)] text-4xl leading-none text-primary sm:text-5xl">
          {day}
        </span>
        <span className="text-sm font-extrabold uppercase tracking-wide text-foreground/80">
          {month}
        </span>
        <span className="text-sm text-muted-foreground sm:mt-1">{year}</span>
      </div>
      <div className="min-w-0">
        <h3 className="font-[family-name:var(--font-display)] text-2xl leading-snug text-foreground">
          {concert.title}
        </h3>
        <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
          {concert.time ? (
            <li className="flex items-center gap-2">
              <Clock className="size-4 text-gold" aria-hidden="true" />
              ore {concert.time}
            </li>
          ) : null}
          <li className="flex items-center gap-2">
            <MapPin className="size-4 text-gold" aria-hidden="true" />
            {concert.venue}, {concert.city}
          </li>
        </ul>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{concert.description}</p>
        {(concert.guests?.length || concert.conductors?.length) && (
          <dl className="mt-4 space-y-1.5 border-t border-border pt-4 text-xs text-muted-foreground">
            {concert.guests?.length ? (
              <div className="flex gap-2">
                <dt className="font-extrabold uppercase tracking-wider">Cori partecipanti:</dt>
                <dd>{concert.guests.join(", ")}</dd>
              </div>
            ) : null}
            {concert.conductors?.length ? (
              <div className="flex gap-2">
                <dt className="font-extrabold uppercase tracking-wider">Direttori:</dt>
                <dd>{concert.conductors.join(", ")}</dd>
              </div>
            ) : null}
          </dl>
        )}
      </div>
    </article>
  );
}

/** Elenco eventi in formato calendario. */
export function EventList({ concerts }: { concerts: Concert[] }) {
  if (concerts.length === 0) {
    return (
      <p className="flex items-center gap-3 rounded-xl border-2 border-dashed border-border bg-card p-6 text-sm text-muted-foreground">
        <CalendarDays className="size-5 text-gold" aria-hidden="true" />
        Nessun concerto in programma al momento: torna a trovarci presto.
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
