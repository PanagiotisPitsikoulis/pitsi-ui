# Registry Config Files Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Refactor registry so each block has a co-located `.config.ts` file, with build script generating `_registry.ts` dynamically.

**Architecture:** Each block component gets a sibling `.config.ts` exporting `registryConfig`. Build script globs all configs, infers file paths, and generates `_registry.ts`. Templates stay in separate `_templates.ts`.

**Tech Stack:** TypeScript, Bun, glob patterns, dynamic imports

---

### Task 1: Create RegistryItemConfig Type

**Files:**
- Create: `apps/v4/registry/types.ts`

**Step 1: Create the types file**

```typescript
// apps/v4/registry/types.ts
import type { RegistryItem } from "pitsi/schema"

/**
 * Block configuration for blocks-first architecture
 */
export interface BlockConfig {
  template: string
  blockType: string
  order: number
  palette: string
  typography: string
  tint?: "base" | "tinted" | "deep"
  forceLight?: boolean
  forceDark?: boolean
}

/**
 * Registry item config exported from .config.ts files
 * The `files` array is omitted - inferred from config file location
 */
export type RegistryItemConfig = Omit<RegistryItem, "files"> & {
  blockConfig?: BlockConfig
}
```

**Step 2: Verify TypeScript compiles**

Run: `cd apps/v4 && bun run typecheck`
Expected: No errors related to types.ts

**Step 3: Commit**

```bash
git add apps/v4/registry/types.ts
git commit -m "feat: add RegistryItemConfig type for .config.ts files"
```

---

### Task 2: Create Migration Script

**Files:**
- Create: `apps/v4/scripts/migrate-to-config-files.mts`

**Step 1: Write migration script**

```typescript
// apps/v4/scripts/migrate-to-config-files.mts
import { promises as fs } from "fs"
import path from "path"

// Import current blocks registry
import { blocks } from "../registry/new-york-v4/blocks/_registry"

const REGISTRY_DIR = path.join(process.cwd(), "registry/new-york-v4")

// Template names to exclude (they go in _templates.ts)
const TEMPLATE_NAMES = [
  "service-plants",
  "service-travel",
  "service-boat",
  "service-fitness",
  "app-gym-tracker",
  "app-quiz",
]

function generateConfigContent(item: typeof blocks[number]): string {
  const { files, ...rest } = item as Record<string, unknown>

  // Format blockConfig inline if present
  let blockConfigStr = ""
  if (rest.blockConfig) {
    const bc = rest.blockConfig as Record<string, unknown>
    blockConfigStr = `  blockConfig: {
    template: "${bc.template}",
    blockType: "${bc.blockType}",
    order: ${bc.order},
    palette: "${bc.palette}",
    typography: "${bc.typography}",${bc.tint ? `\n    tint: "${bc.tint}",` : ""}${bc.forceLight ? `\n    forceLight: ${bc.forceLight},` : ""}${bc.forceDark ? `\n    forceDark: ${bc.forceDark},` : ""}
  },`
    delete rest.blockConfig
  }

  // Build the config object
  const lines = [
    `import type { RegistryItemConfig } from "@/registry/types"`,
    ``,
    `export const registryConfig: RegistryItemConfig = {`,
    `  name: "${rest.name}",`,
    `  type: "${rest.type}",`,
  ]

  if (rest.description) {
    lines.push(`  description: "${(rest.description as string).replace(/"/g, '\\"')}",`)
  }

  if (rest.dependencies && (rest.dependencies as string[]).length > 0) {
    lines.push(`  dependencies: ${JSON.stringify(rest.dependencies)},`)
  }

  if (rest.registryDependencies && (rest.registryDependencies as string[]).length > 0) {
    lines.push(`  registryDependencies: ${JSON.stringify(rest.registryDependencies)},`)
  }

  if (rest.categories && (rest.categories as string[]).length > 0) {
    lines.push(`  categories: ${JSON.stringify(rest.categories)},`)
  }

  if (rest.tier) {
    lines.push(`  tier: "${rest.tier}",`)
  }

  if (rest.readiness) {
    lines.push(`  readiness: "${rest.readiness}",`)
  }

  if (blockConfigStr) {
    lines.push(blockConfigStr)
  }

  if (rest.meta) {
    lines.push(`  meta: ${JSON.stringify(rest.meta)},`)
  }

  lines.push(`}`)
  lines.push(``)

  return lines.join("\n")
}

async function migrate() {
  console.log(`Found ${blocks.length} blocks to process`)

  let created = 0
  let skipped = 0
  const templates: typeof blocks = []

  for (const item of blocks) {
    // Skip templates
    if (TEMPLATE_NAMES.includes(item.name)) {
      templates.push(item)
      skipped++
      continue
    }

    // Get the component file path from the item
    const filePath = item.files?.[0]?.path
    if (!filePath) {
      console.warn(`Skipping ${item.name}: no file path`)
      skipped++
      continue
    }

    // Generate config file path (sibling to component)
    const configPath = path.join(
      REGISTRY_DIR,
      filePath.replace(".tsx", ".config.ts")
    )

    // Generate config content
    const content = generateConfigContent(item)

    // Write config file
    await fs.writeFile(configPath, content)
    console.log(`Created: ${configPath}`)
    created++
  }

  // Write templates file
  console.log(`\nWriting ${templates.length} templates to _templates.ts...`)
  const templatesContent = generateTemplatesFile(templates)
  await fs.writeFile(
    path.join(REGISTRY_DIR, "blocks/_templates.ts"),
    templatesContent
  )

  console.log(`\nMigration complete:`)
  console.log(`  Created: ${created} config files`)
  console.log(`  Templates: ${templates.length}`)
  console.log(`  Skipped: ${skipped - templates.length}`)
}

function generateTemplatesFile(templates: typeof blocks): string {
  const lines = [
    `import { Registry } from "pitsi/schema"`,
    ``,
    `export const templates: Registry["items"] = [`,
  ]

  for (const item of templates) {
    lines.push(`  {`)
    lines.push(`    name: "${item.name}",`)
    lines.push(`    type: "${item.type}",`)
    if (item.description) {
      lines.push(`    description: "${item.description.replace(/"/g, '\\"')}",`)
    }
    if (item.dependencies?.length) {
      lines.push(`    dependencies: ${JSON.stringify(item.dependencies)},`)
    }
    if (item.registryDependencies?.length) {
      lines.push(`    registryDependencies: ${JSON.stringify(item.registryDependencies)},`)
    }
    if (item.files?.length) {
      lines.push(`    files: [`)
      for (const f of item.files) {
        lines.push(`      { path: "${f.path}", type: "${f.type}" },`)
      }
      lines.push(`    ],`)
    }
    if (item.categories?.length) {
      lines.push(`    categories: ${JSON.stringify(item.categories)},`)
    }
    if (item.tier) {
      lines.push(`    tier: "${item.tier}",`)
    }
    if (item.readiness) {
      lines.push(`    readiness: "${item.readiness}",`)
    }
    if (item.meta) {
      lines.push(`    meta: ${JSON.stringify(item.meta)},`)
    }
    lines.push(`  },`)
  }

  lines.push(`]`)
  lines.push(``)

  return lines.join("\n")
}

migrate().catch(console.error)
```

**Step 2: Commit migration script**

```bash
git add apps/v4/scripts/migrate-to-config-files.mts
git commit -m "feat: add migration script for .config.ts files"
```

---

### Task 3: Run Migration Script

**Step 1: Run the migration**

Run: `cd apps/v4 && bun scripts/migrate-to-config-files.mts`
Expected: Creates ~170 `.config.ts` files and `_templates.ts`

**Step 2: Format generated files**

Run: `cd apps/v4 && bun run format:write`

**Step 3: Verify config files exist**

Run: `ls apps/v4/registry/new-york-v4/blocks/hero/*.config.ts | head -5`
Expected: Lists hero-1.config.ts, hero-2.config.ts, etc.

**Step 4: Commit generated files**

```bash
git add apps/v4/registry/new-york-v4/**/*.config.ts
git add apps/v4/registry/new-york-v4/blocks/_templates.ts
git commit -m "feat: generate .config.ts files for all blocks"
```

---

### Task 4: Add generateRegistryFromConfigs to Build Script

**Files:**
- Modify: `apps/v4/scripts/build-registry.mts`

**Step 1: Add glob import and new function**

Add after line 4 (after rimraf import):

```typescript
import { glob } from "glob"
```

Add new function before `buildRegistryIndex`:

```typescript
async function generateRegistryFromConfigs(styleName: string) {
  const baseDir = path.join(process.cwd(), `registry/${styleName}`)
  const configPattern = `${baseDir}/blocks/**/*.config.ts`
  const configFiles = await glob(configPattern)

  console.log(`  Found ${configFiles.length} config files`)

  const items: Array<Record<string, unknown>> = []

  for (const configPath of configFiles) {
    try {
      const mod = await import(configPath)
      const config = mod.registryConfig

      if (!config) {
        console.warn(`  Warning: No registryConfig export in ${configPath}`)
        continue
      }

      // Infer component path from config path
      const relativePath = configPath
        .replace(baseDir + "/", "")
        .replace(".config.ts", ".tsx")

      items.push({
        ...config,
        files: [{ path: relativePath, type: config.type }],
      })
    } catch (err) {
      console.error(`  Error loading ${configPath}:`, err)
    }
  }

  // Sort alphabetically for consistent output
  items.sort((a, b) => (a.name as string).localeCompare(b.name as string))

  // Generate _registry.ts content
  const output = `// AUTO-GENERATED by scripts/build-registry.mts
// Do not edit this file directly.
import { Registry } from "pitsi/schema"

export interface BlockConfig {
  template: string
  blockType: string
  order: number
  palette: string
  typography: string
  tint?: "base" | "tinted" | "deep"
  forceLight?: boolean
  forceDark?: boolean
}

export const blocks: Registry["items"] = ${JSON.stringify(items, null, 2)}
`

  const outputPath = path.join(baseDir, "blocks/_registry.ts")
  await fs.writeFile(outputPath, output)

  // Format with prettier
  await new Promise<void>((resolve, reject) => {
    execFile("prettier", ["--write", outputPath], (error) => {
      if (error) reject(error)
      else resolve()
    })
  })

  console.log(`  Generated ${outputPath} with ${items.length} blocks`)
}
```

**Step 2: Call the function in build process**

Add after `console.log(`🎨 Found ${styles.length} styles...`)` (around line 531):

```typescript
  // Generate _registry.ts from .config.ts files
  console.log("\n🔧 Generating _registry.ts from .config.ts files...")
  for (const style of styles) {
    console.log(`  Processing ${style.name}...`)
    await generateRegistryFromConfigs(style.name)
  }
```

**Step 3: Verify build script compiles**

Run: `cd apps/v4 && bun run typecheck`

**Step 4: Commit**

```bash
git add apps/v4/scripts/build-registry.mts
git commit -m "feat: add generateRegistryFromConfigs to build script"
```

---

### Task 5: Update registry.ts to Import Templates

**Files:**
- Modify: `apps/v4/registry/new-york-v4/registry.ts`

**Step 1: Add templates import**

Add after line 6 (after blocks import):

```typescript
import { templates } from "./blocks/_templates"
```

**Step 2: Update items array**

Change line 45 from:
```typescript
      ...blocks,
```
to:
```typescript
      ...blocks,
      ...templates,
```

**Step 3: Commit**

```bash
git add apps/v4/registry/new-york-v4/registry.ts
git commit -m "feat: import templates from separate file"
```

---

### Task 6: Run Full Build and Verify

**Step 1: Run registry build**

Run: `cd apps/v4 && bun run registry:build`
Expected: Build completes successfully

**Step 2: Verify generated registry matches original**

Run: `cd apps/v4 && git diff registry/new-york-v4/blocks/_registry.ts`
Expected: Diff shows format changes only (auto-generated header, sorted order), not content changes

**Step 3: Run typecheck**

Run: `bun run typecheck`
Expected: No type errors

**Step 4: Run dev server to verify**

Run: `bun run v4:dev`
Expected: Dev server starts, blocks render correctly

**Step 5: Commit generated registry**

```bash
git add apps/v4/registry/new-york-v4/blocks/_registry.ts
git commit -m "chore: regenerate _registry.ts from config files"
```

---

### Task 7: Remove Old Manual Entries from _registry.ts

**Files:**
- Verify: `apps/v4/registry/new-york-v4/blocks/_registry.ts`

**Step 1: Verify _registry.ts is now auto-generated**

The file should now have the header:
```typescript
// AUTO-GENERATED by scripts/build-registry.mts
// Do not edit this file directly.
```

**Step 2: Final commit**

```bash
git add -A
git commit -m "feat: complete registry config files migration"
```

---

### Task 8: Cleanup Migration Script (Optional)

**Files:**
- Delete: `apps/v4/scripts/migrate-to-config-files.mts`

**Step 1: Remove migration script**

Run: `rm apps/v4/scripts/migrate-to-config-files.mts`

**Step 2: Commit**

```bash
git add -A
git commit -m "chore: remove migration script (no longer needed)"
```

---

## Verification Checklist

- [ ] All blocks have `.config.ts` files
- [ ] Templates are in `_templates.ts`
- [ ] `_registry.ts` is auto-generated
- [ ] `bun run registry:build` succeeds
- [ ] `bun run typecheck` passes
- [ ] Dev server runs correctly
- [ ] Block pages render in browser
