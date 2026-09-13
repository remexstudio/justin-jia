# TASK P2

TASK ID: P2
REPO: remexstudio/justin-jia
GOAL: Ship `/now` and `/path` copy. Present tense on /now; four-beat path narrative. Person-not-company. English only.

ALLOWED FILES:
- app/now/page.tsx
- app/path/page.tsx
- components/** (only if shared section helpers needed for these pages)
- docs/sitemap.md (mark now/path shipped)
- ops/HANDOFF.md, ops/STATUS.md, ops/BACKLOG.md (handoff only)

OUT OF SCOPE:
- /work cards (P3), /writing (P4), /contact polish (P5), motion/404 (P6)
- Invented employers, exact dates, fake metrics, phone, Chinese UI
- Selling cloud-migration outsourcing
- Changes to remexstudio/remex-atelier
- Home hero changes (locked)

ACCEPTANCE:
- [ ] `/now`: present tense — building Remex Studio (机羽云 may appear only in docs if needed; **English UI**: say Remex Studio); looking for AI PM roles; explicitly not selling cloud-migration outsourcing
- [ ] `/path`: four beats without invented employers/dates:
  1. Engineer shipping product
  2. Cloud and microservices (permissions / cost / operability)
  3. Consultative brief intake
  4. Why AI Product Manager
- [ ] No skill bars; short specific English; atelier-adjacent human tone
- [ ] `pnpm build` passes; headings + readable measure
- [ ] Commit: `feat(site): add now and path`

SKILLS TO USE (read before code):
- frontend-design
- emil-design-eng
- apple-design (always)
- writing-guidelines
- web-design-guidelines

COMMIT MESSAGE: feat(site): add now and path

COPY NOTES:
- Chinese 机羽云 must not appear in UI; Remex Studio is the English lockup.
- Do not name real past employers or invent tenure dates.
