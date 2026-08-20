# Everything-Claude-Code to Arena: Coding Conversion Analysis

## Purpose

This document extracts the **coding-related ideas** from `everything-claude-code` and converts them into an **Arena-compatible system**.

It intentionally leaves out Claude-only mechanics unless they can be translated into something practical for Arena agents.

---

## High-level conclusion

Most of the valuable parts are **portable**.

What transfers well:

- planning discipline
- architecture review
- test-driven development
- code review workflows
- security review checklists
- build-fix procedures
- dead-code cleanup rules
- verification loops
- coding standards
- documentation sync

What does not transfer directly:

- Claude plugin manifests
- slash command runtime
- hook configuration syntax
- Claude-specific agent registration
- Claude-specific model routing advice
- MCP assumptions that depend on Claude runtime

What should be converted instead:

- agent files → Arena skills/modes
- slash commands → named workflows and prompts
- hooks → checklists, scripts, and CI gates
- memory/context hooks → project context files maintained in repo

---

## Component-by-component conversion

## 1. Agents → Arena skills/modes

### Keep and convert

These agents are highly reusable in Arena:

- `planner`
- `architect`
- `tdd-guide`
- `code-reviewer`
- `security-reviewer`
- `build-error-resolver`
- `refactor-cleaner`
- `doc-updater`

### Arena conversion

Use them as **operating modes** rather than runtime-installed subagents.

Recommended mode names:

- Planning Mode
- Architecture Mode
- TDD Mode
- Code Review Mode
- Security Review Mode
- Build Fix Mode
- Refactor Mode
- Documentation Mode

### Arena rule

The agent should explicitly announce the mode it is using when the work benefits from structure, then follow the workflow in the matching skill file.

---

## 2. Commands → named workflows

### Source value

The original commands are mainly wrappers around good habits:

- `/plan`
- `/tdd`
- `/code-review`
- `/build-fix`
- `/refactor-clean`
- `/verify`

### Arena conversion

Convert each command into a **workflow with entry and exit criteria**.

Example mappings:

- `/plan` → Plan first, then wait for confirmation before major code changes
- `/tdd` → Write failing tests first, then implement minimal code
- `/code-review` → Review changed files by severity before calling work complete
- `/build-fix` → Fix one error batch at a time with minimal diffs
- `/refactor-clean` → Prove code is unused before deletion, then test
- `/verify` → Run build, types, lint, tests, security spot checks, diff review

### Recommendation

Keep the workflow names in human language, for example:

- "Run Planning Mode"
- "Run Verification Mode"
- "Run Build Fix Mode"

---

## 3. Rules → direct carry-over with minor edits

### Strongly reusable rules

The following rule areas are useful with almost no dependency on Claude:

- coding style
- testing
- security
- common patterns

### Needed edits

Remove references to:

- Claude agents by filesystem path
- model family choices
- plugin installation
- hook-based enforcement claims

Replace with:

- Arena agent behavior expectations
- repo-level scripts and CI checks
- project-specific rule files

---

## 4. Skills → direct carry-over, paraphrased and generalized

### Strong skill areas

These are the most valuable coding skills from the source repo:

- coding standards
- backend patterns
- frontend patterns
- TDD workflow
- security review
- verification loop

### Arena conversion notes

They work well as markdown guides in a repo because Arena agents can read and follow them at task time.

The main needed change is removing any assumption that the runtime automatically invokes them.

In Arena, activation is behavioral:

- agent selects the relevant skill based on task type
- user can point to a specific skill explicitly
- project rules can instruct the agent which skill to prioritize

---

## 5. Hooks → explicit checkpoints and automation scripts

### Source value

Hook ideas are still useful, even if the hook system is not portable.

The valuable behaviors are:

- loading context at start
- saving context at end
- suggesting compaction/checkpoints
- auto-reminding about common problems

### Arena conversion

Use three layers instead:

#### A. In-conversation behavior
- restate task before large changes
- ask before destructive actions
- summarize progress after meaningful work
- keep a short project context file when work spans multiple sessions

#### B. Repo scripts
- `npm run verify`
- `npm run security:check`
- `npm run docs:update`
- `npm run dead-code:check`

#### C. CI gates
- build must pass
- typecheck must pass
- lint must pass
- tests and coverage thresholds must pass
- dependency audit must pass if enabled

### Important note

Arena can behave like a disciplined operator, but not all hook behavior is truly automatic unless you implement it in scripts or CI.

---

## 6. MCP configs → optional, not core

### Keep conceptually

Tool/integration awareness is useful.

### Do not make it core

Because Arena tool availability varies, do not base the coding framework on any single integration mechanism.

Instead define integrations as optional modules:

- source control
- deployment
- database admin
- observability
- docs generation

---

## 7. Performance/model-selection advice → simplify

The source repo includes Claude-specific model selection advice.

For Arena, keep only the portable parts:

- keep context lean
- break large changes into phases
- use parallel analysis only when truly independent
- prefer small verifiable edits over huge rewrites
- checkpoint before complexity compounds

Drop the vendor/model-specific recommendations.

---

## Recommended Arena coding system

## Core lifecycle

1. Understand the request
2. Read current code and constraints
3. Plan the change
4. Confirm before large/destructive changes
5. Implement with minimal diffs
6. Test and verify
7. Review for quality and security
8. Document decisions and follow-ups

## Required modes

- Planning & Architecture
- TDD & Testing
- Coding Standards
- Review & Security
- Build Fix & Refactor
- Verification

## Required templates

- implementation plan
- ADR / technical decision record
- verification report
- deletion log

## Required project memory files for longer work

- `docs/PROJECT_CONTEXT.md`
- `docs/DECISIONS.md`
- `docs/OPEN_QUESTIONS.md`
- `docs/DELETION_LOG.md`

---

## What to leave out entirely

These do not belong in the Arena version:

- `.claude-plugin/`
- marketplace manifests
- Claude settings paths
- hook JSON syntax tied to Claude tools
- model recommendations tied to Claude product tiers

---

## What to keep but rewrite

Keep the idea, rewrite the delivery:

- agent orchestration → task decomposition rules
- hooks → scripts plus behavioral checkpoints
- slash commands → workflow names and templates
- memory persistence → repo-stored context files

---

## Final recommendation

Do **not** mirror the source repo structure blindly.

Instead, keep a cleaner Arena-first structure:

```text
skills-and-guides/
├── README.md
├── guides/
│   ├── arena-coding-conversion-analysis.md
│   └── arena-agent-coding-operating-guide.md
├── skills/
│   ├── planning-and-architecture.md
│   ├── tdd-and-testing.md
│   ├── coding-standards.md
│   ├── review-and-security.md
│   ├── build-fix-and-refactor.md
│   └── verification.md
└── templates/
    ├── implementation-plan-template.md
    ├── adr-template.md
    └── verification-report-template.md
```

That gives you the useful coding substance without carrying over Claude-specific baggage.
