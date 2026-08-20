# Skill: Integration and Trigger Mapping

## Purpose

Use this skill when a workflow spans multiple tools, systems, or event sources and you need a clear map of what triggers what.

## Good use cases

- Apps Script connected to Sheets, Gmail, Drive, Forms, or Calendar
- API-to-API automations
- bot workflows with webhooks and scheduled jobs
- browser extension plus backend plus storage coordination

## Workflow

1. List all systems involved.
2. Identify the trigger source for each workflow.
3. Define data handed from one system to the next.
4. Record authentication, permissions, and rate-limit constraints.
5. Record ownership of each step.
6. Note where acknowledgements, retries, or deduplication must happen.
7. Produce a simple flow map others can follow later.

## Output format

- systems involved
- trigger map
- data handoff map
- auth and permission notes
- constraints and quotas
- failure/retry points
- ownership map

## Guardrails

- do not hide trigger assumptions
- note whether a workflow is pull, push, scheduled, or user-invoked
- identify quota-sensitive and rate-limited edges clearly
- keep a single source of truth for each important piece of state
