"use client";

import { useState } from "react";

// Notify/subscribe capture shell. The only field-based action on the owned-media
// page. Backend wiring (Route Handler → Resend + Mongo `subscribers`) lands in
// the conversion phase; for now it captures intent and confirms honestly.
export function NotifyForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <p className="text-small text-ink-700" role="status">
        Thanks — we&rsquo;ll let you know the moment it&rsquo;s live.
      </p>
    );
  }

  return (
    <form
      className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
      onSubmit={(e) => {
        e.preventDefault();
        if (email.trim()) setDone(true);
      }}
    >
      <label className="sr-only" htmlFor="notify-email">
        Email address
      </label>
      <input
        id="notify-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@company.com"
        className="text-small flex-1 rounded-full border border-ink/20 bg-paper-pure px-4 py-3 outline-none focus:border-ink/50"
      />
      <button
        type="submit"
        className="text-small rounded-full border border-ink/20 bg-transparent px-5 py-3 font-medium transition-colors hover:border-ink/50 hover:bg-ink/[0.03]"
      >
        Notify me
      </button>
    </form>
  );
}
