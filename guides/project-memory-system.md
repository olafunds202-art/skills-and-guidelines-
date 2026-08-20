# Project Memory System

## Purpose

Arena sessions benefit from lightweight repo-stored memory when work spans multiple conversations.

These files are not magic. They are simply durable context that both humans and agents can read before continuing work.

## Recommended files

### Lightweight memory set

- `docs/PROJECT_CONTEXT.md`
- `docs/DECISIONS.md`
- `docs/OPEN_QUESTIONS.md`
- `docs/DELETION_LOG.md`

### Heavier long-running project tracking

- `CONTINUATION_PROMPT.md`
- `docs/REGRESSION_CHECK.md`
- `snapshots/regression/`

Templates for the lightweight set are included in `memory/`. Additional templates for continuation and regression are included in `templates/`.

## How to use them

### PROJECT_CONTEXT.md
Use for:
- current system summary
- key file paths
- architecture snapshot
- active constraints
- current focus

### DECISIONS.md
Use for:
- technical choices
- trade-offs
- accepted alternatives
- links to ADRs

### OPEN_QUESTIONS.md
Use for:
- unresolved product decisions
- unresolved technical assumptions
- blockers needing user or team input

### DELETION_LOG.md
Use for:
- dead-code cleanup records
- package removals
- consolidation notes
- rollback hints

## Update policy

Update these files when:

- work spans multiple sessions
- architecture changes materially
- there is a non-obvious decision worth preserving
- cleanup/removal work is significant
- unresolved ambiguity may affect the next session

## Agent behavior

At the start of meaningful work, the agent should read the relevant project memory files if they exist.

At the end of meaningful work, the agent should propose or apply updates when the context changed enough to justify it.
