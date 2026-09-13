# Design

## Direction

Paper and ink. Person, not company. The home page reads as a letter: one voice, one measure, quiet chrome. Recruiter-facing, not a studio landing.

## Palette

| Token | Role | Hex |
| --- | --- | --- |
| `--paper` | Page ground | `#f7f4ef` |
| `--paper-shade` | Recessed surface | `#efebe4` |
| `--ink` | Primary text and focus | `#1a1917` |
| `--ink-muted` | Role, founder line, quiet chrome | `#5c5954` |
| `--ink-faint` | Reserved tertiary | `#8a857c` |
| `--rule` | Hairline when a division is needed | `#d9d4cb` |

Aliases: `--background` → paper, `--foreground` → ink. Tailwind maps `bg-paper`, `text-ink`, `text-ink-muted`, `text-ink-faint`, `border-rule`.

Focus uses ink, not a colored accent. No purple. No neon. No dark-mode SaaS gradient kits. `prefers-contrast: more` lifts paper to white and ink to black.

## Type

One family: Literata. A reading serif with optical sizing. The page should feel written, not assembled from a display face plus a UI sans.

| Role | Class | 375 intent | 1280 intent |
| --- | --- | --- | --- |
| Lede | `.letter-lede` | 1.375rem, leading 1.28, measure wraps the locked sentence | 2rem, same leading, max ~28ch |
| Name | `.letter-name` | 1.25rem, weight 500 | same |
| Role | `.letter-role` | 1rem, muted | same |
| Nav | `.site-nav` | 0.9375rem, wraps to a second line | one row, opposite the name |
| Quiet | `.letter-quiet` | 0.9375rem, muted | same |

Body sits at 1.0625rem / 1.6. Tracking tightens only on the lede (`-0.018em`). Nav is sentence case, not tracked capitals.

Fallback: `ui-serif, Georgia, Iowan Old Style, Palatino`. Do not load Inter or Geist.

## Layout

Single column, `max-w-2xl`, left aligned. Horizontal inset `1.5rem` (`px-6`), plus safe-area padding on the header and footer. Home is a letterhead (name, role), then the locked lede, then the founder line and two text paths. No card grid. No centered splash.

At 375 the nav wraps under the name. At 1280 the name and the five routes share one baseline.

## Motion

P1 keeps motion to press and hover. Press scales a CTA to `0.97` over 160ms with `--ease-out`. Hover is gated behind `@media (hover: hover) and (pointer: fine)`. `prefers-reduced-motion: reduce` drops transform. Broader motion waits for P6.

## Accessibility

- Skip link targets `#main`
- `:focus-visible` ink ring, 2px / 3px offset, on links
- `lang="en"`
- `aria-current="page"` on the matching nav item
- Brand names use `translate="no"`

## Forbids

- Purple, neon, or glassmorphism for its own sake
- Card grids with identical soft shadows
- Tracked all-caps eyebrows as chrome
- Skill bars, scorecards, fake percentages
- Chinese on ship UI
- Cloning remex-atelier wordmark, Newsreader lockup, or primary button
