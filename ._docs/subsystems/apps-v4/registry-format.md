# Registry Format Reference

> Complete schema documentation for registry items

## Registry Item Schema

```typescript
interface RegistryItem {
  // Identity
  $schema?: string
  extends?: string
  name: string                           // Required: unique identifier
  type: RegistryItemType                 // Required: component type
  title?: string                         // Display name
  author?: string                        // Author (min 2 chars)
  description?: string                   // Short description

  // Dependencies
  dependencies?: string[]                // npm packages
  devDependencies?: string[]             // npm dev packages
  registryDependencies?: string[]        // Other registry items

  // Files
  files?: RegistryItemFile[]             // Component files

  // Configuration
  tailwind?: RegistryItemTailwind        // Tailwind config to merge
  cssVars?: RegistryItemCssVars          // CSS variables
  css?: Record<string, any>              // Raw CSS rules
  envVars?: Record<string, string>       // Environment variables

  // Metadata
  meta?: Record<string, any>             // Custom metadata
  docs?: string                          // MDX documentation
  categories?: string[]                  // For organization
  tier?: "free" | "pro"                  // Access tier
  readiness?: "alpha" | "beta" | "production"  // Default: alpha
  poweredBy?: PoweredBy[]                // Attribution

  // Block-specific
  blockConfig?: BlockConfig              // Block configuration
}
```

---

## Type: `RegistryItemType`

```typescript
type RegistryItemType =
  // User-installable types
  | "registry:lib"        // Utility functions
  | "registry:block"      // Page sections
  | "registry:component"  // Generic components
  | "registry:ui"         // UI components
  | "registry:hook"       // React hooks
  | "registry:page"       // Full pages
  | "registry:file"       // Raw files
  | "registry:theme"      // Theme definitions
  | "registry:style"      // Style variants
  | "registry:item"       // Generic item

  // Internal types
  | "registry:example"    // Example implementations
  | "registry:internal"   // Internal utilities
```

### Type Usage Guide

| Type | Use For | Example |
|------|---------|---------|
| `registry:ui` | Fundamental UI primitives | Button, Input, Dialog |
| `registry:block` | Larger composed sections | Hero, CTA, Features |
| `registry:hook` | Custom React hooks | useMediaQuery, useToast |
| `registry:lib` | Utility functions | cn(), formatDate() |
| `registry:page` | Full page templates | Dashboard page |
| `registry:theme` | Complete theme definitions | Dark theme |
| `registry:style` | Style variant definitions | Compact style |
| `registry:file` | Configuration files | tsconfig.json |
| `registry:example` | Demo implementations | button-demo |
| `registry:internal` | Internal-only utilities | Not installable |

---

## Type: `RegistryItemFile`

```typescript
interface RegistryItemFile {
  path: string              // Source path in registry
  content?: string          // Optional inline content
  type: RegistryItemType    // File type
  target?: string           // Override install path (required for file/page)
}
```

### Path Resolution

The CLI maps file types to installation paths using `components.json` aliases:

| File Type | Target Alias | Default Path |
|-----------|--------------|--------------|
| `registry:ui` | `ui` | `@/components/ui/` |
| `registry:component` | `components` | `@/components/` |
| `registry:hook` | `hooks` | `@/hooks/` |
| `registry:lib` | `lib` | `@/lib/` |
| `registry:file` | (uses target) | (specified) |
| `registry:page` | (uses target) | (specified) |

### Example: Multi-file Component

```typescript
{
  name: "data-table",
  type: "registry:ui",
  files: [
    { path: "ui/data-table/data-table.tsx", type: "registry:ui" },
    { path: "ui/data-table/columns.tsx", type: "registry:ui" },
    { path: "ui/data-table/toolbar.tsx", type: "registry:ui" },
  ],
}
```

### Example: File with Target

```typescript
{
  name: "tailwind-config",
  type: "registry:file",
  files: [
    {
      path: "files/tailwind.config.ts",
      type: "registry:file",
      target: "tailwind.config.ts"  // Install at project root
    }
  ],
}
```

---

## Type: `RegistryItemTailwind`

```typescript
interface RegistryItemTailwind {
  config?: {
    content?: string[]           // Content paths to add
    theme?: Record<string, any>  // Theme extensions
    plugins?: string[]           // Plugin imports
  }
}
```

### Example: Keyframes Animation

```typescript
{
  name: "accordion",
  tailwind: {
    config: {
      theme: {
        extend: {
          keyframes: {
            "accordion-down": {
              from: { height: "0" },
              to: { height: "var(--radix-accordion-content-height)" }
            },
            "accordion-up": {
              from: { height: "var(--radix-accordion-content-height)" },
              to: { height: "0" }
            }
          },
          animation: {
            "accordion-down": "accordion-down 0.2s ease-out",
            "accordion-up": "accordion-up 0.2s ease-out"
          }
        }
      }
    }
  }
}
```

---

## Type: `RegistryItemCssVars`

```typescript
interface RegistryItemCssVars {
  theme?: Record<string, string>  // Base theme variables
  light?: Record<string, string>  // Light mode variables
  dark?: Record<string, string>   // Dark mode variables
}
```

### Example: Sidebar Variables

```typescript
{
  name: "sidebar",
  cssVars: {
    light: {
      "--sidebar-background": "0 0% 98%",
      "--sidebar-foreground": "240 5.3% 26.1%",
      "--sidebar-primary": "240 5.9% 10%",
      "--sidebar-primary-foreground": "0 0% 98%",
      "--sidebar-accent": "240 4.8% 95.9%",
      "--sidebar-accent-foreground": "240 5.9% 10%",
      "--sidebar-border": "220 13% 91%",
      "--sidebar-ring": "217.2 91.2% 59.8%"
    },
    dark: {
      "--sidebar-background": "240 5.9% 10%",
      "--sidebar-foreground": "240 4.8% 95.9%",
      "--sidebar-primary": "224.3 76.3% 48%",
      "--sidebar-primary-foreground": "0 0% 100%",
      "--sidebar-accent": "240 3.7% 15.9%",
      "--sidebar-accent-foreground": "240 4.8% 95.9%",
      "--sidebar-border": "240 3.7% 15.9%",
      "--sidebar-ring": "217.2 91.2% 59.8%"
    }
  }
}
```

---

## Type: `BlockConfig`

```typescript
interface BlockConfig {
  template: string              // Template identifier (plants, fitness, etc.)
  blockType: string             // Block category (hero, cta, features, etc.)
  order: number                 // Position in template (lower = earlier)
  palette: string               // Color palette name
  typography: string            // Typography preset name
  tint?: "base" | "tinted" | "deep"  // Color intensity
  forceLight?: boolean          // Force light mode
  forceDark?: boolean           // Force dark mode
}
```

### Example: Block with Config

```typescript
{
  name: "hero-plants-1",
  type: "registry:block",
  description: "Hero section for plant shop",
  categories: ["hero"],
  readiness: "production",
  blockConfig: {
    template: "plants",
    blockType: "hero",
    order: 1,
    palette: "sage",
    typography: "elegant",
    tint: "base"
  },
  files: [
    { path: "blocks/hero/hero-plants-1.tsx", type: "registry:block" }
  ]
}
```

---

## Type: `PoweredBy`

```typescript
interface PoweredBy {
  name: string      // Technology name
  url?: string      // Optional URL
}
```

### Example

```typescript
{
  name: "chart",
  poweredBy: [
    { name: "Recharts", url: "https://recharts.org" },
    { name: "Tailwind CSS" }
  ]
}
```

---

## Readiness Levels

| Level | Visibility | Meaning |
|-------|------------|---------|
| `alpha` | Hidden by default | Experimental, may change significantly |
| `beta` | Visible | Feature complete, may have bugs |
| `production` | Visible | Stable, fully supported |

Alpha items can be shown with `HIDE_ALPHA_ITEMS=false`.

---

## Categories

Common categories used for organization:

| Category | Components |
|----------|------------|
| `core-components` | Button, Input, Label |
| `display` | Card, Avatar, Badge |
| `overlay` | Dialog, Popover, Tooltip |
| `forms` | Form, Checkbox, Radio |
| `navigation` | Tabs, Breadcrumb, Menu |
| `data-display` | Table, List, Tree |
| `feedback` | Toast, Alert, Progress |
| `layout` | Separator, Spacer, Grid |

For blocks:
| Category | Blocks |
|----------|--------|
| `hero` | Hero sections |
| `cta` | Call to action |
| `features` | Feature grids |
| `pricing` | Pricing tables |
| `testimonials` | Reviews |
| `team` | Team members |
| `faq` | FAQ sections |
| `footer` | Footers |
| `header` | Headers |
| `contact` | Contact forms |
| `blog` | Blog layouts |
| `gallery` | Image galleries |

---

## Complete Example

```typescript
{
  name: "data-table",
  type: "registry:ui",
  title: "Data Table",
  description: "A powerful data table with sorting, filtering, and pagination",
  author: "pitsi",

  dependencies: [
    "@tanstack/react-table"
  ],
  devDependencies: [
    "@types/react-table"
  ],
  registryDependencies: [
    "button",
    "input",
    "dropdown-menu",
    "checkbox"
  ],

  files: [
    { path: "ui/data-table/data-table.tsx", type: "registry:ui" },
    { path: "ui/data-table/columns.tsx", type: "registry:ui" },
    { path: "ui/data-table/toolbar.tsx", type: "registry:ui" },
    { path: "ui/data-table/pagination.tsx", type: "registry:ui" }
  ],

  tailwind: {
    config: {
      theme: {
        extend: {
          // Custom theme extensions
        }
      }
    }
  },

  cssVars: {
    light: {
      "--table-header": "0 0% 97%"
    },
    dark: {
      "--table-header": "0 0% 10%"
    }
  },

  categories: ["data-display", "tables"],
  tier: "free",
  readiness: "production",

  poweredBy: [
    { name: "TanStack Table", url: "https://tanstack.com/table" }
  ],

  meta: {
    docsUrl: "/docs/components/data-table"
  }
}
```
