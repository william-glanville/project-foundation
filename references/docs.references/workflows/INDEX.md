# Workflow Definitions

- [TRACE_WORKFLOW.md](TRACE_WORKFLOW.md)
- [AUDIT_WORKFLOW.md](AUDIT_WORKFLOW.md)
- [APPROVAL_WORKFLOW.md](APPROVAL_WORKFLOW.md)
- [PRODUCTION_WORKFLOW.md](PRODUCTION_WORKFLOW.md)
- [PACKAGE_VERIFICATION_WORKFLOW.md](PACKAGE_VERIFICATION_WORKFLOW.md)

These documents describe intended product workflow behaviour; they do not imply that every stage has been implemented or persisted. The current un-deployed schema is the 17-table lifecycle baseline documented in `docs/architecture/ARCHITECTURE.md`. Inventory, ROI, checklist, annotation, audit-package, package-verification, and transition-history tables are deferred. Audit packages and verification results are outputs, not a `Report` domain. Backend use cases are not yet implemented; any future legality rules must be owned by the domain/application boundary and validated against the governing ADRs.
