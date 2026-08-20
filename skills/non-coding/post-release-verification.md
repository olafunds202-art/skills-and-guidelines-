# Skill: Post-Release Verification

## Purpose

Use this skill immediately after deployment or launch to confirm critical flows still work in the real target environment.

## Good use cases

- production deploys
- client site launches
- automation cutovers
- worker or queue releases
- domain or callback changes

## Workflow

1. Identify the highest-risk live flows.
2. Run targeted smoke tests in production or the target environment.
3. Check logs, errors, and key metrics.
4. Compare expected vs actual release behavior.
5. Record any rollback decision or hotfix need.
6. Log follow-up work for non-blocking issues.

## Output format

- release identifier
- smoke-test results
- observed issues
- logs/metrics notes
- rollback or hotfix decision
- next actions

## Guardrails

- do not rely on build success as post-release proof
- re-test forms, auth, billing, jobs, or other critical flows explicitly
- separate blocking issues from follow-up improvements
- keep the evidence of what was actually checked
