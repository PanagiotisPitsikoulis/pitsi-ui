# pitsi/ui Tools - Comprehensive Feature Analysis

## Overview

6 professional design tools that stand apart from typical web generators. Here's what makes each one special.

---

## 1. THEME GENERATOR

**What it does:** Complete color theming system for shadcn/ui with 40+ semantic color variables, light/dark mode support, and multi-format export.

### Killer Features

| Feature | Why It's Special |
|---------|------------------|
| **40+ Semantic Colors** | Not just "primary/secondary" - includes brand, complementary, surfaces, states, charts, sidebar, and code syntax colors. Full design system coverage. |
| **Theme Psychology Tags** | Each preset shows mood & best-fit use case: "Azure = Trustworthy & Calm → Finance, healthcare" |
| **Inspector Tool** | Click any color in the live preview → jumps to that color's editor. Reverse-engineer any theme visually. |
| **3 Variant System** | Each color family (9 total) has Base, Tinted, and Deep variants = 27 unique themes |
| **oklch Color Space** | Modern perceptual color space with fallbacks to HSL/hex |
| **Figma Export** | JSON format ready for Figma design system import |

### What Competitors Miss
- Most theme generators: 5-10 colors max, no dark mode, CSS-only output
- This: 40+ colors, full light/dark, CSS + Tailwind v4 + Figma + JSON

### Presets
28 presets across 9 color families (Azure, Violet, Rose, Sage, Amber, Cyan, Indigo, Coral, Forest) × 3 variants each

---

## 2. SHADOW COMPOSER

**What it does:** Multi-layer box-shadow designer with industry-inspired presets and 6 parameters per layer.

### Killer Features

| Feature | Why It's Special |
|---------|------------------|
| **Layered Architecture** | Stack unlimited shadow layers - not just one shadow. Create macOS-style depth with 2-3 layers. |
| **36 Industry Presets** | Apple (macOS Window, iOS Card), Stripe (blue-tinted), Shopify (enterprise), Neumorphic (trendy) |
| **Inset Support** | Toggle between outer and inset per layer - create pressed/etched effects |
| **6-Parameter Control** | Color, X, Y, blur, spread, opacity - most tools skip spread which is essential for fine-tuning |
| **4 Preview Components** | Navbar, Side Menu, Bottom Drawer, Modal - see shadows in real UI context |

### What Competitors Miss
- Most shadow tools: Single shadow, blur + color only, no presets
- This: Multi-layer, spread control, inset toggle, industry presets, real component previews

### Preset Categories
- **Basic** (8): xs → 4xl elevation scale
- **Apple** (6): macOS Window, Modal, iOS Card, Button, App Store Card
- **Stripe** (5): Blue-tinted (#0a2540) professional shadows
- **Shopify** (6): Enterprise gray, includes button white-inset highlight
- **Neumorphic** (8): Neo Brutal (hard), Soft Raised/Pressed (soft UI)

---

## 3. EASING COMPOSER

**What it does:** Visual cubic-bezier curve editor with animation preview and multi-format export.

### Killer Features

| Feature | Why It's Special |
|---------|------------------|
| **Visual Curve Editor** | Full SVG bezier editor with draggable control points, grid overlay, linear reference line |
| **Overshoot Support** | Values outside 0-1 range enable bounce/elastic effects - most tools cap at 0-1 |
| **48 Presets** | Complete coverage: standard, ease-in (9), ease-out (9), ease-in-out (9) |
| **4 Animation Previews** | Card Carousel, Modal Fade, Drawer Slide, List Stagger - see easing in real UI motion |
| **Framer Motion Export** | Array format `[x1, y1, x2, y2]` with usage example - rare in easing tools |
| **Duration Control** | 100ms-10s with guidance: micro-interactions vs dramatic reveals |

### What Competitors Miss
- cubic-bezier.com: No presets, no previews, CSS-only
- easings.net: Reference only, no customization
- This: Full editor + 48 presets + 4 previews + Framer/Tailwind/CSS export

### Preset Categories
- **Standard** (10): smooth, gentle, snappy, swift, dynamic, dramatic, sharp, elastic, linear, ease
- **Ease-In** (9): sine, quad, cubic, quart, quint, expo, circ, back
- **Ease-Out** (9): same progression
- **Ease-In-Out** (9): same progression

---

## 4. TYPOGRAPHY COMPOSER

**What it does:** Mathematical type scale generator with font pairing, Google Fonts integration, and responsive unit support.

### Killer Features

| Feature | Why It's Special |
|---------|------------------|
| **Mathematical Scale Ratios** | 8 named ratios from music/math: Minor Second (1.067) → Golden Ratio (1.618) |
| **Dual Font System** | Separate body + heading fonts with independent weight, line-height, letter-spacing |
| **Google Fonts Auto-Loading** | Dynamic font loading with automatic weight selection |
| **Steps Up/Down** | Configure 4-8 heading sizes AND 1-3 small text sizes |
| **px/rem Toggle** | Switch output units - entire system recalculates |
| **Type Scale Visualization** | Shows all 12 sizes with names (xs → 7xl) and px values |

### What Competitors Miss
- type-scale.com: Single ratio, no font pairing, no weight control
- typescale.com: Limited presets, no Google Fonts integration
- This: 8 ratios + font pairing + weights + line-height + letter-spacing + Tailwind v4 export

### Presets
| Preset | Fonts | Ratio | Use Case |
|--------|-------|-------|----------|
| Default | Inter | Major Third (1.25) | Versatile |
| Editorial | Playfair Display + Source Serif 4 | Perfect Fourth (1.333) | Publishing |
| Modern | Plus Jakarta Sans | Minor Third (1.2) | Contemporary |
| Technical | JetBrains Mono + Inter | Aug. Second (1.125) | Documentation |
| Bold | Bebas Neue + Open Sans | Perfect Fifth (1.5) | Impact headlines |
| Elegant | Cormorant Garamond | Golden Ratio (1.618) | Luxury |
| Compact | 14px base | Minor Second (1.067) | Dense UI |
| Display | 18px base | Aug. Fourth (1.414) | Large screens |

---

## 5. SPACING GENERATOR

**What it does:** Mathematical spacing scale generator with multiple algorithms and design system export.

### Killer Features

| Feature | Why It's Special |
|---------|------------------|
| **4 Scale Algorithms** | Linear, Geometric (1.5x/2x multiplier), Fibonacci, Custom |
| **Fibonacci Spacing** | Natural sequence-based scaling (1, 1, 2, 3, 5, 8, 13...) × base - feels "organic" |
| **Variable Steps** | 6-16 steps - customize scale granularity |
| **Tailwind Config Export** | Direct `module.exports` format for `tailwind.config.js` |
| **5 Preview Layouts** | Scale bars, Card padding, Vertical stack, Grid layout, Form layout |

### What Competitors Miss
- Most tools: Just 8pt grid or Tailwind default
- This: 4 algorithms with live math visualization, variable step count, px/rem toggle

### Presets
| Preset | Base | Scale | Steps | Use Case |
|--------|------|-------|-------|----------|
| Tailwind | 4px | Linear | 12 | Web standard |
| 8pt Grid | 8px | Linear | 10 | Material Design |
| Geometric | 4px | Geo 1.5x | 10 | Visual hierarchy |
| Geometric 2x | 4px | Geo 2x | 8 | Powers of 2 |
| Fibonacci | 4px | Fibonacci | 10 | Natural spacing |
| Compact | 2px | Linear | 12 | Dense UI |
| Spacious | 8px | Geo 1.5x | 8 | Open layouts |
| REM Based | 0.25rem | Linear | 12 | Accessible |

---

## 6. BACKGROUND DECORATIONS

**What it does:** 6 types of background effects with animation support and React/CSS export.

### Killer Features

| Feature | Why It's Special |
|---------|------------------|
| **6 Decoration Types** | Stripe Guides, Gradients (linear/radial/conic), Dots, Grid, Noise, Glow Orbs |
| **Animated Stripe Guides** | Vertical guides with flowing cyan glow - directional animation (up/down/both/random) |
| **Multi-Stop Gradients** | Add unlimited color stops with position control |
| **4 Fade Modes** | none, radial, top, bottom - for dots/grid patterns |
| **SVG Noise Texture** | Perlin noise with blend modes (overlay, soft-light, multiply) |
| **Positioned Glow Orbs** | X/Y positioning with blur radius and floating animation |
| **React Component Export** | Full TSX with inline styles, not just CSS |

### What Competitors Miss
- Most bg generators: Single effect type, no animation, CSS-only
- This: 6 effect types, animation support, React component export, real-time preview

### Presets
| Preset | Type | Aesthetic |
|--------|------|-----------|
| Neon Guides | Guides | Cyberpunk/tech - animated cyan glow |
| Sunset Glow | Glow | Warm - orange/pink radial |
| Aurora Borealis | Gradient | Animated - cyan/purple/pink sweep |
| Cosmic Dust | Dots | Space - purple starfield |
| Blueprint Grid | Grid | Technical - blue engineering grid |
| Film Grain | Noise | Cinematic - subtle texture overlay |
| Violet Orb | Glow | Soft purple floating blob |
| Ocean Wave | Gradient | Calm - teal/blue sweep |
| Rose Mist | Glow | Soft pink corner glow |
| Matrix Rain | Dots | Digital - green dot pattern |

---

## Common Features Across All Tools

| Feature | Description |
|---------|-------------|
| **Deck-Based Preset Explorer** | Swipeable card interface for browsing presets |
| **AI JSON Editor** | ChatGPT integration for natural language modifications |
| **Save/Load System** | LocalStorage with rename/delete, persists across sessions |
| **URL State Persistence** | Shareable configurations via query parameters |
| **Multi-Format Export** | CSS, Tailwind v4, JSON (some: Figma, Framer, Config) |
| **Real-Time Preview** | Instant visual feedback as settings change |
| **Randomize Button** | One-click inspiration from presets |
| **Light/Dark Preview** | Toggle preview theme without changing settings |

---

## Summary: Why These Tools Stand Out

1. **Professional Presets** - Not random values. Industry-inspired (Apple, Stripe, Shopify), mathematically-derived (Fibonacci, Golden Ratio), psychologically-informed (theme moods).

2. **Real UI Previews** - See effects on actual components (modals, cards, navbars), not abstract boxes.

3. **Multi-Format Export** - CSS + Tailwind v4 + Figma + JSON + Framer Motion. One design, all platforms.

4. **Deep Customization** - 40+ colors, 6 shadow parameters, overshoot easings, font pairing with letter-spacing. Not dumbed down.

5. **Mathematical Foundation** - Scale ratios from music theory, Fibonacci sequences, geometric progressions. Design backed by math.

6. **Animation Support** - Stripe guides flow, glow orbs float, gradients animate. Static backgrounds are boring.

7. **Design System Ready** - Not one-off values. Full scales (spacing 0-13), semantic naming, variable prefixes.
