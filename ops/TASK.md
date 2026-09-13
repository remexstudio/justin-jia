# TASK P4

TASK ID: P4
REPO: remexstudio/justin-jia
GOAL: Ship `/writing` with **two or three** short English judgment notes (not blog SEO). Specific, opinionated, short.

ALLOWED FILES:
- app/writing/page.tsx
- app/writing/** (optional note routes if preferred; index alone is OK)
- components/** (writing helpers only if needed)
- docs/sitemap.md
- ops/HANDOFF.md, ops/STATUS.md, ops/BACKLOG.md (handoff only)

OUT OF SCOPE:
- /contact polish (P5), motion/404 (P6)
- Long essays, Chinese UI, fake metrics, phone
- Changes to remexstudio/remex-atelier
- Turning health-monitoring into a work claim — if mentioned, label **Prototype** only

REQUIRED NOTES (cover these ideas; titles may vary):
1. When you should **not** build an Agent
2. Approval gates **are** the product
3. How systems experience constrains Agents (optional third if two feel thin; prefer three short over two long)

ACCEPTANCE:
- [ ] `/writing` lists 2–3 English judgment notes with readable bodies
- [ ] Tone: letter / judgment, not LinkedIn listicle or “unleash AI”
- [ ] No fake employment claims; no Chinese UI; no purple/neon chrome
- [ ] `pnpm build` passes
- [ ] Commit: `feat(writing): add two judgment notes`

SKILLS TO USE (read before code):
- frontend-design
- writing-guidelines
- apple-design (always for UI)
- web-design-guidelines

COMMIT MESSAGE: feat(writing): add two judgment notes
