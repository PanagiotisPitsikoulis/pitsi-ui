# Tool Components Extraction Plan

## Overview
Extract reusable components from shadow-composer and theme-generator into `/components/tools` to create a maintainable, composable system for building design tools.

---

## Phase 1: Shared UI Components

### 1.1 CodeBlock (`/components/tools/code-block.tsx`)
**Source:** Both tools have nearly identical implementations
**Changes:**
- Unify into single component with Shiki syntax highlighting
- Support dark/light theme switching
- Props: `code`, `language`, `filename`, `onCopy?`, `height?`

### 1.2 SliderRow (`/components/tools/slider-row.tsx`)
**Source:** `shadow-layer-control.tsx` SliderRow, `slider-with-input.tsx`
**Changes:**
- Create unified slider component with label, slider, and input
- Support different layouts: `inline` (shadow-composer style) vs `stacked` (theme-generator style)
- Props: `label`, `value`, `onChange`, `min`, `max`, `step?`, `unit?`, `layout?`

### 1.3 ControlSection (`/components/tools/control-section.tsx`)
**Source:** `theme-generator/_components/control-section.tsx`
**Changes:**
- Move as-is, it's already well-designed
- Collapsible section with title and children
- Props: `title`, `children`, `open?`, `onOpenChange?`, `expanded?`

### 1.4 ColorPickerRow (`/components/tools/color-picker-row.tsx`)
**Source:** `shadow-layer-control.tsx` ColorPickerRow
**Changes:**
- Extract color picker with popover
- Works with the kibo-ui ColorPicker
- Props: `label`, `color`, `onChange`

### 1.5 PresetSelector (`/components/tools/preset-selector.tsx`)
**Source:** Both tools have similar PresetSelector components
**Changes:**
- Create generic preset selector with Command dropdown
- Support custom preview rendering (color swatches, shadow preview, etc.)
- Props: `presets`, `currentPreset`, `onSelect`, `savedItems?`, `onLoadSaved?`, `renderPreview?`

### 1.6 ToolIconButton (`/components/tools/tool-icon-button.tsx`)
**Source:** Common pattern in both tools
**Changes:**
- Standardized icon button with tooltip
- Props: `icon`, `tooltip`, `onClick`, `disabled?`, `variant?`

### 1.7 SavedItemsList (`/components/tools/saved-items-list.tsx`)
**Source:** Both tools have saved items in "Saved" tab
**Changes:**
- Generic list component for saved items
- Support rename, delete, load actions
- Props: `items`, `onLoad`, `onRename`, `onDelete`, `renderPreview?`, `emptyIcon?`, `emptyText?`

---

## Phase 2: Tool Layout System

### 2.1 ToolLayout (`/components/tools/tool-layout.tsx`)
**Structure:**
```tsx
<ToolLayout>
  <ToolLayout.Background /> {/* StripeBgGuides */}
  <ToolLayout.Container>
    <ToolLayout.Sidebar>
      <ToolLayout.Header
        backHref="/tools"
        title="Shadow Composer"
        description="Design beautiful box shadows"
      />
      <ToolLayout.Tabs defaultValue="edit">
        <ToolLayout.TabsList>
          <ToolLayout.TabsTrigger value="explore" icon={Compass} />
          <ToolLayout.TabsTrigger value="edit" icon={Layers} />
          <ToolLayout.TabsTrigger value="saved" icon={Bookmark} />
          <ToolLayout.TabsTrigger value="export" icon={Download} />
        </ToolLayout.TabsList>
        <ToolLayout.TabsContent value="explore">...</ToolLayout.TabsContent>
        <ToolLayout.TabsContent value="edit">...</ToolLayout.TabsContent>
      </ToolLayout.Tabs>
    </ToolLayout.Sidebar>
    <ToolLayout.Preview>
      <ToolLayout.PreviewHeader>
        <ToolLayout.PreviewTitle>Preview</ToolLayout.PreviewTitle>
        <ToolLayout.PreviewControls>...</ToolLayout.PreviewControls>
      </ToolLayout.PreviewHeader>
      <ToolLayout.PreviewContent>...</ToolLayout.PreviewContent>
    </ToolLayout.Preview>
  </ToolLayout.Container>
</ToolLayout>
```

### 2.2 Core Layout Props
```typescript
interface ToolLayoutProps {
  children: React.ReactNode
}

interface ToolLayoutHeaderProps {
  backHref: string
  backLabel?: string
  title: string
  description?: string
}

interface ToolLayoutSidebarProps {
  children: React.ReactNode
  height?: string // e.g., "68svh"
}

interface ToolLayoutPreviewProps {
  children: React.ReactNode
  forceLightMode?: boolean
}
```

---

## Phase 3: Shared Hooks

### 3.1 useSavedItems (`/components/tools/hooks/use-saved-items.ts`)
```typescript
interface UseSavedItemsOptions<T> {
  storageKey?: string // For localStorage persistence
  maxItems?: number
}

function useSavedItems<T extends { id: string; name: string }>(
  options?: UseSavedItemsOptions<T>
) {
  return {
    items: T[],
    save: (item: Omit<T, 'id' | 'createdAt'>) => void,
    remove: (id: string) => void,
    rename: (id: string, name: string) => void,
    load: (item: T) => T,
    clear: () => void,
  }
}
```

### 3.2 usePresets (`/components/tools/hooks/use-presets.ts`)
```typescript
function usePresets<T>(
  presets: Record<string, { label: string; value: T }>,
  defaultPreset: string
) {
  return {
    currentPreset: string,
    currentValue: T,
    applyPreset: (key: string) => void,
    randomize: () => void,
    isCustom: boolean,
    markAsCustom: () => void,
  }
}
```

### 3.3 useExploreMode (`/components/tools/hooks/use-explore-mode.ts`)
```typescript
function useExploreMode<T>(
  items: T[],
  onSelect: (item: T, index: number) => void
) {
  return {
    currentIndex: number,
    setIndex: (index: number) => void,
    next: () => void,
    previous: () => void,
    isAtStart: boolean,
    isAtEnd: boolean,
  }
}
```

---

## Phase 4: Utility Functions

### 4.1 Export Utilities (`/components/tools/utils/export.ts`)
- `generateCSS(value: unknown, format: 'css' | 'tailwind'): string`
- `generateFigmaJSON(value: unknown): string`
- `downloadFile(content: string, filename: string, type: string): void`

### 4.2 Color Utilities (already in `/lib/colors.ts`)
- Ensure all color conversion utilities are here

---

## File Structure

```
/components/tools/
├── index.ts                    # Re-exports all components
├── tool-layout.tsx             # Main composable layout
├── code-block.tsx              # Syntax-highlighted code display
├── slider-row.tsx              # Slider with label and input
├── control-section.tsx         # Collapsible section
├── color-picker-row.tsx        # Color picker with label
├── preset-selector.tsx         # Preset dropdown with actions
├── tool-icon-button.tsx        # Icon button with tooltip
├── saved-items-list.tsx        # List of saved items
├── hooks/
│   ├── index.ts
│   ├── use-saved-items.ts
│   ├── use-presets.ts
│   └── use-explore-mode.ts
└── utils/
    ├── index.ts
    └── export.ts
```

---

## Migration Strategy

### Step 1: Create shared components (non-breaking)
1. Create `/components/tools/` directory
2. Build each component based on existing implementations
3. Export from index.ts

### Step 2: Migrate shadow-composer
1. Replace local components with shared ones
2. Refactor to use ToolLayout
3. Test thoroughly

### Step 3: Migrate theme-generator
1. Replace local components with shared ones
2. Refactor to use ToolLayout
3. Test thoroughly

### Step 4: Create new tools easily
- Typography composer
- Spacing generator
- Animation composer
- etc.

---

## Component API Examples

### Using ToolLayout
```tsx
export default function ShadowComposerPage() {
  const { items, save, remove, rename } = useSavedItems<SavedShadow>()
  const { currentPreset, applyPreset, randomize } = usePresets(shadowPresets, 'sm')

  return (
    <ToolLayout>
      <ToolLayout.Background />
      <ToolLayout.Container>
        <ToolLayout.Sidebar>
          <ToolLayout.Header
            backHref="/tools"
            title="Shadow Composer"
            description="Design beautiful box shadows"
          />
          <ToolLayout.Tabs defaultValue="shadows">
            <ToolLayout.TabsList>
              <ToolLayout.TabsTrigger value="explore" icon={Compass}>Explore</ToolLayout.TabsTrigger>
              <ToolLayout.TabsTrigger value="shadows" icon={Layers}>Shadows</ToolLayout.TabsTrigger>
              <ToolLayout.TabsTrigger value="saved" icon={Bookmark}>Saved</ToolLayout.TabsTrigger>
              <ToolLayout.TabsTrigger value="export" icon={Download}>Export</ToolLayout.TabsTrigger>
            </ToolLayout.TabsList>

            <ToolLayout.TabsContent value="shadows">
              <PresetSelector
                presets={shadowPresets}
                currentPreset={currentPreset}
                onSelect={applyPreset}
                onSave={() => save({ layers })}
                onRandomize={randomize}
              />
              {/* Shadow controls */}
            </ToolLayout.TabsContent>

            <ToolLayout.TabsContent value="saved">
              <SavedItemsList
                items={items}
                onLoad={loadShadow}
                onRename={rename}
                onDelete={remove}
                emptyIcon={<ShadowIcon />}
                emptyText="No saved shadows yet"
              />
            </ToolLayout.TabsContent>

            <ToolLayout.TabsContent value="export">
              <CodeBlock code={cssCode} language="css" filename="styles.css" />
            </ToolLayout.TabsContent>
          </ToolLayout.Tabs>
        </ToolLayout.Sidebar>

        <ToolLayout.Preview forceLightMode>
          <ToolLayout.PreviewHeader>
            <ToolLayout.PreviewTitle>Preview</ToolLayout.PreviewTitle>
            <PreviewTypeSelector value={previewType} onChange={setPreviewType} />
          </ToolLayout.PreviewHeader>
          <ToolLayout.PreviewContent>
            <PreviewComponent shadowStyle={shadowCSS} />
          </ToolLayout.PreviewContent>
        </ToolLayout.Preview>
      </ToolLayout.Container>
    </ToolLayout>
  )
}
```

---

## Benefits

1. **Consistency**: All tools share the same look and feel
2. **Maintainability**: Fix bugs or add features in one place
3. **Speed**: Build new tools faster with pre-built components
4. **Type Safety**: Shared TypeScript interfaces
5. **Testing**: Test shared components once, use everywhere
