import { Container, Section, Overline, Heading, Deck } from "@/components/primitives";
import { Cta } from "@/components/cta";
import { ROUTES } from "@/lib/routes";

export default function NotFound() {
  return (
    <Section className="pt-20 sm:pt-28">
      <Container className="flex flex-col gap-6">
        <Overline>404</Overline>
        <Heading level={1} size="display-l">
          That page isn&rsquo;t here.
        </Heading>
        <Deck>It may have moved. Here&rsquo;s the way back.</Deck>
        <div className="flex flex-wrap gap-4">
          <Cta href={ROUTES.HOME} variant="secondary">
            Home
          </Cta>
          <Cta href={ROUTES.PROOF} variant="quiet">
            See the proof
          </Cta>
        </div>
      </Container>
    </Section>
  );
}
