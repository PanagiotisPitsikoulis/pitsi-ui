# Template Blocks Refactoring Plan

## Overview
Restructure the templates system to:
1. Separate blocks by type (hero, features, products, etc.)
2. Create a `BlockThemeWrapper` component for theme application
3. Use theme generator's full theme format
4. Assemble blocks dynamically in the template viewer

---

## Phase 1: Create BlockThemeWrapper Component

### 1.1 Create `_components` directory and wrapper
**File:** `_demo-blocks/_components/block-theme-wrapper.tsx`

```tsx
"use client"

import React from "react"
import type { HeroTheme } from "../_themes"
import { getThemeStyle } from "../_themes"

interface BlockThemeWrapperProps {
  theme: HeroTheme
  mode?: "light" | "dark"
  children: React.ReactNode
  className?: string
}

export function BlockThemeWrapper({
  theme,
  mode = "dark",
  children,
  className,
}: BlockThemeWrapperProps) {
  return (
    <div
      className={cn("relative w-full overflow-hidden bg-background", className)}
      style={getThemeStyle(theme, mode)}
    >
      {children}
    </div>
  )
}
```

### 1.2 Create index export
**File:** `_demo-blocks/_components/index.ts`

---

## Phase 2: Extract Sections from service-plants

### 2.1 Keep only Hero in hero.tsx
**File:** `hero/service-plants/hero.tsx`
- Lines 19-81 (Hero Section only)
- Remove theme wrapper (will be applied by BlockThemeWrapper)

### 2.2 Create Features block
**File:** `features/service-plants/features.tsx`
- Lines 83-132 from original
- Export as `FeaturesServicePlants`

### 2.3 Create Products block
**File:** `products/service-plants/products.tsx`
- Lines 134-172 from original
- Export as `ProductsServicePlants`

### 2.4 Create Gallery block
**File:** `gallery/service-plants/gallery.tsx`
- Lines 174-226 from original
- Export as `GalleryServicePlants`

### 2.5 Create Testimonials block
**File:** `testimonials/service-plants/testimonials.tsx`
- Lines 228-272 from original
- Export as `TestimonialsServicePlants`

### 2.6 Create CTA block
**File:** `cta/service-plants/cta.tsx`
- Lines 274-307 from original
- Export as `CTAServicePlants`

### 2.7 Create Footer block
**File:** `footer/service-plants/footer.tsx`
- Lines 309-362 from original
- Export as `FooterServicePlants`

---

## Phase 3: Create Block Type Directories and Exports

### 3.1 Create directory structure
```
_demo-blocks/
├── _components/
│   ├── block-theme-wrapper.tsx
│   └── index.ts
├── _themes/
│   ├── hero-themes.ts (existing)
│   └── index.ts (existing)
├── hero/
│   ├── service-plants/hero.tsx (refactored)
│   └── index.ts
├── features/
│   ├── service-plants/features.tsx
│   └── index.ts
├── products/
│   ├── service-plants/products.tsx
│   └── index.ts
├── gallery/
│   ├── service-plants/gallery.tsx
│   └── index.ts
├── testimonials/
│   ├── service-plants/testimonials.tsx
│   └── index.ts
├── cta/
│   ├── service-plants/cta.tsx
│   └── index.ts
└── footer/
    ├── service-plants/footer.tsx
    └── index.ts
```

---

## Phase 4: Update Template Viewer

### 4.1 Refactor [slug]/page.client.tsx

Create a template configuration that maps slugs to their available blocks:

```tsx
interface TemplateConfig {
  slug: string
  name: string
  theme: HeroTheme
  mode: "light" | "dark"
  blocks: {
    hero?: React.ComponentType
    features?: React.ComponentType
    products?: React.ComponentType
    gallery?: React.ComponentType
    testimonials?: React.ComponentType
    cta?: React.ComponentType
    footer?: React.ComponentType
  }
}

const templateConfigs: Record<string, TemplateConfig> = {
  "service-plants": {
    slug: "service-plants",
    name: "Plant Shop",
    theme: plantsTheme,
    mode: "dark",
    blocks: {
      hero: HeroServicePlants,
      features: FeaturesServicePlants,
      products: ProductsServicePlants,
      gallery: GalleryServicePlants,
      testimonials: TestimonialsServicePlants,
      cta: CTAServicePlants,
      footer: FooterServicePlants,
    },
  },
  // Other templates with just hero for now
  ai: {
    slug: "ai",
    name: "AI",
    theme: aiTheme,
    mode: "dark",
    blocks: {
      hero: HeroAI,
    },
  },
  // ... etc
}
```

### 4.2 Render blocks with BlockThemeWrapper

```tsx
export function TemplateViewerClient({ slug, template }) {
  const config = templateConfigs[slug]

  return (
    <BlockThemeWrapper theme={config.theme} mode={config.mode}>
      {config.blocks.hero && <config.blocks.hero />}
      {config.blocks.features && <config.blocks.features />}
      {config.blocks.products && <config.blocks.products />}
      {config.blocks.gallery && <config.blocks.gallery />}
      {config.blocks.testimonials && <config.blocks.testimonials />}
      {config.blocks.cta && <config.blocks.cta />}
      {config.blocks.footer && <config.blocks.footer />}
    </BlockThemeWrapper>
  )
}
```

---

## Phase 5: Theme Enhancement (Optional)

### 5.1 Extend theme interface to match theme generator

The current `HeroThemeColors` has 21 properties. The theme generator's `ThemeStyleProps` has 44 properties. Consider:

1. **Option A**: Keep current simpler theme format
   - Pros: Less migration work, current themes work
   - Cons: Missing some semantic colors (success, warning, info, chart colors, etc.)

2. **Option B**: Extend to full theme generator format
   - Pros: Full parity with theme generator tool
   - Cons: Need to update all existing themes

**Recommendation**: Start with Option A, can extend later as needed.

---

## Execution Order

1. [ ] Create `_components/block-theme-wrapper.tsx`
2. [ ] Create `_components/index.ts`
3. [ ] Create `features/service-plants/features.tsx`
4. [ ] Create `products/service-plants/products.tsx`
5. [ ] Create `gallery/service-plants/gallery.tsx`
6. [ ] Create `testimonials/service-plants/testimonials.tsx`
7. [ ] Create `cta/service-plants/cta.tsx`
8. [ ] Create `footer/service-plants/footer.tsx`
9. [ ] Create index.ts for each block type folder
10. [ ] Refactor `hero/service-plants/hero.tsx` to only Hero
11. [ ] Update `hero/index.ts` exports
12. [ ] Update `[slug]/page.client.tsx` with new architecture
13. [ ] Test all templates still work
14. [ ] Clean up old code

---

## Notes

- Each block component should NOT include the theme wrapper - that's handled by BlockThemeWrapper
- Each block should be a `<section>` element
- Blocks should not have background color classes (inherit from theme)
- Images use Next.js Image with `fill` prop for optimization
