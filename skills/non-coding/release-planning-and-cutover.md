# Skill: Release Planning and Cutover

## Purpose

Use this skill when preparing to ship changes to staging, production, or any user-facing environment.

## Good use cases

- production release planning
- launch day checklists
- cutover sequencing
- multi-service or multi-step deploys
- maintenance windows

## Workflow

1. Define the release scope.
2. Identify environments affected.
3. Identify dependencies, migrations, and external integrations.
4. Define the exact release order.
5. Define smoke tests for the first minutes after release.
6. Define rollback triggers and owner responsibilities.
7. Record timing, approvals, and communication needs.

## Output format

- release scope
- environments
- dependencies
- release steps
- smoke tests
- rollback triggers
- owner and timing

## Guardrails

- do not release from a vague checklist
- identify irreversible steps explicitly
- record what must happen before, during, and after cutover
- separate deployment success from functional success
