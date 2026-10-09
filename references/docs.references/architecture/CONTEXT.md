# System Context

## Purpose
Produce a workshop-instruction illustration while preserving visible source geometry and maintaining evidence of generation, review, and approval.

## Actors
- Submitter supplies a source image and procedure identifiers.
- Trace creator manages prompt and trace candidates.
- Reviewer evaluates integrity and geometry.
- Approver records an authorized decision where policy requires.
- Document controller manages controlled annotations and exports.
- Service worker performs deterministic and provider operations.

## External systems
- Image-generation provider through `TraceProviderPort`.
- Identity provider for authenticated actors.
- SQL Server persistence for lifecycle metadata and artifact bytes.

## Inputs
Source artifacts, immutable textual scene descriptions, declared fidelity mode, prompts, and later workflow evidence such as geometry inventory, ROIs, controlled annotations, and authority records.

## Outputs
Trace Audit Package and Final Production Illustration.

## Non-goals
The system does not establish dimensional accuracy, clamp load, torque, safety, chemical suitability, regulatory compliance, or engineering certification.

## Trust boundaries
Browser/API; API/provider; application/SQL Server; controlled workspace/external provider.
