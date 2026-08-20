# Skill: Regression Snapshot and Baselines

## Purpose

Use this skill before major deletions, risky refactors, migrations, behavior changes, or cleanup that might remove something currently working.

## Core rule

Before a risky change, preserve the before-state in a way that future sessions can inspect.

The goal is not only rollback. It is also comparison.

## When to use

- deleting large files or flows
- replacing one implementation with another
- changing parsers, selectors, prompts, schema, or workflow logic
- moving from one system boundary to another
- cleaning up code that may still encode subtle working behavior

## Workflow

1. Define what is about to change.
2. List the files, flows, or behaviors at risk.
3. Record the current known-good behavior.
4. Save a snapshot artifact when practical.
5. Record what checks must still pass after the change.
6. Record rollback or comparison notes.

## Acceptable snapshot artifacts

- copied key files in `snapshots/regression/`
- a patch of the before-state
- key code snippets in the regression doc
- logs, screenshots, or test evidence
- commit hashes or tags that represent the old baseline

## Output format

- change name
- scope at risk
- before-state summary
- affected files
- snapshot artifacts
- regression checks
- rollback notes

## Guardrails

- do not rely on memory alone for risky changes
- preserve behavior evidence, not just file names
- note what was definitely working before the change
- if verification later fails, compare against the saved baseline before guessing
