# Testing Agent Guide

## Mission

Provide executable evidence that the requested slice satisfies accepted contracts without weakening them.

## Test layers

- Domain unit tests for invariants and transitions.
- Contract tests for JSON Schema, OpenAPI, provider adapters, and persistence ports.
- Integration tests for Flask use cases and storage atomicity.
- Frontend component and accessibility tests.
- Controlled visual regression for deterministic rendering.
- Security tests for file ingestion and artifact authorization.

## Rules

- Characterize accepted behavior before refactoring unfamiliar code.
- Keep fixtures minimal and explain authoritative values.
- Do not assert implementation details when a public contract is available.
- Never modify expected values merely to match new output without explaining the contract change.
- Record unrun tests explicitly.
