# Apply Correct Fonts to Blocks Plan

> **Goal:** Ensure every block renders with its template's typography preset (display + body fonts).

## Investigation Results

### What's Working
1. **Fonts are loaded** in `lib/config/fonts.ts` via next/font/google
2. **Font variables applied to body** via `fontVariables` in `app/layout.tsx`
3. **BlockThemeWrapper correctly sets** `--font-display` and `--font-body` inline styles
4. **Many blocks already use** `font-display` class (26+ blocks found)
5. **CSS classes exist** in `globals.css`:
   - `.display` - `font-family: var(--font-display)`
   - `.font-body` - `font-family: var(--font-body)`

### Potential Issues to Investigate
1. **Class name mismatch**: globals.css defines `.display` but blocks use `font-display`
   - Need to verify if Tailwind v4's `@theme inline { --font-display }` creates `font-display` utility
2. **CSS specificity**: Other styles might override font-family
3. **Variable scoping**: `--font-display` inheritance through BlockThemeWrapper

---

## Immediate Fix: Add Missing CSS Class

globals.css defines `.display` but blocks use `font-display`. Add the alias:

```css
/* In styles/globals.css, after .display definition */
.font-display {
  font-family: var(--font-display), sans-serif;
  font-weight: var(--font-display-weight, 700);
}
```

This ensures blocks using `font-display` class get the correct font.

---

## Verification Checklist

Before manually updating blocks, verify the pipeline works:

### Step 1: Check CSS Class Generation
Open browser DevTools on `/view/new-york-v4/hero-4` and inspect a heading with `font-display` class:
- [ ] Check if `.font-display` style rule exists
- [ ] Check `font-family` value (should be `var(--font-display)`)

### Step 2: Check CSS Variable Cascade
On the same element:
- [ ] Check computed `--font-display` value (should be `var(--font-orbitron)`)
- [ ] Check computed `--font-orbitron` value (should be the actual font-family)

### Step 3: Check Final Computed Style
- [ ] Check computed `font-family` (should show "Orbitron" for futuristic preset)

If any step fails, fix the infrastructure before updating blocks.

---

## Current Architecture

### Font Presets (5 available)

| Preset | Display Font | Body Font | Display Weight | Body Weight |
|--------|-------------|-----------|----------------|-------------|
| `modern` | `var(--font-display)` | `var(--font-sans)` | 700 | 400 |
| `elegant` | `var(--font-fraunces)` | `var(--font-dm-sans)` | 600 | 400 |
| `classic` | `var(--font-playfair)` | `var(--font-source-sans)` | 700 | 400 |
| `playful` | `var(--font-space-grotesk)` | `var(--font-nunito)` | 700 | 400 |
| `futuristic` | `var(--font-orbitron)` | `var(--font-rajdhani)` | 700 | 500 |

### Templates and Their Typography

| Template | Palette | Typography | Display Font | Body Font |
|----------|---------|------------|--------------|-----------|
| `service-plants` | sage | **elegant** | Fraunces | DM Sans |
| `service-travel` | azure | **modern** | Inter/Display | Inter |
| `service-boat` | azure | **classic** | Playfair Display | Source Sans 3 |
| `service-fitness` | neon | **futuristic** | Orbitron | Rajdhani |
| `app-gym-tracker` | sage | **modern** | Inter/Display | Inter |
| `app-quiz` | violet | **playful** | Space Grotesk | Nunito |
| `standalone` | slate | **modern** | Inter/Display | Inter |

---

## The Problem

The rendering pipeline correctly passes typography presets through `BlockThemeWrapper`, which sets these CSS variables:
- `--font-display`: Font family for headings
- `--font-body`: Font family for body text
- `--font-display-weight`: Weight for headings
- `--font-body-weight`: Weight for body text

**However, blocks must actively USE these CSS variables** via:
1. CSS classes like `.font-display` and `.font-body`
2. Or inline styles referencing the variables

---

## Plan: Manual Font Application

### Phase 1: Verify Font Loading

Check that all typography fonts are loaded in `app/fonts.ts`:
- [ ] Fraunces (elegant)
- [ ] DM Sans (elegant)
- [ ] Playfair Display (classic)
- [ ] Source Sans 3 (classic)
- [ ] Space Grotesk (playful)
- [ ] Nunito (playful)
- [ ] Orbitron (futuristic)
- [ ] Rajdhani (futuristic)

### Phase 2: Verify CSS Classes

Check `styles/globals.css` or Tailwind config for:
- [ ] `.font-display` class using `font-family: var(--font-display)`
- [ ] `.font-body` class using `font-family: var(--font-body)`

If missing, add to globals.css:
```css
.font-display {
  font-family: var(--font-display);
  font-weight: var(--font-display-weight);
}

.font-body {
  font-family: var(--font-body);
  font-weight: var(--font-body-weight);
}
```

### Phase 3: Update Blocks by Template

#### SERVICE-PLANTS Template (elegant: Fraunces + DM Sans)

**Headers:**
- [ ] `header-1.tsx` - Apply `font-display` to headings, `font-body` to navigation
- [ ] `header-2.tsx` - Apply `font-display` to headings, `font-body` to navigation
- [ ] `header-3.tsx` - Apply `font-display` to headings, `font-body` to navigation
- [ ] `header-4.tsx` - Apply `font-display` to headings, `font-body` to navigation
- [ ] `header-5.tsx` - Apply `font-display` to headings, `font-body` to navigation
- [ ] `header-6.tsx` - Apply `font-display` to headings, `font-body` to navigation
- [ ] `header-7.tsx` - Apply `font-display` to headings, `font-body` to navigation
- [ ] `header-8.tsx` - Apply `font-display` to headings, `font-body` to navigation

**Heroes:**
- [ ] `hero-1.tsx` - Apply `font-display` to h1/h2, `font-body` to paragraphs
- [ ] `hero-10.tsx` - Apply `font-display` to h1/h2, `font-body` to paragraphs
- [ ] `hero-11.tsx` - Apply `font-display` to h1/h2, `font-body` to paragraphs
- [ ] `hero-12.tsx` - Apply `font-display` to h1/h2, `font-body` to paragraphs
- [ ] `hero-13.tsx` - Apply `font-display` to h1/h2, `font-body` to paragraphs
- [ ] `hero-14.tsx` - Apply `font-display` to h1/h2, `font-body` to paragraphs

**Logos:**
- [ ] `logos-1.tsx` through `logos-6.tsx`

**Features:**
- [ ] `features-1.tsx` through `features-5.tsx`

**Products:**
- [ ] `products-1.tsx` through `products-6.tsx`

**Pricing:**
- [ ] `pricing-1.tsx`, `pricing-3.tsx` through `pricing-7.tsx`

**Testimonials:**
- [ ] `testimonials-1.tsx`, `testimonials-3.tsx` through `testimonials-7.tsx`

**Gallery:**
- [ ] `gallery-1.tsx` through `gallery-6.tsx`

**Team:**
- [ ] `team-1.tsx`, `team-3.tsx` through `team-7.tsx`

**Stats:**
- [ ] `stats-1.tsx`, `stats-3.tsx` through `stats-7.tsx`

**FAQ:**
- [ ] `faq-1.tsx` through `faq-6.tsx`

**Blog:**
- [ ] `blog-1.tsx` through `blog-6.tsx`

**Contact:**
- [ ] `contact-1.tsx` through `contact-6.tsx`

**Newsletter:**
- [ ] `newsletter-1.tsx` through `newsletter-6.tsx`

**CTA:**
- [ ] `cta-1.tsx` through `cta-6.tsx`

**Footer:**
- [ ] `footer-1.tsx`, `footer-3.tsx` through `footer-8.tsx`

---

#### SERVICE-TRAVEL Template (modern: Display + Sans)

**Heroes:**
- [ ] `hero-2.tsx` - Apply `font-display` to h1/h2, `font-body` to paragraphs
- [ ] `hero-15.tsx` through `hero-19.tsx`

---

#### SERVICE-BOAT Template (classic: Playfair + Source Sans)

**Heroes:**
- [ ] `hero-3.tsx` - Apply `font-display` to h1/h2, `font-body` to paragraphs
- [ ] `hero-20.tsx` through `hero-24.tsx`

---

#### SERVICE-FITNESS Template (futuristic: Orbitron + Rajdhani)

**Header:**
- [ ] `header-9.tsx` - Apply `font-display` to logo/nav, `font-body` to links

**Heroes:**
- [ ] `hero-4.tsx` - Apply `font-display` to h1/h2, `font-body` to paragraphs
- [ ] `hero-5.tsx` - Apply `font-display` to h1/h2, `font-body` to paragraphs
- [ ] `hero-6.tsx` - Apply `font-display` to h1/h2, `font-body` to paragraphs
- [ ] `hero-7.tsx` - Apply `font-display` to h1/h2, `font-body` to paragraphs
- [ ] `hero-8.tsx` - Apply `font-display` to h1/h2, `font-body` to paragraphs
- [ ] `hero-9.tsx` - Apply `font-display` to h1/h2, `font-body` to paragraphs

**Features:**
- [ ] `features-6.tsx` - Apply `font-display` to headings
- [ ] `features-7.tsx` - Apply `font-display` to headings
- [ ] `features-8.tsx` - Apply `font-display` to headings

**Team:**
- [ ] `team-2.tsx` - Apply `font-display` to names

**Pricing:**
- [ ] `pricing-2.tsx` - Apply `font-display` to tier names

**Stats:**
- [ ] `stats-2.tsx` - Apply `font-display` to numbers

**Testimonials:**
- [ ] `testimonials-2.tsx` - Apply `font-body` to quotes

**Footer:**
- [ ] `footer-2.tsx` - Apply `font-display` to headings

---

#### APP-GYM-TRACKER Template (modern)

- [ ] `app-gym-shell-1.tsx`
- [ ] `app-gym-today-1.tsx`
- [ ] `app-gym-log-1.tsx`
- [ ] `app-gym-history-1.tsx`
- [ ] `app-gym-gains-1.tsx`
- [ ] `app-gym-library-1.tsx`
- [ ] `app-gym-profile-1.tsx`

---

#### APP-QUIZ Template (playful: Space Grotesk + Nunito)

- [ ] `app-quiz-shell-1.tsx`
- [ ] `app-quiz-dashboard-1.tsx`
- [ ] `app-quiz-browse-1.tsx`
- [ ] `app-quiz-active-1.tsx`
- [ ] `app-quiz-results-1.tsx`
- [ ] `app-quiz-settings-1.tsx`

---

#### STANDALONE Blocks (modern)

**Auth:**
- [ ] `auth-1.tsx` through `auth-6.tsx`

**Maps:**
- [ ] `maps-1.tsx` through `maps-5.tsx`

---

## Implementation Pattern

For each block, apply fonts to typography elements:

```tsx
// Headings - use font-display
<h1 className="font-display text-4xl">Title</h1>
<h2 className="font-display text-2xl">Subtitle</h2>

// Body text - use font-body
<p className="font-body">Body text content</p>
<span className="font-body">Labels and descriptions</span>

// Navigation - typically font-body
<nav className="font-body">...</nav>

// Buttons - can be either, typically font-body
<button className="font-body">Click me</button>
```

---

## Verification

After updating each template's blocks:
1. Start dev server: `bun run dev`
2. Navigate to `/view/new-york-v4/{block-name}`
3. Inspect elements to verify correct font-family is applied
4. Check both light and dark modes
5. Compare visual appearance with expected typography

---

## Notes

- The `BlockThemeWrapper` already sets the CSS variables correctly
- Blocks just need to USE the variables via CSS classes
- Focus on headings (h1-h6) and body paragraphs first
- Navigation and buttons are secondary priority
