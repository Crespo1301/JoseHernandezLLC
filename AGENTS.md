# AGENTS.md

Guidance for Codex when working in this repo.

## Role

`JoseHernandezLLC` is a paused lead mockup for a handyman-services business. Treat it as a reusable proposal/sales asset unless the lead re-engages.

## Project Shape

- Next.js Pages Router.
- React 18.
- Routes live in `pages/`.
- Shared UI lives in `components/`.
- Language copy lives in `translations/`.

## Commands

```bash
npm install
npm run dev
npm run build
```

The dev server is pinned to port `3005` in `package.json`.

## Working Rules

- Do not treat this as an active paying client unless Carlos explicitly revives it.
- Remove or replace stale lead data before reusing the mockup for another prospect.
- Keep `.agents/`, `.claude/`, `.code-review-graph/`, `.mcp.json`, `.env.ai.local`, `node_modules/`, and `.next/` local-only.
- Commit portable setup files such as `.mcp.example.json`, `.env.ai.example`, `AI-WORKFLOW.md`, and `SECURITY-CHECKLIST.md` when useful.

## Verification

Before pushing changes:

```bash
npm run build
git diff --check
```

## Visual QA

Use the workspace runner at `/home/cresp3/scripts/visual-check.sh` after any layout, responsive, spacing, animation, or visual-polish change. Start the local dev server, capture mobile and desktop screenshots into `.visual-checks/`, and inspect the rendered pixels before calling the work done. See `VISUAL-QA.md`.
