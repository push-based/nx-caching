import { User, Config } from '@nx-caching/models';
import { formatGreeting, generateId } from '@nx-caching/utils';

/**
 * Core service for managing users
 */
export class UserService {
  private users: User[] = [];

  /**
   * Create a new user
   */
  createUser(name: string, email: string): User {
    const user: User = {
      id: generateId(),
      name,
      email,
    };
    this.users.push(user);
    return user;
  }

  /**
   * Get a greeting message for a user
   */
  greetUser(userId: string): string {
    const user = this.users.find((u) => u.id === userId);
    if (!user) {
      return 'User not found';
    }
    return formatGreeting(user.name);
  }

  /**
   * Get all users
   */
  getAllUsers(): User[] {
    return [...this.users];
  }
}

/**
 * Get application configuration
 */
export function getConfig(): Config {
  return {
    appName: 'Nx Caching Demo',
    version: '1.0.0',
  };
}
