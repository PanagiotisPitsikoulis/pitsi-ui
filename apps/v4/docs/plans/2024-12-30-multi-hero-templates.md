# Multi-Hero Templates Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Enable templates to have multiple hero options with a UI to swap between them, defaulting to one.

**Architecture:** Extend template-config.ts to support `heroOptions: string[]` alongside `heroBlock` (default). Add a hero switcher UI component to the template viewer toolbar. Store selected hero in URL search params for shareability.

**Tech Stack:** Next.js, React, TypeScript, Tailwind CSS, Lucide icons, motion/react

---

## Task 1: Create Hero 4 - Split Layout (Image Left, Content Right)

**Files:**
- Create: `registry/new-york-v4/blocks/hero/hero-4.tsx`
- Modify: `registry/new-york-v4/blocks/_registry.ts`

**Step 1: Create the hero block file**

```tsx
// registry/new-york-v4/blocks/hero/hero-4.tsx
"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "motion/react"

import { type HeroBlockProps } from "@/lib/blocks/hero.types"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"
import { HeroButton } from "@/registry/new-york-v4/ui/hero-button"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"
import { KnockoutText } from "@/app/(app)/(content)/(blocks)/_block_components"
import { useScrollContainer } from "@/app/(app)/(content)/(blocks)/_components"

// Hero 4 defaults - Fitness/Personal Training theme - Split layout
const hero4Defaults = {
  badge: "Transform Your Body",
  title: "Unlock Your\nFull Potential",
  description:
    "Expert personal training. Customized programs.\nResults that last a lifetime.",
  primaryCta: { label: "Start Training", href: "#" },
  secondaryCta: {
    label: "View Programs",
    href: "#",
    variant: "outline" as const,
  },
  image: {
    src: "/placeholders/blocks/service-fitness/subject/1.webp",
    alt: "Personal trainer in action",
    width: 800,
    height: 1000,
    priority: true,
  },
  backgroundImage: {
    src: "/placeholders/blocks/service-fitness/assets/decoration-1.svg",
    alt: "",
  },
}

export function Hero4({ content = {}, classNames = {} }: HeroBlockProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const scrollContainer = useScrollContainer()

  const {
    badge = hero4Defaults.badge,
    title = hero4Defaults.title,
    description = hero4Defaults.description,
    primaryCta = hero4Defaults.primaryCta,
    secondaryCta = hero4Defaults.secondaryCta,
    image = hero4Defaults.image,
    backgroundImage = hero4Defaults.backgroundImage,
  } = content

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    container: scrollContainer || undefined,
    offset: ["start end", "end start"],
  })

  // Image scales slightly on scroll
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.05])

  return (
    <section
      ref={sectionRef}
      className={cn(
        "relative -mt-20 flex min-h-[calc(80svh+5rem)] flex-col overflow-x-clip px-6 pt-32 pb-16 lg:flex-row lg:items-center lg:pt-40 lg:pb-24",
        classNames.root
      )}
    >
      {/* Background */}
      {backgroundImage && (
        <div
          className={cn(
            "pointer-events-none absolute inset-0 z-0 opacity-30",
            classNames.background
          )}
          style={{
            backgroundImage: `url('${backgroundImage.src}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
      )}

      {/* Left: Image */}
      <div className="relative z-10 flex-1 lg:pr-12">
        {image && (
          <motion.div
            className="relative aspect-[4/5] w-full max-w-lg mx-auto lg:mx-0 overflow-hidden rounded-3xl"
            style={{ scale: imageScale }}
          >
            <Image
              draggable={false}
              src={image.src}
              alt={image.alt}
              fill
              priority={image.priority}
              className="object-cover"
            />
          </motion.div>
        )}
      </div>

      {/* Right: Content */}
      <div className={cn("relative z-10 flex-1 mt-12 lg:mt-0 lg:pl-12", classNames.container)}>
        {badge && (
          <p className={cn("text-brand mb-6 text-sm font-medium tracking-[0.3em] uppercase", classNames.header?.badge)}>
            {badge}
          </p>
        )}

        <KnockoutText padX={40} padY={50} intensity={1}>
          <h1 className={cn("display text-4xl leading-[0.9] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl", classNames.header?.title)}>
            {title.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i < title.split("\n").length - 1 && <br />}
              </span>
            ))}
          </h1>

          {description && (
            <p className={cn("mt-8 text-lg text-white/80 md:text-xl", classNames.header?.description)}>
              {description.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i < description.split("\n").length - 1 && <br />}
                </span>
              ))}
            </p>
          )}
        </KnockoutText>

        <div className={cn("relative z-10 mt-10 flex flex-row gap-3", classNames.cta?.root)}>
          {primaryCta && (
            <Link href={primaryCta.href}>
              <HeroButton>{primaryCta.label}</HeroButton>
            </Link>
          )}
          {secondaryCta && (
            <Button variant={secondaryCta.variant ?? "outline"} size="lg" className="bg-background text-foreground rounded-full px-8" asChild>
              <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
            </Button>
          )}
        </div>
      </div>

      <Spacer className="hidden lg:block" size={"xl"} />
    </section>
  )
}

export { Hero4 as HeroFitnessSplit }
```

**Step 2: Add registry entry**

Add to `registry/new-york-v4/blocks/_registry.ts` after hero-3:

```ts
  {
    name: "hero-4",
    type: "registry:block",
    description: "Split layout hero with image left and content right - fitness theme",
    dependencies: ["motion/react"],
    registryDependencies: ["button", "hero-button", "spacer"],
    files: [
      {
        path: "blocks/hero/hero-4.tsx",
        type: "registry:block",
      },
    ],
    categories: ["hero", "service-fitness"],
    tier: "free",
    readiness: "production",
  },
```

**Step 3: Build registry**

Run: `bun run registry:build`
Expected: Build succeeds with hero-4 included

**Step 4: Commit**

```bash
git add registry/new-york-v4/blocks/hero/hero-4.tsx registry/new-york-v4/blocks/_registry.ts
git commit -m "feat: add hero-4 split layout block for fitness template"
```

---

## Task 2: Create Hero 5 - Video Background Style

**Files:**
- Create: `registry/new-york-v4/blocks/hero/hero-5.tsx`
- Modify: `registry/new-york-v4/blocks/_registry.ts`

**Step 1: Create the hero block file**

```tsx
// registry/new-york-v4/blocks/hero/hero-5.tsx
"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "motion/react"

import { type HeroBlockProps } from "@/lib/blocks/hero.types"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"
import { HeroButton } from "@/registry/new-york-v4/ui/hero-button"
import { KnockoutText } from "@/app/(app)/(content)/(blocks)/_block_components"
import { useScrollContainer } from "@/app/(app)/(content)/(blocks)/_components"

// Hero 5 defaults - Fitness/Personal Training - Full bleed with overlay
const hero5Defaults = {
  badge: "Elite Training",
  title: "Push Beyond\nYour Limits",
  description: "High-performance coaching for athletes and fitness enthusiasts.",
  primaryCta: { label: "Book Session", href: "#" },
  secondaryCta: {
    label: "Our Approach",
    href: "#",
    variant: "outline" as const,
  },
  image: {
    src: "/placeholders/blocks/service-fitness/subject/2.webp",
    alt: "Intense training session",
    width: 1920,
    height: 1080,
    priority: true,
  },
}

export function Hero5({ content = {}, classNames = {} }: HeroBlockProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const scrollContainer = useScrollContainer()

  const {
    badge = hero5Defaults.badge,
    title = hero5Defaults.title,
    description = hero5Defaults.description,
    primaryCta = hero5Defaults.primaryCta,
    secondaryCta = hero5Defaults.secondaryCta,
    image = hero5Defaults.image,
  } = content

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    container: scrollContainer || undefined,
    offset: ["start end", "end start"],
  })

  // Parallax effect on background
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])

  return (
    <section
      ref={sectionRef}
      className={cn(
        "relative -mt-20 flex min-h-[100svh] flex-col items-center justify-center overflow-hidden",
        classNames.root
      )}
    >
      {/* Full bleed background image with parallax */}
      {image && (
        <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
          <Image
            draggable={false}
            src={image.src}
            alt={image.alt}
            fill
            priority={image.priority}
            className="object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
      )}

      {/* Content - centered */}
      <div className={cn("relative z-10 px-6 text-center", classNames.container)}>
        {badge && (
          <p className={cn("text-brand mb-6 text-sm font-medium tracking-[0.3em] uppercase", classNames.header?.badge)}>
            {badge}
          </p>
        )}

        <KnockoutText padX={40} padY={50} intensity={0.8}>
          <h1 className={cn("display text-5xl leading-[0.9] tracking-tight text-white sm:text-6xl md:text-8xl", classNames.header?.title)}>
            {title.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i < title.split("\n").length - 1 && <br />}
              </span>
            ))}
          </h1>

          {description && (
            <p className={cn("mx-auto mt-8 max-w-xl text-lg text-white/80 md:text-2xl", classNames.header?.description)}>
              {description}
            </p>
          )}
        </KnockoutText>

        <div className={cn("relative z-10 mt-10 flex flex-row justify-center gap-3", classNames.cta?.root)}>
          {primaryCta && (
            <Link href={primaryCta.href}>
              <HeroButton>{primaryCta.label}</HeroButton>
            </Link>
          )}
          {secondaryCta && (
            <Button variant={secondaryCta.variant ?? "outline"} size="lg" className="bg-white/10 text-white border-white/30 hover:bg-white/20 rounded-full px-8 backdrop-blur-sm" asChild>
              <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}

export { Hero5 as HeroFitnessFullBleed }
```

**Step 2: Add registry entry**

Add to `registry/new-york-v4/blocks/_registry.ts`:

```ts
  {
    name: "hero-5",
    type: "registry:block",
    description: "Full bleed hero with parallax background image - fitness theme",
    dependencies: ["motion/react"],
    registryDependencies: ["button", "hero-button"],
    files: [
      {
        path: "blocks/hero/hero-5.tsx",
        type: "registry:block",
      },
    ],
    categories: ["hero", "service-fitness"],
    tier: "free",
    readiness: "production",
  },
```

**Step 3: Build registry**

Run: `bun run registry:build`

**Step 4: Commit**

```bash
git add registry/new-york-v4/blocks/hero/hero-5.tsx registry/new-york-v4/blocks/_registry.ts
git commit -m "feat: add hero-5 full bleed parallax block for fitness template"
```

---

## Task 3: Create Hero 6 - Stats Focused Layout

**Files:**
- Create: `registry/new-york-v4/blocks/hero/hero-6.tsx`
- Modify: `registry/new-york-v4/blocks/_registry.ts`

**Step 1: Create the hero block file**

```tsx
// registry/new-york-v4/blocks/hero/hero-6.tsx
"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "motion/react"

import { type HeroBlockProps } from "@/lib/blocks/hero.types"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"
import { HeroButton } from "@/registry/new-york-v4/ui/hero-button"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"
import { KnockoutText } from "@/app/(app)/(content)/(blocks)/_block_components"
import { useScrollContainer } from "@/app/(app)/(content)/(blocks)/_components"

// Hero 6 defaults - Fitness with stats
const hero6Defaults = {
  badge: "Proven Results",
  title: "Train Smarter\nGet Stronger",
  description: "Data-driven personal training that delivers measurable results.",
  primaryCta: { label: "Get Started", href: "#" },
  secondaryCta: {
    label: "Success Stories",
    href: "#",
    variant: "outline" as const,
  },
  image: {
    src: "/placeholders/blocks/service-fitness/subject/3.webp",
    alt: "Trainer with client",
    width: 600,
    height: 800,
    priority: true,
  },
  stats: [
    { value: "500+", label: "Clients Transformed" },
    { value: "98%", label: "Goal Achievement" },
    { value: "10+", label: "Years Experience" },
  ],
}

export function Hero6({ content = {}, classNames = {} }: HeroBlockProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const scrollContainer = useScrollContainer()

  const {
    badge = hero6Defaults.badge,
    title = hero6Defaults.title,
    description = hero6Defaults.description,
    primaryCta = hero6Defaults.primaryCta,
    secondaryCta = hero6Defaults.secondaryCta,
    image = hero6Defaults.image,
  } = content

  const stats = hero6Defaults.stats

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    container: scrollContainer || undefined,
    offset: ["start end", "end start"],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <section
      ref={sectionRef}
      className={cn(
        "relative -mt-20 flex min-h-[calc(80svh+5rem)] flex-col overflow-x-clip px-6 pt-40 pb-16 lg:pt-48 lg:pb-24",
        classNames.root
      )}
    >
      {/* Content wrapper */}
      <div className="container mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left: Content */}
          <div className={cn("relative z-10", classNames.container)}>
            {badge && (
              <p className={cn("text-brand mb-6 text-sm font-medium tracking-[0.3em] uppercase", classNames.header?.badge)}>
                {badge}
              </p>
            )}

            <KnockoutText padX={40} padY={50} intensity={1}>
              <h1 className={cn("display text-4xl leading-[0.9] tracking-tight text-white sm:text-5xl md:text-6xl", classNames.header?.title)}>
                {title.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < title.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </h1>

              {description && (
                <p className={cn("mt-8 text-lg text-white/80 md:text-xl", classNames.header?.description)}>
                  {description}
                </p>
              )}
            </KnockoutText>

            <div className={cn("relative z-10 mt-10 flex flex-row gap-3", classNames.cta?.root)}>
              {primaryCta && (
                <Link href={primaryCta.href}>
                  <HeroButton>{primaryCta.label}</HeroButton>
                </Link>
              )}
              {secondaryCta && (
                <Button variant={secondaryCta.variant ?? "outline"} size="lg" className="bg-background text-foreground rounded-full px-8" asChild>
                  <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
                </Button>
              )}
            </div>

            {/* Stats row */}
            <div className="mt-12 grid grid-cols-3 gap-8 border-t border-white/20 pt-8">
              {stats.map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl font-bold text-white md:text-4xl">{stat.value}</div>
                  <div className="mt-1 text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <motion.div className="relative z-10" style={{ y: imageY }}>
            {image && (
              <div className="relative aspect-[3/4] w-full max-w-md mx-auto overflow-hidden rounded-3xl">
                <Image
                  draggable={false}
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority={image.priority}
                  className="object-cover"
                />
              </div>
            )}
          </motion.div>
        </div>
      </div>

      <Spacer className="hidden lg:block" size={"xl"} />
    </section>
  )
}

export { Hero6 as HeroFitnessStats }
```

**Step 2: Add registry entry**

Add to `registry/new-york-v4/blocks/_registry.ts`:

```ts
  {
    name: "hero-6",
    type: "registry:block",
    description: "Hero with stats row and side image - fitness theme",
    dependencies: ["motion/react"],
    registryDependencies: ["button", "hero-button", "spacer"],
    files: [
      {
        path: "blocks/hero/hero-6.tsx",
        type: "registry:block",
      },
    ],
    categories: ["hero", "service-fitness"],
    tier: "free",
    readiness: "production",
  },
```

**Step 3: Build registry**

Run: `bun run registry:build`

**Step 4: Commit**

```bash
git add registry/new-york-v4/blocks/hero/hero-6.tsx registry/new-york-v4/blocks/_registry.ts
git commit -m "feat: add hero-6 stats-focused block for fitness template"
```

---

## Task 4: Extend Template Config for Multiple Heroes

**Files:**
- Modify: `app/(app)/(content)/(blocks)/template-config.ts`

**Step 1: Add heroOptions to types**

Update `BaseTemplateConfig` interface:

```ts
export interface BaseTemplateConfig {
  slug: string
  name: string
  description: string
  palette: ColorPalette
  heroBlock: string // Default hero
  heroOptions?: string[] // Available hero alternatives (including default)
}
```

**Step 2: Add heroOptions to service-fitness template**

In the `templates` object, update service-fitness:

```ts
"service-fitness": {
  type: "service",
  slug: "service-fitness",
  name: "Personal Training",
  description: "A professional template for personal trainers and fitness coaches",
  palette: "slate",
  heroBlock: "hero-4", // Default
  heroOptions: ["hero-4", "hero-5", "hero-6"], // All options
  blocks: [
    { name: "header-1", tint: "tinted", forceLight: true },
    { name: "hero-4", tint: "tinted", forceLight: true }, // Uses default
    // ... rest of blocks
  ],
},
```

**Step 3: Add helper function**

```ts
// Get available hero options for a template
export function getTemplateHeroOptions(slug: string): string[] {
  const template = templates[slug]
  if (!template) return []
  return template.heroOptions || [template.heroBlock]
}

// Get default hero for a template
export function getTemplateDefaultHero(slug: string): string | null {
  const template = templates[slug]
  return template?.heroBlock || null
}
```

**Step 4: Commit**

```bash
git add app/(app)/(content)/(blocks)/template-config.ts
git commit -m "feat: add heroOptions support to template config"
```

---

## Task 5: Update blocks.tsx for Dynamic Hero Selection

**Files:**
- Modify: `app/(app)/(content)/(blocks)/blocks.tsx`

**Step 1: Add hero selection parameter**

Update `getTemplateBlocks` function:

```ts
// Get all blocks for a template, optionally with a different hero
export function getTemplateBlocks(
  slug: string,
  selectedHero?: string
): Array<{
  name: string
  type: BlockType
  Component: ComponentType
  tint?: TintLevel
  forceDark?: boolean
  forceLight?: boolean
}> {
  const config = getTemplateConfig(slug)
  if (!config) return []

  const blocks: Array<{
    name: string
    type: BlockType
    Component: ComponentType
    tint?: TintLevel
    forceDark?: boolean
    forceLight?: boolean
  }> = []

  for (const blockConfig of config.blocks) {
    let blockName = blockConfig.name

    // If this is a hero block and we have a selected hero, swap it
    if (selectedHero && getBlockType(blockConfig.name) === "hero") {
      blockName = selectedHero
    }

    const Component = getBlockComponent(blockName)
    const blockType = getBlockType(blockName)

    if (Component && blockType) {
      blocks.push({
        name: blockName,
        type: blockType,
        Component,
        tint: blockConfig.tint,
        forceDark: blockConfig.forceDark,
        forceLight: blockConfig.forceLight,
      })
    }
  }

  return blocks
}
```

**Step 2: Commit**

```bash
git add app/(app)/(content)/(blocks)/blocks.tsx
git commit -m "feat: add selectedHero parameter to getTemplateBlocks"
```

---

## Task 6: Create Hero Switcher UI Component

**Files:**
- Create: `app/(app)/(content)/(blocks)/_components/hero-switcher.tsx`
- Modify: `app/(app)/(content)/(blocks)/_components/index.ts`

**Step 1: Create the component**

```tsx
// app/(app)/(content)/(blocks)/_components/hero-switcher.tsx
"use client"

import { Check, Layers2 } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/registry/new-york-v4/ui/dropdown-menu"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/new-york-v4/ui/tooltip"

interface HeroSwitcherProps {
  heroOptions: string[]
  selectedHero: string
  onHeroChange: (hero: string) => void
  defaultHero: string
}

export function HeroSwitcher({
  heroOptions,
  selectedHero,
  onHeroChange,
  defaultHero,
}: HeroSwitcherProps) {
  if (heroOptions.length <= 1) return null

  return (
    <DropdownMenu>
      <Tooltip>
        <TooltipTrigger asChild>
          <DropdownMenuTrigger className="text-muted-foreground hover:bg-background/50 hover:text-foreground flex size-9 items-center justify-center rounded-full transition-colors">
            <Layers2 className="size-4" />
          </DropdownMenuTrigger>
        </TooltipTrigger>
        <TooltipContent side="bottom" className="text-xs">
          Switch Hero Style
        </TooltipContent>
      </Tooltip>
      <DropdownMenuContent align="end">
        <DropdownMenuRadioGroup value={selectedHero} onValueChange={onHeroChange}>
          {heroOptions.map((hero) => (
            <DropdownMenuRadioItem key={hero} value={hero}>
              <span className="flex items-center gap-2">
                {hero}
                {hero === defaultHero && (
                  <span className="text-muted-foreground text-xs">(default)</span>
                )}
              </span>
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
```

**Step 2: Export from index**

Add to `app/(app)/(content)/(blocks)/_components/index.ts`:

```ts
export { HeroSwitcher } from "./hero-switcher"
```

**Step 3: Commit**

```bash
git add app/(app)/(content)/(blocks)/_components/hero-switcher.tsx app/(app)/(content)/(blocks)/_components/index.ts
git commit -m "feat: add HeroSwitcher component for template hero selection"
```

---

## Task 7: Integrate Hero Switcher into Template Viewer

**Files:**
- Modify: `app/(app)/(content)/(blocks)/template/[slug]/page.client.tsx`

**Step 1: Import dependencies and add state**

Add imports:
```tsx
import { useSearchParams, useRouter, usePathname } from "next/navigation"
import { HeroSwitcher } from "../../_components"
import { getTemplateHeroOptions, getTemplateDefaultHero } from "../../template-config"
```

Add inside component:
```tsx
const searchParams = useSearchParams()
const pathname = usePathname()

// Hero selection
const heroOptions = getTemplateHeroOptions(slug)
const defaultHero = getTemplateDefaultHero(slug) || heroOptions[0]
const selectedHero = searchParams.get("hero") || defaultHero

const handleHeroChange = useCallback((hero: string) => {
  const params = new URLSearchParams(searchParams.toString())
  if (hero === defaultHero) {
    params.delete("hero")
  } else {
    params.set("hero", hero)
  }
  router.push(`${pathname}?${params.toString()}`, { scroll: false })
}, [defaultHero, pathname, router, searchParams])
```

**Step 2: Update getTemplateBlocks call**

```tsx
const blocks = getTemplateBlocks(slug as TemplateSlug, selectedHero)
```

**Step 3: Add HeroSwitcher to toolbar**

After the fullscreen button, before refresh:
```tsx
{/* Hero switcher */}
{heroOptions.length > 1 && (
  <HeroSwitcher
    heroOptions={heroOptions}
    selectedHero={selectedHero}
    onHeroChange={handleHeroChange}
    defaultHero={defaultHero}
  />
)}
```

**Step 4: Commit**

```bash
git add app/(app)/(content)/(blocks)/template/[slug]/page.client.tsx
git commit -m "feat: integrate hero switcher into template viewer toolbar"
```

---

## Task 8: Create Placeholder Assets for Fitness Heroes

**Files:**
- Create: `public/placeholders/blocks/service-fitness/subject/1.webp`
- Create: `public/placeholders/blocks/service-fitness/subject/2.webp`
- Create: `public/placeholders/blocks/service-fitness/subject/3.webp`
- Create: `public/placeholders/blocks/service-fitness/assets/decoration-1.svg`

**Step 1: Create directory structure**

```bash
mkdir -p public/placeholders/blocks/service-fitness/subject
mkdir -p public/placeholders/blocks/service-fitness/assets
```

**Step 2: Copy placeholder images**

Use existing fitness-related images or create placeholder SVGs temporarily. For MVP, can copy from another template and rename.

**Step 3: Commit**

```bash
git add public/placeholders/blocks/service-fitness/
git commit -m "feat: add placeholder assets for fitness heroes"
```

---

## Task 9: Update service-fitness Template to Use hero-4 as Default

**Files:**
- Modify: `app/(app)/(content)/(blocks)/template-config.ts`
- Modify: `registry/new-york-v4/blocks/service/service-fitness.tsx`

**Step 1: Update template-config.ts**

Change the service-fitness blocks to use hero-4:

```ts
"service-fitness": {
  // ... other config
  heroBlock: "hero-4",
  heroOptions: ["hero-4", "hero-5", "hero-6"],
  blocks: [
    { name: "header-1", tint: "tinted", forceLight: true },
    { name: "hero-4", tint: "tinted", forceLight: true }, // Changed from hero-1
    // ... rest unchanged
  ],
},
```

**Step 2: Update service-fitness.tsx**

Import and use Hero4 instead of Hero1:

```tsx
import { Hero4 } from "../hero/hero-4"
// ...
const blocks: Array<...> = [
  { Component: Header1, tint: "tinted", forceLight: true, type: "header" },
  { Component: Hero4, tint: "tinted", forceLight: true, type: "hero" }, // Changed
  // ...
]
```

**Step 3: Build registry**

Run: `bun run registry:build`

**Step 4: Commit**

```bash
git add app/(app)/(content)/(blocks)/template-config.ts registry/new-york-v4/blocks/service/service-fitness.tsx
git commit -m "feat: update service-fitness to use hero-4 as default with hero switching"
```

---

## Task 10: Final Testing and Build Verification

**Step 1: Run full build**

```bash
bun run registry:build
bun run typecheck
bun run lint
```

**Step 2: Start dev server and test**

```bash
bun run v4:dev
```

Navigate to `/template/service-fitness` and verify:
- Default hero (hero-4) displays correctly
- Hero switcher appears in toolbar
- Switching heroes updates the preview
- URL updates with `?hero=hero-5` etc.
- Sharing URL with hero param shows correct hero

**Step 3: Final commit**

```bash
git add -A
git commit -m "feat: complete multi-hero template system with hero switcher UI"
```

---

## Summary

This plan implements:
1. **3 new hero blocks** (hero-4, hero-5, hero-6) with fitness/personal training theme
2. **Template heroOptions** - templates can specify multiple hero alternatives
3. **Hero switcher UI** - dropdown in template viewer toolbar
4. **URL-based hero selection** - shareable links with `?hero=` param
5. **Default hero** - each template has a designated default

The architecture is extensible - any template can add `heroOptions` to enable hero switching.
