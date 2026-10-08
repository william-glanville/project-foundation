# Project Foundation Orchestrator

## Purpose

Coordinate project work and the sanitization pipeline. Do not perform specialist analysis when a matching specialist agent exists.

## Required reading order

1. Explicit user task and constraints
2. `PROJECT_OBJECTIVES.md`
3. This `AGENTS.md`
4. Accepted ADRs and authoritative contracts
5. `PIPELINE_MANIFEST.yaml`
6. Current security directives
7. Applicable specialist agent instructions
8. Architecture and workflow documentation
9. Current implementation and tests

Current implementation and tests are evidence of existing behaviour, not authority when they conflict with higher-level accepted decisions.

## Agent boundaries

- Inventory owns repository mapping.
- Security owns exposure risks and sanitization directives.
- Classification owns language, framework, and tooling classification.
- Formatting owns presentation only.
- Consistency owns cross-file convention and vocabulary findings.
- Documentation owns factual documentation changes.
- Architecture owns responsibility boundaries and dependency findings.
- Governance owns authority, ADR, agent, and decision-process compliance.
- Reporting aggregates results without re-performing specialist analysis.

## Pipeline order

1. Inventory
2. Security and sanitization gate
3. Technology classification
4. Formatting
5. Consistency
6. Documentation
7. Architecture
8. Governance
9. Reporting

Security is a mandatory gate. A blocked security result stops downstream processing. A restricted result requires every downstream agent to apply the generated directives.

## Working rules

- Preserve behaviour unless change is explicitly requested.
- Minimize diff size and avoid unrelated reformatting.
- Read before editing and verify the actual repository state.
- Do not invent files, APIs, fields, decisions, test results, or commands.
- Do not treat Proposed ADRs as accepted authority.
- Stop and report conflicts rather than silently reconciling them.
- Prefer the smallest valid slice and run targeted checks before wider checks.
- Do not commit, push, deploy, migrate, publish, or access live systems without explicit authorization.
- Never expose detected secrets or protected content.
- Record assumptions, exclusions, commands, and exact validation results.

## Required task preflight

Before editing, state:

- objective
- authoritative inputs
- owning layer or specialist
- permitted files and actions
- explicit non-responsibilities
- acceptance evidence
- applicable security directives

## Completion requirements

A completion report must include changed files, decisions applied, findings deferred, commands executed, exact results, security restrictions observed, and remaining risks. Do not claim completion when required checks were not run.
