# TASK P3

TASK ID: P3
REPO: remexstudio/justin-jia
GOAL: Ship `/work` with four selected-work cards. Each card: Problem / Constraints / What shipped / Next cut. Frame as **Product work directed at Remex Studio**. Outbound link each card to the matching studio study. Never write “Lead PM at Lumen Atelier” or similar fake titles.

ALLOWED FILES:
- app/work/page.tsx
- components/** (work card helpers only if needed)
- docs/sitemap.md (mark /work shipped)
- ops/HANDOFF.md, ops/STATUS.md, ops/BACKLOG.md (handoff only)

OUT OF SCOPE:
- /writing (P4), /contact polish (P5), motion/404 (P6)
- Fake employment titles; phone; Chinese UI; skill bars
- Changes to remexstudio/remex-atelier
- Health-monitoring as a work card (that belongs in /writing as prototype later if at all)

ACCEPTANCE:
- [ ] Four cards with Problem / Constraints / What shipped / Next cut
- [ ] Framing line on page or each card: Product work directed at Remex Studio (not employment claims)
- [ ] Card 1 — Beauty try-on to checkout (GTSP lineage) → outbound https://remex-atelier.vercel.app/work/lumen-atelier
- [ ] Card 2 — Warehouse knowledge with approval gates (CloudCrafters lineage) → https://remex-atelier.vercel.app/work/northline
- [ ] Card 3 — Morning brief, not a dashboard (Twitter analytics lineage) → https://remex-atelier.vercel.app/work/kite
- [ ] Card 4 — Ecommerce exception queue (Spring Cloud lineage) → https://remex-atelier.vercel.app/work/paperline
- [ ] Kafka / DeFiner may appear as **one** capability line on card 3 **or** 4 only — not a fifth card
- [ ] Do not print real brand logos; anonymized study language OK; link text clear
- [ ] `pnpm build` passes; readable at 375/1280 intent
- [ ] Commit: `feat(work): add selected work and studio outbound links`

SKILLS TO USE (read before code):
- frontend-design
- writing-guidelines
- apple-design (always for UI)
- emil-design-eng (layout craft)
- web-design-guidelines

COMMIT MESSAGE: feat(work): add selected work and studio outbound links

COPY LOCKS:
- No “Lead PM at …” / no fake employer tenure
- CloudCrafters / GTSP / Twitter analytics / Spring Cloud are **lineage hints for the writer**, not client logos to plaster; keep public copy product-focused and anonymized where needed
