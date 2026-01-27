/**
 * Format a user-friendly greeting message
 */
export function formatGreeting(name: string): string {
  return `Hello, ${name}!`;
}

/**
 * Generate a simple UUID-like string
 */
export function generateId(): string {
  return Math.random().toString(36).substring(2, 15);
}
