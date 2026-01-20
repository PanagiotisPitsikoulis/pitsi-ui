# Performance Optimizations

This document catalogs all performance optimizations implemented in the pitsi-ui codebase.

## Table of Contents

- [Build Optimizations](#build-optimizations)
- [Next.js Optimizations](#nextjs-optimizations)
- [React Component Optimizations](#react-component-optimizations)
- [Code Splitting & Lazy Loading](#code-splitting--lazy-loading)
- [Data Caching](#data-caching)
- [Font Optimizations](#font-optimizations)
- [Image Optimization](#image-optimization)
- [Turbopack & Build Cache](#turbopack--build-cache)

---

## Build Optimizations

### Webpack Development Optimizations

**File:** `apps/v4/next.config.mjs` (lines 130-140)

```js
if (dev && !isServer) {
  config.optimization = {
    removeAvailableModules: false,  // Faster HMR
    removeEmptyChunks: false,       // Faster incremental builds
    splitChunks: false,             // Disabled in dev for speed
  }
}
```

These optimizations reduce dev server rebuild times by disabling unnecessary processing during development.

### TypeScript Incremental Compilation

**File:** `apps/v4/tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "incremental": true,
    "jsx": "react-jsx"
  }
}
```

- `incremental: true` - Reuses compilation info between builds
- `react-jsx` - Uses automatic JSX runtime (smaller bundle)

---

## Next.js Optimizations

### Cache Components Mode (Next.js 16+)

**File:** `apps/v4/next.config.mjs`

```js
experimental: {
  cacheComponents: true,
}
```

Enables the new Cache Components architecture for improved caching strategy.

### Server Components HMR Cache

```js
experimental: {
  serverComponentsHmrCache: true,
}
```

Caches Server Components during Hot Module Replacement for faster dev rebuilds.

### Turbopack File System Cache

```js
experimental: {
  turbopackFileSystemCacheForDev: true,
}
```

Enables persistent file system cache for Turbopack in development.

### Optimize Server React

```js
experimental: {
  optimizeServerReact: true,
}
```

Enables React server rendering optimizations.

### Package Import Optimization

```js
experimental: {
  optimizePackageImports: [
    // Icon libraries
    "@radix-ui/react-icons",
    "@tabler/icons-react",
    "lucide-react",

    // Radix UI components (27 packages)
    "@radix-ui/react-accordion",
    "@radix-ui/react-dialog",
    // ... etc

    // Charts & utilities
    "recharts",
    "zod",
    "date-fns",

    // State management
    "zustand",
    "@tanstack/react-table",
  ],
}
```

Tree-shakes these packages for smaller bundles. Particularly important for icon libraries which can be large.

---

## React Component Optimizations

### React.memo Usage

Prevents unnecessary re-renders for pure components:

| File | Component | Purpose |
|------|-----------|---------|
| `components/documentation/components-list-paginated.tsx:45` | `ComponentPreviewContent` | Memoizes component preview rendering |
| `registry/new-york-v4/lib/dynamic-icon.tsx:64` | `DynamicIcon` | Memoizes icon rendering |
| `components/tools/inspector/inspector-overlay.tsx` | Inspector overlay | Performance-critical overlay |

### useMemo Usage (58+ files)

Used for expensive computations:

```tsx
// Example: Memoizing filtered/sorted lists
const filteredComponents = useMemo(() => {
  return components.filter(c => c.category === selected)
}, [components, selected])
```

Common use cases:
- Filtering large arrays
- Complex calculations
- Derived state

### useCallback Usage (30+ files)

**File:** `components/tools/hooks/use-presets.ts` (lines 31-56)

```tsx
const applyPreset = useCallback((preset: Preset) => {
  // Apply preset logic
}, [dependencies])

const randomize = useCallback(() => {
  // Randomization logic
}, [dependencies])
```

Used for:
- Event handlers passed to child components
- Functions used in useEffect dependencies
- Callback props

### Debouncing

**File:** `components/tools/inspector/use-inspector.ts`

```tsx
// Custom debounce implementation
const debounce = (fn: Function, delay: number) => {
  let timeoutId: NodeJS.Timeout
  return (...args: any[]) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn(...args), delay)
  }
}

// Usage with 20ms delay for mouse events
const debouncedInspectorUpdate = useMemo(
  () => debounce(updateInspectorState, 20),
  [updateInspectorState]
)
```

Reduces function call frequency for high-frequency events like mouse movement.

### forwardRef Optimization

**Files:** `app/(app)/(marketing)/_bento_animations/*.tsx`

```tsx
const Circle = forwardRef<HTMLDivElement, CircleProps>((props, ref) => (
  <div ref={ref} {...props} />
))
```

Enables ref forwarding without wrapper divs.

---

## Code Splitting & Lazy Loading

### React.lazy for Registry Components

**File:** `registry/__index__.tsx`

```tsx
// 100+ lazy-loaded component exports
export const Accordion = React.lazy(() => import("./accordion"))
export const Button = React.lazy(() => import("./button"))
export const Dialog = React.lazy(() => import("./dialog"))
// ... etc
```

Components are only loaded when rendered.

### next/dynamic for Tool Components

**File:** `app/(app)/(marketing)/(features)/tools-information/_blocks/tool-showcase-section.tsx`

```tsx
const ThemeGeneratorPageClient = lazy(
  () => import("@/app/(app)/(tools)/theme-generator/page.client")
)
const SpacingGeneratorClient = lazy(
  () => import("@/app/(app)/(tools)/spacing-generator/page.client")
)
// ... 5 lazy-loaded tool components
```

Heavy tool components load on demand.

### Dynamic Icon Loading

**File:** `registry/new-york-v4/lib/dynamic-icon.tsx`

```tsx
// In-memory icon cache
const icons_components: Record<string, ComponentType<LucideProps>> = {}

// Dynamic import with caching
const IconComponent = dynamic(
  () => import("lucide-react").then((mod) => {
    const Icon = mod[iconName as keyof typeof mod]
    icons_components[iconName] = Icon as ComponentType<LucideProps>
    return Icon
  }),
  { ssr: true }
)
```

Icons are:
- Dynamically imported (tree-shaking)
- Cached in memory (no re-imports)
- SSR-enabled

### Suspense Boundaries

```tsx
// Tool showcase section
<Suspense fallback={<ToolShowcaseSkeleton />}>
  <ThemeGeneratorPageClient />
</Suspense>

// Home page pricing
<Suspense fallback={<PricingCardsSection user={null} />}>
  <DynamicPricingSection />
</Suspense>
```

Enables streaming and prevents blocking on slow components.

---

## Data Caching

### "use cache" Directive (Next.js 16+)

Applied to 19+ pages for long-lived caching:

```tsx
// app/(app)/(content)/docs/[[...slug]]/page.tsx
"use cache"
import { cacheLife } from "next/cache"

export default async function Page() {
  cacheLife("max")  // Maximum cache duration
  // Page content
}
```

**Pages using cache directive:**
- All documentation pages (`/docs/**`)
- Blog pages (`/blog/**`)
- Block pages (`/blocks/**`, `/block/**`)
- Static pages (`/privacy`, `/terms`)
- View pages (`/view/**`)
- Changelog and roadmap

### generateStaticParams

Pre-generates static paths at build time:

```tsx
// app/(app)/(content)/docs/[[...slug]]/page.tsx
export async function generateStaticParams() {
  return docs.getPages().map((page) => ({
    slug: page.slugs,
  }))
}
```

**Locations (10 files):**
- `/docs/[[...slug]]`
- `/docs/components/[component]/@content`
- `/docs/animations/[animation]/@content`
- `/blog/[[...slug]]`
- `/blocks/[[...slug]]`
- `/blocks/[category]`
- `/block/[category]/[blockName]/layout.tsx`
- `/view/[style]/[name]`
- `/llm/[[...slug]]/route.ts`

### React.cache for Request Deduplication

**File:** `lib/server/user.ts`

```tsx
import { cache } from "react"

export const getSession = cache(async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  })
  return session
})

export const getCurrentUser = cache(async () => {
  const session = await getSession()
  return session?.user ?? null
})
```

Deduplicates async calls within a single render.

### Component-Level Caching

```tsx
const getCachedRegistryItem = React.cache(async (name: string) => {
  return await getRegistryItem(name)
})

const getCachedFileTree = React.cache(async (files: FileTree) => {
  return buildFileTree(files)
})

const getCachedHighlightedFiles = React.cache(async (code: string) => {
  return await highlightCode(code)
})
```

Prevents re-fetching during same request.

---

## Font Optimizations

**File:** `lib/config/fonts.ts`

### next/font Configuration

```tsx
import { Inter, Poppins, Geist_Mono } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],  // Only load latin characters
  variable: "--font-inter",
})

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],  // Specific weights only
  subsets: ["latin"],
  variable: "--font-poppins",
})

const geistMono = Geist_Mono({
  weight: ["400"],  // Single weight
  subsets: ["latin"],
  variable: "--font-geist-mono",
})
```

**Font Optimization Techniques:**
- `subsets: ["latin"]` - Reduces font file size ~70%
- Specific `weight` arrays - Only loads needed weights
- CSS variables - Enables efficient font switching
- Font preloading built into next/font

### Font Presets (9 configurations)

Each preset loads only required fonts:
- **Default:** Inter + Geist Mono
- **Elegant:** Cormorant Garamond + DM Sans
- **Classic:** Playfair Display + Source Sans 3
- **Playful:** Space Grotesk + Nunito
- **Futuristic:** Orbitron + Rajdhani

---

## Image Optimization

### Remote Patterns Configuration

**File:** `apps/v4/next.config.mjs`

```js
images: {
  remotePatterns: [
    { hostname: "avatars.githubusercontent.com" },
    { hostname: "lh3.googleusercontent.com" },
    { hostname: "images.unsplash.com" },
    { hostname: "images.pexels.com" },
    { hostname: "avatar.vercel.sh" },
    { hostname: "tailark.com" },
    { hostname: "framerusercontent.com" },
    // ... 12 total domains
  ],
}
```

Enables Next.js Image optimization for external images.

### Next.js Image Component Usage (30+ files)

```tsx
import Image from "next/image"

<Image
  src={avatarUrl}
  alt="User avatar"
  width={40}
  height={40}
  // Automatic: WebP/AVIF, lazy loading, srcset
/>
```

Automatic optimizations:
- Format conversion (WebP/AVIF)
- Responsive srcset
- Lazy loading by default
- Blur placeholder support

---

## Turbopack & Build Cache

### Turbo.json Configuration

**File:** `turbo.json`

```json
{
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": [".next/**", "dist/**"]
    },
    "lint": { "cache": true },
    "lint:fix": { "cache": true },
    "format:check": { "cache": true },
    "format:write": { "cache": true },
    "typecheck": { "outputs": [] },
    "check": { "cache": true },
    "test": { "cache": true },
    "registry:build": {
      "cache": true,
      "outputs": ["public/r/**"]
    },
    "dev": {
      "cache": false,
      "persistent": true
    }
  }
}
```

**Cached Tasks:**
- Linting results
- Type checking
- Formatting checks
- Test results
- Registry builds

**Build Optimization:**
- `dependsOn: ["^build"]` - Parallel dependency builds
- Output caching for `.next/**` and `dist/**`

---

## Quick Reference

| Optimization | Impact | Files |
|--------------|--------|-------|
| Cache Components | Page caching | 19+ pages |
| React.lazy | Code splitting | 100+ components |
| useMemo/useCallback | Prevent re-renders | 88+ files |
| React.memo | Component memoization | 10+ components |
| generateStaticParams | Static generation | 10 routes |
| Font subsets | ~70% smaller fonts | 9 fonts |
| Package optimization | Smaller bundles | 27 packages |
| Turbo caching | Faster builds | All tasks |
| Debouncing | Reduced calls | Inspector, tools |
| Image optimization | Automatic compression | 30+ usages |
