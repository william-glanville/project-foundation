# Trace Workflow

## Goal
Create a reviewable trace candidate without changing the source master or inventing hidden geometry.

## Preconditions
Run is RECEIVED; source validated, immutably stored, and hashed; fidelity mode declared.

## Persistence status
The current schema supports `RunInput`, immutable `TextInput`, `PromptRevision`, `PromptInput`, `GenerationAttempt`, `GenerationInput`, `CandidateIllustration`, and artifact lineage. Geometry inventory and ROI persistence are deferred.

## Steps
1. Create geometry inventory and critical ROIs.
2. Record uncertainties and non-visible regions.
3. Construct and hash a prompt revision.
4. Build a metadata-safe provider copy.
5. Record provider disclosure and generation request.
6. Validate, hash, and publish the returned trace candidate.
7. Record lineage and transition to TRACE_GENERATED.

## Failures
Unsupported media, unsafe input, provider timeout, policy block, malformed response, unknown request status, corrupt output, hash failure.

## Outputs
Prompt revision, generation attempt, trace artifact, lineage, and audit event.
