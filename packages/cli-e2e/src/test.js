#!/usr/bin/env node

const { execSync } = require('child_process');

/**
 * Simple E2E test for CLI
 */
console.log('Running CLI E2E tests...\n');

try {
  const cwd = process.cwd().includes('cli-e2e') ? '../..' : process.cwd();

  // Test 1: Default command (no args)
  console.log('Test 1: Default command (no args)');
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

  // Test 2: Timestamp command with -t flag
  console.log('Test 2: Timestamp command with -t flag');
  const output2 = execSync('node packages/cli/dist/index.js -t', {
    encoding: 'utf8',
    cwd
  });
  console.log(output2);
  if (!output2.includes('Current timestamp:')) {
    console.error('✗ Timestamp command validation failed');
    process.exit(1);
  }
  console.log('✓ Timestamp command executed successfully\n');

  // Test 3: Timestamp command with --timestamp flag
  console.log('Test 3: Timestamp command with --timestamp flag');
  const output3 = execSync('node packages/cli/dist/index.js --timestamp', {
    encoding: 'utf8',
    cwd
  });
  console.log(output3);
  if (!output3.includes('Current timestamp:')) {
    console.error('✗ Timestamp command (long flag) validation failed');
    process.exit(1);
  }
  console.log('✓ Timestamp command (long flag) executed successfully\n');

  // Test 4: Timestamp-changeduntil command with -c flag
  console.log('Test 4: Timestamp-changeduntil command with -c flag');
  const output4 = execSync('node packages/cli/dist/index.js -c', {
    encoding: 'utf8',
    cwd
  });
  console.log(output4);
  if (!output4.includes('Timestamp (changes every 10 seconds):')) {
    console.error('✗ Timestamp-changeduntil command validation failed');
    process.exit(1);
  }
  console.log('✓ Timestamp-changeduntil command executed successfully\n');

  // Test 5: Timestamp-changeduntil command with --changeduntil flag
  console.log('Test 5: Timestamp-changeduntil command with --changeduntil flag');
  const output5 = execSync('node packages/cli/dist/index.js --changeduntil', {
    encoding: 'utf8',
    cwd
  });
  console.log(output5);
  if (!output5.includes('Timestamp (changes every 10 seconds):')) {
    console.error('✗ Timestamp-changeduntil command (long flag) validation failed');
    process.exit(1);
  }
  console.log('✓ Timestamp-changeduntil command (long flag) executed successfully\n');

  console.log('✓ All E2E tests passed!');
} catch (error) {
  console.error('✗ CLI execution failed:', error.message);
  process.exit(1);
}
