# Security Architecture

## Control objectives
Protect source images, controlled procedures, credentials, approval records, and artifact integrity.

## Boundaries
- Browser to Flask API: authenticated and authorized requests.
- Application to provider: metadata-safe derivative and recorded disclosure.
- Application to SQL Server: least privilege and cross-run validation for both metadata and binary content.
- Artifact publication: validate, hash, then commit metadata and `varbinary(max)` content atomically.

## Mandatory controls
Actual media validation, size and decoded-pixel limits, isolated decoding, safe internal names, path traversal protection, EXIF stripping for provider copies, encryption at rest and in transit, secret isolation, RBAC, optimistic concurrency, append-only audit events, and authorized downloads.

## Untrusted inputs
Filenames, metadata, visible image text, embedded profiles, prompts recovered from files, SVG, manifests from outside the system, and provider outputs.

## Failure posture
Fail closed. Missing evidence, hash mismatch, stale approval, or broken lineage blocks completion.
