#!/usr/bin/env node

import { UserService, getConfig } from '@nx-caching/core';

/**
 * Simple CLI application
 */
function main() {
  const config = getConfig();
  console.log(`\n${config.appName} v${config.version}`);
  console.log('='.repeat(40));

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
