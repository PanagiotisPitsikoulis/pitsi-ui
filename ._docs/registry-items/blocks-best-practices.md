# Blocks Best Practices

> Guidelines for creating and maintaining high-quality blocks

## Block Structure

### File Organization

```
blocks/
├── hero/
│   ├── hero-1.tsx              # Component
│   ├── hero-1.config.ts        # Registry config
│   ├── hero-2.tsx
│   ├── hero-2.config.ts
│   └── ...
├── features/
│   ├── features-1.tsx
│   ├── features-1.config.ts
│   └── ...
└── ...
```

### Naming Convention

```
{category}-{variant}.tsx
{category}-{variant}.config.ts
```

**Examples:**
- `hero-1.tsx`, `hero-1.config.ts`
- `features-plants-1.tsx`, `features-plants-1.config.ts`
- `pricing-saas-1.tsx`, `pricing-saas-1.config.ts`

---

## Component Structure

### Standard Template

```typescript
"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"

import { heroDefaults, type HeroBlockProps } from "@/lib/blocks/hero.types"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"

export function Hero1({ content = {}, classNames = {} }: HeroBlockProps) {
  // 1. Merge content with defaults
  const {
    badge = heroDefaults.badge,
    title = heroDefaults.title,
    description = heroDefaults.description,
    primaryCta = heroDefaults.primaryCta,
    secondaryCta = heroDefaults.secondaryCta,
    image = heroDefaults.image,
  } = content

  // 2. Component logic (hooks, handlers)
  const sectionRef = useRef<HTMLElement>(null)

  // 3. Return JSX
  return (
    <section
      ref={sectionRef}
      className={cn(
        "relative py-20 px-4 md:px-6 lg:px-8",
        classNames.root
      )}
    >
      {/* Content */}
    </section>
  )
}

// 4. Optional: Backwards-compatible export
export { Hero1 as HeroServicePlants }
```

---

## Props Pattern

### Two-Prop Architecture

Every block accepts exactly two props:

```typescript
interface BlockProps {
  content?: Partial<ContentType>    // Data content
  classNames?: ClassNamesType       // Style overrides
}
```

### Why This Pattern?

1. **Content/Style Separation** - Clear boundary between data and styling
2. **Optional Everything** - Defaults make props optional
3. **Type Safety** - Full IntelliSense support
4. **Override Flexibility** - Any element can be customized

### Example Usage

```tsx
// Minimal usage (all defaults)
<Hero1 />

// Custom content
<Hero1
  content={{
    title: "Custom Title",
    primaryCta: { label: "Get Started", href: "/signup" }
  }}
/>

// Style overrides
<Hero1
  classNames={{
    root: "bg-gradient-to-b from-blue-50",
    header: { title: "text-blue-900" }
  }}
/>
```

---

## Content Defaults

### Always Provide Defaults

```typescript
// lib/blocks/hero.types.ts
export const heroDefaults: HeroContent = {
  badge: "Plant Care Specialists",
  title: "Transform Your Space\nInto a Living Sanctuary",
  description: "Handpicked plants. Personalized care.\nFree delivery on orders over $50.",
  primaryCta: { label: "Explore Collection", href: "#" },
  secondaryCta: { label: "Plant Quiz", href: "#", variant: "outline" },
  image: {
    src: "/placeholders/blocks/service-plants/subject/4.webp",
    alt: "Woman holding houseplant"
  },
  backgroundImage: {
    src: "/placeholders/blocks/service-plants/assets/decoration-2.svg",
    alt: ""
  }
}
```

### Default Merging

```typescript
// In component
const {
  badge = heroDefaults.badge,
  title = heroDefaults.title,
  description = heroDefaults.description,
  primaryCta = heroDefaults.primaryCta,
  // ...
} = content
```

---

## ClassNames Structure

### Hierarchical ClassNames

```typescript
interface HeroClassNames extends BlockBaseClassNames {
  root?: string                     // Section element
  container?: string                // Max-width wrapper
  header?: BlockHeaderClassNames    // Header group
  cta?: BlockCtaClassNames          // CTA buttons group
  image?: BlockImageClassNames      // Image group
  background?: string               // Background element
  decoration?: string               // Decoration elements
}

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

interface BlockImageClassNames {
  root?: string
  wrapper?: string
  img?: string
}
```

### Apply with `cn()`

```tsx
<section className={cn("base-classes", classNames.root)}>
  <div className={cn("container-classes", classNames.container)}>
    <p className={cn("badge-classes", classNames.header?.badge)}>
      {badge}
    </p>
    <h1 className={cn("title-classes", classNames.header?.title)}>
      {title}
    </h1>
  </div>
</section>
```

---

## Image Handling

### Use Next.js Image

```tsx
import Image from "next/image"

{image && (
  <Image
    src={image.src}
    alt={image.alt}
    width={image.width ?? 1200}
    height={image.height ?? 800}
    priority={image.priority}
    className={cn("object-cover", classNames.image?.img)}
  />
)}
```

### Image Props Interface

```typescript
interface BlockImage {
  src: string
  alt: string
  width?: number
  height?: number
  priority?: boolean
}
```

### Priority for LCP

Set `priority` on above-the-fold images:

```typescript
image: {
  src: "/hero.webp",
  alt: "Hero image",
  priority: true  // LCP image
}
```

---

## Animations

### Motion/React for Animations

```typescript
"use client"

import { motion, useScroll, useTransform } from "motion/react"

export function Hero1({ content, classNames }: HeroBlockProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const heroImageX = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <section ref={sectionRef}>
      <motion.div style={{ x: heroImageX }}>
        <Image {...imageProps} />
      </motion.div>
    </section>
  )
}
```

### Animation Guidelines

1. **Subtle** - Avoid distracting animations
2. **Purposeful** - Animation should enhance UX
3. **Performant** - Use `transform` and `opacity` only
4. **Respect Preferences** - Honor `prefers-reduced-motion`

---

## Responsive Design

### Mobile-First

```tsx
<section className={cn(
  // Mobile base
  "py-16 px-4",
  // Tablet
  "md:py-20 md:px-6",
  // Desktop
  "lg:py-24 lg:px-8",
  classNames.root
)}>
```

### Responsive Grid

```tsx
<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
  {features.map(feature => (
    <FeatureCard key={feature.title} {...feature} />
  ))}
</div>
```

### Hide/Show Elements

```tsx
{/* Mobile only */}
<div className="block lg:hidden">
  <MobileImage />
</div>

{/* Desktop only */}
<div className="hidden lg:block">
  <DesktopImage />
</div>
```

---

## Config Files

### Required Fields

```typescript
// hero-1.config.ts
import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "hero-1",                     // Required: unique name
  type: "registry:block",             // Required: type
  description: "Plant shop hero...",  // Required: description
  dependencies: ["motion/react"],     // npm dependencies
  registryDependencies: ["button"],   // pitsi dependencies
  categories: ["hero", "landing"],    // Categories
  tier: "free",                       // "free" | "pro"
  readiness: "production",            // "alpha" | "beta" | "production"
  blockConfig: {                      // Block-specific config
    template: "service-plants",
    blockType: "hero",
    order: 2,
    palette: "sage",
    typography: "elegant",
    tint: "tinted",
    forceLight: true
  }
}
```

### Optional Metadata

```typescript
meta: {
  designer: "Panagiotis Pitsikoulis",
  source: "Dribbble",
  sourceUrl: "https://dribbble.com/...",
  tags: ["parallax", "knockout-text", "animated"]
}
```

---

## Best Practices Summary

### Do

- ✅ Use the two-prop pattern (content + classNames)
- ✅ Provide sensible defaults for all content
- ✅ Use `cn()` for all className merging
- ✅ Use Next.js Image for all images
- ✅ Set `priority` on LCP images
- ✅ Use semantic color variables
- ✅ Design mobile-first
- ✅ Add `"use client"` only when needed
- ✅ Include comprehensive config files

### Don't

- ❌ Hardcode content in components
- ❌ Use inline styles for theming
- ❌ Forget to merge classNames with defaults
- ❌ Use `<img>` instead of `<Image>`
- ❌ Skip alt text on images
- ❌ Use hardcoded colors (bg-white, text-black)
- ❌ Design desktop-first
- ❌ Mark server components as client
- ❌ Skip the config file
