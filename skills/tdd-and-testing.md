# Skill: TDD and Testing

## Purpose

Use this skill for new functionality, bug fixes, and safe refactoring.

## Default stance

If testing is practical, write tests before implementation.

## Workflow

1. Define expected behavior.
2. Write a failing test.
3. Run the test and confirm the failure is for the right reason.
4. Implement the smallest change that can make the test pass.
5. Run tests again.
6. Refactor while staying green.
7. Add edge-case and error-path tests.
8. Check coverage when coverage is part of the project standard.

## Test levels

### Unit
- pure logic
- utilities
- state transitions
- formatters and validators

### Integration
- API routes
- persistence boundaries
- service interactions
- auth and permission checks

### E2E
- critical user journeys
- multi-step flows
- browser-visible regressions

## Edge cases to cover

- null or undefined input
- empty input
- invalid types or malformed values
- boundaries and limits
- external failures
- concurrency or race conditions where relevant
- large input sizes where relevant

## Anti-patterns

- writing implementation before tests without good reason
- updating tests just to match broken behavior
- testing implementation details instead of behavior
- brittle selectors in E2E tests
- shared state between tests

## Completion bar

- important behaviors tested
- error paths tested
- regressions guarded
- tests pass locally
- coverage meets project threshold if defined
