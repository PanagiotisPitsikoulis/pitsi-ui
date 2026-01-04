# Adding a New Animation Component

## Overview

Animation components are interactive, motion-based UI elements using Framer Motion (`motion/react`). They're registered as UI components but live in the `animations/` directory.

## File Locations

- **Animation**: `apps/v4/registry/new-york-v4/animations/{name}/{name}.tsx`
- **Registry**: `apps/v4/registry/new-york-v4/animations/_registry.ts`
- **Example**: `apps/v4/registry/new-york-v4/examples/{name}-demo.tsx`
- **Documentation**: `apps/v4/content/docs/components/{name}.mdx`

## Existing Animations (48 total)

```
ascii-text          aurora              background-image-parallax
ballpit             card-swipe-carousel cards-parallax
circular-gallery    circular-text       color-bends
curved-loop         decay-card          dither
dome-gallery        flowing-menu        fluid-glass
flying-posters      fuzzy-text          glass-surface
gradient-blinds     grid-distortion     image-trail
infinite-menu       iridescence         letter-glitch
liquid-chrome       noise               parallax-scroll
perspective-carousel                    perspective-section-transition
scroll-expand       scroll-fade         scroll-scale
shape-blur          shuffle             slide-down
slide-up            smooth-parallax-scroll  smooth-scroll
stack               sticker-peel        sticky-footer
text-along-path     text-gradient-opacity   text-parallax
text-pressure       transforms-3d       zoom-parallax
```

## Step-by-Step Process

### 1. Create Animation Component

Create `apps/v4/registry/new-york-v4/animations/{name}/{name}.tsx`:

```tsx
"use client"

import * as React from "react"
import { motion, useAnimation, useInView } from "motion/react"

import { cn } from "@/lib/utils"
import { useAnimationState } from "@/registry/new-york-v4/hooks/use-animation-state"
import { useMobile } from "@/registry/new-york-v4/hooks/use-mobile"

interface FadeRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: "up" | "down" | "left" | "right"
}

export function FadeReveal({
  children,
  className,
  delay = 0,
  duration = 0.6,
  direction = "up",
}: FadeRevealProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const controls = useAnimation()
  const isMobile = useMobile()
  const { shouldAnimate } = useAnimationState()

  // Skip animations on mobile or when disabled
  if (isMobile || !shouldAnimate) {
    return <div className={className}>{children}</div>
  }

  const directionOffset = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
  }

  React.useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {
          opacity: 0,
          ...directionOffset[direction],
        },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration,
            delay,
            ease: [0.25, 0.1, 0.25, 1],
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}
```

### 2. Add Animation Registry Entry

Add to `apps/v4/registry/new-york-v4/animations/_registry.ts` (alphabetical order):

```typescript
{
  name: "fade-reveal",
  type: "registry:ui",  // Animations use registry:ui type
  description: "Animated reveal effect with directional fade-in on scroll.",
  dependencies: ["motion/react"],
  registryDependencies: ["utils", "use-animation-state", "use-mobile"],
  files: [{
    path: "animations/fade-reveal/fade-reveal.tsx",
    type: "registry:ui",
  }],
  categories: ["animations"],
  tier: "free",
  readiness: "beta",
},
```

### 3. Create Example Demo

Create `apps/v4/registry/new-york-v4/examples/{name}-demo.tsx`:

```tsx
import { FadeReveal } from "@/registry/new-york-v4/animations/fade-reveal/fade-reveal"

export default function FadeRevealDemo() {
  return (
    <div className="space-y-8 p-8">
      <FadeReveal direction="up">
        <div className="rounded-lg bg-muted p-6">
          <h3 className="text-xl font-semibold">Fade Up</h3>
          <p className="text-muted-foreground">This fades in from below.</p>
        </div>
      </FadeReveal>

      <FadeReveal direction="left" delay={0.2}>
        <div className="rounded-lg bg-muted p-6">
          <h3 className="text-xl font-semibold">Fade Left</h3>
          <p className="text-muted-foreground">This fades in from the right.</p>
        </div>
      </FadeReveal>

      <FadeReveal direction="right" delay={0.4}>
        <div className="rounded-lg bg-muted p-6">
          <h3 className="text-xl font-semibold">Fade Right</h3>
          <p className="text-muted-foreground">This fades in from the left.</p>
        </div>
      </FadeReveal>
    </div>
  )
}
```

### 4. Add Example Registry Entry

Add to `apps/v4/registry/new-york-v4/examples/_registry.ts` (alphabetical order):

```typescript
{
  name: "fade-reveal-demo",
  type: "registry:example",
  registryDependencies: ["fade-reveal"],
  files: [{ path: "examples/fade-reveal-demo.tsx", type: "registry:example" }],
  tier: "free",
  categories: ["animations"],
  readiness: "beta",
},
```

## Common Animation Dependencies

| Hook/Utility | Purpose |
|--------------|---------|
| `use-animation-state` | Manages animation enable/disable state |
| `use-mobile` | Detects mobile devices (often skip heavy animations) |
| `utils` | `cn()` for className merging |

## Motion/React Patterns

### Scroll-triggered animations
```tsx
const isInView = useInView(ref, { once: true, margin: "-100px" })
```

### Spring animations
```tsx
transition: { type: "spring", stiffness: 300, damping: 30 }
```

### Staggered children
```tsx
variants={{
  visible: {
    transition: { staggerChildren: 0.1 }
  }
}}
```

### Gesture animations
```tsx
<motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
/>
```

## Performance Considerations

1. **Skip on mobile**: Many animations are too heavy for mobile
   ```tsx
   const isMobile = useMobile()
   if (isMobile) return <div>{children}</div>
   ```

2. **Use `once: true`**: Don't re-trigger scroll animations
   ```tsx
   useInView(ref, { once: true })
   ```

3. **Prefer transforms**: `x`, `y`, `scale`, `rotate` over `width`, `height`, `top`, `left`

4. **Use `will-change`** sparingly for complex animations
   ```tsx
   style={{ willChange: "transform" }}
   ```

## Build & Verify

```bash
# Build registry
bun run registry:build

# Start dev server
bun run v4:dev

# View animation: http://localhost:4000/view/new-york-v4/{name}-demo
# View docs: http://localhost:4000/docs/components/{name}
```

## Checklist

- [ ] Animation file in `animations/{name}/{name}.tsx`
- [ ] Uses `"use client"` directive
- [ ] Handles mobile gracefully (skip or simplify)
- [ ] Uses `useAnimationState` for enable/disable
- [ ] Registry entry with `type: "registry:ui"`
- [ ] Includes `motion/react` in dependencies
- [ ] Lists all registry dependencies (hooks, utils)
- [ ] Example demo created
- [ ] Example registry entry added
- [ ] Performance tested on lower-end devices
- [ ] Registry builds without errors
