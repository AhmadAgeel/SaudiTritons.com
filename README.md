# SaudiTritons.com Redirect (Next.js)

This is a minimal Next.js project deployed on Vercel.

## Why this setup

- Avoids `vercel.json` parser edge-cases in dashboard imports.
- Vercel auto-detects Next.js reliably.
- Permanent redirect logic is in `next.config.mjs`.

## Redirect behavior

All routes on `sauditritons.com` permanently redirect to `https://sauditritons.org` while preserving path and query.

Examples:

- `https://sauditritons.com/` -> `https://sauditritons.org/`
- `https://sauditritons.com/invite/abc123` -> `https://sauditritons.org/invite/abc123`

## Deploy

1. Import this repo in Vercel.
2. Framework preset should auto-detect as Next.js.
3. Add domains:
   - `sauditritons.com`
   - `www.sauditritons.com`
