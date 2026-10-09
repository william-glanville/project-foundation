# Artifact Classification

## Required fields
Artifact ID, type, owning layer, status, justification, required-by reference, immediate consumers, non-responsibilities, evidence classification, parent artifacts, SHA-256, creator, timestamp, and software provenance.

## Types
Source, schema, domain, mechanism, capability, policy, behaviour, intent, evidence, decision, test, documentation.

## Evidence
OBSERVED, MEASURED, SPECIFIED, INFERRED, ASSUMED, PROPOSED.

## Lifecycle
Proposed -> accepted -> implemented -> verified. Historical states include superseded and rejected. Published runtime artifacts are immutable; correction creates a new revision.

## Admission rule
An artifact is admitted only when an accepted current requirement, ADR, contract, or test identifies an immediate need and consumer.
