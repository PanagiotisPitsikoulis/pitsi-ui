# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Handle Long Tasks

If you have to work on many files, or perform a long task, create an md file in @.claude/_todo.
Make a list of tasks to complete, then delete it after you finish the tasks.


## Project Overview

pitsi/ui is a component library system that allows developers to copy and customize beautifully designed components. It's an open-source alternative to traditional npm packages, where components are added directly to your project's source code for full customization.

The repository consists of:
- **apps/v4**: Next.js documentation site and component showcase (runs on port 4000)
- **packages/pitsi**: CLI tool for adding components to user projects
- **packages/tests**: E2E tests for the CLI

## Architecture

### Monorepo Structure

This is a bun workspace with Turborepo for build orchestration:
- Uses bun workspaces (`apps/*`, `packages/*`)
- Turbo manages parallel builds and caching
- Shared dependencies managed at root level

### Registry System

The registry is the core architecture that powers component distribution:

1. **Registry Definition** (`apps/v4/registry/new-york-v4/registry.ts`):
   - Defines all available components, utilities, hooks, blocks, charts, and examples
   - Each registry item specifies: name, type, dependencies, files, categories, and metadata
   - Items are validated against `registryItemSchema` from `pitsi/schema`

2. **Registry Types**:
   - `registry:ui` - UI components (accordion, button, dialog, etc.)
   - `registry:block` - Larger composed components/page sections
   - `registry:chart` - Chart components built with Recharts
   - `registry:example` - Example implementations
   - `registry:hook` - Custom React hooks
   - `registry:lib` - Utility functions and helpers
   - `registry:theme` - Theme configurations
   - `registry:style` - Style variants

3. **Registry Structure** (`apps/v4/registry/new-york-v4/`):
   ```
   registry/new-york-v4/
   ├── ui/          # UI components
   ├── blocks/      # Larger composed components
   ├── charts/      # Chart components
   ├── examples/    # Example implementations
   ├── hooks/       # Custom React hooks
   ├── lib/         # Utility functions
   ├── internal/    # Internal utilities
   ├── _registry/   # Registry definition files
   └── registry.ts  # Main registry export
   ```

4. **Registry Building** (`apps/v4/scripts/build-registry.mts`):
   - Generates `registry.json` and `__index__.tsx` from registry definitions
   - Creates lazy-loaded component exports for the documentation site
   - Validates registry schema before building
   - Run with: `bun run registry:build`

### CLI Architecture (`packages/pitsi`)

The CLI tool allows users to add components to their projects:

**Commands**:
- `init` - Initialize pitsi in a project (creates `components.json`)
- `add [components...]` - Add components to project
- `diff` - Show differences between local and registry versions
- `view` - Preview a component in the browser
- `search` - Search for components
- `migrate` - Migrate components to new versions
- `info` - Display project information
- `build` - Build registry for local development
- `mcp` - Model Context Protocol integration

**Key Flows**:
1. User runs `pitsi init` → creates `components.json` with project configuration
2. User runs `pitsi add button` → CLI fetches component from registry URL
3. CLI resolves dependencies (registryDependencies in component definition)
4. Files are written to configured paths (from `components.json` aliases)
5. Dependencies are added to `package.json`

**Registry Resolution**:
- Default: `https://pitsiui.com/r` (production)
- Local dev: `http://localhost:4000/r` (set via `REGISTRY_URL` env var)
- Supports custom registries via `components.json`

### Documentation Site (`apps/v4`)

Next.js app using:
- **fumadocs**: Documentation framework with MDX support
- **next-themes**: Dark mode support
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Styling with CSS variables for theming
- **React 19**: Latest React features

## Development Commands

### Root-Level Commands

```bash
# Install dependencies
bun install

# Development
bun run dev                    # Start all apps in parallel
bun run v4:dev                # Start v4 docs site (port 4000)
bun run pitsi:dev             # Watch and rebuild CLI

# Building
bun run build                 # Build all packages
bun run v4:build             # Build v4 docs site
bun run pitsi:build          # Build CLI package

# Testing
bun run test                  # Run E2E tests (requires v4:dev running)
bun run pitsi:test           # Run CLI unit tests
bun run test:dev             # Run tests excluding pitsi-ui

# Code Quality
bun run lint                  # Lint all packages
bun run lint:fix             # Fix linting issues
bun run typecheck            # Type check all packages
bun run format:write         # Format code with Prettier
bun run format:check         # Check code formatting
bun run check                # Run lint, typecheck, and format check

# Registry
bun run registry:build       # Build registry from definitions
bun run registry:capture     # Capture screenshots of components
bun run validate:registries  # Validate registry definitions

# Publishing
bun run pub:beta             # Publish CLI to npm with beta tag
bun run pub:release          # Publish CLI to npm
```

### V4 App Commands

```bash
cd apps/v4

bun run dev                   # Start dev server on port 4000
bun run build                # Build for production
bun run registry:build       # Build registry files
bun run registry:capture     # Capture component screenshots
bun run validate:registries  # Validate registry schemas
```

### CLI Commands

```bash
cd packages/pitsi

bun run dev                   # Watch mode for development
bun run build                # Build CLI
bun run test                 # Run tests
bun run start:dev            # Run CLI against local registry
bun run start:prod           # Run CLI against production registry
bun run mcp:inspect          # Inspect MCP server
```

## Working with Components

### Adding New Components

1. Create component file in `apps/v4/registry/new-york-v4/ui/your-component.tsx`
2. Add registry entry to `apps/v4/registry/new-york-v4/ui/_registry.ts`:
   ```ts
   {
     name: "your-component",
     type: "registry:ui",
     description: "Component description",
     dependencies: ["package-name"],
     registryDependencies: ["utils"], // Other pitsi components needed
     files: [
       {
         path: "ui/your-component.tsx",
         type: "registry:ui",
       },
     ],
   }
   ```
3. Run `bun run registry:build` from root to generate registry
4. Test with `bun run pitsi:dev add your-component` in a test project

### Registry Dependencies

Components can depend on other registry items via `registryDependencies`:
- The CLI automatically resolves and installs these dependencies
- Common dependencies: `utils`, `button`, `dialog`, etc.
- Dependencies are defined in each registry item's definition

### Path Aliases

The v4 app uses TypeScript path aliases (defined in `tsconfig.json`):
- `@/*` - Root directory (`apps/v4/`)
- `@/components` - Component directory
- `@/lib` - Library utilities
- `@/hooks` - React hooks
- `@/registry/new-york-v4/ui` - UI components

## Testing Strategy

### E2E Tests (`packages/tests`)

Tests the CLI by:
1. Creating fixture projects (Next.js, Vite, etc.)
2. Running CLI commands (`init`, `add`, etc.)
3. Verifying files are created correctly
4. Checking dependencies are installed

Run with: `bun run test` (requires v4:dev to be running)

### CLI Unit Tests (`packages/pitsi`)

Tests individual CLI utilities and functions.

Run with: `bun run pitsi:test` or `cd packages/pitsi && bun run test`

## Environment Variables

### V4 App
- `NEXT_PUBLIC_APP_URL` - Public URL for the app
- `REGISTRY_URL` - Registry API URL
- `COMPONENTS_REGISTRY_URL` - Components registry URL

### CLI (`packages/pitsi`)
- `REGISTRY_URL` - Override default registry URL (useful for local development)

Example for local development:
```bash
REGISTRY_URL=http://localhost:4000/r bun run pitsi:dev add button
```

## Code Style

### Prettier Configuration

Defined in `apps/v4/package.json`:
- No semicolons
- Double quotes
- 2 space indentation
- Import order: React → Next → Third-party → Workspace → Internal

### Import Order

Follow this order (enforced by prettier):
1. React imports
2. Next.js imports
3. Third-party modules
4. Workspace packages
5. Types
6. Config
7. Lib/utils
8. Hooks
9. UI components
10. Components
11. Registry
12. Styles
13. App/www
14. Relative imports

## Key Files

- `apps/v4/registry/new-york-v4/registry.ts` - Main registry definition
- `apps/v4/scripts/build-registry.mts` - Registry build script
- `apps/v4/components.json` - V4 app configuration
- `packages/pitsi/src/index.ts` - CLI entry point
- `packages/pitsi/src/commands/add.ts` - Add command implementation
- `packages/pitsi/src/registry/api.ts` - Registry API client
- `turbo.json` - Turborepo pipeline configuration

## Common Workflows

### Local Development

1. Start the v4 dev server: `bun run v4:dev`
2. In another terminal, watch CLI: `bun run pitsi:dev`
3. Test CLI against local registry: `cd /tmp && bun run start:dev add button`

### Making Registry Changes

1. Update component in `apps/v4/registry/new-york-v4/`
2. Update registry definition in corresponding `_registry.ts`
3. Run `bun run registry:build` from root
4. Verify changes in registry.json
5. Test with CLI: `bun run pitsi:dev add your-component`

### Publishing the CLI

1. Make changes to `packages/pitsi`
2. Update version in `packages/pitsi/package.json`
3. Run tests: `bun run pitsi:test`
4. Build: `bun run pitsi:build`
5. For beta: `bun run pub:beta`
6. For release: `bun run pub:release`
