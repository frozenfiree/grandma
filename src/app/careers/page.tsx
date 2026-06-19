import type { Metadata } from "next";
import { Container, Section, Overline, Heading, Deck } from "@/components/primitives";
import { StatusChip } from "@/components/status-chip";
import { Cta } from "@/components/cta";
import { ROUTES } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Careers",
  description: "Build and operate real things at Grandma's Hive. Open roles coming soon.",
};

export default function CareersPage() {
  return (
    <Section className="pt-16 sm:pt-24">
      <Container className="flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <Overline>Careers</Overline>
          <StatusChip status="planned" />
        </div>
        <Heading level={1} size="display-l" className="max-w-[22ch]">
          Builders who ship.
        </Heading>
        <Deck>
          We&rsquo;re a studio that builds and operates its own products and media
          — not a place that talks about it. Open roles will be posted here. If
          you build, we want to hear from you.
        </Deck>
        <Cta href={ROUTES.START} variant="secondary" className="self-start">
          Introduce yourself
        </Cta>
      </Container>
    </Section>
  );
}
