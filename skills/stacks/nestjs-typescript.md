# Stack Pack: NestJS + TypeScript

## Use when

- the project uses NestJS modules, controllers, providers, guards, and DTOs
- work touches REST, GraphQL, queues, schedulers, or dependency-injection-heavy flows

## Working rules

- follow module boundaries instead of bypassing them
- use DTOs and validation pipes consistently
- keep controllers thin and push logic into services/providers
- treat guards, interceptors, and filters as part of the public behavior
- avoid circular dependencies by design, not by patching around them

## Common workflow

1. inspect modules, providers, guards, and DTOs
2. identify which public interface changes: route, event, queue, or job
3. update DTOs, service logic, and tests together
4. verify dependency injection and configuration assumptions
5. run type, lint, and test checks

## Verification commands

Typical commands:

- `npm run build`
- `npm run lint`
- `npm test`
- `npx tsc --noEmit`

## Common pitfalls

- business logic in controllers
- missing validation pipes
- providers with too many responsibilities
- config assumptions scattered across modules
- test setup that hides real injection errors

## Security focus

- validate DTOs
- check guards and role enforcement
- protect secrets in config modules
- review external integrations and webhook endpoints carefully
