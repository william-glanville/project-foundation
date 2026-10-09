---
name: adr-authoring
description: Create, review, reject, accept, or supersede Architecture Decision Records under docs/ADR.
disable-model-invocation: true
---
# ADR Authoring

## Required reading
1. `AGENTS.md`
2. `docs/ADR/INDEX.md`
3. Applicable ADRs
4. `docs/ADR/ADR-000-Template.md`
5. Affected architecture and contracts

## Rules
- Confirm the matter is architectural before creating an ADR.
- Use the next unused number and `ADR-###-The-Title.md`.
- Start as Proposed unless the decision owner explicitly accepts it.
- One focused decision per ADR.
- Include owning layer, evidence, immediate consumers, alternatives, non-responsibilities, validation, and traceability.
- Update `docs/ADR/INDEX.md` in the same change.
- Supersede explicitly; never erase decision history.

## Acceptance gate
All mandatory template sections and quality checks must pass before Accepted status.
