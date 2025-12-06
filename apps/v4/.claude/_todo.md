# Cache Components Implementation Plan

## Overview
Enable `use cache` with `cacheLife('max')` throughout the app to permanently cache all static content.

## Current State
- `cacheComponents: true` already enabled in `next.config.mjs`
- Only `blocks/[[...slug]]/page.tsx` has `"use cache"` currently

## Pages Analysis

### 1. Fully Cacheable Pages (No Runtime Data)
These pages don't access cookies/headers and can be fully cached:

- [ ] `app/(app)/blog/[[...slug]]/page.tsx` - Add `use cache` + `cacheLife('max')`
- [ ] `app/(view)/view/[style]/[name]/page.tsx` - Add `use cache` + `cacheLife('max')`
- [ ] `app/(app)/docs/components/[component]/@content/page.tsx` - Add `use cache` + `cacheLife('max')`
- [ ] `app/(app)/docs/animations/[animation]/@content/page.tsx` - Add `use cache` + `cacheLife('max')`
- [ ] `app/(app)/block/[category]/[subcategory]/[blockName]/@content/page.tsx` - Add `use cache` + `cacheLife('max')`
- [ ] `app/(app)/privacy/page.tsx` - Add `use cache` + `cacheLife('max')`
- [ ] `app/(app)/terms/page.tsx` - Add `use cache` + `cacheLife('max')`
- [ ] `app/(app)/roadmap/page.tsx` - Add `use cache` + `cacheLife('max')`
- [ ] `app/(app)/changelog/page.tsx` - Add `use cache` + `cacheLife('max')`
- [ ] `app/(app)/templates/page.tsx` - Add `use cache` + `cacheLife('max')`
- [ ] `app/(app)/templates/[slug]/page.tsx` - Add `use cache` + `cacheLife('max')`

### 2. Pages with Runtime Data (Need Suspense Boundaries)
These pages use `getCurrentUser()` or cookies - need to separate cached and dynamic parts:

- [ ] `app/(app)/(root)/page.tsx` - Has `getCurrentUser()` for pricing section
  - Cache the page with `use cache`
  - Wrap `PricingCardsSection` in Suspense (it receives `user` prop)
  - Create async component that fetches user inside Suspense

- [ ] `app/(app)/docs/[[...slug]]/page.tsx` - Has `getCurrentUser()` for pro tier check
  - Cache static content
  - Wrap tier-checking logic in Suspense

### 3. Auth/Dashboard Pages (Keep Dynamic)
These MUST remain dynamic - don't add `use cache`:

- `app/(app)/signin/page.tsx`
- `app/(app)/signup/page.tsx`
- `app/(app)/@auth/(.)signin/page.tsx`
- `app/(app)/@auth/(.)signup/page.tsx`
- `app/(app)/dashboard/**/*.tsx` - All dashboard pages

### 4. Paywall Pages (Need Special Handling)
- [ ] `app/(app)/docs/components/[component]/@paywall/page.tsx`
- [ ] `app/(app)/docs/animations/[animation]/@paywall/page.tsx`
- [ ] `app/(app)/block/[category]/[subcategory]/[blockName]/@paywall/page.tsx`

## Implementation Steps

1. Add `cacheLife('max')` import from 'next/cache' to each file
2. Add `"use cache"` directive at top of async page functions
3. Add `cacheLife('max')` call after the directive
4. For pages with runtime data, create wrapper pattern with Suspense

## Pattern for Runtime Data Pages

```tsx
import { Suspense } from 'react'
import { cacheLife } from 'next/cache'

// Cached static content
async function CachedContent({ someStaticProp }) {
  'use cache'
  cacheLife('max')
  // ... static content
}

// Dynamic content wrapper
async function DynamicUserContent() {
  const user = await getCurrentUser() // Runtime data
  return <PricingSection user={user} />
}

export default async function Page() {
  'use cache'
  cacheLife('max')

  return (
    <>
      <CachedContent />
      <Suspense fallback={<PricingSkeleton />}>
        <DynamicUserContent />
      </Suspense>
    </>
  )
}
```

## Notes
- `cacheLife('max')` = longest possible cache duration
- `generateStaticParams` already handles build-time generation for dynamic routes
- Blocks page already has `"use cache"` - verify it has `cacheLife('max')`
