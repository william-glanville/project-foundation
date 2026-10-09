# Workflow Architecture

## Trace
Immutable source -> inventory and ROIs -> locked prompt -> provider-bound derivative -> trace candidate.

## Audit
Exact source preview + exact trace + deterministic comparisons + validated records -> deterministic audit package.

## Approval
Authenticated reviewer evaluates critical ROIs and integrity -> REJECT, PASS_WITH_NOTES, or APPROVE -> approval bound to exact revisions and hashes; only APPROVE permits production eligibility.

## Production
Approved trace + approved annotations -> deterministic renderer -> production image.

## Verification
Schemas -> references -> hashes -> lineage -> approval -> annotation authority -> provenance -> package status.

Detailed operator and implementation definitions are in `docs/workflows/`.
