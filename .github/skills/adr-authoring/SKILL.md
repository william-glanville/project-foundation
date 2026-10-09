---
name: adr-authoring
description: Create, review, accept, reject, deprecate, or supersede Architecture Decision Records while preserving authority, status, history, and traceability. Use when a consequential architecture decision or ADR lifecycle change is requested.
---
# ADR Authoring

## Required reading

Read `docs/governance/TASK_DECLARATION_STANDARD.md`, `AGENTS.md`, the ADR index and template, applicable ADRs, affected contracts, architecture, workflows, and current evidence.

Complete the task declaration before editing.

## Rules

- Confirm the matter is architectural before creating an ADR.
- Use the repository's identifier and filename convention. Never invent a sequence when the next identifier cannot be established.
- Start as Proposed unless the authorized decision owner explicitly accepts it.
- Keep one focused decision per ADR.
- Include context, decision, status, owner, scope, alternatives, consequences, non-responsibilities, validation, implementation alignment, and traceability.
- Preserve the distinction between evidence, recommendation, proposal, and accepted decision.
- Update the ADR index in the same change.
- Supersede explicitly. Never erase decision history.
- Do not mark a consequential decision Accepted without explicit authority.
- If the request conflicts with an Accepted ADR or contract, stop and report the conflict.

## Acceptance gate

Before Accepted status, verify all mandatory sections, identified consumers, contract impact, security impact, validation evidence, index entry, and supersession links.

## Output

Report the ADR created or changed, status, authority, affected artifacts, rejected alternatives, required follow-up, validation performed, and unresolved decisions. Stop after the requested ADR task.
