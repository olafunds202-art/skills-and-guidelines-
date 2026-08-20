# Skill: Environment and Configuration Management

## Purpose

Use this skill when deployment or runtime behavior depends on environment variables, service settings, domains, callbacks, feature flags, queues, or third-party configuration.

## Good use cases

- staging vs production differences
- auth callback and domain changes
- API keys and service configuration
- queue/cron/worker setup
- deployment debugging caused by config drift

## Workflow

1. List environments involved.
2. Identify config values and secret categories by environment.
3. Record which services depend on which values.
4. Identify values that must never leak to clients.
5. Compare staging and production assumptions.
6. Define verification steps for config-sensitive flows.
7. Record ownership for updating and validating config.

## Output format

- environment matrix
- config categories
- service dependencies
- secret-handling notes
- staging/prod differences
- validation steps
- owner notes

## Guardrails

- do not treat config as implicit tribal knowledge
- do not store secret values in tracked docs
- be explicit about server-only vs client-safe values
- document callback URLs, domains, ports, and worker assumptions
