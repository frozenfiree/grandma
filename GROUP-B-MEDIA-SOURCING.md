# Group B — Media Sourcing Strategy

> **Goal:** Replace Framer-hosted (`framerusercontent.com`) media with high-quality,
> royalty-free, **locally hosted** assets **while preserving the site's existing
> abstract, premium, motion-first visual language.** This is a *sourcing &
> mapping* document — it does **not** redesign sections, change layout, or alter
> interaction design. The per-asset assignments live in
> **`GROUP-B-REPLACEMENT-MAP.md`**.

**Status:** Sourcing plan only. **No component code has been changed by this pass.**
Implementation (download → `src/assets/` → swap imports) is the follow-up step,
gated on human selection of final clips (see §7).

---

## 1. What we're replacing (grounded in the repo, not assumptions)

Counted from `src/` on branch `audit/dummy-asset-review`:

| Type | Distinct assets | Notes |
|---|---|---|
| `.mp4` video loops | **45** | The core of the site's cinematic aesthetic. 4 of these are **shared "signature" loops** reused across many sections (see §2). |
| `.jpg` / `.png` stills | **7** | 4 jpg (service6 brand grid), 2 png (service1), 1 png (banner). |
| `.woff2` fonts | **4** | The **"Lay Grotesk"** typeface (Regular/Medium/Bold/Black). **Not cinematic media** — separate licensing/self-host workstream (§6). |
| **Total Framer URLs** | **58 unique** | (47 unique `.mp4` *URL strings* — but only 45 distinct assets, because the banner references 2 of the shared loops under a `/images/` path instead of `/assets/`.) |

### The site's visual language (must be preserved)
Dark, abstract, cinematic, motion-driven. Loops are used as **section
backgrounds and accent media**, not as literal product/photo content. Therefore
replacements must be **texture / light / atmosphere / movement** — *not* literal
"delivery van" or "marketing team" footage. Per the brief:
- ✅ Cinematic loops, abstract technology visuals, motion graphics, creative
  production footage, editorial/media environments, light/texture/atmosphere.
- ❌ Generic stock-business footage, SaaS/dashboard screenshots as background,
  low-quality AI-generated content.

---

## 2. Shared "signature" loops (replace once, reuse everywhere)

Four Framer assets carry most of the visual identity because they repeat across
sections. Replacing each **once** with a single local file (and pointing every
reference at it) keeps the look consistent and minimizes bundle size.

| Framer asset id | Appears in | Classification | Local file |
|---|---|---|---|
| `hQUXKbpvYZyElXRxbNmW95ph8Q.mp4` | service4, 5, 7, 8, 9, 10, WorkPage, service7/Name, InteractiveBanner | **Abstract motion** (premium signature) | `signature-abstract-loop.mp4` |
| `XzKm3c6TBPnQY2RLiGOpjE83OU0.mp4` | service7, 8, 9, 10, InteractiveBanner | **Technology motion** | `signature-tech-loop.mp4` |
| `LqHnLVpPrDaiM1FZ63ODyW25jaw.mp4` | service7, 8, 9, 10 | **Brand / Studio motion** | `signature-brand-loop.mp4` |
| `KTnvZtMoXWeUfnqfR6pqtZyo82Y.mp4` | service10/Name, InsightPage | **Editorial / Digital-infra motion** | `signature-editorial-loop.mp4` |

> These 4 files alone resolve ~20 of the 47 Framer video references.

---

## 3. Classification rubric → candidate source pools

Each remaining asset is tagged with one of the brief's seven motion categories.
Each category maps to a **verified, stable collection/search page** on a
commercially-usable, royalty-free platform. (See §5 for the download convention —
why we cite collection pages, not hard-coded CDN file URLs.)

| Category | What it looks like | Primary verified source pools |
|---|---|---|
| **Abstract motion** | Dark gradients, plexus, flowing light, particles | Pixabay [abstract](https://pixabay.com/videos/search/abstract%20background/) · Mixkit [abstract](https://mixkit.co/free-stock-video/abstract/) · Coverr [abstract](https://coverr.co/stock-video-footage/abstract) · Pexels [abstract](https://www.pexels.com/search/videos/abstract/) |
| **Technology motion** | Networks, data lines, circuitry, UI-abstract glow | Pixabay [technology abstract](https://pixabay.com/videos/search/technology%20abstract/) · Coverr [tech](https://coverr.co/stock-video-footage/tech) · Mixkit [motion graphics](https://mixkit.co/free-stock-video/motion-graphics/) |
| **Creative motion** | Ink/paint/fluid, color, design-process texture | Pixabay [ink motion](https://pixabay.com/videos/search/ink%20motion/) · Pixabay [fluid art](https://pixabay.com/videos/search/fluid%20art/) · Pixabay [liquid art](https://pixabay.com/videos/search/liquid%20art/) |
| **Brand motion** | Premium light sweeps, gradient brand atmospheres | Pixabay [gradient loop](https://pixabay.com/videos/search/gradient+loop/) · Pixabay [paint flow](https://pixabay.com/videos/search/paint%20flow/) · Mixkit [abstract](https://mixkit.co/free-stock-video/abstract/) |
| **Studio motion** | Cameras, sets, lighting, production environments | Pexels [filmmaking](https://www.pexels.com/search/videos/filmmaking/) · Pexels [studio](https://www.pexels.com/search/videos/studio/) · Pexels [production](https://www.pexels.com/search/videos/production/) |
| **Editorial motion** | Print/media, newsroom, typographic, magazine | Pexels [editorial](https://www.pexels.com/search/videos/editorial/) · Pexels [behind-the-scenes](https://www.pexels.com/search/videos/behind-the-scenes/) · Mixkit [new](https://mixkit.co/free-stock-video/new/) |
| **Digital infrastructure motion** | Server rooms, data centers, cloud, fiber | Pexels [data center](https://www.pexels.com/search/videos/data%20center/) · Pexels [server room](https://www.pexels.com/search/videos/server%20room/) · Pexels [cloud computing](https://www.pexels.com/search/videos/cloud%20computing/) |

**Public-domain / archival option (all categories):** the
[Internet Archive Moving Image Archive](https://archive.org/details/movies) and
[Prelinger Archives](https://archive.org/details/prelinger) — use **Advanced
Search filtered to CC / public-domain**, and verify the license on **each
individual item** (Archive licensing is per-upload, not blanket).

---

## 4. License suitability (read before downloading)

All recommended platforms permit **commercial use on a website with no
attribution**, but each has nuances:

| Source | License | Commercial | Attribution | Key restriction |
|---|---|---|---|---|
| **Pexels** | [Pexels License](https://www.pexels.com/license/) | ✅ | Not required | Can't sell/redistribute the file as-is; no standalone redistribution. Fine as site background. |
| **Pixabay** | [Content License](https://pixabay.com/service/license-summary/) | ✅ | Not required | Can't sell/distribute as-is or imply endorsement. Fine as site background. |
| **Mixkit** | [Mixkit Stock Video License](https://mixkit.co/license/) | ✅ | Not required | Can use in an "end product" (a website is fine); **cannot** redistribute the raw clip standalone or use to build a competing stock library. |
| **Coverr** | [Coverr License](https://coverr.co/license) | ✅ | Not required | No standalone redistribution. **⚠️ Library now mixes AI-generated clips** — see §4.1. |
| **Internet Archive** | Per-item (CC-BY / CC0 / PD) | Depends | **Depends** | Must verify **each** item; honor attribution if the item is CC-BY. |

### 4.1 ⚠️ AI-content caveat (brief requirement #5)
Coverr, and increasingly Pexels/Pixabay, now host **AI-generated** clips. The
brief says *avoid low-quality AI-generated content*. Mitigation:
- Prefer **human-shot** footage; on Coverr check the per-clip "AI" label.
- Manually vet every candidate at full resolution before accepting — reject
  warping, morphing artifacts, uncanny motion, or mushy detail.
- This vetting **cannot be automated** and is a required human step before any
  file enters `src/assets/`.

---

## 5. Download convention (why we cite collection pages, not file URLs)

Pexels/Pixabay/Mixkit/Coverr generate the **actual file URL dynamically** at the
moment you click *Download* (signed, expiring CDN links). Hard-coding a "direct
download URL" in this document would produce links that are **fake or broken
within hours** — so we deliberately do **not** fabricate per-file CDN URLs.

**The canonical, durable source for each asset is the platform collection/search
page** listed in §3 and per-row in the map. To obtain a file:
1. Open the assigned collection page, pick a clip matching the classification +
   the section's mood (dark, abstract, premium).
2. Click **Download** (choose 1080p/4K as appropriate; see §7 weight budget).
3. Save to `src/assets/` under the **recommended filename** from the map.
4. Record the **specific clip page URL** you chose back into the map's "Chosen
   clip" column (left blank now — to be filled at selection time) so the final
   provenance is auditable.

Internet Archive items **do** have stable direct file URLs and may be linked
directly once an item is chosen.

---

## 6. Fonts workstream (the 4 `.woff2` — separate from media)

`src/styles/global.css` `@font-face`-loads **Lay Grotesk** (Regular/Medium/Bold/
Black) from Framer. These are **typeface files**, not cinematic media, and have
their **own licensing**:

- **Option A (faithful):** License *Lay Grotesk* properly and self-host the
  licensed `.woff2` files locally. Preserves the exact type identity.
- **Option B (free substitute):** Replace with a visually-close free grotesk that
  is self-hostable, e.g. **Space Grotesk** or **Familjen Grotesk**
  ([Google Fonts](https://fonts.google.com) / [Fontsource](https://fontsource.org),
  OFL-licensed). Update the 4 `@font-face` `src` URLs + keep the existing
  `font-family` names so no other CSS changes.

> ⚠️ Do **not** simply re-host the Framer-served Lay Grotesk `.woff2` files
> without a license — that's the same legal exposure as the hot-link, just moved
> in-repo. Decision needed from the owner: license Lay Grotesk vs. substitute.

---

## 7. Quality, weight & implementation guidance

- **Match the source quality.** Framer served compact web-optimized loops. Target
  **1080p**, H.264/`.mp4` (and optionally `.webm`), **muted, short seamless
  loops**. Re-encode large downloads with `ffmpeg` (CRF ~23–28) to keep each
  background loop ideally **< 3–5 MB** so the bundle doesn't balloon.
- **Preserve behavior.** Every replaced `<video>` keeps `autoPlay loop muted
  playsInline`; every `<img>` keeps its `alt`. No layout/interaction changes.
- **Reuse the 4 signature loops** (§2) rather than sourcing 20 near-duplicates —
  cheaper, more consistent.
- **Consider `poster` frames** for videos and `loading="lazy"` for below-fold
  images during implementation (optional polish, not required by this pass).

---

## 8. Honest scope & limits

- This document + the map are a **plan**. They reduce *future* reliance on Framer
  by giving every asset a vetted, license-clear local target — but **zero Framer
  links are removed until the implementation pass downloads files and swaps the
  imports.**
- Final clip selection is a **human creative + legal judgment** (mood match + AI
  vetting + Lay Grotesk decision). The map narrows the search to verified pools;
  it does not auto-pick.
- Counts and component paths here are derived directly from the repo and are
  exact as of branch `audit/dummy-asset-review`.
