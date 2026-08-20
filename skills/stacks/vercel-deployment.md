# Stack Pack: Vercel Deployment

## Use when

- the project deploys to Vercel
- work touches preview deployments, environment variables, serverless behavior, or build/runtime settings

## Working rules

- understand which code runs at build time, edge, serverless, or in the browser
- keep environment variable usage explicit by environment
- treat preview deployment behavior as part of verification
- do not assume long-running server processes fit the platform

## Common workflow

1. inspect project build settings and environment usage
2. identify route/runtime assumptions
3. update app code and deployment config coherently
4. verify preview behavior, headers, and env-dependent flows
5. document any runtime constraints or limits

## Common pitfalls

- relying on unsupported long-running background processes
- mixing server-only secrets into client code
- preview/prod env mismatch
- file-system assumptions that do not hold in serverless execution
- missing image/domain configuration

## Verification checklist

- build passes
- env vars are mapped correctly
- routes work in preview
- forms/webhooks/auth callbacks are validated
