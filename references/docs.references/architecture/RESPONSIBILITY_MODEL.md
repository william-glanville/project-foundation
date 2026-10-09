# Responsibility Model

| Component | Owner | Responsibilities | Non-responsibilities |
|---|---|---|---|
| Domain | L1/L4 | invariants, states, approval binding, lineage rules | Flask, SQL, imaging |
| Application | L3 | use-case orchestration | provider and storage algorithms |
| Ports | L3 | required capability contracts | implementation detail |
| Flask | L2 adapter | HTTP mapping and composition | domain policy |
| Persistence | L2 | transactional lifecycle metadata and artifact bytes in SQL Server | workflow legality |
| Artifact-content mechanism | L2 | validate, hash, size, compress, and publish `ArtifactContent` payloads | approval policy |
| Imaging | L2 | deterministic comparison and rendering | approval decisions |
| Provider adapter | L2 | trace-generation integration | audit or production rendering |
| React UI | L5 | accessible user interaction | transition legality |

## Rule
Every new module names an immediate consumer and one primary owner. Shared convenience is not sufficient justification.
