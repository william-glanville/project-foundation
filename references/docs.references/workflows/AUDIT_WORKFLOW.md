# Audit Workflow

## Goal
Produce deterministic evidence for human comparison of source and trace.

## Preconditions
A published trace candidate and complete source, inventory, ROI, prompt, generation, and lineage records exist.

## Persistence status
The `Review` entity and its exact candidate, prompt, artifact, and hash binding are in the current schema. Inventory, ROI, checklist, comparison, and audit-package persistence tables are deferred. The Trace Audit Package is a deterministic output, not a domain table.

## Steps
1. Verify input hashes and references.
2. Build side-by-side comparison.
3. Build overlay or edge comparison only when registration is reliable.
4. Render the audit package from exact images and validated records.
5. Leave review fields unselected.
6. Hash and publish audit artifacts.
7. Transition to AUDIT_OUTPUT_GENERATED, then UNDER_REVIEW.

## Rules
A generative model never renders audit text, hashes, checklists, or decisions. Missing evidence blocks audit completion.
