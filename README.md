# Generic AI-Assisted Project Foundation

Framework Version 1.2

A reusable governance, development, sanitization, drift-control, and reporting baseline for agent-driven software projects.

## Bootstrap

1. Copy this package into the repository root.
2. Copy `PROJECT_OBJECTIVES.template.md` to `PROJECT_OBJECTIVES.md` and complete it.
3. Review `PROJECT_STATE.md`, `VOCABULARY.md`, `AGENTS.md`, `PIPELINE_MANIFEST.yaml`, and the authority documents.
4. Add exact build, format, lint, and test commands.
5. Add accepted contracts and ADRs, then review `SKILL_CATALOG.yaml`.
6. Run inventory and security in read-only mode before enabling mutation stages.
7. Place prior project guides and agent skills under `references/`, then run the supplied Copilot integration prompt.

The framework must not infer project objectives from implementation alone.
