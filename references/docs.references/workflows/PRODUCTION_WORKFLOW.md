# Production Workflow

## Goal
Create the operator-facing illustration from the approved trace without reinterpreting geometry.

## Preconditions
An `APPROVE` decision exists for the exact candidate, review, artifact, and hash; the approved trace is unchanged; every controlled annotation has an authority record.

## Persistence status
`ProductionIllustration` records immutable versions bound to an approved candidate, approval review, exact artifact, and hash. Annotation and annotation-authority tables are deferred; production records do not imply that controlled annotations are currently persisted.

## Steps
1. Load the exact approved trace.
2. Apply deterministic line, tonal, and background normalization.
3. Add approved vector annotations and revision data.
4. Check that annotations do not obscure critical geometry.
5. Render lossless production PNG.
6. Validate, hash, publish, and record lineage.

## Rule
Any requested generative modification creates a new trace revision and returns to audit review.
