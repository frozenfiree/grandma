# ISSUE-LOG

**Project:** Grandma's Hive website (`frozenfiree/grandma`)
**Mode:** Continuous discovery — **log only, do not fix.**
**Opened:** 2026-06-13
**Method:** Static review of `src/**`, `index.html`, `api/`, `vercel.json`; production build (`npm run build`, exit 0); frame extraction from media; route/import graph inspection.

**Severity key:** `Critical` = broken/blocks launch · `High` = visible defect or credibility risk · `Medium` = quality/perf/SEO/a11y · `Low` = hygiene/cosmetic.

---

## Open issues

### ISS-001 · High · Home (AboutSection)
- **Description:** The "work" card grid renders skate / skate-park-crowd footage under professional discipline labels: `UIUX2.mp4` (skateboard clip overlaid with "DIGITAL INTERFACE") is labelled **"UI UX DESIGN"**, and `3dMortionGrandma.mp4` (an outdoor skate-park crowd) is labelled **"3D MOTION ART"**. This is exactly the generic lifestyle / skate / crowd footage the project direction explicitly rules out, and the clip content contradicts its own caption.
- **Evidence:** `src/components/AboutSection.jsx:168` (`<video src={UIUX2}>` → overlay "UI UX DESIGN"), `:181` (`<video src={MortionGrandma}>` → "3D MOTION ART"). Frame extracts confirm skateboard / skate-park content.
- **Suggested fix:** Replace these two cards' sources with relevant, on-brand footage (interface/craft for UI/UX; real motion-design output for 3D) consistent with the rest of the motion system, or retire the AboutSection card grid if it duplicates the Selected Work section.

### ISS-002 · High · Work → Simplified Management (`WorkFantom`)
- **Description:** The eyebrow label "(SIMPLIFIED MANAGEMENT)" is set to pure black on a pure-black background, making it invisible. The component appears to be a leftover from a light-theme layout converted to a black hero without updating the text colour.
- **Evidence:** `src/components/WorkFantom.jsx:33` `background: #000;` vs `:52` `.podcast-eyebrow { color: #000000; }`.
- **Suggested fix:** Set `.podcast-eyebrow` colour to a visible value (e.g. `rgba(255,255,255,0.6)` to match the subtitle treatment).

### ISS-003 · Medium · Work → Simplified Management (`WorkFantom`)
- **Description:** The "COMING SOON" status pulse dot is black-on-black and therefore invisible; only the text renders, so the intended live-status affordance is lost.
- **Evidence:** `src/components/WorkFantom.jsx:84` `.podcast-dot { background: #000000; }` on the `#000` section.
- **Suggested fix:** Give the dot a visible accent colour (the site's neon/blue accent, or white).

### ISS-004 · Critical · Contact page (deployment)
- **Description:** The contact form POSTs to `/api/contact`, a Vercel serverless function that hard-depends on `process.env.RESEND_API_KEY` and `process.env.MONGO_URI`. On any host without those env vars (or on a static/SPA preview where `/api/contact` falls through the rewrite to `index.html`), submissions fail. This blocks the only lead-capture path on the site.
- **Evidence:** `api/contact.js:5` `new Resend(process.env.RESEND_API_KEY)`, `:22` `mongoose.connect(process.env.MONGO_URI)`; `src/components/ContactPage.jsx:42` `fetch('/api/contact')`; `vercel.json` SPA rewrite excludes only `/api/`.
- **Suggested fix:** Confirm both env vars are set in the production Vercel project; add a graceful client-side error/success state and a fallback (e.g. `mailto:` or status message) when the endpoint is unavailable; verify the function is deployed (not just the static SPA).

### ISS-005 · Medium · Site-wide (SEO / social)
- **Description:** `index.html` has a title and favicons but **no meta description and no Open Graph / Twitter Card tags**. Link previews (Slack, LinkedIn, iMessage, X) will show no image/description, and organic search snippets are auto-generated. Weak for a launch.
- **Evidence:** `index.html` head contains only `<title>`, viewport, theme-color, and icons — no `<meta name="description">`, `og:*`, or `twitter:*`.
- **Suggested fix:** Add a meta description, canonical URL, and Open Graph / Twitter Card tags (title, description, `og:image`). Consider a static prerender or react-helmet for per-route metadata.

### ISS-006 · Medium · Site-wide (accessibility)
- **Description:** Decorative/portfolio images use non-descriptive `alt` text (`"media"`, `"img1"`, `"img2"`, `"img3"`), which is useless to screen readers and hurts SEO. Truly decorative media should use `alt=""`; meaningful media should describe content.
- **Evidence:** `src/components/services/service1File/Info.jsx:363,416,443`; `src/components/services/service6File/Info.jsx:97,104,111`.
- **Suggested fix:** Set `alt=""` (+ `aria-hidden`) for decorative media, or write descriptive alt text for meaningful images.

### ISS-007 · Medium · Site-wide (accessibility / performance)
- **Description:** The site is motion-heavy with many `autoPlay loop` videos rendering simultaneously (AboutSection alone mounts 3; service pages mount 5–6 each), but there is almost no `prefers-reduced-motion` handling. This is an accessibility concern (vestibular) and a mobile CPU/battery/decoder-pressure concern.
- **Evidence:** Only 2 `prefers-reduced-motion` references across `src/`; numerous `<video autoPlay loop muted playsInline>` instances per page.
- **Suggested fix:** Add a global `@media (prefers-reduced-motion: reduce)` rule to pause/hide non-essential autoplay loops (e.g. swap to a poster frame), and consider lazy-mounting off-screen videos.

### ISS-008 · Medium · Performance (`Home1.mp4`)
- **Description:** `src/assets/Home1.mp4` (14.57 MB) is the single largest bundled asset and could not be reduced by the CRF-31 optimization pass (re-encode came out larger). It is rendered in AboutSection (and dead-imported elsewhere). It dominates the remaining payload.
- **Evidence:** 1280×720, 39.4 s, 2.8 Mbps h264; `MEDIA-OPTIMIZATION-LOG.md` §5; rendered at `AboutSection.jsx:194`.
- **Suggested fix:** Trim the loop to a few seconds, or provide a WebM/AV1 alternate via `<source>`, or replace with a shorter on-brand clip. (Tied to ISS-001 if that card is reworked.)

### ISS-009 · Medium · Site-wide (external dependency / privacy)
- **Description:** The four Lay Grotesk fonts are loaded from `framerusercontent.com` (the original Framer template's CDN). This is a third-party single-point-of-failure, a privacy/telemetry leak to Framer's infrastructure, a FOUT/CLS risk, and a licensing question (the template's font hosting may not be licensed for this independent deployment).
- **Evidence:** `src/styles/global.css:43,48,53,58` `src: url('https://framerusercontent.com/assets/*.woff2')`.
- **Suggested fix:** Self-host the licensed font files locally (confirm licence first) or substitute a properly licensed/Google-hosted alternative; remove the Framer CDN dependency.

### ISS-010 · Medium · Clients section interaction
- **Description:** The CRAFT/WONDER/COURAGE/CURIOSITY/ATTENTION hover-media interaction is inconsistent: only 3 of 5 items have a `media` clip. CRAFT and WONDER have no hover video, so two of five list items are visually dead on hover while the others reveal footage.
- **Evidence:** `src/components/ClientsSection.jsx:8-12` — `{ name: "CRAFT" }` and `{ name: "WONDER" }` have no `media` key; the other three do.
- **Suggested fix:** Source two on-brand clips for CRAFT and WONDER, or intentionally and uniformly disable hover media for all five for consistency.

### ISS-011 · Low · Content typo (Work)
- **Description:** GTM Publications description reads "Five vertical newsrooms , MarTech…" with a stray space before the comma (and a comma where a colon/dash would read better).
- **Evidence:** `src/components/WorkSection.jsx:37` and `src/components/WorkPage.jsx:25`.
- **Suggested fix:** "Five vertical newsrooms: MarTech, FinTech, HRTech, CyberTech, SalesTech."

### ISS-012 · Low · Dead code (maintainability)
- **Description:** `WorkSection.jsx` and `WorkPage.jsx` import `Home1`, `UIUX2`, `3dMortionGrandma` (`MortionGrandma`), `podcast`, `sigEditorial`, `sigTech` but never render them — the live cards use the `card-*` clips. Dead imports inflate the dependency graph and mislead future edits.
- **Evidence:** `WorkSection.jsx:4-9` / `WorkPage.jsx:5-9` imports with no matching JSX usage (verified by grep).
- **Suggested fix:** Remove unused imports.

### ISS-013 · Low · Dead route / component
- **Description:** `ServiceDetailPage` is wired to the `SERVICE_DETAIL` route but nothing in the UI links to it, so it is unreachable via navigation yet still builds as a 24 KB lazy chunk (reachable only by guessing the URL, where it may render incomplete). Other components are retired but still present: `BrandGraphic.jsx` (retired, import/fallback remain), `InteractiveBanner.jsx`, `Capabilities.jsx`, `HorizontalScrollSection.jsx` are not rendered.
- **Evidence:** `src/App.jsx:28,93` (route defined, `ROUTES.SERVICE_DETAIL` referenced nowhere else); dead component files present but unimported.
- **Suggested fix:** Remove the dead route + components, or, if kept intentionally, document why and ensure the detail page renders correctly.

### ISS-014 · Low · Code hygiene (CSS architecture)
- **Description:** Components inject large inline `<style>` blocks containing global resets (`* { margin:0 }`, `html, body { … }`, `body { … }`) from within React render. These globals leak across the whole app, are duplicated across components, and can cause specificity/override surprises.
- **Evidence:** e.g. `src/components/services/service1File/Info.jsx:44-325` (global `*`, `html, body`, `body` rules inside a component `<style>`).
- **Suggested fix:** Move global resets to a single stylesheet; scope component styles (CSS modules / scoped classes).

### ISS-015 · Low · Custom-cursor robustness (WorkSection)
- **Description:** WorkSection sets `document.body.style.cursor = 'none'` while showing a JS-driven custom cursor. If the custom-cursor render path fails or lags, the user is left with no visible cursor; it also overrides the pointer globally during hover.
- **Evidence:** `src/components/WorkSection.jsx:90` `document.body.style.cursor = 'none'`.
- **Suggested fix:** Ensure cursor is always restored on unmount/blur (cleanup exists, but add a fallback), and guard against the custom cursor not mounting.

### ISS-016 · Low · Asset filename typo
- **Description:** Image asset is named `serveice1div.png` ("serveice" misspelled). Cosmetic, but propagates into imports.
- **Evidence:** `src/assets/serveice1div.png`, imported in `service1File/Info.jsx:10`.
- **Suggested fix:** Rename to `service1div.png` and update the import (low priority; cosmetic).

### ISS-017 · Low · Build noise
- **Description:** The production build prints a large volume of `"use client" directive … was ignored` warnings from `react-router` and `framer-motion`. Harmless (third-party RSC directives in a non-RSC Vite build) but noisy and can mask real warnings.
- **Evidence:** `npm run build` output — dozens of `Module level directives cause errors when bundled` lines from `node_modules/react-router` and `node_modules/framer-motion`.
- **Suggested fix:** Optionally suppress via Rollup `onwarn` filter for the `MODULE_LEVEL_DIRECTIVE` code to keep the build log readable. No functional impact.

### ISS-018 · Low · Single chunk size
- **Description:** The main JS bundle is ~390 KB (single `index-*.js`). Not alarming, but route-level code-splitting of the heavy service pages would improve first-load on the homepage.
- **Evidence:** `dist/assets/index-*.js` ≈ 390 KB after build.
- **Suggested fix:** Lazy-split the largest service/detail components (some already are); verify route chunks load on demand.

---

## Discovery status

Discovery has reached **diminishing returns**: the latest sweep surfaced only low-severity hygiene items (ISS-014→018) on top of the already-captured content/a11y/SEO/deployment issues. Highest-value items to triage first: **ISS-004** (contact endpoint), **ISS-001** (off-brand homepage footage), **ISS-002** (invisible label), **ISS-005** (SEO/social), **ISS-009** (Framer-hosted fonts). Per audit-mode constraints, none of the above were fixed.
