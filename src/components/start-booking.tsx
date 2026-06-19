"use client";

import { useState } from "react";
import { ROUTES } from "@/lib/routes";

// Booking + qualification shell for /start. Qualification happens AT booking,
// framed as mutual fit (never a gate before the page). Partner/Recruit are
// routed onward WITHOUT being denied a booking. Real scheduler (Cal.com) +
// Route Handler persistence land in the conversion phase.
const ROLES = [
  "Founder",
  "Marketing leader",
  "Operator",
  "Partner",
  "Recruit",
] as const;
type Role = (typeof ROLES)[number];

export function StartBooking() {
  const [role, setRole] = useState<Role | "">("");
  const [submitted, setSubmitted] = useState(false);

  const reroute =
    role === "Partner"
      ? { href: ROUTES.PARTNERS, label: "There's a faster path for partners →" }
      : role === "Recruit"
        ? { href: ROUTES.CAREERS, label: "Looking to join? See careers →" }
        : null;

  if (submitted) {
    return (
      <div className="flex flex-col gap-3 rounded-lg border border-rule bg-paper-pure p-8" role="status">
        <p className="text-title font-semibold">You&rsquo;re booked in spirit.</p>
        <p className="text-small text-ink-700">
          The live scheduler is being wired up. For now we&rsquo;ve noted your fit
          signals — we&rsquo;ll confirm a time and what the conversation will (and
          won&rsquo;t) cover. You don&rsquo;t have to carry it alone.
        </p>
      </div>
    );
  }

  return (
    <form
      className="flex flex-col gap-5 rounded-lg border border-rule bg-paper-pure p-8"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <fieldset className="flex flex-col gap-3">
        <legend className="text-small font-medium">
          First — who are you? (so we scope the right conversation)
        </legend>
        <div className="flex flex-wrap gap-2">
          {ROLES.map((r) => (
            <button
              key={r}
              type="button"
              aria-pressed={role === r}
              onClick={() => setRole(r)}
              className={
                "text-small rounded-full border px-4 py-2 transition-colors " +
                (role === r
                  ? "border-accent bg-accent-weak text-ink"
                  : "border-ink/20 hover:border-ink/50")
              }
            >
              {r}
            </button>
          ))}
        </div>
        {reroute && (
          <a href={reroute.href} className="text-small text-accent-ink underline underline-offset-4">
            {reroute.label}
          </a>
        )}
      </fieldset>

      <label className="flex flex-col gap-1">
        <span className="text-small font-medium">Where does marketing stall for you?</span>
        <textarea
          rows={3}
          className="text-small rounded-lg border border-ink/20 bg-paper px-4 py-3 outline-none focus:border-ink/50"
          placeholder="The build, the production cadence, distribution…"
        />
      </label>

      <button
        type="submit"
        className="text-small inline-flex items-center justify-center gap-2 self-start rounded-full border border-accent bg-accent px-5 py-3 font-medium text-paper-pure transition-colors hover:border-accent-ink hover:bg-accent-ink"
      >
        Book the scoped fit conversation <span aria-hidden>→</span>
      </button>
      <p className="text-caption font-mono text-ink-500">
        Diagnostic, not a pitch. Your details are used only to scope fit, held in
        confidence, never used to sell.
      </p>
    </form>
  );
}
