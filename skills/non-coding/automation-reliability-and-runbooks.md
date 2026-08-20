# Skill: Automation Reliability and Runbooks

## Purpose

Use this skill when an automation already exists or is about to go live and the main concern is keeping it reliable, debuggable, and recoverable.

## Good use cases

- flaky scrapers
- scheduled jobs with partial failure risk
- trigger-based Apps Script workflows
- queue or webhook flows
- maintenance for business-critical automations

## Workflow

1. Identify the workflow's critical path.
2. List expected failures and operational symptoms.
3. Define retry policy and stop conditions.
4. Define alert or logging points.
5. Define manual recovery steps.
6. Define rollback or replay approach.
7. Produce a simple runbook for future sessions or operators.

## Output format

- workflow name
- critical path
- expected failure modes
- logs and monitoring points
- retry rules
- replay or recovery steps
- escalation or owner notes

## Guardrails

- no critical automation should depend on invisible failures
- define what "stuck" means
- distinguish retryable failures from human-review failures
- document where data duplication can occur
