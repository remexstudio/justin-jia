# Agents

Guidance for coding agents working in this repo.

## Product

Personal site for Justin Jia. English only on ship surfaces. Person-not-company. Depth to LinkedIn, not a green-wall resume.

Studio (Remex Atelier) is a separate repo. This site may outbound to studio studies later. Studio must not link here.

## Stack

Next.js App Router, TypeScript, Tailwind, pnpm. Prefer App Router conventions. Keep the allowlist in `ops/TASK.md` when a task scopes files.

## Content locks

Read `docs/brand.md` before changing copy. Hero text is verbatim for P1. No phone numbers, fake titles, Chinese UI, purple/neon chrome, or Inter-slop defaults.

## Design

Paper/ink direction in `docs/design.md`. Minimal route shells until the matching backlog phase. No polished hero until P1. No motion polish until P6.

## Ops loop

1. Read `ops/TASK.md` for the active slice
2. Deliver within ALLOWED FILES
3. Fill `ops/HANDOFF.md` with DEV PASS/REWORK, SHA, skills, acceptance, risks
4. Leave Leader review to `ops/REVIEW.md`

## Commands

- `pnpm install`
- `pnpm dev`
- `pnpm build`
- `pnpm lint`

## Do not

- Touch `/workspace/remex-atelier` or `remexstudio/remex-atelier`
- Add Chinese to UI
- Invent job titles or metrics
- Ship purple/neon/template SaaS looks
