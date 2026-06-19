// The Status Taxonomy — governance for honest "live vs in-build" everywhere.
// Distinguished by hue AND treatment (label + dot shape), never color alone,
// so states survive grayscale and colorblindness.
export type Status = "live" | "in-progress" | "planned";

export const STATUS_META: Record<
  Status,
  { label: string; description: string }
> = {
  live: { label: "Live", description: "Operating now — evidence attached." },
  "in-progress": {
    label: "In build",
    description: "Real, not yet provable to the public standard.",
  },
  planned: {
    label: "Coming soon",
    description: "Committed, not yet launched.",
  },
};

// A claim never renders "Live" without a source. This mirrors the CMS claim
// ledger rule (every number maps to a source artifact).
export type Claim = {
  /** The value as shown, e.g. "62%" or "3.1x". Optional while in-build. */
  value?: string;
  /** What the value measures. */
  statement: string;
  /** Provenance. Required for `live`. */
  source?: string;
  status: Status;
};
