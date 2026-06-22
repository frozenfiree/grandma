import { cn } from "@/lib/cn";

// Kinetic editorial marquee (CSS-only; pauses for reduced-motion via globals).
// Duplicated content for a seamless loop. Used for the movement line.
export function Marquee({
  text,
  className,
  dark = false,
}: {
  text: string;
  className?: string;
  dark?: boolean;
}) {
  const items = Array.from({ length: 4 });
  return (
    <div className={cn("w-full overflow-hidden", className)}>
      <span className="sr-only">{text}</span>
      <div
        aria-hidden
        className="flex w-max [animation:var(--animate-marquee)] motion-reduce:[animation:none]"
      >
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0" aria-hidden={dup === 1}>
            {items.map((_, i) => (
              <span
                key={i}
                className={cn(
                  "text-mega font-semibold tracking-tight whitespace-nowrap px-8",
                  dark ? "text-paper-on-dark" : "text-ink",
                )}
              >
                {text}
                <span className="text-accent px-2">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
