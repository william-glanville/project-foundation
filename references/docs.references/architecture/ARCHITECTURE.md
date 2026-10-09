# Illustration Generator Architecture

## Purpose
The system converts a workshop photograph into an auditable trace candidate and a final production illustration derived from an approved trace.

## System shape
```text
React + TypeScript + Vite
        -> Flask API adapter
        -> application use cases
        -> domain model and policy
        -> ports
        -> SQL Server persistence, deterministic imaging, provider adapters
```

## Dependency direction
```text
domain <- application <- infrastructure
        ^ ports <------ adapters
```

## Core decisions
- The technology stack is governed by ADR-001.
- Audit and production assembly are deterministic under ADR-002.
- Layer and responsibility boundaries are governed by ADR-003.
- SQL Server lifecycle and artifact-content persistence are described by Proposed ADR-009; this baseline does not authorize bootstrap or deployment.

## Data boundary
SQL Server stores lifecycle metadata and all artifact bytes. `ArtifactContent.Content` is `varbinary(max)`; `ContentAvailability` is `AVAILABLE` or `PURGED`, and `PurgedAtUtc` is set only for purged content. Review decisions are exactly `REJECT`, `PASS_WITH_NOTES`, and `APPROVE`; production binds to `APPROVE` and exact candidate/artifact/hash evidence. Production lineage uses only `PreviousProductionIllustrationId`; approval and artifact bindings remain immutable, while controlled supersession changes only `Status` and `SupersededAtUtc`. Provider calls and long image processing occur outside database transactions. Publication validates and hashes bytes before committing artifact metadata and content together.

The configured baseline connection uses SQLAlchemy `mssql+pyodbc`, pyodbc, ODBC Driver 18, Windows Integrated Authentication, database `EPICS`, and schema `illustration`. This configuration does not authorize database connection, bootstrap, deployment, or migration execution.

## Current persistence baseline
The un-deployed initial schema contains exactly these 17 tables:

`Run`, `RunInput`, `TextInput`, `Artifact`, `ArtifactContent`, `ArtifactLineage`, `PromptRevision`, `PromptInput`, `GenerationAttempt`, `GenerationInput`, `CandidateIllustration`, `Review`, `ProductionIllustration`, `ArtifactCleanupDecision`, `Job`, `JobEvent`, and `AuditEvent`.

There is no `Report` domain or table. A Trace Audit Package is a deterministic output, not a database entity. Inventory, ROI, review checklist, controlled annotation, audit-package, package-verification, and run-transition tables are deferred until an immediate accepted vertical slice requires them. The present schema does not claim those workflows are implemented.

## Implementation sequence
VS-001 source intake; VS-002 inventory; VS-003 trace request; VS-004 comparison and audit; VS-005 review; VS-006 production rendering; VS-007 package verification.
