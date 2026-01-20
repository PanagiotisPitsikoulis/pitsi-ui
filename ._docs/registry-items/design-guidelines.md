# Design Guidelines

> Visual design standards and guidelines for pitsi/ui components and blocks

## Design Philosophy

pitsi/ui follows these core principles:

1. **Composable** - Small, focused components that combine well
2. **Accessible** - WCAG 2.1 AA compliant by default
3. **Customizable** - CSS variables over hardcoded values
4. **Consistent** - Unified design language across all components

---

## Spacing System

### Base Unit

All spacing uses a **4px base unit** (0.25rem):

| Token | Value | Tailwind |
|-------|-------|----------|
| `0` | 0px | `p-0`, `m-0` |
| `1` | 4px | `p-1`, `m-1` |
| `2` | 8px | `p-2`, `m-2` |
| `3` | 12px | `p-3`, `m-3` |
| `4` | 16px | `p-4`, `m-4` |
| `5` | 20px | `p-5`, `m-5` |
| `6` | 24px | `p-6`, `m-6` |
| `8` | 32px | `p-8`, `m-8` |
| `10` | 40px | `p-10`, `m-10` |
| `12` | 48px | `p-12`, `m-12` |
| `16` | 64px | `p-16`, `m-16` |
| `20` | 80px | `p-20`, `m-20` |

### Component Spacing

| Context | Spacing |
|---------|---------|
| Button padding | `px-4 py-2` (16px × 8px) |
| Card padding | `p-6` (24px) |
| Input padding | `px-3 py-2` (12px × 8px) |
| Section padding | `py-20` (80px) |
| Grid gap | `gap-4` or `gap-6` |

---

## Typography

### Font Stack

```css
--font-sans: "Inter", system-ui, -apple-system, sans-serif;
--font-mono: "JetBrains Mono", ui-monospace, monospace;
```

### Type Scale

| Class | Size | Weight | Use |
|-------|------|--------|-----|
| `text-xs` | 12px | 400 | Labels, captions |
| `text-sm` | 14px | 400 | Body small |
| `text-base` | 16px | 400 | Body |
| `text-lg` | 18px | 400-500 | Body large |
| `text-xl` | 20px | 500 | Subtitle |
| `text-2xl` | 24px | 600 | Heading 4 |
| `text-3xl` | 30px | 600 | Heading 3 |
| `text-4xl` | 36px | 700 | Heading 2 |
| `text-5xl` | 48px | 700 | Heading 1 |
| `text-6xl` | 60px | 800 | Display |
| `text-7xl` | 72px | 800 | Hero |

### Line Height

| Context | Line height |
|---------|-------------|
| Body text | `leading-relaxed` (1.625) |
| Headings | `leading-tight` (1.25) |
| Display | `leading-none` (1) |

### Letter Spacing

| Context | Tracking |
|---------|----------|
| Body | `tracking-normal` |
| Headings | `tracking-tight` (-0.025em) |
| Display | `tracking-tighter` (-0.05em) |
| Uppercase labels | `tracking-wider` (0.05em) |

---

## Color Guidelines

### Semantic Colors

Always use semantic color tokens:

```tsx
// ✅ Good
<div className="bg-background text-foreground" />
<div className="text-muted-foreground" />
<div className="border-border" />

// ❌ Avoid
<div className="bg-white text-black" />
<div className="text-gray-500" />
<div className="border-gray-200" />
```

### Color Pairing

| Background | Foreground |
|------------|------------|
| `background` | `foreground` |
| `card` | `card-foreground` |
| `popover` | `popover-foreground` |
| `primary` | `primary-foreground` |
| `secondary` | `secondary-foreground` |
| `muted` | `muted-foreground` |
| `accent` | `accent-foreground` |
| `destructive` | `destructive-foreground` |

### Opacity for States

```tsx
// Hover states
<div className="hover:bg-primary/90" />

// Disabled states
<div className="opacity-50" />

// Overlay backgrounds
<div className="bg-background/80 backdrop-blur" />
```

---

## Border Radius

### Standard Radii

```css
--radius: 0.5rem;  /* 8px - base */
```

| Usage | Class |
|-------|-------|
| Small elements | `rounded-sm` (calc(var(--radius) - 4px)) |
| Default | `rounded-md` (calc(var(--radius) - 2px)) |
| Large elements | `rounded-lg` (var(--radius)) |
| Extra large | `rounded-xl` (calc(var(--radius) + 4px)) |
| Full round | `rounded-full` |

### Component Guidelines

| Component | Radius |
|-----------|--------|
| Button | `rounded-md` |
| Card | `rounded-lg` |
| Input | `rounded-md` |
| Badge | `rounded-md` |
| Avatar | `rounded-full` |
| Dialog | `rounded-lg` |

---

## Shadows

### Elevation System

```css
/* Tailwind shadow tokens */
shadow-sm    /* Subtle elevation */
shadow       /* Default elevation */
shadow-md    /* Medium elevation */
shadow-lg    /* High elevation */
shadow-xl    /* Extra high elevation */
shadow-2xl   /* Maximum elevation */
```

### Usage Guidelines

| Component | Shadow |
|-----------|--------|
| Card (default) | None or `shadow-sm` |
| Card (elevated) | `shadow-md` |
| Dropdown | `shadow-lg` |
| Modal | `shadow-xl` |
| Popover | `shadow-md` |

---

## Animation

### Duration Guidelines

| Duration | Use |
|----------|-----|
| `duration-75` | Micro-interactions |
| `duration-150` | Hover states |
| `duration-200` | Default transitions |
| `duration-300` | Expanded content |
| `duration-500` | Page transitions |

### Easing Functions

```css
/* Default ease */
transition-all ease-in-out

/* Specific eases */
ease-out     /* Enter animations */
ease-in      /* Exit animations */
ease-in-out  /* Symmetric animations */
```

### Standard Transitions

```tsx
// Hover transition
<div className="transition-colors duration-200" />

// Scale transition
<div className="transition-transform hover:scale-105" />

// Opacity transition
<div className="transition-opacity duration-300" />
```

---

## Responsive Design

### Breakpoints

| Breakpoint | Min width | Use |
|------------|-----------|-----|
| `sm` | 640px | Small tablets |
| `md` | 768px | Tablets |
| `lg` | 1024px | Laptops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Large screens |

### Mobile-First Approach

```tsx
// ✅ Mobile-first
<div className="flex flex-col lg:flex-row" />
<div className="p-4 md:p-6 lg:p-8" />
<div className="text-sm md:text-base lg:text-lg" />

// ❌ Desktop-first (avoid)
<div className="lg:flex-row md:flex-col flex" />
```

### Common Patterns

```tsx
// Responsive grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" />

// Responsive padding
<section className="px-4 py-16 md:px-6 md:py-20 lg:px-8 lg:py-24" />

// Responsive text
<h1 className="text-3xl md:text-4xl lg:text-5xl" />
```

---

## Accessibility

### Focus States

```tsx
// Standard focus ring
<Button className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" />
```

### Color Contrast

- Text must have 4.5:1 contrast ratio (AA)
- Large text (18px+) must have 3:1 contrast ratio
- Interactive elements must have 3:1 contrast ratio

### Keyboard Navigation

All interactive elements must be:
- Focusable with Tab
- Activatable with Enter/Space
- Dismissible with Escape (modals)
- Navigable with arrows (menus, lists)

---

## Component Patterns

### Button Variants

| Variant | Use |
|---------|-----|
| `default` | Primary actions |
| `secondary` | Secondary actions |
| `outline` | Tertiary actions |
| `ghost` | Subtle actions |
| `link` | Inline navigation |
| `destructive` | Dangerous actions |

### Button Sizes

| Size | Use |
|------|-----|
| `sm` | Compact UI, tables |
| `default` | Standard buttons |
| `lg` | Call-to-action, hero |
| `icon` | Icon-only buttons |

### Input States

```tsx
// Default
<Input className="border-input" />

// Focus
<Input className="focus:ring-2 focus:ring-ring" />

// Error
<Input className="border-destructive focus:ring-destructive" />

// Disabled
<Input disabled className="opacity-50 cursor-not-allowed" />
```

---

## Block Design Guidelines

### Section Structure

```tsx
<section className="py-20 px-4 md:px-6 lg:px-8">
  <div className="mx-auto max-w-7xl">
    {/* Badge/eyebrow */}
    <p className="text-sm font-medium tracking-wider uppercase text-brand">
      {badge}
    </p>

    {/* Title */}
    <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
      {title}
    </h2>

    {/* Description */}
    <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
      {description}
    </p>

    {/* Content */}
    <div className="mt-12">
      {children}
    </div>
  </div>
</section>
```

### Hero Patterns

1. **Centered** - Title, description, CTAs centered
2. **Split** - Content left, image right (or reversed)
3. **Overlapping** - Content over background image
4. **Full-bleed** - Edge-to-edge background

### Grid Patterns

```tsx
// 3-column features
<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3" />

// 4-column logos
<div className="grid grid-cols-2 gap-8 md:grid-cols-4" />

// 2-column with image
<div className="grid grid-cols-1 gap-12 lg:grid-cols-2" />
```
