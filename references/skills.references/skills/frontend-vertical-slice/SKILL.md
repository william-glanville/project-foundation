---
name: frontend-vertical-slice
description: Use when implementing or reviewing a React, TypeScript, and Vite frontend vertical slice for the technical tracing application, including API integration, accessible review controls, comparison views, annotations, and component tests.
---

# Frontend Vertical Slice

## Required reading

1. Read `AGENTS.md`.
2. Read `docs/ADR/INDEX.md` and applicable Accepted ADRs.
3. Read `docs/ARCHITECTURE.md`.
4. Read the relevant OpenAPI contract and generated TypeScript DTOs.
5. Inspect the affected feature, page, hooks, API client, and tests.

## Before editing

State:

```text
Task:
Owning layer:
Evidence classification:
Immediate consumer:
Applicable ADRs:
Contract impact:
Non-responsibilities:
Acceptance checks:
```

Stop if the requested UI requires a workflow transition, API field, policy result, or business rule that is not present in an accepted contract. Do not invent the missing backend behaviour.

## Architecture rules

- Use feature-oriented modules.
- Components do not call `fetch` directly.
- Use the feature API client and query or mutation hooks.
- Consume generated API types. Do not create parallel handwritten DTOs.
- The UI may display allowed transitions returned by the API but must not calculate workflow legality.
- Keep comparison rendering separate from workflow policy and review submission.
- Keep transient display state local.
- Introduce shared state only when demonstrated cross-feature ownership requires it and an ADR accepts the change.
- Do not add speculative component frameworks or generic abstraction layers.

## Accessibility rules

Provide:

- semantic landmarks and controls;
- keyboard operation;
- visible focus;
- accessible names and descriptions;
- non-colour status cues;
- announced loading, error, and completion states;
- usable zoom, pan, and comparison alternatives;
- preserved source and trace aspect ratios.

Canvas-only information must have an accessible textual or structured alternative.

## Testing

Add focused Vitest and React Testing Library tests covering public behaviour, accessibility, loading, empty, error, success, stale-response, and permission states relevant to the slice.

Run:

```text
npm run typecheck
npm run lint
npm run test
npm run build
```

Report exact commands and results. Never claim a check ran when it did not.

## Completion report

```text
Files changed:
Layer and responsibility:
Contract impact:
Accessibility checks:
Tests added or changed:
Commands run and exact results:
ADRs affected:
Known gaps:
```
