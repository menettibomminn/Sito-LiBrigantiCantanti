/**
 * Pagina "Il nostro territorio".
 * MODIFICA QUI testi, luoghi e tradizioni.
 */

import territory from "@/assets/territory.jpg";
import church from "@/assets/church.jpg";
import concertSquare from "@/assets/concert-square.jpg";
import group from "@/assets/group.jpg";

export const territoryHero = {
  src: territory,
  alt: "Colline dell'Appennino con un piccolo borgo e il campanile",
};

export const territorySections: {
  id: string;
  heading: string;
  paragraphs: string[];
  image?: { src: string; alt: string };
}[] = [
  {
    id: "geografia",
    heading: "Dove siamo: tra Savigno, Zocca e l'Appennino",
    paragraphs: [
      "[Testo da completare] Introduci la geografia della zona: le valli, i crinali, i torrenti, la distanza dalle città e il passaggio dalla collina alla montagna.",
      "[Testo da completare] Descrivi il paesaggio nelle diverse stagioni: i castagneti, i calanchi, i boschi, le nebbie di novembre.",
    ],
    image: { src: territory, alt: "Veduta delle colline appenniniche in autunno" },
  },
  {
    id: "storia",
    heading: "Storia e cultura locale",
    paragraphs: [
      "[Testo da completare] Racconta la storia del territorio: le antiche vie, le comunità di montagna, i mestieri di un tempo, la memoria del Novecento.",
      "[Testo da completare] Aggiungi il ruolo della musica e del canto nelle occasioni comunitarie: le feste, le processioni, le veglie.",
    ],
  },
  {
    id: "luoghi",
    heading: "Chiese, borghi e paesaggi",
    paragraphs: [
      "[Testo da completare] Elenca i luoghi più belli da visitare: pievi romaniche, borghi in pietra, mulini, sentieri e punti panoramici.",
    ],
    image: { src: church, alt: "Interno di una pieve romanica dell'Appennino" },
  },
  {
    id: "tradizioni",
    heading: "Tradizioni locali",
    paragraphs: [
      "[Testo da completare] Descrivi le tradizioni: sagre, fiere, prodotti tipici, il tartufo, la castagna, i canti e i balli popolari.",
    ],
    image: { src: concertSquare, alt: "Festa di paese con concerto serale in piazza" },
  },
  {
    id: "coro-e-territorio",
    heading: "Il territorio e la storia del coro",
    paragraphs: [
      "[Testo da completare] Spiega il legame tra il paesaggio, le comunità e la nascita del coro: i luoghi in cui cantiamo più spesso e le persone che ci accompagnano da anni.",
    ],
    image: { src: group, alt: "Coristi in una piazza di paese" },
  },
];

export const territoryPlaces: { name: string; description: string }[] = [
  { name: "Nome del borgo", description: "[Descrizione da completare] Cosa vedere e perché vale la visita." },
  { name: "Nome della pieve", description: "[Descrizione da completare] Epoca, architettura e concerti ospitati." },
  { name: "Nome del sentiero", description: "[Descrizione da completare] Percorso, difficoltà e panorami." },
  { name: "Nome del punto panoramico", description: "[Descrizione da completare] Come arrivarci e cosa si vede." },
];
