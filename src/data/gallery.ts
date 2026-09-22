/**
 * Galleria foto e video.
 * FOTO: fotografie reali del coro, senza didascalie.
 * VIDEO: incolla l'URL YouTube/Vimeo in `url` e la miniatura in `thumbnail`.
 */

import heroChoir from "@/assets/hero-choir.jpg";
import rehearsal from "@/assets/rehearsal.jpg";
import concertSquare from "@/assets/concert-square.jpg";
import galleria01 from "@/assets/galleria/galleria-01.jpg.asset.json";
import galleria02 from "@/assets/galleria/galleria-02.jpg.asset.json";
import galleria03 from "@/assets/galleria/galleria-03.jpg.asset.json";
import galleria04 from "@/assets/galleria/galleria-04.jpg.asset.json";
import galleria05 from "@/assets/galleria/galleria-05.jpg.asset.json";
import galleria06 from "@/assets/galleria/galleria-06.jpg.asset.json";
import galleria07 from "@/assets/galleria/galleria-07.jpg.asset.json";
import galleria08 from "@/assets/galleria/galleria-08.jpg.asset.json";
import galleria09 from "@/assets/galleria/galleria-09.jpg.asset.json";
import galleria10 from "@/assets/galleria/galleria-10.jpg.asset.json";
import galleria11 from "@/assets/galleria/galleria-11.jpg.asset.json";
import galleria12 from "@/assets/galleria/galleria-12.jpg.asset.json";
import galleria13 from "@/assets/galleria/galleria-13.jpg.asset.json";
import galleria14 from "@/assets/galleria/galleria-14.jpg.asset.json";
import galleria15 from "@/assets/galleria/galleria-15.jpg.asset.json";
import galleria16 from "@/assets/galleria/galleria-16.jpg.asset.json";
import galleria17 from "@/assets/galleria/galleria-17.jpg.asset.json";
import galleria18 from "@/assets/galleria/galleria-18.jpg.asset.json";
import galleria19 from "@/assets/galleria/galleria-19.jpg.asset.json";
import galleria20 from "@/assets/galleria/galleria-20.jpg.asset.json";

export type Photo = { id: string; src: string; alt: string };

export const photos: Photo[] = [
  {
    id: "foto-1",
    src: galleria01.url,
    alt: "Il coro canta di sera all'aperto, con i faldoni delle partiture in mano",
  },
  {
    id: "foto-2",
    src: galleria02.url,
    alt: "Concerto al coperto con le bandiere internazionali e l'arpa illuminata",
  },
  {
    id: "foto-3",
    src: galleria03.url,
    alt: "L'arpista suona durante un concerto nella piazza del paese",
  },
  {
    id: "foto-4",
    src: galleria04.url,
    alt: "Il maestro dirige il coro in una corte all'aperto",
  },
  {
    id: "foto-5",
    src: galleria05.url,
    alt: "Il coro in concerto sotto le bandiere internazionali",
  },
  {
    id: "foto-6",
    src: galleria06.url,
    alt: "Le coriste cantano di notte, illuminate da una luce calda",
  },
  {
    id: "foto-7",
    src: galleria07.url,
    alt: "Il coro con l'arpa durante un concerto estivo in piazza",
  },
  {
    id: "foto-8",
    src: galleria08.url,
    alt: "Il maestro parla al pubblico con il microfono prima del concerto",
  },
  {
    id: "foto-9",
    src: galleria09.url,
    alt: "L'arpa con le luci blu in sala prima del concerto",
  },
  {
    id: "foto-10",
    src: galleria10.url,
    alt: "Il coro con il maestro e l'arpa durante una serata estiva",
  },
  {
    id: "foto-11",
    src: galleria11.url,
    alt: "Il coro canta in una sala con le pareti arancioni davanti al pubblico della residenza",
  },
  {
    id: "foto-12",
    src: galleria12.url,
    alt: "Il maestro dirige il coro nella sala della residenza per anziani, tra libri e poltrone",
  },
  {
    id: "foto-13",
    src: galleria13.url,
    alt: "Il coro in concerto nella chiesa barocca, sul podio davanti all'altare maggiore",
  },
  {
    id: "foto-14",
    src: galleria14.url,
    alt: "I coristi con i faldoni delle partiture cantano nella chiesa, accompagnati dal maestro",
  },
  {
    id: "foto-15",
    src: galleria15.url,
    alt: "Il coro in concerto alla luce delle candele, con il maestro al microfono",
  },
  {
    id: "foto-16",
    src: galleria16.url,
    alt: "Il maestro dirige il coro sui gradini dell'altare, tra le panche della chiesa",
  },
  {
    id: "foto-17",
    src: galleria17.url,
    alt: "Il coro in concerto sul palco di legno del teatro, sotto le luci della scena",
  },
  {
    id: "foto-18",
    src: galleria18.url,
    alt: "Concerto natalizio in chiesa con l'arpa, la banda e il presepe illuminato",
  },
  {
    id: "foto-19",
    src: galleria19.url,
    alt: "L'arpista suona le sue note blu durante il concerto natalizio in chiesa",
  },
  {
    id: "foto-20",
    src: galleria20.url,
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
