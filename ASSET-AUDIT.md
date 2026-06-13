# Asset Audit — Grandma's Hive (relevance & coherence pass)

> **Lens (per Pratik):** every visual must support its section's story. Optimize for
> **relevance + visual coherence**, not "lighter/darker." Visual language: editorial,
> modern, premium, design-led, strong whitespace, strong contrast, purposeful motion.
> Both light and dark sections are fine **if they're on-topic**.
>
> **Avoid:** drone/ski/lifestyle footage, generic agency stock, leftover template
> content (Fantom/Wing/Swisher merch, etc.).
>
> Build audited: `grandma-one.vercel.app` (`main` @ `7bf0ba2`). NOT the old
> `grandmashive.com`, which is a stale build.

Legend: **R** = Replace · **K** = Keep · **K~** = Keep but refine.

---

## HOMEPAGE  `/`

| Section | Current asset | K/R | Reason | Replacement direction |
|---|---|---|---|---|
| Hero | `image1/2/3/6/8/10.png` (hover trail) + **7× Unsplash** | **R** | Random stock/lifestyle scatter; no story | Editorial brand graphics — type, grid, motion-graphic fragments of GH's work; abstract but *about the studio* |
| Hero | `grandmahivespng.png` (logo) | **K** | Brand asset | — |
| Hero | "MAKE LOVE" marquee (text) | **R** | Placeholder-ish copy | Brand line / positioning statement |
| Selected Work → Gaandiva OS | `signature-abstract-loop.mp4` | **K~** | Abstract data-ish; acceptable but generic | CRM/pipeline/data-flow motion graphic |
| Selected Work → Simplified Management | `Home1.mp4` | **R** | Generic clip, unrelated to operations | Operations/orchestration/process-systems graphic |
| Selected Work → GTM Publications | `signature-editorial-loop.mp4` (smoke) | **R** | Smoke ≠ editorial/publishing | Editorial/publishing/media-distribution motion graphic |
| Selected Work → Podcast Studio | `podcast.mp4` | **K~** | If real studio footage, keep; confirm | Audio/recording/production motif if not real |
| Process / Services sections | (text only — STRATEGY/PLAN/BUILD…) | **K** | No media | — |
| Clients | `craft/wonder/courage/cursoity/attention.mp4` (5 hover) + the words | **R** | Filler value-words + generic clips; no real proof | Real client/partner marks, or remove; if kept, on-brand motion tied to each value |
| Interactive Banner | **1× Framer "Team image"** | **R** | External stock placeholder | On-brand still/graphic relevant to the banner item |
| Interactive Banner | `signature-abstract/tech-loop.mp4`, `podcast.mp4`, logo | **K~** | Generic but functional | Tie each banner slot to its labelled topic |

## ABOUT  `/a7x9k2m`

| Section | Current asset | K/R | Reason | Replacement direction |
|---|---|---|---|---|
| Inside the Hive | `3dMortionGrandma.mp4`, `Home1.mp4`, `UIUX2.mp4` | **R** | Generic clips; don't tell the studio story | Editorial graphics about the team/process/operating model |

## WORK  `/w8p3n6q`  *(same 3 cards as homepage Selected Work)*

| Section | Current asset | K/R | Reason | Replacement direction |
|---|---|---|---|---|
| Gaandiva OS card | `signature-abstract-loop.mp4` | **K~** | As above | CRM/data motif |
| Simplified Management card | `Home1.mp4` | **R** | Off-topic generic | Operations/process motif |
| GTM Publications card | `signature-editorial-loop.mp4` | **R** | Not editorial | Publishing/media motif |
| Podcast Studio card | `podcast.mp4` | **K~** | Confirm real | Audio/studio motif |

## WORK CASE STUDIES  `/w8p3n6q/{x5k2m9r,q7j4v1n,y3b8f6p}`

| Page | Current state | K/R | Reason | Replacement direction |
|---|---|---|---|---|
| WorkFantom / WorkWing / WorkSwisher | **All identical "(THE PODCAST) — studio is warming up — COMING SOON"** placeholder (dark, text-only) | **R** | 3 different cards all land on the same empty page; no real case study | Build a real case study per project (Gaandiva OS, GTM Publications, Podcast Studio) **or** distinct, correctly-labelled "coming soon" per project |

## INSIGHTS  `/i3f7j4r`

| Section | Current asset | K/R | Reason | Replacement direction |
|---|---|---|---|---|
| Immersive Web / Future of AI / Digital Innovation | `insight-editorial-1.mp4`, `insight-editorial-2.mp4`, `signature-editorial-loop.mp4` | **K~** | Premium but generic particles/smoke | Editorial/publishing/data-viz/audience motion graphics |
| Insight scroll | **1× Unsplash** | **R** | Stock | On-brand editorial graphic |
| (note) | mobile layout: text/video crowding | — | UX defect (separate from assets) | Spacing/hierarchy fix |

## SERVICES INDEX  `/s4t8v1z`

| Section | Current asset | K/R | Reason | Replacement direction |
|---|---|---|---|---|
| "What We Do" cards (×10) | **10× Unsplash** stock photos (3D Motion Art, Digital Strategy, UI/UX, WebGL, Interactive, Brand, Mobile, E-commerce, AI/ML, Cloud) | **R** | Generic stock; not GH work | One on-brand graphic per service, each illustrating that service abstractly (editorial graphic + overlay) |
| card icon tiles | (emoji removed → colored tiles) | **K** | Already cleaned | — |

## SERVICE DETAIL PAGES  `/s4t8v1z/...`

| Service (theme) | Current assets | K/R | Reason | Replacement direction |
|---|---|---|---|---|
| **Service 1 — Gaandiva OS** (CRM/data/pipelines) | `planevideo.mp4` **(drone)** | **R** | Off-topic aerial footage on flagship product page | CRM/workflow/pipeline/data-flow graphic |
| | `service1-tech-flow / network / tech-motion / data-flow / abstract-a / abstract-b.mp4` | **K~** | Network/data motifs are on-topic; `abstract-b` (purple particles) weakest | Keep the data/network ones; align `abstract-b` to pipelines |
| | `serveice1div.png`, Name: `ThreeDM.mp4`, `service3.png` | **R** | Generic/cross-used stock | Product/data graphics |
| **Service 2 — Design/Tech** | **8× Framer** videos + `service2.mp4` | **R** | Raw external stock | Design-system/craft motion graphics |
| **Service 3 — Content/Media** | **5× Framer** videos + `UIUX.mp4` + `service3.png/.mp4` | **R** | Raw external stock (risk of generic studio footage) | Editorial/content-production graphics (abstract, not literal studio) |
| **Service 4 — WebGL/3D** | `service4-webgl-1..5.mp4` + `service4-name-loop.mp4` | **K~** | Abstract 3D/particles genuinely fit WebGL | Keep; `name-loop` (bright neon) optional refine |
| **Service 5 — Strategy/Marketing** | **4× Framer** videos + Name **1× Framer** | **R** | Raw external stock | Strategy/funnel/growth motion graphics |
| **Service 6 — Brand Identity** | **8× Framer** (4 video + 4 stills) + Name **1× Framer** | **R** | Most brand-sensitive page on raw stock | Brand-system graphics (logo/type/grid motion) |
| **Service 7 — Mobile/Tech** | signature loops only | **K~** | Generic reused wallpaper | Mobile/app motif if section-specificity wanted |
| **Service 8 — Strategy/Marketing** | `service8-strategy-1.mp4` + **2× Coverr** + signatures | **R** (Coverr) / K~ | Coverr = external stock | Replace Coverr with strategy graphic |
| **Service 9 — Marketing/Growth** | signatures + `service9.mp4` (Name) | **K~** | Generic | Growth/analytics motif |
| **Service 10 — Cloud/Infra** | `service10-infra-1..3.mp4` + signatures | **K** | Cables/processor/datacenter directly on-topic | Keep |

## SHARED / GLOBAL

| Item | Current | K/R | Reason | Direction |
|---|---|---|---|---|
| "Signature" loops (abstract/tech/brand/editorial) reused across service 7/8/9/10, banner, work | local Pexels loops | **K~** | They're generic *wallpaper* reused everywhere → weak section-relevance | Longer-term: section-specific variants so each page tells its own story |
| Lay Grotesk fonts (×4) | Framer-hotlinked | **K~** | Not "dummy" but external dependency / licensing | License + self-host, or substitute |
| Footer office addresses | text | verify | Confirm real offices | — |

---

## Priority by impact

**Tier 1 — do first (most visible / most off-brand):**
1. **Services index — 10 stock card images** (the whole grid; highest-traffic, all generic stock).
2. **Gaandiva OS `planevideo.mp4` (drone)** — off-topic on the flagship product page.
3. **Homepage/Work cards** — Simplified Management (`Home1`) + GTM Publications (smoke) → on-topic graphics.
4. **Work case-study pages** — 3 cards → 1 identical "coming soon"; build real (or distinct) content.
5. **Homepage Hero + Interactive Banner stock** (Unsplash trail + Framer "Team image") — first impression.

**Tier 2 — next (service detail stock):**
6. **Service 6 (Brand Identity)** — 8 raw Framer assets on the most brand-sensitive page.
7. **Service 2 / 3 / 5** — 8 / 5 / 4 raw Framer videos.
8. **Clients section** — 5 generic hover clips + filler words.
9. **About** — 3 generic clips.
10. **Service 8 Coverr** (2) + service Name clips (`ThreeDM`, `service2/3/9.mp4`, `plan1`).

**Tier 3 — refine (already on-topic or structural):**
11. Insights editorial loops → tighten to editorial/audience motifs.
12. Reused "signature" loops → section-specific variants (structural).
13. Service 1 `abstract-b`, Service 4 `name-loop` brightness → minor refines.
14. Lay Grotesk fonts (licensing/self-host).

**Already on-topic (keep):** Service 4 (WebGL abstracts), Service 10 (infra), Service 1 data/network loops, logo.
