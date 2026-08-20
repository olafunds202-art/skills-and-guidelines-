# Skill: Automation and Workflow Design

## Purpose

Use this skill when the main job is designing or improving an automated workflow rather than simply coding one script.

## Good use cases

- bots and scheduled jobs
- scraper pipelines
- Google Apps Script business workflows
- cross-system integrations
- trigger-based processes
- email, document, spreadsheet, CRM, or API automations

## Workflow

1. Define the business or operational outcome.
2. Identify trigger, inputs, transformations, outputs, and destination systems.
3. Map the workflow stages from start to finish.
4. Identify failure points, retries, and human intervention points.
5. Define idempotency, deduplication, and state-tracking rules.
6. Decide what should be synchronous vs asynchronous.
7. Define verification, monitoring, and handoff requirements.

## Output format

- objective
- trigger
- inputs
- workflow stages
- outputs
- integrations
- failure modes
- retry/idempotency strategy
- observability plan
- manual fallback path

## Guardrails

- optimize for reliability before cleverness
- design for retries and partial failure
- prefer explicit state over hidden assumptions
- avoid workflows that silently fail with no audit trail
