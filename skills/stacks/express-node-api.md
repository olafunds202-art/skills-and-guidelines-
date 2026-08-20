# Stack Pack: Express + Node.js API

## Use when

- the project is an Express API or service
- work touches routes, middleware, controllers, services, or data access

## Working rules

- keep request parsing, business logic, and persistence separate
- validate body, params, and query inputs explicitly
- centralize error handling and response shaping where practical
- avoid giant route files and side-effect-heavy handlers
- make auth and rate limits explicit on sensitive routes

## Common workflow

1. inspect app entry points, routers, middleware, and error flow
2. identify the transport, service, and data boundaries involved
3. implement the smallest coherent change across validation, handler, and service layers
4. test happy path, error path, and authorization behavior
5. verify lint, types, and tests

## Verification commands

Typical commands:

- `npm run build --if-present`
- `npx tsc --noEmit`
- `npm run lint`
- `npm test`

## Common pitfalls

- missing async error handling
- route handlers doing too much
- inconsistent response formats
- missing validation and rate limiting
- hidden shared mutable state

## Security focus

- validate all incoming input
- parameterize queries
- sanitize logs and errors
- check authz on protected routes
- review webhook signature verification where applicable
