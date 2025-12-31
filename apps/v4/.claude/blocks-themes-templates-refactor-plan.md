# Blocks, Themes & Templates Architecture Refactor Plan

## Executive Summary

This plan addresses architectural issues in the current blocks/themes/templates system:
- Two competing template systems (service vs application)
- Shells with baked-in themes causing conflicts
- Duplicate rendering logic across multiple files
- Orphaned theme code
- Inconsistent block rendering depending on context

**Goal**: A unified, clean architecture where:
1. One template system handles both service and application templates
2. Themes are applied consistently from a single source of truth
3. Blocks render identically regardless of how they're accessed
4. Shells are theme-agnostic containers

---

## Current Pain Points

### 1. Dual Template Systems
```
templateConfigs (service) ─┬─► getTemplateForBlock() must check both
applicationTemplateConfigs ─┘   getBlockConfig() has duplicate logic
```

### 2. Shell Theme Baking
```
app-shell-1.tsx:
  const sageTheme = { "--background": "#fafafa", ... }  // Hardcoded!

Result: ApplicationBlockWrapper can't wrap shell with BlockThemeWrapper
        Views inside apps are "theme orphans"
```

### 3. Three Rendering Paths
```
/view/[style]/[name]     → LazyComponentRenderer → BlockWrapper
/block/[category]/[name] → page.client.tsx       → iframe to /view
/template/[slug]         → TemplateViewerClient  → Direct BlockThemeWrapper

Each path has slightly different theming logic!
```

### 4. Orphaned Code
- `hero-themes.ts` (1100+ lines) - completely unused
- Old theme objects not referenced anywhere

---

## Proposed Architecture

### Phase 1: Unified Template Configuration

**New `template-config.ts` structure:**

```typescript
// Single type for all templates
export type TemplateType = "service" | "application"

export interface BaseTemplateConfig {
  slug: string
  name: string
  description: string
  palette: ColorPalette  // Required for ALL templates
  heroBlock: string
}

export interface ServiceTemplateConfig extends BaseTemplateConfig {
  type: "service"
  blocks: BlockConfig[]
}

export interface ApplicationTemplateConfig extends BaseTemplateConfig {
  type: "application"
  shell: string
  defaultView: string
  navigation: NavigationItem[]
  views: BlockConfig[]
}

export type TemplateConfig = ServiceTemplateConfig | ApplicationTemplateConfig

// Single unified config object
export const templates: Record<string, TemplateConfig> = {
  "service-plants": {
    type: "service",
    slug: "service-plants",
    name: "Plant Shop",
    palette: "sage",
    heroBlock: "hero-1",
    blocks: [
      { name: "header-1", tint: "tinted", forceLight: true },
      { name: "hero-1", tint: "tinted", forceLight: true },
      // ... all blocks
    ],
  },
  "app-gym-tracker": {
    type: "application",
    slug: "app-gym-tracker",
    name: "Gym Tracker",
    palette: "sage",
    heroBlock: "app-dashboard-1",
    shell: "app-shell-1",
    defaultView: "app-dashboard-1",
    navigation: [...],
    views: [
      { name: "app-dashboard-1" },
      { name: "app-calendar-1" },
      // ... all views
    ],
  },
}

// Unified helper functions
export function getTemplate(slug: string): TemplateConfig | null
export function getTemplateForBlock(blockName: string): TemplateConfig | null
export function getBlockConfig(templateSlug: string, blockName: string): BlockConfig | null
export function isApplicationTemplate(config: TemplateConfig): config is ApplicationTemplateConfig
export function isServiceTemplate(config: TemplateConfig): config is ServiceTemplateConfig
```

**Benefits:**
- Single source of truth
- Type-safe discriminated unions
- No duplicate lookup logic
- All templates have a palette

---

### Phase 2: Theme-Agnostic Shells

**Problem:** Shells have hardcoded themes that prevent external theming.

**Solution:** Extract theme from shells, make them theme consumers.

**Current shell (app-shell-1.tsx):**
```tsx
const sageTheme = { "--background": "#fafafa", ... }

export function AppShell1({ theme = sageTheme, ... }) {
  return (
    <div style={theme}> {/* Theme applied here */}
      <SidebarProvider>...
```

**New shell (theme-agnostic):**
```tsx
// NO hardcoded theme!
// Shell uses CSS variables from parent context

export function AppShell1({ children, activeView, navigation, ... }) {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <SidebarProvider>
        <Sidebar>
          {/* Uses --sidebar, --sidebar-foreground from context */}
        </Sidebar>
        <SidebarInset>
          {children}
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}
```

**Theme applied externally:**
```tsx
// In ApplicationBlockWrapper or template renderer:
<BlockThemeWrapper slug={templateSlug} tint="base">
  <ShellComponent navigation={navigation} activeView={name}>
    <ViewComponent />
  </ShellComponent>
</BlockThemeWrapper>
```

**Benefits:**
- Shell can respond to user theme preference (dark/light)
- Templates can override palette at runtime
- Consistent with service template theming
- White-label/multi-tenant support possible

---

### Phase 3: Unified Block Rendering

**Create a single `renderBlock` function used everywhere:**

**New file: `lib/blocks/render-block.tsx`**

```tsx
import { BlockThemeWrapper, BlockContainer } from "@/app/(app)/(content)/(blocks)/_components"
import { getTemplate, getBlockConfig, isApplicationTemplate } from "./template-config"

interface RenderBlockOptions {
  name: string
  styleName: string
  Component: React.ComponentType
  index?: number
  templateSlug?: string
}

export function renderBlock({ name, styleName, Component, index = 0, templateSlug }: RenderBlockOptions) {
  // Get template context
  const template = templateSlug ? getTemplate(templateSlug) : getTemplateForBlock(name)
  const blockConfig = template ? getBlockConfig(template.slug, name) : null

  // Determine block type from name pattern
  const blockType = getBlockType(name) // "hero" | "header" | "footer" | "features" | etc.

  // Calculate styling
  const tint = blockConfig?.tint || "base"
  const forceDark = blockConfig?.forceDark
  const forceLight = blockConfig?.forceLight
  const skipAlternatingBg = SKIP_ALTERNATING_TYPES.includes(blockType) || forceDark || forceLight
  const skipPadding = SKIP_PADDING_TYPES.includes(blockType)

  // For application templates, check if we need shell wrapping
  if (template && isApplicationTemplate(template)) {
    return renderApplicationBlock({ name, styleName, Component, template })
  }

  // Standard block rendering
  if (template) {
    return (
      <BlockThemeWrapper
        slug={template.slug}
        tint={tint}
        forceDark={forceDark}
        forceLight={forceLight}
      >
        <BlockContainer
          index={index}
          tint={tint}
          forceBg={skipAlternatingBg ? "none" : undefined}
          noPadding={skipPadding}
        >
          <Component />
        </BlockContainer>
      </BlockThemeWrapper>
    )
  }

  // No template context - render plain
  return <Component />
}

function renderApplicationBlock({ name, styleName, Component, template }) {
  const ShellComponent = getShellComponent(styleName, template.shell)
  const navigation = template.navigation

  return (
    <BlockThemeWrapper slug={template.slug} tint="base">
      <div className="min-h-screen">
        <ShellComponent navigation={navigation} activeView={name}>
          <Component />
        </ShellComponent>
      </div>
    </BlockThemeWrapper>
  )
}

// Block type configuration
const SKIP_ALTERNATING_TYPES = ["hero", "header"]
const SKIP_PADDING_TYPES = ["hero", "header", "footer"]

function getBlockType(name: string): string {
  const match = name.match(/^([a-z-]+)-\d+$/)
  return match ? match[1] : "unknown"
}
```

**Usage in all rendering contexts:**

```tsx
// LazyComponentRenderer
return renderBlock({ name, styleName, Component })

// TemplateViewerClient
{blocks.map((block, index) => renderBlock({
  name: block.name,
  styleName,
  Component: block.Component,
  index,
  templateSlug
}))}
```

**Benefits:**
- Single source of truth for rendering logic
- No duplicate hero/header/footer checks
- Easy to add new block types
- Consistent behavior everywhere

---

### Phase 4: Cleanup

#### 4.1 Delete Orphaned Code
- Remove `_themes/hero-themes.ts` (1100 lines)
- Remove `_themes/index.ts` if only exporting hero-themes
- Clean up any imports

#### 4.2 Consolidate Template Palette Mapping
Remove `templatePalettes` from `block-theme-wrapper.tsx`:

```tsx
// BEFORE: Two sources of truth
const templatePalettes = {
  "app-gym-tracker": "sage",
  "service-plants": "sage",
  ...
}

function getTemplatePalette(slug: string) {
  if (templatePalettes[slug]) return templatePalettes[slug]
  // Also checks applicationTemplateConfigs...
}

// AFTER: Single source
function getTemplatePalette(slug: string): ColorPalette {
  const template = getTemplate(slug)
  return template?.palette || "azure"
}
```

#### 4.3 Remove Shell Theme Props
Update shell components to not accept `theme` prop:

```tsx
// BEFORE
export function AppShell1({ theme = sageTheme, ... })

// AFTER
export function AppShell1({ children, activeView, navigation, content, classNames })
// NO theme prop - uses CSS variables from parent
```

---

### Phase 5: Enhanced Theme System

#### 5.1 Runtime Theme Override

Add query param support for template theming:

```tsx
// In view page or template page
const searchParams = useSearchParams()
const paletteOverride = searchParams.get("palette") as ColorPalette | null
const tintOverride = searchParams.get("tint") as TintLevel | null

// Apply override if provided
<BlockThemeWrapper
  slug={templateSlug}
  palette={paletteOverride || template.palette}
  tint={tintOverride || defaultTint}
>
```

#### 5.2 Theme Context (Optional Enhancement)

```tsx
interface ThemeContextValue {
  palette: ColorPalette
  tint: TintLevel
  mode: "light" | "dark"
  setPalette: (palette: ColorPalette) => void
  setTint: (tint: TintLevel) => void
}

export const ThemeContext = createContext<ThemeContextValue>(...)

// Usage in components
const { palette, tint } = useTheme()
```

---

## Implementation Order

### Step 1: Unified Template Config (Low Risk)
1. Create new unified `templates` object in template-config.ts
2. Add type guards `isApplicationTemplate`, `isServiceTemplate`
3. Update helper functions to use unified config
4. Keep old configs temporarily for compatibility
5. Run tests, verify no breaking changes

### Step 2: Theme-Agnostic Shells (Medium Risk)
1. Update `app-shell-1.tsx` - remove hardcoded theme, use CSS variables
2. Update `ApplicationBlockWrapper` to wrap shell with `BlockThemeWrapper`
3. Test gym tracker renders correctly with sage theme
4. Repeat for other shells (app-quiz-shell-1, app-database-shell-1)
5. Verify dark/light mode works for app templates

### Step 3: Unified Rendering (Medium Risk)
1. Create `lib/blocks/render-block.tsx`
2. Update `LazyComponentRenderer` to use `renderBlock`
3. Update `TemplateViewerClient` to use `renderBlock`
4. Verify all rendering paths produce identical output
5. Remove duplicate logic from old locations

### Step 4: Cleanup (Low Risk)
1. Delete `hero-themes.ts`
2. Remove `templatePalettes` from block-theme-wrapper.tsx
3. Clean up unused imports
4. Remove old `templateConfigs` and `applicationTemplateConfigs`
5. Update any remaining references

### Step 5: Enhancements (Optional)
1. Add query param theme override
2. Consider ThemeContext for runtime palette switching
3. Document new architecture

---

## Migration Checklist

- [ ] Create unified template config
- [ ] Add type guards for template types
- [ ] Update getTemplateForBlock to use unified config
- [ ] Update getBlockConfig to use unified config
- [ ] Remove hardcoded theme from app-shell-1.tsx
- [ ] Update ApplicationBlockWrapper to apply BlockThemeWrapper
- [ ] Test gym tracker dark/light mode
- [ ] Remove hardcoded theme from app-quiz-shell-1.tsx
- [ ] Remove hardcoded theme from app-database-shell-1.tsx
- [ ] Create renderBlock utility
- [ ] Update LazyComponentRenderer
- [ ] Update TemplateViewerClient
- [ ] Delete hero-themes.ts
- [ ] Remove templatePalettes from block-theme-wrapper.tsx
- [ ] Remove old template configs
- [ ] Update all imports
- [ ] Run full test suite
- [ ] Verify all templates render correctly

---

## Risk Assessment

| Change | Risk | Mitigation |
|--------|------|------------|
| Unified template config | Low | Parallel implementation, gradual migration |
| Theme-agnostic shells | Medium | Test each shell individually, verify dark/light mode |
| Unified rendering | Medium | A/B test old vs new rendering output |
| Code deletion | Low | Git history preserves everything |

---

## Success Criteria

1. **Single Template Config**: One `templates` object, one set of helpers
2. **Consistent Theming**: App blocks respond to dark/light mode
3. **Unified Rendering**: Blocks look identical in all contexts
4. **Clean Codebase**: No orphaned themes, no duplicate logic
5. **Extensible**: Easy to add new templates, palettes, or block types
6. **Maintainable**: Clear documentation, predictable behavior

---

## File Changes Summary

| File | Action |
|------|--------|
| `template-config.ts` | Major refactor - unified config |
| `block-theme-wrapper.tsx` | Remove templatePalettes, use getTemplate |
| `lazy-component-renderer.tsx` | Use renderBlock utility |
| `template/[slug]/page.client.tsx` | Use renderBlock utility |
| `app-shell-1.tsx` | Remove hardcoded theme |
| `app-quiz-shell-1.tsx` | Remove hardcoded theme |
| `app-database-shell-1.tsx` | Remove hardcoded theme |
| `hero-themes.ts` | DELETE |
| `_themes/index.ts` | DELETE or simplify |
| `lib/blocks/render-block.tsx` | NEW - unified rendering |
