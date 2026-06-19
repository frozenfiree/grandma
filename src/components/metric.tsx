import { cn } from "@/lib/cn";
import { StatusChip } from "@/components/status-chip";
import type { Claim } from "@/lib/status";

// Claim-paired-with-substantiation. A number never appears without its source
// (when live) and its status. Numbers are mono + tabular. When a claim is not
// yet live, the value slot shows an honest placeholder instead of a fabricated
// figure.
export function Metric({
  claim,
  size = "metric",
  className,
}: {
  claim: Claim;
  size?: "metric-xl" | "metric";
  className?: string;
}) {
  const isLive = claim.status === "live" && claim.value;
  const sizeClass = size === "metric-xl" ? "text-metric-xl" : "text-metric";
  return (
    <figure className={cn("flex flex-col gap-3", className)}>
      <StatusChip status={claim.status} className="self-start" />
      {isLive ? (
        <p className={cn("tnum font-mono font-medium text-ink", sizeClass)}>
          {claim.value}
        </p>
      ) : (
        <p className={cn("font-mono text-ink-500", sizeClass)} aria-label="figure pending verification">
          —
        </p>
      )}
      <figcaption className="text-small text-ink-700 measure">
        {claim.statement}
      </figcaption>
      {claim.source ? (
        <p className="text-caption font-mono text-ink-500">
          Source: {claim.source}
        </p>
      ) : (
        <p className="text-caption font-mono text-ink-500">
          {claim.status === "live"
            ? "Source pending — figure withheld until verified."
            : "Figure published when this goes live. No estimates."}
        </p>
      )}
    </figure>
  );
}
