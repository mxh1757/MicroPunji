# MicroPunji

Static marketing site for MicroPunji, a private investment management firm. Built as five plain files with no build step, deployed via GitHub Pages.

## Files

- `index.html` — page structure and content
- `index.css` — design system (colors, type, layout) and all styling
- `index.js` — mobile nav toggle, login modal, and contact/login form handling
- `CNAME` — custom domain for GitHub Pages (`www.micropunji.com`)
- `README.md` — this file

## Design

- **Type**: Source Serif 4 for headlines, IBM Plex Sans for UI text, IBM Plex Mono for figures and data (tier prices, stats).
- **Color**: deep ink-navy, cool paper, and a brass accent — a private-banking palette rather than a generic SaaS one.
- **Layout**: the investment tiers are presented as a single comparison ledger (table) rather than three duplicate cards, since that's a more honest reflection of the content (a rate comparison, not three unrelated features).

## Content notes

- Investment tiers: **Foundation** ($50,000), **Momentum** ($100,000), **Apex** ($500,000).
- The client login button opens a demo-only modal — no backend, no real authentication, and no data leaves the browser. This is clearly labeled in the UI.
- The contact form has no backend wired up; it currently shows an inline confirmation message on submit. Connect it to a form service (e.g. Formspree) or your own endpoint before going live.
- Footer and contact copy include a short investment-risk disclaimer. Have this reviewed by counsel before production use — it's a placeholder, not compliance advice.

## Local preview

Open `index.html` directly in a browser, or serve the folder locally:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deployment

This repo is set up for GitHub Pages with a custom domain (see `CNAME`). Push to the branch configured for Pages and the site updates automatically.
