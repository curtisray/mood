# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

**Mood** is a women's health supplement brand focused on vaginal bacterial wellness. The site is a static frontend (HTML/CSS/JS) — no framework, no build step, no package.json. Files are served directly.

## Installed Agent Skills

Four skills are available via the Claude Code skill system (three in `.claude/skills/`, one global):

- **`frontend-design`** — Invoke for any UI work. It enforces a strict no-generic-AI-aesthetics rule: no Inter/Roboto/Arial, no purple gradients, distinctive typography pairings, intentional motion, and a committed aesthetic direction before a single line of code is written.
- **`meta-pixel`** — Full Meta Pixel implementation reference: base code, all 17 standard events with parameters, click/form tracking patterns, and verification steps. Use any time conversion tracking or Facebook/Meta ad events are involved.
- **`vercel-react-best-practices`** — Vercel Engineering's React/Next.js performance rules covering async patterns, bundle optimization, re-render prevention, and server component best practices.
- **`find-skills`** _(global)_ — Searches [skills.sh](https://skills.sh/) for installable agent skill packages. Use when the user asks if a skill exists for a given task, or when a specialized capability might already be packaged.

## Folder Structure

```
assets/       # Images, fonts, icons, video
css/          # Stylesheets
js/           # Scripts
marketing/    # Copy drafts, campaign assets, briefs
```

## Brand Identity

Brand kit lives in `assets/Mood Brand Kit.dc.html`.

**Parent brand:** by Danchel  
**Tagline:** "Feel good, down there."

### Logo
Lowercase serif wordmark in Newsreader Medium, with an SVG arc smile beneath the "oo". Rules: don't rotate, don't swap the font, don't use off-brand colors, don't track out. Clear space = cap height of "m".

### Colors
| Token | Hex | Role |
|---|---|---|
| Petal Coral | `#F2867E` | Brand base |
| Mood Red | `#DE1C36` | Accent / CTA |
| Garnet | `#9E1B3A` | Depth / clinical |
| Blush | `#FBD9DC` | Soft fills |
| Cream | `#FFF7F4` | Page background |
| Greige | `#ECE6DF` | Surface / neutral |
| Aubergine Ink | `#3A1418` | Body text |
| Mauve Gray | `#8A6A6C` | Secondary text |

Usage ratio: ~54% cream, ~24% coral, ~14% red, ~8% ink. Lead with cream and coral; reserve red for CTAs only.

### Typography
- **Newsreader** (Google Fonts) — display, headlines, voice, logo
- **Hanken Grotesk** (Google Fonts) — body copy, labels, supplement facts

| Role | Spec |
|---|---|
| Display | Newsreader Medium 60px, -0.02em |
| Headline | Newsreader Medium 38px, -0.01em |
| Subhead | Newsreader Italic 23px |
| Body | Hanken Grotesk Regular 17px / 1.6 |
| Label | Hanken Grotesk Semibold 12px, 0.34em, uppercase |
| Caption | Hanken Grotesk Medium 13px |

All tokens are defined as CSS custom properties in `css/main.css`.

## Brand Direction

- Audience: women seeking vaginal health / microbiome supplements
- Tone: clean, confident, science-backed but approachable — not clinical, not crunchy
- Design should feel premium and body-positive; avoid generic wellness-brand pastels or pharmaceutical sterility
- All frontend work should go through the `frontend-design` skill for aesthetic consistency
