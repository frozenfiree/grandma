# Group B — Selected Replacement Assets

> Concrete assets chosen for the controlled implementation pass. Every entry was
> **actually downloaded, technically verified, and optimized** before any code
> was changed. Selection was made by **metadata + technical QA** (resolution,
> duration, and measured average luminance `YAVG` to confirm the clip fits the
> site's **dark, premium, motion-first** aesthetic). I cannot visually screen
> each frame, so residual visual risk is tracked in
> `GROUP-B-IMPLEMENTATION-REPORT.md`.
>
> **Source/download mechanism:** Pexels `https://www.pexels.com/download/video/{ID}/`
> (public, no-auth, no-watermark). **Optimization:** `ffmpeg` → H.264 1080p,
> `yuv420p`, `-an` (no audio), `-crf 28`, `+faststart`, trimmed to a tight loop.
>
> Dark-aesthetic check: lower `YAVG` (0–255) = darker. The site is dark, so we
> target low/mid luminance. Anything bright (≈≥200) is rejected as a regression.

---

## Batch 1 — The four signature loops (highest leverage: ~20 references)

### S1 · `signature-abstract-loop.mp4`  →  replaces `hQUXKbpvYZyElXRxbNmW95ph8Q.mp4`
- **Platform:** Pexels
- **Source page:** https://www.pexels.com/video/28561463/  (ID 28561463)
- **License:** Pexels License — free commercial use, no attribution, no standalone redistribution. ✅
- **Why it matches:** Blue glowing particles and lines forming wave patterns on a
  dark backdrop — neutral, premium, abstract motion. This is the most-reused loop
  (8 sections), so a non-thematic, elegant abstract was chosen deliberately.
  **YAVG ≈ 24 (dark).** 4K source → 1080p, 15s, **3.24 MB**.
- **Targets:** service4/Info, service5/Info, service7/Info+Name, service8/Info,
  service9/Info, service10/Info, WorkPage, InteractiveBanner.

### S2 · `signature-tech-loop.mp4`  →  replaces `XzKm3c6TBPnQY2RLiGOpjE83OU0.mp4`
- **Platform:** Pexels
- **Source page:** https://www.pexels.com/video/35004655/  (ID 35004655)
- **License:** Pexels License. ✅
- **Why it matches:** 3D digital network structure animation — technology/data
  motion, premium and dark. Fits the tech-leaning service sections.
  **YAVG ≈ 31 (dark).** 1080p source, 10s, **2.38 MB**.
- **Targets:** service7/Info, service8/Info, service9/Info, service10/Info,
  InteractiveBanner.

### S3 · `signature-brand-loop.mp4`  →  replaces `LqHnLVpPrDaiM1FZ63ODyW25jaw.mp4`
- **Platform:** Pexels
- **Source page:** https://www.pexels.com/video/29797582/  (ID 29797582)
- **License:** Pexels License. ✅
- **Why it matches:** Dynamic abstract gradient wave / flowing premium backdrop —
  brand-atmosphere motion. **YAVG ≈ 64 (mid-dark, gradient).** 4K → 1080p, 15s,
  **1.26 MB**.
- **Targets:** service7/Info, service8/Info, service9/Info, service10/Info.

### S4 · `signature-editorial-loop.mp4`  →  replaces `KTnvZtMoXWeUfnqfR6pqtZyo82Y.mp4`
- **Platform:** Pexels
- **Source page:** https://www.pexels.com/video/27607570/  (ID 27607570)
- **License:** Pexels License. ✅
- **Why it matches:** Abstract smoke animation across a black surface — cinematic,
  editorial, dark premium texture. Suits InsightPage + the cloud service title.
  **YAVG ≈ 38 (dark).** 1080p source, 15s, **1.71 MB**.
- **Targets:** service10/Name, InsightPage.
- **Note:** A first candidate (Pexels 5575163, "black liquid in water") was
  **rejected** during QA — measured **YAVG ≈ 235 (near-white)**, which would have
  been a bright regression on the dark site. Swapped for the dark smoke clip.

**Batch 1 footprint:** 4 files, **8.6 MB** total, all 1080p, all dark-verified.

---

## Batch 2 — Fully de-Framer service4 (WebGL/abstract), service10 (infra), InsightPage (editorial)

All **Pexels License** (free commercial, no attribution, no standalone
redistribution), all downloaded via `pexels.com/download/video/{ID}/`, optimized
to 1080p H.264, no audio. All **dark-verified** (low YAVG).

| Local file | Pexels ID / page | YAVG | Why it matches | Target |
|---|---|---|---|---|
| `service4-webgl-1.mp4` | [27980029](https://www.pexels.com/video/27980029/) | 19 | Blue lines/dots particles on dark — abstract 3D feel | service4/Info |
| `service4-webgl-2.mp4` | [34992134](https://www.pexels.com/video/34992134/) | 29 | Molecular structure animation — WebGL/3D | service4/Info |
| `service4-webgl-3.mp4` | [29765099](https://www.pexels.com/video/29765099/) | 17 | Neon particles in dark space | service4/Info |
| `service4-webgl-4.mp4` | [29920181](https://www.pexels.com/video/29920181/) | 25 | Vivid glowing particles motion | service4/Info |
| `service4-webgl-5.mp4` | [35286672](https://www.pexels.com/video/35286672/) | 19 | Glittering particles on dark | service4/Info |
| `service4-name-loop.mp4` | [30064796](https://www.pexels.com/video/30064796/) | 94 | Spinning neon digital — energetic title accent (brighter; see risk note) | service4/Name |
| `service10-infra-1.mp4` | [1085656](https://www.pexels.com/video/1085656/) | 45 | Blue network cables/connections — infra | service10/Info |
| `service10-infra-2.mp4` | [7140931](https://www.pexels.com/video/7140931/) | 43 | Electronic processor close-up — hardware | service10/Info |
| `service10-infra-3.mp4` | [853919](https://www.pexels.com/video/853919/) | 36 | Moody tech screen — datacenter mood | service10/Info |
| `insight-editorial-1.mp4` | [29853254](https://www.pexels.com/video/29853254/) | 23 | Glowing particles in dark space — premium editorial texture | InsightPage |
| `insight-editorial-2.mp4` | [30133176](https://www.pexels.com/video/30133176/) | 33 | Glowing orb with particle trail — editorial | InsightPage |

**Rejected in QA:** `5028622` (YAVG 97) & `38000679` (YAVG 98) — too bright for a
dark site; `35160268`, `15886614`, `34576602`, `35044924` — portrait orientation
(would crop badly in landscape boxes).

---

## Batch 3 — Fully de-Framer service1 (technology) + service8 (strategy)

All **Pexels License**, optimized 1080p, dark-verified.

| Local file | Pexels ID / page | YAVG | Why it matches | Target |
|---|---|---|---|---|
| `service1-tech-flow.mp4` | [33248294](https://www.pexels.com/video/33248294/) | 29 | Futuristic network connections — tech/delivery | service1/Info |
| `service1-network.mp4` | [3129595](https://www.pexels.com/video/3129595/) | 22 | Neon plexus geometric lines — network | service1/Info |
| `service1-tech-motion.mp4` | [34996641](https://www.pexels.com/video/34996641/) | 43 | Glowing molecular tech animation | service1/Info |
| `service1-data-flow.mp4` | [3141210](https://www.pexels.com/video/3141210/) | 38 | Digital geometric symmetry — data | service1/Info |
| `service1-abstract-a.mp4` | [32336493](https://www.pexels.com/video/32336493/) | 45 | Illuminated digital network nodes | service1/Info |
| `service1-abstract-b.mp4` | [37379497](https://www.pexels.com/video/37379497/) | 51 | Glowing purple particle cluster | service1/Info |
| `service8-strategy-1.mp4` | [34992913](https://www.pexels.com/video/34992913/) | 29 | 3D network of purple spheres — premium abstract | service8/Info |

**Rejected in QA:** `34995393`, `35002915` — portrait orientation.

---

## Deferred to a later, curation-led pass (NOT replaced this pass)

Left intentionally on Framer because they need human visual curation and/or carry
higher aesthetic risk (per rule 7 — don't replace unless high-confidence):

- **service2** (Design/Tech, 8 videos) — creative/design texture; subjective.
- **service3** (Content/Media, 5 videos) — editorial/studio; literal studio
  footage risks reading as the "generic stock-business footage" the brief forbids,
  so these want hand-picked abstract textures.
- **service5** (Strategy/Marketing, 4 + 1 name) — brand/editorial; subjective.
- **service6** (Brand Identity, 4 + 1 name + **4 stills**) — brand identity is the
  most aesthetic-sensitive section; stills especially need design review.
- **Stills:** service1 (2 png), service6 (4 jpg), InteractiveBanner (1 png) — image
  curation deferred.
- **Fonts:** the 4 Lay Grotesk `.woff2` — explicitly out of scope this pass.
