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
  size?: "mega" | "display-xl" | "display-l" | "headline" | "title";
  className?: string;
}) {
  const Tag = `h${level}` as const;
  const sizeClass = {
    mega: "text-mega",
    "display-xl": "text-display-xl",
    "display-l": "text-display-l",
    headline: "text-headline",
    title: "text-title",
  }[size];
  return (
    <Tag
      className={cn(
        "font-sans font-semibold tracking-tight text-balance",
        sizeClass,
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/** Proof exhibit — a framed, elevated surface for artifacts (demo, screenshots). */
export function Exhibit({
  children,
  label,
  className,
  dark = false,
}: {
  children: React.ReactNode;
  label?: string;
  className?: string;
  dark?: boolean;
}) {
  return (
    <figure
      className={cn(
        "overflow-hidden rounded-xl border [box-shadow:var(--shadow-exhibit)]",
        dark
          ? "border-white/10 bg-surface-dark-2"
          : "border-rule bg-paper-pure",
        className,
      )}
    >
      {label && (
        <figcaption
          className={cn(
            "text-overline flex items-center gap-2 border-b px-4 py-2.5 font-mono uppercase",
            dark
              ? "border-white/10 text-ink-on-dark-500"
              : "border-rule text-ink-500",
          )}
        >
          <span className="inline-flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span className="h-2 w-2 rounded-full bg-rule" />
            <span className="h-2 w-2 rounded-full bg-rule" />
          </span>
          {label}
        </figcaption>
      )}
      {children}
    </figure>
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
