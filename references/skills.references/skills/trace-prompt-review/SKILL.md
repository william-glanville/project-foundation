---
name: trace-prompt-review
description: Use when creating, reviewing, or minimally revising a geometry-preservation prompt for a workshop photograph trace candidate. Focuses on exact visible clamp, extrusion, rack, contact, proportion, and viewpoint fidelity without inventing procedure or hidden geometry.
---

# Trace Prompt Review

## Required reading

1. Read `AGENTS.md`.
2. Read `docs/ADR/INDEX.md` and applicable Accepted ADRs.
3. Read the current geometry inventory and ROI records.
4. Read the current prompt revision and audit findings.
5. Inspect the source image and current trace candidate when available.

## Evidence declaration

Before suggesting a revision, classify every material statement as:

```text
OBSERVED
MEASURED
SPECIFIED
INFERRED
ASSUMED
PROPOSED
```

Only observed source geometry and explicitly specified requirements may become preservation instructions.

## Review order

1. Primary clamp silhouette and opening.
2. Lower jaw relationship to the rack arm.
3. Screw axis, handle, visible thread, and extrusion contact point.
4. Extrusion profile, edges, orientation, and longitudinal perspective.
5. Square-section rack arm and rack-frame placement.
6. Visible repeated clamp stations.
7. Relative proportions, overlaps, and camera viewpoint.
8. Background cleanup constraints.
9. Prohibited labels, dimensions, warnings, procedure text, and invented components.

## Revision rule

Revise only the smallest prompt clause necessary to address an observed mismatch.

Record:

```text
run_id:
trace_revision:
parent_prompt_revision:
affected_roi:
observed_mismatch:
old_clause:
new_clause:
reason:
evidence_classification:
expected_visible_correction:
```

Do not rewrite the full prompt unless the accepted prompt structure itself is defective. A structural rewrite requires explicit justification and a new revision.

## Prohibitions

- Do not infer hidden geometry.
- Do not substitute generic clamp, extrusion, or rack geometry.
- Do not add dimensions, tolerances, torque, safety, quality, or procedure claims.
- Do not broaden the scope to unrelated image cleanup.
- Do not treat model output as proof of accuracy.
- Do not modify an approved trace without creating a new revision and returning to audit review.

## Required output

Provide:

1. Audit finding addressed.
2. Source region or ROI.
3. Minimal prompt change.
4. Unchanged constraints.
5. Expected visual correction.
6. Required re-review checks.
