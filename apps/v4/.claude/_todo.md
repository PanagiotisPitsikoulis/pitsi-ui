# Remove Dev Overlay from Application Templates

## Overview
Replace dev overlay with a dropdown menu listing all blocks in the application template.

---

## Changes

### 1. Update page.tsx to pass shell prop
Pass `shell={appTemplate.shell}` to ApplicationTemplateViewerClient

### 2. Update page.application.client.tsx

**Remove:**
- `devOverlayEnabled` state
- `hoveredBlockRef` ref
- `onBlockHover` callback
- Keyboard shortcuts for 'd' (toggle overlay), 'g' (open current block), 'c' (copy path)
- `DevBlockOverlay` import
- `Index` import (no longer need inline rendering)
- `Component` lookup
- Iframe/inline conditional - always use iframe
- Dev overlay toggle button from toolbar

**Add:**
- `shell` prop to interface
- Dropdown menu in dev toolbar with:
  - Main app block: `{slug}` (e.g., app-gym-tracker)
  - Shell block: `{shell}` (e.g., app-shell-1)
  - All view blocks from `templateBlocks`
- Each item opens file in editor when clicked

**Keep:**
- Always iframe rendering
- Other dev tools (assets, components, theme)
- Install button

---

## Dropdown Structure

```
[Code2 icon] Blocks ▼
├── app-gym-tracker (main)
├── app-shell-1 (shell)
├── ─────────────────
├── app-dashboard-1
├── app-workout-log-1
├── app-calendar-1
├── app-progress-1
├── app-exercises-1
└── app-settings-1
```

Each item calls `openInEditor(path)` with:
`/registry/new-york-v4/blocks/application/{blockName}.tsx`
