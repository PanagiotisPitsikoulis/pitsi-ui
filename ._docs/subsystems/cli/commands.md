# CLI Commands Reference

> Complete documentation for all pitsi CLI commands

## Global Options

Available on all commands:

| Option | Description |
|--------|-------------|
| `-v, --version` | Display version number |
| `-h, --help` | Display help |

---

## `pitsi init`

Initialize pitsi in a project.

```bash
pitsi init [options]
```

### Options

| Option | Default | Description |
|--------|---------|-------------|
| `-y, --yes` | `false` | Skip prompts, use defaults |
| `-d, --defaults` | `false` | Use default configuration |
| `-f, --force` | `false` | Overwrite existing config |
| `-c, --cwd <path>` | `.` | Working directory |
| `-s, --silent` | `false` | Mute output |
| `--src-dir` | `false` | Use src directory |
| `--base-style` | `true` | Include base styles |

### Interactive Prompts

When run without `--yes`:

1. **Style**: Choose component style (new-york)
2. **Base color**: Choose base color theme
3. **CSS path**: Path to global CSS file
4. **Tailwind config**: Path to tailwind.config
5. **Components path**: Component installation path
6. **Utils path**: Utilities installation path

### Generated Files

**components.json:**
```json
{
  "$schema": "https://pitsiui.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "app/globals.css",
    "baseColor": "slate",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
```

### Examples

```bash
# Interactive initialization
pitsi init

# Quick initialization with defaults
pitsi init -y

# Force reinitialize
pitsi init --force

# Initialize in different directory
pitsi init --cwd ./my-project
```

---

## `pitsi add`

Add components to your project.

```bash
pitsi add [components...] [options]
```

### Arguments

| Argument | Description |
|----------|-------------|
| `components` | Component names, URLs, or local paths |

### Options

| Option | Default | Description |
|--------|---------|-------------|
| `-y, --yes` | `false` | Skip confirmation |
| `-o, --overwrite` | `false` | Overwrite existing files |
| `-c, --cwd <path>` | `.` | Working directory |
| `-a, --all` | `false` | Add all components |
| `-p, --path <path>` | - | Custom installation path |
| `-s, --silent` | `false` | Mute output |
| `--src-dir` | - | Use src directory |
| `--css-variables` | `true` | Use CSS variables |

### Examples

```bash
# Add single component
pitsi add button

# Add multiple components
pitsi add button dialog card

# Add from custom registry
pitsi add @acme/custom-button

# Add all components
pitsi add --all

# Overwrite existing
pitsi add button --overwrite

# Add to custom path
pitsi add button --path ./src/ui

# Skip confirmation
pitsi add button -y
```

### Behavior

1. Reads `components.json` for configuration
2. Fetches component from registry
3. Resolves all dependencies (recursive)
4. Transforms code for project settings
5. Writes files to configured paths
6. Updates Tailwind config if needed
7. Adds CSS variables if needed
8. Installs npm dependencies

---

## `pitsi diff`

Show differences between local and registry versions.

```bash
pitsi diff [component] [options]
```

### Arguments

| Argument | Description |
|----------|-------------|
| `component` | Component name to diff (optional) |

### Options

| Option | Default | Description |
|--------|---------|-------------|
| `-c, --cwd <path>` | `.` | Working directory |
| `-y, --yes` | `false` | Skip confirmation |

### Examples

```bash
# Diff specific component
pitsi diff button

# Diff all installed components
pitsi diff

# Non-interactive diff
pitsi diff button -y
```

### Output

```diff
--- local: components/ui/button.tsx
+++ registry: button.tsx
@@ -10,7 +10,7 @@
 const buttonVariants = cva(
   "inline-flex items-center justify-center",
   {
-    variants: { ... }
+    variants: { /* updated variants */ }
   }
 )
```

---

## `pitsi search`

Search for components in registries.

```bash
pitsi search <query> [options]
```

### Arguments

| Argument | Description |
|----------|-------------|
| `query` | Search query |

### Options

| Option | Default | Description |
|--------|---------|-------------|
| `-r, --registry <name>` | - | Search specific registry |
| `--limit <n>` | `20` | Max results |

### Examples

```bash
# Search all registries
pitsi search button

# Search specific registry
pitsi search button --registry @v0

# Limit results
pitsi search table --limit 5
```

### Output

```
Found 3 results for "button":

  @pitsi/button
  A versatile button component with multiple variants
  pitsi add button

  @pitsi/button-group
  Group multiple buttons together
  pitsi add button-group

  @v0/fancy-button
  Animated button with hover effects
  pitsi add @v0/fancy-button
```

---

## `pitsi view`

Preview a component in the browser.

```bash
pitsi view <component> [options]
```

### Arguments

| Argument | Description |
|----------|-------------|
| `component` | Component name to preview |

### Options

| Option | Default | Description |
|--------|---------|-------------|
| `-c, --cwd <path>` | `.` | Working directory |

### Examples

```bash
# Open component preview
pitsi view button
```

Opens browser to component preview page.

---

## `pitsi migrate`

Migrate components to new versions or formats.

```bash
pitsi migrate <migration> [options]
```

### Available Migrations

| Migration | Description |
|-----------|-------------|
| `icons` | Migrate icon library imports |
| `radix` | Migrate Radix UI package updates |

### Options

| Option | Default | Description |
|--------|---------|-------------|
| `-c, --cwd <path>` | `.` | Working directory |

### Examples

```bash
# Migrate icons
pitsi migrate icons

# Migrate Radix packages
pitsi migrate radix
```

---

## `pitsi info`

Display project configuration information.

```bash
pitsi info [options]
```

### Options

| Option | Default | Description |
|--------|---------|-------------|
| `-c, --cwd <path>` | `.` | Working directory |

### Output

```
pitsi/ui project info:

Configuration:
  Style:        new-york
  RSC:          true
  TSX:          true

Tailwind:
  Config:       tailwind.config.ts
  CSS:          app/globals.css
  Base color:   slate
  CSS vars:     true

Aliases:
  components:   @/components
  utils:        @/lib/utils
  ui:           @/components/ui

Registries:
  @pitsi:       https://pitsiui.com/r/{name}.json
```

---

## `pitsi build`

Build registry JSON from local definitions.

```bash
pitsi build <input> [options]
```

### Arguments

| Argument | Description |
|----------|-------------|
| `input` | Path to registry JSON file |

### Options

| Option | Default | Description |
|--------|---------|-------------|
| `--output <path>` | `.` | Output directory |

### Examples

```bash
# Build registry
pitsi build registry.json --output ./public/r
```

Generates individual JSON files for each registry item.

---

## `pitsi mcp`

Start the MCP (Model Context Protocol) server.

```bash
pitsi mcp [options]
```

### Usage

Add to Claude Desktop config:

```json
{
  "mcpServers": {
    "pitsi": {
      "command": "pitsi",
      "args": ["mcp"]
    }
  }
}
```

### Available MCP Tools

| Tool | Description |
|------|-------------|
| `search` | Search for components |
| `view` | Get component details |
| `add` | Add component to project |
| `list` | List all components |

---

## Exit Codes

| Code | Meaning |
|------|---------|
| `0` | Success |
| `1` | Error |

---

## Environment Variables

| Variable | Description |
|----------|-------------|
| `REGISTRY_URL` | Override default registry URL |
| `COMPONENTS_REGISTRY_URL` | Override components registry |
| `DEBUG` | Enable debug logging |
