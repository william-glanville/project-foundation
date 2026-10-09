---
name: testing-and-validation
description: Use when designing, adding, reviewing, or running tests for the Python Flask backend, React TypeScript frontend, contracts, deterministic renderers, artifact storage, security controls, or package verification workflow.
---

# Testing and Validation

## Required reading

1. Read `AGENTS.md`.
2. Read `docs/ADR/INDEX.md` and applicable Accepted ADRs.
3. Read the affected contract, architecture section, source, and existing tests.
4. Identify the public behaviour and invariant being validated.

## Test declaration

State:

```text
Requirement or invariant:
Governing ADR:
Test layer:
Authoritative inputs:
Expected public result:
Failure mode covered:
Out of scope:
```

## Test layers

Use the lowest sufficient layer:

- domain unit tests for invariants and transitions;
- contract tests for OpenAPI, JSON Schema, provider ports, and repositories;
- application tests for use-case orchestration;
- Flask integration tests for HTTP mapping and authorization;
- storage tests for atomic publication, immutability, and recovery;
- deterministic render tests for layout and exact metadata;
- React component tests for public behaviour and accessibility;
- end-to-end tests only for critical cross-system paths;
- security tests for ingestion, access control, replay, substitution, and unsafe files.

## Rules

- Characterize accepted behaviour before refactoring unfamiliar code.
- Keep fixtures minimal and explain authoritative values.
- Prefer public contracts over private implementation assertions.
- Do not weaken a test to match new output.
- If an accepted contract is wrong, stop and identify the required ADR or contract change.
- Never claim a test was run when it was not.
- Record skipped, quarantined, and unrun checks explicitly.

## Required suites

Cover as applicable:

- valid and invalid transitions;
- schema validation and generated type compatibility;
- hashing and lineage;
- approval binding and invalidation;
- provider timeout, policy block, malformed response, and unknown status;
- safe media validation and decoded-pixel limits;
- interrupted write recovery and atomic promotion;
- stale concurrent decisions;
- deterministic audit and production rendering;
- package-manifest resolution;
- keyboard and screen-reader-accessible UI behaviour.

## Commands

Run the relevant configured commands, normally:

```text
pytest
ruff check
ruff format --check
npm run typecheck
npm run lint
npm run test
npm run build
```

## Report

```text
Tests added or changed:
Commands run:
Exact results:
Unrun checks and reason:
Failures found:
Contract or ADR impact:
Residual risk:
```
