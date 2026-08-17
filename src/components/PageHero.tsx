import { Breadcrumb } from "@/components/Breadcrumb";

type Props = {
  eyebrow?: string;
  title: string;
  intro?: string;
  image: string;
  imageAlt: string;
  breadcrumb: { label: string };
};

/** Intestazione fotografica usata da tutte le pagine interne. */
export function PageHero({ eyebrow, title, intro, image, imageAlt, breadcrumb }: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      <img
        src={image}
        alt={imageAlt}
        width={1920}
        height={900}
        className="absolute inset-0 size-full object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 pb-14 pt-10 sm:px-6 sm:pb-20 sm:pt-14">
        <Breadcrumb current={breadcrumb.label} />
        <div className="mt-8 max-w-3xl">
          {eyebrow ? (
            <p className="text-xs font-extrabold uppercase tracking-wide text-gold">{eyebrow}</p>
          ) : null}
          <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl leading-[1.1] text-ink-foreground sm:text-5xl md:text-6xl">
            {title}
          </h1>
          {intro ? (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-foreground/80 sm:text-lg">
              {intro}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
