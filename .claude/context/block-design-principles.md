---
title: Block Design Principles
description: Design standards and patterns for template blocks in pitsi-ui
---

## Overview

Template blocks follow consistent design patterns while maintaining unique visual identities per template. This document defines the standards for styling blocks.

---

## Color Philosophy

### Neutral UI Chrome, Colored Content

The UI chrome (borders, backgrounds, hover states) should be **neutral**, while **content accents** (icons, text highlights, stars) can use brand colors.

**Why?** Neutral chrome creates visual harmony across different color themes. Colored borders and backgrounds compete with the content and look garish when themes change.

---

## Required Patterns

### 1. Borders - Always Neutral

```tsx
// ❌ BAD - Colored borders
className="border border-primary/10"
className="border-primary/30"
className="border border-accent/20"

// ✅ GOOD - Neutral borders
className="border border-border"
className="border-border"
```

### 2. Badge/Chip Backgrounds - Neutral with Blur

```tsx
// ❌ BAD - Colored backgrounds
className="bg-primary/10 border border-primary/20"
className="bg-accent/15"

// ✅ GOOD - Neutral muted backgrounds
className="bg-muted/50 backdrop-blur-sm border border-border"
className="bg-muted/50 border border-border"
```

### 3. Hover States - Neutral

```tsx
// ❌ BAD - Colored hover
className="hover:bg-primary/10"
className="hover:bg-accent/15"

// ✅ GOOD - Neutral hover
className="hover:bg-muted"
```

### 4. Focus States - Ring System

```tsx
// ❌ BAD - Border-based focus
className="focus:border-primary"
className="focus:outline-none focus:border-primary"

// ✅ GOOD - Ring-based focus
className="focus:outline-none focus:ring-1 focus:ring-ring"
```

### 5. Outline Buttons - Consistent Style

```tsx
// ❌ BAD - Colored button borders
<Button variant="outline" className="border-primary/30 hover:bg-primary/10">

// ✅ GOOD - Neutral button styling
<Button variant="outline" className="border-border hover:bg-muted rounded-full">
```

### 6. Card Backgrounds - Use BlockContext

```tsx
// ❌ BAD - Hardcoded backgrounds
className="bg-card"
className="bg-muted"

// ✅ GOOD - Context-aware backgrounds
import { useBlockContext } from "../../_components"

const { cardBg } = useBlockContext()
className={`${cardBg} border border-border`}
```

### 7. Hero Text - Add Shadows for Readability

```tsx
// ❌ BAD - No text shadow on image backgrounds
<h1 className="text-foreground">Title</h1>

// ✅ GOOD - Text shadows for contrast
<p className="text-shadow">Subtitle</p>
<h1 className="text-shadow-lg">Main Heading</h1>
<p className="text-shadow">Description</p>
```

---

## Allowed Colored Elements

These elements SHOULD use brand colors:

### 1. Icon Colors (not backgrounds)

```tsx
// ✅ Icon color is primary, background is neutral
<div className="bg-muted/50 rounded-full p-3">
  <Icon className="text-primary" />
</div>
```

### 2. Text Accents

```tsx
// ✅ Brand text for emphasis
<span className="text-primary">Highlight</span>
<p className="text-brand-complementary">Accent text</p>
```

### 3. Star Ratings

```tsx
// ✅ Stars should be colored (semantic meaning)
<Star className="text-primary fill-primary" />
```

### 4. Popular/Highlighted Cards (Exception)

```tsx
// ✅ Popular cards CAN use primary for emphasis
{plan.popular ? (
  <div className="bg-primary text-primary-foreground border-primary border-2">
) : (
  <div className={`${cardBg} border-border border`}>
)}
```

### 5. Decorative Glows/Blurs

```tsx
// ✅ Subtle colored glows for atmosphere
<div className="absolute bg-primary/15 blur-[100px]" />
```

---

## Component Patterns

### Input Fields

```tsx
<input
  className="w-full px-4 py-3 rounded-xl bg-background border border-border
             text-foreground placeholder:text-muted-foreground
             focus:outline-none focus:ring-1 focus:ring-ring"
/>
```

### Cards with BlockContext

```tsx
"use client"

import { useBlockContext } from "../../_components"

export function MyBlock() {
  const { cardBg } = useBlockContext()

  return (
    <div className={`${cardBg} border border-border rounded-2xl p-8`}>
      {/* content */}
    </div>
  )
}
```

### Accordion Items

```tsx
<AccordionItem value="item-1" className="border-border">
```

### Footer Dividers

```tsx
<footer className="border-t border-border">
  <div className="border-t border-border mt-8 pt-8">
```

---

## Theme Radius

All themes use `radius: 1.5rem` for consistent, modern rounded corners.

---

## Template Uniqueness

Each template maintains its unique identity through:

- **Typography**: Serif for food/hospitality, mono for tech, sans-serif for modern
- **Layout**: Centered, left-aligned, split-screen, bottom-aligned
- **Decorative elements**: Stars, lines, shapes, icons
- **Animations**: Parallax, glow effects, border beams
- **Content tone**: Professional, playful, luxurious, technical

The color neutralization applies only to UI chrome, not to the template's visual character.

---

## Quick Reference

| Element | Bad Pattern | Good Pattern |
|---------|-------------|--------------|
| Borders | `border-primary/X` | `border-border` |
| Badge BG | `bg-primary/X` | `bg-muted/50` |
| Hover | `hover:bg-primary/X` | `hover:bg-muted` |
| Focus | `focus:border-primary` | `focus:ring-1 focus:ring-ring` |
| Cards | `bg-card` hardcoded | `useBlockContext()` → `cardBg` |
| Hero text | No shadow | `text-shadow` / `text-shadow-lg` |
