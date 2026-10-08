# Merge Assessment: Sanitization Framework and Project Governance Foundation

## Recommendation

Merge the sanitization pipeline with the generic project-governance and development foundation, while keeping project objectives and accepted decisions in project-specific files.

## Why merge

The two sets solve complementary problems:

- Governance defines authority, boundaries, decision lifecycle, and development discipline.
- Sanitization defines repeatable repository inspection, security gating, specialist analysis, and structured reports.

A merged foundation reduces drift because agents receive one authority model, one security gate, one finding contract, and one development workflow.

## Keep generic

- authority order
- agent boundaries
- security handling
- report schemas
- code-formatting principles
- ADR process
- development and validation gates
- reporting contracts

## Keep project-specific

- objectives and non-objectives
- domain vocabulary
- accepted architecture decisions
- technologies and versions
- repository commands
- database and deployment targets
- lifecycle states
- external contracts
- current phase and next work

## Proposed project-start sequence

1. Copy this foundation into the new repository.
2. Complete `PROJECT_OBJECTIVES.md`.
3. Remove unused technology mappings and agents only when deliberately out of scope.
4. Add initial ADRs for settled technology and responsibility boundaries.
5. Add exact build, lint, and test commands.
6. Run inventory and security first.
7. Pilot classification, formatting, consistency, and reporting.
8. Enable documentation, architecture, and governance stages after outputs stabilize.

## Illustration Generator pilot

Use the Illustration Generator as the first pilot because it contains backend and frontend languages, ADRs, agent instructions, persistence boundaries, security-sensitive configuration, and lifecycle terminology. Start with a read-only run and require human approval before formatting or documentation mutations.
