# apps/v4 Directory Structure

> Complete file tree with explanations for every directory

## Root Structure

```
apps/v4/
├── app/                    # Next.js App Router (pages & routes)
├── components/             # Site-specific React components
├── content/                # MDX content (docs, blog)
├── hooks/                  # Site-specific React hooks
├── lib/                    # Utility functions & business logic
├── public/                 # Static assets & registry JSON
├── registry/               # Component registry source
├── scripts/                # Build & automation scripts
├── styles/                 # Global CSS styles
├── .env.example            # Environment variable template
├── components.json         # pitsi configuration
├── next.config.mjs         # Next.js configuration
├── package.json            # Dependencies
├── postcss.config.mjs      # PostCSS configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

---

## app/ - Next.js Routes

```
app/
├── (app)/                           # Main application routes
│   ├── layout.tsx                   # App layout (header, footer)
│   ├── not-found.tsx                # 404 page
│   ├── error.tsx                    # Error boundary
│   │
│   ├── @auth/                       # Parallel route for auth modals
│   │   ├── (.)signin/page.tsx       # Intercepted signin
│   │   ├── (.)signup/page.tsx       # Intercepted signup
│   │   └── default.tsx
│   │
│   ├── signin/                      # Full signin page
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── signup/                      # Full signup page
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── (content)/                   # Documentation content
│   │   ├── docs/                    # Component documentation
│   │   │   ├── layout.tsx
│   │   │   ├── [[...slug]]/         # MDX docs pages
│   │   │   │   └── page.tsx
│   │   │   ├── components/          # Component detail pages
│   │   │   │   └── [component]/
│   │   │   │       ├── layout.tsx
│   │   │   │       ├── @content/    # Main content
│   │   │   │       │   ├── page.tsx
│   │   │   │       │   └── default.tsx
│   │   │   │       └── @paywall/    # Pro paywall
│   │   │   │           ├── page.tsx
│   │   │   │           └── default.tsx
│   │   │   └── animations/          # Animation detail pages
│   │   │       └── [animation]/
│   │   │           └── (same structure)
│   │   │
│   │   ├── (blocks)/                # Blocks gallery
│   │   │   ├── _components/         # Block-specific components
│   │   │   ├── _block_components/   # Shared block components
│   │   │   ├── blocks/              # Main blocks listing
│   │   │   │   ├── [[...slug]]/
│   │   │   │   │   ├── layout.tsx
│   │   │   │   │   └── page.tsx
│   │   │   │   └── layout-client.tsx
│   │   │   └── block/               # Individual block pages
│   │   │       └── [category]/
│   │   │           └── [blockName]/
│   │   │               ├── @content/
│   │   │               └── @paywall/
│   │   │
│   │   ├── blog/                    # Blog posts
│   │   │   └── [[...slug]]/
│   │   │       └── page.tsx
│   │   │
│   │   └── roadmap/                 # Roadmap page
│   │       ├── layout.tsx
│   │       └── page.tsx
│   │
│   ├── (marketing)/                 # Marketing pages
│   │   ├── layout.tsx
│   │   ├── page.tsx                 # Landing page
│   │   ├── _components/             # Marketing components
│   │   ├── _blocks/                 # Marketing blocks
│   │   ├── _bento_animations/       # Bento animations
│   │   └── (features)/              # Feature pages
│   │       ├── design-purpose/
│   │       ├── tools-information/
│   │       └── content-features/
│   │
│   └── (tools)/                     # Design tools
│       ├── layout.tsx
│       └── tools/
│           ├── theme-generator/
│           ├── shadow-composer/
│           ├── spacing-generator/
│           ├── typography-composer/
│           ├── easing-composer/
│           └── template-builder/
│
├── (view)/                          # Isolated preview routes
│   ├── layout.tsx
│   ├── _components/
│   │   ├── theme-from-url.tsx
│   │   └── index.ts
│   └── view/
│       └── [style]/
│           └── [name]/
│               └── page.tsx
│
├── api/                             # API routes
│   ├── auth/
│   │   └── [...all]/
│   │       └── route.ts             # better-auth handler
│   ├── search/
│   │   └── route.ts                 # Search API
│   ├── stripe/
│   │   └── webhook/
│   │       └── route.ts             # Stripe webhooks
│   ├── team/
│   │   └── [id]/
│   │       └── route.ts             # Team management
│   └── open-in-editor/
│       └── route.ts                 # VS Code integration
│
├── dashboard/                       # User dashboard
│   ├── layout.tsx
│   ├── page.tsx
│   ├── api/
│   │   └── client.tsx
│   ├── security/
│   │   └── page.tsx
│   ├── appearance/
│   │   └── page.tsx
│   └── notifications/
│       └── page.tsx
│
├── llm/                             # LLM documentation
│   └── [[...slug]]/
│       └── route.ts                 # Serves llms.txt
│
├── og/                              # OG image generation
│   ├── geist-semibold-otf.json
│   ├── geist-regular-otf.json
│   └── geistmono-regular-otf.json
│
└── layout.tsx                       # Root layout
```

---

## components/ - Site Components

```
components/
├── ui/                    # Core UI components (site-specific)
├── layout/                # Layout components
│   ├── header.tsx
│   ├── footer.tsx
│   ├── sidebar.tsx
│   └── mobile-nav.tsx
├── docs/                  # Documentation components
│   ├── component-preview.tsx
│   ├── component-source.tsx
│   ├── installation.tsx
│   └── toc.tsx
├── blocks/                # Block-related components
│   ├── block-preview.tsx
│   ├── block-code.tsx
│   └── block-wrapper.tsx
├── marketing/             # Marketing components
│   ├── hero.tsx
│   └── testimonials.tsx
├── dashboard/             # Dashboard components
└── shared/                # Shared components
    ├── theme-toggle.tsx
    ├── search.tsx
    └── copy-button.tsx
```

---

## content/ - MDX Content

```
content/
├── docs/                  # Documentation MDX files
│   ├── index.mdx          # Docs home
│   ├── installation.mdx
│   ├── components/        # Component docs
│   │   ├── button.mdx
│   │   ├── dialog.mdx
│   │   └── ...
│   └── ...
└── blog/                  # Blog posts
    ├── index.mdx
    └── posts/
        ├── introducing-pitsi.mdx
        └── ...
```

---

## lib/ - Utilities

```
lib/
├── utils.ts                    # Core utilities (cn, etc.)
├── format.ts                   # Formatting functions
├── colors.ts                   # Color utilities
├── events.ts                   # Analytics events
├── llm.ts                      # LLM doc generation
├── local-storage.ts            # Local storage helpers
├── tailwind-colors.ts          # Tailwind color data
├── figma-export.ts             # Figma export utilities
│
├── registry.ts                 # Registry loading
├── registry-utils.ts           # Registry helpers
├── blocks.ts                   # Block utilities
├── blocks-storage.ts           # Block state
├── highlight-code.ts           # Code highlighting
│
├── source.ts                   # fumadocs source (deprecated)
│
├── blocks/                     # Block type definitions
│   ├── index.ts
│   ├── types.ts                # Common types
│   ├── hero.types.ts
│   ├── cta.types.ts
│   ├── features.types.ts
│   ├── pricing.types.ts
│   ├── testimonials.types.ts
│   ├── team.types.ts
│   ├── faq.types.ts
│   ├── footer.types.ts
│   ├── header.types.ts
│   ├── contact.types.ts
│   ├── blog.types.ts
│   ├── blog-post.types.ts
│   ├── gallery.types.ts
│   ├── logos.types.ts
│   ├── newsletter.types.ts
│   ├── products.types.ts
│   ├── stats.types.ts
│   ├── search.types.ts
│   └── application.types.ts
│
├── config/                     # Configuration
│   ├── index.ts                # Site config
│   ├── themes.ts               # Theme definitions
│   └── fonts.ts                # Font config
│
├── docs/                       # Documentation utilities
│   ├── index.ts
│   ├── source.ts               # fumadocs source
│   ├── highlight.ts            # Syntax highlighting
│   ├── llm.ts                  # LLM exports
│   └── rehype.ts               # Rehype plugins
│
├── blog/                       # Blog utilities
│   └── source.ts
│
├── changelog/                  # Changelog parsing
│   └── parser.ts
│
├── roadmap/                    # Roadmap parsing
│   └── parser.ts
│
├── icons/                      # Icon utilities
│   ├── index.ts
│   ├── logo.ts
│   └── icon-mapping.ts
│
├── og/                         # OG image utilities
│   └── fonts.ts
│
├── pages/                      # Page helpers
│   ├── blocks.ts
│   ├── docs.ts
│   └── view.ts
│
├── registry/                   # Registry utilities
│   └── index.ts
│
├── sitemap/                    # Sitemap generation
│   └── config.ts
│
├── server/                     # Server-side utilities
│   ├── auth.ts                 # Authentication
│   ├── stripe.ts               # Payments
│   ├── user.ts                 # User management
│   ├── team.ts                 # Team management
│   ├── api-keys.ts             # API key management
│   └── db/                     # Database
│       ├── index.ts            # Drizzle client
│       └── schema.ts           # Schema definitions
│
├── client/                     # Client-side utilities
│   └── auth.ts                 # Client auth
│
├── utils/                      # Additional utilities
│   ├── index.ts
│   ├── user.ts
│   └── safe-async.ts
│
└── tests/                      # Test utilities
    └── setup.ts
```

---

## registry/ - Component Registry

```
registry/
├── __index__.tsx               # Auto-generated lazy imports
├── __blocks__.json             # Block index
├── __blocks-metadata__.ts      # Pre-computed metadata
├── styles.ts                   # Style definitions
│
└── new-york-v4/                # Main style
    ├── registry.ts             # Main registry export
    │
    ├── ui/                     # UI components
    │   ├── _registry.ts        # UI registry definitions
    │   ├── accordion.tsx
    │   ├── alert.tsx
    │   ├── avatar.tsx
    │   ├── badge.tsx
    │   ├── button.tsx
    │   ├── calendar.tsx
    │   ├── card.tsx
    │   ├── checkbox.tsx
    │   ├── command.tsx
    │   ├── dialog.tsx
    │   ├── dropdown-menu.tsx
    │   ├── form.tsx
    │   ├── input.tsx
    │   ├── label.tsx
    │   ├── popover.tsx
    │   ├── scroll-area.tsx
    │   ├── select.tsx
    │   ├── separator.tsx
    │   ├── sheet.tsx
    │   ├── sidebar.tsx
    │   ├── skeleton.tsx
    │   ├── slider.tsx
    │   ├── switch.tsx
    │   ├── table.tsx
    │   ├── tabs.tsx
    │   ├── textarea.tsx
    │   ├── toast.tsx
    │   ├── toggle.tsx
    │   ├── tooltip.tsx
    │   └── ... (50+ components)
    │
    ├── blocks/                 # Block components
    │   ├── _registry.ts        # Auto-generated
    │   ├── _template-configs.ts
    │   │
    │   ├── hero/
    │   │   ├── hero-plants-1.tsx
    │   │   ├── hero-plants-1.config.ts
    │   │   ├── hero-fitness-1.tsx
    │   │   └── ...
    │   │
    │   ├── cta/
    │   ├── features/
    │   ├── pricing/
    │   ├── testimonials/
    │   ├── team/
    │   ├── faq/
    │   ├── footer/
    │   ├── header/
    │   ├── contact/
    │   ├── blog/
    │   ├── blog-post/
    │   ├── gallery/
    │   ├── logos/
    │   ├── newsletter/
    │   ├── products/
    │   ├── stats/
    │   └── application/
    │
    ├── hooks/                  # React hooks
    │   ├── _registry.ts
    │   ├── use-media-query.ts
    │   ├── use-mobile.ts
    │   ├── use-toast.ts
    │   └── ...
    │
    ├── lib/                    # Utility functions
    │   ├── _registry.ts
    │   ├── utils.ts
    │   └── ...
    │
    ├── examples/               # Example implementations
    │   ├── _registry.ts
    │   ├── button-demo.tsx
    │   ├── card-with-form.tsx
    │   └── ...
    │
    ├── animations/             # Animation components
    │   ├── _registry.ts
    │   └── ...
    │
    └── internal/               # Internal utilities
        ├── _registry.ts
        └── ...
```

---

## scripts/ - Build Scripts

```
scripts/
├── build-registry.mts          # Main registry build
├── capture-blocks.mts          # Screenshot capture
├── create.mts                  # Component scaffolding
├── readiness.mts               # Component readiness
├── validate-registries.mts     # Registry validation
└── purge.sh                    # Cleanup script
```

---

## public/ - Static Assets

```
public/
├── r/                          # Registry API (built)
│   ├── styles.json
│   ├── index.json
│   └── styles/
│       └── new-york-v4/
│           ├── registry.json
│           ├── button.json
│           ├── dialog.json
│           └── ...
│
├── images/                     # Static images
│   ├── blocks/                 # Block screenshots
│   └── ...
│
├── schema/                     # JSON schemas
│   └── registry-item.json
│
├── fonts/                      # Custom fonts
├── favicon.ico
├── robots.txt
└── sitemap.xml
```

---

## Path Aliases

Defined in `tsconfig.json`:

| Alias | Path |
|-------|------|
| `@/*` | `./` (root) |
| `@/components/*` | `./components/*` |
| `@/lib/*` | `./lib/*` |
| `@/hooks/*` | `./hooks/*` |
| `@/registry/*` | `./registry/*` |
| `@/styles/*` | `./styles/*` |
| `@/content/*` | `./content/*` |

---

## Key Configuration Files

### next.config.mjs

```javascript
const nextConfig = {
  experimental: {
    mdxRs: true,
  },
  images: {
    domains: ["images.unsplash.com"],
  },
  // ... more config
}
```

### tailwind.config.ts

```typescript
export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./registry/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      // CSS variables for theming
    },
  },
  plugins: [tailwindAnimate],
}
```

### components.json

```json
{
  "$schema": "https://pitsiui.com/schema.json",
  "style": "new-york",
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "app/globals.css",
    "baseColor": "slate",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/registry/new-york-v4/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
```
