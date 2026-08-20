# Skill: Root Cause Analysis

## Purpose

Use this skill after a bug, regression, or incident has been isolated enough to explain what actually failed.

## Questions to answer

- what happened?
- why did it happen?
- why was it not prevented earlier?
- what conditions allowed it to escape?
- what changes prevent recurrence?

## Workflow

1. Describe the failure clearly.
2. Trace the causal chain, not just the last symptom.
3. Separate triggering event from underlying weakness.
4. Identify detection gaps.
5. Identify prevention gaps.
6. Propose corrective and preventive actions.
7. Document what should be monitored or tested going forward.

## Output format

- summary
- impact
- timeline
- direct cause
- contributing factors
- detection gaps
- prevention gaps
- corrective actions
- preventive actions

## Guardrails

- avoid blame-focused language
- be specific about the system weakness
- tie each preventive action to a concrete failure mode
