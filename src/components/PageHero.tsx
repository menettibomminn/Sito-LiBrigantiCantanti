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
        className="absolute inset-0 size-full object-cover opacity-75"
      />
      <div className="absolute inset-0 bg-ink/60" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 pb-14 pt-10 sm:px-6 sm:pb-20 sm:pt-14">
        <Breadcrumb current={breadcrumb.label} />
        <div className="mt-8 max-w-3xl">
          {eyebrow ? (
            <p className="sticker">{eyebrow}</p>
          ) : null}
          <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl leading-[1.12] text-ink-foreground sm:text-5xl">
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
