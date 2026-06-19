import Link from "next/link";
import { Container, Section, Overline, Heading, Deck, Rule } from "@/components/primitives";
import { Cta } from "@/components/cta";
import { Metric } from "@/components/metric";
import { PRIMARY_CTA, ROUTES } from "@/lib/routes";
import {
  LEAD_THESIS,
  CATEGORY_LINE,
  MOVEMENT,
  BRAND_WRAPPER,
  HOME_NUMBER,
  PILLARS,
} from "@/lib/content";

// HOME — category gate + router + self-qualifier. Never gates proof. Existence
// proof + ONE number. One dominant CTA → /start. Warmth lands LAST.
export default function HomePage() {
  return (
    <>
      {/* S1 — Category gate */}
      <Section className="pt-16 sm:pt-24">
        <Container className="flex flex-col gap-8">
          <Overline>The owned-engine operating partner</Overline>
          <Heading level={1} size="display-xl" className="max-w-[18ch]">
            {LEAD_THESIS}
          </Heading>
          <Deck>{CATEGORY_LINE}</Deck>
          <div className="flex flex-wrap items-center gap-4">
            <Cta href={PRIMARY_CTA.href}>{PRIMARY_CTA.label}</Cta>
            <Cta href={ROUTES.HOW_WE_WORK} variant="quiet">
              How we work
            </Cta>
          </div>
        </Container>
      </Section>

      {/* S2 — Existence proof + the ONE number */}
      <Section className="bg-paper-pure border-y border-rule">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="flex flex-col gap-5">
            <Overline>Proof, not promises</Overline>
            <Heading size="display-l">We eat our own cooking.</Heading>
            <Deck>
              We don&rsquo;t just advise on the build — we ship our own. Gaandiva
              OS, our CRM, runs live today. That&rsquo;s why we can build yours.
            </Deck>
            <Cta href={ROUTES.PROOF} variant="secondary" className="self-start">
              See the proof
            </Cta>
          </div>
          <div className="rounded-lg border border-rule bg-paper p-8">
            <Metric claim={HOME_NUMBER} size="metric-xl" />
          </div>
        </Container>
      </Section>

      {/* S3 — Self-qualify router */}
      <Section>
        <Container className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <Overline>Where to go next</Overline>
            <Heading size="headline">Pick the path that fits you.</Heading>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                label: "See the proof",
                desc: "The live demo, the numbers, the receipts.",
                href: ROUTES.PROOF,
                dominant: false,
              },
              {
                label: "How we work",
                desc: "The operating model, the pillars, what you keep.",
                href: ROUTES.HOW_WE_WORK,
                dominant: false,
              },
              {
                label: "Start a conversation",
                desc: "A scoped fit conversation — a diagnostic, not a pitch.",
                href: ROUTES.START,
                dominant: true,
              },
            ].map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className={
                  "group flex flex-col gap-2 rounded-lg border p-6 transition-colors " +
                  (card.dominant
                    ? "border-accent/40 bg-accent-weak hover:border-accent"
                    : "border-rule bg-paper-pure hover:border-ink/30")
                }
              >
                <span className="text-title font-semibold">
                  {card.label}{" "}
                  <span
                    aria-hidden
                    className="inline-block transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
                <span className="text-small text-ink-700">{card.desc}</span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* S4 — Methodology strip (BUILD weighted) */}
      <Section className="bg-paper-pure border-y border-rule">
        <Container className="flex flex-col gap-8">
          <Overline>How we operate</Overline>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p, i) => (
              <div
                key={p.key}
                className={
                  "flex flex-col gap-2 rounded-lg border p-5 " +
                  (p.emphasized ? "border-ink/30 bg-paper" : "border-rule bg-paper")
                }
              >
                <span className="text-overline font-mono text-ink-500 tnum">
                  0{i + 1}
                </span>
                <span className="text-title font-semibold">{p.name}</span>
                <span className="text-small text-ink-700">{p.definition}</span>
              </div>
            ))}
          </div>
          <Cta href={ROUTES.HOW_WE_WORK} variant="quiet" className="self-start">
            See the full operating model
          </Cta>
        </Container>
      </Section>

      {/* S5 — Brand close (warmth, LATE) */}
      <Section>
        <Container className="flex flex-col items-start gap-6">
          <Rule className="w-16" />
          <Heading size="display-l" className="font-serif max-w-[20ch]">
            {MOVEMENT}
          </Heading>
          <Deck>{BRAND_WRAPPER}</Deck>
          <div className="flex flex-wrap items-center gap-4">
            <Cta href={PRIMARY_CTA.href}>{PRIMARY_CTA.label}</Cta>
            <Cta href={ROUTES.PROOF} variant="quiet">
              Or see the proof first
            </Cta>
          </div>
        </Container>
      </Section>
    </>
  );
}
