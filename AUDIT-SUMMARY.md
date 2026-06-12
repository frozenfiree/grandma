# Audit Summary — Asset Safety + Netlify Deployment Readiness Pass

**Branch:** `audit/dummy-asset-review` (cut from `main`)
**Scope:** Group A — safety & deployability only. This pass does **NOT** eliminate
external hot-linked dependencies (that is Group B, blocked on the owner's real P1
assets — see "Remaining external dependencies" below).
**Date:** 2026-06-12

---

## 1. What changed

### Config (deploy readiness)
| File | Change |
|---|---|
| `.nvmrc` | New file — pin Node `20`. |
| `netlify.toml` | Added `[build]` block (`command = "npm run build"`, `publish = "dist"`) + `[build.environment] NODE_VERSION = "20"`. Existing SPA/redirect rules untouched. |
| `package.json` | Added `engines.node: ">=18 <21"`. |

### Components (safety + cleanup)
| File | Change | Why |
|---|---|---|
| `src/components/services/service1File/Info.jsx` | Replaced `gaandiva.png` import with local `serveice1div.png`; updated `<img>` `src`. | **PII removal** — `gaandiva.png` embedded a personal email in the bundle. |
| `src/components/InteractiveBanner.jsx` | Replaced 2 Framer hot-links (a `.mp4` and an `.svg`) with local `grandmahivespng.png` + `podcast.mp4`; retitled items. | Removes 2 external runtime deps where a local asset existed. |
| `src/components/Footer.jsx` | Removed dead commented-out Flaticon `<img>` hot-link. | Dead external reference. |
| `src/components/Hero.jsx` | Dropped unused `image4` / `image5` imports + commented refs. | Dead code. |
| `src/components/services/service3File/Info.jsx` | Removed dead commented `scrollingvideo.mp4` import. | Dead code. |

### Assets removed (`git rm`, all verified zero references in `src/` + `index.html`)
`gaandiva.png` (PII), `hero.png`, `react.svg`, `vite.svg`,
`3Dmotionart.mp4`, `Home2.mp4`, `Home3.mp4`, `Service1video.mp4`,
`attention1.mp4`, `getDelever.mp4`, `scrollingvideo.mp4`,
`service1dropdownvideo.mp4`.

→ **12 files removed, ~65 MB of unused/unsafe binaries dropped from the repo.**

Local assets the patch depends on were verified present on `main` before building:
`serveice1div.png`, `grandmahivespng.png`, `podcast.mp4`.

---

## 2. Build status

`npm install && npm run build` → **PASSES.** `dist/` produced with `dist/index.html`
and hashed assets. Build emits only harmless third-party `"use client"` directive
warnings from `react-router` / `framer-motion` — no errors, no unresolved imports.

---

## 3. Remaining external dependencies (NOT eliminated — Group B)

The goal of removing external hot-links is **NOT met by this pass.** Real
replacement assets do not yet exist in the repo, so the site still depends on
third-party CDNs at runtime:

| Host | References in `src/` | Notes |
|---|---|---|
| `framerusercontent.com` | **80** (58 unique URLs) | Down from ~82 — 2 replaced with local assets this pass. ~79–80 still need real local replacements. |
| `images.unsplash.com` | 40 | Placeholder/stock imagery hot-linked. |
| `cdn.coverr.co` | 1 | Stock video hot-link. |
| `fonts.googleapis.com` | 2 | Google Fonts (typically acceptable to leave). |
| `cdn-icons-png.flaticon.com` | 0 | Eliminated this pass (dead Footer ref removed). |

**These remain because the owner's real P1 replacement assets are not in the repo.**
No external-dependency elimination is claimed here.

---

## 4. Deploy status

- **Netlify can be connected now.** With the `netlify.toml [build]` block + existing
  SPA redirect, importing `frozenfiree/grandma` on branch `audit/dummy-asset-review`
  builds (`npm run build`) and publishes (`dist`) with **no UI configuration needed**.
- This is a **staging / pipeline + safety check only.** Live production is currently
  on Vercel.

---

## 5. Risks

- The site still fetches ~120 assets from third-party CDNs at runtime; any of those
  going away breaks visuals. Not resolved here.
- Framer/Unsplash/Coverr URLs are ephemeral and outside the owner's control.
- `podcast.mp4` / `grandmahivespng.png` are now bundled — confirm they are the
  intended creative, not themselves placeholders.

---

## 6. Next actions

1. **(Group B — blocker)** Owner delivers real P1 replacement assets; swap the
   remaining 80 Framer + 40 Unsplash + 1 Coverr hot-links for local files.
2. Re-audit for any PII in remaining assets before production.
3. Connect Netlify branch deploy for staging verification.
4. Optimize large bundled `.mp4`s for web delivery.

---

## 7. Production blockers (summary)

- **Real P1 replacement assets (Group B) do not exist in the repo.** Until they land,
  the site is not externally independent and should not be treated as production-ready
  off this branch — staging only.
