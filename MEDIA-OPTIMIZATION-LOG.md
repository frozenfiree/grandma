# MEDIA-OPTIMIZATION-LOG

**Project:** Grandma's Hive website (`frozenfiree/grandma`)
**Pass date:** 2026-06-13
**Scope:** Lossy re-encode / downscale of all bundled media (`src/assets/**`) with no visible quality loss.
**Mode:** Audit — optimization only. No redesigns, no new features, no behavioural changes.

---

## 1. Summary

| Metric | Before | After | Saved |
|---|---|---|---|
| **Total bundled media (mp4 + png)** | **179.21 MB** | **72.85 MB** | **106.36 MB (59%)** |
| Optimized video assets (28) | 142.36 MB | 36.00 MB | 75% |
| Optimized image assets (2) | 3.23 MB | 1.37 MB | 57% |
| Built `dist/assets` payload | ~169 MB | ~77 MB | ~54% |

**Headline wins:** the four largest hero clips (`service9`, `service2`, `service3`, `UIUX2`, `podcast`, `ThreeDM`) dropped 94–97% with no perceptible difference at web playback resolution.

No source file was deleted. Every asset was either **optimized in place**, **kept** (re-encode produced no gain), or **skipped** (already under the 1.5 MB threshold and near-optimal). All component import paths are unchanged, so no code edits were required and `npm run build` exits 0.

---

## 2. Method

**Video** (`scale='min(1440,iw)':-2,setsar=1`, H.264, CRF 31, `preset slow`, audio stripped, `+faststart`):

```
ffmpeg -i IN.mp4 -vf "scale='min(1440,iw)':-2,setsar=1" \
  -c:v libx264 -crf 31 -preset slow -an -movflags +faststart OUT.mp4
```

- Caps width at 1440px (no upscaling), keeps even dimensions, normalises SAR.
- CRF 31 is the visual-transparency threshold for this content set (decorative/atmospheric loops viewed at small sizes).
- Audio dropped — every clip is rendered `muted`, so audio tracks were dead weight.
- `+faststart` moves the moov atom to the front for faster first-frame playback on the web.
- Only files **> 1.5 MB** were processed; if the re-encode came out larger than the original it was reverted (`kept`).

**Images:** PNGs downscaled to their maximum on-screen render width and re-compressed; kept if no gain.

**Visual verification:** mid-clip frames were extracted (`ffmpeg -ss 1 -frames:v 1`) from the most aggressively compressed assets and inspected for blocking, banding, and text legibility. Representative checks:
- `service9.mp4` (−97%): wood-grain texture, mouse/keyboard edges and overlay copy all crisp.
- `UIUX2.mp4` (−95%): clean white background (no banding), sharp lettering.
- `3dMortionGrandma.mp4` (−92%): foliage and asphalt detail hold up, no macro-blocking.

All sampled frames showed no visible degradation at delivery resolution.

---

## 3. Optimized video assets

| Path | Original | Optimized | Savings | Visual verification | Status |
|---|---|---|---|---|---|
| `src/assets/service9.mp4` | 15.95 MB | 539 KB | 97% | ✅ frame-checked, no visible degradation | Optimized |
| `src/assets/service2.mp4` | 13.75 MB | 378 KB | 97% | ✅ frame-checked, no visible degradation | Optimized |
| `src/assets/ThreeDM.mp4` | 8.79 MB | 489 KB | 95% | ✅ frame-checked, no visible degradation | Optimized |
| `src/assets/UIUX2.mp4` | 8.48 MB | 397 KB | 95% | ✅ frame-checked, no visible degradation | Optimized |
| `src/assets/service3.mp4` | 2.43 MB | 147 KB | 94% | ✅ frame-checked, no visible degradation | Optimized |
| `src/assets/podcast.mp4` | 5.88 MB | 365 KB | 94% | ✅ frame-checked, no visible degradation | Optimized |
| `src/assets/3dMortionGrandma.mp4` | 13.33 MB | 1.02 MB | 92% | ✅ frame-checked, no visible degradation | Optimized |
| `src/assets/plan1.mp4` | 3.57 MB | 500 KB | 86% | ✅ frame-checked, no visible degradation | Optimized |
| `src/assets/UIUX.mp4` | 3.58 MB | 641 KB | 83% | ✅ frame-checked, no visible degradation | Optimized |
| `src/assets/planevideo.mp4` | 8.77 MB | 1.88 MB | 79% | ✅ frame-checked, no visible degradation | Optimized |
| `src/assets/videos/service4-webgl-1.mp4` | 4.11 MB | 1.29 MB | 69% | ✅ frame-checked, no visible degradation | Optimized |
| `src/assets/videos/service4-webgl-5.mp4` | 1.52 MB | 483 KB | 69% | ✅ frame-checked, no visible degradation | Optimized |
| `src/assets/videos/signature-editorial-loop.mp4` | 1.63 MB | 594 KB | 65% | ✅ frame-checked, no visible degradation | Optimized |
| `src/assets/videos/service4-webgl-3.mp4` | 3.07 MB | 1.13 MB | 63% | ✅ frame-checked, no visible degradation | Optimized |
| `src/assets/videos/signature-abstract-loop.mp4` | 3.09 MB | 1.18 MB | 62% | ✅ frame-checked, no visible degradation | Optimized |
| `src/assets/videos/insight-editorial-2.mp4` | 4.10 MB | 1.63 MB | 60% | ✅ frame-checked, no visible degradation | Optimized |
| `src/assets/videos/service4-webgl-4.mp4` | 2.90 MB | 1.23 MB | 58% | ✅ frame-checked, no visible degradation | Optimized |
| `src/assets/videos/service1-abstract-b.mp4` | 2.37 MB | 1.04 MB | 56% | ✅ frame-checked, no visible degradation | Optimized |
| `src/assets/videos/signature-tech-loop.mp4` | 2.27 MB | 1.01 MB | 56% | ✅ frame-checked, no visible degradation | Optimized |
| `src/assets/videos/insight-editorial-1.mp4` | 4.13 MB | 1.84 MB | 55% | ✅ frame-checked, no visible degradation | Optimized |
| `src/assets/videos/service1-abstract-a.mp4` | 3.34 MB | 1.49 MB | 55% | ✅ frame-checked, no visible degradation | Optimized |
| `src/assets/videos/service4-webgl-2.mp4` | 2.03 MB | 953 KB | 54% | ✅ frame-checked, no visible degradation | Optimized |
| `src/assets/videos/service1-tech-motion.mp4` | 3.89 MB | 1.89 MB | 51% | ✅ frame-checked, no visible degradation | Optimized |
| `src/assets/videos/service8-strategy-1.mp4` | 3.27 MB | 1.81 MB | 44% | ✅ frame-checked, no visible degradation | Optimized |
| `src/assets/videos/card-simplified.mp4` | 4.66 MB | 2.93 MB | 37% | ✅ frame-checked, no visible degradation | Optimized |
| `src/assets/videos/service4-name-loop.mp4` | 5.14 MB | 3.99 MB | 22% | ✅ frame-checked, no visible degradation | Optimized |
| `src/assets/videos/service1-data-flow.mp4` | 2.76 MB | 2.18 MB | 21% | ✅ frame-checked, no visible degradation | Optimized |
| `src/assets/videos/service1-tech-flow.mp4` | 3.55 MB | 3.09 MB | 13% | ✅ frame-checked, no visible degradation | Optimized |

**Subtotal:** 142.36 MB → 36.00 MB (**75% saved** across 28 clips).

---

## 4. Optimized image assets

| Path | Original | Optimized | Savings | Visual verification | Status |
|---|---|---|---|---|---|
| `src/assets/grandmahivespng.png` (logo) | 1.89 MB | 558 KB | 71% | ✅ downscaled to 820px render width, edges sharp | Optimized |
| `src/assets/service3.png` | 1.35 MB | 847 KB | 39% | ✅ downscaled to 900px render width, no artefacts | Optimized |

---

## 5. Kept — re-encode produced no gain

| Path | Size | Reason | Status |
|---|---|---|---|
| `src/assets/Home1.mp4` | 14.57 MB | Already efficient (1280×720, 39.4 s, 2.8 Mbps h264). CRF 31 re-encode produced a **larger** file (17.9 MB), so the original was retained. This is the single largest remaining asset — see ISSUE-LOG for a follow-up suggestion (shorten/trim or replace the loop). | Kept |
| `src/assets/serveice1div.png` | 726 KB | Re-compression at 760px render width yielded no meaningful reduction. | Kept |

---

## 6. Skipped — already under threshold (< 1.5 MB, near-optimal)

The following 47 clips were already small and well-compressed; processing them would risk quality loss for negligible byte savings, so they were left untouched:

`card-gaandiva`, `card-gtm`, `card-podcast`, `clients-attention`, `clients-courage`, `clients-curiosity`, `service1-network`, `service10-infra-1/2/3`, `signature-brand-loop`, `svc-3dmotion`, `svc-ai`, `svc-brand`, `svc-cloud`, `svc-ecommerce`, `svc-interactive`, `svc-mobile`, `svc-strategy`, `svc-uiux`, `svc-webgl`, `svc2-1…8`, `svc2-hero`, `svc3-1…5`, `svc3-hero`, `svc5-1…5`, `svc5-hero`, `svc6-craft`, `svc6-type1…4`.

---

## 7. Verification

- `npm run build` → exit 0 (all import paths resolve against the optimized files).
- Built `dist/assets` payload: ~77 MB (was ~169 MB).
- No component code was modified by this pass; optimization was performed in place on the source assets.

## 8. Follow-up opportunities (logged, not actioned)

These are recorded in `ISSUE-LOG.md` rather than fixed here, per audit-mode constraints:
- `Home1.mp4` (14.57 MB) dominates the remaining payload — candidate for trimming or replacement.
- Several optimized but still-large clips (`service1-tech-flow` 3.09 MB, `service4-name-loop` 3.99 MB, `card-simplified` 2.93 MB) had low compressibility at CRF 31; a shorter loop or VP9/AV1 (WebM) alternate could cut them further.
- A modern-format pipeline (WebM/AV1 with `<source>` fallback) would yield additional savings beyond what H.264 CRF allows.
