# Adding a New Block

## Overview

Blocks are complete UI sections (hero, header, footer, pricing, etc.) that compose into templates. Each block belongs to a template and has theming configuration.

## File Locations

- **Block File**: `apps/v4/registry/new-york-v4/blocks/{category}/{block-name}.tsx`
- **Registry**: `apps/v4/registry/new-york-v4/blocks/_registry.ts`
- **Screenshots**: Auto-generated to `apps/v4/public/r/styles/new-york-v4/`

## Block Categories

```
application/  auth/       blog/      contact/    cta/
faq/          features/   footer/    gallery/    header/
hero/         logos/      maps/      newsletter/ pricing/
products/     service/    stats/     team/       testimonials/
```

## Step-by-Step Process

### 1. Create the Block Component

Create `apps/v4/registry/new-york-v4/blocks/{category}/{name}.tsx`:

```tsx
"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"

// Import shared types
import type { HeroBlockProps } from "@/lib/blocks/hero.types"

// Block-specific defaults (override shared defaults)
const hero10Defaults = {
  badge: "Welcome",
  title: "Transform Your Space\nInto a Living Sanctuary",
  description: "Handpicked plants and expert care tips for your home.",
  primaryCta: { label: "Get Started", href: "#" },
  secondaryCta: { label: "Learn More", href: "#about" },
  image: {
    src: "/placeholders/blocks/service-plants/subject/1.webp",
    alt: "Beautiful indoor plants",
    width: 800,
    height: 600,
  },
}

export function Hero10({ content = {}, classNames = {} }: HeroBlockProps) {
  // Destructure with defaults - props override defaults
  const {
    badge = hero10Defaults.badge,
    title = hero10Defaults.title,
    description = hero10Defaults.description,
    primaryCta = hero10Defaults.primaryCta,
    secondaryCta = hero10Defaults.secondaryCta,
    image = hero10Defaults.image,
  } = content

  return (
    <section className={cn("py-24", classNames.root)}>
      <div className={cn("container mx-auto px-4", classNames.container)}>
        {badge && (
          <span className={cn("text-sm text-brand", classNames.header?.badge)}>
            {badge}
          </span>
        )}
        <h1 className={cn("text-5xl font-display font-bold", classNames.header?.title)}>
          {title}
        </h1>
        <p className={cn("mt-4 text-lg text-muted-foreground", classNames.header?.description)}>
          {description}
        </p>
        <div className={cn("mt-8 flex gap-4", classNames.cta?.root)}>
          <Button className={classNames.cta?.primary}>{primaryCta.label}</Button>
          {secondaryCta && (
            <Button variant="outline" className={classNames.cta?.secondary}>
              {secondaryCta.label}
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
```

---

## Block Props Architecture

Every block receives exactly **two optional prop objects**:

```typescript
interface BlockProps {
  content?: Partial<ContentType>   // Data: text, images, links
  classNames?: ClassNamesType      // Styling: CSS class overrides
}
```

This separation allows users to customize **what** the block displays (content) and **how** it looks (classNames) independently.

### Content Props

Content props control the data displayed in the block. They use shared base types from `apps/v4/lib/blocks/types.ts`:

```typescript
// Common base types used across blocks
BlockImage          // { src, alt, width?, height?, priority? }
BlockLink           // { label, href, external? }
BlockCTA            // extends BlockLink + { icon?, variant?, size? }
BlockSectionHeader  // { badge?, title, description? }
BlockNavItem        // { label, href, children? }
BlockSocialLink     // { platform, href, label? }
BlockFormField      // { name, label, type, placeholder?, required? }
```

**Block-specific content interfaces** extend these bases:

```typescript
// Hero content example
interface HeroContent extends BlockSectionHeader {
  primaryCta?: BlockCTA
  secondaryCta?: BlockCTA
  image?: BlockImage
  backgroundImage?: BlockImage
  variant?: "left" | "right" | "center"
}

// Features content example
interface FeaturesContent extends BlockSectionHeader {
  features: Array<{
    icon?: string
    title: string
    description: string
  }>
}

// Stats content example
interface StatsContent extends BlockSectionHeader {
  stats: Array<{
    value: string
    label: string
    description?: string
  }>
}
```

### ClassNames Props

ClassNames mirror the component's DOM structure for granular styling:

```typescript
// Base - every block has
interface BlockBaseClassNames {
  root?: string        // Outermost element
  container?: string   // Inner container
}

// Nested structures
interface BlockHeaderClassNames {
  root?: string
  badge?: string
  title?: string
  description?: string
}

interface BlockCtaClassNames {
  root?: string
  primary?: string
  secondary?: string
}

// Full hero classNames example
interface HeroClassNames extends BlockBaseClassNames {
  header?: BlockHeaderClassNames
  cta?: BlockCtaClassNames
  image?: {
    root?: string
    wrapper?: string
    img?: string
  }
  background?: string
}
```

### Three-Tier Default System

Blocks use a three-tier default system for maximum flexibility:

```
┌─────────────────────────────────────────────────────────────┐
│  Tier 1: Shared Defaults (types.ts)                        │
│  └── Used across ALL variants of a block type              │
│      heroDefaults, statsDefaults, featuresDefaults         │
├─────────────────────────────────────────────────────────────┤
│  Tier 2: Variant Defaults (inside each block file)         │
│  └── Specific to THIS variant (hero-1, hero-2, etc.)       │
│      hero1Defaults, hero2Defaults with unique content      │
├─────────────────────────────────────────────────────────────┤
│  Tier 3: User Props (passed at runtime)                    │
│  └── Override anything from content/classNames props       │
│      <Hero1 content={{ title: "Custom" }} />               │
└─────────────────────────────────────────────────────────────┘
```

**Merging order:** User Props → Variant Defaults → Shared Defaults

### Implementing Props in Your Block

```typescript
import type { StatsBlockProps } from "@/lib/blocks/stats.types"
import { statsDefaults } from "@/lib/blocks/types"

// Tier 2: This variant's specific defaults
const stats5Defaults = {
  badge: "Our Impact",
  title: "Numbers That Matter",
  description: "See how we've helped our customers succeed.",
  stats: [
    { value: "10K+", label: "Happy Customers" },
    { value: "99%", label: "Satisfaction Rate" },
    { value: "24/7", label: "Support Available" },
  ],
}

export function Stats5({ content = {}, classNames = {} }: StatsBlockProps) {
  // Destructure with fallback chain
  const {
    badge = stats5Defaults.badge,
    title = stats5Defaults.title,
    description = stats5Defaults.description,
    stats = stats5Defaults.stats,
  } = content

  return (
    <section className={cn("py-24", classNames.root)}>
      {/* Use classNames for style customization */}
      <h2 className={cn("text-3xl font-bold", classNames.header?.title)}>
        {title}
      </h2>

      <div className={cn("grid grid-cols-3 gap-8", classNames.stats?.root)}>
        {stats.map((stat, i) => (
          <div key={i} className={cn("text-center", classNames.stats?.item)}>
            <div className={cn("text-4xl font-bold text-brand", classNames.stats?.value)}>
              {stat.value}
            </div>
            <div className={cn("text-muted-foreground", classNames.stats?.label)}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
```

### Usage Examples

**Default rendering (no props):**
```tsx
<Hero10 />  // Uses all defaults - works perfectly
```

**Override specific content:**
```tsx
<Hero10
  content={{
    title: "My Custom Title",
    primaryCta: { label: "Shop Now", href: "/shop" },
  }}
/>
// badge, description, image use defaults
```

**Override styling:**
```tsx
<Hero10
  classNames={{
    root: "bg-gradient-to-r from-purple-500 to-pink-500",
    header: {
      title: "text-6xl text-white",
      description: "text-white/80",
    },
    cta: {
      primary: "bg-white text-purple-600",
    },
  }}
/>
```

**Full customization:**
```tsx
<Hero10
  content={{
    badge: "New Collection",
    title: "Summer Plants 2024",
    description: "Fresh arrivals for your garden.",
    image: { src: "/my-image.webp", alt: "Summer plants" },
  }}
  classNames={{
    root: "min-h-screen",
    container: "max-w-5xl",
  }}
/>
```

---

### 2. Add Registry Entry

Add to `apps/v4/registry/new-york-v4/blocks/_registry.ts`:

```typescript
// Find the bc helper at the top of the file:
function bc(
  template: string,      // Template slug (e.g., "service-plants")
  blockType: string,     // Category (e.g., "hero", "features")
  order: number,         // Position in template (1-20)
  palette: string,       // Color palette
  typography: string,    // Font preset
  tint?: TintLevel,      // "base" | "tinted" | "deep"
  forceLight?: boolean,
  forceDark?: boolean
): BlockConfig

// Add entry (keep alphabetical order within category):
{
  name: "hero-10",
  type: "registry:block",
  description: "Hero section with gradient background and CTA",
  dependencies: ["motion/react"],  // npm packages
  registryDependencies: ["button", "utils"],  // pitsi components
  files: [{ path: "blocks/hero/hero-10.tsx", type: "registry:block" }],
  categories: ["hero", "landing"],
  tier: "free",  // or "pro"
  readiness: "beta",  // "alpha" | "beta" | "production"
  blockConfig: bc("service-plants", "hero", 2, "sage", "elegant", "tinted", true),
}
```

## BlockConfig Parameters

| Parameter | Description | Values |
|-----------|-------------|--------|
| `template` | Which template this block belongs to | `"service-plants"`, `"service-fitness"`, `"service-travel"`, `"app-gym-tracker"`, `"app-quiz"` |
| `blockType` | Category for grouping alternatives | `"hero"`, `"header"`, `"features"`, `"pricing"`, `"footer"`, etc. |
| `order` | Position in template rendering | 1-20 (lower = earlier) |
| `palette` | Color scheme | `"slate"`, `"azure"`, `"violet"`, `"rose"`, `"sage"`, `"amber"`, `"cyan"`, `"indigo"`, `"coral"`, `"forest"`, `"neon"` |
| `typography` | Font preset | `"modern"`, `"elegant"`, `"classic"`, `"playful"`, `"futuristic"` |
| `tint` | Background intensity | `"base"` (neutral), `"tinted"` (subtle color), `"deep"` (strong color) |
| `forceLight` | Force light mode | `true` / `false` |
| `forceDark` | Force dark mode | `true` / `false` |

## Template Assignments

**Service Templates** (landing pages):
- `service-plants` - Sage palette, elegant typography
- `service-fitness` - Neon palette, futuristic typography
- `service-travel` - Azure palette, modern typography
- `service-boat` - Azure palette, classic typography

**Application Templates**:
- `app-gym-tracker` - Neon palette, futuristic typography
- `app-quiz` - Violet palette, playful typography

## Theming Guidelines

Blocks receive theming through `BlockThemeWrapper`. Use CSS variables:

```tsx
// Colors from palette
className="bg-brand"           // Primary brand color
className="text-brand"         // Brand text
className="bg-complementary"   // Complementary accent
className="bg-tint"            // Background tint

// Typography from preset
className="font-display"       // Heading font
className="font-body"          // Body font
```

## Build & Verify

```bash
# Build registry
bun run registry:build

# Start dev server
bun run v4:dev

# View at: http://localhost:4000/block/{category}/{name}

# Capture screenshots (optional)
bun run registry:capture
```

## Checklist

### File & Registry
- [ ] Block file created in correct category folder
- [ ] Uses `"use client"` directive if interactive
- [ ] Imports use `@/` path aliases
- [ ] Registry entry added in alphabetical order
- [ ] `blockConfig` has correct template assignment
- [ ] All dependencies listed (npm and registry)
- [ ] Tier and readiness set appropriately

### Props Architecture
- [ ] Block accepts `{ content = {}, classNames = {} }` props
- [ ] Props typed with block-specific interface (e.g., `HeroBlockProps`)
- [ ] Variant-specific defaults defined at top of file
- [ ] All content fields have defaults via destructuring
- [ ] ClassNames applied with `cn()` for merging
- [ ] Block renders correctly with NO props (uses defaults)
- [ ] Block renders correctly with partial props (selective overrides)

### Theming
- [ ] Uses theme CSS variables (`text-brand`, `font-display`, etc.)
- [ ] Works in both light and dark modes
- [ ] Respects `tint` level styling

### Verification
- [ ] Registry builds without errors
- [ ] Block renders correctly in dev
- [ ] Props override defaults as expected
