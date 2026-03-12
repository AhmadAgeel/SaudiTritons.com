# SaudiTritons.com Redirect

This repo is a single-purpose redirect property for `SaudiTritons.com`.

## Behavior

- Permanently redirects all paths on `.com` to `.org`
- Preserves path/query at the edge when deployed on Vercel (`vercel.json`)
- Includes a polished HTML fallback page (`index.html`) for environments without edge redirects

Examples:

- `https://sauditritons.com/` -> `https://sauditritons.org/`
- `https://sauditritons.com/invite/abc123` -> `https://sauditritons.org/invite/abc123`

## Files

- `vercel.json`: 301 edge redirect for all routes
- `index.html`: client-side fallback redirect page with branded UI
- `_redirects`: Netlify-compatible redirect rule
- `assets/`: logo + favicon assets
