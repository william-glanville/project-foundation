---
name: audit-package-review
description: Use when reviewing a Trace Audit Package for geometry fidelity, artifact lineage, hashes, deterministic assembly, checklist completeness, and approval eligibility.
disable-model-invocation: true
---

# Audit Package Review

## Authority

This skill supports human review. It must not approve a package autonomously.

## Required reading

1. Read `AGENTS.md`.
2. Read `docs/ADR/INDEX.md` and applicable Accepted ADRs.
3. Read the run manifest, artifact records, geometry inventory, ROI records, prompt revision, generation record, comparison record, and checklist.
4. Inspect the exact source preview and trace candidate identified by the package.

## Integrity review

Verify:

- source artifact ID and SHA-256;
- trace artifact ID and SHA-256;
- prompt revision and hash;
- generation attempt identity;
- parent-child lineage;
- audit renderer and software provenance;
- source and trace aspect ratios;
- absence of generatively rendered audit text or decisions.

Missing or mismatched integrity evidence blocks approval eligibility.

## Geometry review

Review every critical ROI and explicitly check:

- clamp body silhouette;
- clamp opening and lower jaw;
- screw axis, handle, thread position, and extrusion contact;
- extrusion profile, position, and perspective;
- rack-arm square section and placement;
- rack-frame members and visible repeated stations;
- component overlaps and relative proportions;
- camera viewpoint;
- unsupported generated geometry.

Automated comparison is advisory only. If registration is unreliable, record `COMPARISON_ALIGNMENT_NOT_AVAILABLE`.

## Decision discipline

Available human decisions are:

```text
REJECT
PASS_WITH_NOTES
APPROVE
```

`PASS_WITH_NOTES` must not contain unresolved geometry impact. Only `APPROVE` makes a candidate eligible for production. Missing evidence is not approval.

## Required output

Produce a review brief containing:

```text
Integrity result:
Critical ROI results:
Geometry failures:
Presentation notes:
Missing evidence:
Annotation authority issues:
Approval eligibility:
Required next action:
```

Do not infer dimensions, torque, safety, quality, chemical suitability, or procedural requirements from the image.
