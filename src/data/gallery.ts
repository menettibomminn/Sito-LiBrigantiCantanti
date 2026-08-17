/**
 * Galleria foto e video.
 * FOTO: sostituisci `src` con l'immagine definitiva mantenendo caption e alt.
 * VIDEO: incolla l'URL YouTube/Vimeo in `url` e la miniatura in `thumbnail`.
 */

import heroChoir from "@/assets/hero-choir.jpg";
import rehearsal from "@/assets/rehearsal.jpg";
import church from "@/assets/church.jpg";
import group from "@/assets/group.jpg";
import territory from "@/assets/territory.jpg";
import sheetMusic from "@/assets/sheet-music.jpg";
import concertSquare from "@/assets/concert-square.jpg";
import conductor from "@/assets/conductor.jpg";

export type Photo = { id: string; src: string; alt: string; caption: string };

export const photos: Photo[] = [
  {
    id: "foto-1",
    src: heroChoir,
    alt: "Il coro durante un concerto in chiesa",
    caption: "Concerto in chiesa — [luogo e anno]",
  },
  {
    id: "foto-2",
    src: rehearsal,
    alt: "Prova del coro attorno al pianoforte",
    caption: "Una serata di prove — [luogo e anno]",
  },
  {
    id: "foto-3",
    src: concertSquare,
    alt: "Concerto serale nella piazza di un borgo",
    caption: "Canti nel borgo — [luogo e anno]",
  },
  {
    id: "foto-4",
    src: church,
    alt: "Interno di una pieve romanica",
    caption: "La pieve che ci ospita — [luogo]",
  },
  {
    id: "foto-5",
    src: group,
    alt: "Coristi insieme dopo il concerto",
    caption: "Dopo il concerto — [luogo e anno]",
  },
  {
    id: "foto-6",
    src: territory,
    alt: "Paesaggio collinare dell'Appennino in autunno",
    caption: "Il nostro Appennino — [luogo]",
  },
  {
    id: "foto-7",
    src: conductor,
    alt: "Il direttore dirige il coro",
    caption: "Il gesto del direttore — [luogo e anno]",
  },
  {
    id: "foto-8",
    src: sheetMusic,
    alt: "Spartiti corali su un tavolo di legno",
    caption: "Dal nostro archivio musicale",
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
