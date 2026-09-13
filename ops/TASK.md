# TASK P0

TASK ID: P0
REPO: remexstudio/justin-jia
GOAL: Initialize Justin Jia personal site repo — Next.js App Router + TypeScript + Tailwind, English constitution docs, empty route shells only (no polished hero yet), ops loop files, first commit. Recruiter-facing personal site (depth LinkedIn), not a second company site, not a green-wall resume.

ALLOWED FILES:
- package.json, pnpm-lock.yaml, tsconfig.json, next.config.*, postcss.config.*, eslint.config.*, .gitignore
- app/layout.tsx, app/page.tsx (minimal placeholder only), app/globals.css (tokens stub ok)
- app/now/page.tsx, app/path/page.tsx, app/work/page.tsx, app/writing/page.tsx, app/contact/page.tsx (minimal placeholders: title + one line each)
- app/not-found.tsx (minimal English 404)
- README.md (English scaffold)
- AGENTS.md
- docs/brand.md, docs/sitemap.md, docs/design.md
- ops/TASK.md, ops/HANDOFF.md, ops/REVIEW.md, ops/BACKLOG.md, ops/STATUS.md
- public/favicon.ico (or default)

OUT OF SCOPE:
- Polished home hero / CTAs (P1)
- Full /now /path copy (P2)
- /work cards and studio outbound links (P3)
- /writing notes (P4)
- Contact links polish + metadata/OG (P5)
- Motion, a11y polish beyond basic, 404 atelier polish (P6)
- Any change to remexstudio/remex-atelier
- Phone numbers, fake resume PDF, fake job titles, Chinese UI
- Purple gradients, neon SaaS, Inter-template look

ACCEPTANCE:
- [ ] Repo remexstudio/justin-jia builds with `pnpm build`
- [ ] Routes exist (even placeholder): `/` `/now` `/path` `/work` `/writing` `/contact`
- [ ] English README + AGENTS.md + docs/brand.md + docs/sitemap.md + docs/design.md
- [ ] brand.md locks: Justin Jia; Bellevue, Washington; AI Product Manager; hero verbatim; Founder, Remex Studio; contact placeholders; atelier-adjacent human tone; forbids
- [ ] sitemap lists the six routes; design notes paper/ink, no purple/neon; person-not-company
- [ ] ops/BACKLOG lists P0–P6; ops/STATUS phase P0; ops/HANDOFF filled
- [ ] No Chinese in ship surfaces; no link from this site claiming studio inbound (studio must not link here — N/A this repo)
- [ ] Commit message exact: `chore(repo): initialize personal site`

SKILLS TO USE (read before code):
- frontend-design
- emil-design-eng
- apple-design (always for any UI touch)
- writing-guidelines
- web-design-guidelines
- Next.js App Router skills as needed

COMMIT MESSAGE: chore(repo): initialize personal site

CONTENT LOCKS (seed into docs only this slice):
- Hero (verbatim, for later P1): I design AI agents as products — after years building the systems they have to live on.
- Sub: Founder, Remex Studio.
- Email: hello@remexstudio.com
- LinkedIn: https://www.linkedin.com/in/justin-jia (label placeholder)
- X: @QinlinJ (text ok)
- GitHub: https://github.com/qinlinj and https://github.com/remexstudio
- Studio outbound later: https://remex-atelier.vercel.app (and study paths)
