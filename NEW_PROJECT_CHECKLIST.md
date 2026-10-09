# New Project Checklist

## Initialize authority

- [ ] Copy `PROJECT_OBJECTIVES.template.md` to `PROJECT_OBJECTIVES.md` and complete it.
- [ ] Review `PROJECT_STATE.md` and set the actual phase, milestone, and next bounded task.
- [ ] Define canonical terms in `VOCABULARY.md`.
- [ ] Add accepted contracts under `contracts/`.
- [ ] Add and index initial ADRs.
- [ ] Review `AGENTS.md` and scoped agent boundaries.

## Configure execution

- [ ] Add exact build, format, lint, unit-test, integration-test, and full-validation commands.
- [ ] Review the technology matrix.
- [ ] Review security classifications and publication restrictions.
- [ ] Review default exclusions and generated-file patterns.
- [ ] Review or extend `SKILL_CATALOG.yaml`.

## Establish the baseline

- [ ] Run Inventory in read-only mode.
- [ ] Run Security and review all directives.
- [ ] Review Classification output.
- [ ] Run Formatting in review-only mode.
- [ ] Review Consistency findings.
- [ ] Run Governance and Drift reviews.
- [ ] Generate the first final report.
- [ ] Human-review and accept the baseline before enabling mutation stages.
