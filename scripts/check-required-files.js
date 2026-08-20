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
  'skills/planning-and-architecture.md',
  'skills/tdd-and-testing.md',
  'skills/coding-standards.md',
  'skills/review-and-security.md',
  'skills/build-fix-and-refactor.md',
  'skills/verification.md',
  'templates/implementation-plan-template.md',
  'templates/verification-report-template.md',
  'templates/adr-template.md',
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
