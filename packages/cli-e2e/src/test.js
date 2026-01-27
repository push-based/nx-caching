#!/usr/bin/env node

const { execSync } = require('child_process');

/**
 * Simple E2E test for CLI
 */
console.log('Running CLI E2E tests...\n');

try {
  // Run the CLI and capture output
  const output = execSync('node packages/cli/dist/index.js', {
    encoding: 'utf8',
    cwd: process.cwd().includes('cli-e2e') 
      ? '../..' 
      : process.cwd()
  });

  console.log('CLI Output:');
  console.log(output);

  // Basic validation
  if (output.includes('Nx Caching Demo')) {
    console.log('✓ CLI executed successfully');
  } else {
    console.error('✗ CLI output validation failed');
    process.exit(1);
  }

  console.log('\n✓ All E2E tests passed!');
} catch (error) {
  console.error('✗ CLI execution failed:', error.message);
  process.exit(1);
}
