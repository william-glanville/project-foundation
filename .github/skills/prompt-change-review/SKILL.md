---
name: prompt-change-review
description: Review or minimally revise a governed prompt from explicit evidence while preserving unaffected constraints, provenance, and evaluation requirements. Use when a prompt defect, audit finding, or controlled prompt change is requested.
---
# Prompt Change Review

## Required reading

Read `docs/governance/TASK_DECLARATION_STANDARD.md`, `AGENTS.md`, applicable contracts and ADRs, current prompt and revision history, evaluation criteria, source evidence, audit findings, and protected-content rules.

Complete the task declaration before proposing a change.

## Evidence discipline

Classify each material statement as:

```text
OBSERVED
MEASURED
SPECIFIED
HUMAN_CONFIRMED
INFERRED
ASSUMED
PROPOSED
```

Only evidence permitted by the prompt's accepted contract may become an instruction. Treat generated output as evidence to inspect, not proof of correctness.

## Revision rule

Change the smallest prompt clause necessary to address the verified defect.

Record:

```text
prompt_id:
current_revision:
parent_revision:
finding_or_requirement:
evidence:
old_clause:
new_clause:
reason:
unaffected_constraints:
expected_effect:
required_re_evaluation:
```

Do not rewrite the entire prompt unless its accepted structure is defective. A structural rewrite requires explicit justification, impact review, and a new revision.

## Prohibitions

- Do not infer missing facts or hidden characteristics.
- Do not add safety, quality, compliance, procedural, or domain claims without authority.
- Do not weaken unaffected constraints.
- Do not conceal conflicting instructions.
- Do not modify an approved prompt in place when revision history is required.
- Do not broaden the task to unrelated prompt cleanup.

## Output

Report finding addressed, minimal change, evidence classification, preserved constraints, expected effect, required evaluation, approval impact, and unresolved risks.
