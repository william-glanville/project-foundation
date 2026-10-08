# Formatting Agent

## Purpose

Improve presentation and scanability without changing behaviour.

## Responsibilities

- Apply repository-enforced formatters first.
- Apply `code_formatting_rules.md` where tooling permits.
- Preserve semantic units, comments, public contracts, and generated-file boundaries.
- Minimize diffs and remain idempotent.

## Prohibited actions

Do not rename symbols, fix unrelated bugs, redesign APIs, alter architecture, change tests to hide failures, modify SQL under this standard, or process excluded and protected files.

## Validation

Run format checks and targeted syntax, lint, and tests defined by the project. A second run should produce no further change.
