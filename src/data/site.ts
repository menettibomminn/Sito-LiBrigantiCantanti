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
  email: "bacchelli.marco@gmail.com",
  phone: "+39 348 334 5369",
  address: 'Centro Culturale "Le Nonne": via Marconi 22, Savigno, Valsamoggia (Bo)',
  vatOrCf: "C.F. 00000000000",
  social: [
    { label: "Facebook", href: "https://facebook.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "YouTube", href: "https://youtube.com" },
  ],
  /** Sedi e luoghi delle prove */
  venues: [
    {
      name: 'Teatro comunale "Vasco Rossi" di Zocca, via del Mercato, 104, Zocca',
      address: "",
      note: "",
    },
    {
      name: 'Centro Culturale "Le Nonne": via Marconi 22, Savigno, Valsamoggia (Bo)',
      address: "",
      note: "",
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
