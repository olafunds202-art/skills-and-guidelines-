# Skill Catalog

This catalog maps the repo so an Arena agent or human can quickly find the right guide for the right project.

## How to choose skills

Start with these defaults:

1. `guides/arena-agent-coding-operating-guide.md`
2. `skills/coding-standards.md`
3. `skills/verification.md`

Then add:

- one or more stack packs from `skills/stacks/`
- `skills/tdd-and-testing.md` when implementing or fixing code
- `skills/review-and-security.md` for review-sensitive work
- non-coding skills from `skills/non-coding/` when researching or debugging

---

## Core operating guides

### `guides/arena-agent-coding-operating-guide.md`
Use as the main execution manual for software work.

### `guides/arena-coding-conversion-analysis.md`
Use to understand how the source repo was translated into Arena form.

### `guides/project-memory-system.md`
Use when work spans multiple sessions and durable repo context is needed.

---

## Core coding skills

### `skills/planning-and-architecture.md`
Use for complex features, refactors, and architecture decisions.

### `skills/tdd-and-testing.md`
Use for test-first implementation, bug fixing, and safe refactoring.

### `skills/coding-standards.md`
Use as the default quality baseline for code changes.

### `skills/review-and-security.md`
Use after code changes and for any security-sensitive area.

### `skills/build-fix-and-refactor.md`
Use for broken builds, type issues, dead-code cleanup, and safe refactors.

### `skills/verification.md`
Use before declaring a task complete.

---

## Stack packs

## Web app and frontend

- `skills/stacks/nextjs-typescript.md`
- `skills/stacks/react-vite-typescript.md`
- `skills/stacks/client-website-delivery.md`
- `skills/stacks/wordpress-client-sites.md`

Use these for websites, dashboards, landing pages, and browser-facing UI work.

## Backend and APIs

- `skills/stacks/node-typescript-api.md`
- `skills/stacks/express-node-api.md`
- `skills/stacks/nestjs-typescript.md`
- `skills/stacks/python-fastapi.md`
- `skills/stacks/django-python.md`
- `skills/stacks/laravel-php.md`

Use these for server-side APIs, backends, auth, services, and data-processing endpoints.

## Data, BaaS, and ORM

- `skills/stacks/supabase-postgres.md`
- `skills/stacks/firebase-web-mobile.md`
- `skills/stacks/prisma-orm.md`

Use these when schema, rules, policies, queries, migrations, or generated client behavior matter.

## Mobile and desktop

- `skills/stacks/flutter-dart.md`
- `skills/stacks/react-native.md`
- `skills/stacks/electron-desktop.md`

Use these for mobile apps, desktop apps, navigation, permissions, and platform-specific delivery.

## Extensions, automation, and scripting

- `skills/stacks/chrome-extension.md`
- `skills/stacks/python-scraping-automation.md`
- `skills/stacks/google-apps-script.md`

Use these for browser extensions, bots, automations, scraping pipelines, and Google Workspace workflows.

## Testing and infrastructure

- `skills/stacks/playwright-testing.md`
- `skills/stacks/docker-containerization.md`
- `skills/stacks/vercel-deployment.md`
- `skills/stacks/railway-deployment.md`

Use these when the main challenge is testing, packaging, or deployment/runtime behavior.

---

## Non-coding skills

### `skills/non-coding/research-workflow.md`
Use before implementation when the main need is learning, comparison, or evidence gathering.

### `skills/non-coding/debugging-and-investigation.md`
Use when behavior is broken, flaky, or unclear and you need a disciplined investigation path.

### `skills/non-coding/bug-reproduction-and-triage.md`
Use when a vague bug report needs to become a clear engineering task.

### `skills/non-coding/root-cause-analysis.md`
Use after the issue is understood enough to explain the true cause and prevention steps.

### `skills/non-coding/incident-report-and-handoff.md`
Use to hand over or document debugging/incident work cleanly.

---

## Templates

### `templates/implementation-plan-template.md`
For structured implementation plans.

### `templates/verification-report-template.md`
For end-of-task quality gate reporting.

### `templates/adr-template.md`
For architectural decision records.

---

## Memory templates

Use these to create durable project context inside consumer repos:

- `memory/PROJECT_CONTEXT.template.md`
- `memory/DECISIONS.template.md`
- `memory/OPEN_QUESTIONS.template.md`
- `memory/DELETION_LOG.template.md`

---

## CI and automation templates

### Repo-level
- `.github/workflows/repo-quality.yml`
- `scripts/verify.js`

### Consumer project templates
- `ci-templates/github-actions/node-webapp-ci.yml`
- `ci-templates/github-actions/python-api-ci.yml`
- `ci-templates/github-actions/flutter-ci.yml`
- `ci-templates/github-actions/apps-script-ci.yml`

---

## Recommended combinations by project type

### Flutter app
Use:
- operating guide
- coding standards
- TDD and testing
- `skills/stacks/flutter-dart.md`
- verification
- debugging/investigation when diagnosing mobile issues

### Chrome extension
Use:
- operating guide
- coding standards
- review and security
- `skills/stacks/chrome-extension.md`
- playwright testing if browser automation tests exist
- verification

### Python scraper or bot
Use:
- operating guide
- coding standards
- `skills/stacks/python-scraping-automation.md`
- `skills/stacks/python-fastapi.md` if an API/service also exists
- debugging/investigation
- root-cause analysis for flaky failures

### Google Apps Script workflow
Use:
- operating guide
- coding standards
- `skills/stacks/google-apps-script.md`
- verification
- incident handoff if trigger or quota problems occur

### Client website
Use:
- operating guide
- planning and architecture
- coding standards
- `skills/stacks/client-website-delivery.md`
- the matching framework pack such as Next.js or React/Vite
- review and security
- verification

---

## Expansion notes

This catalog should be updated whenever a new skill family, stack pack, guide, or template is added.
