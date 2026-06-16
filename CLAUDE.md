# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

**Mood** is a women's health supplement brand focused on vaginal bacterial wellness. The site is a static frontend (HTML/CSS/JS) — no framework, no build step, no package.json. Files are served directly.

## Installed Agent Skills

Three skills live in `.agents/skills/` and are available via the Claude Code skill system:

- **`frontend-design`** — Invoke for any UI work. It enforces a strict no-generic-AI-aesthetics rule: no Inter/Roboto/Arial, no purple gradients, distinctive typography pairings, intentional motion, and a committed aesthetic direction before a single line of code is written.
- **`meta-pixel`** — Full Meta Pixel implementation reference: base code, all 17 standard events with parameters, click/form tracking patterns, and verification steps. Use any time conversion tracking or Facebook/Meta ad events are involved.
- **`find-skills`** — Searches [skills.sh](https://skills.sh/) for installable agent skill packages. Use when the user asks if a skill exists for a given task, or when a specialized capability might already be packaged.

## Folder Structure

```
assets/       # Images, fonts, icons, video
css/          # Stylesheets
js/           # Scripts
marketing/    # Copy drafts, campaign assets, briefs
```

## Brand Direction

- Audience: women seeking vaginal health / microbiome supplements
- Tone: clean, confident, science-backed but approachable — not clinical, not crunchy
- Design should feel premium and body-positive; avoid generic wellness-brand pastels or pharmaceutical sterility
- All frontend work should go through the `frontend-design` skill for aesthetic consistency
