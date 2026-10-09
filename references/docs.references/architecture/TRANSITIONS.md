# Transition Contracts

## Layer transitions
Each adjacent layer transition defines input, output, owner, invariant, failure, and evidence.

## Workflow transition record
```text
source_state
target_state
authorized_actor
preconditions
inputs
outputs
failure_states
audit_event
approval_invalidation
```

## Valid workflow
RECEIVED -> INVENTORIED -> TRACE_PROMPT_LOCKED -> TRACE_GENERATION_REQUESTED -> TRACE_GENERATED -> AUDIT_OUTPUT_GENERATED -> UNDER_REVIEW -> APPROVED -> PRODUCTION_READY -> FINAL_OUTPUT_GENERATED -> PACKAGE_VERIFIED.

`Run.Status` contains workflow states only. `REJECT`, `PASS_WITH_NOTES`, and `APPROVE` are the exact `Review.Decision` values, not run states. `REJECTED` returns through `PROMPT_REVISED`; `PASS_WITH_NOTES` requires note resolution before `APPROVED`. Only `APPROVE` makes the exact reviewed candidate eligible for production. Generative modification after approval invalidates approval and creates a new trace revision.

The baseline has no `RunTransition` table. The current run state and optimistic-concurrency version are stored on `Run`; `AuditEvent` records lifecycle events. A complete transition history and transition use cases remain deferred.

## Concurrency
Transitions use optimistic concurrency. The first valid commit wins; stale attempts are retained as audit events and rejected.
