import { Cta } from "@/components/cta";
import { PRIMARY_CTA } from "@/lib/routes";
import { Rule } from "@/components/primitives";

// Fork law: no proof artifact, demo, or coming-soon block dead-ends. Every one
// offers (a) graduate to the diagnostic and (b) see more proof.
export function ProofFork({
  moreHref,
  moreLabel = "See more proof",
}: {
  moreHref: string;
  moreLabel?: string;
}) {
  return (
    <div className="flex flex-col gap-6">
      <Rule />
      <div className="flex flex-wrap items-center gap-4">
        <Cta href={PRIMARY_CTA.href} variant="primary">
          {PRIMARY_CTA.label}
        </Cta>
        <Cta href={moreHref} variant="secondary">
          {moreLabel}
        </Cta>
      </div>
    </div>
  );
}
