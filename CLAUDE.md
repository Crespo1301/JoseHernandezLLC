# CLAUDE.md

Repo role: mockup or proposal repo for a client or lead, not a main maintained production surface right now.

## Business Context

- Treat this repo as a sales or template asset.
- Shared workflow rules live in `/home/cresp3/Portfolio/AI-WORKFLOW.md`.
- Do not give this repo the same priority as `Portfolio` or real maintained client sites unless asked.

## Claude Role Here

- Use Claude for concepting, page structure, copy direction, and polished pitch visuals.
- Let Codex handle implementation if this repo gets selected for active build-out or template reuse.

## Working Notes

- Next.js Pages Router site with `translations/` for i18n.
- This repo should not be treated as business-critical production by default.

## Useful Commands

```bash
npm run dev
npm run build
npm run start
npm run stitch:init
npm run stitch:doctor
npm run stitch:proxy
```

## Shared AI Tooling

- Follow `AI-WORKFLOW.md` for the shared CSolutions AI stack.
- Use repo-local `.claude/skills/` for `code-review-graph`, `Impeccable`, and `mattpocock/skills` workflows.
- Use `.mcp.json` with `code-review-graph` after running `code-review-graph build` so exploration and reviews stay token-efficient.
- Use OpenSpec for larger changes that benefit from proposal, spec, and task artifacts.
