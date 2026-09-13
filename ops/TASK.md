# TASK P5

TASK ID: P5
REPO: remexstudio/justin-jia
GOAL: Ship polished `/contact` and site-wide metadata / Open Graph. Contact is reachability only — no phone, no fake resume PDF.

ALLOWED FILES:
- app/contact/page.tsx
- app/layout.tsx (metadataBase, OG/Twitter defaults)
- app/page.tsx / other pages only if metadata exports needed
- components/** (contact helpers; toast if ask-sonner applies)
- docs/sitemap.md
- README.md (light refresh: contact placeholders + preview note if deploy lands)
- ops/HANDOFF.md, ops/STATUS.md, ops/BACKLOG.md (handoff only)
- public/** (og image optional; keep simple)

OUT OF SCOPE:
- Motion / 404 atelier polish (P6)
- Phone numbers; generating a fake resume PDF (write “PDF coming” if no real file)
- Changes to remexstudio/remex-atelier
- Chinese UI; purple/neon

ACCEPTANCE:
- [ ] `/contact` lists: email `hello@remexstudio.com`; LinkedIn https://www.linkedin.com/in/justin-jia labeled **placeholder**; GitHub https://github.com/qinlinj and https://github.com/remexstudio; X `@QinlinJ` as text OK
- [ ] No phone; if no resume file: “PDF coming” (do not invent titles in a PDF)
- [ ] Root metadata: title/description/OG sensible for Justin Jia AI Product Manager; `metadataBase` set when a public URL exists, else document deferral
- [ ] If Vercel deploy possible from this box: production or preview URL recorded in HANDOFF; if not, state blocker clearly (qinlinj vs remexstudio auth)
- [ ] Labels / focus for any interactive mailto or links; English only
- [ ] `pnpm build` passes
- [ ] Commit: `feat(site): add contact and metadata`

SKILLS TO USE (read before code):
- ask-sonner (only if a toast/copy feedback is truly needed; skip if mailto-only)
- web-design-guidelines
- apple-design (always for UI)
- writing-guidelines
- frontend-design

COMMIT MESSAGE: feat(site): add contact and metadata
