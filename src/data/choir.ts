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
      "Il coro nasce nell'autunno del 2009 dall'incontro tra circa 25 coristi provenienti da diversi gruppi vocali dell'Appennino Emiliano, in particolare dalle località di Savigno (Bo) e Zocca (Mo). I due nuclei originari erano però partiti già molti anni prima: il gruppo di Savigno nasce sul finire degli anni '70 sotto la spinta dell'AERCO (Ass. Em. Rom. Cori) che, oggi come allora, organizza e promuove la coralità. Dopo alcuni anni di attività il coro si scioglie e molti coristi confluiscono in compagini canore diverse. Alcuni partecipano alle attività del coro \"Monte della Riva\" di Zocca gettando inconsapevolmente una sorta di ponte in quello che sarebbe poi divenuto il coro de \"Li Briganti Cantanti\". A proposito di questo: ogni gruppo che si forma ha bisogno di un nome che lo renda riconoscibile... quindi, come chiamarci? Ecco allora che la provenienza della maggior parte dei coristi ha suggerito il nome: pare infatti che un fenomeno abbia accomunato, dal 1500 fino a circa metà del 1800, questi due comuni \"montanari\" confinanti: il Brigantaggio. Ed imitando una banda di briganti, il coro si muove \"razziando\" tra vari generi di musica vocale: dal sacro al profano, dal colto al popolare, dall'antico al moderno. Essendosi formata da poco tempo, questa masnada ha ancora il \"bottino/repertorio\" dei propri forzieri ben lungi dall'essere riempito...ma ci sta lavorando con entusiasmo!!",
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
    members: [
      "Claudia Collina",
      "Nicoletta Giorgi",
      "Ornella Nozzi",
      "Rossana Montanari",
      "Tosca Creda",
    ],
  },
  {
    id: "contralti",
    name: "Contralti",
    description: "Voci femminili gravi: sostengono l'armonia e danno calore all'insieme.",
    members: [
      "Alberta Bernardi",
      "Anna Maria Portacci",
      "Anna Maria Venturi",
      "Claudia Foscari",
      "Cinzia Rossi",
      "Orianna Tondi",
      "Simonetta Casagrandi Venturelli",
    ],
  },
  {
    id: "tenori",
    name: "Tenori",
    description: "Voci maschili acute: colore e slancio alla polifonia.",
    members: ["Andrea Rago", "Andrea Rubini", "Antonio Vacondio"],
  },
  {
    id: "bassi",
    name: "Bassi e baritoni",
    description: "Il fondamento del coro: la base armonica su cui poggia tutto.",
    members: ["Carlo Lagazzi", "Lucio Migliori", "Luigi Ropa"],
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
    name: "Marco Bacchelli",
    role: "Direttore del coro",
    bio: "",
    image: conductor,
    imageAlt: "Ritratto del direttore del coro",
  },
  {
    id: "direttore-2",
    name: "Simonetta Casagrandi Venturelli",
    role: "Vicedirettore e maestro accompagnatore",
    bio: "",
    image: rehearsal,
    imageAlt: "Ritratto del vicedirettore al pianoforte",
  },
];
