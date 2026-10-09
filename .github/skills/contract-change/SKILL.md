---
name: contract-change
description: Assess and apply an authorized contract change across contract sources, consumers, generated artifacts, persistence, tests, versioning, and documentation. Use when an API, schema, message, file format, workflow contract, or observable interface may change.
---
# Contract Change

## Required reading

Read `docs/governance/TASK_DECLARATION_STANDARD.md`, `AGENTS.md`, `contracts/README.md`, the accepted contract, applicable ADRs, consumers, generated artifacts, migrations, fixtures, and contract tests.

Complete the task declaration. Include contract owner, reason, immediate consumers, compatibility, persistence, security, approval, lineage, and versioning impact.

## Initialization Handling

If `PROJECT_OBJECTIVES.md` does not exist:

1. Read `PROJECT_OBJECTIVES.template.md`.
2. Record that the repository is in initialization state.
3. Do not invent project objectives, non-objectives, technology choices, commands, contracts, or acceptance criteria.
4. Do not proceed with implementation or governed project changes.
5. Recommend project initialization as the next bounded task.

Repository initialization is outside the scope of this skill.

## Impact matrix

Identify before editing:

- authoritative contract source;
- owner and current status;
- direct and indirect consumers;
- generated artifacts;
- serializers and fixtures;
- persisted data and migrations;
- workflow or lifecycle semantics;
- security, authorization, privacy, approval, lineage, and audit binding;
- compatibility and versioning;
- executable contract tests;
- documentation and example updates.

## Rules

- Do not change an accepted contract merely to simplify implementation.
- Do not hand-edit generated artifacts.
- Do not place business rules in generated data types.
- Use explicit required fields, nullability, enumerations, versions, and unknown-field policy where applicable.
- Preserve backward compatibility unless accepted authority permits a breaking change.
- A change affecting external meaning, persistence strategy, approval binding, lineage, security, or workflow semantics requires decision review.
- Update contract source, generated artifacts, consumers, tests, migrations, and documentation together when applicable.
- Stop if authority to change the contract is absent.

## Output

Report contract sources changed, compatibility classification, versioning decision, migration impact, consumers and generated artifacts updated, tests and exact results, ADR impact, residual risk, and unrun checks.
