import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

import rehearsal from "@/assets/rehearsal.jpg";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/data/site";

const description =
  "Contatta il coro: email, telefono, sedi, social e modulo per scriverci per concerti, collaborazioni o per cantare con noi.";

export const Route = createFileRoute("/contatti")({
  head: () => ({
    meta: [
      { title: `Contatti — ${site.fullName}` },
      { name: "description", content: description },
      { property: "og:title", content: `Contatti — ${site.fullName}` },
      { property: "og:description", content: description },
      { property: "og:url", content: "/contatti" },
    ],
    links: [{ rel: "canonical", href: "/contatti" }],
  }),
  component: ContattiPage,
});

function ContattiPage() {
  return (
    <>
      <PageHero
        eyebrow="Contatti"
        title="Scrivici"
        intro="Per invitarci a un concerto, proporre una collaborazione o venire a cantare con noi."
        image={rehearsal}
        imageAlt="Coristi durante una prova in sala"
        breadcrumb={{ label: "Contatti" }}
      />

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <SectionHeading eyebrow="Recapiti" title="Come raggiungerci" />
            <ul className="mt-10 space-y-5 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <span>
                  <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                    Email
                  </span>
                  <a href={`mailto:${site.email}`} className="text-foreground hover:text-primary">
                    {site.email}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <span>
                  <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                    Telefono
                  </span>
                  <a
                    href={`tel:${site.phone.replace(/\s/g, "")}`}
                    className="text-foreground hover:text-primary"
                  >
                    {site.phone}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <span>
                  <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                    Indirizzo
                  </span>
                  <span className="text-foreground">{site.address}</span>
                </span>
              </li>
            </ul>

            <h3 className="mt-12 text-xs font-extrabold uppercase tracking-wide text-primary">
              Le nostre sedi
            </h3>
            <ul className="mt-4 space-y-4">
              {site.venues.map((v) => (
                <li key={v.name} className="border-l-2 border-gold pl-4">
                  <p className="font-semibold text-foreground">{v.name}</p>
                  <p className="text-sm text-muted-foreground">{v.address}</p>
                  <p className="text-sm text-muted-foreground">{v.note}</p>
                </li>
              ))}
            </ul>

            <h3 className="mt-12 text-xs font-extrabold uppercase tracking-wide text-primary">
              Social
            </h3>
            <ul className="mt-4 flex flex-wrap gap-3">
              {site.social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex border border-border px-4 py-2 text-sm text-foreground/85 transition-colors hover:border-primary hover:text-primary"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}

/**
 * Modulo contatti frontend-only.
 * Per collegarlo a un servizio email, sostituisci il corpo di `handleSubmit`
 * con la chiamata al backend mantenendo gli stessi campi.
 */
function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="rounded-xl border-2 border-border bg-card p-6 sm:p-8">
      <h2 className="rule-gold font-[family-name:var(--font-display)] text-2xl text-foreground sm:text-3xl">
        Modulo contatti
      </h2>

      {sent ? (
        <div role="status" className="mt-8 border-l-2 border-gold bg-secondary p-5 text-sm">
          <p className="font-semibold text-foreground">Grazie per il tuo messaggio!</p>
          <p className="mt-1 text-muted-foreground">
            Il modulo non è ancora collegato all'invio automatico delle email: nel frattempo puoi
            scriverci direttamente a{" "}
            <a href={`mailto:${site.email}`} className="text-primary underline">
              {site.email}
            </a>
            .
          </p>
          <button
            type="button"
            onClick={() => setSent(false)}
            className="mt-4 text-sm font-semibold text-primary hover:text-forest"
          >
            Compila un nuovo messaggio
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <Field id="nome" label="Nome" name="nome" required />
          <Field id="email" label="Email" name="email" type="email" required />
          <Field id="oggetto" label="Oggetto" name="oggetto" required />
          <div>
            <label htmlFor="messaggio" className="block text-sm font-semibold text-foreground">
              Messaggio <span aria-hidden="true">*</span>
            </label>
            <textarea
              id="messaggio"
              name="messaggio"
              rows={6}
              required
              className="mt-2 w-full border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
            />
          </div>
          <div className="flex items-start gap-3">
            <input
              id="privacy"
              name="privacy"
              type="checkbox"
              required
              className="mt-1 size-4 accent-[var(--color-primary)]"
            />
            <label htmlFor="privacy" className="text-sm text-muted-foreground">
              Ho letto l'informativa sulla privacy e acconsento al trattamento dei miei dati per
              essere ricontattato. <span aria-hidden="true">*</span>
            </label>
          </div>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3.5 text-base font-bold text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto"
          >
            Invia
          </button>
        </form>
      )}
    </div>
  );
}

function Field({
  id,
  label,
  name,
  type = "text",
  required,
}: {
  id: string;
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-foreground">
        {label} {required ? <span aria-hidden="true">*</span> : null}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
      />
    </div>
  );
}
