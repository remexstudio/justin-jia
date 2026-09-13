# HANDOFF — P1

## DEV verdict

**PASS**

## SHA

Pending stamp after `feat(site): add home layout and hero`.

## Skills used

- frontend-design (letter layout, Literata, one memorable lede, no Inter/card/eyebrow defaults)
- emil-design-eng (press scale 0.97, explicit transitions, hover behind fine pointer, no entrance cascade)
- apple-design (system-adjacent optical sizing, skip link, reduced-motion, size-specific tracking, safe areas)
- writing-guidelines (locked hero only; no invented titles or metrics; English UI)
- web-design-guidelines (semantic header/nav/main/footer, focus-visible, Link for internal CTAs, skip to `#main`)

## What shipped

- Home letter: name, role, locked hero (em dash), founder line, two CTAs
- Outbound Remex Studio → https://remex-atelier.vercel.app
- Shared chrome: skip link, six-route nav, Bellevue footer
- Paper/ink tokens and type roles expanded in CSS and `docs/design.md`
- Sitemap marks `/` as P1 shipped

## Acceptance

- [x] `/` shows name Justin Jia; role AI Product Manager; hero verbatim including em dash; sub Founder, Remex Studio.
- [x] Outbound link to https://remex-atelier.vercel.app labeled Remex Studio
- [x] CTAs: Read the path → `/path`; View selected work → `/work`
- [x] No skill bars, scorecards, or fake percentages
- [x] Nav covers the six routes; English only; focus-visible on links
- [x] Paper/ink tokens expanded; type readable at 375 and 1280 intent
- [x] `pnpm build` passes
- [x] Commit message: `feat(site): add home layout and hero`
- [x] Person-not-company; Literata letter, not remex-atelier chrome

## Risks / blockers

- **Preview**: Vercel project may still be unlinked; no preview URL in this slice. Visual Leader review may need a local or later deploy.
- Stub routes (`/now` `/path` `/work` `/writing` `/contact`) now sit under shared chrome; their inner padding is unchanged until later phases.
- Motion polish remains P6.

## Out of scope (confirmed untouched)

- remex-atelier
- Full /now /path copy, work cards, writing, contact polish, 404 motion
- Phone, Chinese UI, purple/neon, skill bars
