# Project tracking and regression system

## Purpose

This guide defines a repo-level operating system for ongoing projects.

It is for projects where an agent should be able to stop and resume later without losing context, and where risky changes should have a clear before-state reference.

## Core idea

For active projects, keep two layers of durable memory:

1. **Living continuation record** — the main handoff document for the project
2. **Supporting memory files** — context, decisions, open questions, deletion log, regression baselines

## Recommended project files

### Primary handoff file
- `CONTINUATION_PROMPT.md`

### Supporting files
- `docs/PROJECT_CONTEXT.md`
- `docs/DECISIONS.md`
- `docs/OPEN_QUESTIONS.md`
- `docs/DELETION_LOG.md`
- `docs/REGRESSION_CHECK.md`

### Snapshot artifacts
- `snapshots/regression/`

## Start-of-session rule

When beginning work in a project repo:

1. Look for `CONTINUATION_PROMPT.md` first.
2. If it exists, read it top to bottom before meaningful changes.
3. Then read supporting memory files if they exist.
4. If the project is fresh and no continuation file exists, create one from the template.

## Update rule

When behavior changes, update the continuation file in the same change set when practical.

At minimum keep these sections current:

- current state
- in-flight work
- bug board or issue board
- next steps
- session log

## Regression rule

Before major deletions, rewrites, migrations, or risky refactors:

1. Record what is about to change.
2. Capture the before-state in `docs/REGRESSION_CHECK.md`.
3. Save a snapshot artifact for the risky area when practical.
4. Record how to compare the new behavior to the old behavior.

## What counts as a good snapshot

A good regression snapshot includes as many of these as needed:

- affected files
- current known-good behavior
- screenshots or logs if relevant
- copy of key code snippets or files
- a diff or patch of the pre-change state
- rollback notes
- verification steps

## Secret handling

Do not store secrets, live tokens, or credentials in tracked handoff files.
If a project needs secret-handling notes, reference the storage location conceptually instead of recording the secret value.

## When to use this system

Use it for:

- long-running product repos
- client projects with repeated sessions
- workflow-heavy automation projects
- repos where multiple agents or humans may continue the work
- risky refactor periods

## When not to overdo it

For tiny one-off edits, a full continuation doc may be unnecessary.
Use judgment. The more ongoing, stateful, or risky the project is, the more valuable the system becomes.
