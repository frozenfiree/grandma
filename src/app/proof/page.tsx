import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section, Overline, Heading, Deck } from "@/components/primitives";
import { StatusChip } from "@/components/status-chip";
import { ProofFork } from "@/components/proof-fork";
import { VENTURES } from "@/lib/content";
import { ROUTES } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Proof",
  description:
    "What counts as proof here: a live engine you can watch work, with numbers tied to a source — not testimonials. Gaandiva OS is live; our owned media is in build.",
};

// /proof hub — defines the proof standard, inventories LIVE vs COMING SOON
// honestly, routes to the flagship. Never gates proof.
export default function ProofPage() {
  return (
    <>
      <Section className="pt-16 sm:pt-24">
        <Container className="flex flex-col gap-6">
          <Overline>Proof</Overline>
          <Heading level={1} size="display-l" className="max-w-[22ch]">
            Proof here means a live engine you can watch work — not a case-study PDF.
          </Heading>
          <Deck>
            Every number is tied to a source. We label what&rsquo;s live, what&rsquo;s
            in build, and what&rsquo;s planned — and we never dress one up as another.
          </Deck>
        </Container>
      </Section>

      <Section className="bg-paper-pure border-y border-rule">
        <Container className="flex flex-col gap-8">
          <Overline>The inventory</Overline>
          <ul className="grid gap-4 md:grid-cols-2">
            {VENTURES.map((v) => {
              const isLive = v.status === "live";
              const card = (
                <div
                  className={
                    "flex h-full flex-col gap-3 rounded-lg border p-6 transition-colors " +
                    (isLive
                      ? "border-ink/25 bg-paper hover:border-ink/50"
                      : "border-rule bg-paper/60")
                  }
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-title font-semibold">{v.name}</span>
                    <StatusChip status={v.status} />
                  </div>
                  <span className="text-overline font-mono uppercase text-ink-500">
                    {v.category}
                  </span>
                  <span className="text-small text-ink-700">{v.summary}</span>
                  {v.href && (
                    <span className="text-small text-accent-ink mt-1">
                      {isLive ? "See the proof →" : "What's coming →"}
                    </span>
                  )}
                </div>
              );
              return (
                <li key={v.name}>
                  {v.href ? (
                    <Link href={v.href} className="block h-full">
                      {card}
                    </Link>
                  ) : (
                    card
                  )}
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <ProofFork moreHref={ROUTES.PROOF_GAANDIVA} moreLabel="See the Gaandiva proof" />
        </Container>
      </Section>
    </>
  );
}
