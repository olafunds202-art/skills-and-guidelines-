# Skill: Operational Readiness and Monitoring

## Purpose

Use this skill when a project or automation is close to launch and you need to know whether the team can observe, diagnose, and respond to real issues.

## Good use cases

- launches
- newly deployed automations
- queue or worker rollouts
- public APIs
- client-facing production systems

## Workflow

1. Identify the critical user or system paths.
2. Define what success and failure look like operationally.
3. Identify logs, alerts, and dashboard signals needed.
4. Define on-call or owner responsibilities.
5. Define first-response runbook actions.
6. Identify gaps in observability before launch.
7. Record follow-up items if readiness is partial.

## Output format

- critical paths
- required signals
- alert points
- owners
- first-response actions
- known gaps
- follow-up plan

## Guardrails

- no important launch should rely on guessing from user complaints alone
- identify silent-failure modes
- tie alerts to actionable next steps where possible
- state clearly when monitoring is still inadequate
