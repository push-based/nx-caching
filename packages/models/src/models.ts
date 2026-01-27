/**
 * User model interface
 */
export interface User {
  id: string;
  name: string;
  email: string;
}

/**
 * Configuration model interface
 */
export interface Config {
  appName: string;
  version: string;
}
