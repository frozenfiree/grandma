import Link from "next/link";
import { cn } from "@/lib/cn";

// CTA system. There is ONE dominant (primary) action per view by layout law.
// "secondary" = lower-commitment routes (see proof, etc.). "quiet" = tertiary
// text links. Never-CTA wording (buy/try/quote/contact us/learn more) is a
// content rule enforced by reviewers — this component does not police copy.
type Variant = "primary" | "secondary" | "quiet";

const VARIANTS: Record<Variant, string> = {
  primary:
    "bg-accent text-paper-pure hover:bg-accent-ink border border-accent hover:border-accent-ink",
  secondary:
    "bg-transparent text-ink border border-ink/20 hover:border-ink/50 hover:bg-ink/[0.03]",
  quiet:
    "bg-transparent text-ink-700 underline decoration-rule underline-offset-4 hover:decoration-ink px-0 py-0",
};

export function Cta({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full text-small font-medium transition-colors",
        variant !== "quiet" && "px-5 py-3",
        VARIANTS[variant],
        className,
      )}
    >
      {children}
      {variant === "primary" && <span aria-hidden>→</span>}
    </Link>
  );
}
