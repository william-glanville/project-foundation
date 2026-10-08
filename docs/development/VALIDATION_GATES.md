# Validation Gates

## Gate 1: Pre-edit

Authority read, scope bounded, security directives applied, worktree inspected.

## Gate 2: Targeted validation

Changed modules compile or parse, focused lint passes, focused tests pass.

## Gate 3: Regression validation

Broader repository checks run where proportionate. Failures are reported exactly and not hidden by test modification.

## Gate 4: Diff review

No unrelated changes, secret disclosure, authority inversion, undocumented contract change, or generated-file drift.

## Gate 5: Completion

Evidence, commands, results, remaining risks, and deferred findings are recorded.
