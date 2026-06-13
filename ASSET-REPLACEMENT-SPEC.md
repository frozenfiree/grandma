# Asset Replacement — Execution Spec + Generation Prompt

> Companion to `ASSET-AUDIT.md`. This is the **per-slot work order** (what to make,
> where it plugs in) plus a **ready-to-run generation prompt** for producing the
> on-brand visuals. Lens: every asset must support its section's story —
> editorial, modern, premium, design-led, strong whitespace, strong contrast,
> purposeful motion. Relevance > light/dark.

---

## 0. Already actioned in code (this pass)
| Slot | Was | Now |
|---|---|---|
| `service1File/Info.jsx` hero video (line ~330) | `planevideo.mp4` (drone) | `s1df` = `service1-data-flow.mp4` (on-topic; drone removed) |
| `WorkWing.jsx` (GTM Publications case study) | "(THE PODCAST) — studio warming up" | "(GTM PUBLICATIONS) — newsrooms taking shape" (correct project + real newsroom copy) |

Everything below needs **new visuals** — produce with the prompt in §3, drop into
`src/assets/videos/` (motion) or `src/assets/img/` (stills) using the **Local filename**,
then repoint the import. Output specs: **1920×1080** (or the box ratio noted),
H.264 `.mp4` (motion) / `.webp`/`.png` (still), seamless loop, muted, `≤4 MB`.

---

## 1. Per-slot work order (priority order)

### TIER 1
| # | Page / Component | Section | Current asset | Local filename to create | Required visual (story) |
|---|---|---|---|---|---|
| 1 | `ServicesPage.jsx` (`/s4t8v1z`) services array, `image:` ×10 | "What We Do" cards | 10× Unsplash photos | `svc-3dmotion.webp`, `svc-strategy.webp`, `svc-uiux.webp`, `svc-webgl.webp`, `svc-interactive.webp`, `svc-brand.webp`, `svc-mobile.webp`, `svc-ecommerce.webp`, `svc-aiml.webp`, `svc-cloud.webp` | One editorial graphic per service, each abstractly illustrating that discipline (e.g. UI/UX → wireframe/grid; WebGL → 3D mesh; Cloud → node/infra) |
| 2 | `WorkSection.jsx` + `WorkPage.jsx` | Simplified Management card | `Home1.mp4` | `work-simplified.mp4` | Operations / orchestration / process-systems motion |
| 3 | `WorkSection.jsx` + `WorkPage.jsx` | GTM Publications card | `signature-editorial-loop.mp4` | `work-gtm-publications.mp4` | Editorial / publishing / media-distribution / audiences motion |
| 4 | `WorkSection.jsx` + `WorkPage.jsx` | Gaandiva OS card | `signature-abstract-loop.mp4` (K~) | `work-gaandiva.mp4` (optional upgrade) | CRM / pipeline / data-flow motion |
| 5 | `Hero.jsx` | Homepage hero trail | `image1/2/3/6/8/10.png` + 7× Unsplash | `hero-1.webp` … | Editorial brand fragments (type, grid, work crops) — about the studio, not lifestyle |
| 6 | `InteractiveBanner.jsx` | banner "Team image" | 1× Framer image | `banner-still.webp` | On-brand still matching that banner slot's label |

### TIER 2
| # | Page / Component | Section | Current asset | Local filename | Required visual |
|---|---|---|---|---|---|
| 7 | `service6File/Info.jsx` + `Name.jsx` | Brand Identity | 8× Framer (4 video + 4 still) | `svc6-brand-1..4.mp4`, `svc6-still-1..4.webp` | Brand-system motion: logo/type/grid/color in motion |
| 8 | `service2File/Info.jsx` | Design/Tech | 8× Framer video | `svc2-design-1..8.mp4` | Design-system / craft / interface motion |
| 9 | `service3File/Info.jsx` | Content/Media | 5× Framer video | `svc3-content-1..5.mp4` | Editorial / content-production motion (abstract, not literal studio) |
| 10 | `service5File/Info.jsx` + `Name.jsx` | Strategy/Marketing | 5× Framer | `svc5-strategy-1..5.mp4` | Strategy / funnel / growth motion |
| 11 | `ClientsSection.jsx` | Clients/values | `craft/wonder/courage/cursoity/attention.mp4` | (real client marks) | Real client/partner logos, or remove section |
| 12 | `AboutSection.jsx` | Inside the Hive | `3dMortionGrandma/Home1/UIUX2.mp4` | `about-1..3.mp4` | Team / process / operating-model editorial motion |
| 13 | `service8File/Info.jsx` | Strategy | 2× Coverr | `svc8-strategy-1..2.mp4` | Strategy / analytics motion |

### TIER 3 (refine / structural)
| # | Target | Note |
|---|---|---|
| 14 | `InsightPage.jsx` loops | tighten to editorial / audience / data-viz |
| 15 | Reused signature loops (svc 7/8/9/10, banner) | produce **section-specific** variants so each page tells its own story |
| 16 | Lay Grotesk fonts (`global.css`) | license + self-host, or substitute |
| 17 | Footer office addresses | verify real |

---

## 2. House style (apply to every asset)
- **Aesthetic:** editorial, modern, premium, design-led. Inspired by Strange Pixels — confident typography, generous whitespace, strong contrast, restrained palette + the brand accent **`#dbff00`** (lime).
- **Motion:** purposeful and slow — subtle loops, no frenetic stock energy. 8–15s seamless loop.
- **Overlay:** consistent treatment so sections feel unified — e.g. a soft gradient/scrim or accent-tint overlay + room for the section text. Keep the focal motion behind a clear text zone.
- **Relevance rule:** the subject must be *about the section's topic* (see story column). No drone, ski, lifestyle, generic agency stock, or template content.
- **Coherence:** consistent grain, contrast, and accent across all assets so the site reads as one system.

---

## 3. Generation prompt (paste into your image/video tool, or brief the designer)

> **Base prompt — fill the two `<...>` slots per asset:**
>
> "Abstract, premium **motion graphic** (seamless loop, ~10s, 1920×1080) for a
> modern design-and-technology studio's website. Visual language: **editorial,
> design-led, lots of whitespace, strong contrast, restrained palette with a single
> lime-yellow accent (#dbff00)**, slow purposeful motion. Subject must clearly
> evoke **<SECTION THEME>** — e.g. <CONCRETE MOTIFS>. Composition leaves a clean
> negative-space zone for overlaid text. No people, no logos, no literal stock
> footage, no drone/lifestyle clips. Cohesive grain and contrast so it matches a
> set. Style ref: Strange Pixels — confident, minimal, premium."
>
> **Per-asset fills:**
> - **Gaandiva OS** → THEME: CRM systems & data pipelines · MOTIFS: flowing nodes, records merging into a unified dashboard grid, pipeline lines.
> - **GTM Publications** → THEME: editorial publishing & distribution · MOTIFS: column grids, headlines/type setting, signals fanning out to audiences across verticals.
> - **Simplified Management** → THEME: operations & orchestration · MOTIFS: interlocking modules, process flows, tasks routing through a clean system.
> - **Podcast Studio** → THEME: audio production · MOTIFS: waveform, mixing levels, recording-session geometry.
> - **Services cards** → THEME: the specific discipline (UI/UX = wireframe/grid; WebGL = 3D mesh/shader; Cloud = infra/nodes; Brand = type/logo system; etc.).
>
> **For stills:** same prompt, replace "motion graphic (seamless loop, ~10s)" with
> "still graphic, 1920×1080, WebP."
>
> **Output & handoff:** name each file per the **Local filename** in §1, hand back,
> and I'll drop them into `src/assets/` and repoint the imports (1-line each),
> rebuild, and render for review.

---

## 4. Wiring-in (once assets are delivered)
For each delivered file I will: place it in `src/assets/videos/` or `src/assets/img/`,
update the matching `import` in the component named in §1, keep all `<video autoPlay
loop muted playsInline>` / `<img>` attributes unchanged, then `npm run build` + render.
No layout/structure changes.
