# Skills and Guidelines

Arena-compatible, open-source skills and workflow guides for AI-assisted software delivery.

This project is inspired by the useful coding ideas in `everything-claude-code`, but adapted for **Arena agent workflows** instead of Claude Code plugins, slash commands, or hook syntax.

## Goals

- Give Arena agents a consistent way to plan, code, test, review, verify, and document work
- Keep the system reusable across projects
- Separate general coding guardrails from project-specific rules
- Make the guidance easy for both humans and agents to read and reuse
- Provide templates and automation that teams can adopt incrementally

## What was adapted

The original source repo contains strong ideas around:

- planning
- architecture
- TDD
- code review
- security review
- build fixing
- refactoring
- verification loops
- coding standards
- backend/frontend patterns
- documentation hygiene

Those concepts map well to Arena. Claude-specific runtime features do not map directly, so they were converted:

- **Agents** → reusable Arena skills/modes
- **Slash commands** → named workflows/checklists
- **Hooks** → explicit checkpoints, scripts, and CI rules
- **MCP-specific setup** → optional integrations, not core guidance
- **Claude settings/plugin manifests** → omitted

## Repo structure

```text
skills-and-guides/
├── README.md
├── SKILL_CATALOG.md
├── CONTRIBUTING.md
├── package.json
├── guides/
├── skills/
│   ├── stacks/
│   └── non-coding/
├── templates/
├── memory/
├── ci-templates/
├── scripts/
└── .github/
```

## Start here

- `SKILL_CATALOG.md` — complete map of skills, guides, templates, and recommended combinations
- `guides/arena-agent-coding-operating-guide.md` — main operating manual for Arena coding work
- `guides/arena-coding-conversion-analysis.md` — what was kept, changed, or dropped from the source repo
- `guides/project-memory-system.md` — repo-stored memory pattern for multi-session work
- `guides/project-tracking-and-regression-system.md` — living handoff docs and risky-change baseline system
- `guides/client-project-delivery-system.md` — client-facing delivery lifecycle from intake through maintenance

## Core coding skills

- `skills/planning-and-architecture.md`
- `skills/tdd-and-testing.md`
- `skills/coding-standards.md`
- `skills/review-and-security.md`
- `skills/build-fix-and-refactor.md`
- `skills/verification.md`

## Stack packs

The repo now includes packs across:

- web app and frontend
- backend and APIs
- data, BaaS, and ORM
- mobile and desktop
- extensions, automation, and scripting
- testing and infrastructure

See `SKILL_CATALOG.md` for the full list and recommended combinations.

## Non-coding skills

The repo also includes non-coding skills in `skills/non-coding/` for:

- research and evidence gathering
- debugging and investigation
- bug reproduction and triage
- root-cause analysis
- incident handoff
- project briefs and requirements
- task scoping and breakdown
- ADRs and decision recording
- documentation sync and knowledge capture
- status reporting and handoff
- automation and workflow design
- integration and trigger mapping
- automation reliability and runbooks
- client discovery and intake
- content and asset collection
- revision and change management
- website launch readiness
- client handoff and training
- maintenance and support workflow
- project continuation tracking
- regression snapshots and baselines
- humanizing and polishing prose

## Templates

- `templates/implementation-plan-template.md`
- `templates/verification-report-template.md`
- `templates/adr-template.md`
- `templates/project-brief-template.md`
- `templates/status-handoff-template.md`
- `templates/continuation-prompt-template.md`
- `templates/regression-check-template.md`
- `templates/automation-workflow-template.md`
- `templates/client-intake-template.md`
- `templates/launch-checklist-template.md`
- `templates/client-handoff-checklist-template.md`
- `templates/change-request-template.md`
- `templates/maintenance-runbook-template.md`

## Project memory templates

Use these in real projects when work spans multiple sessions:

- `memory/PROJECT_CONTEXT.template.md`
- `memory/DECISIONS.template.md`
- `memory/OPEN_QUESTIONS.template.md`
- `memory/DELETION_LOG.template.md`

Recommended destination inside a project:

- `docs/PROJECT_CONTEXT.md`
- `docs/DECISIONS.md`
- `docs/OPEN_QUESTIONS.md`
- `docs/DELETION_LOG.md`

For more durable project handoff and risky-change tracking, also consider:

- `CONTINUATION_PROMPT.md`
- `docs/REGRESSION_CHECK.md`
- `snapshots/regression/`

## CI and automation

### For this repo

- `.github/workflows/repo-quality.yml`
- `npm run verify`

### Reusable CI templates for consumer projects

- `ci-templates/github-actions/node-webapp-ci.yml`
- `ci-templates/github-actions/python-api-ci.yml`
- `ci-templates/github-actions/flutter-ci.yml`
- `ci-templates/github-actions/apps-script-ci.yml`

### Local verification scripts

- `npm run check:files`
- `npm run check:memory`
- `npm run check:stacks`
- `npm run verify`

## Issue and PR templates

- `.github/ISSUE_TEMPLATE/bug_report.yml`
- `.github/ISSUE_TEMPLATE/feature_request.yml`
- `.github/ISSUE_TEMPLATE/skill_proposal.yml`
- `.github/PULL_REQUEST_TEMPLATE.md`

## Suggested usage

1. Start with the operating guide.
2. Use the relevant coding skill for the task.
3. Add the relevant stack pack.
4. Add non-coding skills when the job is research, triage, planning, automation, client delivery, docs, handoff, or text polishing.
5. Add project-specific rules in the target repo.
6. Add project memory files when work becomes multi-session or multi-contributor.
7. For active long-running repos, consider a tracked `CONTINUATION_PROMPT.md` and `REGRESSION_CHECK` system.

## Arena-specific principles

- Ask before destructive or ambiguous changes
- Read the existing code before editing
- Prefer minimal diffs
- Run verification before declaring work done
- Document important decisions
- Use parallel tool work only when tasks are independent

## Open-source note

This repo is licensed under **Apache-2.0**.
See `LICENSE` and `NOTICE`.

## Next extensions

Good future additions include:

- security hardening packs
- release/runbook packs
- design-to-build workflow guides
- content/SEO operations guides
- repo bootstrapping templates
