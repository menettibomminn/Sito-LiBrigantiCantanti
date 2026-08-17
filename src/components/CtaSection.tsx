import { Link } from "@tanstack/react-router";

type Props = {
  title: string;
  text: string;
  buttonLabel: string;
  to: string;
  variant?: "dark" | "light";
};

export function CtaSection({ title, text, buttonLabel, to, variant = "dark" }: Props) {
  const dark = variant === "dark";
  return (
    <section className={dark ? "bg-forest text-forest-foreground" : "bg-secondary"}>
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6 sm:py-20">
        <h2
          className={`font-[family-name:var(--font-display)] text-3xl leading-tight sm:text-4xl ${
            dark ? "text-forest-foreground" : "text-foreground"
          }`}
        >
          {title}
        </h2>
        <p
          className={`max-w-2xl text-base leading-relaxed ${
            dark ? "text-forest-foreground/80" : "text-muted-foreground"
          }`}
        >
          {text}
        </p>
        <Link
          to={to}
          className={
            dark
              ? "inline-flex items-center justify-center bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground transition-colors hover:bg-gold/90"
              : "inline-flex items-center justify-center bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          }
        >
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}
