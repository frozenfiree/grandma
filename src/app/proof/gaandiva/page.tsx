import type { Metadata } from "next";
import {
  Container,
  Section,
  Overline,
  Heading,
  Deck,
  Caption,
  Rule,
  Exhibit,
} from "@/components/primitives";
import { Metric } from "@/components/metric";
import { StatusChip } from "@/components/status-chip";
import { ProofFork } from "@/components/proof-fork";
import { Reveal } from "@/components/motion";
import { ProductShell } from "@/components/product-shell";
import { HOME_NUMBER } from "@/lib/content";
import { ROUTES } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Gaandiva OS — proof",
  description:
    "Gaandiva OS is the CRM we built and run on ourselves. Existence proof, a working demo, and case studies tied to sources. The engine we'd build for you, run for us.",
};

// /proof/gaandiva — SACRED ORDER: existence+1 number → working demo → case
// studies → method → references+faces (LAST). Demo is never gated.
export default function GaandivaProofPage() {
  return (
    <>
      {/* 1 — Existence proof + one number */}
      <Section className="pt-14 sm:pt-20">
        <Container className="flex flex-col gap-6">
          <Reveal className="flex items-center gap-3">
            <Overline>Gaandiva OS</Overline>
            <StatusChip status="live" />
          </Reveal>
          <Reveal delay={0.05}>
            <Heading level={1} size="display-xl" className="max-w-[18ch]">
              The CRM we built and run on ourselves.
            </Heading>
          </Reveal>
          <Reveal delay={0.1}>
            <Deck>
              This is what &ldquo;we eat our own cooking&rdquo; means literally:
              Gaandiva OS is our own engine, operating today. It&rsquo;s the proof
              behind everything else on this site.
            </Deck>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-2 max-w-md rounded-lg border border-rule bg-paper-pure p-7">
              <Metric claim={HOME_NUMBER} size="metric" />
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* 2 — Working demo (first-class, ungated): DARK exhibit */}
      <Section dark className="border-y border-white/10">
        <Container className="flex flex-col gap-7">
          <Reveal className="flex items-center gap-3">
            <Overline className="text-accent-bright">The working demo</Overline>
            <StatusChip status="in-progress" />
          </Reveal>
          <Reveal delay={0.05} className="flex flex-col gap-4">
            <Heading size="display-l" className="max-w-[20ch]">
              Don&rsquo;t take our word for it. Use it.
            </Heading>
            <Deck className="text-ink-on-dark-500">
              The live, interactive Gaandiva OS embeds here — no form, no login. It
              boots to a live state so you can watch a real engine work.
            </Deck>
          </Reveal>
          <Reveal delay={0.1}>
            <Exhibit dark label="Gaandiva OS — interactive demo (in build)">
              <ProductShell />
            </Exhibit>
            <Caption className="mt-3 text-ink-on-dark-500">
              Schematic shell shown while the live, interactive embed is wired up.
              No data is represented until it&rsquo;s real.
            </Caption>
          </Reveal>
          <div className="pt-2">
            <ProofFork moreHref="#case-studies" moreLabel="See the case studies" />
          </div>
        </Container>
      </Section>

      {/* 3 — Case studies */}
      <Section id="case-studies">
        <Container className="flex flex-col gap-8">
          <Reveal className="flex items-center gap-3">
            <Overline>Case studies</Overline>
            <StatusChip status="in-progress" />
          </Reveal>
          <Reveal delay={0.05} className="flex flex-col gap-4">
            <Heading size="display-l">What the build produced.</Heading>
            <Deck>
              Each case study will carry context, baseline, the work and its named
              mechanism, the result with its timeframe, the source behind every
              number, and which pillar produced it. Published when verified — no
              estimates, no composite clients.
            </Deck>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2">
            {[1, 2].map((n) => (
              <Reveal key={n} delay={n * 0.06}>
                <div className="flex h-full flex-col gap-3 rounded-xl border border-dashed border-rule bg-paper p-6">
                  <StatusChip status="in-progress" className="self-start" />
                  <p className="text-title font-semibold text-ink-500">
                    Case study {n}
                  </p>
                  <Caption>
                    Context · baseline · intervention + mechanism · result +
                    timeframe · source · pillar map. Awaiting verified data.
                  </Caption>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* 4 — Method linkage */}
      <Section className="bg-paper-pure border-y border-rule">
        <Container className="flex flex-col gap-4">
          <Reveal className="flex flex-col gap-4">
            <Overline>Why it&rsquo;s repeatable</Overline>
            <Heading size="headline" className="max-w-[24ch]">
              These results came from a system, not a fluke.
            </Heading>
            <Deck>
              Every outcome above maps to PLAN → BUILD → PRODUCE → DISTRIBUTE — the
              same operating model we&rsquo;d run for you.
            </Deck>
            <Caption>
              <a href={ROUTES.HOW_WE_WORK} className="underline underline-offset-4">
                See the operating model →
              </a>
            </Caption>
          </Reveal>
        </Container>
      </Section>

      {/* 5 — References + faces (LAST) */}
      <Section>
        <Container className="flex flex-col gap-6">
          <Reveal className="flex items-center gap-3">
            <Overline>The people behind it</Overline>
            <StatusChip status="in-progress" />
          </Reveal>
          <Reveal delay={0.05} className="flex flex-col gap-4">
            <Heading size="headline">Real people built and run this.</Heading>
            <Deck>
              Named, contactable references and the team who operate Gaandiva will
              appear here — with consent on file. Decision-grade trust, last.
            </Deck>
          </Reveal>
          <Rule />
          <ProofFork moreHref={ROUTES.PROOF} moreLabel="Back to all proof" />
        </Container>
      </Section>
    </>
  );
}
