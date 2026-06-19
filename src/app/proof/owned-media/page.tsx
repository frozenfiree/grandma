import type { Metadata } from "next";
import { Container, Section, Overline, Heading, Deck, Caption } from "@/components/primitives";
import { StatusChip } from "@/components/status-chip";
import { ProofFork } from "@/components/proof-fork";
import { NotifyForm } from "@/components/notify-form";
import { VENTURES } from "@/lib/content";
import { ROUTES } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Owned media — coming soon",
  description:
    "GTM Publications (five vertical B2B newsrooms), the Podcast Studio, and Simplified Management are in build. Honest status, no fabricated numbers. Get notified when they're live.",
};

const COMING = VENTURES.filter((v) => v.status !== "live");

// /proof/owned-media — honest coming-soon. Notify only. Zero decision weight.
// Always redirects to live proof + /start (fork law).
export default function OwnedMediaPage() {
  return (
    <>
      <Section className="pt-16 sm:pt-24">
        <Container className="flex flex-col gap-6">
          <Overline>Owned media</Overline>
          <Heading level={1} size="display-l" className="max-w-[24ch]">
            This isn&rsquo;t live yet — and we won&rsquo;t pretend it is.
          </Heading>
          <Deck>
            When it ships, it&rsquo;ll be proof we build and run owned channels —
            not software we sell. Until then, here&rsquo;s exactly where each
            piece stands.
          </Deck>
        </Container>
      </Section>

      <Section className="bg-paper-pure border-y border-rule">
        <Container className="flex flex-col gap-4">
          <ul className="grid gap-4">
            {COMING.map((v) => (
              <li
                key={v.name}
                className="flex flex-col gap-2 rounded-lg border border-rule bg-paper p-6 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-title font-semibold">{v.name}</span>
                  <span className="text-small text-ink-700">{v.summary}</span>
                </div>
                <StatusChip status={v.status} className="self-start" />
              </li>
            ))}
          </ul>
          <Caption>No readership or output numbers appear here until they&rsquo;re real.</Caption>
        </Container>
      </Section>

      <Section>
        <Container className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <Overline>Get notified</Overline>
            <Heading size="headline">Tell me when this is live.</Heading>
          </div>
          <NotifyForm />
          <ProofFork moreHref={ROUTES.PROOF_GAANDIVA} moreLabel="See what's actually live" />
        </Container>
      </Section>
    </>
  );
}
