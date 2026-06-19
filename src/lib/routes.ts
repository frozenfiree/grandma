// Clean, indexable editorial routes (the obfuscated template routes are retired).
export const ROUTES = {
  HOME: "/",
  PROOF: "/proof",
  PROOF_GAANDIVA: "/proof/gaandiva",
  PROOF_OWNED_MEDIA: "/proof/owned-media",
  HOW_WE_WORK: "/how-we-work",
  START: "/start",
  PARTNERS: "/partners",
  CAREERS: "/careers",
} as const;

// The single, locked conversion action. The only "primary" CTA on the site.
// Phrased as a diagnostic, never a pitch. Never-CTAs (buy/try/quote/contact us/
// learn more) are forbidden by content rule.
export const PRIMARY_CTA = {
  label: "Book a scoped fit conversation",
  href: ROUTES.START,
} as const;

export const PRIMARY_NAV = [
  { label: "Proof", href: ROUTES.PROOF },
  { label: "How we work", href: ROUTES.HOW_WE_WORK },
] as const;

export const FOOTER_NAV = [
  { label: "Proof", href: ROUTES.PROOF },
  { label: "How we work", href: ROUTES.HOW_WE_WORK },
  { label: "Start", href: ROUTES.START },
  { label: "Partners", href: ROUTES.PARTNERS },
  { label: "Careers", href: ROUTES.CAREERS },
] as const;
