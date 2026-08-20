# Deployment, release, and operational readiness system

## Purpose

This guide defines how to prepare, release, verify, and stabilize production-facing changes.

## What this system covers

- release planning
- environment and configuration readiness
- cutover and deployment execution
- rollback preparation
- post-release verification
- operational monitoring and follow-up

## Core principle

A release is not done when code is deployed. It is done when:

- the target environment is understood
- rollback is possible
- critical flows are re-verified after release
- owners know what to watch next

## Recommended documents

- `docs/RELEASE_PLAN.md`
- `docs/ENVIRONMENT_MATRIX.md`
- `docs/ROLLBACK_PLAN.md`
- `docs/POST_RELEASE_CHECKS.md`
- `docs/OPERATIONS_RUNBOOK.md`

## Suggested lifecycle

### 1. Release planning
Define:
- what is being released
- environments affected
- dependencies and migration needs
- release owner and approval point

### 2. Environment readiness
Verify:
- environment variables
- secrets mapping
- domains, callbacks, queues, cron jobs, or workers
- staging vs production differences

### 3. Cutover preparation
Prepare:
- rollout steps
- rollback steps
- smoke-test checklist
- communications or maintenance window notes if needed

### 4. Release execution
Track:
- actual deployment steps taken
- exact version or commit released
- any deviations from the plan

### 5. Post-release verification
Check:
- core user journeys
- integrations
- alerts/logs
- queues/jobs
- billing/forms/auth flows where relevant

### 6. Stabilization
Document:
- issues found
- mitigations applied
- follow-up cleanup or hardening work

## Guardrails

- never release without a rollback idea
- never assume staging and production are equivalent without checking
- track the exact change set being released
- record known risks before launch, not after
