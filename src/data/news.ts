/**
 * News e curiosità.
 * MODIFICA QUI: aggiungi un oggetto all'inizio dell'array per un nuovo articolo.
 * `slug` diventa l'URL: /news/<slug>
 */

import sheetMusic from "@/assets/sheet-music.jpg";
import group from "@/assets/group.jpg";
import rehearsal from "@/assets/rehearsal.jpg";
import territory from "@/assets/territory.jpg";

export type NewsArticle = {
  slug: string;
  title: string;
  date: string; // ISO YYYY-MM-DD
  excerpt: string;
  image: string;
  imageAlt: string;
  /** paragrafi del corpo dell'articolo */
  body: string[];
};

export const news: NewsArticle[] = [
  {
    slug: "riprendono-le-prove",
    title: "Riprendono le prove del coro",
    date: "2026-08-01",
    excerpt:
      "Dopo la pausa estiva torniamo in sala prove: ecco il calendario e come fare per venire ad ascoltarci o cantare con noi.",
    image: rehearsal,
    imageAlt: "Coristi durante una prova in sala",
    body: [
      "[Testo da completare] Racconta la ripresa delle prove: giorno, orario, luogo e il programma di lavoro dei prossimi mesi.",
      "[Testo da completare] Aggiungi un invito a chi vorrebbe unirsi al coro, indicando come prendere contatto e cosa aspettarsi dalla prima serata di prova.",
    ],
  },
  {
    slug: "storia-di-un-canto",
    title: "Storia di un canto della nostra tradizione",
    date: "2026-06-20",
    excerpt:
      "Curiosità e origini di uno dei brani più amati del nostro repertorio popolare, tra memoria contadina e trasmissione orale.",
    image: sheetMusic,
    imageAlt: "Spartiti corali antichi su un tavolo di legno",
    body: [
      "[Testo da completare] Descrivi l'origine del canto, il contesto in cui nasceva e come è arrivato fino a noi.",
      "[Testo da completare] Riporta eventuali varianti del testo raccolte nelle nostre valli e il modo in cui il coro lo esegue.",
    ],
  },
  {
    slug: "trasferta-tra-i-borghi",
    title: "Una trasferta tra i borghi dell'Appennino",
    date: "2026-05-10",
    excerpt:
      "Il racconto di una giornata di canto e amicizia tra chiese, piazze e tavole imbandite dell'Appennino.",
    image: territory,
    imageAlt: "Paesaggio dell'Appennino con un piccolo borgo",
    body: [
      "[Testo da completare] Racconta la giornata: il viaggio, i luoghi visitati, i cori incontrati.",
      "[Testo da completare] Chiudi con un ricordo o un aneddoto della serata conviviale.",
    ],
  },
  {
    slug: "nuove-voci-nel-coro",
    title: "Nuove voci nel coro",
    date: "2026-03-08",
    excerpt:
      "Diamo il benvenuto ai nuovi coristi che si sono uniti al gruppo e raccontiamo come funziona l'inserimento.",
    image: group,
    imageAlt: "Coristi sorridenti insieme dopo un concerto",
    body: [
      "[Testo da completare] Presenta i nuovi coristi e i reparti vocali in cui sono entrati.",
      "[Testo da completare] Spiega come avviene l'inserimento di una nuova voce nel gruppo.",
    ],
  },
];

export function formatNewsDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("it-IT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
