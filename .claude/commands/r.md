# Registry Guide: Adding Components to pitsi-ui

This guide documents everything learned about adding components, examples, hooks, and other items to the pitsi-ui registry system. It includes step-by-step instructions, hard parts, and gotchas discovered during real implementation.

## Do all the imports like this inside the registry: @/registry/new-york-v4/lib/polymorphic NOT @/lib for example. You DONT have to do this for examples.

## Overview

The registry system is how pitsi-ui distributes components via CLI. When users run `pitsi add button`, the CLI:
1. Fetches component metadata from registry.json
2. Resolves dependencies (both npm and other registry items)
3. Downloads component files
4. Installs to configured paths in user's project

## Step-by-Step: Adding a New Component

### Step 1: Create the Component File

Create your component in the appropriate registry directory:
- UI components: `@/apps/v4/registry/new-york-v4/ui/your-component.tsx`
- Hooks: `@/apps/v4/registry/new-york-v4/hooks/use-your-hook.ts`
- Utilities: `@/apps/v4/registry/new-york-v4/lib/your-util.ts`
- Blocks: `@/apps/v4/registry/new-york-v4/blocks/your-block.tsx`

**CRITICAL**: Always use `@/` import paths, never relative paths. See `@/apps/v4/registry/new-york-v4/ui/typography.tsx` for correct import pattern.

### Step 2: Add Registry Entry

Add entry to the appropriate `_registry.ts` file:
- UI: `@/apps/v4/registry/new-york-v4/ui/_registry.ts`
- Hooks: `@/apps/v4/registry/new-york-v4/hooks/_registry.ts`
- Examples: `@/apps/v4/registry/new-york-v4/examples/_registry.ts`

**Example from `@/apps/v4/registry/new-york-v4/ui/_registry.ts` (lines 678-688)**:
```typescript
{
  name: "typography",
  type: "registry:ui",
  registryDependencies: ["polymorphic"],
  files: [
    {
      path: "ui/typography.tsx",
      type: "registry:ui",
    },
  ],
}
```

**HARD PART #1: File Paths**
- Paths in registry entries are ALWAYS relative to `registry/new-york-v4/`
- Use `ui/component.tsx`, NOT `/apps/v4/registry/new-york-v4/ui/component.tsx`
- Use `ui/component.tsx`, NOT `@/registry/new-york-v4/ui/component.tsx`
- The path is where the file will be installed in user's project, not where it lives in repo

### Step 3: Add Registry Dependencies

If your component depends on other registry items (not npm packages), add them:

```typescript
{
  name: "typography",
  registryDependencies: ["polymorphic"], // Other pitsi components
  dependencies: ["class-variance-authority"], // npm packages
}
```

**HARD PART #2: Dependency Cascading**
- The CLI automatically installs all `registryDependencies`
- This is recursive - if you depend on `button`, and `button` depends on `utils`, both install
- Missing a registryDependency means user's component won't work
- See `@/apps/v4/registry/new-york-v4/ui/_registry.ts` for dependency patterns

### Step 4: Create Examples

Create example files showing component usage:
- Location: `@/apps/v4/registry/new-york-v4/examples/`
- Naming: `{component-name}-{description}.tsx` (e.g., `typography-headings.tsx`)

**Example from `@/apps/v4/registry/new-york-v4/examples/typography-labels.tsx`**:
Shows each variant with inline usage description.

**CRITICAL**: Examples MUST be registered in `@/apps/v4/registry/new-york-v4/examples/_registry.ts`

### Step 5: Register Examples

Add ALL examples to `@/apps/v4/registry/new-york-v4/examples/_registry.ts`:

```typescript
{
  name: "typography-headings",
  type: "registry:example",
  registryDependencies: ["typography"],
  files: [{ path: "examples/typography-headings.tsx", type: "registry:example" }],
}
```

**HARD PART #3: Alphabetical Sorting**
- The examples registry has 2600+ entries
- MUST be in alphabetical order by name
- Find the correct insertion point manually
- See lines 2643-2719 in `@/apps/v4/registry/new-york-v4/examples/_registry.ts` for typography examples

**HARD PART #4: This Is Easy to Forget**
- You'll create example files and forget to register them
- Error: "Component {name} not found in registry"
- Solution: Always register immediately after creating example file

### Step 6: Create Documentation

Create MDX file in `@/apps/v4/content/docs/components/{component-name}.mdx`

**Follow the pattern from `@/apps/v4/content/docs/components/tooltip.mdx`**:
- Frontmatter with title, description, component: true
- Main demo with ComponentPreview
- Installation section with CodeTabs (CLI and Manual)
- Usage section with code examples
- Examples section with multiple ComponentPreview calls

**Example structure from `@/apps/v4/content/docs/components/typography.mdx`**:
```markdown
---
title: Typography
description: A flexible typography component...
component: true
---

<ComponentPreview name="typography-component-demo" description="..." />

## Installation
[CodeTabs with CLI and Manual]

## Usage
[Import and basic usage]

## Examples

### Headings
<ComponentPreview name="typography-headings" />
```

**HARD PART #5: ComponentPreview Names**
- Name MUST match the registry entry exactly (case-sensitive)
- If registry has `typography-headings`, use `name="typography-headings"`
- Typo in name = "Component not found" error

### Step 7: Build and Test

**Build Registry**:
```bash
pnpm registry:build
```

This generates:
- `@/apps/v4/__registry__/registry.json` - Metadata for CLI
- `@/apps/v4/__registry__/__index__.tsx` - Lazy-loaded exports for docs site

**Build Documentation** (optional but recommended):
```bash
pnpm v4:build
```

This verifies:
- All ComponentPreview references resolve
- MDX compiles without errors
- No broken links

**Test with CLI**:
```bash
cd /tmp/test-project
pnpm pitsi add your-component
```

## CSS Variables Integration

When creating components that use CSS custom properties:

**HARD PART #6: Variable Name Matching**
- CSS variable names in `@/apps/v4/styles/*.css` MUST match component usage EXACTLY
- Example from `@/apps/v4/styles/typography.css`: `--text-title-h1`
- Component must use: `fontSize: "var(--text-title-h1)"`
- NOT: `fontSize: "var(--font-size-title-h1)"` (this won't work)

**Example of correct pattern from `@/apps/v4/registry/new-york-v4/ui/typography.tsx`**:
```typescript
style: {
  fontSize: "var(--text-title-h1)",
  lineHeight: "var(--text-title-h1--line-height)",
  letterSpacing: "var(--text-title-h1--letter-spacing)",
  fontWeight: "var(--text-title-h1--font-weight)",
}
```

**Tailwind v4 @theme Restrictions**:
- Only CSS custom properties and @keyframes allowed inside @theme block
- NO @media queries inside @theme
- NO class selectors inside @theme
- See fix in `@/apps/v4/styles/shadows.css` for correct pattern

## Polymorphic Components

Components supporting the `as` prop need special type handling.

**See `@/apps/v4/registry/new-york-v4/lib/polymorphic.ts`** for type definitions.

**Example usage in `@/apps/v4/registry/new-york-v4/ui/typography.tsx`**:
```typescript
import type { PolymorphicComponentProps } from "../lib/polymorphic"

type TypographyProps<C extends React.ElementType = "p"> =
  PolymorphicComponentProps<C, { variant: TypographyVariant }>
```

**Example in documentation from `@/apps/v4/registry/new-york-v4/examples/typography-polymorphic.tsx`**:
Shows rendering paragraph as link, label as label element.

## Common Pitfalls & Solutions

### 1. Import Paths in Registry Files
L Wrong: `import { cn } from "../../lib/utils"`
 Correct: `import { cn } from "@/lib/utils"`

Registry files get copied to user's project. Relative paths break. Always use @/ aliases.

### 2. File Paths in Registry Entries
L Wrong: `path: "/apps/v4/registry/new-york-v4/ui/button.tsx"`
L Wrong: `path: "@/registry/new-york-v4/ui/button.tsx"`
 Correct: `path: "ui/button.tsx"`

Path is relative to `registry/new-york-v4/` directory.

### 3. Missing registryDependencies
If component uses other registry items (utils, polymorphic, etc.), add to registryDependencies.

Example: Typography uses polymorphic types � must have `registryDependencies: ["polymorphic"]`

### 4. Forgetting to Register Examples
Created `typography-headings.tsx` but forgot to add to `examples/_registry.ts`?
Result: "Component typography-headings not found in registry"

### 5. CSS Variable Typos
Component renders but styling is wrong? Check variable names match exactly between CSS and component.

### 6. Alphabetical Order in Registry
Adding to wrong spot in examples registry breaks builds. Count carefully or use editor search.

### 7. ComponentPreview Name Mismatches
Docs reference `<ComponentPreview name="typography-heading" />` but registry has `typography-headings`?
Result: Component not found error.

**HARD PART #7: Misleading Lint Errors**
- TypeScript may show errors in registry files that aren't real
- If registry builds successfully, ignore IDE errors
- The build process validates schema, that's the source of truth

## Quick Checklist

Adding a new component? Check these:

- [ ] Component file created in correct registry directory
- [ ] Uses @/ import paths (not relative)
- [ ] Added to appropriate _registry.ts file
- [ ] File path in registry is relative to new-york-v4/
- [ ] registryDependencies includes all pitsi components used
- [ ] npm dependencies listed separately
- [ ] Example files created
- [ ] Examples registered in examples/_registry.ts (alphabetical!)
- [ ] Documentation created following tooltip.mdx pattern
- [ ] ComponentPreview names match registry names exactly
- [ ] CSS variables (if used) match between CSS and component
- [ ] Registry built: `pnpm registry:build`
- [ ] Tested with CLI: `pitsi add your-component`

## Files to Reference

**Registry structure**: `@/apps/v4/registry/new-york-v4/`
**UI components**: `@/apps/v4/registry/new-york-v4/ui/`
**UI registry**: `@/apps/v4/registry/new-york-v4/ui/_registry.ts`
**Examples**: `@/apps/v4/registry/new-york-v4/examples/`
**Examples registry**: `@/apps/v4/registry/new-york-v4/examples/_registry.ts`
**Documentation**: `@/apps/v4/content/docs/components/`
**CSS variables**: `@/apps/v4/styles/`

**Good examples to study**:
- Complete component: Typography (`@/apps/v4/registry/new-york-v4/ui/typography.tsx`)
- Registry entry: See typography in `@/apps/v4/registry/new-york-v4/ui/_registry.ts` (lines 678-688)
- Example pattern: `@/apps/v4/registry/new-york-v4/examples/typography-labels.tsx`
- Documentation pattern: `@/apps/v4/content/docs/components/tooltip.mdx`
- CSS variables: `@/apps/v4/styles/typography.css`
- Polymorphic types: `@/apps/v4/registry/new-york-v4/lib/polymorphic.ts`

## Real Component Examples

Here are 3 examples from the actual registry showing different patterns. Study these to understand how components are structured.

### Example 1: Button - Simple Component

**Pattern**: Basic component with single npm dependency, multiple variants using CVA (class-variance-authority).

**Component file**: `@/apps/v4/registry/new-york-v4/ui/button.tsx`
- Uses `@radix-ui/react-slot` for polymorphic rendering
- Uses `class-variance-authority` (CVA) for variant styles
- Import pattern: `import { cn } from "@/lib/utils"`

**Registry entry**: `@/apps/v4/registry/new-york-v4/ui/_registry.ts` (line 104)
```typescript
{
  name: "button",
  type: "registry:ui",
  dependencies: ["@radix-ui/react-slot"],
  files: [{ path: "ui/button.tsx", type: "registry:ui" }],
}
```

**Example file**: `@/apps/v4/registry/new-york-v4/examples/button-demo.tsx`
- Shows basic usage with variant and size props
- Uses icons from lucide-react

**Example registry**: `@/apps/v4/registry/new-york-v4/examples/_registry.ts` (line 181)
```typescript
{
  name: "button-demo",
  type: "registry:example",
  registryDependencies: ["button"],
  files: [{ path: "examples/button-demo.tsx", type: "registry:example" }],
}
```

**Documentation**: `@/apps/v4/content/docs/components/button.mdx`

**Key takeaway**: Most components follow this pattern - single component file, npm dependencies only, CVA for variants.

---

### Example 2: Accordion - Component with Tailwind Config

**Pattern**: Component requiring custom Tailwind animations/keyframes.

**Component file**: `@/apps/v4/registry/new-york-v4/ui/accordion.tsx`
- Uses Radix UI accordion primitives
- Requires custom animations defined in Tailwind config

**Registry entry**: `@/apps/v4/registry/new-york-v4/ui/_registry.ts` (line 5)
```typescript
{
  name: "accordion",
  type: "registry:ui",
  dependencies: ["@radix-ui/react-accordion"],
  files: [{ path: "ui/accordion.tsx", type: "registry:ui" }],
  tailwind: {
    config: {
      theme: {
        extend: {
          keyframes: {
            "accordion-down": {
              from: { height: "0" },
              to: { height: "var(--radix-accordion-content-height)" },
            },
            "accordion-up": { /* ... */ },
          },
          animation: {
            "accordion-down": "accordion-down 0.2s ease-out",
            "accordion-up": "accordion-up 0.2s ease-out",
          },
        },
      },
    },
  },
}
```

**Example file**: `@/apps/v4/registry/new-york-v4/examples/accordion-demo.tsx`

**Example registry**: `@/apps/v4/registry/new-york-v4/examples/_registry.ts` (line 5)

**Documentation**: `@/apps/v4/content/docs/components/accordion.mdx`

**Key takeaway**: When components need animations or custom Tailwind config, add the `tailwind` field. The CLI will automatically merge this into the user's config.

---

### Example 3: Alert Dialog - Component with Registry Dependencies

**Pattern**: Component that depends on other registry components.

**Component file**: `@/apps/v4/registry/new-york-v4/ui/alert-dialog.tsx`
- Uses Radix UI dialog primitives
- Internally uses the Button component from the registry

**Registry entry**: `@/apps/v4/registry/new-york-v4/ui/_registry.ts` (line 48)
```typescript
{
  name: "alert-dialog",
  type: "registry:ui",
  dependencies: ["@radix-ui/react-alert-dialog"],
  registryDependencies: ["button"],
  files: [{ path: "ui/alert-dialog.tsx", type: "registry:ui" }],
}
```

**Example file**: `@/apps/v4/registry/new-york-v4/examples/alert-dialog-demo.tsx`
- Shows complete usage with trigger, title, description, actions

**Example registry**: `@/apps/v4/registry/new-york-v4/examples/_registry.ts` (line 38)
```typescript
{
  name: "alert-dialog-demo",
  type: "registry:example",
  registryDependencies: ["alert-dialog", "button"],
  files: [{ path: "examples/alert-dialog-demo.tsx", type: "registry:example" }],
}
```

**Documentation**: `@/apps/v4/content/docs/components/alert-dialog.mdx`

**Key takeaway**: When your component imports other pitsi components (like Button), MUST add them to `registryDependencies`. The CLI will automatically install them. Examples also need to list all components they use.

---

### Pattern Summary

**Simple component** (Button pattern):
- Component file only
- npm dependencies in `dependencies`
- No registryDependencies needed

**Component with animations** (Accordion pattern):
- Add `tailwind.config` field with keyframes/animations
- CLI merges into user's Tailwind config

**Component with registry deps** (Alert Dialog pattern):
- Uses other pitsi components internally
- MUST list in `registryDependencies`
- Cascading: if you depend on button, and button depends on utils, both install

**Examples always need**:
- `type: "registry:example"`
- `registryDependencies: [...]` listing ALL components used
- Alphabetical insertion in examples registry

## What Makes This Hard

1. **File paths are confusing** - Three different path systems:
   - Absolute filesystem paths (`/Users/.../apps/v4/registry/...`)
   - Import paths in code (`@/registry/new-york-v4/ui/...`)
   - Registry paths (relative: `ui/component.tsx`)

2. **Easy to forget steps** - 7+ files to touch for one component. Miss one = doesn't work.

3. **Large registries** - Finding insertion point in 2600+ alphabetically sorted entries is tedious.

4. **Variable name precision** - One typo in CSS variable name = no styling, hard to debug.

5. **Dependency resolution isn't obvious** - Must understand what other registry items component needs.

6. **Documentation requires consistency** - ComponentPreview names, registry names, file names all must align.

7. **Build system caches** - Sometimes need to clear and rebuild for changes to show.

The system is powerful but unforgiving. Follow this guide exactly and you'll avoid hours of debugging.
