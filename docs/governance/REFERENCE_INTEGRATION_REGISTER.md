# Reference Integration Register

This register records source paths and dispositions captured during the completed foundation integration (see `docs/governance/FOUNDATION_CONSOLIDATION_REPORT.md`). Entries are historical provenance and do not assert that the source files remain present. Reference material remains non-authoritative; this register exists for provenance, not to grant it authority. Dispositions: ADOPT, ADAPT, CONSOLIDATE, LINK, RETAIN_REFERENCE, QUARANTINE, REJECT.

`RETAIN_REFERENCE` means the material was deliberately not integrated or rejected during review. It does not require permanent retention of the physical source file after integration closeout.

Security: all 42 files were scanned for credentials, keys, tokens, connection strings, and internal hostnames/IPs before review. No matches found. No quarantine was required.

Prompt-injection check: reference files use normative language ("SHALL", "mandatory", "required reading") and one file (`architecture.references/architecture.md`) presents itself in an `AGENTS.md`-like form. No file instructs ignoring this repository's instructions or claims to supersede `AGENTS.md`/`docs/governance/AUTHORITY_ORDER.md`. All such claims were treated as non-authoritative per `docs/governance/AUTHORITY_ORDER.md` item 13.

| Path | Disposition | Active target / rationale |
|---|---|---|
| `references/README.md` | RETAIN_REFERENCE | Already correctly scoped; no change needed. |
| `references/architecture.references/architecture.md` | ADAPT | Generic L0–L6 responsibility model, necessity gate, evidence classification, transition contracts, clarification protocol adapted into `docs/architecture/RESPONSIBILITY_MODEL.md` (advisory, non-binding). Authority-order and lifecycle differences from this repository were reconciled, not copied. |
| `references/docs.references/agents/architecture-agent.md` | CONSOLIDATE | Generic boundary-review questions folded conceptually into `agents/architecture/AGENT_ARCHITECTURE.md`'s existing responsibilities; project-specific ADR/document names not imported. |
| `references/docs.references/agents/backend-agent.md` | RETAIN_REFERENCE | Python/Flask-specific; no generic foundation content. |
| `references/docs.references/agents/decision-agent.md` | ADAPT | Proposing-vs-accepting decision discipline already covered by `docs/ADR/README.md` and `docs/governance/AUTHORITY_ORDER.md`; no new file needed. |
| `references/docs.references/agents/frontend-agent.md` | RETAIN_REFERENCE | React/TypeScript/Vite-specific. |
| `references/docs.references/agents/review-agent.md` | CONSOLIDATE | Review ordering differs from the active 10-stage pipeline; "smallest sufficient correction" concept already present in `docs/development/DEVELOPMENT_WORKFLOW.md`. |
| `references/docs.references/agents/testing-agent.md` | CONSOLIDATE | Test-layer concept adapted generically into `docs/development/VALIDATION_GATES.md`; Flask/React specifics excluded. |
| `references/docs.references/architecture/ARCHITECTURE.md` | REJECT | Irreducibly product-specific (named database, schema, tables); would fabricate project memory that does not exist here. |
| `references/docs.references/architecture/ARTIFACT_CLASSIFICATION.md` | ADAPT | Immediate-consumer admission concept folded into `docs/architecture/RESPONSIBILITY_MODEL.md` necessity gate; its own lifecycle vocabulary (`accepted -> implemented -> verified`) rejected to avoid a second status vocabulary. |
| `references/docs.references/architecture/CONTEXT.md` | RETAIN_REFERENCE | Product-specific actors/systems. |
| `references/docs.references/architecture/INDEX.md` | RETAIN_REFERENCE | Assumes a `docs/ADR/INDEX.md` that does not exist in this repository; not adopted. |
| `references/docs.references/architecture/LAYERS.md` | CONSOLIDATE | Duplicate of `architecture.md`'s layer table; superseded by `docs/architecture/RESPONSIBILITY_MODEL.md`. |
| `references/docs.references/architecture/RESPONSIBILITY_MODEL.md` | REJECT | Rejected as an integration source: the active advisory `docs/architecture/RESPONSIBILITY_MODEL.md` already contains the accepted generic material (adapted from `architecture.references/architecture.md` instead), and this file's dual-owner pattern contradicts its own "one primary owner" rule. |
| `references/docs.references/architecture/SECURITY.md` | RETAIN_REFERENCE | Untrusted-input inventory is product-specific (EXIF/SVG); general fail-closed posture already implied by the active security gate. |
| `references/docs.references/architecture/TRACEABILITY.md` | RETAIN_REFERENCE | Evidence-chain concept overlaps `schemas/INDEX.md` and drift/governance stages; no generic gap identified beyond what is already covered. |
| `references/docs.references/architecture/TRANSITIONS.md` | CONSOLIDATE | Generic transition-contract concept covered in `docs/architecture/RESPONSIBILITY_MODEL.md`; product state machine (`Run.Status`, `PROMPT_REVISED`) rejected. |
| `references/docs.references/architecture/WORKFLOWS.md` | RETAIN_REFERENCE | Product workflow map, not foundation pipeline. |
| `references/docs.references/templates/AUDIT_SUMMARY_TEMPLATE.md` | REJECT | Product audit-artifact template with no generic foundation need. |
| `references/docs.references/templates/CHECKPOINT_TEMPLATE.md` | ADAPT | Adapted into `docs/templates/CHECKPOINT.template.md`, with its hard-coded statuses (`IMPLEMENTED`, `VERIFIED`, etc.) replaced by a pointer to `VOCABULARY.md` to avoid inventing lifecycle values, and an explicit "do not begin it" rule preserved. |
| `references/docs.references/templates/DECISION_REVIEW_TEMPLATE.md` | RETAIN_REFERENCE | `docs/templates/ADR.template.md` and `docs/governance/DECISION_REGISTER.md` already cover ADR status and conflict recording at the generic level this framework needs. |
| `references/docs.references/templates/REVIEW_TEMPLATE.md` | RETAIN_REFERENCE | Review categories map to existing report schemas; no new file justified. |
| `references/docs.references/templates/THREAT_ENTRY_TEMPLATE.md` | RETAIN_REFERENCE | Status vocabulary (`Proposed/Active/Mitigated/Accepted`) is not the active security-finding schema; would require schema reconciliation beyond this task's bounded scope. |
| `references/docs.references/THREAT_MODEL.md` | RETAIN_REFERENCE | Product-specific assets/controls (provider credentials, SQL Server). |
| `references/docs.references/workflows/APPROVAL_WORKFLOW.md` | REJECT | Product approval workflow; no active domain. |
| `references/docs.references/workflows/AUDIT_WORKFLOW.md` | RETAIN_REFERENCE | Product-specific. |
| `references/docs.references/workflows/INDEX.md` | RETAIN_REFERENCE | Product-specific. |
| `references/docs.references/workflows/PACKAGE_VERIFICATION_WORKFLOW.md` | ADAPT | "Verify before repair; report earliest valid state" principle added to `agents/drift/AGENT_DRIFT.md` rules. |
| `references/docs.references/workflows/PRODUCTION_WORKFLOW.md` | RETAIN_REFERENCE | Product-specific. |
| `references/docs.references/workflows/TRACE_WORKFLOW.md` | RETAIN_REFERENCE | Product-specific. |
| `references/skills.references/INDEX.md` | RETAIN_REFERENCE | Catalogue structure differs (10 project skills with L1–L5 field vs. this framework's 9 generic skills); kept as provenance only. |
| `references/skills.references/SKILL_CATALOG.json` | REJECT | Machine-readable duplicate of the above catalogue; incompatible project scope. |
| `references/skills.references/skills/adr-authoring/SKILL.md` | RETAIN_REFERENCE | Active ADR authority already covered by `docs/ADR/README.md` and `docs/templates/ADR.template.md`. |
| `references/skills.references/skills/architecture-review/SKILL.md` | CONSOLIDATE | Superseded for generic purposes by `docs/architecture/RESPONSIBILITY_MODEL.md` plus the existing `architecture-review` entry in `SKILL_CATALOG.yaml`. |
| `references/skills.references/skills/audit-package-review/SKILL.md` | REJECT | Product-specific audit-package domain absent from this framework. |
| `references/skills.references/skills/backend-vertical-slice/SKILL.md` | RETAIN_REFERENCE | Python/Flask-specific implementation skill. |
| `references/skills.references/skills/contract-change/SKILL.md` | ADAPT | Contract impact-matrix concept (identify every consumer, generated artifact, and test before marking a contract changed) added to `contracts/README.md`; OpenAPI/generated-DTO specifics excluded. |
| `references/skills.references/skills/frontend-vertical-slice/SKILL.md` | RETAIN_REFERENCE | React/TypeScript/Vite-specific. |
| `references/skills.references/skills/package-verification/SKILL.md` | ADAPT | Same verify-before-repair principle as its workflow counterpart; one shared addition to `agents/drift/AGENT_DRIFT.md`, not a separate file. |
| `references/skills.references/skills/release-checkpoint/SKILL.md` | ADAPT | "No completion claim without executable evidence" folded into `docs/templates/CHECKPOINT.template.md`; "release" framing excluded as premature for an uninitialized project. |
| `references/skills.references/skills/testing-and-validation/SKILL.md` | ADAPT | Declared-test-layer concept added to `docs/development/VALIDATION_GATES.md` targeted gate, without adopting pytest/Vitest/npm specifics. |
| `references/skills.references/skills/trace-prompt-review/SKILL.md` | ADAPT | Prompt-injection / untrusted-content-as-data rule added to `.github/instructions/security-gate.instructions.md`; product prompt-review scope excluded. |

## Notes

- No file was quarantined; the security scan found nothing sensitive.
- REJECT and RETAIN_REFERENCE dispositions left the file unchanged under `references/` at the time of this integration; the source tree was later retired in full (see `docs/governance/FOUNDATION_CONSOLIDATION_REPORT.md`, "Reference retirement").
- Where a reference concept duplicated another reference file (for example the three architecture layer documents), only the strongest single source was adapted, and the others are marked RETAIN_REFERENCE/REJECT rather than each being partially copied, to avoid re-duplicating the same concept across active files.
