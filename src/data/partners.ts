/**
 * Collaborazioni: cori, associazioni, enti e realtà culturali.
 * MODIFICA QUI. `logo` può restare vuoto: verrà mostrata l'iniziale del nome.
 */

export type Partner = {
  id: string;
  name: string;
  category: "Cori" | "Associazioni" | "Enti locali" | "Organizzatori di eventi" | "Realtà culturali";
  description: string;
  /** URL del logo, opzionale */
  logo?: string;
  /** sito o pagina esterna, opzionale */
  href?: string;
};

export const partners: Partner[] = [
  {
    id: "coro-1",
    name: "Nome del coro amico",
    category: "Cori",
    description:
      "[Descrizione da completare] Rassegne condivise, scambi di programma e concerti insieme.",
    href: "",
  },
  {
    id: "coro-2",
    name: "Nome del coro ospite",
    category: "Cori",
    description: "[Descrizione da completare] Gemellaggio e serate in comune.",
    href: "",
  },
  {
    id: "assoc-1",
    name: "Nome dell'associazione",
    category: "Associazioni",
    description:
      "[Descrizione da completare] Collaborazione su iniziative culturali e di solidarietà.",
    href: "",
  },
  {
    id: "ente-1",
    name: "Comune di ...",
    category: "Enti locali",
    description:
      "[Descrizione da completare] Patrocinio e sostegno alle rassegne corali sul territorio.",
    href: "",
  },
  {
    id: "org-1",
    name: "Nome dell'organizzatore",
    category: "Organizzatori di eventi",
    description: "[Descrizione da completare] Festival e rassegne in cui siamo ospiti.",
    href: "",
  },
  {
    id: "cult-1",
    name: "Nome della realtà culturale",
    category: "Realtà culturali",
    description:
      "[Descrizione da completare] Progetti di valorizzazione della musica e della memoria locale.",
    href: "",
  },
];

export const partnerCategories = [
  "Cori",
  "Associazioni",
  "Enti locali",
  "Organizzatori di eventi",
  "Realtà culturali",
] as const;
