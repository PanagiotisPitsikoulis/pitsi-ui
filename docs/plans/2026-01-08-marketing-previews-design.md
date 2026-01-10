# Marketing Previews Tool Design

## Overview

A tool for creating polished marketing screenshots with device mockups, multi-image layouts, and decorative backgrounds. Supports multiple aspect ratios for different platforms (social media, App Store, presentations).

## Input Methods

- **File upload**: Drag & drop or click to browse
- **Clipboard paste**: Cmd/Ctrl+V support
- **Supported formats**: PNG, JPG, WebP

## Canvas Aspect Ratios

| Name | Ratio | Use Case |
|------|-------|----------|
| Horizontal | 16:9 | Social media, presentations |
| Square | 1:1 | Instagram, thumbnails |
| Vertical | 9:16 | App Store, mobile marketing |

## Layout Modes

- Single image centered
- 2-up side by side
- 3-up gallery
- Custom grid with drag reordering

## Device Mockups

### Available Frames
- iPhone (modern bezel-less)
- MacBook (laptop)
- Browser window (minimal chrome)
- iPad (tablet)
- None (rounded corners + shadow only)

### Mockup Options
- Device color: light / dark
- Shadow intensity: none, subtle, medium, strong
- Tilt/perspective: flat or slight 3D angle
- Scale: adjustable within canvas

Each image has its own device picker for mixed layouts.

## Background Styles

### Presets
- **Gradient blurs** - Soft colorful orbs
- **Mesh gradients** - Smooth multi-color blends
- **Geometric** - Dot grids, line patterns
- **Solid + noise** - Clean color with grain
- **Transparent** - For compositing

### Customization
- Primary/secondary color pickers
- Blur intensity slider
- Pattern density
- Noise amount (0-100%)

### Quick Presets
- "Apple" - soft purple/blue blurs
- "Minimal" - white/gray with subtle noise
- "Dark" - dark gradients
- "Vibrant" - saturated colors

## UI Layout

```
+----------------------------------+----------------+
|                                  |   Controls     |
|                                  |                |
|         Canvas Preview           | > Images       |
|         (live updating)          | > Layout       |
|                                  | > Devices      |
|                                  | > Background   |
|                                  | > Export       |
+----------------------------------+----------------+
```

### Control Sections (collapsible)
1. **Images** - Upload area, list of added images
2. **Layout** - Aspect ratio picker, arrangement mode
3. **Devices** - Frame picker per selected image
4. **Background** - Style, colors, presets
5. **Export** - Format, quality, resolution

## Export

- **Formats**: PNG, JPG
- **JPG quality**: 60-100% slider
- **Resolution**: 1x, 2x, 3x multiplier
- **Filename**: `marketing-preview-{timestamp}.{ext}`

## Implementation Notes

- Location: `apps/v4/app/(app)/(tools)/tools/marketing-previews/`
- Follow existing tool patterns (page.tsx + page.client.tsx)
- Use html-to-image or similar for canvas export
- Add isometric icon to tools listing page
- Canvas rendering via CSS/SVG (no canvas element needed initially)
