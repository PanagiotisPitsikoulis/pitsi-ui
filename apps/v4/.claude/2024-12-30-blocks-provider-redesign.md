# BlocksProvider Redesign Plan

## Goal

Decouple theming from templates. Allow users to:
1. Use preset palettes directly (sage, azure, violet, etc.)
2. Pass custom theme colors
3. Choose font presets or custom fonts
4. All without needing template slugs

---

## New API

```tsx
interface BlocksProviderProps {
  children: React.ReactNode

  // === Theme ===
  palette?: ColorPalette  // "sage" | "azure" | "violet" | etc.
  theme?: CustomTheme     // { brand: "#5cb87e", ... }
  tint?: TintLevel        // "base" | "tinted" | "deep"

  // === Fonts ===
  fonts?: FontPreset | CustomFonts  // "elegant" | "modern" | { display, body }

  // === Mode ===
  forceDark?: boolean
  forceLight?: boolean
  transparent?: boolean
  className?: string
}

type ColorPalette = "slate" | "azure" | "violet" | "rose" | "sage" |
                    "amber" | "cyan" | "indigo" | "coral" | "forest"

type FontPreset = "modern" | "elegant" | "classic" | "playful"

interface CustomTheme {
  brand: string
  brandComplementary?: string  // Auto-computed if not provided
  background?: string
  foreground?: string
  card?: string
  cardForeground?: string
  muted?: string
  mutedForeground?: string
  // ... other optional overrides
}

interface CustomFonts {
  display: string
  body: string
  displayWeight?: string
  bodyWeight?: string
}
```

---

## Implementation Tasks

### Phase 1: Core Theme System

#### Task 1.1: Update `registry/new-york-v4/lib/block-theme.tsx`

- [ ] Add `ColorPalette` type export
- [ ] Add `FontPreset` type and `fontPresets` map
- [ ] Add `CustomTheme` interface
- [ ] Add `CustomFonts` interface
- [ ] Create `getThemeStyles(options)` function that accepts:
  - `palette?: ColorPalette`
  - `theme?: CustomTheme`
  - `tint?: TintLevel`
  - `mode: "light" | "dark"`
- [ ] Create `getFontStyles(fonts?: FontPreset | CustomFonts)` function
- [ ] Add `computeComplementaryColor(brand: string)` utility
- [ ] Keep existing presets but reorganize for direct palette access

#### Task 1.2: Update `registry/new-york-v4/ui/blocks-provider.tsx`

- [ ] Replace `slug` prop with `palette` prop
- [ ] Add `theme` prop for custom colors
- [ ] Add `fonts` prop for font configuration
- [ ] Update internal logic to use new `getThemeStyles`
- [ ] Update re-exports

### Phase 2: App-Side Updates

#### Task 2.1: Update `app/(app)/(content)/(blocks)/_components/block-theme-wrapper.tsx`

- [ ] Add `palette` prop (parallel to registry version)
- [ ] Add `theme` prop for custom colors
- [ ] Keep `slug` prop for backwards compatibility but deprecate
- [ ] Internally: if `palette` provided, use it; else lookup from `slug`

#### Task 2.2: Update `app/(app)/(content)/(blocks)/_components/template-fonts.ts`

- [ ] Add font presets map
- [ ] Export `FontPreset` type
- [ ] Add `getFontStylesFromPreset(preset: FontPreset)` function

#### Task 2.3: Update `app/(view)/_components/lazy-component-renderer.tsx`

- [ ] In `ApplicationBlockWrapper`: use `palette` from template config
- [ ] In `BlockWrapper`: use `palette` from template config
- [ ] Remove direct slug usage, use `template.palette` instead

### Phase 3: Template Config Updates

#### Task 3.1: Ensure templates have palette in config

Templates already have `palette` field from Phase 1 refactor. Verify:
- [ ] `service-plants` → sage
- [ ] `service-travel` → azure
- [ ] `service-boat` → azure
- [ ] `app-gym-tracker` → sage
- [ ] `app-quiz` → violet
- [ ] `app-database` → cyan

### Phase 4: Update Block Components

#### Task 4.1: Update `registry/new-york-v4/blocks/service/service-plants.tsx`

- [ ] Change `<BlockThemeWrapper slug={TEMPLATE_SLUG}>` to `<BlockThemeWrapper palette="sage">`

#### Task 4.2: Update template viewer pages

- [ ] `app/(app)/(content)/(blocks)/template/[slug]/page.client.tsx` - use palette from config

### Phase 5: Registry Lib Consolidation

#### Task 5.1: Create `registry/new-york-v4/lib/block-context.tsx`

Copy from app version or ensure registry has its own:
- [ ] `BlockContext` for alternating backgrounds
- [ ] `BlockProvider` component
- [ ] `useBlockContext` hook
- [ ] `BlockContainer` component

#### Task 5.2: Verify all registry lib files exist

- [ ] `block-theme.tsx` - theme system
- [ ] `block-context.tsx` - block context
- [ ] `block-decorations.tsx` - decoration components

---

## File Changes Summary

| File | Action |
|------|--------|
| `registry/new-york-v4/lib/block-theme.tsx` | Major update - new API |
| `registry/new-york-v4/ui/blocks-provider.tsx` | Update props, use new API |
| `app/(app)/(content)/(blocks)/_components/block-theme-wrapper.tsx` | Add palette prop |
| `app/(app)/(content)/(blocks)/_components/template-fonts.ts` | Add font presets |
| `app/(view)/_components/lazy-component-renderer.tsx` | Use palette from template |
| `registry/new-york-v4/blocks/service/service-plants.tsx` | Use palette prop |

---

## Migration Path

For existing code using `slug`:
1. `slug` prop still works (looks up palette internally)
2. Console warning: "slug prop is deprecated, use palette instead"
3. New code should use `palette` directly

---

## Testing Checklist

- [ ] Preset palette works: `<BlocksProvider palette="sage">`
- [ ] Custom theme works: `<BlocksProvider theme={{ brand: "#custom" }}>`
- [ ] Palette + theme override works
- [ ] Font presets work: `<BlocksProvider fonts="elegant">`
- [ ] Custom fonts work: `<BlocksProvider fonts={{ display: "..." }}>`
- [ ] Tint levels work with all combinations
- [ ] Dark/light mode works
- [ ] Template pages still render correctly
- [ ] Individual block view pages render correctly
- [ ] Application shells get correct theming
