/**
 * Galleria foto e video.
 * FOTO: fotografie reali del coro, senza didascalie.
 * VIDEO: incolla l'URL YouTube/Vimeo in `url` e la miniatura in `thumbnail`.
 */

import heroChoir from "@/assets/hero-choir.jpg";
import rehearsal from "@/assets/rehearsal.jpg";
import concertSquare from "@/assets/concert-square.jpg";

export type Photo = { id: string; src: string; alt: string };

export const photos: Photo[] = [
  {
    id: "foto-1",
    src: "/assets/galleria/galleria-01.jpg",
    alt: "Il coro canta di sera all'aperto, con i faldoni delle partiture in mano",
  },
  {
    id: "foto-2",
    src: "/assets/galleria/galleria-02.jpg",
    alt: "Concerto al coperto con le bandiere internazionali e l'arpa illuminata",
  },
  {
    id: "foto-3",
    src: "/assets/galleria/galleria-03.jpg",
    alt: "L'arpista suona durante un concerto nella piazza del paese",
  },
  {
    id: "foto-4",
    src: "/assets/galleria/galleria-04.jpg",
    alt: "Il maestro dirige il coro in una corte all'aperto",
  },
  {
    id: "foto-5",
    src: "/assets/galleria/galleria-05.jpg",
    alt: "Il coro in concerto sotto le bandiere internazionali",
  },
  {
    id: "foto-6",
    src: "/assets/galleria/galleria-06.jpg",
    alt: "Le coriste cantano di notte, illuminate da una luce calda",
  },
  {
    id: "foto-7",
    src: "/assets/galleria/galleria-07.jpg",
    alt: "Il coro con l'arpa durante un concerto estivo in piazza",
  },
  {
    id: "foto-8",
    src: "/assets/galleria/galleria-08.jpg",
    alt: "Il maestro parla al pubblico con il microfono prima del concerto",
  },
  {
    id: "foto-9",
    src: "/assets/galleria/galleria-09.jpg",
    alt: "L'arpa con le luci blu in sala prima del concerto",
  },
  {
    id: "foto-10",
    src: "/assets/galleria/galleria-10.jpg",
    alt: "Il coro con il maestro e l'arpa durante una serata estiva",
  },
  {
    id: "foto-11",
    src: "/assets/galleria/galleria-11.jpg",
    alt: "Il coro canta in una sala con le pareti arancioni davanti al pubblico della residenza",
  },
  {
    id: "foto-12",
    src: "/assets/galleria/galleria-12.jpg",
    alt: "Il maestro dirige il coro nella sala della residenza per anziani, tra libri e poltrone",
  },
  {
    id: "foto-13",
    src: "/assets/galleria/galleria-13.jpg",
    alt: "Il coro in concerto nella chiesa barocca, sul podio davanti all'altare maggiore",
  },
  {
    id: "foto-14",
    src: "/assets/galleria/galleria-14.jpg",
    alt: "I coristi con i faldoni delle partiture cantano nella chiesa, accompagnati dal maestro",
  },
  {
    id: "foto-15",
    src: "/assets/galleria/galleria-15.jpg",
    alt: "Il coro in concerto alla luce delle candele, con il maestro al microfono",
  },
  {
    id: "foto-16",
    src: "/assets/galleria/galleria-16.jpg",
    alt: "Il maestro dirige il coro sui gradini dell'altare, tra le panche della chiesa",
  },
  {
    id: "foto-17",
    src: "/assets/galleria/galleria-17.jpg",
    alt: "Il coro in concerto sul palco di legno del teatro, sotto le luci della scena",
  },
  {
    id: "foto-18",
    src: "/assets/galleria/galleria-18.jpg",
    alt: "Concerto natalizio in chiesa con l'arpa, la banda e il presepe illuminato",
  },
  {
    id: "foto-19",
    src: "/assets/galleria/galleria-19.jpg",
    alt: "L'arpista suona le sue note blu durante il concerto natalizio in chiesa",
  },
  {
    id: "foto-20",
    src: "/assets/galleria/galleria-20.jpg",
    alt: "Gli applausi del pubblico e degli ospiti al termine del concerto natalizio",
  },
];

export type Video = {
  id: string;
  title: string;
  description: string;
  /** URL YouTube o Vimeo — lasciare vuoto se non ancora disponibile */
  url: string;
  thumbnail: string;
  thumbnailAlt: string;
};

export const videos: Video[] = [
  {
    id: "video-1",
    title: "Titolo del video — concerto in chiesa",
    description: "[Descrizione da completare] Brano, luogo e data della ripresa.",
    url: "",
    thumbnail: heroChoir,
    thumbnailAlt: "Miniatura del video del concerto in chiesa",
  },
  {
    id: "video-2",
    title: "Titolo del video — canti popolari",
    description: "[Descrizione da completare] Brano, luogo e data della ripresa.",
    url: "",
    thumbnail: concertSquare,
    thumbnailAlt: "Miniatura del video del concerto in piazza",
  },
  {
    id: "video-3",
    title: "Titolo del video — dietro le quinte",
    description: "[Descrizione da completare] Una prova del coro raccontata dall'interno.",
    url: "",
    thumbnail: rehearsal,
    thumbnailAlt: "Miniatura del video delle prove",
  },
];
