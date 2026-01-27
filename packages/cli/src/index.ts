#!/usr/bin/env node

import { UserService, getConfig } from '@nx-caching/core';

/**
 * Simple CLI application
 */
function main() {
  const args = process.argv.slice(2);
  const command = args[0];

  const config = getConfig();
  console.log(`\n${config.appName} v${config.version}`);
  console.log('='.repeat(40));

  // Handle timestamp commands
  if (command === 'timestamp') {
    console.log('\nCurrent timestamp:', new Date().toISOString());
    console.log('');
    return;
  }

  if (command === 'timestamp-changeduntil') {
    const now = new Date();
    // Round down to the nearest 10 seconds
    const roundedSeconds = Math.floor(now.getSeconds() / 10) * 10;
    const roundedTime = new Date(now);
    roundedTime.setSeconds(roundedSeconds, 0);
    
    console.log('\nTimestamp (changes every 10 seconds):', roundedTime.toISOString());
    console.log('');
    return;
  }

  // Create user service
  const userService = new UserService();

  // Create some users
  const user1 = userService.createUser('Alice', 'alice@example.com');
  const user2 = userService.createUser('Bob', 'bob@example.com');

  console.log('\nCreated users:');
  console.log(`  - ${user1.name} (${user1.email})`);
  console.log(`  - ${user2.name} (${user2.email})`);

  // Greet users
  console.log('\nGreetings:');
  console.log(`  - ${userService.greetUser(user1.id)}`);
  console.log(`  - ${userService.greetUser(user2.id)}`);

  console.log('\nTotal users:', userService.getAllUsers().length);
  console.log('');
}

main();
