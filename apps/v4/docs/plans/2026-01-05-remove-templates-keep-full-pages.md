# Remove Templates, Keep Full Pages Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Remove the service template composition system entirely while preserving application full pages (app-gym, app-quiz) as standalone experiences.

**Architecture:** Templates are a legacy composition layer that groups blocks into landing pages. This removal simplifies the architecture - blocks become standalone units viewable at `/block/[category]/[blockName]`, while application pages retain their shell + views structure as "full pages".

**Tech Stack:** Next.js routes, TypeScript, Registry build system

---

## Current State Analysis

### What Exists Today

**Service Templates (TO REMOVE):**
- `service-plants` - Composed landing page with header-1, hero-1, features-1, etc.
- `service-travel` - Composed landing page
- `service-boat` - Composed landing page
- `service-fitness` - Composed landing page

**Application Full Pages (TO KEEP):**
- `app-gym-tracker` - Full app with shell + 6 views (today, log, library, history, gains, profile)
- `app-quiz` - Full app with shell + 5 views (dashboard, browse, active, results, settings)

### Key Difference
- **Service templates**: Compose multiple independent blocks into a landing page - NOT needed, each block can be used standalone
- **Application pages**: Cohesive apps where shell + views form a single product - KEEP as "full pages"

---

## Phase 1: Delete Service Template Block Files

### Task 1.1: Remove Service Template Components

**Files to DELETE:**
- `registry/new-york-v4/blocks/service/service-plants.tsx`
- `registry/new-york-v4/blocks/service/service-travel.tsx`
- `registry/new-york-v4/blocks/service/service-boat.tsx`
- `registry/new-york-v4/blocks/service/service-fitness.tsx`

**Step 1: Delete the service directory**

```bash
rm -rf apps/v4/registry/new-york-v4/blocks/service/
```

**Step 2: Verify deletion**

```bash
ls apps/v4/registry/new-york-v4/blocks/service/ 2>&1 || echo "Directory deleted successfully"
```

**Step 3: Commit**

```bash
git add -A && git commit -m "chore: remove service template block components"
```

---

## Phase 2: Update Block Registry - Remove Template Associations

### Task 2.1: Remove blockConfig.template from Service Blocks

**File:** `registry/new-york-v4/blocks/_registry.ts`

Find all blocks with `blockConfig: bc("service-plants", ...)`, `bc("service-travel", ...)`, etc. and remove the template association. Keep only palette, typography, tint settings for standalone viewing.

**Step 1: Search for service template references**

```bash
grep -n 'bc("service-' apps/v4/registry/new-york-v4/blocks/_registry.ts | head -30
```

**Step 2: Update each block to remove template association**

For each block currently associated with a service template, change from:
```typescript
blockConfig: bc("service-plants", "header", 0, {
  palette: "emerald",
  typography: "elegant",
})
```

To:
```typescript
blockConfig: {
  palette: "emerald",
  typography: "elegant",
}
```

**Blocks to update (by template):**

Service-plants blocks:
- header-1, hero-1, logos-1, features-1, testimonials-1, stats-1, contact-1, faq-1, cta-1, newsletter-1, footer-1

Service-travel blocks:
- All blocks with `bc("service-travel", ...)`

Service-boat blocks:
- All blocks with `bc("service-boat", ...)`

Service-fitness blocks:
- All blocks with `bc("service-fitness", ...)`

**Step 3: Remove the `bc()` helper function** (if only used for service templates)

The `bc()` helper function creates blockConfig with template. If applications also use it, keep it. Otherwise, remove.

**Step 4: Commit**

```bash
git add apps/v4/registry/new-york-v4/blocks/_registry.ts
git commit -m "refactor: remove template associations from service blocks"
```

---

## Phase 3: Update Build System

### Task 3.1: Modify build-registry.mts to Skip Service Templates

**File:** `scripts/build-registry.mts`

**Step 1: Update COMPUTED_TEMPLATES generation**

In `buildBlocksMetadata()`, filter to only include application templates:

```typescript
// Only include application templates
if (template.type !== "application") {
  continue
}
```

Or remove COMPUTED_TEMPLATES entirely if only used for applications' shell system.

**Step 2: Update the template computation logic**

Find the section that computes templates from blocks and either:
- Remove it entirely
- Or keep only for type: "application"

**Step 3: Run registry build**

```bash
cd apps/v4 && bun run registry:build
```

**Step 4: Verify __blocks-metadata__.ts**

```bash
grep -c "service-" apps/v4/registry/__blocks-metadata__.ts
# Should return 0 (no service templates)

grep "app-gym\|app-quiz" apps/v4/registry/__blocks-metadata__.ts | head -5
# Should still show application templates
```

**Step 5: Commit**

```bash
git add -A && git commit -m "build: remove service templates from registry computation"
```

---

## Phase 4: Remove Template Route (Service)

### Task 4.1: Delete Service Template Viewer

**File to DELETE:** `app/(app)/(content)/(blocks)/template/[slug]/page.client.tsx`

This is the service template viewer. Application templates use `page.application.client.tsx`.

**Step 1: Delete the file**

```bash
rm apps/v4/app/\(app\)/\(content\)/\(blocks\)/template/\[slug\]/page.client.tsx
```

**Step 2: Commit**

```bash
git add -A && git commit -m "chore: remove service template viewer client"
```

### Task 4.2: Update Template Route Server Component

**File:** `app/(app)/(content)/(blocks)/template/[slug]/page.tsx`

**Step 1: Read current implementation**

Review how it handles service vs application templates.

**Step 2: Remove service template handling**

Update to:
- Return 404 for non-application templates
- Or redirect to block viewer
- Keep only application template handling

```typescript
export default async function TemplatePage({ params }: Props) {
  const { slug } = await params

  // Only application templates are supported
  if (!isApplicationTemplate(slug)) {
    notFound()
  }

  // ... rest of application template handling
}
```

**Step 3: Update generateStaticParams**

Only return application template slugs:

```typescript
export function generateStaticParams() {
  return Object.entries(COMPUTED_TEMPLATES)
    .filter(([_, t]) => t.type === "application")
    .map(([slug]) => ({ slug }))
}
```

**Step 4: Commit**

```bash
git add -A && git commit -m "refactor: template route only handles application pages"
```

---

## Phase 5: Clean Up Utilities

### Task 5.1: Update blocks.server.ts

**File:** `app/(app)/(content)/(blocks)/blocks.server.ts`

**Step 1: Remove service template functions**

Remove or simplify:
- `getTemplateMetadata` - Only for applications now
- `getTemplateBlockGroups` - Only for applications
- `getComputedHeroOptions` - May not be needed
- `getTemplateForBlock` - Simplify for applications only

**Step 2: Update getBlockSettings**

Currently returns `templateSlug` by searching all templates. Update to:
- Only search application templates for shell/view blocks
- Return null templateSlug for regular blocks (they're standalone now)

**Step 3: Commit**

```bash
git add -A && git commit -m "refactor: simplify server utilities for application pages only"
```

### Task 5.2: Update/Delete templates.ts

**File:** `registry/new-york-v4/lib/templates.ts`

**Step 1: Evaluate usage**

Check if these functions are used anywhere:
- `getBlockTypesWithAlternatives`
- `getDefaultBlockSelections`
- `getSelectedTemplateBlocks`
- `getBlockConfig`
- `getAllTemplateSlugs`
- `getTemplatesByType`
- `templateUsesPalette`
- `templateUsesTypography`

**Step 2: Remove unused functions or update for applications only**

**Step 3: Commit**

```bash
git add -A && git commit -m "refactor: clean up template utilities"
```

### Task 5.3: Update lazy-component-renderer.tsx

**File:** `app/(view)/_components/lazy-component-renderer.tsx`

**Step 1: Review template-related code**

The `ApplicationBlockWrapper` should still work for app views.
The `BlockWrapper` may need simplification since regular blocks no longer have `templateSlug`.

**Step 2: Simplify BlockWrapper**

Regular blocks (non-application) no longer need template context:

```typescript
function BlockWrapper({ children, name, Component }) {
  // Check if this is an application view block
  const shellInfo = getShellForBlock(name)
  if (shellInfo) {
    return <ApplicationBlockWrapper ... />
  }

  // Regular block - render standalone without template wrapping
  return <>{children}</>
}
```

**Step 3: Commit**

```bash
git add -A && git commit -m "refactor: simplify block wrapper for standalone blocks"
```

---

## Phase 6: Clean Up Images and Assets

### Task 6.1: Remove Service Template Images

**Step 1: Identify service template images**

```bash
ls apps/v4/public/r/styles/new-york-v4/service-* 2>/dev/null
```

**Step 2: Delete service template images**

```bash
rm -f apps/v4/public/r/styles/new-york-v4/service-*.webp
rm -f apps/v4/public/r/styles/new-york-v4/service-*.json
```

**Step 3: Commit**

```bash
git add -A && git commit -m "chore: remove service template images"
```

---

## Phase 7: Update Block Viewer

### Task 7.1: Simplify Block Page Client

**File:** `app/(app)/(content)/(blocks)/block/[category]/[blockName]/page.client.tsx`

**Step 1: Remove "template mode" toggle**

The block viewer may have a mode to show blocks in their template context. Remove this for service templates, keep for application views.

**Step 2: Update block rendering**

Blocks should render standalone with their blockConfig styling (palette, typography, tint).

**Step 3: Commit**

```bash
git add -A && git commit -m "refactor: simplify block viewer for standalone blocks"
```

---

## Phase 8: Final Verification

### Task 8.1: Rebuild and Test

**Step 1: Clean rebuild**

```bash
cd apps/v4
rm -rf .next
bun run registry:build
```

**Step 2: Run typecheck**

```bash
bun run tsc --noEmit 2>&1 | grep -v "pre-existing" | head -30
```

**Step 3: Start dev server**

```bash
bun run dev
```

**Step 4: Manual verification**

1. Visit `/block/header/header-1` - Should render standalone with its palette/typography
2. Visit `/block/hero/hero-1` - Should render standalone
3. Visit `/template/app-gym-tracker` - Should render application with shell
4. Visit `/template/service-plants` - Should 404

**Step 5: Final commit**

```bash
git add -A && git commit -m "feat: complete template removal, blocks are now standalone"
```

---

## Summary of Changes

| Category | Action | Files |
|----------|--------|-------|
| Service block files | DELETE | 4 files in `blocks/service/` |
| Block registry | MODIFY | `blocks/_registry.ts` - remove template associations |
| Build system | MODIFY | `build-registry.mts` - skip service templates |
| Routes | DELETE + MODIFY | `page.client.tsx` + `page.tsx` |
| Utilities | MODIFY | `blocks.server.ts`, `templates.ts` |
| Renderer | MODIFY | `lazy-component-renderer.tsx` |
| Images | DELETE | `service-*.webp`, `service-*.json` |
| Block viewer | MODIFY | `page.client.tsx` |

## Architecture After Changes

```
Blocks (standalone)
├── header-1, header-2, ... (palette: emerald, typography: elegant)
├── hero-1, hero-2, ...
├── features-1, features-2, ...
└── ... all blocks viewable at /block/[category]/[name]

Application Full Pages
├── app-gym-tracker
│   ├── shell: app-gym-shell-1
│   └── views: today, log, library, history, gains, profile
└── app-quiz
    ├── shell: app-quiz-shell-1
    └── views: dashboard, browse, active, results, settings

Routes:
- /block/[category]/[blockName] → Standalone block viewer
- /template/app-gym-tracker → Application full page
- /template/app-quiz → Application full page
- /template/service-* → 404 (removed)
```
