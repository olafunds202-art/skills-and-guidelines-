# Skill: Build Fix and Refactor

## Purpose

Use this skill for either:

- getting a broken build/typecheck/lint run green, or
- safely cleaning up code without changing intended behavior

---

## Part A: Build Fix Mode

### Rules

- prefer the smallest safe fix
- fix one error group at a time
- do not refactor unrelated code during a build fix
- rerun the failing check after each batch

### Workflow

1. Collect the full error output.
2. Group errors by file and category.
3. Fix the highest-leverage or root-cause issue first.
4. Rerun the relevant checker.
5. Repeat until green or blocked.

### Typical fixes

- missing imports
- bad exports
- null checks
- type annotations
- config path issues
- dependency installation or version alignment

### Stop conditions

Stop and escalate when:

- the same issue survives multiple sane fixes
- the fix requires architectural change
- the tool output suggests conflicting root causes

---

## Part B: Refactor Mode

### Rules

- preserve behavior unless change is intended
- prove code is unused before deleting it
- treat public APIs and dynamic imports carefully
- test after each deletion batch

### Workflow

1. Identify duplication, dead code, or poor structure.
2. Check references and usage patterns.
3. Start with low-risk cleanups.
4. Verify build and tests after each batch.
5. Document meaningful deletions or consolidations.

### Safe-first removal order

1. unused imports
2. clearly dead local helpers
3. unused internal exports
4. duplicate utilities or components
5. whole files only after reference checks

### Good cleanup evidence

- search confirms no references
- tests still pass
- build still passes
- behavior remains unchanged
