---
name: completion-checkpoint
description: Create a factual completion or release-readiness checkpoint after a bounded implementation slice. Use to reconcile scope, authority, evidence, tests, risks, documentation, and next eligible work without starting that work.
---
# Completion Checkpoint

## Required reading

Read `docs/governance/TASK_DECLARATION_STANDARD.md`, the original task declaration, `AGENTS.md`, `PROJECT_STATE.md`, applicable contracts and ADRs, `docs/development/VALIDATION_GATES.md`, `docs/templates/CHECKPOINT.template.md`, the complete diff, and actual command output.

## Initialization Handling

If `PROJECT_OBJECTIVES.md` does not exist:

1. Read `PROJECT_OBJECTIVES.template.md`.
2. Record that the repository is in initialization state.
3. Do not invent project objectives, non-objectives, technology choices, commands, contracts, or acceptance criteria.
4. Do not proceed with implementation or governed project changes.
5. Recommend project initialization as the next bounded task.

Repository initialization is outside the scope of this skill.

## Evidence rules

- Report only verified repository facts.
- Do not mark implementation, tests, builds, migrations, deployment, or workflow complete without evidence.
- Use accepted project status vocabulary when one exists. Otherwise use factual plain language.
- Separate implemented from verified.
- Preserve known gaps and blockers.
- Do not convert gaps into promises.
- Do not begin the next slice.

## Checkpoint review

Verify as applicable:

- requested scope versus completed scope;
- accepted contracts and ADR alignment;
- security and privacy impact;
- data, migration, configuration, and deployment impact;
- source and generated artifact handling;
- targeted and regression test results;
- accessibility and operational evidence;
- documentation and project-state updates;
- rollback or recovery notes;
- remaining risks and blockers.

## Output

Use `docs/templates/CHECKPOINT.template.md` when available. Report exact commands and results, unrun checks, authority impact, known gaps, and one next bounded task. Stop after the checkpoint.
