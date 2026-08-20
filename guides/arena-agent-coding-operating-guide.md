# Arena Agent Coding Operating Guide

## Purpose

This guide defines how an Arena agent should work on software projects.

It is designed to be reusable across repos, readable by humans, and strict enough to act like coding guardrails.

---

## Non-negotiables

1. Read before editing.
2. Plan before large changes.
3. Ask when requirements are ambiguous.
4. Ask before destructive changes.
5. Prefer minimal diffs over broad rewrites.
6. Verify before saying work is done.
7. Review for security when input, auth, secrets, payments, files, or external APIs are involved.
8. Document important decisions and follow-up risks.

---

## Standard delivery lifecycle

## 1. Discover

Before changing code:

- restate the task in clear terms
- inspect the current implementation
- identify constraints and assumptions
- identify affected files and likely risks

If requirements are unclear, stop and ask.

## 2. Plan

Use a written plan when:

- multiple files will change
- architecture may shift
- the work is risky
- the work touches security-sensitive areas
- the task will take more than one obvious edit

A good plan includes:

- requirements
- affected files
- step order
- dependencies
- risks
- testing strategy
- success criteria

For major work, get confirmation before implementation.

## 3. Implement

Implementation rules:

- follow existing project conventions
- preserve behavior unless the task requires behavior change
- keep functions focused
- avoid deep nesting
- avoid duplicate logic
- prefer explicit names
- validate inputs at boundaries
- handle errors deliberately

## 4. Verify

Before calling work complete, run as many of these as apply:

- build
- typecheck
- lint
- tests
- coverage
- targeted manual checks
- security spot checks
- changed-file review

## 5. Review

Inspect the result for:

- correctness
- readability
- maintainability
- security
- performance
- unintended side effects

## 6. Document

When the work changes architecture, workflow, or known trade-offs, record:

- what changed
- why it changed
- what risks remain
- what should happen next

---

## Modes

## Planning Mode

Use when the task is complex or unclear.

Output:

- requirements restatement
- file impact map
- phased implementation plan
- risks and mitigations
- success criteria

## Architecture Mode

Use for larger design decisions.

Output:

- current state summary
- options considered
- trade-offs
- recommended design
- decision record if needed

## TDD Mode

Use for new features, bug fixes, and refactors where testing is practical.

Process:

1. define interface or expected behavior
2. write failing test
3. run and confirm failure
4. implement minimal code
5. run and confirm pass
6. refactor safely
7. confirm coverage and edge cases

## Code Review Mode

Use after meaningful code changes.

Check:

- naming
- file size and function size
- duplication
- error handling
- test presence
- console logs and TODOs
- public API clarity

## Security Review Mode

Use whenever code handles:

- user input
- auth or permissions
- secrets
- files
- network calls to external services
- payments or money movement
- database writes

Check:

- hardcoded secrets
- input validation
- injection risk
- XSS risk
- authz/authn mistakes
- sensitive logging
- rate limiting needs
- secure defaults

## Build Fix Mode

Use when build or typecheck fails.

Rules:

- change as little as possible
- fix one error group at a time
- avoid unrelated refactors
- rerun checks after each fix batch

## Refactor Mode

Use when cleaning code, removing duplication, or deleting dead code.

Rules:

- prove code is unused before removing it
- review references and dynamic usage
- batch low-risk deletions first
- test after each batch
- document deletions for nontrivial cleanup

## Verification Mode

Run near the end of a task.

Suggested order:

1. build
2. typecheck
3. lint
4. tests
5. coverage
6. security spot checks
7. diff review

If a critical gate fails, do not claim completion.

---

## Coding guardrails

## Readability

- choose descriptive names
- keep code easy to scan
- prefer straightforward logic over clever shortcuts
- comment to explain why, not what

## Simplicity

- avoid over-engineering
- do not generalize too early
- solve the current requirement well

## Immutability

Prefer immutable updates unless there is a strong reason not to.

## File and function size

- prefer small focused files
- prefer small focused functions
- split when responsibilities blur

## Error handling

- do not swallow errors silently
- return safe user-facing messages
- keep sensitive details out of user-visible errors
- log enough for debugging, but redact secrets

## Validation

Validate external input at boundaries with schemas or explicit checks.

## Tests

Default expectation:

- unit tests for logic
- integration tests for boundaries and flows
- E2E tests for critical journeys where available

## Documentation

When code changes behavior, update the docs that explain that behavior.

---

## Stop-and-ask rules

The agent must stop and ask before:

- deleting important files or data
- broad refactors without approval
- introducing new dependencies with major impact
- changing architecture significantly
- guessing unclear product behavior
- modifying secrets, billing, auth, or production-sensitive config without clarity

---

## Suggested repo support files

- `PROJECT_RULES.md`
- `docs/PROJECT_CONTEXT.md`
- `docs/DECISIONS.md`
- `docs/OPEN_QUESTIONS.md`
- `docs/DELETION_LOG.md`

These make the guidance durable across sessions.

---

## Done means

Work is only done when:

- the requested change is implemented
- relevant verification has run
- important risks are disclosed
- docs are updated when needed
- the handoff clearly states what changed and what remains
