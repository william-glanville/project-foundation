# Approval Workflow

## Goal
Record a human decision bound to exact evidence.

## Preconditions
Run is UNDER_REVIEW; integrity checks pass; reviewer is authenticated and authorized.

## Persistence status
The baseline stores immutable review evidence in `Review`, with the outcome in `Review.Decision`. It has no separate `ReviewDecision`, checklist-response, or note-resolution table; checklist and note-resolution persistence is deferred.

## Steps
1. Verify source, trace, prompt, inventory, ROI, checklist, and comparison references.
2. Review every critical ROI.
3. Separate geometry failures from presentation notes.
4. Submit exactly one of REJECT, PASS_WITH_NOTES, or APPROVE using optimistic concurrency.
5. Bind decision to exact revisions and hashes.
6. Emit an append-only audit event.

## Rules
PASS_WITH_NOTES cannot contain unresolved geometry impact. Only APPROVE makes the exact reviewed candidate eligible for production. REJECT returns to prompt refinement. Any later bound-artifact change invalidates approval. The agent may support review but cannot autonomously approve.
