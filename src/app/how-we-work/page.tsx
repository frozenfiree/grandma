import type { Metadata } from "next";
import { Container, Section, Overline, Heading, Deck, Caption } from "@/components/primitives";
import { Cta } from "@/components/cta";
import { StatusChip } from "@/components/status-chip";
import { PRIMARY_CTA, ROUTES } from "@/lib/routes";
import { PILLARS } from "@/lib/content";

export const metadata: Metadata = {
  title: "How we work",
  description:
    "We embed as your marketing function — not an agency, not rental software. PLAN → BUILD → PRODUCE → DISTRIBUTE. And you keep what we build.",
};

// /how-we-work — the diligence page. Operating model → 4 pillars (BUILD
// emphasized) → ownership & exit terms (keystone) → Gaandiva worked example
// (reference) → CTA. Reinforces proof; does not re-prove it.
export default function HowWeWorkPage() {
  return (
    <>
      {/* Operating model */}
      <Section className="pt-16 sm:pt-24">
        <Container className="flex flex-col gap-6">
          <Overline>The operating model</Overline>
          <Heading level={1} size="display-l" className="max-w-[24ch]">
            We embed as your marketing function.
          </Heading>
          <Deck>
            Not an agency you brief and chase. Not software you operate alone. One
            accountable team that plans, builds, produces, and distributes — and
            reduces what you have to manage, instead of adding to it.
          </Deck>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["Not an agency", "We&rsquo;re accountable to outcomes and shipped assets, not decks and deliverables."],
              ["Not rental software", "You own the engine we build. It doesn&rsquo;t vanish when an invoice stops."],
              ["One accountable team", "A single throat to choke across the whole chain — no vendor seams."],
            ].map(([h, d]) => (
              <div key={h} className="flex flex-col gap-2 rounded-lg border border-rule bg-paper-pure p-5">
                <span className="text-title font-semibold" dangerouslySetInnerHTML={{ __html: h }} />
                <span className="text-small text-ink-700" dangerouslySetInnerHTML={{ __html: d }} />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Four pillars (BUILD emphasized) */}
      <Section className="bg-paper-pure border-y border-rule">
        <Container className="flex flex-col gap-8">
          <Overline>Plan → Build → Produce → Distribute</Overline>
          <div className="grid gap-4 md:grid-cols-2">
            {PILLARS.map((p, i) => (
              <div
                key={p.key}
                className={
                  "flex flex-col gap-3 rounded-lg border p-6 " +
                  (p.emphasized ? "border-ink/30 bg-paper md:col-span-2" : "border-rule bg-paper")
                }
              >
                <div className="flex items-center gap-3">
                  <span className="text-overline font-mono text-ink-500 tnum">0{i + 1}</span>
                  <span className="text-title font-semibold">{p.name}</span>
                  {p.emphasized && (
                    <span className="text-overline font-mono uppercase text-accent-ink">
                      where marketing fails
                    </span>
                  )}
                </div>
                <p className="text-small text-ink-700">{p.definition}</p>
                <p className="text-caption font-mono text-ink-500">
                  Produces: {p.produces}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Ownership & exit terms (keystone) */}
      <Section>
        <Container className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <Overline>Ownership &amp; exit</Overline>
            <StatusChip status="in-progress" />
          </div>
          <Heading size="headline" className="max-w-[24ch]">
            You keep what we build. No lock-in.
          </Heading>
          <Deck>
            The assets, IP, audience, and data are yours — during the engagement
            and after it. The full, documented ownership and exit terms are being
            finalized with counsel and will be published here; we&rsquo;ll walk
            you through them in the fit conversation in the meantime.
          </Deck>
          <Caption>Documented terms — in legal review. We publish them when signed, not before.</Caption>
        </Container>
      </Section>

      {/* Gaandiva worked example (reference only) */}
      <Section className="bg-paper-pure border-y border-rule">
        <Container className="flex flex-col gap-4">
          <Overline>The model, running on us</Overline>
          <Heading size="headline" className="max-w-[26ch]">
            We ran this exact model on ourselves to build Gaandiva OS.
          </Heading>
          <Deck>
            Gaandiva is the worked example — planned, built, produced, and
            distributed by the same team, the same way. See the full proof.
          </Deck>
          <Cta href={ROUTES.PROOF_GAANDIVA} variant="secondary" className="self-start">
            See the Gaandiva proof
          </Cta>
        </Container>
      </Section>

      {/* CTA close */}
      <Section>
        <Container className="flex flex-wrap items-center gap-4">
          <Cta href={PRIMARY_CTA.href}>{PRIMARY_CTA.label}</Cta>
          <Cta href={ROUTES.PROOF} variant="quiet">
            Or see the proof
          </Cta>
        </Container>
      </Section>
    </>
  );
}
