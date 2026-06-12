# Group B — Implementation Report (controlled pass)

**Branch:** `audit/dummy-asset-review`
**Goal:** Meaningfully reduce Framer (`framerusercontent.com`) dependency while
preserving the dark, premium, motion-first creative identity.
**Outcome:** **24 of 47** unique Framer video URLs replaced with local,
royalty-free, optimized assets. **Build passes. No broken imports. No layout or
interaction changes.** Fonts left untouched (separate workstream, as instructed).

---

## 1. Assets replaced (22 local video files, all Pexels License, all dark-verified)

| Batch | Scope | Local files | Framer video refs removed |
|---|---|---|---|
| **1 — Signature loops** | The 4 most-reused loops | `signature-{abstract,tech,brand,editorial}-loop.mp4` | ~20 references across 11 component locations |
| **2 — service4 / service10 / InsightPage** | WebGL/abstract, infra, editorial | 11 files (`service4-webgl-1..5`, `service4-name-loop`, `service10-infra-1..3`, `insight-editorial-1..2`) | 11 unique |
| **3 — service1 / service8** | Technology, strategy | 7 files (`service1-*` ×6, `service8-strategy-1`) | 7 unique |

Full per-asset provenance (source platform, page URL, license, luminance,
rationale, target) is in **`GROUP-B-SELECTIONS.md`**.

**Components now 100% free of Framer video:** service1, service4, service7,
service8, service9, service10 (incl. their `Name.jsx`), WorkPage, InsightPage,
InteractiveBanner.

### How it was done (verifiable, not hand-waved)
- **Source:** Pexels, via `https://www.pexels.com/download/video/{ID}/` (public,
  no-auth, no-watermark). License: [Pexels License](https://www.pexels.com/license/)
  — commercial use, no attribution, no standalone redistribution.
- **Optimization:** `ffmpeg` → H.264, **1080p** (`scale=min(1920,iw)`), `yuv420p`,
  **`-an`** (audio stripped), `-crf 28–32`, `+faststart`, trimmed to tight loops.
  Heavy clips re-encoded down (e.g. a 14 MB neon loop → 5.4 MB; two 8 MB tech
  loops → ~3 MB).
- **Aesthetic QA (automated):** every candidate's average luminance (`YAVG`, 0–255)
  was measured with `ffmpeg signalstats`; clips that were too **bright** for the
  dark site were **rejected** (e.g. `5575163` YAVG 235 near-white, `5028622` 97,
  `38000679` 98). **Portrait-orientation** clips were rejected to avoid bad cropping
  in landscape boxes.
- **Behavior preserved:** every `<video>` keeps `autoPlay loop muted playsInline`;
  the `<source>` and object-`url:` forms were repointed without markup changes.

**Local footprint:** `src/assets/videos/` = 22 files, **~59 MB** total.

---

## 2. Remaining Framer references (honest accounting)

| Type | Remaining (unique) | Where | Status |
|---|---|---|---|
| `.mp4` video | **23** | service2 (8), service3 (5), service5 (4 + 1 `Name`), service6 (4 + 1 `Name`) | Deferred — curation-led pass |
| `.jpg` still | **4** | service6 (brand grid) | Deferred — image curation |
| `.png` still | **3** | service1 (2), InteractiveBanner (1) | Deferred — image curation |
| `.woff2` font | **4** | global.css (Lay Grotesk) | **Out of scope** (font workstream) |

**Framer URL references in `src/`: started 47 unique videos → now 23. ~24
eliminated this pass.** Total remaining Framer references (all types, all
occurrences): **36**.

### Why the rest were deferred (rule 7 — only high-confidence matches)
- **service2 / service5 / service6** lean **creative / brand-identity**, which is
  the most aesthetic-sensitive content — a wrong "premium" choice is worse than the
  status quo. These want human visual curation, not metadata-only selection.
- **service3** is **Content/Media**: literal studio/filmmaking footage risks
  reading as the *generic stock-business footage the brief explicitly forbids*, so
  it needs hand-picked abstract textures rather than an automated pick.
- **Stills (7)** need design review (composition/crop), deferred with the above.
- **Fonts (4)** intentionally untouched — the **Lay Grotesk** license-vs-substitute
  decision is a separate workstream (`GROUP-B-MEDIA-SOURCING.md` §6).

> **Other external hosts unchanged this pass** (out of Group B scope): Unsplash
> (40 image hot-links), Coverr (1), Google Fonts (2).

---

## 3. Build result

```
npm run build  →  EXIT 0   ✓ built in ~3.4s
```
- All 22 local videos resolve and are emitted into `dist/assets/` with hashed names.
- No "Could not resolve import" errors; no Rollup failures.
- Only pre-existing harmless `"use client"` directive warnings from
  `react-router` / `framer-motion` (third-party, unrelated).
- Verified after **every** batch (3 build-green commits).

---

## 4. Visual-risk assessment

Selection used **metadata + automated technical QA** (resolution, orientation,
duration, luminance). I **could not visually screen each frame**, so the following
residual risks should get a human eyeball on a deploy preview:

| Risk | Detail | Mitigation already applied |
|---|---|---|
| **Mood drift** | A replacement loop may not perfectly echo the *exact* original clip's content (the originals couldn't be inspected). | Matched by theme + kept everything **dark** (YAVG-vetted) and abstract. |
| **`service4-name-loop` brighter** | YAVG ≈ 94 (spinning neon) vs the dark norm — used only as a small **title** accent, low area. | Flagged here; swap if it reads hot on preview. |
| **Loop seams** | Stock clips aren't guaranteed seamless; `loop` will hard-cut on restart. | Trimmed to steady-motion segments; originals likely weren't seamless either. |
| **Repetition** | The 4 signature loops now repeat across many sections (by design — they did before too). | Same structural behavior as the original Framer build. |
| **Bundle weight** | `src/assets/videos` ≈ 59 MB; a few loops are 3–6 MB. | Already re-encoded the heaviest; can push smaller (see §5). |

**No layout/interaction risk:** only `src`/`url` values changed; no JSX structure,
CSS, or component logic was modified.

---

## 5. Recommended next replacements (priority order)

1. **service3 (5 videos)** — replace with **dark abstract editorial textures**
   (ink/smoke/light), *not* literal studio footage, to honor the "no generic
   business footage" rule. Pools: Pixabay ink/fluid, Pexels editorial. *Medium
   confidence — needs visual pick.*
2. **service2 (8 videos)** — design/creative; Pixabay fluid/ink + dark tech.
   *Medium confidence.*
3. **service5 (5) & service6 (5 video)** — brand/marketing; premium gradient/light
   (Pixabay gradient loop). **service6 is brand identity — review carefully.**
4. **Stills (7: service1 ×2 png, service6 ×4 jpg, banner ×1 png)** — curate dark
   abstract photos (Pexels/Pixabay), `.webp`/optimized.
5. **Lay Grotesk fonts (4)** — separate decision: license & self-host vs. swap to a
   free OFL grotesk (Space/Familjen Grotesk).
6. **Optional optimization** — generate `.webm` variants and `poster` frames; push
   the few 3–6 MB loops lower with `-crf 32`/shorter trims to cut bandwidth.

---

## 6. Honest bottom line

This pass **meaningfully reduced** Framer dependency — **~24 of 47 video
hot-links (≈51%) eliminated** and **9 components fully de-Framered for video** —
while keeping the dark, premium, motion-first aesthetic (every asset
luminance-verified) and changing **zero** layout or interaction. It did **not**
eliminate Framer entirely: 23 videos + 7 stills remain (deferred for visual
curation as the higher-risk, lower-confidence set) and the 4 Lay Grotesk fonts are
a separate workstream. Build is green and deployable.
