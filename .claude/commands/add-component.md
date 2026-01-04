# Adding a New UI Component

## Overview

UI components are reusable primitives (buttons, cards, dialogs, etc.) that blocks and applications compose together. They live in the `ui/` directory and are distributed via the CLI.

## File Locations

- **Component**: `apps/v4/registry/new-york-v4/ui/{component-name}.tsx`
- **Registry**: `apps/v4/registry/new-york-v4/ui/_registry.ts`
- **Example**: `apps/v4/registry/new-york-v4/examples/{component-name}-demo.tsx`
- **Examples Registry**: `apps/v4/registry/new-york-v4/examples/_registry.ts`
- **Documentation**: `apps/v4/content/docs/components/{component-name}.mdx`

## Step-by-Step Process

### 1. Create the Component

Create `apps/v4/registry/new-york-v4/ui/{name}.tsx`:

```tsx
"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const componentVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        outline: "border border-input bg-background",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface MyComponentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof componentVariants> {}

const MyComponent = React.forwardRef<HTMLDivElement, MyComponentProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(componentVariants({ variant, size, className }))}
        {...props}
      />
    )
  }
)
MyComponent.displayName = "MyComponent"

export { MyComponent, componentVariants }
```

### 2. Add Component Registry Entry

Add to `apps/v4/registry/new-york-v4/ui/_registry.ts` (alphabetical order):

```typescript
{
  name: "my-component",
  type: "registry:ui",
  dependencies: ["class-variance-authority"],  // npm packages
  registryDependencies: ["utils"],  // pitsi dependencies
  files: [{ path: "ui/my-component.tsx", type: "registry:ui" }],
  tier: "free",
  categories: ["core-components"],
  readiness: "beta",
},
```

### 3. Create Example Demo

Create `apps/v4/registry/new-york-v4/examples/{name}-demo.tsx`:

```tsx
import { MyComponent } from "@/registry/new-york-v4/ui/my-component"

export default function MyComponentDemo() {
  return (
    <div className="flex gap-4">
      <MyComponent>Default</MyComponent>
      <MyComponent variant="secondary">Secondary</MyComponent>
      <MyComponent variant="outline">Outline</MyComponent>
    </div>
  )
}
```

### 4. Add Example Registry Entry

Add to `apps/v4/registry/new-york-v4/examples/_registry.ts` (alphabetical order):

```typescript
{
  name: "my-component-demo",
  type: "registry:example",
  registryDependencies: ["my-component"],
  files: [{ path: "examples/my-component-demo.tsx", type: "registry:example" }],
  tier: "free",
  categories: ["core-components"],
  readiness: "beta",
},
```

### 5. Create Documentation

Create `apps/v4/content/docs/components/{name}.mdx`:

```mdx
---
title: My Component
description: A versatile component for displaying content with variants.
featured: false
component: true
---

<ComponentPreview name="my-component-demo" description="Default example" />

## Installation

<CodeTabs>
  <TabsList>
    <TabsTrigger value="cli">CLI</TabsTrigger>
    <TabsTrigger value="manual">Manual</TabsTrigger>
  </TabsList>
  <TabsContent value="cli">

```bash
npx pitsi add my-component
```

  </TabsContent>
  <TabsContent value="manual">

<Steps>
  <Step>Copy the component source:</Step>
</Steps>

<ComponentSource name="my-component" title="components/ui/my-component.tsx" />

  </TabsContent>
</CodeTabs>

## Usage

```tsx
import { MyComponent } from "@/components/ui/my-component"

export default function Example() {
  return <MyComponent variant="secondary">Hello</MyComponent>
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"default" \| "secondary" \| "outline"` | `"default"` | Visual style |
| `size` | `"default" \| "sm" \| "lg"` | `"default"` | Size variant |

## Examples

### Secondary Variant

<ComponentPreview name="my-component-secondary" />

### With Icon

<ComponentPreview name="my-component-with-icon" />
```

## Registry Entry Fields

| Field | Required | Description |
|-------|----------|-------------|
| `name` | Yes | Component name (kebab-case) |
| `type` | Yes | `"registry:ui"` for components |
| `dependencies` | No | npm packages to install |
| `devDependencies` | No | npm dev dependencies |
| `registryDependencies` | No | Other pitsi components needed |
| `files` | Yes | Array of file paths |
| `tier` | No | `"free"` or `"pro"` |
| `categories` | No | Array of category slugs |
| `readiness` | No | `"alpha"`, `"beta"`, `"production"` |
| `tailwind` | No | Tailwind config extensions |
| `cssVars` | No | CSS variables to add |

## Tailwind Config Extension

If your component needs custom Tailwind config:

```typescript
{
  name: "my-component",
  type: "registry:ui",
  // ... other fields
  tailwind: {
    config: {
      theme: {
        extend: {
          keyframes: {
            "fade-in": {
              from: { opacity: "0" },
              to: { opacity: "1" },
            },
          },
          animation: {
            "fade-in": "fade-in 0.3s ease-out",
          },
        },
      },
    },
  },
}
```

## Build & Verify

```bash
# Build registry
bun run registry:build

# Start dev server
bun run v4:dev

# View component: http://localhost:4000/docs/components/{name}
# View example: http://localhost:4000/view/new-york-v4/{name}-demo

# Test CLI installation
cd /tmp && npx pitsi add my-component
```

## Checklist

- [ ] Component file created with proper TypeScript types
- [ ] Uses `"use client"` if interactive
- [ ] Exports both component and variants (if using CVA)
- [ ] Uses `React.forwardRef` for DOM element refs
- [ ] Sets `displayName` for DevTools
- [ ] Imports use `@/` path aliases
- [ ] Registry entry in alphabetical order
- [ ] Example demo created
- [ ] Example registry entry added
- [ ] MDX documentation created
- [ ] All dependencies listed
- [ ] Registry builds without errors
- [ ] Component renders correctly
