# Decoupling Block Themes, Typography, and Templates

## Problem Statement

Currently, themes (color palettes), typography, and templates are tightly coupled:

```
Block → Template → { Palette, Typography }
```

- `getTemplatePalette(slug)` returns palette based on template
- `getTemplateFonts(slug)` returns typography based on template
- You can't use "neon" palette with "elegant" typography without hacking
- Templates are manually defined in config files, duplicating registry data

**Goal:** Use the registry system as single source of truth for themes, typography, and template composition.

---

## Current Architecture

### 1. Registry (`blocks/_registry.ts`)
- Blocks have `categories` array: `["hero", "service-plants"]`
- Template association via category (e.g., `service-plants`)
- **No palette or typography info in registry**

### 2. Color Palettes (`theme-presets.ts`)
- 11 palettes: slate, azure, violet, rose, sage, amber, cyan, indigo, coral, forest, neon
- Each has 3 tint variants: base, tinted, deep
- Standalone definitions, but coupled to templates via config

### 3. Typography Presets (`template-fonts.ts`)
- 5 presets: modern, elegant, classic, playful, futuristic
- Coupled via `templateFonts` mapping: `"service-plants": fontPresets.elegant`

### 4. Templates (`template-config.ts`)
- Manually define block composition (duplicates registry categories!)
- Have hardcoded `palette: ColorPalette` property
- Typography is looked up separately via template slug

**Problem:** Template config duplicates what's already in the registry categories.

---

## Proposed Architecture: Registry-Centric

### Core Idea

Use registry categories to define EVERYTHING:

```typescript
// Block with all theming info in categories
{
  name: "hero-5",
  type: "registry:block",
  categories: [
    "hero",                    // Block type
    "template:service-fitness", // Which template(s) it belongs to
    "palette:neon",            // Recommended palette
    "typography:futuristic",   // Recommended typography
  ],
}
```

### New Mental Model

```
┌─────────────────────────────────────────────────────────────┐
│                     REGISTRY (Source of Truth)              │
├─────────────────────────────────────────────────────────────┤
│  Blocks define:                                             │
│    - categories: ["hero", "template:service-fitness"]       │
│    - categories: ["palette:neon"]        (recommended)      │
│    - categories: ["typography:futuristic"] (recommended)    │
│                                                             │
│  Templates are COMPUTED from registry:                      │
│    - Query blocks with "template:service-fitness"           │
│    - Extract default palette from first block               │
│    - Extract default typography from first block            │
│                                                             │
│  Palette + Typography are INDEPENDENT:                      │
│    - Any block can use any palette                          │
│    - Any block can use any typography                       │
│    - URL params override recommendations                    │
└─────────────────────────────────────────────────────────────┘
```

---

## Implementation Plan

### Phase 1: Extend Registry Schema with Theme Categories

#### 1.1 Define Category Prefixes

Categories now use prefixes to denote type:
- `template:` - Template membership
- `palette:` - Recommended palette
- `typography:` - Recommended typography

#### 1.2 Update Block Registry Entries

**File:** `apps/v4/registry/new-york-v4/blocks/_registry.ts`

```typescript
// BEFORE
{
  name: "hero-5",
  type: "registry:block",
  description: "Full-bleed fitness hero",
  categories: ["hero", "service-fitness"],
  // ...
}

// AFTER
{
  name: "hero-5",
  type: "registry:block",
  description: "Full-bleed fitness hero",
  categories: [
    "hero",                     // Block type
    "template:service-fitness", // Template membership
    "palette:neon",             // Recommended palette
    "typography:futuristic",    // Recommended typography
  ],
  // ...
}
```

#### 1.3 Update ALL Blocks with Theme Categories

For each block, add `palette:` and `typography:` categories:

| Template | Palette | Typography |
|----------|---------|------------|
| service-plants | `palette:sage` | `typography:elegant` |
| service-travel | `palette:azure` | `typography:modern` |
| service-boat | `palette:azure` | `typography:classic` |
| service-fitness | `palette:neon` | `typography:futuristic` |
| app-gym-tracker | `palette:sage` | `typography:modern` |
| app-quiz | `palette:violet` | `typography:playful` |

---

### Phase 2: Create Standalone Theme Registries

#### 2.1 Create Palette Registry Item

**File:** `apps/v4/registry/new-york-v4/lib/palettes.ts`

```typescript
export type PaletteId =
  | "slate" | "azure" | "violet" | "rose" | "sage"
  | "amber" | "cyan" | "indigo" | "coral" | "forest" | "neon"

export interface PaletteInfo {
  id: PaletteId
  name: string
  description: string
  brandLight: string
  brandDark: string
  complementaryLight: string
  complementaryDark: string
}

export const palettes: Record<PaletteId, PaletteInfo> = {
  slate: {
    id: "slate",
    name: "Slate",
    description: "Neutral grayscale",
    brandLight: "#777777",
    brandDark: "#9a9a9a",
    complementaryLight: "#999999",
    complementaryDark: "#bbbbbb",
  },
  neon: {
    id: "neon",
    name: "Neon",
    description: "Electric green, cyberpunk aesthetic",
    brandLight: "#39ff14",
    brandDark: "#39ff14",
    complementaryLight: "#ff00ff",
    complementaryDark: "#ff00ff",
  },
  // ... all 11 palettes
}

export const DEFAULT_PALETTE: PaletteId = "slate"
export function getPalette(id: string): PaletteInfo | null { ... }
export function getAllPalettes(): PaletteInfo[] { ... }
```

**Add to registry:** `lib/_registry.ts`

```typescript
{
  name: "palettes",
  type: "registry:lib",
  description: "Color palette definitions for block theming",
  files: [{ path: "lib/palettes.ts", type: "registry:lib" }],
  categories: ["theming"],
}
```

#### 2.2 Create Typography Registry Item

**File:** `apps/v4/registry/new-york-v4/lib/typography-presets.ts`

```typescript
export type TypographyId = "modern" | "elegant" | "classic" | "playful" | "futuristic"

export interface TypographyInfo {
  id: TypographyId
  name: string
  description: string
  displayFont: string
  bodyFont: string
  displayWeight: string
  bodyWeight: string
  displayFontName: string
  bodyFontName: string
}

export const typographyPresets: Record<TypographyId, TypographyInfo> = {
  modern: {
    id: "modern",
    name: "Modern",
    description: "Clean and contemporary",
    displayFont: "var(--font-display)",
    bodyFont: "var(--font-sans)",
    displayWeight: "700",
    bodyWeight: "400",
    displayFontName: "Poppins",
    bodyFontName: "Inter",
  },
  futuristic: {
    id: "futuristic",
    name: "Futuristic",
    description: "Sci-fi and tech aesthetic",
    displayFont: "var(--font-orbitron)",
    bodyFont: "var(--font-rajdhani)",
    displayWeight: "700",
    bodyWeight: "500",
    displayFontName: "Orbitron",
    bodyFontName: "Rajdhani",
  },
  // ... all 5 presets
}

export const DEFAULT_TYPOGRAPHY: TypographyId = "modern"
export function getTypography(id: string): TypographyInfo | null { ... }
export function getAllTypography(): TypographyInfo[] { ... }
```

**Add to registry:** `lib/_registry.ts`

```typescript
{
  name: "typography-presets",
  type: "registry:lib",
  description: "Typography preset definitions for block theming",
  files: [{ path: "lib/typography-presets.ts", type: "registry:lib" }],
  categories: ["theming"],
}
```

---

### Phase 3: Build-Time Template Generation

#### 3.1 Update `build-registry.mts` to Generate Templates

During registry build, automatically compute template compositions:

```typescript
// In build-registry.mts

interface ComputedTemplate {
  slug: string
  name: string
  description: string
  blocks: string[]           // Block names in order
  defaultPalette: PaletteId
  defaultTypography: TypographyId
  heroBlock: string
  heroOptions: string[]
}

function computeTemplates(items: RegistryItem[]): ComputedTemplate[] {
  const templates: Record<string, ComputedTemplate> = {}

  // Group blocks by template category
  for (const item of items) {
    if (item.type !== "registry:block") continue

    const templateCat = item.categories?.find(c => c.startsWith("template:"))
    if (!templateCat) continue

    const templateSlug = templateCat.replace("template:", "")

    if (!templates[templateSlug]) {
      templates[templateSlug] = {
        slug: templateSlug,
        name: formatTemplateName(templateSlug),
        description: "",
        blocks: [],
        defaultPalette: "slate",
        defaultTypography: "modern",
        heroBlock: "",
        heroOptions: [],
      }
    }

    templates[templateSlug].blocks.push(item.name)

    // Extract palette from first block (or any block with palette category)
    const paletteCat = item.categories?.find(c => c.startsWith("palette:"))
    if (paletteCat && !templates[templateSlug].defaultPalette) {
      templates[templateSlug].defaultPalette = paletteCat.replace("palette:", "")
    }

    // Extract typography from first block
    const typoCat = item.categories?.find(c => c.startsWith("typography:"))
    if (typoCat && !templates[templateSlug].defaultTypography) {
      templates[templateSlug].defaultTypography = typoCat.replace("typography:", "")
    }

    // Collect hero options
    const heroType = item.categories?.find(c => c === "hero")
    if (heroType) {
      templates[templateSlug].heroOptions.push(item.name)
      if (!templates[templateSlug].heroBlock) {
        templates[templateSlug].heroBlock = item.name
      }
    }
  }

  return Object.values(templates)
}
```

#### 3.2 Output `__templates__.json`

**File:** `apps/v4/registry/__templates__.json` (generated)

```json
{
  "service-fitness": {
    "slug": "service-fitness",
    "name": "Personal Training",
    "blocks": ["header-1", "hero-5", "features-1", "..."],
    "defaultPalette": "neon",
    "defaultTypography": "futuristic",
    "heroBlock": "hero-5",
    "heroOptions": ["hero-4", "hero-5", "hero-6"]
  },
  "service-plants": {
    "slug": "service-plants",
    "name": "Service Plants",
    "blocks": ["header-1", "hero-1", "..."],
    "defaultPalette": "sage",
    "defaultTypography": "elegant",
    "heroBlock": "hero-1",
    "heroOptions": ["hero-1"]
  }
}
```

---

### Phase 4: Runtime Template/Theme Resolution

#### 4.1 Create `computed-templates.ts`

**File:** `apps/v4/lib/computed-templates.ts`

```typescript
import templatesData from "@/registry/__templates__.json"
import { type PaletteId } from "@/registry/new-york-v4/lib/palettes"
import { type TypographyId } from "@/registry/new-york-v4/lib/typography-presets"

export interface ComputedTemplate {
  slug: string
  name: string
  blocks: string[]
  defaultPalette: PaletteId
  defaultTypography: TypographyId
  heroBlock: string
  heroOptions: string[]
}

const templates = templatesData as Record<string, ComputedTemplate>

export function getComputedTemplate(slug: string): ComputedTemplate | null {
  return templates[slug] || null
}

export function getAllComputedTemplates(): ComputedTemplate[] {
  return Object.values(templates)
}

export function getTemplateBlocks(slug: string): string[] {
  return templates[slug]?.blocks || []
}

export function getTemplatePalette(slug: string): PaletteId {
  return templates[slug]?.defaultPalette || "slate"
}

export function getTemplateTypography(slug: string): TypographyId {
  return templates[slug]?.defaultTypography || "modern"
}
```

#### 4.2 Update BlockThemeWrapper to Accept IDs

```typescript
import { getPalette, type PaletteId } from "@/registry/new-york-v4/lib/palettes"
import { getTypography, type TypographyId } from "@/registry/new-york-v4/lib/typography-presets"

export interface BlockThemeWrapperProps {
  children: React.ReactNode
  palette?: PaletteId           // Now accepts ID, not ColorPalette object
  typography?: TypographyId     // Now accepts ID, not fonts object
  tint?: TintLevel
  forceDark?: boolean
  forceLight?: boolean
  transparent?: boolean
  className?: string
}

export function BlockThemeWrapper({
  children,
  palette = "slate",
  typography = "modern",
  tint = DEFAULT_TINT,
  ...
}: BlockThemeWrapperProps) {
  // Resolve typography to font CSS variables
  const typoInfo = getTypography(typography)
  const fonts = typoInfo ? {
    display: typoInfo.displayFont,
    body: typoInfo.bodyFont,
    displayWeight: typoInfo.displayWeight,
    bodyWeight: typoInfo.bodyWeight,
  } : undefined

  const style = getThemeStyles({ palette, tint, mode, fonts })

  return (
    <div className={cn("font-body ...", className)} style={style}>
      {children}
    </div>
  )
}
```

---

### Phase 5: Delete Deprecated Config Files

#### Files to Delete/Simplify

1. **DELETE** `template-config.ts` block lists (keep only types/helpers)
2. **DELETE** `template-fonts.ts` template mapping (keep only presets)
3. **SIMPLIFY** `_components/index.ts` exports

#### Keep These

- `theme-presets.ts` - CSS variable generation (used by BlockThemeWrapper)
- Font preset objects - Used by typography-presets.ts

---

### Phase 6: Update Viewers with Pickers

#### 6.1 Create Theme Context

```typescript
// _components/theme-context.tsx
"use client"

import { createContext, useContext } from "react"
import { useSearchParams } from "next/navigation"
import { type PaletteId, DEFAULT_PALETTE } from "@/registry/new-york-v4/lib/palettes"
import { type TypographyId, DEFAULT_TYPOGRAPHY } from "@/registry/new-york-v4/lib/typography-presets"

interface ThemeContextValue {
  palette: PaletteId
  typography: TypographyId
}

const ThemeContext = createContext<ThemeContextValue>({
  palette: DEFAULT_PALETTE,
  typography: DEFAULT_TYPOGRAPHY,
})

export function useBlockTheme() {
  return useContext(ThemeContext)
}

export function BlockThemeProvider({
  children,
  defaultPalette,
  defaultTypography,
}: {
  children: React.ReactNode
  defaultPalette?: PaletteId
  defaultTypography?: TypographyId
}) {
  const searchParams = useSearchParams()

  // URL params override defaults
  const palette = (searchParams.get("palette") as PaletteId) || defaultPalette || DEFAULT_PALETTE
  const typography = (searchParams.get("typography") as TypographyId) || defaultTypography || DEFAULT_TYPOGRAPHY

  return (
    <ThemeContext.Provider value={{ palette, typography }}>
      {children}
    </ThemeContext.Provider>
  )
}
```

#### 6.2 Create Picker Components

```typescript
// _components/palette-picker.tsx
export function PalettePicker() {
  const { palette } = useBlockTheme()
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleSelect = (id: PaletteId) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("palette", id)
    router.push(`?${params.toString()}`, { scroll: false })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex h-9 items-center gap-2 rounded-full bg-background px-3 shadow-sm">
          <PaletteSwatches paletteId={palette} />
          <span className="text-xs font-medium capitalize">{palette}</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {getAllPalettes().map((p) => (
          <DropdownMenuItem key={p.id} onClick={() => handleSelect(p.id)}>
            <PaletteSwatches paletteId={p.id} />
            <span>{p.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

// _components/typography-picker.tsx
export function TypographyPicker() {
  const { typography } = useBlockTheme()
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleSelect = (id: TypographyId) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("typography", id)
    router.push(`?${params.toString()}`, { scroll: false })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex h-9 items-center gap-1.5 rounded-full bg-background px-3 shadow-sm">
          <span className="text-sm font-semibold">Aa</span>
          <span className="text-xs font-medium capitalize">{typography}</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {getAllTypography().map((t) => (
          <DropdownMenuItem key={t.id} onClick={() => handleSelect(t.id)}>
            <span className="font-semibold">Aa</span>
            <div>
              <div>{t.name}</div>
              <div className="text-muted-foreground text-xs">
                {t.displayFontName} + {t.bodyFontName}
              </div>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
```

#### 6.3 Update Template Viewer

```typescript
// template/[slug]/page.client.tsx
export function TemplateViewerClient({ slug, ... }) {
  const template = getComputedTemplate(slug)
  if (!template) return null

  return (
    <BlockThemeProvider
      defaultPalette={template.defaultPalette}
      defaultTypography={template.defaultTypography}
    >
      <div className="...">
        {/* Toolbar */}
        <div className="...">
          <PalettePicker />
          <TypographyPicker />
          {/* ... other controls */}
        </div>

        {/* Content - uses context palette/typography */}
        <BlockThemeWrapper>
          {template.blocks.map((blockName) => (
            <BlockRenderer key={blockName} name={blockName} />
          ))}
        </BlockThemeWrapper>
      </div>
    </BlockThemeProvider>
  )
}
```

---

## File Changes Summary

### New Registry Items
1. `lib/palettes.ts` - Palette definitions (registry:lib)
2. `lib/typography-presets.ts` - Typography definitions (registry:lib)

### New Generated Files
1. `registry/__templates__.json` - Computed from block categories

### New Components
1. `_components/theme-context.tsx` - React context
2. `_components/palette-picker.tsx` - UI component
3. `_components/typography-picker.tsx` - UI component

### Modified Files
1. `blocks/_registry.ts` - Add `palette:` and `typography:` categories to all blocks
2. `scripts/build-registry.mts` - Add template computation logic
3. `block-theme-wrapper.tsx` - Accept palette/typography IDs
4. `template/[slug]/page.client.tsx` - Use context + pickers
5. `block/[category]/[blockName]/page.client.tsx` - Use context + pickers

### Deleted/Deprecated
1. `template-config.ts` - Block lists (keep only types)
2. `template-fonts.ts` - Template mapping (keep only presets)
3. `getTemplatePalette()` - Replace with computed-templates.ts
4. `getTemplateFonts()` - Replace with typography-presets.ts

---

## URL API

```
/template/service-fitness                           # Uses computed defaults (neon + futuristic)
/template/service-fitness?palette=azure             # Override palette only
/template/service-fitness?typography=elegant        # Override typography only
/template/service-fitness?palette=rose&typography=classic  # Override both

/blocks/hero/hero-5                                 # Uses block's recommended (neon + futuristic)
/blocks/hero/hero-5?palette=sage                    # Any palette
/blocks/hero/hero-5?typography=playful              # Any typography
```

---

## Migration Checklist

### Phase 1: Registry Updates
- [ ] Add `palette:` category to all blocks
- [ ] Add `typography:` category to all blocks
- [ ] Rename `service-*` categories to `template:service-*`
- [ ] Add palettes.ts to registry
- [ ] Add typography-presets.ts to registry

### Phase 2: Build Script
- [ ] Add computeTemplates() function
- [ ] Generate __templates__.json
- [ ] Test build output

### Phase 3: Runtime Updates
- [ ] Create computed-templates.ts
- [ ] Update BlockThemeWrapper to accept IDs
- [ ] Create theme-context.tsx
- [ ] Create picker components

### Phase 4: Viewer Updates
- [ ] Update template viewer with pickers
- [ ] Update block viewer with pickers
- [ ] Test URL param overrides

### Phase 5: Cleanup
- [ ] Remove template-config.ts block lists
- [ ] Remove template-fonts.ts mapping
- [ ] Update all imports
- [ ] Delete deprecated functions

---

## Success Criteria

- [ ] Templates computed from registry (no manual block lists)
- [ ] Palette selectable independently (11 options)
- [ ] Typography selectable independently (5 options)
- [ ] URL params work for all combinations
- [ ] Pickers appear in toolbar
- [ ] No breaking changes to block components themselves
