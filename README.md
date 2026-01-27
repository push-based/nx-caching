# nx-caching
Examples and learning material for Nx caching

## Overview

This is a minimal Nx workspace demonstrating caching with a simple CLI application. The workspace contains 5 packages:

- **models** - Data models and interfaces
- **utils** - Utility functions
- **core** - Core business logic (depends on models and utils)
- **cli** - CLI application (depends on core)
- **cli-e2e** - End-to-end tests for the CLI

## Package Dependencies

```
cli → core → models
           → utils
cli-e2e → cli
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Build all packages:
```bash
npm run build
```

3. Run the CLI:
```bash
npm run cli
```

4. Run E2E tests:
```bash
npx nx run cli-e2e:test
```

## Nx Caching

This repository demonstrates Nx's caching capabilities. The build and test targets are configured to be cached.

To see caching in action:

1. Build all packages:
```bash
npx nx run-many --target=build --all
```

2. Build again - this time from cache:
```bash
npx nx run-many --target=build --all
```

You'll see `[local cache]` indicators showing that Nx retrieved the build outputs from cache instead of rebuilding.

## Project Structure

```
nx-caching/
├── packages/
│   ├── models/         # Data models
│   │   └── src/
│   │       ├── index.ts
│   │       └── models.ts
│   ├── utils/          # Utility functions
│   │   └── src/
│   │       ├── index.ts
│   │       └── utils.ts
│   ├── core/           # Core business logic
│   │   └── src/
│   │       ├── index.ts
│   │       └── core.ts
│   ├── cli/            # CLI application
│   │   └── src/
│   │       └── index.ts
│   └── cli-e2e/        # E2E tests
│       └── src/
│           └── test.js
├── nx.json             # Nx configuration
├── tsconfig.base.json  # TypeScript base config
└── package.json        # Workspace package.json
```

## Available Scripts

- `npm run build` - Build all packages
- `npm run test` - Run all tests
- `npm run cli` - Run the CLI application (default command)

## CLI Commands

The CLI supports the following commands:

1. **Default command** (no arguments):
   ```bash
   node packages/cli/dist/index.js
   ```
   Demonstrates the user service by creating and greeting users.

2. **timestamp**:
   ```bash
   node packages/cli/dist/index.js timestamp
   ```
   Displays the current timestamp. Output changes every time it runs.

3. **timestamp-changeduntil**:
   ```bash
   node packages/cli/dist/index.js timestamp-changeduntil
   ```
   Displays a timestamp that changes every 10 seconds. Useful for demonstrating cache behavior with time-based outputs.

