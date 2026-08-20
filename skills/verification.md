# Skill: Verification

## Purpose

Use this skill before declaring implementation complete.

## Standard order

1. Build
2. Typecheck
3. Lint
4. Tests
5. Coverage, if the project tracks it
6. Security spot checks
7. Review changed files/diff

## If a step fails

- stop the "done" claim
- report the failure clearly
- either fix it or explain what blocks the fix

## Suggested checks

### Build
Run the project build command.

### Typecheck
Run the language/type checker.

### Lint
Run the linter if present.

### Tests
Run relevant tests at minimum; run full suite when the change radius is broader.

### Security spot checks
Look for:
- secrets
- unsafe logs
- missing validation
- suspicious query or HTML handling

### Diff review
Confirm:
- no accidental edits
- no unrelated changes
- docs updated if needed

## Output format

- Build: PASS/FAIL
- Types: PASS/FAIL
- Lint: PASS/FAIL
- Tests: PASS/FAIL
- Coverage: value or not run
- Security: PASS/FAIL with notes
- Ready for merge/handoff: YES/NO

## Minimum rule

If relevant verification has not run, say so explicitly instead of implying completion.
