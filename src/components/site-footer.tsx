import Link from "next/link";
import { Container, Rule } from "@/components/primitives";
import { FOOTER_NAV, ROUTES } from "@/lib/routes";

const OFFICES = [
  { code: "PNQ", lines: ["803 Sky Vista", "Pune, MH 411014"] },
  { code: "ILG", lines: ["Tower 2", "Wilmington, DE 19801"] },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto">
      <Container>
        <Rule />
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-3">
            <Link href={ROUTES.HOME} className="text-title font-semibold">
              Grandma&rsquo;s Hive
            </Link>
            <p className="text-small text-ink-500 measure">
              The owned-engine operating partner. We build the products, media,
              and audience you keep — and we run our own.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-col gap-2">
              {FOOTER_NAV.map((item) => (
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
          </nav>

          {OFFICES.map((office) => (
            <div key={office.code} className="flex flex-col gap-1">
              <p className="text-overline font-mono uppercase text-ink-500">
                {office.code}
              </p>
              {office.lines.map((line) => (
                <p key={line} className="text-small text-ink-700">
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>
        <Rule />
        <div className="flex flex-wrap items-center justify-between gap-3 py-6">
          <p className="text-caption font-mono text-ink-500">
            hello@grandmashive.com
          </p>
          <p className="text-caption font-mono text-ink-500">
            © {new Date().getFullYear()} Grandma&rsquo;s Hive
          </p>
        </div>
      </Container>
    </footer>
  );
}
