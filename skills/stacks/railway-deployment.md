# Stack Pack: Railway Deployment

## Use when

- the project deploys services, workers, or databases on Railway
- work touches runtime commands, env vars, healthchecks, or service topology

## Working rules

- understand service boundaries before changing deploy config
- keep startup commands and health expectations explicit
- document environment dependencies and port assumptions
- treat migrations and worker/background services as release-sensitive changes

## Common workflow

1. inspect the app runtime, start command, and service topology
2. identify required env vars, ports, and dependencies
3. update code and deployment assumptions together
4. verify healthcheck and startup behavior
5. document release or rollback concerns

## Common pitfalls

- wrong port binding
- missing healthcheck expectations
- migrations coupled unsafely to startup
- preview/staging/prod config drift
- background worker assumptions not documented

## Verification checklist

- app binds to the expected port
- startup succeeds from a clean build
- required env vars are defined
- database/service dependencies are available
