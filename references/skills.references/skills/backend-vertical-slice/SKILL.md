---
name: backend-vertical-slice
description: Implement or review a narrow Python and Flask backend slice while preserving domain, application, port, and infrastructure boundaries.
---
# Backend Vertical Slice

## Required reading
Read `AGENTS.md`, the ADR index and applicable ADRs, architecture documents, relevant contracts, current source, and tests.

## Before editing
```text
Task:
Owning layer:
Evidence:
Immediate consumer:
Applicable ADRs:
Contract impact:
Non-responsibilities:
Acceptance checks:
```

## Rules
- Flask is an adapter, not the domain.
- One route invokes one application use case.
- Domain imports no Flask, SQLAlchemy, Pillow, OpenCV, provider SDK, filesystem adapter, or HTTP type.
- Application depends on ports; infrastructure implements ports.
- Do not hold database transactions across provider calls or long image processing.
- Write temporary artifacts, validate, hash, then atomically promote.
- Implement only the requested slice and add focused pytest coverage.
- Do not add queues, event buses, plugin registries, or generic frameworks without current need and an Accepted ADR.

## Validate
Run configured backend gates and report exact commands, results, ADR impact, and known gaps.
