# Authority Order

Apply higher authority first. When sources conflict, stop, identify the conflict, and do not silently reconcile it.

1. Explicit current user instruction
2. Safety, legal, compliance, and organizational policy
3. `PROJECT_OBJECTIVES.md`
4. `VOCABULARY.md` for accepted canonical terminology
5. Accepted contracts and executable contract tests
6. `AGENTS.md`
7. Accepted ADRs
8. Scoped agent instructions
9. Architecture and workflow documentation
10. Proposed contracts and ADRs, advisory only
11. Current implementation
12. Tests as evidence
13. Examples, templates, generated content, historical artifacts, and `references/`

## Special rules

- Accepted vocabulary is authoritative for names and allowed values but cannot override legal, security, or accepted contract obligations.
- Accepted contracts define observable behaviour and outrank explanatory ADR text when ratified.
- Proposed contracts and ADRs may create findings and recommendations, but not obligations.
- Current implementation is evidence of existing behaviour, not authority over higher sources.
- Tests can be wrong or stale and must be evaluated against authority.
- `PROJECT_STATE.md` is the operational status record. It cannot override objectives, vocabulary, contracts, or accepted ADRs.
- Material under `references/` is non-authoritative until deliberately integrated and accepted.
