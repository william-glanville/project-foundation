# Responsibility Model (Optional Architecture Classification Guide)

## Status

Advisory. This guide is not mandatory and does not change `docs/governance/AUTHORITY_ORDER.md`. A project adopts it as binding only through an Accepted ADR that references this file. Until then, the Architecture Agent MAY use it as an analysis technique when classifying artifacts or reviewing boundaries.

Historical source: adapted during foundation integration from the reference paths recorded in `docs/governance/REFERENCE_INTEGRATION_REGISTER.md`. The original reference tree is not required after integration.

## Purpose

Give agents a consistent way to classify what an artifact owns, so responsibility boundaries (Objective: clear responsibility boundaries) are explicit rather than collapsed into "it's architecture."

## Layers

Classification is always relative to a declared scope; a layer name alone (for example "L2") is meaningless without `(scope, composition boundary, owning layer)`.

| Layer | Owns | Must not own |
|---|---|---|
| L0 Primitive | Identity, value domains, intrinsic invariants, atomic state | Workflow, policy, orchestration, outcome |
| L1 Structure | Composition/arrangement of primitives (schemas, graphs, type systems) | Traversal strategy, workflow, approval rules |
| L2 Mechanism | Operations on structures (traversal, routing, persistence, dispatch) | Business policy, application workflow |
| L3 Capability | Stable functions exposed by mechanisms; contracts, pre/postconditions | Why the capability is invoked, which outcome is preferred |
| L4 Policy | Rules that select, constrain, permit, deny, or configure capabilities | Structure, mechanism internals, end-to-end workflow |
| L5 Behaviour | Observable processes composed from capabilities under policy over time | Lower-layer contracts, enterprise intent |
| L6 Intent | Purpose, goals, outcomes, success criteria, non-goals | Technology, schema, protocol, implementation detail |

An artifact has exactly one primary owning layer. If it appears to need more than one, split it into separately classified parts rather than assigning dual ownership.

A result produced by composing lower-layer artifacts (emergence) is not automatically owned by a higher layer. It becomes a governed artifact in a new scope only when an accepted goal selects it and an explicit transition links producer and consumer (see below). Do not expand a lower-layer artifact speculatively to anticipate a possible higher-layer use.

## Artifact necessity gate

Before creating an artifact, component, field, dependency, or extension point, answer:

1. Which accepted goal requires it?
2. What precise problem does it solve now?
3. Does an existing artifact already own this?
4. What happens if it is omitted (removal test)?
5. What would it accidentally acquire if expanded?
6. Is it justified only by a hypothetical future use?

If these cannot be answered with evidence or an accepted decision, do not create the artifact. When two designs satisfy the same accepted responsibilities, prefer fewer artifacts, fewer responsibilities per artifact, and fewer extension points over speculative flexibility.

## Evidence classification

Evidence is orthogonal to layer; it does not form another layer. Classify every material claim as one of: `observed`, `measured`, `specified`, `human-confirmed`, `inferred`, `assumed`, `proposed`. Do not present an inference or assumption as a fact, and do not let repetition upgrade evidence strength.

## Transition contracts

Layers connect through explicit transition contracts rather than implied responsibility: what crosses the boundary, what guarantees are preserved, what is deliberately not carried forward, and which decision authorizes the transition. A non-adjacent transition (skipping a layer) is a suspected bypass and needs explicit justification.

## Clarification protocol

Ask a narrow, evidence-backed question (not a broad design discussion) when: multiple owning layers are plausible, necessity cannot be established, a dependency bypasses a layer, or an assumption would materially affect downstream design. Mark the affected work `blocked` until resolved; do not guess and proceed.

## Relationship to this repository's authority

- "Proposed" and "Accepted" here mean the same as in `contracts/README.md` and `docs/ADR/README.md` — do not introduce a parallel lifecycle vocabulary. Record adoption decisions in `docs/governance/DECISION_REGISTER.md`.
- This guide does not replace `agents/architecture/AGENT_ARCHITECTURE.md`; it is an optional technique the agent may apply.
- Do not treat anything under `references/` as binding because it uses "SHALL"/"mandatory" language — that material is non-authoritative input, reviewed and adapted here.
