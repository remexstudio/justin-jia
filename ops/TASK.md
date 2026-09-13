# TASK P6

TASK ID: P6
REPO: remexstudio/justin-jia
GOAL: Final polish — restrained motion, a11y pass, atelier-adjacent 404, production README sanity, redeploy preview if needed. Close personal DoD.

ALLOWED FILES:
- app/globals.css
- app/not-found.tsx
- app/layout.tsx (a11y only if needed)
- components/** (motion/a11y polish only)
- README.md (production English README complete)
- docs/design.md, docs/sitemap.md
- ops/HANDOFF.md, ops/STATUS.md, ops/BACKLOG.md (handoff; mark P6 done; DoD self-check)
- No new routes

OUT OF SCOPE:
- New pages or content rewrites beyond polish
- Changes to remexstudio/remex-atelier (must remain without personal inbound links)
- Phone, fake PDF, Chinese UI, purple/neon
- Decorative entrance cascades

ACCEPTANCE:
- [ ] Motion: transform/opacity only; ease-out; press/hover restrained; `prefers-reduced-motion` respected site-wide
- [ ] `:focus-visible` on interactive controls; skip link works
- [ ] 404 English, matches letter tone (not bare create-next stub)
- [ ] Six routes + not-found build; smoke locally; live alias still green after redeploy if you push prod
- [ ] README production-ready: stack, routes, voice, preview URL, deploy caveat, contact placeholders
- [ ] DoD self-check table in HANDOFF (six routes English; real name; hero verbatim; studio outbound only; no fake titles; 375/1280 intent; English README)
- [ ] Commit: `feat(site): motion a11y 404 and polish`

SKILLS TO USE (read before code):
- review-animations
- webapp-testing
- web-design-guidelines
- apple-design (always)
- emil-design-eng
- frontend-design

COMMIT MESSAGE: feat(site): motion a11y 404 and polish
