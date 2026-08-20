const { spawnSync } = require('child_process');

const commands = [
  ['node', ['scripts/check-required-files.js']],
  ['node', ['scripts/check-memory-templates.js']],
  ['node', ['scripts/check-stack-packs.js']]
];

for (const [command, args] of commands) {
  const result = spawnSync(command, args, { stdio: 'inherit' });
  if (result.status !== 0) {
    process.exit(result.status || 1);
  }
}

console.log('Verification passed.');
