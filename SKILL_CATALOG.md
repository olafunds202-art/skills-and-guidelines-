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
- non-coding skills from `skills/non-coding/` when the task is research, triage, planning, documentation, automation, client delivery, release operations, website operations, design translation, handoff, or editing

---

## Core operating guides

### `guides/arena-agent-coding-operating-guide.md`
Use as the main execution manual for software work.

### `guides/arena-coding-conversion-analysis.md`
Use to understand how the source repo was translated into Arena form.

### `guides/project-memory-system.md`
Use when work spans multiple sessions and durable repo context is needed.

### `guides/project-tracking-and-regression-system.md`
Use when a project needs a living handoff record and before-state regression baselines for risky changes.

### `guides/client-project-delivery-system.md`
Use for client-facing work that must move cleanly from intake to launch and support.

### `guides/deployment-release-operations-system.md`
Use for release planning, cutover, rollback, post-release verification, and operational readiness.

### `guides/content-seo-website-operations-system.md`
Use for content planning, metadata, publishing workflow, analytics, and website QA.

### `guides/design-to-build-workflow-system.md`
Use for translating visual references or design direction into implementation and review workflows.

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

### Web app and frontend

- `skills/stacks/nextjs-typescript.md`
- `skills/stacks/react-vite-typescript.md`
- `skills/stacks/client-website-delivery.md`
- `skills/stacks/wordpress-client-sites.md`

Use these for websites, dashboards, landing pages, and browser-facing UI work.

### Backend and APIs

- `skills/stacks/node-typescript-api.md`
- `skills/stacks/express-node-api.md`
- `skills/stacks/nestjs-typescript.md`
- `skills/stacks/python-fastapi.md`
- `skills/stacks/django-python.md`
- `skills/stacks/laravel-php.md`

Use these for server-side APIs, backends, auth, services, and data-processing endpoints.

### Data, BaaS, and ORM

- `skills/stacks/supabase-postgres.md`
- `skills/stacks/firebase-web-mobile.md`
- `skills/stacks/prisma-orm.md`

Use these when schema, rules, policies, queries, migrations, or generated client behavior matter.

### Mobile and desktop

- `skills/stacks/flutter-dart.md`
- `skills/stacks/react-native.md`
- `skills/stacks/electron-desktop.md`

Use these for mobile apps, desktop apps, navigation, permissions, and platform-specific delivery.

### Extensions, automation, and scripting

- `skills/stacks/chrome-extension.md`
- `skills/stacks/python-scraping-automation.md`
- `skills/stacks/google-apps-script.md`

Use these for browser extensions, bots, automations, scraping pipelines, and Google Workspace workflows.

### Testing and infrastructure

- `skills/stacks/playwright-testing.md`
- `skills/stacks/docker-containerization.md`
- `skills/stacks/vercel-deployment.md`
- `skills/stacks/railway-deployment.md`

Use these when the main challenge is testing, packaging, or deployment/runtime behavior.

---

## Non-coding skills

### Research and debugging

#### `skills/non-coding/research-workflow.md`
Use before implementation when the main need is learning, comparison, or evidence gathering.

#### `skills/non-coding/debugging-and-investigation.md`
Use when behavior is broken, flaky, or unclear and you need a disciplined investigation path.

#### `skills/non-coding/bug-reproduction-and-triage.md`
Use when a vague bug report needs to become a clear engineering task.

#### `skills/non-coding/root-cause-analysis.md`
Use after the issue is understood enough to explain the true cause and prevention steps.

#### `skills/non-coding/incident-report-and-handoff.md`
Use to hand over or document debugging or incident work cleanly.

### Planning and documentation

#### `skills/non-coding/project-brief-and-requirements.md`
Use to turn rough ideas or requests into a clear problem statement, scope, and success criteria.

#### `skills/non-coding/task-scoping-and-breakdown.md`
Use to break large or risky requests into phases, checkpoints, and decision points.

#### `skills/non-coding/decision-recording-and-adrs.md`
Use to preserve important technical or workflow decisions and their trade-offs.

#### `skills/non-coding/documentation-sync-and-knowledge-capture.md`
Use to keep docs, memory files, and reusable knowledge aligned with the current state of work.

#### `skills/non-coding/status-reporting-and-handoff.md`
Use to hand work to a user, teammate, or future session clearly.

### Automation and workflow operations

#### `skills/non-coding/automation-workflow-design.md`
Use to design bots, integrations, scheduled jobs, and multi-step automations from goal through failure handling.

#### `skills/non-coding/integration-and-trigger-mapping.md`
Use to map systems, triggers, data handoffs, permissions, and ownership across a workflow.

#### `skills/non-coding/automation-reliability-and-runbooks.md`
Use to define retry policy, logging, recovery, replay, and operational runbooks for important automations.

### Client delivery and maintenance

#### `skills/non-coding/client-discovery-and-intake.md`
Use to turn client conversations into a buildable project brief.

#### `skills/non-coding/content-and-asset-collection.md`
Use to track content, branding, assets, and client-owned inputs required for delivery.

#### `skills/non-coding/revision-and-change-management.md`
Use to classify revisions, protect scope, and record approval decisions.

#### `skills/non-coding/website-launch-readiness.md`
Use to verify client sites or web projects before going live.

#### `skills/non-coding/client-handoff-and-training.md`
Use to deliver a project cleanly with operating instructions and support boundaries.

#### `skills/non-coding/maintenance-and-support-workflow.md`
Use to structure post-launch support, triage, and maintenance rules.

### Deployment and operations

#### `skills/non-coding/release-planning-and-cutover.md`
Use to plan release scope, cutover order, smoke tests, and rollback triggers.

#### `skills/non-coding/environment-and-config-management.md`
Use to map environment differences, config dependencies, and secret-handling boundaries.

#### `skills/non-coding/rollback-and-recovery-planning.md`
Use to prepare recovery steps before risky changes or releases.

#### `skills/non-coding/operational-readiness-and-monitoring.md`
Use to confirm whether important paths are observable and supportable in production.

#### `skills/non-coding/post-release-verification.md`
Use to verify critical flows after deployment in the real target environment.

### Content, SEO, and website operations

#### `skills/non-coding/content-structure-and-page-planning.md`
Use to structure pages around audience, intent, CTA, and content hierarchy.

#### `skills/non-coding/on-page-seo-and-metadata.md`
Use to review titles, descriptions, headings, indexing assumptions, and social previews.

#### `skills/non-coding/content-publishing-and-update-ops.md`
Use to define repeatable publishing, review, and rollback steps for content changes.

#### `skills/non-coding/website-qa-and-content-review.md`
Use to review content-heavy pages and websites before launch or after major updates.

#### `skills/non-coding/analytics-and-conversion-checks.md`
Use to verify conversion flows and event tracking actually work.

### Design-to-build workflow

#### `skills/non-coding/design-intake-and-ui-scope.md`
Use to turn design references or UI direction into a scoped implementation plan.

#### `skills/non-coding/design-reference-analysis.md`
Use to break screenshots or mockups into layout, hierarchy, and component observations.

#### `skills/non-coding/design-implementation-planning.md`
Use to stage UI work from reusable foundations through polish.

#### `skills/non-coding/ui-consistency-and-component-mapping.md`
Use to centralize repeated patterns and reduce bespoke UI drift.

#### `skills/non-coding/design-review-and-polish-loop.md`
Use to run structured visual review rounds after implementation exists.

### Project continuity and editing support

#### `skills/non-coding/project-continuation-tracking.md`
Use when a project should maintain a tracked `CONTINUATION_PROMPT.md` that future sessions must read first.

#### `skills/non-coding/regression-snapshot-and-baselines.md`
Use before risky changes to preserve the known-good before-state and comparison artifacts.

#### `skills/non-coding/humanizer.md`
Use to make prose sound more natural and less obviously AI-generated without changing meaning or facts.

---

## Templates

### `templates/implementation-plan-template.md`
For structured implementation plans.

### `templates/verification-report-template.md`
For end-of-task quality gate reporting.

### `templates/adr-template.md`
For architectural decision records.

### `templates/project-brief-template.md`
For turning a rough idea into a usable brief.

### `templates/status-handoff-template.md`
For structured session, team, or client handoffs.

### `templates/continuation-prompt-template.md`
For creating a tracked project handoff document that survives across sessions.

### `templates/regression-check-template.md`
For recording risky-change baselines and before-state evidence.

### `templates/automation-workflow-template.md`
For designing workflow stages, triggers, integrations, and failure handling.

### `templates/client-intake-template.md`
For client discovery and initial project definition.

### `templates/launch-checklist-template.md`
For pre-launch and post-launch verification.

### `templates/client-handoff-checklist-template.md`
For final delivery, access, and operating notes.

### `templates/change-request-template.md`
For scope-safe revision and change tracking.

### `templates/maintenance-runbook-template.md`
For post-launch support and maintenance operations.

### `templates/release-plan-template.md`
For deployment scope, cutover order, smoke tests, and rollback triggers.

### `templates/environment-matrix-template.md`
For mapping environment-specific URLs, callbacks, and config dependencies.

### `templates/rollback-plan-template.md`
For documenting recovery triggers and rollback steps.

### `templates/seo-page-checklist-template.md`
For checking metadata, structure, indexing, and page quality.

### `templates/content-plan-template.md`
For planning site pages, goals, CTAs, and content ownership.

### `templates/design-handoff-template.md`
For scoping UI work from references and target screens.

### `templates/ui-review-checklist-template.md`
For structured UI review and polish rounds.

---

## Memory templates

Use these to create durable project context inside consumer repos:

- `memory/PROJECT_CONTEXT.template.md`
- `memory/DECISIONS.template.md`
- `memory/OPEN_QUESTIONS.template.md`
- `memory/DELETION_LOG.template.md`

For longer-lived project tracking, also consider:

- `CONTINUATION_PROMPT.md`
- `docs/REGRESSION_CHECK.md`
- `snapshots/regression/`

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
- project continuation tracking for longer-lived apps

### Chrome extension
Use:
- operating guide
- coding standards
- review and security
- `skills/stacks/chrome-extension.md`
- playwright testing if browser automation tests exist
- regression snapshots before manifest or content-script rewrites
- verification

### Python scraper or bot
Use:
- operating guide
- coding standards
- `skills/stacks/python-scraping-automation.md`
- `skills/stacks/python-fastapi.md` if an API or service also exists
- automation workflow design
- integration and trigger mapping
- automation reliability and runbooks
- debugging/investigation
- root-cause analysis for flaky failures

### Google Apps Script workflow
Use:
- operating guide
- coding standards
- `skills/stacks/google-apps-script.md`
- automation workflow design
- integration and trigger mapping
- automation reliability and runbooks
- verification
- incident handoff if trigger or quota problems occur

### Client website
Use:
- operating guide
- planning and architecture
- coding standards
- `skills/stacks/client-website-delivery.md`
- the matching framework pack such as Next.js or React/Vite
- client discovery and intake
- content and asset collection
- content structure and page planning
- on-page SEO and metadata
- website launch readiness
- client handoff and training
- review and security
- verification

### Release or deployment-heavy change
Use:
- `skills/non-coding/release-planning-and-cutover.md`
- `skills/non-coding/environment-and-config-management.md`
- `skills/non-coding/rollback-and-recovery-planning.md`
- `skills/non-coding/post-release-verification.md`
- `templates/release-plan-template.md`

### Design-heavy UI work
Use:
- `skills/non-coding/design-intake-and-ui-scope.md`
- `skills/non-coding/design-reference-analysis.md`
- `skills/non-coding/design-implementation-planning.md`
- `skills/non-coding/ui-consistency-and-component-mapping.md`
- `skills/non-coding/design-review-and-polish-loop.md`
- `templates/design-handoff-template.md`
- `templates/ui-review-checklist-template.md`

### Early-stage product discovery or scoping
Use:
- `skills/non-coding/project-brief-and-requirements.md`
- `skills/non-coding/task-scoping-and-breakdown.md`
- `skills/non-coding/decision-recording-and-adrs.md`
- `templates/project-brief-template.md`

### Long-running or high-context repo
Use:
- `skills/non-coding/project-continuation-tracking.md`
- `templates/continuation-prompt-template.md`
- `guides/project-tracking-and-regression-system.md`
- memory templates as supporting files

---

## Expansion notes

This catalog should be updated whenever a new skill family, stack pack, guide, or template is added.
