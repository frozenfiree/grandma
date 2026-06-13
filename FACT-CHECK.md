# FACT-CHECK — Launch Accuracy Audit

> Scope: catalogs every **factual** value on the site that needs human confirmation
> before public launch. **No values here have been changed, guessed, or invented.**
> The two *confirmed* changes (service1 "GTM OS"→"Gaandiva OS"; homepage portfolio
> cards → the 4 real projects) were implemented separately — see the commit.
> Items below remain **unchanged**, pending your confirmation.

**Legend — Blocks launch?** `P0` = fix before public launch (inaccurate/credibility) ·
`P1` = should fix soon · `P2` = post-launch.

---

## 1. Brand domain — INCONSISTENT (3 variants)

| Current value | File : line | Recommended action | Blocks? |
|---|---|---|---|
| `grandmashive.com` / `www.grandmashive.com` | `netlify.toml:10–11` (canonical redirect) | This appears to be the canonical domain. | — |
| `GRANDMASHIVE.COM` (footer button label) | `src/components/Footer.jsx:362` | Matches `.com` canonical. | — |
| `hello@grandmahives.co` | `src/components/Footer.jsx:298` | **Conflicts** — different spelling (`grandmahive**s**.co`). | **P0** |
| `hello@grandmashive.co` | `src/components/Footer.jsx:319, 341` | **Conflicts** — `.co` vs `.com`. | **P0** |

**Decision needed:** confirm canonical domain (`grandmashive.com` per netlify/footer) and the real inbox, then all three email strings should align. *Not changed — need the authoritative email address.*

## 2. Email addresses

| Current value | File : line | Recommended action | Blocks? |
|---|---|---|---|
| `hello@grandmahives.co` (Ahmedabad block) | `Footer.jsx:298` | Replace with confirmed canonical email. | **P0** |
| `hello@grandmashive.co` (Pune block) | `Footer.jsx:319` | Replace with confirmed canonical email. | **P0** |
| `hello@grandmashive.co` (Wilmington block) | `Footer.jsx:341` | Replace with confirmed canonical email. | **P0** |

**Decision needed:** the single correct address (e.g. `hello@grandmashive.com`?). *Not changed.*

## 3. Phone numbers — likely placeholders

| Current value | File : line | Issue | Recommended action | Blocks? |
|---|---|---|---|---|
| `+52 33 3815 5238` (Ahmedabad) | `Footer.jsx:300` | **+52 = Mexico** country code on an **India** office. | Replace with real IN number, or remove phone line. | **P0** |
| `+1 510 592 8806` (Pune) | `Footer.jsx:321` | **+1 = USA/California** on an **India** office; also duplicated. | Replace or remove. | **P0** |
| `+1 510 592 8806` (Wilmington) | `Footer.jsx:343` | Duplicate of the Pune number. | Replace with real DE number, or remove. | **P0** |

**Decision needed:** correct numbers per office, OR confirm "remove phone lines." *Not changed.*

## 4. Insights metrics — UNVERIFIED

| Current value | File : line | Recommended action | Blocks? |
|---|---|---|---|
| `150+` Research Papers | `src/components/InsightPage.jsx:112–113` | Keep only if substantiated; else remove stat band. | **P0** |
| `50K+` Active Readers | `InsightPage.jsx:117–118` | Same. | **P0** |
| `24+` Industry Reports | `InsightPage.jsx:122–123` | Same. | **P0** |
| `15` Expert Contributors | `InsightPage.jsx:127–128` | Same. | **P0** |

**Decision needed:** real figures to keep, or "remove the band." *Not changed.*

## 5. Award / credential wording — UNVERIFIED

| Current value | File : line | Recommended action | Blocks? |
|---|---|---|---|
| `TOP / DIGITAL DESIGN / AGENCY` (award-styled block) | `src/components/Footer.jsx:352–356` | "DIGITAL DESIGN AGENCY" is an accurate self-descriptor; **"TOP"** is an unverified superlative — drop "TOP" or cite the award. | **P0** |
| `★★★★★` award stars | `Footer.jsx:358` | **Already commented out** — no action. | — |
| `GRANDMASHIVE.COM` award button | `Footer.jsx:362` | Fine once domain confirmed (#1). | P1 |

**Decision needed:** drop "TOP" (recommended), remove the block, or substantiate. *Not changed.*

## 6. Podcast status

| Current value | File : line | Recommended action | Blocks? |
|---|---|---|---|
| "Our stuido is warming up. Launching soon!" + category `COMING SOON` | `src/components/WorkPage.jsx:21` | Confirm whether Podcast Studio is live (drop "Coming Soon") or genuinely upcoming. Also note **typo**: "stuido" → "studio". | **P1** |

> Note: this same existing copy is now also reused on the homepage Gaandiva/Podcast card (verbatim, not invented). Status + typo pending your call.

**Decision needed:** live or coming-soon? Fix typo? *Not changed.*

## 7. Simplified Management — NO COPY EXISTS

| Field | Current value | Recommended action | Blocks? |
|---|---|---|---|
| Description | **none — 0 references anywhere in repo** | Provide a one-line, factual description. | **P0** (card is title-only without it) |
| Category | none | Provide a category label (e.g. the kind of engagement). | **P0** |
| Link / destination | none | Provide destination URL (interim: links to `/work`). | P1 |

> Implemented this pass: the homepage card exists with the **confirmed title "Simplified Management"** but **empty description/category** (nothing invented) and an **interim link to the existing `/work` route**. Needs your copy before public launch.

## 8. Final destination URLs for portfolio cards — UNCONFIRMED

| Card | Interim link used (existing route) | File : line | Recommended action | Blocks? |
|---|---|---|---|---|
| Gaandiva OS | `ROUTES.SERVICE_1` (the existing Gaandiva page) | `src/components/WorkSection.jsx` | Confirm final destination. | P1 |
| Simplified Management | `ROUTES.WORK` (interim) | `WorkSection.jsx` | Needs real destination. | P1 |
| GTM Publications | `ROUTES.WORK_WING` (mirrors `/work` mapping) | `WorkSection.jsx` | Confirm. | P1 |
| Podcast Studio | `ROUTES.WORK_SWISHER` (mirrors `/work` mapping) | `WorkSection.jsx` | Confirm. | P1 |

> Interim links reuse **existing internal routes only** (no invented URLs). Final destinations pending.

---

## Summary

- **P0 (block public launch):** unify domain (#1), correct/remove emails (#2) & phones (#3), verify/remove Insights metrics (#4), de-claim "TOP" (#5), provide Simplified Management copy/category (#7).
- **P1:** podcast status + typo (#6), confirm final card destinations (#8), domain on footer button.
- **P2:** none new.

**All items above are documented and left UNCHANGED**, exactly as instructed. Only the two confirmed changes were implemented.
