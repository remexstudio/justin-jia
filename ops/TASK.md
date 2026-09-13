# TASK P1

TASK ID: P1
REPO: remexstudio/justin-jia
GOAL: Ship home layout and hero for Justin Jia personal site. Recruiter-facing, person-not-company. Atelier-adjacent but more human — not a copy-paste of remex-atelier.

ALLOWED FILES:
- app/page.tsx
- app/layout.tsx
- app/globals.css
- components/** (new shared chrome/nav/footer if needed for home)
- docs/design.md (expand tokens/type if home requires)
- docs/sitemap.md (mark home as P1 shipped)
- ops/HANDOFF.md, ops/STATUS.md, ops/BACKLOG.md (handoff only)

OUT OF SCOPE:
- Full /now /path copy (P2)
- /work cards (P3), /writing (P4), /contact polish (P5)
- Motion polish / 404 atelier polish (P6)
- Skill bars, scorecards, fake metrics, phone, Chinese UI
- Any change to remexstudio/remex-atelier
- Purple gradients, neon SaaS, Inter-template look

ACCEPTANCE:
- [ ] `/` shows: name **Justin Jia**; role **AI Product Manager**; hero **verbatim** `I design AI agents as products — after years building the systems they have to live on.`; sub **Founder, Remex Studio.**
- [ ] Outbound link to Remex Studio (https://remex-atelier.vercel.app) — label clear, opens studio; this is outbound only
- [ ] CTAs: **Read the path** → `/path` and **View selected work** → `/work`
- [ ] No skill bars, no report-card / resume checklist UI
- [ ] Site chrome (nav) covers the six routes without clutter; English only
- [ ] Paper/ink tokens expanded enough for home; type roles readable at 375 and 1280 intent
- [ ] `pnpm build` passes; focus-visible on interactive links
- [ ] Commit: `feat(site): add home layout and hero`

SKILLS TO USE (read before code):
- frontend-design
- emil-design-eng
- apple-design (always)
- writing-guidelines
- web-design-guidelines

COMMIT MESSAGE: feat(site): add home layout and hero

COPY LOCKS:
- Hero must match brand.md character-for-character (including the em dash).
- Do not invent employers, dates, or percentages on home.
