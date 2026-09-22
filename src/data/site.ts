/**
 * Informazioni generali del coro e contatti.
 * MODIFICA QUI: nome, recapiti, sedi, social.
 */

export const site = {
  name: "Li Briganti Cantanti",
  fullName: "Coro Li Briganti Cantanti",
  tagline: "Un coro di paese, tra Appennino bolognese e modenese",
  claim: "Ci troviamo ogni settimana, cantiamo per passione e ci divertiamo insieme.",
  shortDescription:
    "Siamo un gruppo di amici che canta insieme da tanti anni tra le valli dell'Appennino: canti popolari, brani sacri e qualche pezzo d'autore, nelle chiese e nelle feste dei nostri paesi.",
  email: "info@brigantiCantanti.it",
  phone: "+39 000 000 0000",
  address: "Via del Coro 1, Savigno (BO)",
  vatOrCf: "C.F. 00000000000",
  social: [
    { label: "Facebook", href: "https://facebook.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "YouTube", href: "https://youtube.com" },
  ],
  /** Sedi e luoghi delle prove */
  venues: [
    {
      name: "Sede del coro",
      address: "Via del Coro 1 — Savigno (BO)",
      note: "Sede associativa e archivio musicale.",
    },
    {
      name: "Sala prove",
      address: "Teatro parrocchiale — Zocca (MO)",
      note: "Prove ogni venerdì dalle 21.00 alle 23.00.",
    },
  ],
  /** Sostituire con l'URL di embed di Google Maps quando disponibile */
  mapsEmbedUrl: "",
} as const;

export const navigation = [
  { label: "Home", to: "/" },
  { label: "Chi siamo", to: "/chi-siamo" },
  { label: "Dove siamo e prossimi concerti", to: "/dove-siamo-e-prossimi-concerti" },
  { label: "Galleria foto e video", to: "/galleria" },
  { label: "Repertorio", to: "/repertorio" },
  { label: "I nostri concerti del passato", to: "/concerti-del-passato" },
  { label: "News e curiosità", to: "/news" },
  { label: "Il nostro territorio", to: "/territorio" },
  { label: "Collaborazioni", to: "/collaborazioni" },
  { label: "Contatti", to: "/contatti" },
] as const;
