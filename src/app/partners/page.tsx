import type { Metadata } from "next";
import { Container, Section, Overline, Heading, Deck } from "@/components/primitives";
import { StatusChip } from "@/components/status-chip";
import { Cta } from "@/components/cta";
import { ROUTES } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Partners",
  description: "Collaborate with or refer to Grandma's Hive. Partnership details coming soon.",
};

export default function PartnersPage() {
  return (
    <Section className="pt-16 sm:pt-24">
      <Container className="flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <Overline>Partners</Overline>
          <StatusChip status="planned" />
        </div>
        <Heading level={1} size="display-l" className="max-w-[22ch]">
          Build alongside us.
        </Heading>
        <Deck>
          We work with a small set of collaborators and referrers whose clients
          keep what gets built. The partner program details are coming soon — in
          the meantime, start a conversation and tell us how we&rsquo;d fit.
        </Deck>
        <Cta href={ROUTES.START} variant="secondary" className="self-start">
          Start a conversation
        </Cta>
      </Container>
    </Section>
  );
}
