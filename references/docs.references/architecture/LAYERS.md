# Architecture Layers

| Layer | Name | Owns | Excludes |
|---|---|---|---|
| L0 | Primitive | IDs, hashes, timestamps, coordinates | workflow |
| L1 | Structure | entities, schemas, relationships | orchestration |
| L2 | Mechanism | storage, rendering, hashing, transforms | approval policy |
| L3 | Capability | use cases and ports | UI policy invention |
| L4 | Policy | authorization, approval, retention | low-level mechanisms |
| L5 | Behaviour | user journeys and observable workflow | lower contract reinterpretation |
| L6 | Intent | business purpose and outcomes | implementation detail |

## Allowed flow
Constraints flow down; capabilities flow up. Adjacent transitions require explicit contracts. Bypassing layers requires a documented and accepted justification.

## Emergence
A lower-layer mechanism may enable many behaviours. Those behaviours are not scope until explicitly required and assigned to an owner.
