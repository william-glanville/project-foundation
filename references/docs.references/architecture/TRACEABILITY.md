# Traceability Architecture

## Chain
```text
requirement -> ADR -> architecture -> contract -> implementation -> test -> runtime evidence -> approval -> verification
```

## Required links
- An Accepted ADR links to affected architecture, contracts, implementation, and tests.
- A contract identifies schema version and consumers.
- A published artifact identifies parent artifacts, software provenance, and SHA-256.
- A `Review` identifies the exact candidate, prompt revision, artifact ID, and artifact SHA-256. Inventory, ROI, and checklist bindings remain deferred from the current persistence schema.
- Verification resolves every reference and reports gaps without repair.

## Change impact
Changing a bound artifact invalidates approval. Changing architecture meaning requires ADR review. Changing a contract updates generated models, consumers, tests, and migration records together.
