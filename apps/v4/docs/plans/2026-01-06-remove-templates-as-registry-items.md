# Remove Templates as Registry Items - Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Remove templates from the registry (not installable via CLI) while keeping Full Pages section functional, with blocks using their own themes.

**Architecture:** Templates become a computed concept derived from `_template-configs.ts` metadata + block `blockConfig.template` values. The build script reads template configs separately from the registry, computes `COMPUTED_TEMPLATES` from blocks that reference each template, and generates metadata. Templates are no longer registry items.

**Tech Stack:** TypeScript, Node.js build scripts, bun

---

## Task 1: Create Template Configs File

**Files:**
- Create: `apps/v4/registry/new-york-v4/blocks/_template-configs.ts`

**Step 1: Create the template configs file**

```typescript
// apps/v4/registry/new-york-v4/blocks/_template-configs.ts

export interface TemplateConfig {
  slug: string
  name: string
  description: string
  heroBlock: string
  type: "service" | "application"
}

export const templateConfigs: TemplateConfig[] = [
  {
    slug: "service-plants",
    name: "Plant Shop",
    description: "Complete plant shop landing page with all sections",
    heroBlock: "hero-1",
    type: "service",
  },
  {
    slug: "service-travel",
    name: "Travel Agency",
    description: "Stunning travel agency landing page for tour operators",
    heroBlock: "hero-2",
    type: "service",
  },
  {
    slug: "service-boat",
    name: "Yacht Charter",
    description: "Luxury yacht charter landing page for marine services",
    heroBlock: "hero-3",
    type: "service",
  },
  {
    slug: "service-fitness",
    name: "Fitness Studio",
    description: "Boutique fitness studio landing page with high-energy design",
    heroBlock: "hero-5",
    type: "service",
  },
  {
    slug: "app-gym-tracker",
    name: "Gym Tracker",
    description: "Complete gym progressive overload tracker with two sidebars",
    heroBlock: "app-gym-today-1",
    type: "application",
  },
  {
    slug: "app-quiz",
    name: "Quiz App",
    description: "Complete quiz application template",
    heroBlock: "app-quiz-dashboard-1",
    type: "application",
  },
]
```

**Step 2: Verify file was created**

Run: `ls apps/v4/registry/new-york-v4/blocks/_template-configs.ts`
Expected: File exists

---

## Task 2: Remove Templates from Registry

**Files:**
- Modify: `apps/v4/registry/new-york-v4/registry.ts`

**Step 1: Remove templates import and usage**

In `apps/v4/registry/new-york-v4/registry.ts`:

Remove line 7:
```typescript
import { templates } from "./blocks/_templates"
```

Remove `...templates,` from the items array (line 49).

The file should look like:

```typescript
import { registryItemSchema, type Registry } from "pitsi/schema"
import { z } from "zod"

import { themes } from "../themes"
import { animations } from "./animations/_registry"
import { blocks } from "./blocks/_registry"
import { examples } from "./examples/_registry"
import { hooks } from "./hooks/_registry"
import { internal } from "./internal/_registry"
import { lib } from "./lib/_registry"
import { ui } from "./ui/_registry"

const DEPRECATED_ITEMS = [
  "toast",
  "toast-demo",
  "toast-destructive",
  "toast-simple",
  "toast-with-action",
  "toast-with-title",
]

// Shared between index and style for backward compatibility.
const NEW_YORK_V4_STYLE = {
  type: "registry:style",
  dependencies: ["class-variance-authority", "lucide-react"],
  devDependencies: ["tw-animate-css"],
  registryDependencies: ["utils"],
  cssVars: {},
  files: [],
}

export const registry = {
  name: "pitsi/ui",
  homepage: "https://pitsiui.com",
  items: z.array(registryItemSchema).parse(
    [
      {
        name: "index",
        ...NEW_YORK_V4_STYLE,
      },
      {
        name: "style",
        ...NEW_YORK_V4_STYLE,
      },
      ...ui,
      ...animations,
      ...blocks,
      ...lib,
      ...hooks,
      ...themes,
      ...examples,
      ...internal,
    ]
      .filter((item) => {
        return !DEPRECATED_ITEMS.includes(item.name)
      })
      .map((item) => {
        // Temporary fix for dashboard-01.
        if (item.name === "dashboard-01") {
          item.dependencies?.push("@tabler/icons-react")
        }

        if (item.name === "accordion" && "tailwind" in item) {
          delete item.tailwind
        }

        return item
      })
  ),
} satisfies Registry
```

**Step 2: Verify TypeScript compiles**

Run: `cd apps/v4 && bun run typecheck`
Expected: No errors related to templates import

---

## Task 3: Delete Template Files

**Files:**
- Delete: `apps/v4/registry/new-york-v4/blocks/_templates.ts`
- Delete: `apps/v4/registry/new-york-v4/blocks/service/service-plants.tsx`
- Delete: `apps/v4/registry/new-york-v4/blocks/service/service-travel.tsx`
- Delete: `apps/v4/registry/new-york-v4/blocks/service/service-boat.tsx`
- Delete: `apps/v4/registry/new-york-v4/blocks/service/service-fitness.tsx`
- Delete: `apps/v4/registry/new-york-v4/blocks/application/app-gym-tracker.tsx`
- Delete: `apps/v4/registry/new-york-v4/blocks/application/app-quiz.tsx`

**Step 1: Delete the files**

```bash
rm apps/v4/registry/new-york-v4/blocks/_templates.ts
rm apps/v4/registry/new-york-v4/blocks/service/service-plants.tsx
rm apps/v4/registry/new-york-v4/blocks/service/service-travel.tsx
rm apps/v4/registry/new-york-v4/blocks/service/service-boat.tsx
rm apps/v4/registry/new-york-v4/blocks/service/service-fitness.tsx
rm apps/v4/registry/new-york-v4/blocks/application/app-gym-tracker.tsx
rm apps/v4/registry/new-york-v4/blocks/application/app-quiz.tsx
```

**Step 2: Verify files are deleted**

Run: `ls apps/v4/registry/new-york-v4/blocks/_templates.ts`
Expected: "No such file or directory"

---

## Task 4: Update Build Script

**Files:**
- Modify: `apps/v4/scripts/build-registry.mts`

**Step 1: Import template configs at top of buildBlocksMetadata function**

Replace the `buildBlocksMetadata` function (lines 325-577) with the updated version that:
1. Imports `templateConfigs` from `_template-configs.ts`
2. Uses template configs for `TEMPLATE_METADATA` instead of registry items
3. Removes `template` from `BLOCK_CATEGORIES`
4. Keeps computing `COMPUTED_TEMPLATES` from block configs

```typescript
async function buildBlocksMetadata(styles: Style[]) {
  // Import template configs
  const { templateConfigs } = await import(
    `../registry/new-york-v4/blocks/_template-configs.ts`
  )

  // Structure: { category: blockNames[] }
  const categoryStructure: Record<string, string[]> = {}

  // Blocks-first: Collect blocks by template for computing templates
  const blocksByTemplate: Record<string, {
    block: ComputedTemplateBlockType
    description: string
    categories: string[]
  }[]> = {}

  for (const style of styles) {
    const { registry: importedRegistry } = await import(
      `../registry/${style.name}/registry.ts`
    )

    const parseResult = registrySchema.safeParse(importedRegistry)
    if (!parseResult.success) continue

    const registry = parseResult.data

    for (const item of registry.items) {
      if (item.type !== "registry:block" && item.type !== "registry:internal") {
        continue
      }

      // Use categories from registry entry directly
      const categories = item.categories || []
      if (categories.length === 0) continue

      // Skip "template" category - templates are no longer registry items
      if (categories.includes("template")) continue

      // Use the first category as the main category
      const mainCategory = categories[0]

      if (!categoryStructure[mainCategory]) {
        categoryStructure[mainCategory] = []
      }
      categoryStructure[mainCategory].push(item.name)

      // Collect blocks with blockConfig for template computation
      const blockConfig = (item as unknown as { blockConfig?: BlockConfigType }).blockConfig
      if (blockConfig && blockConfig.template && blockConfig.template !== "standalone") {
        if (!blocksByTemplate[blockConfig.template]) {
          blocksByTemplate[blockConfig.template] = []
        }
        blocksByTemplate[blockConfig.template].push({
          block: {
            name: item.name,
            blockType: blockConfig.blockType,
            order: blockConfig.order,
            palette: blockConfig.palette,
            typography: blockConfig.typography,
            tint: blockConfig.tint,
            forceLight: blockConfig.forceLight,
            forceDark: blockConfig.forceDark,
          },
          description: item.description || "",
          categories: categories,
        })
      }
    }
  }

  // Build template metadata from template configs (not registry)
  const templateMetadata = templateConfigs.map((config: { slug: string; name: string; description: string; heroBlock: string; type: "service" | "application" }) => ({
    slug: config.slug,
    name: config.name,
    description: config.description,
    heroBlock: config.heroBlock,
    type: config.type,
  }))

  // Compute templates from blocks
  const computedTemplates: Record<string, ComputedTemplateType> = {}

  for (const config of templateConfigs) {
    const blockInfos = blocksByTemplate[config.slug] || []

    // Sort blocks by order
    const sortedBlocks = blockInfos.sort((a: { block: ComputedTemplateBlockType }, b: { block: ComputedTemplateBlockType }) => a.block.order - b.block.order)

    // Group blocks by type for toggle UI
    const blockGroups: Record<string, string[]> = {}
    for (const blockInfo of sortedBlocks) {
      const blockType = blockInfo.block.blockType
      if (!blockGroups[blockType]) {
        blockGroups[blockType] = []
      }
      blockGroups[blockType].push(blockInfo.block.name)
    }

    computedTemplates[config.slug] = {
      slug: config.slug,
      name: config.name,
      description: config.description,
      heroBlock: config.heroBlock,
      type: config.type,
      blocks: sortedBlocks.map((b: { block: ComputedTemplateBlockType }) => b.block),
      blockGroups,
    }

    // Warn if no blocks found for this template
    if (blockInfos.length === 0) {
      console.warn(`  Warning: No blocks found for template "${config.slug}"`)
    }
  }

  // Warn about orphan blocks (blocks referencing non-existent templates)
  const validTemplateSlugs = new Set(templateConfigs.map((c: { slug: string }) => c.slug))
  for (const templateSlug of Object.keys(blocksByTemplate)) {
    if (!validTemplateSlugs.has(templateSlug)) {
      console.warn(`  Warning: Blocks reference unknown template "${templateSlug}"`)
    }
  }

  // Generate TypeScript file with pre-computed metadata
  const content = `// Auto-generated by scripts/build-registry.mts
// Do not edit this file directly.

/**
 * Pre-computed block category metadata for fast lookups
 * This avoids loading the full registry index (1.2MB) for navigation
 */

export const BLOCK_CATEGORIES: Record<string, string[]> = ${JSON.stringify(categoryStructure, null, 2)}

export function getAllCategories(): string[] {
  return Object.keys(BLOCK_CATEGORIES).sort()
}

export function getBlocksByCategory(category: string): string[] {
  return BLOCK_CATEGORIES[category] || []
}

export function getCategoryBlockCounts(): Record<string, number> {
  const counts: Record<string, number> = {}
  for (const [category, blocks] of Object.entries(BLOCK_CATEGORIES)) {
    counts[category] = blocks.length
  }
  return counts
}

/**
 * Template metadata for Full Pages section
 * Computed from _template-configs.ts (not registry items)
 */
export interface RegistryTemplateMetadata {
  slug: string
  name: string
  description: string
  heroBlock: string
  type: "service" | "application"
}

export const TEMPLATE_METADATA: RegistryTemplateMetadata[] = ${JSON.stringify(templateMetadata, null, 2)}

export function getAllTemplatesFromRegistry(): RegistryTemplateMetadata[] {
  return TEMPLATE_METADATA
}

export function getServiceTemplatesFromRegistry(): RegistryTemplateMetadata[] {
  return TEMPLATE_METADATA.filter((t) => t.type === "service")
}

export function getApplicationTemplatesFromRegistry(): RegistryTemplateMetadata[] {
  return TEMPLATE_METADATA.filter((t) => t.type === "application")
}

/**
 * Computed templates from blocks-first architecture
 * Each template aggregates blocks that belong to it via blockConfig
 */
export interface ComputedTemplateBlock {
  name: string
  blockType: string
  order: number
  palette: string
  typography: string
  tint?: "base" | "tinted" | "deep"
  forceLight?: boolean
  forceDark?: boolean
}

export interface ComputedTemplate {
  slug: string
  name: string
  description: string
  heroBlock: string
  type: "service" | "application"
  blocks: ComputedTemplateBlock[]
  blockGroups: Record<string, string[]> // blockType -> block names (for toggle UI)
}

export const COMPUTED_TEMPLATES: Record<string, ComputedTemplate> = ${JSON.stringify(computedTemplates, null, 2)}

export function getComputedTemplate(slug: string): ComputedTemplate | null {
  return COMPUTED_TEMPLATES[slug] || null
}

export function getAllComputedTemplates(): ComputedTemplate[] {
  return Object.values(COMPUTED_TEMPLATES)
}

export function getBlocksByTemplateAndType(slug: string, blockType: string): string[] {
  return COMPUTED_TEMPLATES[slug]?.blockGroups[blockType] || []
}
`

  const outputPath = path.join(process.cwd(), "registry/__blocks-metadata__.ts")
  rimraf.sync(outputPath)
  await fs.writeFile(outputPath, content)

  await new Promise<void>((resolve, reject) => {
    execFile('prettier', ['--write', outputPath], (error) => {
      if (error) reject(error)
      else resolve()
    })
  })

  const totalBlocks = Object.values(categoryStructure).flat().length
  console.log(`📊 Built blocks metadata: ${Object.keys(categoryStructure).length} categories, ${totalBlocks} blocks`)
  console.log(`📦 Computed ${Object.keys(computedTemplates).length} templates from blocks-first architecture`)
}
```

**Step 2: Verify build script has no syntax errors**

Run: `cd apps/v4 && bun run typecheck`
Expected: No errors

---

## Task 5: Build and Verify

**Step 1: Run the registry build**

```bash
cd apps/v4 && bun run registry:build
```

Expected output should include:
- `📊 Built blocks metadata: X categories, Y blocks`
- `📦 Computed 6 templates from blocks-first architecture`
- No `template` in the category list
- Warnings for orphan blocks or missing templates (if any)

**Step 2: Verify generated metadata**

Check `apps/v4/registry/__blocks-metadata__.ts`:
- `BLOCK_CATEGORIES` should NOT have a `template` key
- `TEMPLATE_METADATA` should have 6 templates
- `COMPUTED_TEMPLATES` should have 6 templates with their blocks

**Step 3: Start dev server and verify Full Pages**

```bash
cd apps/v4 && bun run dev
```

Navigate to `http://localhost:4000/blocks` and verify:
- Full Pages section shows all 6 templates
- Clicking a template opens the template viewer
- Template viewer renders blocks correctly

---

## Task 6: Commit

**Step 1: Stage changes**

```bash
git add apps/v4/registry/new-york-v4/blocks/_template-configs.ts
git add apps/v4/registry/new-york-v4/registry.ts
git add apps/v4/scripts/build-registry.mts
git add apps/v4/registry/__blocks-metadata__.ts
git add apps/v4/registry/__index__.tsx
git add apps/v4/registry/__blocks__.json
git add apps/v4/public/r/
```

**Step 2: Commit**

```bash
git commit -m "refactor: remove templates as registry items

Templates are now computed from _template-configs.ts + block configs.
- Create _template-configs.ts for template metadata
- Remove _templates.ts and template wrapper components
- Update build script to compute templates from configs
- Templates no longer appear in BLOCK_CATEGORIES
- Full Pages section continues to work via TEMPLATE_METADATA"
```
