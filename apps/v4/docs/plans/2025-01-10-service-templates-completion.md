# Service Templates Completion Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Fill all service templates with complete block coverage matching service-plants

**Architecture:** Each service template needs 16 block categories. Blocks are themed with template-specific palette, typography, and content (images, copy).

**Tech Stack:** React, TypeScript, Tailwind CSS, lucide-react icons

---

## Current State Analysis

### service-plants (COMPLETE - Reference Template)
**Palette:** sage | **Typography:** elegant | **Tint:** tinted/deep

| Category | Count | Blocks |
|----------|-------|--------|
| header | 8 | header-1 to header-8 |
| hero | 6 | hero-1, hero-10-14 |
| logos | 6 | logos-1 to logos-6 |
| features | 5 | features-1 to features-5 |
| products | 6 | products-1 to products-6 |
| pricing | 6 | pricing-1, pricing-3-7 |
| testimonials | 6 | testimonials-1, testimonials-3-7 |
| gallery | 6 | gallery-1 to gallery-6 |
| team | 6 | team-1, team-3-7 |
| stats | 6 | stats-1, stats-3-7 |
| faq | 6 | faq-1 to faq-6 |
| blog | 6 | blog-1 to blog-6 |
| contact | 6 | contact-1 to contact-6 |
| newsletter | 6 | newsletter-1 to newsletter-6 |
| cta | 6 | cta-1 to cta-6 |
| footer | 7 | footer-1, footer-3-8 |

**Total: 16 categories, ~90 blocks**

---

### service-travel (NEEDS COMPLETION)
**Palette:** azure | **Typography:** modern | **Tint:** tinted

**Current:** hero (6 blocks: hero-2, hero-15-19)

**Missing Categories (15):**
- header, logos, features, products, pricing, testimonials, gallery, team, stats, faq, blog, contact, newsletter, cta, footer

---

### service-boat (NEEDS COMPLETION)
**Palette:** azure | **Typography:** classic | **Tint:** tinted

**Current:** hero (6 blocks: hero-3, hero-20-24)

**Missing Categories (15):**
- header, logos, features, products, pricing, testimonials, gallery, team, stats, faq, blog, contact, newsletter, cta, footer

---

### service-fitness (PARTIAL - NEEDS MORE)
**Palette:** neon | **Typography:** futuristic | **Tint:** tinted/deep

**Current (8 categories, 16 blocks):**
| Category | Count | Blocks |
|----------|-------|--------|
| header | 1 | header-9 |
| hero | 6 | hero-4 to hero-9 |
| features | 3 | features-6 to features-8 |
| pricing | 1 | pricing-2 |
| testimonials | 1 | testimonials-2 |
| team | 1 | team-2 |
| stats | 1 | stats-2 |
| footer | 1 | footer-2 |

**Missing Categories (8):**
- logos, products, gallery, faq, blog, contact, newsletter, cta

**Need More Variants (existing categories with <6 blocks):**
- header: needs 5 more
- features: needs 2 more
- pricing: needs 5 more
- testimonials: needs 5 more
- team: needs 5 more
- stats: needs 5 more
- footer: needs 5 more

---

## Implementation Plan

### Phase 1: service-travel (Travel Agency Theme)

**Theme Context:**
- Destinations, tours, adventures, tropical getaways
- Imagery: beaches, mountains, cities, cultural sites
- Copy: adventure, explore, discover, journey

#### Task 1.1: Create service-travel headers (6 blocks)
**Files to create:**
- `registry/new-york-v4/blocks/header/header-11.tsx` + `.config.ts`
- `registry/new-york-v4/blocks/header/header-12.tsx` + `.config.ts`
- `registry/new-york-v4/blocks/header/header-13.tsx` + `.config.ts`
- `registry/new-york-v4/blocks/header/header-14.tsx` + `.config.ts`
- `registry/new-york-v4/blocks/header/header-15.tsx` + `.config.ts`
- `registry/new-york-v4/blocks/header/header-16.tsx` + `.config.ts`

**Config template:**
```typescript
blockConfig: {
  template: "service-travel",
  blockType: "header",
  order: 1,
  palette: "azure",
  typography: "modern",
  tint: "tinted",
  forceLight: true,
}
```

#### Task 1.2: Create service-travel logos (6 blocks)
**Files:** logos-7 to logos-12
**Order:** 3, **Tint:** deep

#### Task 1.3: Create service-travel features (6 blocks)
**Files:** features-14 to features-19
**Order:** 4, **Tint:** tinted

#### Task 1.4: Create service-travel products (6 blocks)
**Files:** products-7 to products-12
**Order:** 5, **Tint:** tinted
**Content:** Tour packages, destinations, travel deals

#### Task 1.5: Create service-travel pricing (6 blocks)
**Files:** pricing-9 to pricing-14
**Order:** 6, **Tint:** tinted
**Content:** Tour tiers, travel packages

#### Task 1.6: Create service-travel testimonials (6 blocks)
**Files:** testimonials-9 to testimonials-14
**Order:** 7, **Tint:** deep
**Content:** Traveler reviews, journey stories

#### Task 1.7: Create service-travel gallery (6 blocks)
**Files:** gallery-7 to gallery-12
**Order:** 8, **Tint:** tinted
**Content:** Destination photos, travel moments

#### Task 1.8: Create service-travel team (6 blocks)
**Files:** team-8 to team-13
**Order:** 9, **Tint:** tinted
**Content:** Travel guides, tour experts

#### Task 1.9: Create service-travel stats (6 blocks)
**Files:** stats-9 to stats-14
**Order:** 10, **Tint:** deep
**Content:** Destinations visited, happy travelers, tours completed

#### Task 1.10: Create service-travel faq (6 blocks)
**Files:** faq-8 to faq-13
**Order:** 11, **Tint:** tinted
**Content:** Travel FAQs, booking questions

#### Task 1.11: Create service-travel blog (6 blocks)
**Files:** blog-7 to blog-12
**Order:** 12, **Tint:** tinted
**Content:** Travel tips, destination guides

#### Task 1.12: Create service-travel contact (6 blocks)
**Files:** contact-7 to contact-12
**Order:** 13, **Tint:** tinted

#### Task 1.13: Create service-travel newsletter (6 blocks)
**Files:** newsletter-7 to newsletter-12
**Order:** 14, **Tint:** deep
**Content:** Travel deals, destination updates

#### Task 1.14: Create service-travel cta (6 blocks)
**Files:** cta-8 to cta-13
**Order:** 15, **Tint:** tinted
**Content:** Book your adventure, Start exploring

#### Task 1.15: Create service-travel footer (6 blocks)
**Files:** footer-11 to footer-16
**Order:** 20, **Tint:** tinted

---

### Phase 2: service-boat (Yacht Charter Theme)

**Theme Context:**
- Luxury yachts, sailing, maritime, coastal
- Imagery: yachts, ocean, sunsets, harbors
- Copy: luxury, charter, voyage, exclusive

#### Task 2.1-2.15: Mirror Phase 1 structure
Same categories as Phase 1, with:
- **Palette:** azure
- **Typography:** classic
- **Content:** Yacht-themed imagery and copy

**Block numbering:**
- headers: header-17 to header-22
- logos: logos-13 to logos-18
- features: features-20 to features-25
- products: products-13 to products-18 (yacht charters, packages)
- pricing: pricing-15 to pricing-20
- testimonials: testimonials-15 to testimonials-20
- gallery: gallery-13 to gallery-18
- team: team-14 to team-19 (captains, crew)
- stats: stats-15 to stats-20
- faq: faq-14 to faq-19
- blog: blog-13 to blog-18
- contact: contact-13 to contact-18
- newsletter: newsletter-13 to newsletter-18
- cta: cta-14 to cta-19
- footer: footer-17 to footer-22

---

### Phase 3: service-fitness (Complete Existing + Add Missing)

**Theme Context:**
- High energy, performance, strength, transformation
- Imagery: gym equipment, athletes, workouts
- Copy: transform, power, strength, achieve

#### Task 3.1: Add more service-fitness headers (5 blocks)
**Files:** header-23 to header-27
**Palette:** neon, **Typography:** futuristic

#### Task 3.2: Create service-fitness logos (6 blocks)
**Files:** logos-19 to logos-24
**Content:** Fitness brands, equipment sponsors

#### Task 3.3: Add more service-fitness features (2 blocks)
**Files:** features-26, features-27

#### Task 3.4: Create service-fitness products (6 blocks)
**Files:** products-19 to products-24
**Content:** Memberships, training programs

#### Task 3.5: Add more service-fitness pricing (5 blocks)
**Files:** pricing-21 to pricing-25

#### Task 3.6: Add more service-fitness testimonials (5 blocks)
**Files:** testimonials-21 to testimonials-25
**Content:** Transformation stories

#### Task 3.7: Create service-fitness gallery (6 blocks)
**Files:** gallery-19 to gallery-24
**Content:** Gym photos, workout action shots

#### Task 3.8: Add more service-fitness team (5 blocks)
**Files:** team-20 to team-24
**Content:** Trainers, coaches

#### Task 3.9: Add more service-fitness stats (5 blocks)
**Files:** stats-21 to stats-25
**Content:** Members transformed, classes offered

#### Task 3.10: Create service-fitness faq (6 blocks)
**Files:** faq-20 to faq-25

#### Task 3.11: Create service-fitness blog (6 blocks)
**Files:** blog-19 to blog-24
**Content:** Workout tips, nutrition guides

#### Task 3.12: Create service-fitness contact (6 blocks)
**Files:** contact-19 to contact-24

#### Task 3.13: Create service-fitness newsletter (6 blocks)
**Files:** newsletter-19 to newsletter-24

#### Task 3.14: Create service-fitness cta (6 blocks)
**Files:** cta-20 to cta-25
**Content:** Start your transformation, Join now

#### Task 3.15: Add more service-fitness footer (5 blocks)
**Files:** footer-23 to footer-27

---

## Summary

| Template | Current Blocks | Blocks to Create | Total After |
|----------|---------------|------------------|-------------|
| service-travel | 6 | 90 | 96 |
| service-boat | 6 | 90 | 96 |
| service-fitness | 16 | 74 | 90 |
| **Total** | **28** | **254** | **282** |

## File Structure Per Block

Each block requires:
1. **Component file:** `registry/new-york-v4/blocks/{category}/{block-name}.tsx`
2. **Config file:** `registry/new-york-v4/blocks/{category}/{block-name}.config.ts`

## Config Template

```typescript
import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "{block-name}",
  type: "registry:block",
  description: "{Description for {template} theme}",
  dependencies: ["lucide-react"],
  registryDependencies: ["button", /* other deps */],
  categories: ["{category}"],
  tier: "free",
  readiness: "production",
  blockConfig: {
    template: "{template-slug}",
    blockType: "{category}",
    order: {order-number},
    palette: "{palette}",
    typography: "{typography}",
    tint: "{tint}",
  },
}
```

## Execution Notes

1. **Copy existing blocks as templates** - Use service-plants blocks as reference, adapt content/styling
2. **Maintain theme consistency** - Each template has specific palette, typography, and content theme
3. **Test after each category** - Run `bun run registry:build` and verify blocks appear in template
4. **Capture screenshots** - Run `bun run registry:capture` after creating blocks
5. **One category at a time** - Complete all 6 blocks for a category before moving to next
