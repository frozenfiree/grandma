import { ROUTES } from "@/lib/routes";
import type { Claim, Status } from "@/lib/status";

// Centralized content (a stand-in for the Sanity content model). Every number is
// a Claim with a status + source; nothing is fabricated. Honest placeholders
// carry "in-progress"/"planned" until the proof bundle (M1–M5) lands.

export const LEAD_THESIS = "Marketing fails at the build, not the strategy.";
export const CATEGORY_LINE =
  "Grandma's Hive is the owned-engine operating partner: we embed as your marketing function and build the products, media, and audience you keep.";
export const MOVEMENT = "Don't follow trends. Feed them.";
export const BRAND_WRAPPER = "You don't have to carry it alone.";

// The single homepage existence-proof number. Held until verified (M1).
export const HOME_NUMBER: Claim = {
  statement:
    "Gaandiva OS — our own CRM — is live and operating today. Its headline result is being verified before we publish it.",
  status: "in-progress",
};

export type Venture = {
  name: string;
  category: string;
  status: Status;
  summary: string;
  href?: string;
};

// The four owned ventures = proof we build/run engines, NOT software for sale.
export const VENTURES: Venture[] = [
  {
    name: "Gaandiva OS",
    category: "CRM platform",
    status: "live",
    summary:
      "Our own CRM — managing customer relationships, sales pipelines, and workflow automation. The engine we run on ourselves.",
    href: ROUTES.PROOF_GAANDIVA,
  },
  {
    name: "GTM Publications",
    category: "Owned media — 5 vertical B2B newsrooms",
    status: "planned",
    summary:
      "MarTech, FinTech, HRTech, CyberTech, SalesTech — owned channels in the verticals we serve. In build.",
    href: ROUTES.PROOF_OWNED_MEDIA,
  },
  {
    name: "Podcast Studio",
    category: "Owned media",
    status: "planned",
    summary: "A room for the conversations the market actually needs. Warming up.",
    href: ROUTES.PROOF_OWNED_MEDIA,
  },
  {
    name: "Simplified Management",
    category: "Operations platform",
    status: "in-progress",
    summary:
      "A platform for orchestrating operations and business systems into one place. In build.",
    href: ROUTES.PROOF_OWNED_MEDIA,
  },
];

export type Pillar = {
  key: string;
  name: string;
  definition: string;
  produces: string;
  emphasized?: boolean;
};

// PLAN → BUILD → PRODUCE → DISTRIBUTE. BUILD is the load-bearing pillar.
export const PILLARS: Pillar[] = [
  {
    key: "plan",
    name: "Plan",
    definition: "Strategy, positioning, audience, and sequencing.",
    produces: "A written brief, defined scope, and a clear path to execution.",
  },
  {
    key: "build",
    name: "Build",
    definition: "Brand, identity, web, landing pages, and product/dev.",
    produces: "Shipped, production-grade assets — the part most marketing skips.",
    emphasized: true,
  },
  {
    key: "produce",
    name: "Produce",
    definition: "Podcast, video, motion, and content systems.",
    produces: "A steady stream of content, not one-off assets.",
  },
  {
    key: "distribute",
    name: "Distribute",
    definition: "Paid media, campaigns, audience targeting, and reporting.",
    produces: "Reach tied to measurable business outcomes.",
  },
];
