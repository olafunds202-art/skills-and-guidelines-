const fs = require('fs');
const path = require('path');

const root = process.cwd();
const dir = path.join(root, 'skills', 'stacks');

if (!fs.existsSync(dir)) {
  console.error('Missing stack packs directory: skills/stacks');
  process.exit(1);
}

const files = fs.readdirSync(dir).filter((file) => file.endsWith('.md'));

if (files.length < 2) {
  console.error('Expected at least 2 stack pack markdown files in skills/stacks.');
  process.exit(1);
}

console.log(`Stack pack check passed (${files.length} markdown files).`);
