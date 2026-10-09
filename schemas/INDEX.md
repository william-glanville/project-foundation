# Schema Index

| Schema | Owner | Dependencies |
|---|---|---|
| report_metadata | Governance | None |
| finding | Governance | None |
| inventory_report | Inventory | report_metadata |
| security_report | Security | report_metadata, finding, sanitization_directives |
| classification_report | Classification | report_metadata |
| formatting_report | Formatting | report_metadata, finding |
| consistency_report | Consistency | report_metadata, finding |
| documentation_report | Documentation | report_metadata, finding |
| architecture_report | Architecture | report_metadata, finding |
| governance_report | Governance | report_metadata, finding |
| drift_report | Drift | report_metadata, finding |
| sanitization_directives | Security | finding identifiers |
| final_report | Reporting | report_metadata and all stage reports |

Schemas use the framework `type`, `enum`, `required`, `properties`, `ref`, and `external_ref` metamodel. Changes require corresponding manifest dependency updates.
