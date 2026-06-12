# Group B — Replacement Map (per asset)

> Per-asset plan to swap every `framerusercontent.com` reference for a local,
> royalty-free file **while preserving the abstract/premium/motion-first look.**
> Read **`GROUP-B-MEDIA-SOURCING.md`** first — it defines the classification
> rubric, the verified source pools, license terms, the AI-content caveat, the
> fonts workstream, and **why the "Source" column is a collection page, not a
> hard-coded CDN file URL** (those are dynamic/expiring; see Sourcing §5).
>
> **Convention per row:** *Current asset* · *Classification* · *Source pool
> (verified, license-clear)* · *License* · *Recommended local filename* ·
> *Component path*. The **"Chosen clip"** provenance URL is filled in at
> selection/implementation time.
>
> **No code changed yet** — this is the mapping deliverable.

Legend — License codes: **PX**=Pexels · **PB**=Pixabay · **MK**=Mixkit ·
**CV**=Coverr · **IA**=Internet Archive (per-item). All listed pools are
commercial-use, no-attribution (except IA per-item). Save files to `src/assets/`.

---

## A. Shared "signature" loops — replace ONCE, repoint all references

| # | Current Framer asset | Class | Source pool | Lic | Local filename |
|---|---|---|---|---|---|
| S1 | `assets/hQUXKbpvYZyElXRxbNmW95ph8Q.mp4` | Abstract motion | [Pixabay abstract](https://pixabay.com/videos/search/abstract%20background/) / [Mixkit abstract](https://mixkit.co/free-stock-video/abstract/) | PB/MK | `signature-abstract-loop.mp4` |
| S2 | `assets/XzKm3c6TBPnQY2RLiGOpjE83OU0.mp4` | Technology motion | [Pixabay technology](https://pixabay.com/videos/search/technology%20abstract/) / [Coverr tech](https://coverr.co/stock-video-footage/tech) | PB/CV | `signature-tech-loop.mp4` |
| S3 | `assets/LqHnLVpPrDaiM1FZ63ODyW25jaw.mp4` | Brand / Studio motion | [Pixabay gradient loop](https://pixabay.com/videos/search/gradient+loop/) | PB | `signature-brand-loop.mp4` |
| S4 | `assets/KTnvZtMoXWeUfnqfR6pqtZyo82Y.mp4` | Editorial / Digital-infra | [Pexels editorial](https://www.pexels.com/search/videos/editorial/) | PX | `signature-editorial-loop.mp4` |

**Reference sites to repoint for each (import the local file once per component, reuse):**
- **S1** → `service4File/Info.jsx`, `service5File/Info.jsx`, `service7File/Info.jsx` + `service7File/Name.jsx`, `service8File/Info.jsx`, `service9File/Info.jsx`, `service10File/Info.jsx`, `WorkPage.jsx`, `InteractiveBanner.jsx` (`/images/…` path)
- **S2** → `service7File/Info.jsx`, `service8File/Info.jsx`, `service9File/Info.jsx`, `service10File/Info.jsx`, `InteractiveBanner.jsx` (`/images/…` path)
- **S3** → `service7File/Info.jsx`, `service8File/Info.jsx`, `service9File/Info.jsx`, `service10File/Info.jsx`
- **S4** → `service10File/Name.jsx`, `InsightPage.jsx`

> ⚠️ Note: `service7`, `service9`, `WorkPage` use **only** signature loops — once
> S1–S3 land, those components are fully de-Framered with no unique sourcing.

---

## B. service1 — *Delivery Services / Technology* · `src/components/services/service1File/Info.jsx`

| Current Framer asset | Class | Source pool | Lic | Local filename |
|---|---|---|---|---|
| `assets/k60IZX99Pe2iroCU32yogDsEM.mp4` | Technology motion | [Pixabay technology](https://pixabay.com/videos/search/technology%20abstract/) | PB | `service1-tech-flow.mp4` |
| `assets/SUoJA8Gjv1613evzDrJ7EsvLk8.mp4` | Digital infrastructure | [Pexels cloud computing](https://www.pexels.com/search/videos/cloud%20computing/) | PX | `service1-network.mp4` |
| `assets/qdP7cDMQa3ZhXnMeV51Y3RDf8xg.mp4` | Technology motion | [Coverr tech](https://coverr.co/stock-video-footage/tech) | CV | `service1-tech-motion.mp4` |
| `assets/KA17Rw9QTm5F8ykEZHUUL4d6k.mp4` | Technology motion | [Mixkit motion graphics](https://mixkit.co/free-stock-video/motion-graphics/) | MK | `service1-data-flow.mp4` |
| `assets/yw1VI4C31PtHswWOP8taEWP1rE.mp4` | Abstract motion | [Pixabay abstract](https://pixabay.com/videos/search/abstract%20background/) | PB | `service1-abstract-a.mp4` |
| `assets/fEZgoE7CH3y5pqm4S1TT9LaFiw.mp4` | Abstract motion | [Mixkit abstract](https://mixkit.co/free-stock-video/abstract/) | MK | `service1-abstract-b.mp4` |
| `images/WPnN1bXlI8hOpc96IKRxQZk9U.png?scale-down-to=2048` | Technology still | [Pexels abstract](https://www.pexels.com/search/videos/abstract/) (photo tab) | PX | `service1-still-1.jpg` |
| `images/PBThWAzr9w5Ow1UuyZcdyzv2Xdg.png?scale-down-to=2048` | Technology still | [Pexels abstract](https://www.pexels.com/search/videos/abstract/) (photo tab) | PX | `service1-still-2.jpg` |

---

## C. service2 — *Design / Technology* · `src/components/services/service2File/Info.jsx`

| Current Framer asset | Class | Source pool | Lic | Local filename |
|---|---|---|---|---|
| `assets/1kHQVfdOfa1VzDXWR5ppPXdVM.mp4` | Creative motion | [Pixabay ink motion](https://pixabay.com/videos/search/ink%20motion/) | PB | `service2-creative-1.mp4` |
| `assets/4cHnr0HuaWd1N9bPSJqq0H3tnU.mp4` | Creative motion | [Pixabay fluid art](https://pixabay.com/videos/search/fluid%20art/) | PB | `service2-creative-2.mp4` |
| `assets/DSSQjLRT3QGFesgKHp1Z7M93g1k.mp4` | Technology motion | [Pixabay technology](https://pixabay.com/videos/search/technology%20abstract/) | PB | `service2-tech-1.mp4` |
| `assets/I3QAFdiFvpCZIRT761DWGikU.mp4` | Creative motion | [Pixabay liquid art](https://pixabay.com/videos/search/liquid%20art/) | PB | `service2-creative-3.mp4` |
| `assets/SoKbr2mByivnmqFMOma1W6qtxC8.mp4` | Abstract motion | [Mixkit abstract](https://mixkit.co/free-stock-video/abstract/) | MK | `service2-abstract-1.mp4` |
| `assets/T6O00Du2BcrXsLOXN0rLE0ICJo.mp4` | Creative motion | [Pixabay paint flow](https://pixabay.com/videos/search/paint%20flow/) | PB | `service2-creative-4.mp4` |
| `assets/e5re8wT569qx0aav1YT5ufmbAvY.mp4` | Technology motion | [Coverr tech](https://coverr.co/stock-video-footage/tech) | CV | `service2-tech-2.mp4` |
| `assets/sQsYtaGSzjqDpzo7JvKe4PDKWkc.mp4` | Creative motion | [Pixabay ink motion](https://pixabay.com/videos/search/ink%20motion/) | PB | `service2-creative-5.mp4` |

---

## D. service3 — *Content / Media* · `src/components/services/service3File/Info.jsx`

| Current Framer asset | Class | Source pool | Lic | Local filename |
|---|---|---|---|---|
| `assets/83xxaSftRCQaNoSJvo7ircTC0.mp4` | Editorial motion | [Pexels editorial](https://www.pexels.com/search/videos/editorial/) | PX | `service3-editorial-1.mp4` |
| `assets/8o84gX417zxfX1wNxlctykhLnw.mp4` | Studio motion | [Pexels filmmaking](https://www.pexels.com/search/videos/filmmaking/) | PX | `service3-studio-1.mp4` |
| `assets/hH1WNTCFwihwRuXcgBDgKndWdLg.mp4` | Editorial motion | [Pexels behind-the-scenes](https://www.pexels.com/search/videos/behind-the-scenes/) | PX | `service3-editorial-2.mp4` |
| `assets/ogN0mZ2cJHKrEcSuXDt4UngW4.mp4` *(used ×2)* | Studio motion | [Pexels studio](https://www.pexels.com/search/videos/studio/) | PX | `service3-studio-2.mp4` |
| `assets/w0fNWdKTxHBWQ2FeuDxHEDWSJVM.mp4` | Editorial motion | [Pexels production](https://www.pexels.com/search/videos/production/) | PX | `service3-editorial-3.mp4` |

---

## E. service4 — *WebGL Development* · `service4File/Info.jsx` + `Name.jsx`

WebGL = 3D/abstract rendering → lean **Abstract** + **Digital infrastructure**.

| Current Framer asset | Class | Source pool | Lic | Local filename | Path |
|---|---|---|---|---|---|
| `assets/2CaTsl5bffWZqafmEfgO3AcSRY.mp4` | Abstract motion | [Pixabay abstract](https://pixabay.com/videos/search/abstract%20background/) | PB | `service4-webgl-1.mp4` | Info.jsx |
| `assets/5J37YIX5TVpaIUTQEYfYqIevLfk.mp4` | Abstract motion | [Mixkit abstract](https://mixkit.co/free-stock-video/abstract/) | MK | `service4-webgl-2.mp4` | Info.jsx |
| `assets/PtldTrJTMWDKKkufOh7uv02XOJM.mp4` | Digital infrastructure | [Pexels data center](https://www.pexels.com/search/videos/data%20center/) | PX | `service4-webgl-3.mp4` | Info.jsx |
| `assets/S77MWBiNvQ0BuPG7bWcfrUsYjUw.mp4` | Abstract motion | [Coverr abstract](https://coverr.co/stock-video-footage/abstract) | CV | `service4-webgl-4.mp4` | Info.jsx |
| `assets/tfgRHcYeN9bRcWJcC1cMwhMKZE.mp4` | Abstract motion | [Pixabay gradient loop](https://pixabay.com/videos/search/gradient+loop/) | PB | `service4-webgl-5.mp4` | Info.jsx |
| `assets/gL8FslI4JIFFv2buAI6mbJZJHgM.mp4` | Abstract motion | [Mixkit motion graphics](https://mixkit.co/free-stock-video/motion-graphics/) | MK | `service4-name-loop.mp4` | Name.jsx |
| *(also)* `assets/hQUXKbpv…mp4` | → **S1** signature | — | — | `signature-abstract-loop.mp4` | Info.jsx |

---

## F. service5 — *Strategy / Marketing* · `service5File/Info.jsx` + `Name.jsx`

| Current Framer asset | Class | Source pool | Lic | Local filename | Path |
|---|---|---|---|---|---|
| `assets/LF592xO33TcmwAMm9fcNJPUKpLk.mp4` | Brand motion | [Pixabay gradient loop](https://pixabay.com/videos/search/gradient+loop/) | PB | `service5-brand-1.mp4` | Info.jsx |
| `assets/NzaVFCeAegy4h4hOOLAL9TtM8Q.mp4` *(×2)* | Editorial motion | [Pexels editorial](https://www.pexels.com/search/videos/editorial/) | PX | `service5-strategy-1.mp4` | Info.jsx |
| `assets/aXVmCH5QBjUfBbpKpHDMpqIfQ.mp4` | Brand motion | [Pixabay paint flow](https://pixabay.com/videos/search/paint%20flow/) | PB | `service5-brand-2.mp4` | Info.jsx |
| `assets/eDfW5EDsHWKKHeT57zvGeYvna4.mp4` | Editorial motion | [Pexels production](https://www.pexels.com/search/videos/production/) | PX | `service5-strategy-2.mp4` | Info.jsx |
| `assets/U9KwtWA1mRYmzzea0QNnivyXUzk.mp4` | Brand motion | [Mixkit abstract](https://mixkit.co/free-stock-video/abstract/) | MK | `service5-name-loop.mp4` | Name.jsx |
| *(also)* `assets/hQUXKbpv…mp4` | → **S1** signature | — | — | `signature-abstract-loop.mp4` | Info.jsx |

---

## G. service6 — *Brand Identity* · `service6File/Info.jsx` + `Name.jsx`

| Current Framer asset | Class | Source pool | Lic | Local filename | Path |
|---|---|---|---|---|---|
| `assets/8T687CnVXgzAbw0ZlMG4PYpNZvA.mp4` | Brand motion | [Pixabay gradient loop](https://pixabay.com/videos/search/gradient+loop/) | PB | `service6-brand-1.mp4` | Info.jsx |
| `assets/CfVFFKDBmQ4BdjfIfTpO6QkDpac.mp4` | Creative motion | [Pixabay ink motion](https://pixabay.com/videos/search/ink%20motion/) | PB | `service6-creative-1.mp4` | Info.jsx |
| `assets/caIjYD0KXJKChrXFsyF2eAf6Y8.mp4` | Brand motion | [Pixabay paint flow](https://pixabay.com/videos/search/paint%20flow/) | PB | `service6-brand-2.mp4` | Info.jsx |
| `assets/dXntldYfMbIZn6N3QQHNnsP7v5Q.mp4` | Creative motion | [Pixabay fluid art](https://pixabay.com/videos/search/fluid%20art/) | PB | `service6-creative-2.mp4` | Info.jsx |
| `assets/OwOLGrA0k8eGBFJqXhNmfnXm784.mp4` | Brand motion | [Mixkit abstract](https://mixkit.co/free-stock-video/abstract/) | MK | `service6-name-loop.mp4` | Name.jsx |
| `images/7uZR4bo2j2YiId6NOCzuRXgx0.jpg` | Brand still | [Pexels abstract](https://www.pexels.com/search/videos/abstract/) (photo) | PX | `service6-still-1.jpg` | Info.jsx |
| `images/Rl9KFLV8elPaZaSaGzeMhD2zw.jpg` | Brand still | [Pexels abstract](https://www.pexels.com/search/videos/abstract/) (photo) | PX | `service6-still-2.jpg` | Info.jsx |
| `images/WHZogu5hG0xw9HiM7v66JUvNFM.jpg` | Brand still | [Pexels abstract](https://www.pexels.com/search/videos/abstract/) (photo) | PX | `service6-still-3.jpg` | Info.jsx |
| `images/i5gXTBvHUBw5JvIxSyw8LFCbHe8.jpg` | Brand still | [Pexels abstract](https://www.pexels.com/search/videos/abstract/) (photo) | PX | `service6-still-4.jpg` | Info.jsx |

---

## H. service7 — *Mobile / Technology* · `service7File/Info.jsx` + `Name.jsx`

**No unique assets** — uses signature loops only: **S1** (`hQUXKbpv…`, Info+Name),
**S2** (`XzKm3c6…`), **S3** (`LqHnLV…`). Fully resolved by §A.

---

## I. service8 — *Strategy / Marketing* · `service8File/Info.jsx`

| Current Framer asset | Class | Source pool | Lic | Local filename |
|---|---|---|---|---|
| `assets/WQzI7vwv2bso1fYCNF49C4CmZuk.mp4` | Editorial motion | [Pexels editorial](https://www.pexels.com/search/videos/editorial/) | PX | `service8-strategy-1.mp4` |
| *(also)* **S1** `hQUXKbpv…`, **S2** `XzKm3c6…`, **S3** `LqHnLV…` | signatures | — | — | (see §A) |

---

## J. service9 — *Marketing / Growth* · `service9File/Info.jsx`

**No unique assets** — uses **S1**, **S2**, **S3** (each ×2). Fully resolved by §A.

---

## K. service10 — *Cloud / Infrastructure* · `service10File/Info.jsx` + `Name.jsx`

| Current Framer asset | Class | Source pool | Lic | Local filename | Path |
|---|---|---|---|---|---|
| `assets/7u4fnP6WThcqoudq3t7UrbImRdI.mp4` | Digital infrastructure | [Pexels data center](https://www.pexels.com/search/videos/data%20center/) | PX | `service10-infra-1.mp4` | Info.jsx |
| `assets/EVd6sAbZEDEHCJnIZsaDQz3VRQ.mp4` | Digital infrastructure | [Pexels server room](https://www.pexels.com/search/videos/server%20room/) | PX | `service10-infra-2.mp4` | Info.jsx |
| `assets/lwzI8KwVzVJveq0B8T4F4FMqw.mp4` | Digital infrastructure | [Pexels cloud computing](https://www.pexels.com/search/videos/cloud%20computing/) | PX | `service10-infra-3.mp4` | Info.jsx |
| *(also)* **S1**, **S2**, **S3** (Info); **S4** `KTnvZt…` (Name) | signatures | — | — | (see §A) |

---

## L. InteractiveBanner · `src/components/InteractiveBanner.jsx`

Items 3 & 5 were already localized in the Group A pass (`podcast.mp4`,
`grandmahivespng.png`). Remaining Framer refs:

| Current Framer asset | Class | Source pool | Lic | Local filename |
|---|---|---|---|---|
| `images/R4awib6TjNZjrU13Fc8KHDvZig.png` | Brand still | [Pexels abstract](https://www.pexels.com/search/videos/abstract/) (photo) | PX | `banner-brand-still.png` |
| `images/XzKm3c6…mp4` | → **S2** signature | — | — | `signature-tech-loop.mp4` |
| `images/hQUXKbpv…mp4` | → **S1** signature | — | — | `signature-abstract-loop.mp4` |

---

## M. WorkPage · `src/components/WorkPage.jsx`

**No unique assets** — single ref to **S1** (`hQUXKbpv…`). Resolved by §A.

---

## N. InsightPage · `src/components/InsightPage.jsx`

| Current Framer asset | Class | Source pool | Lic | Local filename |
|---|---|---|---|---|
| `assets/MBzt9Ml5H475LeuQ2cFagIwg8.mp4` | Editorial motion | [Pexels editorial](https://www.pexels.com/search/videos/editorial/) | PX | `insight-editorial-1.mp4` |
| `assets/uCMxao7XZuj1q96TksAh5XBMHk.mp4` | Editorial motion | [Pexels behind-the-scenes](https://www.pexels.com/search/videos/behind-the-scenes/) | PX | `insight-editorial-2.mp4` |
| *(also)* **S4** `KTnvZt…` | signature | — | — | `signature-editorial-loop.mp4` |

---

## O. Fonts · `src/styles/global.css` (separate workstream — see Sourcing §6)

| Current Framer asset | font-family | Action |
|---|---|---|
| `assets/WI9t1ShxtnDdgtNMIBvA6ZPmUmo.woff2` | Lay Grotesk Medium | License & self-host **or** substitute (Space Grotesk / Familjen Grotesk) |
| `assets/nKAWw3tkEDWmkzQ2fLhYth6oNhg.woff2` | Lay Grotesk Black | ″ |
| `assets/33fFEgXgZL3Q3SJQqOiiKHAOYo.woff2` | Lay Grotesk Bold | ″ |
| `assets/BN58mFnaVIe1O8wx3ix33yXvwI.woff2` | Lay Grotesk Regular | ″ |

> ⚠️ Owner decision required: license *Lay Grotesk* vs. swap to a free OFL grotesk.
> Do **not** re-host the Framer Lay Grotesk files without a license.

---

## Summary

| Bucket | Distinct assets to source |
|---|---|
| Shared signature loops (resolve ~20 refs) | **4** |
| service1 | 6 video + 2 still |
| service2 | 8 video |
| service3 | 5 video |
| service4 | 6 video |
| service5 | 5 video |
| service6 | 5 video + 4 still |
| service8 | 1 video |
| service10 | 3 video |
| InteractiveBanner | 1 still |
| InsightPage | 2 video |
| **Media subtotal** | **45 video + 7 still = 52** |
| Fonts (Lay Grotesk) | **4** (separate licensing decision) |

**Per-classification spread:** Abstract ~12 · Technology ~6 · Creative ~7 ·
Brand ~7 · Studio ~3 · Editorial ~9 · Digital-infrastructure ~6 (videos).

**Next step (implementation pass, human-gated):** pick clips from the assigned
pools (vetting for AI artifacts — Sourcing §4.1), save under the recommended
filenames in `src/assets/`, `ffmpeg`-optimize to the weight budget (Sourcing §7),
swap each `framerusercontent.com` reference for a local `import`, resolve the
Lay Grotesk decision, then `npm run build` and verify.
