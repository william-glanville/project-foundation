# Package Verification Workflow

## Goal
Determine whether a run package is complete, internally consistent, and traceable.

## Persistence status
Package verification is a future workflow output; the current schema has no `PackageVerification` or `Report` entity/table. Its PASS/FAIL result is not a persisted domain entity in this baseline.

## Steps
1. Validate schemas.
2. Resolve all references.
3. Recalculate hashes.
4. Verify parent-child lineage.
5. Verify fidelity mode, inventory, and ROIs.
6. Verify prompt and generation records.
7. Verify deterministic audit provenance.
8. Verify authenticated approval binding.
9. Verify controlled annotation authorities.
10. Verify final output derivation and software provenance.
11. Verify signature when enabled.
12. Report PASS or FAIL.

## Failure rule
Do not repair, regenerate, or update hashes during verification. Report the earliest valid workflow state for correction.
