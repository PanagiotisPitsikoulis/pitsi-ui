# Theme System & Design Guidelines

## Overview

The pitsi/ui theme system provides consistent styling across blocks through **palettes** (colors) and **typography** (fonts). Blocks receive theming via `BlockThemeWrapper` which injects CSS variables.

## Core Concepts

### 1. Color Palettes

**11 predefined palettes** in `apps/v4/registry/new-york-v4/lib/palettes.ts`:

| Palette | Brand Color | Use Case |
|---------|-------------|----------|
| `slate` | Gray | Neutral, corporate |
| `azure` | Blue | Trust, technology |
| `violet` | Purple | Creative, premium |
| `rose` | Pink | Feminine, soft |
| `sage` | Green | Natural, organic |
| `amber` | Orange | Warm, energetic |
| `cyan` | Teal | Fresh, modern |
| `indigo` | Deep blue | Professional |
| `coral` | Coral red | Vibrant, bold |
| `forest` | Dark green | Earthy, sustainable |
| `neon` | Bright green | Tech, futuristic |

**Palette Structure:**
```typescript
interface Palette {
  name: string
  slug: string
  light: {
    brand: string        // Primary color (e.g., "#5cb87e")
    complementary: string // Accent color (opposite hue)
    tint: string         // Background tint
  }
  dark: {
    brand: string
    complementary: string
    tint: string
  }
}
```

### 2. Typography Presets

**5 font presets** in `apps/v4/registry/new-york-v4/lib/typography.ts`:

| Preset | Display Font | Body Font | Character |
|--------|--------------|-----------|-----------|
| `modern` | System sans | System sans | Clean, minimal |
| `elegant` | Fraunces | DM Sans | Refined, sophisticated |
| `classic` | Playfair | Source Sans | Traditional, trustworthy |
| `playful` | Space Grotesk | Nunito | Fun, approachable |
| `futuristic` | Orbitron | Rajdhani | Tech, sci-fi |

**Typography Structure:**
```typescript
interface TypographyPreset {
  name: string
  slug: string
  fonts: {
    display: string      // CSS var for headings
    body: string         // CSS var for body
    displayWeight: string
    bodyWeight: string
  }
}
```

### 3. Tint Levels

Control background intensity:

| Tint | Effect |
|------|--------|
| `base` | Neutral background, no color tint |
| `tinted` | Subtle palette color in background |
| `deep` | Strong palette color in background |

## Using the Theme System

### In Blocks

Blocks receive theming through `BlockThemeWrapper`:

```tsx
import { BlockThemeWrapper } from "@/registry/new-york-v4/lib/block-theme"

export function MyBlock() {
  return (
    <BlockThemeWrapper palette="sage" typography="elegant" tint="tinted">
      <section className="bg-tint py-24">
        <h1 className="font-display text-brand">Heading</h1>
        <p className="font-body">Body text</p>
        <button className="bg-brand text-white">CTA</button>
      </section>
    </BlockThemeWrapper>
  )
}
```

### CSS Variables Available

When wrapped in `BlockThemeWrapper`, these CSS variables are available:

```css
/* Colors */
--brand: <palette brand color>
--brand-complementary: <complementary accent>
--tint: <background tint>

/* Typography */
--font-display: <heading font>
--font-body: <body font>
--font-display-weight: <heading weight>
--font-body-weight: <body weight>
```

### Tailwind Classes

Use these utility classes in themed blocks:

```tsx
// Colors
className="bg-brand"           // Brand background
className="text-brand"         // Brand text color
className="bg-complementary"   // Accent background
className="text-complementary" // Accent text
className="bg-tint"            // Tinted background

// Typography
className="font-display"       // Heading font family
className="font-body"          // Body font family
```

## Block Theming Configuration

In `_registry.ts`, blocks declare their theming via `blockConfig`:

```typescript
{
  name: "hero-1",
  blockConfig: bc(
    "service-plants",  // template
    "hero",            // blockType
    2,                 // order
    "sage",            // palette
    "elegant",         // typography
    "tinted",          // tint
    true,              // forceLight
    false              // forceDark
  ),
}
```

### Template Palette/Typography Assignments

| Template | Palette | Typography |
|----------|---------|------------|
| `service-plants` | sage | elegant |
| `service-fitness` | neon | futuristic |
| `service-travel` | azure | modern |
| `service-boat` | azure | classic |
| `app-gym-tracker` | neon | futuristic |
| `app-quiz` | violet | playful |

## Design Guidelines

### 1. Color Usage

**Brand color** - Use for:
- Primary CTAs and buttons
- Links and interactive elements
- Key highlights and accents
- Section dividers

**Complementary color** - Use for:
- Secondary accents
- Hover states
- Decorative elements
- Contrast highlights

**Tint** - Use for:
- Section backgrounds
- Card backgrounds
- Subtle differentiation

### 2. Typography Hierarchy

```tsx
// Page title
<h1 className="font-display text-5xl font-bold">Main Title</h1>

// Section heading
<h2 className="font-display text-3xl font-semibold">Section</h2>

// Subsection
<h3 className="font-display text-xl font-medium">Subsection</h3>

// Body text
<p className="font-body text-base">Content paragraph...</p>

// Small/caption
<span className="font-body text-sm text-muted-foreground">Caption</span>
```

### 3. Spacing System

Use Tailwind's spacing scale consistently:

| Use Case | Spacing |
|----------|---------|
| Section padding | `py-16` to `py-24` |
| Container | `container mx-auto px-4` |
| Card padding | `p-6` to `p-8` |
| Element gaps | `gap-4` to `gap-8` |
| Text spacing | `space-y-4` |

### 4. Component Patterns

**Cards:**
```tsx
<div className="rounded-lg border bg-card p-6 shadow-sm">
  <h3 className="font-display text-lg font-semibold">Title</h3>
  <p className="mt-2 text-muted-foreground">Description</p>
</div>
```

**CTAs:**
```tsx
<Button className="bg-brand hover:bg-brand/90">Primary CTA</Button>
<Button variant="outline" className="border-brand text-brand">Secondary</Button>
```

**Sections:**
```tsx
<section className="bg-tint py-24">
  <div className="container mx-auto px-4">
    {/* Content */}
  </div>
</section>
```

### 5. Responsive Design

Always design mobile-first:

```tsx
<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
  {/* Cards */}
</div>

<h1 className="text-3xl md:text-4xl lg:text-5xl">Responsive Heading</h1>
```

### 6. Dark Mode

Blocks automatically support dark mode through the palette system. Use semantic colors:

```tsx
// DO: Use semantic colors
className="bg-background text-foreground"
className="bg-muted text-muted-foreground"
className="border-border"

// DON'T: Use fixed colors
className="bg-white text-black"  // Won't adapt to dark mode
```

## Custom Themes

For blocks that need custom colors beyond palettes:

```typescript
interface CustomTheme {
  brand: string              // Required
  brandComplementary?: string // Auto-calculated if omitted
  background?: string
  foreground?: string
  card?: string
  cardForeground?: string
  muted?: string
  mutedForeground?: string
}
```

Usage:
```tsx
<BlockThemeWrapper
  customTheme={{
    brand: "#ff6b6b",
    background: "#1a1a2e",
    foreground: "#eaeaea",
  }}
>
  {/* Content */}
</BlockThemeWrapper>
```

## Key Files

| File | Purpose |
|------|---------|
| `lib/block-theme.tsx` | Theme wrapper component, CSS var injection |
| `lib/palettes.ts` | Color palette definitions |
| `lib/typography.ts` | Typography preset definitions |
| `lib/templates.ts` | Template configuration and helpers |
| `lib/block-selection-context.tsx` | Block selection state management |

## Checklist for Themed Blocks

- [ ] Uses `BlockThemeWrapper` or receives theme from parent
- [ ] Uses CSS variables (`bg-brand`, `font-display`, etc.)
- [ ] Works in both light and dark modes
- [ ] Responsive across breakpoints
- [ ] Consistent spacing with design system
- [ ] Proper typography hierarchy
- [ ] Accessible color contrast ratios
