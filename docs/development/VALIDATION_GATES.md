# Validation Gates

1. Pre-edit: authority read, scope bounded, directives applied, worktree inspected.
2. Targeted: changed code parses or compiles; focused lint and tests pass. Declare which test layers apply (for example unit, integration, component, security) using the project's own commands from `PROJECT_OBJECTIVES.md`; do not assume a layer is covered without an explicit run.
3. Regression: broader checks run where proportionate; failures remain visible.
4. Diff: no unrelated change, secret disclosure, authority inversion, or hidden contract change.
5. Completion: evidence, commands, results, risks, and deferred items recorded.
