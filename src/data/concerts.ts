/**
 * Concerti: prossimi e passati.
 * MODIFICA QUI per aggiornare il calendario. Il primo elemento di
 * `upcomingConcerts` è quello messo in evidenza in home page.
 */

import concertSquare from "@/assets/concert-square.jpg";
import church from "@/assets/church.jpg";
import heroChoir from "@/assets/hero-choir.jpg";
import group from "@/assets/group.jpg";

export type Concert = {
  id: string;
  /** formato ISO: YYYY-MM-DD */
  date: string;
  time?: string;
  title: string;
  venue: string;
  city: string;
  description: string;
  /** altri cori partecipanti */
  guests?: string[];
  conductors?: string[];
  image?: string;
  imageAlt?: string;
};

export const upcomingConcerts: Concert[] = [
  {
    id: "2026-09-12-rassegna-savigno",
    date: "2026-09-12",
    time: "21.00",
    title: "Rassegna corale d'autunno",
    venue: "Chiesa di Santa Maria Assunta",
    city: "Savigno (BO)",
    description:
      "Programma di musica sacra e canti popolari dell'Appennino, con letture tra i brani. Ingresso libero.",
    guests: ["Coro ospite — da definire"],
    conductors: ["Direttore del coro"],
    image: church,
    imageAlt: "Interno di una chiesa di campagna prima del concerto",
  },
  {
    id: "2026-10-03-serata-zocca",
    date: "2026-10-03",
    time: "20.45",
    title: "Serata di canti popolari",
    venue: "Teatro comunale",
    city: "Zocca (MO)",
    description:
      "Una serata dedicata ai canti della tradizione contadina e alpina, con brevi introduzioni ai brani.",
    guests: ["Coro ospite — da definire"],
    image: concertSquare,
    imageAlt: "Concerto serale nella piazza di un borgo appenninico",
  },
  {
    id: "2026-11-21-concerto-santa-cecilia",
    date: "2026-11-21",
    time: "21.00",
    title: "Concerto di Santa Cecilia",
    venue: "Pieve romanica",
    city: "Appennino bolognese",
    description:
      "Il tradizionale appuntamento dedicato alla patrona della musica, con repertorio sacro e polifonia antica.",
    image: heroChoir,
    imageAlt: "Coro che canta in una pieve romanica",
  },
];

export const pastConcerts: Concert[] = [
  {
    id: "2026-06-14-festa-borgo",
    date: "2026-06-14",
    title: "Canti nel borgo",
    venue: "Piazza del borgo",
    city: "Savigno (BO)",
    description:
      "Concerto all'aperto nell'ambito della festa del paese, con repertorio popolare e italiano.",
    guests: ["Coro ospite — da definire"],
    image: concertSquare,
    imageAlt: "Concerto serale in piazza",
  },
  {
    id: "2026-05-01-rassegna-primavera",
    date: "2026-05-01",
    title: "Rassegna di primavera",
    venue: "Chiesa parrocchiale",
    city: "Zocca (MO)",
    description: "Incontro tra cori del territorio con programma sacro e profano.",
    guests: ["Coro ospite — da definire", "Coro ospite — da definire"],
    image: church,
    imageAlt: "Interno di chiesa durante una rassegna corale",
  },
  {
    id: "2026-03-22-concerto-quaresima",
    date: "2026-03-22",
    title: "Concerto di Quaresima",
    venue: "Pieve romanica",
    city: "Appennino bolognese",
    description: "Programma di musica sacra e di ispirazione religiosa.",
    image: heroChoir,
    imageAlt: "Coro in concerto in una pieve",
  },
  {
    id: "2025-12-27-concerto-natale",
    date: "2025-12-27",
    title: "Concerto di Natale",
    venue: "Chiesa di Santa Maria Assunta",
    city: "Savigno (BO)",
    description: "Canti natalizi della tradizione italiana ed europea.",
    image: church,
    imageAlt: "Chiesa addobbata per il concerto di Natale",
  },
  {
    id: "2025-09-20-incontro-cori",
    date: "2025-09-20",
    title: "Incontro fra cori dell'Appennino",
    venue: "Teatro parrocchiale",
    city: "Appennino modenese",
    description: "Serata condivisa con altre realtà corali del territorio.",
    guests: ["Coro ospite — da definire"],
    image: group,
    imageAlt: "Coristi insieme dopo il concerto",
  },
  {
    id: "2025-07-05-sera-destate",
    date: "2025-07-05",
    title: "Una sera d'estate",
    venue: "Corte di un antico borgo",
    city: "Appennino bolognese",
    description: "Concerto estivo all'aperto con repertorio popolare e d'autore.",
    image: concertSquare,
    imageAlt: "Concerto estivo all'aperto",
  },
  {
    id: "2025-05-18-canti-alpini",
    date: "2025-05-18",
    title: "Serata di canti alpini",
    venue: "Sala civica",
    city: "Zocca (MO)",
    description: "Programma interamente dedicato al canto alpino e di montagna.",
    image: group,
    imageAlt: "Coro durante una serata di canti alpini",
  },
  {
    id: "2024-12-22-natale-in-pieve",
    date: "2024-12-22",
    title: "Natale in pieve",
    venue: "Pieve romanica",
    city: "Appennino bolognese",
    description: "Concerto natalizio con letture e canti della tradizione.",
    image: heroChoir,
    imageAlt: "Concerto di Natale in una pieve",
  },
];

export function formatConcertDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("it-IT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function concertDateParts(iso: string) {
  const d = new Date(`${iso}T00:00:00`);
  return {
    day: d.toLocaleDateString("it-IT", { day: "2-digit" }),
    month: d.toLocaleDateString("it-IT", { month: "short" }).replace(".", ""),
    year: String(d.getFullYear()),
  };
}
