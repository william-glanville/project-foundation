---
name: contract-change
description: Use when adding or changing OpenAPI, JSON Schema, generated Python models, generated TypeScript DTOs, workflow states, or persisted records in the technical tracing project.
disable-model-invocation: true
---

# Contract Change

## Required reading

1. Read `AGENTS.md`.
2. Read `docs/ADR/INDEX.md` and applicable Accepted ADRs.
3. Read current OpenAPI and JSON Schema sources.
4. Inspect generated models, consumers, migrations, and contract tests.

## Before editing

State:

```text
Contract owner:
Owning layer:
Reason for change:
Immediate consumers:
Compatibility impact:
Persistence impact:
Approval or lineage impact:
Governing ADRs:
Non-responsibilities:
```

## Rules

- OpenAPI is authoritative for HTTP contracts.
- JSON Schema is authoritative for persisted records.
- Generate Python and TypeScript models from contract sources.
- Do not hand-edit generated files.
- Do not place business rules in generated types.
- Use explicit required fields, nullability, enumerations, schema versions, and `additionalProperties: false`.
- Preserve backward compatibility unless an Accepted ADR authorizes a breaking change.
- A change affecting approval binding, lineage, workflow semantics, persistence strategy, or public API meaning requires ADR review.
- Update schema tests, serialization fixtures, API tests, and consumers together.

## Required output

```text
Contract files changed:
Generated files changed:
Compatibility classification:
Migration required:
Consumers updated:
Tests added or changed:
Commands and exact results:
ADR impact:
Residual risk:
```
