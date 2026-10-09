---
name: artifact-package-verification
description: Verify a declared artifact package without repairing it, including manifest schema, file resolution, hashes, lineage, provenance, required evidence, approvals, and signatures. Use for read-only integrity and completeness verification.
---
# Artifact Package Verification

## Required reading

Read `docs/governance/TASK_DECLARATION_STANDARD.md`, `AGENTS.md`, applicable accepted contracts and ADRs, the package manifest, schema, referenced records, and configured verifier documentation.

Complete a read-only task declaration. Identify the authoritative manifest and package contract.

## Verification order

Apply only checks required by the package contract:

1. Validate manifest and record schemas.
2. Resolve every required artifact reference.
3. Recalculate and compare declared hashes.
4. Verify parent-child or derivation lineage.
5. Verify required evidence and immutable-source bindings.
6. Verify software, generator, renderer, model, prompt, toolchain, and contract provenance when declared.
7. Verify approval or acceptance binding when required.
8. Verify signatures when required.
9. Verify completion criteria.

## Rules

- Missing required evidence fails verification.
- A hash mismatch, broken required lineage, stale approval, or invalid signature fails the applicable check.
- A temporary file is not authoritative unless the package contract says otherwise.
- Do not regenerate missing artifacts.
- Do not update hashes to match modified files.
- Do not repair silently.
- Do not approve a package unless the user and accepted workflow explicitly assign that human decision.
- On failure, identify the earliest valid workflow state or corrective process without performing it.

## Output

Report verification status, manifest schema, artifact resolution, hash integrity, lineage, provenance, approval binding, signature status, missing evidence, failures, and required corrective workflow.
