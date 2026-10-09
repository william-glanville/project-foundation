# AGENTS.md

## 1. Purpose

This file defines mandatory operating rules for AI agents performing architecture, design, analysis, review, planning, or implementation in this repository.

The model is inspired by the layered responsibility discipline of the OSI networking model. It is not an ISO compliance framework. Its purpose is to prevent agents from collapsing primitives, structures, mechanisms, capabilities, policies, behaviours, and intent into the same responsibility boundary.

The agent SHALL:

1. preserve architectural responsibility boundaries;
2. classify every governed artifact and material design statement;
3. stop at the boundary of the assigned task;
4. distinguish what an artifact owns from what it enables;
5. create only artifacts demonstrably required to achieve an accepted goal;
6. keep every artifact as lean as possible while still satisfying its declared responsibility;
7. ask for clarification when ownership, necessity, scope, or classification cannot be established safely;
8. maintain evidence, unknown, decision, and emergence-candidate registers; and
9. preserve rationale, rejected alternatives, consequences, scope, and traceability for downstream work.

The agent SHALL NOT infer higher-layer intent merely because a lower-layer artifact could enable it.

---

## 2. Normative Language

- **SHALL / SHALL NOT**: mandatory.
- **SHOULD / SHOULD NOT**: expected unless a documented reason justifies an exception.
- **MAY**: permitted but optional.

---

## 3. Governing Principles

### 3.1 Responsibility before implementation

For every artifact, define:

- what it is;
- why it must exist;
- what goal requires it;
- what it owns;
- what it consumes;
- what it exposes;
- what it guarantees;
- what it deliberately does not decide; and
- what would be lost if it were removed.

An artifact without a necessary, traceable responsibility SHALL NOT be created.

### 3.2 Enablement is not ownership

A lower-layer artifact may make a higher-layer result possible. That result is not part of the lower-layer artifact until an accepted higher-layer requirement selects it and a separately owned artifact defines it.

### 3.3 Emergence is contextual and recursive

Emergence is not a single top layer. A result emerging from lower-layer composition may become an input, primitive, structure, or mechanism within a higher architectural scope. This is analogous to mathematics, where a proven formula or composed function can be treated as an operand in a later expression without erasing how it was derived.

Therefore:

- emergent behaviour SHALL NOT be assigned a permanent global layer by name alone;
- classification SHALL be relative to a declared scope and composition boundary;
- a realised result MAY be reified as an artifact in a higher scope only through an explicit transition contract;
- its provenance, assumptions, guarantees, and unresolved limitations SHALL remain traceable; and
- the lower artifact SHALL NOT be expanded speculatively to support unrequested possible behaviours.

### 3.4 Lean sufficiency

Every artifact SHALL contain the minimum concepts, fields, dependencies, operations, and extension points required to satisfy its accepted goal and invariants.

"Potentially useful later" is not sufficient justification.

### 3.5 Clarify consequential ambiguity

If ambiguity materially changes ownership, necessity, contracts, dependencies, or downstream design, the agent SHALL stop the affected work, ask a narrow evidence-backed question, and record the outcome.

---

## 4. Responsibility Layers

Layer identifiers are stable within this framework. Classification is always relative to an explicit scope.

### L0: Primitive

Owns fundamental concepts, identity/equality semantics, value domains, intrinsic invariants, and atomic state.

Examples: identity, entity, value, attribute, state, event, message, resource, relationship.

Must not own workflow, policy, orchestration, business use, or outcome.

### L1: Structure

Owns composition and arrangement of primitives.

Examples: schemas, graphs, trees, sets, sequences, taxonomies, type systems, object models, structural topology.

Must not own traversal strategy, workflow, approval rules, optimisation objectives, or business outcomes.

### L2: Mechanism

Owns operations on structures without selecting higher-layer policy or purpose.

Examples: traversal, routing, persistence, replication, resolution, synchronisation, dispatch, protocol execution, state-transition mechanics.

Must not own business policy, organisational authority, application workflow, or strategic outcome.

### L3: Capability

Owns stable functions exposed by mechanisms.

Examples: query, search, authenticate, notify, version, recover, authorisation-decision request.

Owns contracts, inputs, outputs, preconditions, postconditions, failure semantics, and service guarantees.

Must not own why the capability is invoked or which business outcome is preferred.

### L4: Policy

Owns rules selecting, constraining, permitting, denying, prioritising, or configuring capabilities.

Examples: access rules, retention rules, validation policy, approval thresholds, routing preferences, risk limits.

Must not own structure, mechanism internals, end-to-end workflow, or business strategy.

### L5: Behaviour

Owns observable processes composed from capabilities under policy over time.

Examples: workflows, use cases, orchestrations, user journeys, operating procedures, interaction sequences.

Must not silently redefine lower-layer contracts or own enterprise intent.

### L6: Intent

Owns purpose, value, goals, outcomes, success criteria, and non-goals.

Examples: reduce investigation effort, improve planning accuracy, protect privacy, shorten recovery time.

Must not own technology, schema, protocol, mechanism, or implementation detail.

---

## 5. Relative Scope and Recursive Composition

### 5.1 Classification tuple

A layer classification is incomplete unless expressed as:

```text
(scope, composition boundary, owning layer)
```

Example:

```text
(project-core, graph-kernel, L2)
```

A classifier produced by several mechanisms may be L5 behaviour within the kernel scope. Its accepted output contract may later be consumed as an L0 or L1 input within an investigation scope. This does not move the original artifact. It creates a new artifact boundary with explicit provenance.

### 5.2 Reification rule

An emergent result may become a governed artifact only when all of the following are present:

1. a user-approved goal requires it;
2. its new scope and owning layer are declared;
3. its input and output contract is defined;
4. its derivation and evidence remain traceable;
5. its guarantees and uncertainty are preserved;
6. its necessity passes the justification gate; and
7. a transition contract links the producing and consuming artifacts.

### 5.3 No global classification by label

Terms such as "classification", "recommendation", "optimisation", "workflow", and "formula" SHALL NOT be assigned a layer from their names alone. The agent SHALL classify the responsibility they perform within the declared scope.

---

## 6. Formal Artifact Classification Schema

Every governed artifact SHALL include canonical YAML metadata:

```yaml
artifact:
  id: ART-0001
  title: Example Artifact
  type: data-model
  version: 1.0.0
  status: draft

classification:
  scope: project-core
  composition_boundary: graph-kernel
  owning_layer: L1
  secondary_layers: []
  concept_type: structure
  domain_scope: generic
  confidence: high
  basis:
    - Composes typed primitives.
  ambiguity: none

justification:
  requested_goal: GOAL-0001
  problem_solved: Represents typed relationships required by the accepted goal.
  necessity: required
  minimum_sufficient_responsibility:
    - Node and edge type definitions
    - Structural constraints
  alternatives_considered:
    - alternative: Unstructured relationship records
      rejected_because: Cannot enforce the required structural invariants.
  consequence_if_omitted:
    - Required relationships cannot be represented consistently.
  consequence_if_expanded:
    - Business policy and speculative behaviour would leak into the structure.
  removal_test: Removing it makes GOAL-0001 structurally unachievable.
  duplication_check: No existing artifact owns this responsibility.

responsibility:
  owns:
    - Structural relationship definitions
  exposes:
    - Typed structure for traversal mechanisms
  consumes:
    - ART-0000
  guarantees:
    - Declared relationship types satisfy structural invariants
  must_not_decide:
    - Traversal strategy
    - Ranking policy
    - Business workflow
    - Business outcome

minimality:
  required_elements: []
  optional_elements: []
  deferred_elements: []
  speculative_elements: []
  extension_points_justified: []
  lean_status: unreviewed

evidence:
  claims: []

transitions:
  inbound_contracts: []
  outbound_contracts: []

traceability:
  parent_artifact: null
  depends_on: []
  provides_to: []
  requirements: []
  goals:
    - GOAL-0001
  decisions: []
  unknowns: []
  emergence_candidates: []

review:
  last_reviewed: null
  reviewed_by: []
  boundary_status: unreviewed
  necessity_status: unreviewed
  unresolved_questions: []
```

### 6.1 Required classification values

`owning_layer` SHALL be one of `L0` through `L6`.

`confidence` SHALL be one of:

```text
high, medium, low, unresolved
```

`domain_scope` SHALL be one of:

```text
generic, domain, product, implementation
```

`necessity` SHALL be one of:

```text
required, conditionally-required, optional, unjustified
```

`lean_status` SHALL be one of:

```text
unreviewed, minimal, justified-exception, over-specified, blocked
```

`boundary_status` and `necessity_status` SHALL be one of:

```text
unreviewed, valid, warning, violation, blocked
```

### 6.2 One primary owner

Each artifact SHALL have one primary owning layer. Secondary layers are informational and do not create shared ownership.

If an artifact appears to require multiple owners, the agent SHALL split it, compose separately classified children, or request a documented exception.

---

## 7. Artifact Justification and Lean-Artifact Gate

This section is mandatory and takes precedence over speculative extensibility.

### 7.1 Creation gate

Before creating an artifact, component, field, operation, dependency, abstraction, plugin point, or layer, the agent SHALL answer:

1. Which accepted user goal requires it?
2. What precise problem does it solve now?
3. Which invariant or accepted requirement cannot be met without it?
4. Is an existing artifact already responsible for this problem?
5. Can the goal be met by a smaller artifact or composition?
6. What happens if it is omitted?
7. What additional responsibility would it accidentally acquire if expanded?
8. Is the proposed boundary independently testable?
9. Does the proposal introduce a generic abstraction for only one unproven use?
10. Does it include features justified only by hypothetical emergent behaviour?

If these cannot be answered with evidence or an accepted decision, the artifact SHALL NOT be created.

### 7.2 Minimum sufficient responsibility

The artifact SHALL implement only the smallest coherent responsibility that satisfies:

- the accepted goal;
- required invariants;
- accepted quality constraints;
- explicit transition contracts; and
- demonstrable current use.

Minimal does not mean incomplete. It means no responsibility or element exists without a present, traceable reason.

### 7.3 Removal test

The agent SHALL state what accepted goal or invariant fails if the artifact is removed.

If no accepted goal or invariant fails, classify the artifact as `optional` or `unjustified`. An unjustified artifact SHALL be removed or not created.

### 7.4 Duplication test

Before creating a new artifact, search existing artifacts for overlapping ownership.

A new artifact SHALL NOT be introduced merely to rename, wrap, proxy, or re-express an existing responsibility unless the new boundary solves a documented contract, isolation, security, lifecycle, or substitution problem.

### 7.5 Expansion test

For every proposed element, classify it as:

- **required now**;
- **conditional on an accepted near-term decision**;
- **deferred**;
- **speculative**.

Speculative elements SHALL NOT be included in the active artifact. Record them only as scoped notes or emergence candidates when useful.

### 7.6 Extension-point rule

Extension points, plugin interfaces, generic factories, policy engines, and abstraction layers SHALL require explicit justification. "Future flexibility" alone is insufficient.

An extension point is justified only when at least one is true:

- multiple accepted implementations exist;
- a confirmed external variation must be isolated;
- platform policy requires substitution;
- a known lifecycle boundary requires independent evolution; or
- an accepted decision explicitly funds the flexibility cost.

### 7.7 Simplicity preference

When two designs satisfy the same accepted responsibilities and constraints, prefer the design with:

- fewer artifacts;
- fewer responsibilities per artifact;
- fewer dependencies;
- fewer concepts;
- fewer mutable states;
- fewer extension points;
- fewer cross-layer transitions; and
- clearer tests and failure semantics.

Complexity SHALL be justified by a current requirement, not by imagination of possible future use.

---

## 8. Evidence Classification

Evidence is orthogonal to L0-L6. It does not form another responsibility layer.

Every material claim SHALL be classified as one of:

```text
observed
measured
specified
human-confirmed
inferred
assumed
proposed
```

Canonical form:

```yaml
claim:
  id: CLM-0001
  text: The path search is bounded and breadth-first.
  evidence_type: observed
  sources: []
  confidence: high
  scope: component
  limitations: []
```

Inferences and assumptions SHALL NOT be presented as facts. Evidence strength SHALL NOT be silently upgraded by repetition.

---

## 9. Layer Transition Contracts

Layers SHALL connect through explicit transition contracts rather than implied responsibility.

### 9.1 Standard transitions

- L0 to L1: composition contract;
- L1 to L2: mechanism applicability contract;
- L2 to L3: capability exposure contract;
- L3 to L4: policy binding contract;
- L4 to L5: behaviour composition contract;
- L5 to L6: outcome traceability contract.

### 9.2 Canonical transition schema

```yaml
transition:
  id: TRN-0001
  from_artifact: ART-0001
  from_scope: project-core
  from_layer: L1
  to_artifact: ART-0002
  to_scope: project-core
  to_layer: L2
  contract_type: mechanism-applicability
  inputs: []
  outputs: []
  guarantees_preserved: []
  information_not_carried_forward: []
  assumptions: []
  evidence: []
  governing_decisions: []
```

A non-adjacent transition SHALL be treated as a suspected bypass and requires explicit justification or intermediate artifacts.

### 9.3 Recursive transition

When an emergent result becomes an input to a higher scope, the transition SHALL state:

- the original producing artifact;
- the result selected by the user-approved goal;
- the new artifact identity;
- the new scope and layer;
- properties preserved;
- properties discarded;
- uncertainty carried forward; and
- the decision authorising reification.

---

## 10. Emergence Discipline

### 10.1 Emergence is not part of the current artifact by default

Possible behaviours enabled by an artifact are not requirements, responsibilities, features, or extension obligations until the user or designated authority states what outcome is wanted.

The agent SHALL NOT:

- optimise an artifact for a merely possible behaviour;
- add fields or methods for hypothetical uses;
- describe candidate behaviour as delivered functionality;
- require the lower artifact to understand higher-layer intent; or
- create a behaviour artifact without an accepted goal.

### 10.2 Candidate emergence register

Potential emergent results MAY be recorded without becoming part of the architecture.

Store them in:

```text
architecture/emergence-candidates.md
```

Canonical form:

```yaml
emergence_candidate:
  id: EMG-0001
  description: Dependency-impact analysis may be composed from relationship queries and path policies.
  observed_from:
    - ART-0001
    - ART-0002
  current_status: unselected
  not_a_requirement: true
  not_owned_by_source_artifacts: true
  possible_scopes:
    - investigation-workflow
  possible_layers:
    - L3
    - L5
  ambiguity_reason: The layer depends on whether the requested result is a reusable capability or an orchestrated workflow.
  user_goal_required: true
  design_effect: none
  expiry_or_review: null
```

The register is informational. Entries SHALL have no design effect while `unselected`.

### 10.3 Selection by stated goal

Only after the user states or accepts a goal may a candidate be promoted. Promotion requires:

1. a goal record;
2. classification within a declared scope;
3. justification and removal tests;
4. an owning artifact;
5. transition contracts;
6. evidence and uncertainty handling;
7. minimality review; and
8. a decision-register entry.

### 10.4 Emergence chains

An emergent result may enable a later emergent result. Each step SHALL be separately represented:

```text
Artifact composition
  -> selected result A
  -> reified artifact A
  -> higher-scope composition
  -> selected result B
  -> reified artifact B
```

No step may be collapsed merely because the final use is foreseeable.

Each link SHALL retain:

- source artifacts;
- scope;
- owning layer;
- assumptions;
- guarantees;
- evidence;
- selection decision; and
- what is intentionally not carried forward.

### 10.5 Formula analogy

A mathematical formula demonstrates the intended discipline:

- lower-level symbols and operators have bounded definitions;
- their composition produces a result;
- the result can become an operand in a larger expression;
- the larger expression does not change the original operator's responsibility; and
- each composition must preserve the assumptions under which its result is valid.

Agents SHALL apply the same discipline to architecture.

---

## 11. Pre-Generation Boundary Declaration

Before generating a design, the agent SHALL declare:

```yaml
task_boundary:
  task_id: TASK-0001
  accepted_goal: GOAL-0001
  scope: project-core
  target_artifact: ART-0001
  owning_layer: L1
  owns:
    - Structural relationships
  may_reference:
    - L0 primitive definitions
    - L2 required input constraints
  excludes:
    - Traversal implementation
    - Ranking policy
    - Workflow
    - Business outcome
  evidence_available: []
  unknowns: []
  blocking_clarifications: []
```

Generation SHALL remain within this boundary unless an accepted decision changes it.

---

## 12. Unknowns Register

Unknowns SHALL be preserved rather than silently converted into assumptions.

Canonical location:

```text
architecture/unknowns-register.md
```

Schema:

```yaml
unknown:
  id: UNK-0001
  description: Precise statement of what is not known.
  affected_scope: project-core
  likely_layers: []
  affected_artifacts: []
  blocking: true
  evidence_needed: []
  resolution_owner: null
  interim_constraint: null
  status: open
```

A non-blocking unknown MAY coexist with continued work. A blocking unknown SHALL prevent affected design decisions.

---

## 13. Clarification Protocol

The agent SHALL request clarification when:

1. multiple owning layers are plausible;
2. artifact purpose conflicts with content;
3. terminology has materially different interpretations;
4. necessity cannot be established;
5. an artifact appears to own multiple layers;
6. an intermediate responsibility is absent;
7. a dependency bypasses a layer;
8. current work would decide policy or intent outside scope;
9. existing decisions conflict;
10. confidence is unresolved; or
11. an assumption would materially affect downstream design.

A request SHALL be narrow and evidence-backed:

```markdown
### Architectural clarification required

**Artifact:** ART-XXXX
**Task boundary:** scope and layer
**Ambiguity:** concise description
**Why discussion is required:** ownership, necessity, or downstream consequence
**Evidence:** known facts
**Options:** classifications or decisions with consequences
**Recommendation:** optional and labelled
**Decision requested:** one precise question
```

Affected work SHALL be marked `blocked` until resolved.

---

## 14. Decision Register

Canonical location:

```text
architecture/decision-register.md
```

Create an entry when clarification is requested, classification changes, necessity is disputed, a candidate emergence is promoted, a transition exception is accepted, artifacts are split or combined, assumptions become decisions, or sources conflict.

```yaml
decision:
  id: DEC-0001
  title: Concise title
  status: proposed
  date: YYYY-MM-DD
  scope: project
  review_on: null
  expiry_condition: null

trigger:
  type: classification-ambiguity
  affected_artifacts: []
  discussion_required: true
  reason_discussion_was_required: []

question:
  text: Precise decision question
  candidate_outcomes: []

outcome:
  decision: null
  rationale: []
  rejected_alternatives: []

consequences:
  positive: []
  negative_or_cost: []
  downstream_guidance: []

traceability:
  evidence: []
  unknowns: []
  transitions: []
  supersedes: []
  superseded_by: null
  related_decisions: []
```

The agent MAY propose a decision but SHALL NOT mark a consequential decision accepted without explicit authority.

Decisions SHALL be applied only within scope. Changed context requires review or a superseding decision, not silent history edits.

---

## 15. Boundary and Minimality Validation

Each review SHALL test:

1. ownership mismatch;
2. upward leakage;
3. downward leakage;
4. layer bypass;
5. responsibility escalation;
6. responsibility collapse;
7. missing owner;
8. duplicate owner;
9. emergent result misrepresented as intrinsic structure;
10. business-intent contamination;
11. unsupported evidence upgrade;
12. unjustified artifact;
13. speculative extension;
14. redundant abstraction;
15. scope drift;
16. reification without transition contract; and
17. unnecessary complexity.

Outcomes:

- **PASS**: boundaries and necessity are valid;
- **WARNING**: potential issue does not yet invalidate the artifact;
- **VIOLATION**: rule is broken;
- **BLOCKED**: clarification or authority is required.

Example finding:

```yaml
finding:
  id: FIND-0001
  severity: violation
  artifact_id: ART-0001
  rule: speculative-emergence
  statement: The graph includes optimisation fields for future production planning.
  explanation: No accepted user goal requires production optimisation, and the L1 artifact is assuming higher-layer use.
  recommended_correction:
    - Remove the speculative fields.
    - Record the idea as an unselected emergence candidate if useful.
  requires_decision: false
```

---

## 16. Required Component Definition

Every proposed component SHALL declare:

```yaml
component:
  name: Example Component
  scope: project-core
  owning_layer: L2
  requested_goal: GOAL-0001
  responsibility: One minimum coherent responsibility
  justification: Why this component is necessary now
  inputs: []
  outputs: []
  dependencies: []
  capabilities_exposed: []
  invariants: []
  failure_semantics: []
  must_not_do: []
  consequence_if_removed: []
  governing_decisions: []
```

A definition without `justification`, `must_not_do`, and `consequence_if_removed` is incomplete.

---

## 17. Agent Operating Procedure

### Before work

1. Read this file.
2. Identify the user's stated goal and non-goals.
3. Identify the task scope, composition boundary, and target layer.
4. Locate authoritative artifacts, tests, decisions, evidence, and unknowns.
5. Declare the pre-generation task boundary.
6. Apply the justification gate before proposing new artifacts.
7. Stop if material ambiguity prevents safe progress.

### During work

1. Label facts, evidence, assumptions, inferences, recommendations, and decisions.
2. Maintain one owner per artifact.
3. Keep artifacts minimally sufficient.
4. Do not add speculative behaviour or extension points.
5. Record possible but unselected outcomes only as emergence candidates.
6. Require transition contracts for layer or scope changes.
7. State what each component must not do.
8. Preserve unknowns and evidence provenance.

### After work

1. Report created, changed, removed, or deferred artifacts.
2. Report justification and removal-test outcomes.
3. Report classifications, transitions, and boundary findings.
4. Update decision, unknown, evidence, and candidate-emergence registers.
5. List unresolved questions and downstream consequences.
6. Do not continue into implementation unless requested and governed by accepted design.

---

## 18. Authority Order

Unless a repository defines a stricter order:

1. accepted contracts and executable contract tests;
2. accepted decisions and root invariants;
3. approved goals, requirements, and workflow objectives;
4. accepted artifact classifications and exclusions;
5. current implementation;
6. generated suggestions.

Conflicts SHALL be surfaced and resolved explicitly.

---

## 19. Anti-Drift Rules

The agent SHALL NOT:

- change boundaries to simplify implementation;
- move policy into mechanism because it can be enforced there;
- move workflow into a capability because it participates in the workflow;
- treat likely use as intrinsic structural responsibility;
- add business fields to generic primitives without accepted need;
- create wrappers, factories, engines, plugins, or abstraction layers without justification;
- build for unselected emergence candidates;
- classify an emergent result globally without scope;
- erase derivation when reifying a composed result;
- globalise a local clarification;
- turn unknowns into facts;
- claim validation that did not occur; or
- proceed past a blocked decision.

---

## 20. Worked Examples

### 20.1 Graph design

- L0: node identity, edge identity, relationship type.
- L1: typed nodes, typed edges, adjacency and structural constraints.
- L2: traversal and path enumeration.
- L3: relationship and path query capabilities.
- L4: permitted depth, ranking, and visibility policy.
- L5: a selected dependency-investigation workflow.
- L6: a stated goal to reduce investigation effort.

Possible production planning, recommendation, and optimisation behaviours are not part of the graph design until selected by an accepted goal.

### 20.2 Recursive emergence

1. A graph structure and traversal mechanism produce candidate paths.
2. Candidate-path generation is emergent behaviour in the graph-kernel scope.
3. If the user requires reusable candidate-path retrieval, its accepted output is reified as an L3 capability artifact.
4. A ranking policy may compose that capability into ranked paths.
5. If the user requires an investigation workflow, ranked paths become one input to an L5 artifact.
6. None of these later uses changes the responsibility of the graph structure or traversal mechanism.

### 20.3 Microkernel

The kernel owns only minimum primitives, mechanisms, contracts, and extension loading required by accepted plugins.

It must not own plugin policy, application workflow, or product intent. It SHALL NOT contain extension points for hypothetical plugins.

### 20.4 Formula composition

A formula artifact owns its declared operands, operation, assumptions, and result contract. A subsequent formula may consume that result as an operand through a transition contract. The later formula does not expand the earlier formula's responsibility.

---

## 21. Completion Checklist

Before declaring architecture work complete, verify:

- [ ] The user's accepted goal and non-goals are recorded.
- [ ] Every governed artifact has a unique ID, scope, boundary, and owner.
- [ ] Every artifact passes the creation, removal, duplication, expansion, and simplicity tests.
- [ ] Every artifact is as lean as possible while remaining sufficient.
- [ ] Every component declares `justification`, `must_not_do`, and `consequence_if_removed`.
- [ ] No speculative element or extension point remains in an active artifact.
- [ ] Possible emergent results remain non-binding until selected by the user.
- [ ] Each selected emergent result has its own scope, owner, justification, and transition contract.
- [ ] Recursive emergence chains preserve provenance and assumptions.
- [ ] Evidence, inference, assumption, and proposal are distinguished.
- [ ] Unknowns remain visible.
- [ ] No responsibility is missing or multiply owned.
- [ ] No layer bypass is unexplained.
- [ ] Clarification reasons and outcomes are recorded.
- [ ] Decisions are applied only within scope and validity.
- [ ] Final boundary and minimality reviews produced PASS, WARNING, VIOLATION, or BLOCKED outcomes.

---

## 22. Initial Governing Decisions

### DEC-0001: Adopt an OSI-inspired responsibility model

- **Status:** accepted
- **Date:** 2026-10-05
- **Scope:** project
- **Decision:** use L0 through L6 responsibility layers defined in this file.
- **Reason discussion was required:** "ISO for architecture" was initially misread as standards guidance; the intended analogy was OSI-style responsibility separation.
- **Consequence:** material terminology ambiguity must be clarified and recorded.

### DEC-0002: Treat emergence as selected, scoped composition rather than intrinsic lower-layer behaviour

- **Status:** accepted
- **Date:** 2026-10-05
- **Scope:** project
- **Decision:** possible emergent behaviours remain outside active artifacts until an accepted user goal selects them. Selected results may be reified in higher scopes through explicit transitions.
- **Rationale:** emergent results can occur recursively at different scopes, like formulas composed from prior formulas. A global "emergent behaviour layer" would misclassify them and encourage premature design.
- **Consequence:** use an informational candidate register, goal-based selection, and explicit reification contracts.

### DEC-0003: Require justification and lean sufficiency for every artifact

- **Status:** accepted
- **Date:** 2026-10-05
- **Scope:** project
- **Decision:** no artifact or element may exist without a current, traceable purpose. Every artifact must be the smallest coherent form that achieves its accepted goal and invariants.
- **Rationale:** correct layer classification does not prevent unnecessary architecture. Unjustified artifacts and speculative flexibility create complexity, blur ownership, and bias later design.
- **Consequence:** all artifacts must pass creation, removal, duplication, expansion, and simplicity tests.

---

## 23. Final Instruction

Do not optimise for completing the thought or anticipating every possible future use.

Optimise for the smallest correct artifact at the correct boundary for the goal the user has actually selected.

When a lower layer enables a possible higher-layer result, record the possibility only if useful, then stop. Do not treat it as a requirement, do not optimise for it, and do not assign it to a layer until the user states the desired goal.

When a composed result is selected later, create a new scoped artifact, preserve its derivation, justify its existence, and connect it through an explicit transition contract.
