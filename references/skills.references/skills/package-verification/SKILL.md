---
name: package-verification
description: Use when verifying a completed technical-trace run package, including artifact hashes, lineage, manifests, approvals, annotations, software provenance, and completion criteria.
disable-model-invocation: true
---

# Package Verification

## Purpose

Verify evidence and report status. Do not repair artifacts silently and do not approve a run.

## Required reading

1. Read `AGENTS.md`.
2. Read applicable Accepted ADRs.
3. Read the package manifest and all referenced records.
4. Use the configured verifier when available.

## Verification order

1. Validate manifest and record schemas.
2. Resolve every artifact reference.
3. Recalculate and compare SHA-256 hashes.
4. Verify parent-child lineage.
5. Confirm immutable source and declared fidelity mode.
6. Confirm geometry inventory and critical ROIs.
7. Confirm prompt and generation records.
8. Confirm deterministic audit-package provenance.
9. Confirm authenticated approval binding.
10. Confirm controlled annotation authority records.
11. Confirm final output derives from the approved trace.
12. Confirm no unreviewed generative operation occurred after approval.
13. Confirm application, renderer, font, model, prompt, and contract provenance.
14. Confirm package signature when enabled.

## Rules

- Missing evidence fails verification.
- Hash mismatch fails verification.
- Broken lineage fails verification.
- Invalidated or stale approval fails verification.
- A referenced temporary file is not an authoritative artifact.
- Do not regenerate a missing artifact during verification.
- Do not update hashes to match modified files.

## Output

Report:

```text
Verification status: PASS | FAIL
Manifest schema:
Artifact resolution:
Hash integrity:
Lineage integrity:
Approval validity:
Annotation authority:
Production derivation:
Software provenance:
Signature status:
Failures:
Required corrective workflow:
```

On failure, identify the earliest valid workflow state to which the run must return.
