const fs = require('fs');
const path = require('path');

const root = process.cwd();
const required = [
  'README.md',
  'SKILL_CATALOG.md',
  'LICENSE',
  'NOTICE',
  'CONTRIBUTING.md',
  'guides/arena-coding-conversion-analysis.md',
  'guides/arena-agent-coding-operating-guide.md',
  'guides/project-memory-system.md',
  'guides/project-tracking-and-regression-system.md',
  'skills/planning-and-architecture.md',
  'skills/tdd-and-testing.md',
  'skills/coding-standards.md',
  'skills/review-and-security.md',
  'skills/build-fix-and-refactor.md',
  'skills/verification.md',
  'skills/non-coding/README.md',
  'skills/non-coding/project-brief-and-requirements.md',
  'skills/non-coding/automation-workflow-design.md',
  'skills/non-coding/project-continuation-tracking.md',
  'skills/non-coding/regression-snapshot-and-baselines.md',
  'skills/non-coding/humanizer.md',
  'templates/implementation-plan-template.md',
  'templates/verification-report-template.md',
  'templates/adr-template.md',
  'templates/project-brief-template.md',
  'templates/status-handoff-template.md',
  'templates/continuation-prompt-template.md',
  'templates/regression-check-template.md',
  'templates/automation-workflow-template.md',
  'memory/PROJECT_CONTEXT.template.md',
  'memory/DECISIONS.template.md',
  'memory/OPEN_QUESTIONS.template.md',
  'memory/DELETION_LOG.template.md',
  'skills/stacks/README.md',
  '.github/PULL_REQUEST_TEMPLATE.md'
];

const missing = required.filter((file) => !fs.existsSync(path.join(root, file)));

if (missing.length) {
  console.error('Missing required files:');
  for (const file of missing) console.error(`- ${file}`);
  process.exit(1);
}

console.log(`Required files check passed (${required.length} files).`);
