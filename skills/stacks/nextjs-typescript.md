# Stack Pack: Next.js + TypeScript

## Use when

- the app uses Next.js
- TypeScript is the main language
- work spans App Router pages, route handlers, server components, or client components

## Assumptions

- `app/` routing or modern Next.js structure
- TypeScript enabled
- build/type/lint/test scripts available or expected

## Working rules

- understand server vs client boundaries before editing
- do not move logic into client components unless needed
- keep secrets on the server only
- prefer route handlers or server actions only when they fit the existing architecture
- avoid unnecessary client-side data fetching when server rendering is enough

## Common workflow

1. inspect route structure
2. identify server/client boundaries
3. update UI, route handlers, and types coherently
4. test loading, error, and empty states
5. verify build and lint

## Verification commands

Typical commands:

- `npm run build`
- `npx tsc --noEmit`
- `npm run lint`
- `npm test`

## Common pitfalls

- using browser-only APIs in server code
- exposing secrets through client bundles
- hydration mismatches
- broken metadata/layout behavior
- missing loading or error states
- overusing client components

## Security focus

- validate all request input in route handlers
- keep auth checks at server boundaries
- avoid leaking environment variables to the client
- sanitize user-controlled HTML if rendered
