import type { Metadata } from "next";
import { Container, Section, Overline, Heading, Deck, Caption } from "@/components/primitives";
import { StatusChip } from "@/components/status-chip";
import { Metric } from "@/components/metric";
import { StartBooking } from "@/components/start-booking";
import { HOME_NUMBER, BRAND_WRAPPER } from "@/lib/content";

export const metadata: Metadata = {
  title: "Start",
  description:
    "Book a scoped fit conversation — a diagnostic, not a pitch. Meet the people you'd work with, see what's live, and find out if there's a fit. You keep what we build.",
};

// /start — the single conversion endpoint. Reframe → decision-grade trust →
// minimal proof recap → booking → qualify AT booking → expectations.
export default function StartPage() {
  return (
    <>
      {/* Reframe (warmth permitted here) */}
      <Section className="pt-16 sm:pt-24">
        <Container className="flex flex-col gap-6">
          <Overline>Start</Overline>
          <Heading level={1} size="display-l" className="max-w-[22ch]">
            A scoped look at your engine — not a pitch.
          </Heading>
          <Deck>
            A diagnostic conversation to find out if there&rsquo;s a fit, both
            ways. {BRAND_WRAPPER}
          </Deck>
        </Container>
      </Section>

      {/* Decision-grade trust + booking */}
      <Section className="bg-paper-pure border-y border-rule">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="flex flex-col gap-6">
            <Overline>Who you&rsquo;d be dealing with</Overline>
            <div className="flex items-center gap-3">
              <Heading size="title">Real, named people.</Heading>
              <StatusChip status="in-progress" />
            </div>
            <Deck>
              Team bios, named references, and the continuity guarantee surface
              here — the human accountability behind the work. Finalizing now.
            </Deck>
            <div className="rounded-lg border border-rule bg-paper p-6">
              <Caption>Recap of what&rsquo;s already live:</Caption>
              <div className="mt-4">
                <Metric claim={HOME_NUMBER} />
              </div>
            </div>
          </div>
          <div>
            <StartBooking />
          </div>
        </Container>
      </Section>

      {/* Expectations */}
      <Section>
        <Container className="flex flex-col gap-4">
          <Overline>What happens next</Overline>
          <Heading size="headline" className="max-w-[24ch]">
            What the conversation is — and isn&rsquo;t.
          </Heading>
          <ul className="measure flex flex-col gap-2 text-small text-ink-700">
            <li>· A scoped diagnostic of where your marketing stalls.</li>
            <li>· A mutual read on fit — no obligation, no hard close.</li>
            <li>· Not a sales pitch, not a quote request.</li>
          </ul>
        </Container>
      </Section>
    </>
  );
}
