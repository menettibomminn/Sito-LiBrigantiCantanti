import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import type { Photo } from "@/data/gallery";

/** Griglia responsive di fotografie con lightbox accessibile. */
export function GalleryGrid({ items }: { items: Photo[] }) {
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + items.length) % items.length)),
    [items.length],
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, close, prev, next]);

  const active = index === null ? null : items[index];

  return (
    <>
      <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
        {items.map((photo, i) => (
          <li key={photo.id}>
            <button
              type="button"
              onClick={() => setIndex(i)}
              className="group relative block w-full overflow-hidden"
              aria-label={`Apri la fotografia: ${photo.alt}`}
            >
              <span className="block aspect-[4/3] overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                />
              </span>
            </button>
          </li>
        ))}
      </ul>

      {active ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
          className="fixed inset-0 z-[100] flex flex-col bg-ink/95 p-4 sm:p-8"
        >
          <div className="flex justify-end">
            <button
              type="button"
              onClick={close}
              aria-label="Chiudi la fotografia"
              className="inline-flex size-11 items-center justify-center text-ink-foreground transition-colors hover:text-gold"
            >
              <X className="size-6" aria-hidden="true" />
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center gap-3 overflow-hidden sm:gap-6">
            <button
              type="button"
              onClick={prev}
              aria-label="Fotografia precedente"
              className="inline-flex size-11 shrink-0 items-center justify-center border border-ink-foreground/25 text-ink-foreground transition-colors hover:border-gold hover:text-gold"
            >
              <ChevronLeft className="size-5" aria-hidden="true" />
            </button>
            <figure className="flex max-h-full min-w-0 flex-col items-center gap-4">
              <img
                src={active.src}
                alt={active.alt}
                className="max-h-[70vh] w-auto max-w-full object-contain"
              />
              <figcaption className="text-center text-sm text-ink-foreground/80">
                {active.caption}
              </figcaption>
            </figure>
            <button
              type="button"
              onClick={next}
              aria-label="Fotografia successiva"
              className="inline-flex size-11 shrink-0 items-center justify-center border border-ink-foreground/25 text-ink-foreground transition-colors hover:border-gold hover:text-gold"
            >
              <ChevronRight className="size-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
