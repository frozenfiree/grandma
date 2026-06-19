import Link from "next/link";
import { Container } from "@/components/primitives";
import { Cta } from "@/components/cta";
import { PRIMARY_CTA, PRIMARY_NAV, ROUTES } from "@/lib/routes";

// Editorial masthead. Slim, confident, one dominant action. Nav is deliberately
// minimal (Proof, How we work) — the site routes through proof, not a menu.
export function SiteHeader() {
  return (
    <header className="border-b border-rule">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link
          href={ROUTES.HOME}
          className="font-sans text-title font-semibold tracking-tight"
        >
          Grandma&rsquo;s Hive
        </Link>
        <nav className="flex items-center gap-6">
          <ul className="hidden items-center gap-6 sm:flex">
            {PRIMARY_NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-small text-ink-700 hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Cta href={PRIMARY_CTA.href} variant="primary" className="px-4 py-2">
            {PRIMARY_CTA.label}
          </Cta>
        </nav>
      </Container>
    </header>
  );
}
