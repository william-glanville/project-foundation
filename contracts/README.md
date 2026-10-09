# Contract Authority

Accepted contracts define externally observable or cross-boundary behaviour and outrank explanatory ADR text when ratified.

Examples include:

- REST and RPC interfaces
- commands, queries, and error contracts
- events and message schemas
- database contracts
- file and artifact formats
- workflow transition contracts
- security and audit bindings

## Contract rules

- A contract requires explicit status: Proposed, Accepted, Rejected, Superseded, or Deprecated.
- Proposed contracts do not create implementation obligations.
- Accepted contracts require executable contract tests where practicable.
- Do not weaken, widen, rename, bypass, or replace an accepted contract to simplify implementation.
- Contract changes require impact analysis, versioning decision, tests, and documentation updates.
- When changing an accepted contract, identify every consumer, generated artifact, and test bound to it, and confirm each is updated or explicitly deferred before the contract is marked changed.
- Implementation conflicts must be reported, not silently reconciled.

Use `CONTRACT.template.md` for new contracts.
