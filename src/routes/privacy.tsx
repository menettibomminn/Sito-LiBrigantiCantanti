import { createFileRoute } from "@tanstack/react-router";

import { Breadcrumb } from "@/components/Breadcrumb";
import { site } from "@/data/site";

const description =
  "Informativa privacy del coro: quali dati raccogliamo tramite il modulo contatti e come vengono trattati.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: `Privacy policy — ${site.fullName}` },
      { name: "description", content: description },
      { property: "og:title", content: `Privacy policy — ${site.fullName}` },
      { property: "og:description", content: description },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
      <Breadcrumb current="Privacy policy" onDark={false} />
      <h1 className="rule-gold mt-8 font-[family-name:var(--font-display)] text-4xl text-foreground">
        Privacy policy
      </h1>
      <div className="prose-warm mt-8">
        <p>
          [Testo da completare] Indicare il titolare del trattamento, la finalità della raccolta dei
          dati inviati tramite il modulo contatti, la base giuridica, i tempi di conservazione e i
          diritti dell'interessato.
        </p>
        <p>
          Per qualsiasi richiesta relativa ai tuoi dati puoi scrivere a{" "}
          <a href={`mailto:${site.email}`} className="text-primary underline">
            {site.email}
          </a>
          .
        </p>
      </div>
    </article>
  );
}
