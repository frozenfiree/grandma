import { cn } from "@/lib/cn";

/** Page width container with consistent gutters. */
export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[80rem] px-6 sm:px-8", className)}>
      {children}
    </div>
  );
}

/** Kicker / eyebrow — mono, uppercase, tracked. The publication's section label. */
export function Overline({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-overline font-mono text-ink-500 uppercase",
        className,
      )}
    >
      {children}
    </p>
  );
}

/** Editorial section heading. */
export function Heading({
  children,
  level = 2,
  size = "display-l",
  className,
}: {
  children: React.ReactNode;
  level?: 1 | 2 | 3;
  size?: "display-xl" | "display-l" | "headline" | "title";
  className?: string;
}) {
  const Tag = `h${level}` as const;
  const sizeClass = {
    "display-xl": "text-display-xl",
    "display-l": "text-display-l",
    headline: "text-headline",
    title: "text-title",
  }[size];
  return (
    <Tag className={cn("font-sans font-semibold text-balance", sizeClass, className)}>
      {children}
    </Tag>
  );
}

/** Standfirst / intro paragraph. */
export function Deck({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("text-deck text-ink-700 measure text-pretty", className)}>
      {children}
    </p>
  );
}

/** Hairline rule — a core editorial device. */
export function Rule({ className }: { className?: string }) {
  return <hr className={cn("border-0 border-t border-rule", className)} />;
}

/** Caption — mono, the substantiation/provenance voice. */
export function Caption({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("text-caption font-mono text-ink-500", className)}>
      {children}
    </p>
  );
}

/** Standard section wrapper with vertical rhythm. */
export function Section({
  children,
  className,
  dark = false,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 sm:py-28",
        dark && "bg-surface-dark text-paper-on-dark",
        className,
      )}
    >
      {children}
    </section>
  );
}
