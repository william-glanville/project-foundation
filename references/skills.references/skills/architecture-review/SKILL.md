---
name: architecture-review
description: Review a design, module boundary, contract, layout, or implementation plan against AGENTS.md, Accepted ADRs, and the L0-L6 responsibility model.
---
# Architecture Review

## Required reading
1. `AGENTS.md`
2. `docs/ADR/INDEX.md` and applicable Accepted ADRs
3. `docs/architecture/INDEX.md` and relevant architecture documents
4. Affected contracts, source, and tests

## Start with
```text
Task:
Evidence classification:
Owning layer:
Immediate consumer:
Applicable ADRs:
Transition contracts:
Non-responsibilities:
Acceptance evidence:
```

## Rules
- Assign one primary owning layer to each material artifact.
- Separate structure, mechanism, capability, policy, behaviour, and intent.
- Treat emergent behaviour as out of scope until explicitly required.
- Reject speculative abstractions without a current consumer.
- Stop on conflicts with Accepted ADRs or materially ambiguous ownership.
- Recommend the smallest correction that restores the accepted boundary.

## Output
Report boundary compliance, ADR compliance, responsibility leakage, unjustified artifacts, emergent scope, missing transition contracts, clarification required, and validation evidence. Do not edit code unless explicitly requested.
