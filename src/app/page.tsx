import Link from "next/link";
import {
  Container,
  Section,
  Overline,
  Heading,
  Deck,
  Exhibit,
} from "@/components/primitives";
import { Cta } from "@/components/cta";
import { Metric } from "@/components/metric";
import { Reveal, CountUp } from "@/components/motion";
import { Marquee } from "@/components/marquee";
import { ProductShell } from "@/components/product-shell";
import { PRIMARY_CTA, ROUTES } from "@/lib/routes";
import {
  CATEGORY_LINE,
  MOVEMENT,
  BRAND_WRAPPER,
  HOME_NUMBER,
  PILLARS,
} from "@/lib/content";

export default function HomePage() {
  return (
    <>
      {/* S1 — Category gate: mega hero */}
      <Section className="pt-14 sm:pt-20">
        <Container className="flex flex-col gap-7">
          <Reveal>
            <Overline>The owned-engine operating partner</Overline>
          </Reveal>
          <Reveal delay={0.05}>
            <Heading level={1} size="mega" className="max-w-[15ch]">
              Marketing fails at the build,{" "}
              <span className="text-accent">not the strategy.</span>
            </Heading>
          </Reveal>
          <Reveal delay={0.12}>
            <Deck className="text-deck">{CATEGORY_LINE}</Deck>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="flex flex-wrap items-center gap-4">
              <Cta href={PRIMARY_CTA.href}>{PRIMARY_CTA.label}</Cta>
              <Cta href={ROUTES.PROOF} variant="quiet">
                See the proof
              </Cta>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* S2 — Existence proof + the ONE number: DARK, dramatic */}
      <Section dark className="border-y border-white/10">
        <Container className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr]">
          <Reveal className="flex flex-col gap-6">
            <Overline className="text-accent-bright">Proof, not promises</Overline>
            <Heading size="display-xl" className="max-w-[14ch]">
              We eat our own cooking.
            </Heading>
            <Deck className="text-ink-on-dark-500">
              We don&rsquo;t just advise on the build — we ship our own. Gaandiva
              OS, our CRM, runs live today. That&rsquo;s why we can build yours.
            </Deck>
            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6">
              <Metric claim={HOME_NUMBER} size="metric" />
            </div>
            <Cta href={ROUTES.PROOF_GAANDIVA} variant="primary" className="self-start">
              See the Gaandiva proof
            </Cta>
          </Reveal>
          <Reveal delay={0.12}>
            <Exhibit dark label="Gaandiva OS — live">
              <ProductShell />
            </Exhibit>
          </Reveal>
        </Container>
      </Section>

      {/* Real-count band (honest counts, not performance stats) */}
      <Section className="bg-paper-pure border-b border-rule py-14 sm:py-16">
        <Container>
          <Reveal>
            <dl className="grid grid-cols-2 gap-8 sm:grid-cols-4">
              {[
                { n: 4, suffix: "", label: "owned ventures, built in-house" },
                { n: 5, suffix: "", label: "vertical B2B newsrooms (in build)" },
                { n: 4, suffix: "", label: "pillars: Plan → Build → Produce → Distribute" },
                { n: 1, suffix: "", label: "accountable team — no vendor seams" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col gap-2">
                  <dd className="text-metric font-mono font-medium tnum">
                    <CountUp to={s.n} suffix={s.suffix} />
                  </dd>
                  <dt className="text-small text-ink-700">{s.label}</dt>
                </div>
              ))}
            </dl>
          </Reveal>
        </Container>
      </Section>

      {/* S3 — Self-qualify router */}
      <Section>
        <Container className="flex flex-col gap-10">
          <Reveal className="flex flex-col gap-3">
            <Overline>Where to go next</Overline>
            <Heading size="headline">Pick the path that fits you.</Heading>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { label: "See the proof", desc: "The live demo, the numbers, the receipts.", href: ROUTES.PROOF, dominant: false },
              { label: "How we work", desc: "The operating model, the pillars, what you keep.", href: ROUTES.HOW_WE_WORK, dominant: false },
              { label: "Start a conversation", desc: "A scoped fit conversation — a diagnostic, not a pitch.", href: ROUTES.START, dominant: true },
            ].map((card, i) => (
              <Reveal key={card.href} delay={i * 0.06}>
                <Link
                  href={card.href}
                  className={
                    "group flex h-full flex-col gap-3 rounded-xl border p-7 transition-all duration-300 hover:-translate-y-1 " +
                    (card.dominant
                      ? "border-accent/40 bg-accent-weak hover:border-accent hover:[box-shadow:var(--shadow-lift)]"
                      : "border-rule bg-paper-pure hover:border-ink/30 hover:[box-shadow:var(--shadow-lift)]")
                  }
                >
                  <span className="text-title font-semibold">
                    {card.label}{" "}
                    <span aria-hidden className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
                      →
                    </span>
                  </span>
                  <span className="text-small text-ink-700">{card.desc}</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* S4 — Methodology strip (BUILD weighted) */}
      <Section className="bg-paper-pure border-y border-rule">
        <Container className="flex flex-col gap-8">
          <Reveal>
            <Overline>How we operate</Overline>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p, i) => (
              <Reveal key={p.key} delay={i * 0.06}>
                <div
                  className={
                    "flex h-full flex-col gap-3 rounded-xl border p-6 transition-colors " +
                    (p.emphasized
                      ? "border-ink bg-ink text-paper-on-dark"
                      : "border-rule bg-paper hover:border-ink/30")
                  }
                >
                  <span className={"text-display-l font-mono tnum " + (p.emphasized ? "text-accent-bright" : "text-ink-500")}>
                    0{i + 1}
                  </span>
                  <span className="text-title font-semibold">{p.name}</span>
                  <span className={"text-small " + (p.emphasized ? "text-paper-on-dark/80" : "text-ink-700")}>
                    {p.definition}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
          <Cta href={ROUTES.HOW_WE_WORK} variant="quiet" className="self-start">
            See the full operating model
          </Cta>
        </Container>
      </Section>

      {/* S5 — Brand close: kinetic marquee (warmth, LATE) */}
      <Section className="overflow-hidden">
        <div className="flex flex-col gap-10">
          <Container>
            <Reveal>
              <Heading size="display-l" className="font-serif italic max-w-[20ch]">
                {BRAND_WRAPPER}
              </Heading>
            </Reveal>
          </Container>
          <Marquee text={MOVEMENT} />
          <Container>
            <Reveal>
              <div className="flex flex-wrap items-center gap-4">
                <Cta href={PRIMARY_CTA.href}>{PRIMARY_CTA.label}</Cta>
                <Cta href={ROUTES.PROOF} variant="quiet">
                  Or see the proof first
                </Cta>
              </div>
            </Reveal>
          </Container>
        </div>
      </Section>
    </>
  );
}
