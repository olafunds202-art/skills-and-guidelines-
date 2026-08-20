# Skill: Project Continuation and Tracking Document

## Purpose

Use this skill for ongoing repos where the next session should be able to resume work with minimal lost context.

## Core rule

For active projects, the agent should look for `CONTINUATION_PROMPT.md` at the start of meaningful work.

- If it exists, read it first.
- If it does not exist and the project is ongoing enough to justify one, create it from the template.

## What the continuation document is for

It is the living handoff record for the project.
It should make it possible to answer:

- what this project is
- what state it is currently in
- what was changed recently
- what bugs or risks are still open
- what the next session should do
- what files, commands, or environment assumptions matter

## Required sections to keep current

- current state
- in-flight work
- bug or issue board
- environment or operational notes
- important project rules
- key file map or reference docs
- session log
- immediate next steps

## Update protocol

When behavior changes, update the continuation document in the same work cycle when practical.

At minimum update:

- current state
- live bug board
- session log
- next steps

## Guardrails

- do not store secrets in the tracked continuation doc
- do not claim verification that has not happened
- if a session ends mid-task, record the unfinished truth explicitly
- do not silently remove old lessons or rules; mark them superseded if needed
