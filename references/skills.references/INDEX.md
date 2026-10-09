# Zed Skill Catalogue

## Purpose
Project-local Zed skills provide reusable task workflows. Skills supplement but never override `AGENTS.md` or Accepted ADRs.

## Invocation
Use `/skill-name` or `@skill-name` in the Zed Agent editor. Skills with `disable-model-invocation: true` require deliberate invocation.

## Catalogue
| Skill | Invocation | Auto | Primary responsibility | Governing layer |
|---|---|---:|---|---|
| architecture-review | `/architecture-review` | Yes | Boundary and ADR review | L4 |
| adr-authoring | `/adr-authoring` | No | Decision governance | L4 |
| backend-vertical-slice | `/backend-vertical-slice` | Yes | Python/Flask implementation | L3 |
| frontend-vertical-slice | `/frontend-vertical-slice` | Yes | React/TypeScript/Vite implementation | L3/L5 |
| trace-prompt-review | `/trace-prompt-review` | Yes | Prompt refinement from audit evidence | L2/L3 |
| audit-package-review | `/audit-package-review` | No | Human-review support | L4 |
| testing-and-validation | `/testing-and-validation` | Yes | Executable validation | Cross-layer |
| contract-change | `/contract-change` | No | Contract governance | L1/L4 |
| package-verification | `/package-verification` | No | Integrity and lineage verification | L2/L4 |
| release-checkpoint | `/release-checkpoint` | No | Factual implementation checkpoint | L5 |

## Reading order
`AGENTS.md` -> ADR index -> applicable ADRs -> architecture index -> contracts -> selected skill -> source and tests.

## Metadata
Machine-readable catalogue: `SKILL_CATALOG.json`.
