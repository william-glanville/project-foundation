# Threat Model

## Status
Initial foundation threat model. Update before external-provider integration, multi-user deployment, or production release.

## Assets
Source photographs and text inputs, procedure content, prompts, provider credentials, identity records, approval records, hashes, manifests, trace candidates, audit packages, production illustrations, and signing keys. In the current persistence baseline, all artifact bytes are stored in SQL Server `ArtifactContent`.

## Trust boundaries
Browser/API; API/identity provider; application/provider; application/SQL Server (metadata and binary content); build/runtime; controlled documents/downloads.

## Threat register

Controls in this initial threat model are requirements or recommendations, not claims that the corresponding feature is implemented.

| Threat | Path | Impact | Preventive controls | Detective/recovery controls | Residual risk owner |
|---|---|---|---|---|---|
| Unauthorized image access | weak authorization or predictable path | confidential workshop disclosure | RBAC, opaque IDs, server-authorized download | access audit, revoke access | Product owner |
| Malicious image | parser exploit or decompression bomb | service compromise or outage | media sniffing, pixel/file limits, isolated decode | alerts, quarantine, patching | Technical owner |
| Path traversal | upload filename, archive path, or temporary-file path | overwrite or disclosure | ignore client-supplied path components, use generated artifact IDs, canonicalize temporary paths | security tests, audit | Technical owner |
| Metadata leakage | EXIF or prompt content sent externally | confidential data disclosure | strip provider-copy metadata, disclosure review | provider log and run record | Data owner |
| Prompt injection in content | filename, EXIF, or visible text treated as instruction | workflow manipulation | treat content as data, fixed trusted templates | prompt audit | Product owner |
| Provider retention/training | external service policy | loss of control | approved provider, opt-out where available, minimal derivative | disclosure records, periodic review | Data owner |
| Credential leakage | logs, source control, error output | provider or system compromise | secret store, redaction, least privilege | secret scanning, rotation | Technical owner |
| Artifact substitution | cross-run ID, metadata mismatch, or content overwrite | false evidence | same-run binding, content hash and size validation, restricted database access | package verifier | Technical owner |
| Manifest tampering | edit artifact and hash together | invalid audit history | append-only storage, signatures when enabled | signature verification | Security owner |
| Approval replay | reused token or stale version | unauthorized approval | authenticated actor, nonce/version, optimistic concurrency | audit events, revoke | Policy owner |
| Concurrent decision | two reviewers commit different results | inconsistent state | transaction and version checks | retain rejected stale attempt | Product owner |
| Unreviewed generation | provider changes approved trace | geometry drift | deterministic production, approval invalidation | lineage verification | Reviewer |
| Controlled-text invention | AI adds safety or procedure text | unsafe instruction | no inference, authority record requirement | review checklist | Document controller |
| Unsafe SVG | active content | script or data exfiltration | reject or sanitize SVG | security tests | Technical owner |
| Excess retention | runtime data kept indefinitely | privacy and confidentiality exposure | retention policy and deletion authorization | retention review, tombstones | Data owner |
| Backup inconsistency | SQL metadata and content restored to different points | broken lineage | coordinated database backup and restore validation | package verification | Operations owner |

## Security test obligations
File-type deception, decompression bombs, oversized images, path traversal, unauthorized download, cross-run substitution, replayed decisions, stale concurrency, malicious SVG, secret leakage, incomplete writes, and broken lineage.

## Open decisions
Authentication provider, production SQL Server hosting and operations, signing key custody, final retention periods, external-provider selection, and deployment boundary require separate accepted decisions. External object storage is not part of the current baseline.
