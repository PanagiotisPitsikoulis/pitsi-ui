# Homepage Sections Refactor to Reusable Blocks

## Goal
Make the design page look exactly like the design section of the homepage, and extract all homepage sections into fully reusable blocks with props.

## Current State Analysis

### Files to Extract Into Reusable Blocks
Located in: `apps/v4/app/(app)/(marketing)/_components/`

1. **hero-section.tsx** - Main hero with parallax images, CTAs, feature grid
2. **purpose-section.tsx** - Feature cards with icons explaining "Why Pitsi"
3. **design-section.tsx** - Multi-part design showcase with parallax, horizontal scroll, text gradient
4. **power-bento-section.tsx** - Bento grid with illustrations
5. **cta-section.tsx** - CTA with wave SVG backgrounds
6. **reviews-section.tsx** - Marquee testimonials

### Target Location
`apps/v4/app/(app)/(marketing)/_blocks/`

---

## Implementation Plan

### Phase 1: Create Reusable Block Components

#### 1. `_blocks/parallax-hero-block.tsx`
Props interface:
```typescript
interface ParallaxHeroBlockProps {
  // Typography
  headline: React.ReactNode
  subheadline?: string
  // Images
  lightModeImage: string
  darkModeImage?: string
  mobileImages?: { desktop: string; mobile: string }
  // CTAs
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  // Stats
  stats?: { label: string; value: string }[]
  // Additional content
  topNote?: string
  className?: string
}
```

#### 2. `_blocks/feature-grid-block.tsx`
Props interface:
```typescript
interface FeatureItem {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

interface FeatureGridBlockProps {
  tagline: string
  headline: React.ReactNode
  features: FeatureItem[]
  centerContent?: React.ReactNode
  bottomText?: string
  className?: string
}
```

#### 3. `_blocks/design-showcase-block.tsx`
Props interface:
```typescript
interface DesignShowcaseBlockProps {
  // Intro section
  intro: {
    tagline: string
    headline: string[]
    subtext?: string[]
    backgroundImage: string
    foregroundImage?: string
  }
  // Problem section
  problem?: {
    tagline: string
    headline: React.ReactNode
    scrollTexts: [string, string]
  }
  // Solution section
  solution?: {
    tagline: string
    text: string
  }
  // Final CTA section
  finalCta?: {
    tagline: string
    headline: React.ReactNode
    scrollTexts: [string, string]
  }
  // Features grid
  features?: {
    title: string
    description: string
  }[]
  // Preview blocks
  previewBlocks?: string[]
  className?: string
}
```

#### 4. `_blocks/bento-features-block.tsx`
Props interface:
```typescript
interface BentoItem {
  type: 'card' | 'icon'
  title?: string
  description?: string
  illustration?: React.ComponentType
  icon?: React.ComponentType<{ className?: string }>
}

interface BentoFeaturesBlockProps {
  tagline: string
  headline: React.ReactNode
  items: BentoItem[]
  className?: string
}
```

#### 5. `_blocks/cta-wave-block.tsx`
Props interface:
```typescript
interface CtaWaveBlockProps {
  tagline: string
  headline: React.ReactNode
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  lightModeImage: string
  darkModeImage?: string
  className?: string
}
```

#### 6. `_blocks/reviews-marquee-block.tsx`
Props interface:
```typescript
interface Review {
  name: string
  username: string
  body: string
  img: string
}

interface ReviewsMarqueeBlockProps {
  reviews: Review[]
  duration?: string
  className?: string
}
```

#### 7. `_blocks/index.ts`
Export all blocks for easy importing.

---

### Phase 2: Refactor Existing Components

1. Update `_components/hero-section.tsx` to use `ParallaxHeroBlock` with hardcoded homepage data
2. Update `_components/purpose-section.tsx` to use `FeatureGridBlock` with hardcoded data
3. Update `_components/design-section.tsx` to use `DesignShowcaseBlock` with hardcoded data
4. Update `_components/power-bento-section.tsx` to use `BentoFeaturesBlock` with hardcoded data
5. Update `_components/cta-section.tsx` to use `CtaWaveBlock` with hardcoded data
6. Update `_components/reviews-section.tsx` to use `ReviewsMarqueeBlock` with hardcoded data

---

### Phase 3: Create Design Feature Page

Create `apps/v4/app/(app)/(marketing)/(features)/design/page.tsx`:
```typescript
import { Metadata } from "next"
import { DesignSection, StripeBgGuides, CTASection, ReviewsSection } from "../../_components"

export const metadata: Metadata = {
  title: "Design - Pitsi UI",
  description: "Unparalleled design quality...",
}

export default function DesignPage() {
  return (
    <div className="relative min-h-screen">
      <StripeBgGuides columnCount={6} animated={false} />
      <DesignSection />
      <CTASection />
      <ReviewsSection />
    </div>
  )
}
```

---

## File Changes Summary

### New Files (7 files)
1. `_blocks/parallax-hero-block.tsx`
2. `_blocks/feature-grid-block.tsx`
3. `_blocks/design-showcase-block.tsx`
4. `_blocks/bento-features-block.tsx`
5. `_blocks/cta-wave-block.tsx`
6. `_blocks/reviews-marquee-block.tsx`
7. `_blocks/index.ts`

### Modified Files (7 files)
1. `_components/hero-section.tsx` - Use ParallaxHeroBlock
2. `_components/purpose-section.tsx` - Use FeatureGridBlock
3. `_components/design-section.tsx` - Use DesignShowcaseBlock
4. `_components/power-bento-section.tsx` - Use BentoFeaturesBlock
5. `_components/cta-section.tsx` - Use CtaWaveBlock
6. `_components/reviews-section.tsx` - Use ReviewsMarqueeBlock
7. `(features)/design/page.tsx` - Create design page

---

## Key Design Principles

1. **Props-First**: All content passed via props, no hardcoded strings in blocks
2. **Type-Safe**: Full TypeScript interfaces for all props
3. **Composable**: Blocks can be combined in any order
4. **Themeable**: className props for styling overrides
5. **Accessible**: Maintain all accessibility features
6. **Server Components**: Keep blocks as server components where possible
7. **Client Components**: Use "use client" only where needed (animations)

---

## Execution Order

1. Create all block files in `_blocks/`
2. Create `_blocks/index.ts` with exports
3. Refactor each `_components/` section to use blocks
4. Create the design page
5. Test all pages still work correctly
