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
├── CONTRIBUTING.md
├── package.json
├── guides/
├── skills/
│   └── stacks/
├── templates/
├── memory/
├── ci-templates/
├── scripts/
└── .github/
```

## Core guides

- `guides/arena-coding-conversion-analysis.md` — what was kept, changed, or dropped from the source repo
- `guides/arena-agent-coding-operating-guide.md` — main operating manual for Arena coding work
- `guides/project-memory-system.md` — repo-stored memory pattern for multi-session work

## Core skills

- `skills/planning-and-architecture.md`
- `skills/tdd-and-testing.md`
- `skills/coding-standards.md`
- `skills/review-and-security.md`
- `skills/build-fix-and-refactor.md`
- `skills/verification.md`

## Stack-specific starter packs

- `skills/stacks/nextjs-typescript.md`
- `skills/stacks/react-vite-typescript.md`
- `skills/stacks/node-typescript-api.md`
- `skills/stacks/python-fastapi.md`
- `skills/stacks/python-scraping-automation.md`
- `skills/stacks/flutter-dart.md`
- `skills/stacks/chrome-extension.md`
- `skills/stacks/google-apps-script.md`
- `skills/stacks/supabase-postgres.md`
- `skills/stacks/client-website-delivery.md`

These are v1 starter packs. More can be added per stack, framework, or delivery pattern.

## Templates

- `templates/implementation-plan-template.md`
- `templates/verification-report-template.md`
- `templates/adr-template.md`

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
2. Use the relevant skill for the task:
   - planning and architecture
   - TDD and testing
   - coding standards
   - review and security
   - build fix and refactor
   - verification
3. Add the relevant stack pack.
4. Add project-specific rules in the target repo.
5. Add project memory files when work becomes multi-session or multi-contributor.

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

- more stack packs
- language-specific variants
- deployment/release guides
- security hardening packs
- product/planning skill packs
- repo bootstrapping templates
