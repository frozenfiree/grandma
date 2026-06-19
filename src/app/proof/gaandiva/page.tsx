import type { Metadata } from "next";
import { Container, Section, Overline, Heading, Deck, Caption, Rule } from "@/components/primitives";
import { Metric } from "@/components/metric";
import { StatusChip } from "@/components/status-chip";
import { ProofFork } from "@/components/proof-fork";
import { HOME_NUMBER } from "@/lib/content";
import { ROUTES } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Gaandiva OS — proof",
  description:
    "Gaandiva OS is the CRM we built and run on ourselves. Existence proof, a working demo, and case studies tied to sources. The engine we'd build for you, run for us.",
};

// /proof/gaandiva — the load-bearing page. SACRED ORDER:
// existence+1 number → working demo → case studies → method linkage →
// references + faces (LAST). Demo is never gated.
export default function GaandivaProofPage() {
  return (
    <>
      {/* 1 — Existence proof + one number */}
      <Section className="pt-16 sm:pt-24">
        <Container className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <Overline>Gaandiva OS</Overline>
            <StatusChip status="live" />
          </div>
          <Heading level={1} size="display-l" className="max-w-[22ch]">
            The CRM we built and run on ourselves.
          </Heading>
          <Deck>
            This is what &ldquo;we eat our own cooking&rdquo; means literally:
            Gaandiva OS is our own engine, operating today. It&rsquo;s the proof
            behind everything else on this site.
          </Deck>
          <div className="mt-4 max-w-md rounded-lg border border-rule bg-paper-pure p-8">
            <Metric claim={HOME_NUMBER} size="metric-xl" />
          </div>
        </Container>
      </Section>

      {/* 2 — Working demo (first-class, ungated) */}
      <Section className="bg-paper-pure border-y border-rule">
        <Container className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <Overline>The working demo</Overline>
            <StatusChip status="in-progress" />
          </div>
          <Heading size="headline">Don&rsquo;t take our word for it. Use it.</Heading>
          <Deck>
            A live, interactive demo of Gaandiva OS embeds here — no form, no
            login. It boots to a live state so you can watch a real engine work.
          </Deck>
          <div
            className="flex min-h-64 items-center justify-center rounded-lg border border-dashed border-rule bg-paper p-10 text-center"
            role="img"
            aria-label="Gaandiva OS interactive demo — in build"
          >
            <Caption>
              [ Interactive Gaandiva OS demo — in build. Will embed the live
              product here, ungated, with a graceful fallback. ]
            </Caption>
          </div>
          <ProofFork moreHref="#case-studies" moreLabel="See the case studies" />
        </Container>
      </Section>

      {/* 3 — Case studies */}
      <Section id="case-studies">
        <Container className="flex flex-col gap-8">
          <div className="flex items-center gap-3">
            <Overline>Case studies</Overline>
            <StatusChip status="in-progress" />
          </div>
          <Heading size="headline">What the build produced.</Heading>
          <Deck>
            Each case study will carry context, baseline, the work and its named
            mechanism, the result with its timeframe, the source behind every
            number, and which pillar produced it. Published when verified — no
            estimates, no composite clients.
          </Deck>
          <div className="grid gap-4 md:grid-cols-2">
            {[1, 2].map((n) => (
              <div
                key={n}
                className="flex flex-col gap-3 rounded-lg border border-dashed border-rule bg-paper p-6"
              >
                <StatusChip status="in-progress" className="self-start" />
                <p className="text-title font-semibold text-ink-500">
                  Case study {n}
                </p>
                <Caption>
                  Context · baseline · intervention + mechanism · result +
                  timeframe · source · pillar map. Awaiting verified data.
                </Caption>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 4 — Method linkage */}
      <Section className="bg-paper-pure border-y border-rule">
        <Container className="flex flex-col gap-4">
          <Overline>Why it&rsquo;s repeatable</Overline>
          <Heading size="headline" className="max-w-[24ch]">
            These results came from a system, not a fluke.
          </Heading>
          <Deck>
            Every outcome above maps to PLAN → BUILD → PRODUCE → DISTRIBUTE —
            the same operating model we&rsquo;d run for you.
          </Deck>
          <Caption>
            <a href={ROUTES.HOW_WE_WORK} className="underline underline-offset-4">
              See the operating model →
            </a>
          </Caption>
        </Container>
      </Section>

      {/* 5 — References + faces (LAST) */}
      <Section>
        <Container className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <Overline>The people behind it</Overline>
            <StatusChip status="in-progress" />
          </div>
          <Heading size="headline">Real people built and run this.</Heading>
          <Deck>
            Named, contactable references and the team who operate Gaandiva will
            appear here — with consent on file. Decision-grade trust, last.
          </Deck>
          <Rule />
          <ProofFork moreHref={ROUTES.PROOF} moreLabel="Back to all proof" />
        </Container>
      </Section>
    </>
  );
}
