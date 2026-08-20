# Stack Pack: Node.js + TypeScript API

## Use when

- the project is a Node.js backend or API service
- TypeScript is used for server code
- work touches handlers, services, repositories, background jobs, or middleware

## Working rules

- validate requests at the boundary
- separate transport, business logic, and persistence concerns
- prefer explicit error handling and consistent response structures
- keep side effects isolated and testable
- avoid mixing unrelated refactors into bug fixes

## Recommended structure

- handlers/controllers
- services
- repositories/data access
- schemas/validators
- shared error types

## Verification commands

Typical commands:

- `npm run build`
- `npx tsc --noEmit`
- `npm run lint`
- `npm test`

## Common pitfalls

- weak validation
- missing authz on sensitive routes
- N+1 data fetching
- inconsistent error mapping
- long handlers doing too much
- accidental reliance on process-global mutable state

## Security focus

- parameterized queries only
- rate limiting on exposed endpoints
- no secrets in logs
- safe webhook verification
- input schemas for body, params, and query
