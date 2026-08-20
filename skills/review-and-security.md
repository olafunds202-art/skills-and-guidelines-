# Skill: Review and Security

## Purpose

Use this skill after code changes, especially when the work touches risk-sensitive areas.

## Review order

1. Correctness
2. Security
3. Maintainability
4. Performance
5. Documentation impact

## Code review checklist

### Correctness
- does the code satisfy the request?
- are edge cases handled?
- are error paths sensible?
- are there unintended behavior changes?

### Maintainability
- names are clear
- responsibilities are focused
- duplication is limited
- tests exist where they should
- logs and TODOs are appropriate

### Performance
- obvious algorithmic problems avoided
- unnecessary requests or re-renders avoided
- large queries or N+1 patterns avoided

## Security triggers

Always do a security-focused pass when the code handles:

- input from users or external systems
- authentication or authorization
- file uploads
- database writes or dynamic queries
- third-party APIs
- secrets or credentials
- payments, balances, or transactions

## Security checklist

- no hardcoded secrets
- input validated at the boundary
- parameterized or safe query construction
- output safely rendered
- authorization checked on sensitive operations
- rate limiting considered for expensive or abuse-prone endpoints
- errors do not leak internals
- logs do not expose sensitive data

## Severity model

### Critical
- secret exposure
- injection vulnerability
- auth bypass
- direct sensitive data leak

### High
- missing validation on dangerous input
- missing authorization on sensitive actions
- unsafe external fetch or file handling

### Medium
- incomplete hardening
- noisy debug logging
- missing security-oriented tests

## Outcome format

- blocking issues
- should-fix issues
- optional improvements
- overall readiness judgment
