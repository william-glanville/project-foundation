# Backend Agent Guide

## Scope

Python, Flask, domain/application modules, persistence, deterministic imaging, provider adapters, and backend tests.

## Rules

- Inspect current source and tests before editing.
- Flask is an adapter, not the domain.
- One route calls one application use case.
- Domain modules remain free of Flask, SQL, imaging, and provider dependencies.
- Provider calls and long imaging work occur outside SQL transactions.
- Write temporary files, validate, hash, then atomically promote.
- Use typed records and explicit domain errors.
- Do not introduce a queue, worker framework, plugin registry, event bus, or generic repository until a current slice requires it and a decision accepts it.
- Add focused tests first or with the implementation.
- Report exact checks run.

## Completion report

```text
Files changed:
Layer and responsibility:
Contract impact:
Tests added:
Commands run and exact result:
Decisions added or affected:
Known gaps:
```
