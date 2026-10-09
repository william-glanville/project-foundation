# Task Declaration Standard

## Purpose

Provide one compact preflight contract for agents, skills, prompts, reviews, and implementation tasks. The declaration prevents scope drift, authority inversion, unsupported claims, and automatic continuation into adjacent work.

## When required

Create a task declaration before any material architecture, contract, implementation, validation, prompt, packaging, release-readiness, or governance task.

A task is material when it can change behaviour, authority, interfaces, persisted data, security posture, workflow, generated artifacts, or acceptance evidence.

## Canonical declaration

```yaml
task_declaration:
  task: ""
  accepted_objective: ""
  scope: ""
  owning_layer: ""
  immediate_consumer: ""
  authority_read: []
  evidence:
    available: []
    classifications: []
    missing: []
  contracts_affected: []
  decisions_affected: []
  responsibilities:
    owns: []
    may_change: []
    must_not_change: []
  non_responsibilities: []
  security_directives: []
  acceptance_evidence: []
  planned_validation: []
  blocking_clarifications: []
  next_task_not_authorized: true
```

## Required interpretation

### Task

State the one bounded activity being attempted. Do not combine unrelated tasks.

### Accepted objective

Link the task to an accepted objective, contract, decision, defect, or explicit user instruction. Current implementation alone is not an objective.

### Scope

Name the repository area, component, workflow, contract, artifact set, or review boundary. Specify excluded adjacent areas when confusion is likely.

### Owning layer

Identify the layer or responsibility that owns the task. If ownership is ambiguous and the ambiguity changes the design, stop and request a decision.

### Immediate consumer

Identify the current consumer that requires the change or output. Hypothetical future consumers do not justify new abstractions.

### Authority read

List the actual authority reviewed, including applicable objectives, vocabulary, accepted contracts, accepted ADRs, scoped instructions, and security directives. Preserve Proposed versus Accepted status.

### Evidence

Classify material evidence as one or more of:

```text
OBSERVED
MEASURED
SPECIFIED
HUMAN_CONFIRMED
INFERRED
ASSUMED
PROPOSED
```

Do not present inference, assumption, or proposal as fact. Record missing evidence that limits the work.

### Contracts and decisions affected

Identify direct and indirect impact. If an accepted contract or decision must change, stop ordinary implementation and use the applicable governance workflow.

### Responsibilities and non-responsibilities

State what this task owns, may change, must not change, and deliberately excludes. A lower layer may enable a result without owning the higher-layer outcome.

### Security directives

List active exclusions, redactions, quarantines, publication restrictions, live-system prohibitions, and protected paths.

### Acceptance evidence

State the evidence required to declare the task complete. Examples include tests, schema validation, hash verification, contract conformance, accessibility checks, or human decision.

### Planned validation

List only commands or checks discovered from repository authority or configuration. Do not invent commands or claim execution before it occurs.

### Blocking clarifications

Record unresolved questions that prevent safe work. Stop the affected work until authority resolves them.

### Next task not authorized

Default to `true`. Completing a task is not permission to begin the next task.

## Proportional use

For a small read-only task, the declaration may be rendered compactly:

```text
Task:
Objective:
Scope:
Owner/layer:
Immediate consumer:
Authority read:
Evidence and gaps:
Contracts/decisions affected:
May change:
Must not change:
Acceptance evidence:
Planned validation:
Blocking clarification:
```

Do not omit a field when its absence could hide scope, authority, security, or acceptance risk.

## Completion reconciliation

At task completion, compare the result against the declaration and report:

- scope attempted and scope completed;
- files or artifacts changed;
- contracts and decisions affected;
- validation commands and exact results;
- unrun checks and reasons;
- unresolved findings and residual risks;
- factual project-state update;
- one next bounded task, without starting it.
