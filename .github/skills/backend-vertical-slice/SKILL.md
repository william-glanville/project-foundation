---
name: backend-vertical-slice
description: Implement or review one narrow backend vertical slice while preserving domain, application, port, adapter, persistence, transaction, and test boundaries. Use only after the target project's backend technologies and commands are accepted.
---
# Backend Vertical Slice

## Required reading

Read `docs/governance/TASK_DECLARATION_STANDARD.md`, `AGENTS.md`, `PROJECT_OBJECTIVES.md`, accepted vocabulary, applicable contracts and ADRs, architecture, current source, tests, and repository commands.

Complete the task declaration before editing.

## Initialization Handling

If `PROJECT_OBJECTIVES.md` does not exist:

1. Read `PROJECT_OBJECTIVES.template.md`.
2. Record that the repository is in initialization state.
3. Do not invent project objectives, non-objectives, technology choices, commands, contracts, or acceptance criteria.
4. Do not proceed with implementation or governed project changes.
5. Recommend project initialization as the next bounded task.

Repository initialization is outside the scope of this skill.

## Rules

- Framework and transport code are adapters, not the domain.
- One endpoint or entry point should invoke one bounded application use case unless accepted architecture states otherwise.
- Domain code must not depend on web frameworks, persistence frameworks, provider SDKs, filesystem adapters, or transport types.
- Application code depends on accepted ports; infrastructure implements ports.
- Do not hold database transactions across remote calls or long-running external processing.
- For file or artifact publication, use the project's accepted validation, hashing, and promotion contract.
- Implement only the requested slice and add focused tests first or alongside implementation.
- Do not introduce queues, event buses, registries, plugin systems, generic repositories, or frameworks without present need and accepted authority.
- Derive tools and commands from the repository. Do not assume Python, Flask, SQLAlchemy, or pytest.
- Stop if the slice requires an absent contract, policy, workflow transition, or architectural decision.

## Output

Report files changed, owning layer and responsibility, contract impact, tests, exact commands and results, decisions affected, security/data impact, known gaps, and residual risk. Do not start another slice.
