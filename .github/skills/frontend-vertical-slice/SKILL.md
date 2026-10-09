---
name: frontend-vertical-slice
description: Implement or review one narrow frontend vertical slice while preserving contract, feature, accessibility, state-ownership, API-client, policy, and component-test boundaries. Use only after the target project's frontend technologies and commands are accepted.
---
# Frontend Vertical Slice

## Required reading

Read `docs/governance/TASK_DECLARATION_STANDARD.md`, `AGENTS.md`, `PROJECT_OBJECTIVES.md`, accepted vocabulary, applicable contracts and ADRs, architecture, affected feature, API client, components, and tests.

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

- Organize work according to the project's accepted feature and layer boundaries.
- Components must use the accepted API or service boundary and must not create parallel handwritten contracts when generated or authoritative types exist.
- The frontend may display server-provided policy or allowed actions but must not invent workflow legality or business authority.
- Keep presentation and comparison rendering separate from policy and mutation orchestration.
- Keep transient display state local. Introduce shared state only when demonstrated ownership requires it and accepted architecture permits it.
- Preserve semantic structure, keyboard operation, visible focus, accessible names, non-colour cues, and announced loading, error, empty, success, stale, and permission states where applicable.
- Provide accessible alternatives where a visual-only representation would hide essential information.
- Add focused public-behaviour and accessibility tests.
- Derive tools and commands from the repository. Do not assume React, TypeScript, Vite, or a particular test framework.
- Stop if the UI requires an absent API field, policy result, workflow transition, or backend behaviour.

## Output

Report files changed, layer and responsibility, contract impact, accessibility evidence, tests, exact commands and results, decisions affected, known gaps, and residual risk. Do not start another slice.
