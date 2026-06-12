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
