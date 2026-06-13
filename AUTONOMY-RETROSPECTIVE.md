# AUTONOMY-RETROSPECTIVE

**Project:** Grandma's Hive website (`frozenfiree/grandma`) — converting a forked Strange Pixels Framer template into a credible services-company site.
**Author:** Claude (audit mode)
**Date:** 2026-06-13
**Purpose:** Analyze the full delivery arc to improve autonomy on future website projects — what slowed us down, what should have been automated, what belongs in a reusable Atlas/OpenClaw workflow, what to do differently, and which guardrails would reduce founder intervention.

---

## 1. What slowed delivery

**1.1 Direction discovered by rejection, not by spec.** The largest time sink was the visual-system loop: CGI/neon was tried and rejected ("the top image is black"), a `BrandGraphic` diagram experiment was built and rejected ("too sterile, diagrammatic"), portrait clips were repeatedly placed in landscape slots and rejected, and skate/lifestyle/crowd footage kept reappearing. Each rejection cost a full source→encode→render→review cycle. The acceptance criteria ("real, relevant, distinct, bright-hero footage; no CGI; no line-graphics; no lifestyle") existed only *after* enough things had been rejected to triangulate them.

**1.2 Positioning ambiguity surfaced mid-build.** Whether the four business units (Gaandiva, Simplified, GTM, Podcast) were *owned products* or *portfolio/proof* was resolved only after components had already been written assuming the former. The same applied to "repositioning vs. launch" — clarified as "optimize for launch, treat current design as approved" only after strategy churn. Copy, card framing, and CTAs had to be reworked once positioning was pinned.

**1.3 Strategy-document churn.** A series of strategy/spec markdown files (VISUAL-DIRECTION, ASSET-AUDIT, ASSET-REPLACEMENT-SPEC, FACT-CHECK, GROUP-B-\*) accumulated before execution. The founder eventually had to say "stop creating strategy documents and begin execution." Planning was real work, but it outran the agreed scope of decision-making.

**1.4 Toolchain dead-ends in the sandbox.** Real wall-clock was lost to environment constraints: Netlify deploy had no `NETLIFY_AUTH_TOKEN`; `cloudflared` tunneling was blocked by egress policy (port 7844); Playwright's bundled Chromium **cannot decode H.264**, so the first video renders came out black until Google Chrome stable was installed; and the sandbox's TLS MITM produced `ERR_CERT_AUTHORITY_INVALID` on external URLs until `ignoreHTTPSErrors` was set. Each was diagnosed from scratch.

**1.5 Media optimization deferred to the end.** Assets were sourced and committed at full size; the site shipped at ~169 MB of `dist` media before a single optimization pass cut it to ~77 MB (−59%). Doing this once at the end meant large files were committed, reviewed, and rendered repeatedly at full weight throughout the build.

**1.6 De-Framering was component-by-component archaeology.** The template carried dummy assets, Framer-CDN media, obfuscated route names (`WORK_FANTOM`, `WORK_SWISHER`), dead components, and global CSS injected from inside render. Each component had to be read, understood, and de-templated individually, with no manifest of what was real vs. placeholder.

---

## 2. What could have been automated

- **Media optimization as a build/commit gate.** An ffmpeg pass (the CRF-31 / max-1440 / strip-audio / faststart recipe in `MEDIA-OPTIMIZATION-LOG.md`) should run automatically on any committed `*.mp4`/`*.png` over a size threshold, with a pre-commit hook or CI check failing the build if an asset exceeds budget. This entire final pass would have been continuous and invisible.
- **Asset-quality QA.** The recurring failures were mechanical and detectable: portrait-in-landscape (probe aspect ratio vs. slot), "black hero" / illegible-title (sample first-frame luminance with `signalstats` YAVG — already used manually), and degradation after compression (extract + diff frames). All three can be scripted as automated checks instead of human review rounds.
- **Dead-code / dead-import detection.** The dead imports (ISS-012), unreachable route (ISS-013), and retired components were all statically detectable. `eslint` (no-unused-vars), `knip`/`depcheck`, and a route-reachability check would have flagged them automatically.
- **Framer-residue scan.** A simple grep gate for `framerusercontent.com`, dummy alt text, and template route names would have caught template residue (ISS-009, ISS-006) at commit time rather than during a late audit.
- **SEO/meta linting.** Missing meta description / OG tags (ISS-005) is a fixed checklist a linter can enforce.
- **Render-and-screenshot harness.** The real-Chrome local render pipeline (static SPA server + Chrome with `--autoplay-policy=no-user-gesture-required`) was rebuilt ad hoc; it should be a one-command harness that screenshots every route for review.

---

## 3. What should become a reusable Atlas/OpenClaw workflow

A packaged **"Template → Credible Site" conversion workflow** with these stages:

1. **Template intake & inventory.** Auto-generate a manifest: every asset (size, dimensions, source — local vs. CDN), every route (reachable vs. dead), every component (rendered vs. dead), and all template residue (Framer CDN URLs, dummy text, obfuscated names). Output = the audit that was done manually here, on day one.
2. **Positioning lock (gate).** A short structured intake the founder fills *before* code changes: what each entity is (product/portfolio/client), brand name, domains, contact details, factual claims. Nothing downstream proceeds until this is answered. (Directly prevents §1.2.)
3. **Visual-direction lock (gate).** Capture acceptance criteria up front as a checklist (footage type, what's banned, hero-luminance rule, orientation rule, per-slot distinctness) plus 2–3 reference frames the founder approves. Drives automated asset QA. (Directly prevents §1.1.)
4. **Asset pipeline.** Source → automated QA (aspect, luminance, distinctness, relevance flag) → optimize (the ffmpeg recipe) → place → render-screenshot. Reusable and idempotent.
5. **Deploy harness.** A pre-flight that checks for required tokens/env vars and known sandbox constraints (H.264-capable browser, egress policy, TLS interception) and picks a working path, instead of discovering each blocker live. (Directly prevents §1.4.)
6. **Pre-ship audit.** The exact three artifacts produced here — `MEDIA-OPTIMIZATION-LOG`, `ISSUE-LOG`, `AUTONOMY-RETROSPECTIVE` — generated semi-automatically as a standard close-out.

The reusable primitives worth extracting first: the **ffmpeg optimization recipe**, the **luminance/orientation asset-QA checks**, the **real-Chrome render+screenshot harness**, and the **template-residue scanner**.

---

## 4. What future website projects should do differently

- **Lock positioning and visual acceptance criteria before touching components.** The two biggest rework sources (§1.1, §1.2) were both "decide late." Front-load them as gates.
- **Treat media budget as a first-class constraint from commit #1.** Optimize on the way in, not at the end (§1.5). Keep `dist` media under an explicit budget continuously.
- **Convert rejections into a written rubric immediately.** The first time footage is rejected, capture the rule ("no skate/crowd/lifestyle; bright hero behind dark type; one distinct clip per slot") so the next attempt is checked against it automatically, not re-litigated.
- **Audit the template once, up front.** Produce the asset/route/component/residue manifest on day one so de-Framering is planned, not discovered (§1.6).
- **Prefer the founder's own deploy path early.** Production ultimately ran on the founder's Vercel project; time spent on Netlify/cloudflared was wasted. Establish the real deploy target before building a render/deploy workaround (§1.4).
- **Keep strategy docs proportional to decision authority.** Write only the spec needed to unblock the next execution step; expand only when the founder asks (§1.3).

---

## 5. Guardrails that would reduce founder intervention

1. **Acceptance-criteria checklist as an automated gate.** Once the visual rubric is captured, assets pass machine checks (aspect ratio, hero luminance, per-slot distinctness, banned-content flags) before a human ever looks — turning multi-round subjective review into a single approval of pre-vetted candidates.
2. **Media budget enforcement.** A hard `dist` media ceiling and per-asset size cap enforced in CI; oversize assets auto-optimized or rejected. Removes the founder from payload concerns entirely.
3. **Pre-commit residue & hygiene gate.** Block commits containing Framer CDN URLs, dummy alt text, template route names, dead imports, or missing SEO meta. Eliminates the entire class of late-audit findings (ISS-005, 006, 009, 011–013).
4. **Render-diff on every change.** Auto-screenshot every route before/after and surface a visual diff, so regressions (e.g. the invisible black-on-black label, ISS-002) are caught by the agent, not reported by the founder.
5. **A "facts requiring confirmation" queue.** When a change depends on a fact only the founder knows (a claim, a domain, product-vs-portfolio), the agent batches these into one decision list and pauses *that item only* — rather than guessing (which caused rework) or stopping the whole build. The founder answers a short list once instead of correcting output repeatedly. (This pattern was used successfully late in the project and should be the default.)
6. **Deploy pre-flight.** Verify tokens, env vars (e.g. `RESEND_API_KEY`, `MONGO_URI` — see ISS-004), and environment capabilities before attempting a deploy, so the founder isn't pulled in to unblock infrastructure mid-flight.

---

## Closing note

The project succeeded — a forked template became a coherent, motion-first, services-positioned site with a 59% lighter media payload — but most founder interventions were **preventable with front-loaded criteria and mechanical gates.** The single highest-leverage change for the next project is to convert the subjective review loop (sections 1.1/1.2) into an up-front rubric enforced by automated checks (sections 3/5). The audit artifacts in this repo (`MEDIA-OPTIMIZATION-LOG.md`, `ISSUE-LOG.md`, and this file) are the prototype close-out package that the reusable workflow should generate by default.
