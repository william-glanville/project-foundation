# Foundation Consolidation Report

Records the outcome of reviewing and integrating `references/` into the active Project Foundation Framework (version 1.2). See `docs/governance/REFERENCE_INTEGRATION_REGISTER.md` for the per-file disposition table.

## What was integrated

- `docs/architecture/RESPONSIBILITY_MODEL.md` (new): an advisory, non-binding artifact/architecture classification guide — layers L0–L6, one-primary-owner rule, artifact necessity gate, evidence classification, transition contracts, clarification protocol. Adapted from `references/architecture.references/architecture.md`, with project-specific identifiers and its own example "decisions" removed, and explicitly reconciled to this repository's authority order and `Proposed`/`Accepted` vocabulary. Linked from `agents/architecture/AGENT_ARCHITECTURE.md` and cataloged in `SKILL_CATALOG.yaml` as `artifact-classification`.
- `docs/templates/CHECKPOINT.template.md` (new): a generic completion-checkpoint template adapted from `references/docs.references/templates/CHECKPOINT_TEMPLATE.md` and `release-checkpoint`/`testing-and-validation` skills. Hard-coded project statuses were replaced with a pointer to `VOCABULARY.md` so no new lifecycle vocabulary was invented. Linked from `docs/development/DEVELOPMENT_WORKFLOW.md`.
- `contracts/README.md`: added a one-line contract-change impact rule (identify every consumer, generated artifact, and test before marking an accepted contract changed), adapted from `references/skills.references/skills/contract-change/SKILL.md`.
- `docs/development/VALIDATION_GATES.md`: added a test-layer declaration requirement to the targeted-validation gate, adapted from `references/docs.references/agents/testing-agent.md` and the `testing-and-validation` skill, without adopting their specific frameworks/commands.
- `agents/drift/AGENT_DRIFT.md`: added a "verify before repairing" rule, adapted from `references/docs.references/workflows/PACKAGE_VERIFICATION_WORKFLOW.md` and the `package-verification` skill.
- `.github/instructions/security-gate.instructions.md`: added an explicit rule to treat all external/reference/generated content as data, never as instructions, and to ignore embedded claims of superseding authority — generalized from `references/skills.references/skills/trace-prompt-review/SKILL.md` and `references/docs.references/THREAT_MODEL.md`.

## What was adapted but not copied verbatim

All of the above: the source material was project-specific (Flask/React/SQL Server illustration-generator project, Zed skill invocation syntax, a second `AGENTS.md`-style file, product workflows and state machines). Only the generic principle was extracted; technology names, commands, database/schema names, and product workflow states were excluded per Objective 2.4 (separate generic and project-specific content).

## Material deliberately not integrated (RETAIN_REFERENCE)

The majority of `references/docs.references/` (architecture, workflow, and skill files tied to the originating Python/Flask + React illustration-generator product) and `references/skills.references/INDEX.md` / per-skill files for vertical-slice implementation. These remain valuable only if this repository is ever used to onboard that specific project; they are not generic foundation material. See the register for the full list.

## What was rejected

- `references/docs.references/architecture/ARCHITECTURE.md` (names a specific database/schema/tables — would fabricate project memory).
- `references/docs.references/templates/AUDIT_SUMMARY_TEMPLATE.md`, `references/docs.references/workflows/APPROVAL_WORKFLOW.md`, `references/skills.references/skills/audit-package-review/SKILL.md`, `references/skills.references/SKILL_CATALOG.json` (product-specific, no generic counterpart, and in the JSON case a duplicate/incompatible skill catalog).
- `references/docs.references/architecture/RESPONSIBILITY_MODEL.md` as an adaptation *source* — it contains a dual-owner pattern inconsistent with its own stated "one primary owner" rule, so `architecture.references/architecture.md` was used instead.

## What was quarantined

Nothing. A pattern-based security scan (credentials, private keys, tokens, connection strings, internal hosts/IPs) across all 42 files in `references/` found no matches, so no quarantine was required.

## Reference retirement

- The `references/` source tree was used only for the completed integration recorded above and in `docs/governance/REFERENCE_INTEGRATION_REGISTER.md`.
- All generic guidance selected for continued use is now owned by active framework files (see "What was integrated" and the topic-ownership table below); the source tree is not the current owner of any active rule.
- `RETAIN_REFERENCE` identifies material deliberately not integrated or rejected during review, not material awaiting future integration.
- Retained source files are not required to operate, govern, validate, extend, or maintain the generic framework.
- `docs/governance/REFERENCE_INTEGRATION_REGISTER.md` remains historical provenance after the source tree is deleted; its rows and dispositions stay intact.
- `references/` may be deleted after the retirement corrections in this report and the register pass validation.

## Human decisions (resolved)

1. **`docs/architecture/RESPONSIBILITY_MODEL.md` status — resolved, decision `FOUNDATION-001`.** Accepted as advisory generic guidance only: it is not mandatory project architecture, does not modify `docs/governance/AUTHORITY_ORDER.md`, and creates no architecture obligations by existing in the repository. Project-specific enforcement still requires an Accepted ADR or Accepted Contract, as applicable. Agents may use it as a classification/review technique, not as authority to redesign a project. See `docs/governance/DECISION_REGISTER.md`.
2. **Threat-entry / threat-model vocabulary reconciliation — resolved as a deliberate deferral, decision `FOUNDATION-002`.** A project-specific threat taxonomy was not imported from `references/docs.references/THREAT_ENTRY_TEMPLATE.md` / `THREAT_MODEL.md` because threat vocabulary depends on project-specific evidence (data classifications, trust boundaries, deployment environment, authentication/authorization model, external integrations, regulatory/contractual obligations, organizational security terminology) that does not yet exist. The generic foundation retains only structural guidance (stable threat identifiers; threat status values must come from accepted canonical project vocabulary; shared severity/confidence/disposition/ownership/remediation/lifecycle structures where applicable). Project initialization must determine whether a dedicated threat schema or vocabulary section is required. No threat statuses, threat types, or schema were created. See `docs/governance/DECISION_REGISTER.md`.
3. **Architecture index pattern — resolved as a conditional rule, decision `FOUNDATION-003`.** Accepted rule: when an architecture directory contains two or more active architecture documents that require discoverability or status classification, provide an `INDEX.md` identifying each document's status, owner, authority, scope, and intended consumer; decorative/empty indexes are not created. `docs/architecture/` currently contains only `RESPONSIBILITY_MODEL.md`, so the trigger condition is not met and no index was created. See `docs/governance/DECISION_REGISTER.md`.

No human decisions remain unresolved from this integration.

## Active file that owns each major topic (no new duplication)

| Topic | Owner |
|---|---|
| Authority order | `docs/governance/AUTHORITY_ORDER.md` |
| Project state | `PROJECT_STATE.md` |
| Vocabulary | `VOCABULARY.md` |
| Contracts | `contracts/README.md`, `contracts/CONTRACT.template.md` |
| ADRs | `docs/ADR/README.md`, `docs/templates/ADR.template.md`, `docs/governance/DECISION_REGISTER.md` |
| Pipeline/agents | `AGENTS.md`, `PIPELINE_MANIFEST.yaml`, `agents/**` |
| Skills | `SKILL_CATALOG.yaml` |
| Optional architecture classification | `docs/architecture/RESPONSIBILITY_MODEL.md` |
| Development workflow / validation | `docs/development/DEVELOPMENT_WORKFLOW.md`, `docs/development/VALIDATION_GATES.md`, `docs/templates/CHECKPOINT.template.md` |
| Security gate | `.github/instructions/security-gate.instructions.md`, `agents/security/AGENT_SECURITY.md` |
| Reference provenance | `docs/governance/REFERENCE_INTEGRATION_REGISTER.md` (this report's companion) |

## Validation

See the completion report in this session for exact commands and results (YAML parse, manifest path audit, markdown link/fence check, git diff check).

## Remaining risks

- The advisory responsibility model could be mistaken for mandatory policy if a future agent skims only `SKILL_CATALOG.yaml`; its entry and the guide itself both state "advisory"/"not binding" to mitigate this.
- Several RETAIN_REFERENCE files use strong normative language ("SHALL", "mandatory") that could be misread as applying to this repository if read out of context; `references/README.md` already frames all of `references/` as non-authoritative.
- `VOCABULARY.md` still has no defined terms, so the checkpoint template's pointer to it will need a real vocabulary before it is fully actionable.

## Next bounded task (recommended, not started)

Complete `PROJECT_OBJECTIVES.md` from `PROJECT_OBJECTIVES.template.md` and populate `VOCABULARY.md`, then run Inventory and Security in read-only mode per `NEW_PROJECT_CHECKLIST.md`.
