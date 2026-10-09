# Frontend Agent Guide

## Scope

React, TypeScript, Vite, API clients, accessible review workflow, comparison presentation, and component tests.

## Rules

- Use feature-oriented modules.
- Consume generated contracts.
- Do not calculate allowed workflow transitions in the browser.
- Do not call `fetch` directly from components.
- Keep comparison rendering separate from policy and review submission.
- Preserve keyboard access, semantic controls, visible focus, labelled statuses, and non-colour cues.
- Add Vitest and React Testing Library coverage for behavior and accessibility.
- Run typecheck separately from Vite build.
- Do not add a global state library until demonstrated cross-feature state requires it and a decision accepts it.
