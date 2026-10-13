import { Megaphone } from "lucide-react";

/**
 * Banner temporaneo in cima al sito: avvisa che il sito è ancora in costruzione
 * e che le informazioni pubblicate non sono ancora definitive.
 */
export function SiteBanner() {
  return (
    <div className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-4 py-2 sm:px-6">
        <Megaphone className="size-4 shrink-0 text-gold sm:size-[1.15rem]" aria-hidden="true" />
        <p className="text-center text-[0.78rem] font-extrabold uppercase leading-snug tracking-wide sm:text-sm">
          SITO IN COSTRUZIONE, INFO NON VALIDE
        </p>
      </div>
    </div>
  );
}
