type Props = {
  name: string;
  role: string;
  bio?: string;
  image: string;
  imageAlt: string;
};

export function PersonCard({ name, role, bio, image, imageAlt }: Props) {
  return (
    <article className="flex flex-col gap-5 rounded-xl border-2 border-border bg-card p-5 sm:flex-row sm:gap-6 sm:p-6">
      <img
        src={image}
        alt={imageAlt}
        loading="lazy"
        width={480}
        height={480}
        className="h-56 w-full shrink-0 object-cover sm:size-40"
      />
      <div>
        <h3 className="font-[family-name:var(--font-display)] text-2xl text-foreground">{name}</h3>
        <p className="mt-1 text-xs font-extrabold uppercase tracking-wide text-primary">{role}</p>
        {bio ? <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{bio}</p> : null}
      </div>
    </article>
  );
}
