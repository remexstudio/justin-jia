# HANDOFF — P3

## DEV verdict

**PASS**

## SHA

(stamp after commit)

## Skills used

- frontend-design (letter measure continuity; stacked rule sections instead of SaaS card grid/shadows; no tracked eyebrows or skill bars; Literata hierarchy matches /now /path)
- emil-design-eng (reuse existing `.cta` press/hover; no entrance stagger; no decorative motion on content)
- apple-design (readable leading/measure ~42ch, sentence-case labels, focus via shared chrome, reduced-motion already on CTAs)
- writing-guidelines (active voice; no em dashes; no easy/simple/quick; no Lead PM / fake tenure; clear outbound anchor text)
- web-design-guidelines (semantic `h1`/`h2`/`dl`/`article`, `rel="noopener noreferrer"` + `target="_blank"` on outbound studies, `translate="no"` on Remex Studio)

## What shipped

- `/work`: four selected-work cards (Problem / Constraints / What shipped / Next cut)
- Page framing: Product work directed at Remex Studio (studio studies, not employment claims)
- Card 1 Beauty try-on to checkout → lumen-atelier
- Card 2 Warehouse knowledge with approval gates → northline
- Card 3 Morning brief, not a dashboard → kite
- Card 4 Ecommerce exception queue → paperline
- One Kafka capability line on card 4 only
- Clear outbound link text: View studio study
- `docs/sitemap.md` marks `/work` P3 shipped
- Ops backlog/status/handoff updated

## Acceptance

- [x] Four cards with Problem / Constraints / What shipped / Next cut
- [x] Framing: Product work directed at Remex Studio (not employment)
- [x] Card 1 → https://remex-atelier.vercel.app/work/lumen-atelier
- [x] Card 2 → https://remex-atelier.vercel.app/work/northline
- [x] Card 3 → https://remex-atelier.vercel.app/work/kite
- [x] Card 4 → https://remex-atelier.vercel.app/work/paperline
- [x] Kafka capability line on card 4 only (not a fifth card)
- [x] No real brand logos; anonymized product language; clear link text
- [x] `pnpm build` passes; measure readable at 375/1280 intent (`max-w-2xl`, ~42ch)
- [x] Commit: `feat(work): add selected work and studio outbound links`

## Risks / blockers

- **Preview**: Vercel project still unlinked; Leader visual review may need local or later deploy.
- Card 2 public title follows TASK warehouse framing while the studio study titles as ledger clerk; content aligns on citations + Propose/Approve gates.
- Outbound studies open in a new tab; if Leader prefers same-tab, one-line change.

## Out of scope (confirmed untouched)

- remex-atelier
- Home /now /path chrome beyond consuming shared header/footer
- /writing, /contact polish, motion/404 (P4–P6)
- Phone, Chinese UI, purple/neon, skill bars, fake metrics, Lead PM titles
