"use client"

import { Suspense, lazy, ComponentType } from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { HeroButton } from "@/registry/new-york-v4/ui/hero-button"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

import {
  ThemeIcon,
  TypographyIcon,
  SpacingIcon,
  EasingIcon,
  ShadowIcon,
} from "./icons"

// Lazy load tool components
const ThemeGeneratorPageClient = lazy(
  () => import("@/app/(app)/(tools)/tools/theme-generator/page.client")
)
const SpacingGeneratorClient = lazy(
  () => import("@/app/(app)/(tools)/tools/spacing-generator/page.client")
)
const TypographyComposerClient = lazy(
  () => import("@/app/(app)/(tools)/tools/typography-composer/page.client")
)
const EasingComposerClient = lazy(
  () => import("@/app/(app)/(tools)/tools/easing-composer/page.client")
)
const ShadowComposerPageClient = lazy(
  () => import("@/app/(app)/(tools)/tools/shadow-composer/page.client")
)

interface Tool {
  id: string
  name: string
  tagline: string
  description: string
  features: string[]
  icon: ComponentType<{ className?: string }>
  href: string
  component: ComponentType<{ hasBackgroundDecoration?: boolean }>
}

export const tools: Tool[] = [
  {
    id: "easing-composer",
    name: "Easing Composer",
    tagline: "Craft motion that feels natural",
    description:
      "Design custom easing curves with an intuitive visual editor. Preview animations in real-time and fine-tune bezier control points to create motion that delights users. Export to CSS, JavaScript, or any animation library.",
    features: [
      "Visual bezier curve editor",
      "Real-time animation preview",
      "Export to CSS & JS formats",
    ],
    icon: EasingIcon,
    href: "/tools/easing-composer",
    component: EasingComposerClient,
  },
  {
    id: "shadow-composer",
    name: "Shadow Composer",
    tagline: "Shadows that add depth",
    description:
      "Create realistic, layered box shadows that bring your UI to life. Combine multiple shadow layers with precise control over blur, spread, and offset. Generate production-ready CSS with one click.",
    features: [
      "Multi-layer shadow stacking",
      "Real-time visual preview",
      "One-click CSS export",
    ],
    icon: ShadowIcon,
    href: "/tools/shadow-composer",
    component: ShadowComposerPageClient,
  },
  {
    id: "theme-generator",
    name: "Theme Generator",
    tagline: "Create stunning color palettes in seconds",
    description:
      "Generate complete, accessible color systems with perfect contrast ratios. Start from a single brand color and watch as complementary shades, tints, and semantic colors are automatically generated. Export to CSS variables, Tailwind config, or design tokens.",
    features: [
      "Auto-generate from a single color",
      "WCAG contrast checking",
      "Light & dark mode support",
    ],
    icon: ThemeIcon,
    href: "/tools/theme-generator",
    component: ThemeGeneratorPageClient,
  },
  {
    id: "typography-composer",
    name: "Typography Composer",
    tagline: "Type scales that work",
    description:
      "Build responsive typography systems with perfect vertical rhythm and modular scales. Choose from classic ratios like golden ratio and perfect fourth, or define your own. Preview font pairings and export fluid typography using modern CSS clamp().",
    features: [
      "Modular scale ratios",
      "Font pairing preview",
      "Responsive clamp() output",
    ],
    icon: TypographyIcon,
    href: "/tools/typography-composer",
    component: TypographyComposerClient,
  },
  {
    id: "spacing-generator",
    name: "Spacing Generator",
    tagline: "Systematic spacing scales",
    description:
      "Generate harmonious spacing systems based on mathematical ratios. Create consistent margins, paddings, and gaps that scale beautifully across breakpoints. Perfect for design tokens and component libraries.",
    features: [
      "Multiple scale algorithms",
      "Custom base & ratio",
      "Token export formats",
    ],
    icon: SpacingIcon,
    href: "/tools/spacing-generator",
    component: SpacingGeneratorClient,
  },
]

export function ToolShowcaseSection({
  tool,
  index,
}: {
  tool: Tool
  index: number
}) {
  const isReversed = index % 2 === 1
  const ToolComponent = tool.component
  const ToolIcon = tool.icon

  return (
    <section className="relative overflow-hidden">
      <div className="container px-6">
        <div
          className={cn(
            "flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12",
            isReversed && "lg:flex-row-reverse"
          )}
        >
          {/* Text Content - aligned to grid */}
          <div className="relative lg:w-5/12">
            {/* Background Icon Decoration */}
            <div
              className="text-brand/10 pointer-events-none absolute -right-10 top-0 -z-10"
            >
              <ToolIcon className="size-48 md:size-64" />
            </div>

            <div>
              <p className="text-brand text-sm font-semibold uppercase tracking-wider">
                {tool.name}
              </p>
              <Spacer size="sm" />
              <h2 className="display text-3xl tracking-tight md:text-5xl">
                {tool.tagline}
              </h2>
              <Spacer size="lg" />
              <p className="text-muted-foreground text-lg">{tool.description}</p>
              <Spacer size="lg" />
              <div className="flex flex-wrap gap-3">
                <Link href={tool.href}>
                  <HeroButton>{tool.name}</HeroButton>
                </Link>
              </div>
            </div>
          </div>

          {/* Tool Preview - Overflow Out of Screen - Full Width */}
          <div
            className={cn(
              "relative lg:w-full",
              isReversed ? "lg:-ml-64 lg:-translate-x-16" : "lg:-mr-64 lg:translate-x-16"
            )}
          >
            <div
              className="bg-background text-foreground dark relative min-h-[400px] overflow-hidden rounded-3xl border md:min-h-[500px]"
            >
              {/* Invisible overlay to block interactions */}
              <div className="absolute inset-0 z-10" />
              <Suspense
                fallback={
                  <div className="flex min-h-[400px] items-center justify-center md:min-h-[500px]">
                    <div className="text-muted-foreground">Loading...</div>
                  </div>
                }
              >
                <ToolComponent hasBackgroundDecoration={false} />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
