# Easing Composer Animated Previews Plan

## Goal
Add animated UI previews to the Easing Composer similar to Shadow Composer, showing the current easing applied to real UI components.

## Current State
- Easing Composer has a basic `AnimationPreview` component showing a box translating across a track
- Shadow Composer has 4 rich preview types: NavbarPreview, SideMenuPreview, BottomDrawerPreview, ModalPreview
- Shadow previews show shadows on actual UI mockups (gallery with images)

## Proposed Preview Types

### 1. Card Slide Preview
- A card that slides in from the left using the current easing
- Shows how the easing affects entrance animations
- Loops: slide in → pause → slide out → pause → repeat

### 2. Modal Fade Preview
- A modal that fades and scales in over a dimmed background
- Common pattern for dialogs/modals
- Uses opacity + scale transform with the easing

### 3. Drawer Slide Preview
- A bottom drawer that slides up from the bottom
- Like a mobile sheet/action sheet
- Shows vertical animation with the easing

### 4. Button Hover Preview
- A button that shows hover state animation
- Scale/background transitions on simulated hover
- Auto-triggers hover animation on loop

## Implementation

### File Structure
```
apps/v4/app/(app)/(content)/(tools)/tools/easing-composer/
├── _components/
│   ├── preview-components.tsx  # NEW: Animated preview components
│   └── ... existing files
└── page.client.tsx             # Update to use PreviewNavigation
```

### preview-components.tsx Structure
```tsx
interface PreviewProps {
  easingCSS: string      // e.g. "cubic-bezier(0.45, 0.05, 0.55, 0.95)"
  duration: number       // Animation duration in ms
  className?: string
}

// Each preview animates in a loop using CSS transitions/animations
export function CardSlidePreview({ easingCSS, duration, className }: PreviewProps)
export function ModalFadePreview({ easingCSS, duration, className }: PreviewProps)
export function DrawerSlidePreview({ easingCSS, duration, className }: PreviewProps)
export function ButtonHoverPreview({ easingCSS, duration, className }: PreviewProps)

export type PreviewType = "card" | "modal" | "drawer" | "button"

export const previewComponents: Record<PreviewType, {
  label: string
  component: React.ComponentType<PreviewProps>
}>
```

### Animation Strategy
Each preview uses a self-looping animation:
1. Use `useState` for animation state (idle/animating)
2. Use `useEffect` with `setInterval` to trigger animations
3. Apply CSS `transition` with dynamic `timing-function` from `easingCSS`
4. Transform states: start position → end position → back to start

### Integration into page.client.tsx
1. Import `PreviewNavigation` component (already used in shadow-composer)
2. Add `selectedPreview` state
3. Replace `AnimationPreview` with dynamic preview component
4. Add `PreviewNavigation` in `ToolLayoutPreviewHeader`

### Key Changes
```tsx
// Add to page.client.tsx
import { previewComponents, type PreviewType } from "./_components/preview-components"

// Add state
const [selectedPreview, setSelectedPreview] = useState<PreviewType>("card")

// In preview header
<ToolLayoutPreviewHeader>
  <ToolLayoutPreviewTitle>Preview</ToolLayoutPreviewTitle>
  <PreviewNavigation
    items={Object.entries(previewComponents).map(([key, { label }]) => ({
      key,
      label
    }))}
    value={selectedPreview}
    onValueChange={(v) => setSelectedPreview(v as PreviewType)}
  />
</ToolLayoutPreviewHeader>

// In preview content
const PreviewComponent = previewComponents[selectedPreview].component
<PreviewComponent
  easingCSS={bezierToCSS(bezier)}
  duration={duration}
/>
```

## Visual Design (from shadow-composer)
- Use the same art images from `/placeholders/art/` for backgrounds
- Clean, minimal UI mockups
- Show the easing on actual UI elements, not abstract shapes
- Each preview should be visually interesting and demonstrate the easing clearly

## Implementation Order
1. Create `preview-components.tsx` with CardSlidePreview
2. Test integration with PreviewNavigation
3. Add remaining preview types (Modal, Drawer, Button)
4. Polish animations and timing
5. Remove or keep existing AnimationPreview as an option
