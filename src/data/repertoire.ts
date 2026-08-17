/**
 * Repertorio diviso per categorie.
 * MODIFICA QUI: aggiungi categorie o brani nel formato { title, author }.
 */

export type Piece = { title: string; author: string };
export type RepertoireCategory = { id: string; name: string; note?: string; pieces: Piece[] };

export const repertoire: RepertoireCategory[] = [
  {
    id: "sacra",
    name: "Musica sacra e di ispirazione religiosa",
    note: "Brani per le liturgie e per i concerti in chiesa.",
    pieces: [
      { title: "Titolo del brano", author: "Autore" },
      { title: "Titolo del brano", author: "Autore" },
      { title: "Titolo del brano", author: "Autore" },
      { title: "Titolo del brano", author: "Autore" },
      { title: "Titolo del brano", author: "Armonizzazione di ..." },
    ],
  },
  {
    id: "popolare",
    name: "Musica popolare",
    note: "Canti della tradizione contadina e delle nostre valli.",
    pieces: [
      { title: "Titolo del canto popolare", author: "Tradizionale" },
      { title: "Titolo del canto popolare", author: "Tradizionale" },
      { title: "Titolo del canto popolare", author: "Armonizzazione di ..." },
      { title: "Titolo del canto popolare", author: "Tradizionale" },
    ],
  },
  {
    id: "alpini",
    name: "Canti alpini",
    pieces: [
      { title: "Titolo del canto alpino", author: "Tradizionale" },
      { title: "Titolo del canto alpino", author: "Tradizionale" },
      { title: "Titolo del canto alpino", author: "Armonizzazione di ..." },
    ],
  },
  {
    id: "italiana",
    name: "Musica italiana",
    note: "Canzoni d'autore e classici italiani in versione corale.",
    pieces: [
      { title: "Titolo del brano", author: "Autore" },
      { title: "Titolo del brano", author: "Autore" },
      { title: "Titolo del brano", author: "Autore" },
    ],
  },
  {
    id: "internazionale",
    name: "Musica internazionale",
    pieces: [
      { title: "Titolo del brano", author: "Autore" },
      { title: "Titolo del brano", author: "Autore" },
      { title: "Titolo del brano", author: "Autore" },
    ],
  },
  {
    id: "antica",
    name: "Musica antica",
    note: "Polifonia rinascimentale e barocca.",
    pieces: [
      { title: "Titolo del brano", author: "Autore" },
      { title: "Titolo del brano", author: "Autore" },
    ],
  },
  {
    id: "contemporanea",
    name: "Musica contemporanea",
    pieces: [
      { title: "Titolo del brano", author: "Autore" },
      { title: "Titolo del brano", author: "Autore" },
    ],
  },
];
