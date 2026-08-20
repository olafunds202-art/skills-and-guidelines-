# Stack Pack: React + Vite + TypeScript

## Use when

- the project is a client-side React app using Vite
- the UI is state-heavy or component-heavy
- there is no strong Next.js server-rendering requirement

## Working rules

- keep data-fetching and presentation concerns separate where practical
- do not over-centralize state too early
- keep shared components generic and app components task-focused
- guard routes and API calls clearly when auth exists
- prefer resilient selectors for testing

## Common workflow

1. inspect app entry points, routes, and state boundaries
2. map where data is fetched and cached
3. implement UI and state changes together with types
4. test loading, empty, error, and success states
5. verify build, lint, and tests

## Verification commands

Typical commands:

- `npm run build`
- `npx tsc --noEmit`
- `npm run lint`
- `npm test`

## Common pitfalls

- prop drilling instead of introducing the right boundary
- stale state from poor update patterns
- overusing global state
- heavy components without memoization where it matters
- API coupling hidden inside UI components

## Security focus

- never ship secrets in the frontend bundle
- validate inputs before sending when it improves UX, but still validate on the server
- sanitize user-controlled HTML if it must be rendered
