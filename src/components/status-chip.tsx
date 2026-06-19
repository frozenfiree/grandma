import { cn } from "@/lib/cn";
import { STATUS_META, type Status } from "@/lib/status";

// The most-repeated atom on the site. Distinguished by hue + dot treatment +
// label so it reads in grayscale and for colorblind users.
const STYLES: Record<Status, { wrap: string; dot: string }> = {
  live: {
    wrap: "text-live border-live/30 bg-live-weak",
    // filled dot with a soft live "pulse" ring (motion disabled by reduced-motion)
    dot: "bg-live after:absolute after:inset-0 after:rounded-full after:bg-live/40 after:animate-ping",
  },
  "in-progress": {
    // ring/half treatment — progressing, not operating
    wrap: "text-progress border-progress/30 bg-progress-weak",
    dot: "bg-progress/30 ring-2 ring-inset ring-progress",
  },
  planned: {
    // hollow/dashed — the absence of motion is the signal
    wrap: "text-planned border-planned/30 bg-planned-weak",
    dot: "bg-transparent ring-1 ring-dashed ring-planned border border-dashed border-planned",
  },
};

export function StatusChip({
  status,
  className,
}: {
  status: Status;
  className?: string;
}) {
  const s = STYLES[status];
  return (
    <span
      className={cn(
        "text-overline inline-flex items-center gap-2 rounded-full border px-2.5 py-1 font-mono uppercase",
        s.wrap,
        className,
      )}
    >
      <span className="relative inline-block h-2 w-2 rounded-full">
        <span className={cn("absolute inset-0 rounded-full", s.dot)} />
      </span>
      {STATUS_META[status].label}
    </span>
  );
}
