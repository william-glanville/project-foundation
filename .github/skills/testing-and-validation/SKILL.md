---
name: testing-and-validation
description: Design, add, select, review, or run proportionate tests and validation for a bounded change. Use when executable evidence is required or when choosing the lowest sufficient test layer.
---
# Testing and Validation

## Required reading

Read `docs/governance/TASK_DECLARATION_STANDARD.md`, `AGENTS.md`, accepted contracts and ADRs, `docs/development/VALIDATION_GATES.md`, repository commands, affected source, and existing tests.

Complete the task declaration and state the requirement or invariant, test layer, authoritative inputs, expected public result, failure mode, and out-of-scope behaviour.

## Initialization Handling

If `PROJECT_OBJECTIVES.md` does not exist:

1. Read `PROJECT_OBJECTIVES.template.md`.
2. Record that the repository is in initialization state.
3. Do not invent project objectives, non-objectives, technology choices, commands, contracts, or acceptance criteria.
4. Do not proceed with implementation or governed project changes.
5. Recommend project initialization as the next bounded task.

Repository initialization is outside the scope of this skill.

## Select the lowest sufficient layer

Choose only applicable layers:

- unit tests for isolated invariants and pure behaviour;
- contract tests for externally observable interfaces and replaceable implementations;
- application or service tests for orchestration;
- adapter or integration tests for framework and infrastructure mappings;
- storage tests for consistency, concurrency, migration, publication, recovery, and immutability;
- component tests for public UI behaviour and accessibility;
- end-to-end tests for critical cross-boundary paths;
- security tests for validation, access, substitution, replay, unsafe input, and disclosure;
- artifact verification for schemas, references, hashes, lineage, provenance, and signatures.

## Rules

- Characterize accepted behaviour before refactoring unfamiliar code.
- Keep fixtures minimal and identify authoritative values.
- Prefer public behaviour and contracts over private implementation assertions.
- Do not weaken a test to accept changed behaviour.
- If accepted authority is wrong or must change, stop and identify the required contract or decision process.
- Derive commands from repository authority or configuration. Never invent commands.
- Run targeted checks first, then proportionate regression checks.
- Record skipped, quarantined, unavailable, and unrun checks explicitly.
- Never claim execution that did not occur.

## Output

Report tests added or changed, layers selected, commands run, exact results, unrun checks and reasons, failures, authority impact, and residual risk. A green suite is not permission to begin the next task.
