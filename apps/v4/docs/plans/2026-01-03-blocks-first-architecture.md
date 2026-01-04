# Blocks-First Architecture: Complete Rework

## Executive Summary

Invert the current architecture: **Blocks become the source of truth**. Templates are computed by aggregating blocks that reference them. Each block defines its own theme, typography, and template membership. Templates override nothing.

---

## Current Architecture (Problems)

```
Template (source of truth)
  ├── palette: "neon"
  ├── blocks: ["header-1", "hero-5", "cta-1", ...]  ← Manual list
  └── (typography looked up separately)

Block (passive)
  ├── categories: ["hero", "service-fitness"]
  └── (no theme/typography info)
```

**Problems:**
1. Templates manually list blocks (duplicates registry categories)
2. Palette/typography defined at template level, not block level
3. Can't easily swap blocks within a template
4. No way to toggle between alternative blocks (e.g., 3 CTAs)

---

## New Architecture: Blocks-First

```
Block (source of truth)
  ├── template: "service-fitness"      ← Which template I belong to
  ├── palette: "neon"                   ← My recommended palette
  ├── typography: "futuristic"          ← My recommended typography
  ├── blockType: "cta"                  ← My type (hero, cta, features, etc.)
  ├── tint: "tinted"                    ← My tint preference
  ├── forceLight: false                 ← My light/dark preference
  └── order: 15                         ← My position in template

Template (computed)
  ├── Aggregates all blocks where block.template === this.slug
  ├── Groups by blockType (hero: [hero-4, hero-5, hero-6])
  ├── Inherits palette from first block
  ├── Inherits typography from first block
  └── NO OVERRIDES - just composition
```

---

## Core Principles

### 1. Blocks Define Everything
Every block defines:
- Which template(s) it belongs to
- Its recommended palette
- Its recommended typography
- Its block type (for grouping alternatives)
- Its display order within the template
- Its tint/force settings

### 2. Templates Are Pure Aggregation
Templates:
- Are COMPUTED from block definitions
- Group blocks by type (hero, cta, features, etc.)
- Provide defaults from first block of each type
- Never override block settings

### 3. Alternative Blocks = Toggles
When multiple blocks of same type belong to a template:
- They become alternatives (e.g., hero-4, hero-5, hero-6)
- UI shows toggle buttons to switch between them
- First block (by order) is the default

### 4. URL Controls Everything
- `?hero=hero-5` - Select specific hero variant
- `?cta=cta-3` - Select specific CTA variant
- `?palette=azure` - Override palette (applies to all blocks)
- `?typography=elegant` - Override typography (applies to all blocks)

---

## Data Model

### Block Registry Entry (New Schema)

```typescript
interface BlockRegistryEntry {
  name: string                    // "hero-5"
  type: "registry:block"
  description: string

  // NEW: Block-level configuration
  blockConfig: {
    template: string              // "service-fitness" - which template
    blockType: string             // "hero" - type for grouping
    order: number                 // 1 - position in template

    // Theme settings (block's preference)
    palette: PaletteId            // "neon"
    typography: TypographyId      // "futuristic"
    tint: TintLevel               // "tinted" | "base" | "deep"

    // Display settings
    forceLight?: boolean
    forceDark?: boolean
  }

  // Existing fields
  dependencies: string[]
  registryDependencies: string[]
  files: FileEntry[]
  categories: string[]            // Keep for filtering: ["hero", "landing"]
  tier: "free" | "pro"
  readiness: "production" | "beta"
}
```

### Computed Template (Generated at Build Time)

```typescript
interface ComputedTemplate {
  slug: string                    // "service-fitness"
  name: string                    // "Personal Training"
  description: string

  // Defaults (from first block)
  defaultPalette: PaletteId
  defaultTypography: TypographyId

  // Blocks grouped by type
  blockGroups: {
    [blockType: string]: {
      blocks: BlockInfo[]         // All blocks of this type
      default: string             // First block name (by order)
      order: number               // Group order (min of block orders)
    }
  }

  // Flat ordered list for rendering
  orderedBlockTypes: string[]     // ["header", "hero", "logos", "features", ...]
}

interface BlockInfo {
  name: string
  order: number
  palette: PaletteId
  typography: TypographyId
  tint: TintLevel
  forceLight?: boolean
  forceDark?: boolean
}
```

---

## Implementation Plan

### Phase 1: Extend Registry Schema

#### 1.1 Update `pitsi/schema` (if needed)

Add `blockConfig` to registry item schema:

```typescript
// packages/pitsi/src/schema.ts
const blockConfigSchema = z.object({
  template: z.string(),
  blockType: z.string(),
  order: z.number(),
  palette: z.string(),
  typography: z.string(),
  tint: z.enum(["base", "tinted", "deep"]).default("base"),
  forceLight: z.boolean().optional(),
  forceDark: z.boolean().optional(),
}).optional()

const registryItemSchema = z.object({
  name: z.string(),
  type: registryItemTypeSchema,
  // ... existing fields
  blockConfig: blockConfigSchema,  // NEW
})
```

#### 1.2 Update Block Registry Entries

**File:** `registry/new-york-v4/blocks/_registry.ts`

```typescript
// BEFORE
{
  name: "hero-5",
  type: "registry:block",
  description: "Full-bleed fitness hero",
  categories: ["hero", "service-fitness"],
  dependencies: ["motion/react"],
  registryDependencies: ["button", "hero-button"],
  files: [{ path: "blocks/hero/hero-5.tsx", type: "registry:block" }],
  tier: "free",
  readiness: "production",
}

// AFTER
{
  name: "hero-5",
  type: "registry:block",
  description: "Full-bleed fitness hero",
  categories: ["hero", "landing"],  // For filtering only

  blockConfig: {
    template: "service-fitness",
    blockType: "hero",
    order: 2,                       // Position in template
    palette: "neon",
    typography: "futuristic",
    tint: "tinted",
  },

  dependencies: ["motion/react"],
  registryDependencies: ["button", "hero-button"],
  files: [{ path: "blocks/hero/hero-5.tsx", type: "registry:block" }],
  tier: "free",
  readiness: "production",
}
```

#### 1.3 Block Configuration Reference Table

| Block | Template | Type | Order | Palette | Typography | Tint |
|-------|----------|------|-------|---------|------------|------|
| header-1 | service-fitness | header | 1 | neon | futuristic | tinted |
| hero-4 | service-fitness | hero | 2 | neon | futuristic | tinted |
| hero-5 | service-fitness | hero | 2 | neon | futuristic | tinted |
| hero-6 | service-fitness | hero | 2 | neon | futuristic | tinted |
| logos-1 | service-fitness | logos | 3 | neon | futuristic | deep |
| features-1 | service-fitness | features | 4 | neon | futuristic | tinted |
| cta-1 | service-fitness | cta | 15 | neon | futuristic | tinted |
| cta-2 | service-fitness | cta | 15 | neon | futuristic | tinted |
| cta-3 | service-fitness | cta | 15 | neon | futuristic | tinted |
| footer-1 | service-fitness | footer | 20 | neon | futuristic | tinted |
| ... | ... | ... | ... | ... | ... | ... |

**Note:** Blocks with same `order` and `blockType` are alternatives (toggle between them).

---

### Phase 2: Create Theme Registries

#### 2.1 Palette Registry

**File:** `registry/new-york-v4/lib/palettes.ts`

```typescript
export type PaletteId =
  | "slate" | "azure" | "violet" | "rose" | "sage"
  | "amber" | "cyan" | "indigo" | "coral" | "forest" | "neon"

export interface PaletteDefinition {
  id: PaletteId
  name: string
  description: string
  preview: {
    brand: string
    complementary: string
    background: string
  }
}

export const palettes: Record<PaletteId, PaletteDefinition> = {
  neon: {
    id: "neon",
    name: "Neon",
    description: "Electric green, cyberpunk aesthetic",
    preview: {
      brand: "#39ff14",
      complementary: "#ff00ff",
      background: "#0a0a0a",
    },
  },
  sage: {
    id: "sage",
    name: "Sage",
    description: "Natural, organic green tones",
    preview: {
      brand: "#84a98c",
      complementary: "#d4a574",
      background: "#f8fcf9",
    },
  },
  // ... all 11 palettes
}

export function getPalette(id: PaletteId): PaletteDefinition {
  return palettes[id] || palettes.slate
}

export function getAllPalettes(): PaletteDefinition[] {
  return Object.values(palettes)
}
```

#### 2.2 Typography Registry

**File:** `registry/new-york-v4/lib/typography.ts`

```typescript
export type TypographyId = "modern" | "elegant" | "classic" | "playful" | "futuristic"

export interface TypographyDefinition {
  id: TypographyId
  name: string
  description: string
  fonts: {
    display: string           // CSS variable: "var(--font-orbitron)"
    body: string              // CSS variable: "var(--font-rajdhani)"
    displayWeight: string
    bodyWeight: string
  }
  preview: {
    displayName: string       // Human readable: "Orbitron"
    bodyName: string          // Human readable: "Rajdhani"
  }
}

export const typographyPresets: Record<TypographyId, TypographyDefinition> = {
  futuristic: {
    id: "futuristic",
    name: "Futuristic",
    description: "Sci-fi and tech aesthetic",
    fonts: {
      display: "var(--font-orbitron)",
      body: "var(--font-rajdhani)",
      displayWeight: "700",
      bodyWeight: "500",
    },
    preview: {
      displayName: "Orbitron",
      bodyName: "Rajdhani",
    },
  },
  elegant: {
    id: "elegant",
    name: "Elegant",
    description: "Refined, sophisticated serif pairing",
    fonts: {
      display: "var(--font-fraunces)",
      body: "var(--font-dm-sans)",
      displayWeight: "600",
      bodyWeight: "400",
    },
    preview: {
      displayName: "Fraunces",
      bodyName: "DM Sans",
    },
  },
  // ... all 5 presets
}

export function getTypography(id: TypographyId): TypographyDefinition {
  return typographyPresets[id] || typographyPresets.modern
}

export function getAllTypography(): TypographyDefinition[] {
  return Object.values(typographyPresets)
}
```

---

### Phase 3: Build-Time Template Generation

#### 3.1 Update `build-registry.mts`

Add template computation after loading all registry items:

```typescript
// scripts/build-registry.mts

interface ComputedTemplate {
  slug: string
  name: string
  description: string
  defaultPalette: string
  defaultTypography: string
  blockGroups: Record<string, {
    blocks: BlockInfo[]
    default: string
    order: number
  }>
  orderedBlockTypes: string[]
}

interface BlockInfo {
  name: string
  order: number
  palette: string
  typography: string
  tint: string
  forceLight?: boolean
  forceDark?: boolean
}

function computeTemplates(items: RegistryItem[]): Record<string, ComputedTemplate> {
  const templates: Record<string, ComputedTemplate> = {}

  // Step 1: Group blocks by template
  for (const item of items) {
    if (item.type !== "registry:block" || !item.blockConfig) continue

    const { template, blockType, order, palette, typography, tint, forceLight, forceDark } = item.blockConfig

    if (!templates[template]) {
      templates[template] = {
        slug: template,
        name: formatTemplateName(template),
        description: "",
        defaultPalette: palette,
        defaultTypography: typography,
        blockGroups: {},
        orderedBlockTypes: [],
      }
    }

    const t = templates[template]

    // Initialize block group if needed
    if (!t.blockGroups[blockType]) {
      t.blockGroups[blockType] = {
        blocks: [],
        default: item.name,
        order: order,
      }
    }

    // Add block to group
    t.blockGroups[blockType].blocks.push({
      name: item.name,
      order,
      palette,
      typography,
      tint,
      forceLight,
      forceDark,
    })

    // Update group order (minimum of all block orders)
    if (order < t.blockGroups[blockType].order) {
      t.blockGroups[blockType].order = order
      t.blockGroups[blockType].default = item.name
    }
  }

  // Step 2: Sort blocks within each group by order
  for (const template of Object.values(templates)) {
    for (const group of Object.values(template.blockGroups)) {
      group.blocks.sort((a, b) => a.order - b.order)
      group.default = group.blocks[0]?.name || ""
    }

    // Step 3: Create ordered list of block types
    template.orderedBlockTypes = Object.entries(template.blockGroups)
      .sort(([, a], [, b]) => a.order - b.order)
      .map(([type]) => type)
  }

  return templates
}

function formatTemplateName(slug: string): string {
  return slug
    .replace(/^(service-|app-)/, "")
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

// In main build function:
async function buildRegistry() {
  // ... existing build logic

  // Compute templates from blocks
  const templates = computeTemplates(registry.items)

  // Write templates JSON
  await fs.writeFile(
    path.join(OUTPUT_DIR, "__templates__.json"),
    JSON.stringify(templates, null, 2)
  )

  console.log(`Generated ${Object.keys(templates).length} templates`)
}
```

#### 3.2 Generated Output Example

**File:** `registry/__templates__.json`

```json
{
  "service-fitness": {
    "slug": "service-fitness",
    "name": "Personal Training",
    "description": "",
    "defaultPalette": "neon",
    "defaultTypography": "futuristic",
    "blockGroups": {
      "header": {
        "blocks": [
          { "name": "header-1", "order": 1, "palette": "neon", "typography": "futuristic", "tint": "tinted", "forceLight": true }
        ],
        "default": "header-1",
        "order": 1
      },
      "hero": {
        "blocks": [
          { "name": "hero-4", "order": 2, "palette": "neon", "typography": "futuristic", "tint": "tinted" },
          { "name": "hero-5", "order": 2, "palette": "neon", "typography": "futuristic", "tint": "tinted" },
          { "name": "hero-6", "order": 2, "palette": "neon", "typography": "futuristic", "tint": "tinted" }
        ],
        "default": "hero-4",
        "order": 2
      },
      "cta": {
        "blocks": [
          { "name": "cta-1", "order": 15, "palette": "neon", "typography": "futuristic", "tint": "tinted" },
          { "name": "cta-2", "order": 15, "palette": "neon", "typography": "futuristic", "tint": "tinted" },
          { "name": "cta-3", "order": 15, "palette": "neon", "typography": "futuristic", "tint": "tinted" }
        ],
        "default": "cta-1",
        "order": 15
      }
    },
    "orderedBlockTypes": ["header", "hero", "logos", "features", "products", "pricing", "testimonials", "gallery", "team", "stats", "faq", "blog", "contact", "newsletter", "cta", "footer"]
  }
}
```

---

### Phase 4: Runtime Template Resolution

#### 4.1 Template Data Access

**File:** `lib/templates.ts`

```typescript
import templatesData from "@/registry/__templates__.json"
import type { PaletteId } from "@/registry/new-york-v4/lib/palettes"
import type { TypographyId } from "@/registry/new-york-v4/lib/typography"

export interface BlockInfo {
  name: string
  order: number
  palette: PaletteId
  typography: TypographyId
  tint: "base" | "tinted" | "deep"
  forceLight?: boolean
  forceDark?: boolean
}

export interface BlockGroup {
  blocks: BlockInfo[]
  default: string
  order: number
}

export interface Template {
  slug: string
  name: string
  description: string
  defaultPalette: PaletteId
  defaultTypography: TypographyId
  blockGroups: Record<string, BlockGroup>
  orderedBlockTypes: string[]
}

const templates = templatesData as Record<string, Template>

export function getTemplate(slug: string): Template | null {
  return templates[slug] || null
}

export function getAllTemplates(): Template[] {
  return Object.values(templates)
}

export function getBlockGroup(templateSlug: string, blockType: string): BlockGroup | null {
  return templates[templateSlug]?.blockGroups[blockType] || null
}

export function getBlockAlternatives(templateSlug: string, blockType: string): BlockInfo[] {
  return templates[templateSlug]?.blockGroups[blockType]?.blocks || []
}

export function hasAlternatives(templateSlug: string, blockType: string): boolean {
  const group = templates[templateSlug]?.blockGroups[blockType]
  return group ? group.blocks.length > 1 : false
}
```

#### 4.2 Block Selection Context

**File:** `app/(app)/(content)/(blocks)/_components/block-selection-context.tsx`

```typescript
"use client"

import { createContext, useContext, type ReactNode } from "react"
import { useSearchParams } from "next/navigation"
import type { Template } from "@/lib/templates"
import type { PaletteId } from "@/registry/new-york-v4/lib/palettes"
import type { TypographyId } from "@/registry/new-york-v4/lib/typography"

interface BlockSelectionContextValue {
  // Selected block per type (from URL or defaults)
  selectedBlocks: Record<string, string>

  // Theme overrides (from URL or template defaults)
  palette: PaletteId
  typography: TypographyId

  // Helpers
  getSelectedBlock: (blockType: string) => string
  hasAlternatives: (blockType: string) => boolean
  getAlternatives: (blockType: string) => string[]
}

const BlockSelectionContext = createContext<BlockSelectionContextValue | null>(null)

export function useBlockSelection() {
  const ctx = useContext(BlockSelectionContext)
  if (!ctx) throw new Error("useBlockSelection must be used within BlockSelectionProvider")
  return ctx
}

interface BlockSelectionProviderProps {
  children: ReactNode
  template: Template
}

export function BlockSelectionProvider({ children, template }: BlockSelectionProviderProps) {
  const searchParams = useSearchParams()

  // Build selected blocks from URL params or defaults
  const selectedBlocks: Record<string, string> = {}
  for (const [blockType, group] of Object.entries(template.blockGroups)) {
    const urlValue = searchParams.get(blockType)
    const validBlocks = group.blocks.map(b => b.name)

    if (urlValue && validBlocks.includes(urlValue)) {
      selectedBlocks[blockType] = urlValue
    } else {
      selectedBlocks[blockType] = group.default
    }
  }

  // Theme from URL or template defaults
  const palette = (searchParams.get("palette") as PaletteId) || template.defaultPalette
  const typography = (searchParams.get("typography") as TypographyId) || template.defaultTypography

  const value: BlockSelectionContextValue = {
    selectedBlocks,
    palette,
    typography,
    getSelectedBlock: (blockType) => selectedBlocks[blockType] || template.blockGroups[blockType]?.default || "",
    hasAlternatives: (blockType) => (template.blockGroups[blockType]?.blocks.length || 0) > 1,
    getAlternatives: (blockType) => template.blockGroups[blockType]?.blocks.map(b => b.name) || [],
  }

  return (
    <BlockSelectionContext.Provider value={value}>
      {children}
    </BlockSelectionContext.Provider>
  )
}
```

---

### Phase 5: Block Toggle UI

#### 5.1 Block Type Toggle Component

When a block type has multiple alternatives, show toggle buttons:

**File:** `app/(app)/(content)/(blocks)/_components/block-toggle.tsx`

```typescript
"use client"

import { useRouter, useSearchParams, usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useBlockSelection } from "./block-selection-context"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/new-york-v4/ui/tooltip"

interface BlockToggleProps {
  blockType: string
  className?: string
}

export function BlockToggle({ blockType, className }: BlockToggleProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { selectedBlocks, getAlternatives, hasAlternatives } = useBlockSelection()

  if (!hasAlternatives(blockType)) return null

  const alternatives = getAlternatives(blockType)
  const selected = selectedBlocks[blockType]

  const handleSelect = (blockName: string) => {
    const params = new URLSearchParams(searchParams.toString())

    // If selecting default, remove param; otherwise set it
    const isDefault = alternatives[0] === blockName
    if (isDefault) {
      params.delete(blockType)
    } else {
      params.set(blockType, blockName)
    }

    router.push(`${pathname}?${params.toString()}`, { scroll: false })
  }

  // Format block name for display (hero-5 -> "5")
  const getLabel = (name: string) => {
    const match = name.match(/-(\d+)$/)
    return match ? match[1] : name
  }

  return (
    <div className={cn("flex items-center gap-0.5 rounded-full bg-muted p-0.5", className)}>
      {alternatives.map((name) => (
        <Tooltip key={name}>
          <TooltipTrigger asChild>
            <button
              onClick={() => handleSelect(name)}
              className={cn(
                "flex h-7 w-7 items-center justify-center rounded-full text-xs font-medium transition-colors",
                selected === name
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {getLabel(name)}
            </button>
          </TooltipTrigger>
          <TooltipContent side="bottom" className="text-xs">
            {name}
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  )
}
```

#### 5.2 Block Toggles Toolbar

Shows all block types with alternatives:

**File:** `app/(app)/(content)/(blocks)/_components/block-toggles-toolbar.tsx`

```typescript
"use client"

import { useBlockSelection } from "./block-selection-context"
import { BlockToggle } from "./block-toggle"

interface BlockTogglesToolbarProps {
  orderedBlockTypes: string[]
  className?: string
}

export function BlockTogglesToolbar({ orderedBlockTypes, className }: BlockTogglesToolbarProps) {
  const { hasAlternatives } = useBlockSelection()

  // Only show block types that have alternatives
  const typesWithAlternatives = orderedBlockTypes.filter(hasAlternatives)

  if (typesWithAlternatives.length === 0) return null

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {typesWithAlternatives.map((blockType) => (
        <div key={blockType} className="flex items-center gap-1.5">
          <span className="text-xs font-medium capitalize text-muted-foreground">
            {blockType}
          </span>
          <BlockToggle blockType={blockType} />
        </div>
      ))}
    </div>
  )
}
```

---

### Phase 6: Template Viewer Update

#### 6.1 Updated Template Viewer

**File:** `app/(app)/(content)/(blocks)/template/[slug]/page.client.tsx`

```typescript
"use client"

import { Suspense } from "react"
import { getTemplate, type Template } from "@/lib/templates"
import { Index } from "@/registry/__index__"
import {
  BlockSelectionProvider,
  useBlockSelection,
} from "../../_components/block-selection-context"
import { BlockThemeWrapper } from "../../_components/block-theme-wrapper"
import { BlockContainer } from "../../_components/block-container"
import { BlockTogglesToolbar } from "../../_components/block-toggles-toolbar"
import { PalettePicker } from "../../_components/palette-picker"
import { TypographyPicker } from "../../_components/typography-picker"

interface TemplateViewerClientProps {
  slug: string
}

export function TemplateViewerClient({ slug }: TemplateViewerClientProps) {
  const template = getTemplate(slug)
  if (!template) return <div>Template not found</div>

  return (
    <BlockSelectionProvider template={template}>
      <TemplateViewerContent template={template} />
    </BlockSelectionProvider>
  )
}

function TemplateViewerContent({ template }: { template: Template }) {
  const { selectedBlocks, palette, typography } = useBlockSelection()

  return (
    <div className="flex min-h-screen flex-col gap-3 p-3">
      {/* Toolbar */}
      <div className="container">
        <div className="flex items-center gap-2 rounded-full bg-muted p-1.5">
          {/* Theme pickers */}
          <PalettePicker />
          <TypographyPicker />

          {/* Separator */}
          <div className="mx-1 h-5 w-px bg-border" />

          {/* Block toggles */}
          <BlockTogglesToolbar orderedBlockTypes={template.orderedBlockTypes} />
        </div>
      </div>

      {/* Template Preview */}
      <div className="container">
        <div className="overflow-hidden rounded-2xl border">
          <BlockThemeWrapper palette={palette} typography={typography}>
            {template.orderedBlockTypes.map((blockType, index) => {
              const selectedBlock = selectedBlocks[blockType]
              const blockInfo = template.blockGroups[blockType]?.blocks.find(
                b => b.name === selectedBlock
              )

              if (!blockInfo) return null

              const Component = Index["new-york-v4"]?.[selectedBlock]?.component
              if (!Component) return null

              return (
                <BlockThemeWrapper
                  key={`${blockType}-${selectedBlock}`}
                  palette={palette}
                  typography={typography}
                  tint={blockInfo.tint}
                  forceLight={blockInfo.forceLight}
                  forceDark={blockInfo.forceDark}
                >
                  <BlockContainer
                    index={index}
                    tint={blockInfo.tint}
                    noPadding={["hero", "header", "footer"].includes(blockType)}
                  >
                    <Suspense fallback={null}>
                      <Component />
                    </Suspense>
                  </BlockContainer>
                </BlockThemeWrapper>
              )
            })}
          </BlockThemeWrapper>
        </div>
      </div>
    </div>
  )
}
```

---

### Phase 7: Delete Deprecated Files

#### Files to Delete

1. **`template-config.ts`** - Templates are now computed
2. **`template-fonts.ts`** - Typography is now in block config
3. **`getTemplatePalette()`** - Use template.defaultPalette
4. **`getTemplateFonts()`** - Use template.defaultTypography
5. **`templateConfigs` object** - Replaced by computed templates
6. **`applicationTemplateConfigs` object** - Replaced by computed templates

#### Files to Keep/Update

1. **`theme-presets.ts`** - CSS variable generation (used by BlockThemeWrapper)
2. **`block-theme-wrapper.tsx`** - Update to accept palette/typography IDs
3. **`palettes.ts`** (new) - Palette definitions
4. **`typography.ts`** (new) - Typography definitions

---

## URL API

### Template View

```
/template/service-fitness
  # Uses all defaults from first blocks

/template/service-fitness?hero=hero-5
  # Use hero-5 instead of default hero-4

/template/service-fitness?hero=hero-5&cta=cta-3
  # Custom hero and CTA selection

/template/service-fitness?palette=azure
  # Override palette for all blocks

/template/service-fitness?typography=elegant
  # Override typography for all blocks

/template/service-fitness?hero=hero-5&palette=rose&typography=classic
  # Full customization
```

### Block View

```
/blocks/hero/hero-5
  # Uses block's own palette/typography from registry

/blocks/hero/hero-5?palette=azure
  # Override palette

/blocks/hero/hero-5?typography=elegant
  # Override typography
```

---

## Migration Checklist

### Phase 1: Schema & Registry
- [ ] Add `blockConfig` to pitsi/schema
- [ ] Update all block entries with `blockConfig`
- [ ] Create `palettes.ts` registry item
- [ ] Create `typography.ts` registry item

### Phase 2: Build Script
- [ ] Add `computeTemplates()` function to build script
- [ ] Generate `__templates__.json`
- [ ] Test build output

### Phase 3: Runtime
- [ ] Create `lib/templates.ts`
- [ ] Create `BlockSelectionProvider`
- [ ] Create `BlockToggle` component
- [ ] Create `BlockTogglesToolbar` component
- [ ] Update `PalettePicker` to use URL params
- [ ] Update `TypographyPicker` to use URL params

### Phase 4: Viewers
- [ ] Update template viewer with new architecture
- [ ] Update block viewer with palette/typography params
- [ ] Test all URL param combinations

### Phase 5: Cleanup
- [ ] Delete `template-config.ts`
- [ ] Delete `template-fonts.ts`
- [ ] Update all imports
- [ ] Remove deprecated functions

---

## Success Criteria

- [ ] All block config defined at block level (not template level)
- [ ] Templates computed from block registry
- [ ] Multiple blocks of same type show as toggle buttons
- [ ] Palette independently selectable (11 options)
- [ ] Typography independently selectable (5 options)
- [ ] URL params work for all combinations
- [ ] No manual template definitions needed
- [ ] Block components unchanged (no breaking changes)
