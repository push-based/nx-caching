#!/usr/bin/env node

const { execSync } = require('child_process');

/**
 * Simple E2E test for CLI
 */
console.log('Running CLI E2E tests...\n');

try {
  const cwd = process.cwd().includes('cli-e2e') ? '../..' : process.cwd();

  // Test 1: Default command
  console.log('Test 1: Default command');
  const output1 = execSync('node packages/cli/dist/index.js', {
    encoding: 'utf8',
    cwd
  });
  console.log(output1);
  if (!output1.includes('Nx Caching Demo')) {
    console.error('✗ Default command validation failed');
    process.exit(1);
  }
  console.log('✓ Default command executed successfully\n');

  // Test 2: Timestamp command
  console.log('Test 2: Timestamp command');
  const output2 = execSync('node packages/cli/dist/index.js timestamp', {
    encoding: 'utf8',
    cwd
  });
  console.log(output2);
  if (!output2.includes('Current timestamp:')) {
    console.error('✗ Timestamp command validation failed');
    process.exit(1);
  }
  console.log('✓ Timestamp command executed successfully\n');

  // Test 3: Timestamp-changeduntil command
  console.log('Test 3: Timestamp-changeduntil command');
  const output3 = execSync('node packages/cli/dist/index.js timestamp-changeduntil', {
    encoding: 'utf8',
    cwd
  });
  console.log(output3);
  if (!output3.includes('Timestamp (changes every 10 seconds):')) {
    console.error('✗ Timestamp-changeduntil command validation failed');
    process.exit(1);
  }
  console.log('✓ Timestamp-changeduntil command executed successfully\n');

  console.log('✓ All E2E tests passed!');
} catch (error) {
  console.error('✗ CLI execution failed:', error.message);
  process.exit(1);
}
