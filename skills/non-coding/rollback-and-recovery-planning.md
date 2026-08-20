# Skill: Rollback and Recovery Planning

## Purpose

Use this skill before risky releases, migrations, or production-facing changes where failure must be recoverable.

## Good use cases

- schema changes
- auth or billing changes
- infra changes
- release cutovers
- destructive cleanup or migration work

## Workflow

1. Identify what can fail.
2. Identify what can be safely rolled back and what cannot.
3. Define the rollback trigger conditions.
4. Define the exact rollback steps.
5. Define data or state recovery needs.
6. Define who decides when rollback happens.
7. Record how the system is re-verified after rollback.

## Output format

- change at risk
- rollbackable vs non-rollbackable parts
- rollback triggers
- rollback steps
- recovery notes
- owner / decision maker
- re-verification plan

## Guardrails

- do not call a release safe if rollback is unclear
- note one-way migrations explicitly
- distinguish partial recovery from true rollback
- record the evidence that would justify rollback
