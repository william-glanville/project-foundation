---
name: architecture-review
description: Review a design, module boundary, contract, layout, or implementation plan against accepted objectives, contracts, ADRs, and responsibility boundaries. Use for architecture conformance, boundary, minimality, and dependency reviews.
---
# Architecture Review

## Required reading

Read `docs/governance/TASK_DECLARATION_STANDARD.md`, `AGENTS.md`, accepted objectives, canonical vocabulary, applicable contracts and ADRs, `docs/architecture/RESPONSIBILITY_MODEL.md`, relevant architecture documents, source, and tests.

Complete the task declaration before analysis or editing.

## Review rules

- Assign one primary owner or layer to each material artifact.
- Separate primitive, structure, mechanism, capability, policy, behaviour, and intent.
- Distinguish what an artifact owns from what it merely enables.
- Require a current accepted objective and immediate consumer for new artifacts or abstractions.
- Apply creation, removal, duplication, expansion, and simplicity tests.
- Treat possible emergent behaviour as out of scope until selected by accepted authority.
- Identify missing or bypassed transition contracts.
- Stop on conflicts with Accepted ADRs, accepted contracts, or materially ambiguous ownership.
- Recommend the smallest correction that restores the accepted boundary.
- Do not edit code unless explicitly requested.

## Output

Report boundary compliance, authority compliance, responsibility leakage, unjustified artifacts, speculative scope, missing transitions, evidence gaps, clarifications required, smallest correction, and validation evidence.
