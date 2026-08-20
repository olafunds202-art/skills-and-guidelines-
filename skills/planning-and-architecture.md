# Skill: Planning and Architecture

## Purpose

Use this skill for complex features, risky refactors, or architectural changes.

## Activate when

- more than one file will likely change
- a new subsystem or workflow is being introduced
- the request is ambiguous
- there are important trade-offs to evaluate
- security, performance, or scale concerns matter

## Inputs to gather

- user goal
- current code paths
- constraints and assumptions
- affected files
- dependencies and integrations

## Workflow

1. Restate the request clearly.
2. Identify the current state and existing patterns.
3. List requirements and non-requirements.
4. Break the work into phases.
5. Identify risks and mitigations.
6. Define the testing and verification plan.
7. For major changes, wait for confirmation before coding.

## Deliverable format

- Overview
- Requirements
- Affected areas/files
- Proposed approach
- Step-by-step phases
- Risks and mitigations
- Verification plan
- Success criteria

## Architecture checks

- separation of concerns is clear
- boundaries are explicit
- data flow is understandable
- scaling assumptions are realistic
- security is considered at the boundaries
- operational concerns are not ignored

## Red flags

- giant rewrite when extension would work
- hidden coupling
- unclear ownership of state or data
- premature optimization
- vague plan with no verification steps
