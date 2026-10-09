---
name: release-checkpoint
description: Use when creating a repository checkpoint or release-readiness summary after a validated implementation slice. Captures factual state, tests, ADR impact, known gaps, and next eligible work without starting the next task.
disable-model-invocation: true
---

# Release Checkpoint

## Required reading

1. Read `AGENTS.md`.
2. Read `docs/ADR/INDEX.md` and applicable ADRs.
3. Inspect the implemented slice, contracts, documentation, and tests.
4. Review actual command output and repository state.

## Evidence rules

- Report only verified repository facts.
- Do not mark a test, build, migration, or workflow as complete unless executable evidence is available.
- Distinguish `IMPLEMENTED`, `VERIFIED`, `PARTIAL`, `BLOCKED`, and `NOT STARTED`.
- Do not convert known gaps into future promises.
- Do not start the next vertical slice.

## Checkpoint structure

```text
Checkpoint ID:
Date:
Implemented vertical slice:
Governing ADRs:
Contracts added or changed:
Files and modules changed:
User-visible behaviour:
Security and privacy impact:
Data or migration impact:
Tests and exact results:
Build and exact results:
Documentation updated:
ADRs added or changed:
Known gaps:
Blocked items:
Rollback or recovery notes:
Next eligible slice:
```

## Release-readiness checks

Verify as applicable:

- accepted contracts match implementation;
- migrations or storage changes are documented;
- configuration examples are current and contain no secrets;
- source and generated artifacts are excluded or included correctly;
- backend tests and quality gates pass;
- frontend type check, lint, tests, and build pass;
- accessibility regressions are covered;
- package verification succeeds for controlled fixtures;
- no Proposed ADR is being treated as Accepted;
- known risks are visible.

## Output rule

Create a concise, factual checkpoint document or response. Stop after the checkpoint unless the user explicitly requests the next implementation task.
