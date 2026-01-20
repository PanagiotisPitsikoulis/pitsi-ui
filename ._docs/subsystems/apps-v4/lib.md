# Lib Utilities Reference

> Documentation for all utilities in apps/v4/lib/

## Core Utilities

### `utils.ts`

The most commonly used utility.

```typescript
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Merge Tailwind classes with clsx for conditional classes
 * @example cn("px-4", isActive && "bg-primary", className)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

### `format.ts`

Formatting utilities for dates, numbers, and strings.

```typescript
/**
 * Format a date in a human-readable way
 */
export function formatDate(date: Date | string): string

/**
 * Format a number with thousands separators
 */
export function formatNumber(num: number): string

/**
 * Format bytes into human-readable size
 */
export function formatBytes(bytes: number): string

/**
 * Truncate text with ellipsis
 */
export function truncate(str: string, length: number): string
```

### `colors.ts`

Color manipulation utilities.

```typescript
/**
 * Convert hex color to HSL
 */
export function hexToHsl(hex: string): { h: number; s: number; l: number }

/**
 * Convert HSL to hex color
 */
export function hslToHex(h: number, s: number, l: number): string

/**
 * Lighten or darken a color
 */
export function adjustColor(hex: string, amount: number): string
```

---

## Registry Utilities

### `registry.ts`

Loading and accessing registry components.

```typescript
/**
 * Get a component from the registry by name
 */
export async function getRegistryComponent(name: string): Promise<RegistryItem>

/**
 * Get all components of a specific type
 */
export async function getRegistryByType(type: string): Promise<RegistryItem[]>

/**
 * Check if a component exists in the registry
 */
export async function registryHas(name: string): Promise<boolean>
```

### `registry-utils.ts`

Helper functions for working with registry data.

```typescript
/**
 * Get file content for a registry item
 */
export async function getRegistryFileContent(
  item: RegistryItem,
  filePath: string
): Promise<string>

/**
 * Resolve all dependencies for a registry item
 */
export async function resolveDependencies(name: string): Promise<string[]>
```

### `blocks.ts`

Block-specific utilities.

```typescript
/**
 * Get all blocks
 */
export async function getAllBlocks(): Promise<Block[]>

/**
 * Get blocks by category
 */
export async function getBlocksByCategory(category: string): Promise<Block[]>

/**
 * Get blocks by template
 */
export async function getBlocksByTemplate(template: string): Promise<Block[]>
```

### `blocks-storage.ts`

Client-side block state management.

```typescript
/**
 * Save block selection to local storage
 */
export function saveBlockSelection(templateId: string, blocks: string[]): void

/**
 * Load block selection from local storage
 */
export function loadBlockSelection(templateId: string): string[] | null

/**
 * Clear all saved block selections
 */
export function clearBlockSelections(): void
```

---

## Content Utilities

### `lib/docs/source.ts`

fumadocs source configuration.

```typescript
import { loader } from "fumadocs-core/source"
import { createMDXSource } from "fumadocs-mdx"

export const { getPage, getPages, pageTree } = loader({
  baseUrl: "/docs",
  source: createMDXSource(/*...*/),
})
```

### `lib/docs/highlight.ts`

Syntax highlighting utilities.

```typescript
/**
 * Highlight code with Shiki
 */
export async function highlightCode(
  code: string,
  lang: string
): Promise<string>

/**
 * Get supported languages
 */
export function getSupportedLanguages(): string[]
```

### `lib/blog/source.ts`

Blog content loading.

```typescript
/**
 * Get all blog posts
 */
export async function getAllPosts(): Promise<BlogPost[]>

/**
 * Get a single blog post by slug
 */
export async function getPost(slug: string): Promise<BlogPost | null>
```

### `lib/changelog/parser.ts`

Changelog parsing utilities.

```typescript
/**
 * Parse changelog markdown into structured data
 */
export function parseChangelog(markdown: string): ChangelogEntry[]

/**
 * Get latest changelog entries
 */
export async function getLatestChanges(count: number): Promise<ChangelogEntry[]>
```

---

## Server Utilities

### `lib/server/auth.ts`

Authentication configuration using better-auth.

```typescript
import { betterAuth } from "better-auth"

export const auth = betterAuth({
  database: drizzle,
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    },
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
})

// Session helpers
export async function getSession(): Promise<Session | null>
export async function requireSession(): Promise<Session>
```

### `lib/server/stripe.ts`

Stripe integration.

```typescript
import Stripe from "stripe"

export const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY)

/**
 * Create a checkout session
 */
export async function createCheckoutSession(
  userId: string,
  priceId: string
): Promise<Stripe.Checkout.Session>

/**
 * Get subscription status
 */
export async function getSubscriptionStatus(
  userId: string
): Promise<SubscriptionStatus>

/**
 * Cancel subscription
 */
export async function cancelSubscription(subscriptionId: string): Promise<void>
```

### `lib/server/user.ts`

User management utilities.

```typescript
/**
 * Get user by ID
 */
export async function getUserById(id: string): Promise<User | null>

/**
 * Get user by email
 */
export async function getUserByEmail(email: string): Promise<User | null>

/**
 * Update user profile
 */
export async function updateUser(
  id: string,
  data: Partial<User>
): Promise<User>

/**
 * Check if user has pro access
 */
export async function hasProAccess(userId: string): Promise<boolean>
```

### `lib/server/team.ts`

Team management utilities.

```typescript
/**
 * Create a new team
 */
export async function createTeam(
  ownerId: string,
  name: string
): Promise<Team>

/**
 * Get team members
 */
export async function getTeamMembers(teamId: string): Promise<TeamMember[]>

/**
 * Add member to team
 */
export async function addTeamMember(
  teamId: string,
  userId: string,
  role: TeamRole
): Promise<void>
```

### `lib/server/db/`

Database utilities using Drizzle.

```typescript
// lib/server/db/index.ts
import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"

const client = postgres(process.env.DATABASE_URL)
export const db = drizzle(client)
```

```typescript
// lib/server/db/schema.ts
import { pgTable, text, timestamp } from "drizzle-orm/pg-core"

export const users = pgTable("users", {
  id: text("id").primaryKey(),
  email: text("email").notNull().unique(),
  name: text("name"),
  createdAt: timestamp("created_at").defaultNow(),
})

export const subscriptions = pgTable("subscriptions", {
  id: text("id").primaryKey(),
  userId: text("user_id").references(() => users.id),
  stripeCustomerId: text("stripe_customer_id"),
  status: text("status"),
})
```

---

## Client Utilities

### `lib/client/auth.ts`

Client-side auth helpers.

```typescript
import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_APP_URL,
})

// Hooks
export function useSession(): { data: Session | null; isPending: boolean }
export function useUser(): { data: User | null; isPending: boolean }
```

### `lib/local-storage.ts`

Type-safe local storage wrapper.

```typescript
/**
 * Get value from local storage
 */
export function getLocalStorage<T>(key: string, defaultValue: T): T

/**
 * Set value in local storage
 */
export function setLocalStorage<T>(key: string, value: T): void

/**
 * Remove value from local storage
 */
export function removeLocalStorage(key: string): void
```

---

## Configuration

### `lib/config/index.ts`

Site configuration.

```typescript
export const siteConfig = {
  name: "pitsi/ui",
  description: "Beautiful components for your apps",
  url: "https://pitsiui.com",
  ogImage: "https://pitsiui.com/og.png",
  links: {
    github: "https://github.com/pitsi/ui",
    twitter: "https://twitter.com/pitsiui",
  },
}
```

### `lib/config/themes.ts`

Theme definitions.

```typescript
export const themes = {
  default: {
    name: "Default",
    cssVars: {
      light: { ... },
      dark: { ... },
    },
  },
  // ...more themes
}

export function getTheme(name: string): Theme
export function getThemeCssVars(name: string, mode: "light" | "dark"): CssVars
```

### `lib/config/fonts.ts`

Font configuration.

```typescript
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"

export const fontSans = GeistSans
export const fontMono = GeistMono
```

---

## Page Helpers

### `lib/pages/blocks.ts`

Block page utilities.

```typescript
/**
 * Get block page data
 */
export async function getBlockPageData(
  category: string,
  blockName: string
): Promise<BlockPageData>

/**
 * Get block source code
 */
export async function getBlockSource(blockName: string): Promise<string>
```

### `lib/pages/docs.ts`

Documentation page utilities.

```typescript
/**
 * Get component page data
 */
export async function getComponentPageData(
  componentName: string
): Promise<ComponentPageData>

/**
 * Get component examples
 */
export async function getComponentExamples(
  componentName: string
): Promise<Example[]>
```

### `lib/pages/view.ts`

View page utilities.

```typescript
/**
 * Get view page data
 */
export async function getViewPageData(
  style: string,
  name: string
): Promise<ViewPageData>
```

---

## Miscellaneous

### `lib/events.ts`

Analytics event tracking.

```typescript
/**
 * Track an event
 */
export function trackEvent(name: string, properties?: object): void

/**
 * Track page view
 */
export function trackPageView(url: string): void
```

### `lib/icons/`

Icon utilities.

```typescript
// lib/icons/index.ts
export { Icons } from "./logo"
export { getIconComponent } from "./icon-mapping"

// lib/icons/logo.ts
export const Icons = {
  logo: (props) => <svg {...props} />,
  // ...more icons
}

// lib/icons/icon-mapping.ts
export function getIconComponent(name: string): React.ComponentType | null
```

### `lib/llm.ts`

LLM documentation generation.

```typescript
/**
 * Generate LLM-friendly documentation
 */
export async function generateLlmDocs(): Promise<string>

/**
 * Get component documentation for LLMs
 */
export async function getComponentLlmDocs(name: string): Promise<string>
```

### `lib/sitemap/config.ts`

Sitemap generation.

```typescript
/**
 * Get all URLs for sitemap
 */
export async function getSitemapUrls(): Promise<SitemapUrl[]>

/**
 * Generate sitemap XML
 */
export async function generateSitemap(): Promise<string>
```

---

## Block Types

Located in `lib/blocks/*.types.ts`, these define TypeScript interfaces for block content.

### Common Pattern

```typescript
// lib/blocks/hero.types.ts
export interface HeroContent {
  headline: string
  subheadline?: string
  cta?: {
    text: string
    href: string
  }
  secondaryCta?: {
    text: string
    href: string
  }
  image?: {
    src: string
    alt: string
  }
}
```

### Available Block Types

| File | Interface | Purpose |
|------|-----------|---------|
| `hero.types.ts` | `HeroContent` | Hero sections |
| `cta.types.ts` | `CtaContent` | Call to action |
| `features.types.ts` | `FeaturesContent` | Feature grids |
| `pricing.types.ts` | `PricingContent` | Pricing tables |
| `testimonials.types.ts` | `TestimonialsContent` | Reviews |
| `team.types.ts` | `TeamContent` | Team members |
| `faq.types.ts` | `FaqContent` | FAQ sections |
| `footer.types.ts` | `FooterContent` | Footers |
| `header.types.ts` | `HeaderContent` | Headers |
| `contact.types.ts` | `ContactContent` | Contact forms |
| `blog.types.ts` | `BlogContent` | Blog layouts |
| `gallery.types.ts` | `GalleryContent` | Image galleries |
