const fs = require('fs');
const path = require('path');

const root = process.cwd();
const files = [
  'memory/PROJECT_CONTEXT.template.md',
  'memory/DECISIONS.template.md',
  'memory/OPEN_QUESTIONS.template.md',
  'memory/DELETION_LOG.template.md'
];

let failed = false;

for (const file of files) {
  const fullPath = path.join(root, file);
  if (!fs.existsSync(fullPath)) {
    console.error(`Missing memory template: ${file}`);
    failed = true;
    continue;
  }

  const content = fs.readFileSync(fullPath, 'utf8').trim();
  if (!content.startsWith('#')) {
    console.error(`Template should start with a heading: ${file}`);
    failed = true;
  }
}

if (failed) process.exit(1);
console.log(`Memory template check passed (${files.length} files).`);
