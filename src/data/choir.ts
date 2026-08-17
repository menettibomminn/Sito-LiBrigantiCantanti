/**
 * Storia del coro, reparti vocali e direttori.
 * MODIFICA QUI i testi e gli elenchi dei componenti.
 */

import conductor from "@/assets/conductor.jpg";
import rehearsal from "@/assets/rehearsal.jpg";

export const history: { heading: string; paragraphs: string[] }[] = [
  {
    heading: "La nascita del coro",
    paragraphs: [
      "[Testo da completare] Racconta qui come e quando è nato il coro, per iniziativa di chi e in quale occasione: una festa di paese, una funzione religiosa, l'incontro fra alcuni amici appassionati di canto.",
      "[Testo da completare] Aggiungi i primi passi del gruppo: le prime prove, la prima esibizione pubblica, l'accoglienza del paese.",
    ],
  },
  {
    heading: "I coristi e la loro provenienza",
    paragraphs: [
      "[Testo da completare] Descrivi da quali paesi e valli arrivano i coristi, quali mestieri e generazioni convivono nel gruppo, come si è allargato negli anni.",
    ],
  },
  {
    heading: "Lo sviluppo negli anni",
    paragraphs: [
      "[Testo da completare] Ripercorri le tappe principali: la crescita del repertorio, le rassegne, i gemellaggi con altri cori, le trasferte, i momenti più importanti della vita del gruppo.",
    ],
  },
  {
    heading: "Il legame con il territorio",
    paragraphs: [
      "[Testo da completare] Spiega il rapporto con le comunità dell'Appennino: le chiese e i teatri che ci ospitano, le feste a cui partecipiamo, la collaborazione con parrocchie, comuni e associazioni.",
    ],
  },
  {
    heading: "La nostra filosofia musicale",
    paragraphs: [
      "[Testo da completare] Descrivi l'approccio del coro: la cura del suono, il rispetto per la tradizione, la curiosità verso nuovi repertori, il piacere di cantare insieme e la convivialità.",
    ],
  },
];

export const historyImages = [
  { src: rehearsal, alt: "Coristi durante una prova attorno al pianoforte" },
  { src: conductor, alt: "Il direttore dirige il coro durante un concerto" },
];

export type VoiceSection = {
  id: string;
  name: string;
  description: string;
  /** Inserire qui i nomi dei componenti */
  members: string[];
};

export const voiceSections: VoiceSection[] = [
  {
    id: "soprani",
    name: "Soprani",
    description: "La voce più acuta del coro: porta la linea melodica principale.",
    members: ["Nome Cognome", "Nome Cognome", "Nome Cognome", "Nome Cognome"],
  },
  {
    id: "contralti",
    name: "Contralti",
    description: "Voci femminili gravi: sostengono l'armonia e danno calore all'insieme.",
    members: ["Nome Cognome", "Nome Cognome", "Nome Cognome"],
  },
  {
    id: "tenori",
    name: "Tenori",
    description: "Voci maschili acute: colore e slancio alla polifonia.",
    members: ["Nome Cognome", "Nome Cognome", "Nome Cognome"],
  },
  {
    id: "bassi",
    name: "Bassi e baritoni",
    description: "Il fondamento del coro: la base armonica su cui poggia tutto.",
    members: ["Nome Cognome", "Nome Cognome", "Nome Cognome", "Nome Cognome"],
  },
];

export type Director = {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  imageAlt: string;
};

export const directors: Director[] = [
  {
    id: "direttore-1",
    name: "Nome del direttore",
    role: "Direttore del coro",
    bio: "[Biografia da completare] Formazione musicale, esperienze precedenti, anno di ingresso nel coro e progetti musicali portati avanti con il gruppo.",
    image: conductor,
    imageAlt: "Ritratto del direttore del coro",
  },
  {
    id: "direttore-2",
    name: "Nome del vicedirettore",
    role: "Vicedirettore e maestro accompagnatore",
    bio: "[Biografia da completare] Ruolo all'interno del coro, strumento suonato, collaborazioni e contributo alla preparazione dei concerti.",
    image: rehearsal,
    imageAlt: "Ritratto del vicedirettore al pianoforte",
  },
];
