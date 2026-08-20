# Stack Pack: Playwright Testing

## Use when

- the project uses Playwright for browser-based testing
- work touches critical user flows, UI regressions, auth flows, or multi-step interactions

## Working rules

- test user-visible behavior, not implementation details
- prefer resilient selectors such as roles, labels, and test IDs
- keep tests independent and deterministic
- avoid unnecessary sleeps; use proper waits and assertions
- separate smoke coverage from deeper scenarios

## Common workflow

1. identify the user journey to protect
2. add or update selectors to support stable tests
3. write tests for happy path plus key failure/edge cases
4. verify locally and on CI where possible
5. keep fixtures and setup maintainable

## Verification commands

Typical commands:

- `npx playwright test`
- `npx playwright test --ui`
- `npx playwright show-report`

## Common pitfalls

- brittle CSS selectors
- hidden coupling between tests
- relying on arbitrary timeouts
- environment-sensitive auth setup
- tests that are too broad to diagnose failures quickly

## Quality focus

- smoke tests for release confidence
- targeted regression tests for known bugs
- trace/screenshot/video only where it improves diagnosis
