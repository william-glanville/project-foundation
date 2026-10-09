# NEW_PROJECT_BOOTSTRAP_CHECKLIST.md

# New Project Bootstrap Checklist

## Purpose

Initialize a new project using the Project Foundation Framework.

This checklist establishes project objectives, vocabulary, authority, inventory, security posture, architecture context, and project state before implementation begins.

Implementation work is not permitted until the readiness gate is passed.

---

# Bootstrap Status

| Field | Value |
|---------|---------|
| Project | |
| Repository | |
| Owner | |
| Date Started | |
| Current Status | Not Started / In Progress / Complete |

---

# Phase 1 – Framework Verification

## Objective

Confirm the foundation is intact and understood before project-specific work begins.

### Governance

- [ ] `AGENTS.md` reviewed
- [ ] `docs/governance/AUTHORITY_ORDER.md` reviewed
- [ ] `docs/governance/TASK_DECLARATION_STANDARD.md` reviewed
- [ ] Decision Register reviewed
- [ ] ADR process reviewed
- [ ] Contract governance reviewed
- [ ] Validation-gate process reviewed

### Skills

- [ ] `SKILL_CATALOG.yaml` reviewed
- [ ] All catalog paths resolve
- [ ] Required skills present
- [ ] Skill invocation process understood

### Project State

- [ ] `PROJECT_STATE.md` reviewed
- [ ] Current phase confirmed
- [ ] Current milestone confirmed
- [ ] Next bounded task confirmed

### Completion Criteria

- [ ] Foundation governance understood
- [ ] No framework inconsistencies discovered

---

# Phase 2 – Project Definition

## Objective

Define what this project is and what it is not.

## Create PROJECT_OBJECTIVES.md

### Problem Statement

- [ ] Problem clearly defined
- [ ] Stakeholders identified
- [ ] Desired outcome defined

### Success Criteria

- [ ] Success criteria defined
- [ ] Measurable outcomes defined
- [ ] Acceptance criteria defined

### Constraints

- [ ] Business constraints defined
- [ ] Technical constraints defined
- [ ] Regulatory constraints identified (if applicable)

### Non-Objectives

- [ ] Explicitly state project exclusions
- [ ] Explicitly state deferred work
- [ ] Explicitly state unsupported scenarios

### Review

- [ ] Objectives reviewed
- [ ] Objectives accepted

### Completion Criteria

- [ ] PROJECT_OBJECTIVES.md exists
- [ ] Objectives are accepted authority

---

# Phase 3 – Vocabulary Establishment

## Objective

Create the canonical language for the project.

## Create VOCABULARY.md

For each important term:

- [ ] Canonical term defined
- [ ] Alternate names captured
- [ ] Scope defined
- [ ] Meaning defined

### Lifecycle Vocabulary

- [ ] Status terms defined
- [ ] Workflow terms defined
- [ ] Approval terms defined
- [ ] State-transition terminology defined

### Technical Vocabulary

- [ ] Architecture terminology defined
- [ ] Domain terminology defined
- [ ] Contract terminology defined

### Review

- [ ] Vocabulary reviewed
- [ ] Vocabulary accepted

### Completion Criteria

- [ ] VOCABULARY.md exists
- [ ] Project terminology is authoritative

---

# Phase 4 – Inventory (Read Only)

## Objective

Create an inventory baseline before any modification work.

Review:

- [ ] Existing source code
- [ ] Existing documentation
- [ ] Existing contracts
- [ ] Existing schemas
- [ ] Existing databases
- [ ] Existing services
- [ ] Existing APIs
- [ ] Existing automation
- [ ] Existing deployment assets
- [ ] Existing generated artifacts

Record:

- [ ] Inventory report generated
- [ ] Unknown items identified
- [ ] Ownership gaps identified
- [ ] Missing authority identified

### Completion Criteria

- [ ] Inventory baseline accepted

---

# Phase 5 – Security (Read Only)

## Objective

Establish a security baseline before project changes begin.

Review:

- [ ] Credentials
- [ ] Tokens
- [ ] Secrets
- [ ] Certificates
- [ ] Connection strings
- [ ] Internal hosts
- [ ] Sensitive data sources
- [ ] Restricted artifacts
- [ ] Protected files
- [ ] Security-related workflows

Record:

- [ ] Findings documented
- [ ] Risks documented
- [ ] Required remediations identified
- [ ] Security assumptions documented

### Completion Criteria

- [ ] Security baseline accepted

---

# Phase 6 – Initial Architecture

## Objective

Establish the minimum architecture necessary to begin implementation planning.

### Architecture

- [ ] Major components identified
- [ ] Responsibilities identified
- [ ] Primary boundaries identified
- [ ] Primary consumers identified
- [ ] Significant workflows identified
- [ ] External dependencies identified

### Decisions

- [ ] Initial ADRs created where required
- [ ] Architectural unknowns documented
- [ ] Deferred decisions identified

### Review

- [ ] Architecture Review skill executed
- [ ] Responsibility boundaries reviewed
- [ ] Architecture accepted

### Completion Criteria

- [ ] Architecture baseline accepted

---

# Phase 7 – Contracts and Interfaces

## Objective

Identify and establish initial authoritative interfaces.

Review:

- [ ] Existing contracts identified
- [ ] Required contracts identified
- [ ] Contract ownership identified
- [ ] Versioning expectations identified
- [ ] Validation requirements identified

For greenfield projects:

- [ ] Initial contract strategy documented

### Completion Criteria

- [ ] Contract authority established

---

# Phase 8 – Readiness Gate

## Objective

Verify that implementation may begin.

### Required Artifacts

- [ ] PROJECT_OBJECTIVES.md exists
- [ ] VOCABULARY.md exists
- [ ] PROJECT_STATE.md updated
- [ ] Inventory completed
- [ ] Security completed
- [ ] Architecture baseline accepted
- [ ] Contract strategy documented

### Validation

- [ ] No authority conflicts
- [ ] No unresolved objective ambiguity
- [ ] No unresolved ownership ambiguity
- [ ] No unresolved vocabulary ambiguity
- [ ] No blocking security issues
- [ ] No missing foundational decisions

### Readiness Decision

- [ ] READY_FOR_IMPLEMENTATION
- [ ] HUMAN_DECISIONS_REQUIRED
- [ ] BLOCKED_BY_SECURITY
- [ ] BLOCKED_BY_MISSING_INFORMATION

### Completion Criteria

- [ ] Readiness decision recorded

---

# Project State Update

Update `PROJECT_STATE.md`.

Confirm:

- [ ] Current phase updated
- [ ] Current milestone updated
- [ ] Active work item updated
- [ ] Completed milestones updated
- [ ] Next bounded task updated

---

# Bootstrap Completion Report

## Outcome

- [ ] READY_FOR_IMPLEMENTATION
- [ ] HUMAN_DECISIONS_REQUIRED
- [ ] BLOCKED_BY_SECURITY
- [ ] BLOCKED_BY_MISSING_INFORMATION

## Summary

Describe:

- objectives established;
- vocabulary established;
- inventory findings;
- security findings;
- architecture decisions;
- contract baseline;
- unresolved issues.

## Remaining Risks

List any known risks that do not block implementation.

## Next Bounded Task

Specify exactly one implementation-planning or implementation task.

Do not begin that task as part of bootstrap completion.

---

# Exit Criteria

Project bootstrap is complete when:

- PROJECT_OBJECTIVES.md is accepted.
- VOCABULARY.md is accepted.
- Inventory is complete.
- Security review is complete.
- Architecture baseline is accepted.
- Contract authority is established.
- PROJECT_STATE.md is updated.
- Readiness decision is recorded as READY_FOR_IMPLEMENTATION.

No implementation work should occur before these criteria are satisfied.