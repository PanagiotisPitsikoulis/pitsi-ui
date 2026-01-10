"use client"

import { useState } from "react"
import Link from "next/link"

import { type HeroBlockProps } from "@/lib/blocks/hero.types"
import { cn } from "@/lib/utils"
import FuzzyText from "@/registry/new-york-v4/animations/fuzzy-text/fuzzy-text"
import { ScrollExpand } from "@/registry/new-york-v4/animations/scroll-expand/scroll-expand"
import { HeroText } from "@/registry/new-york-v4/lib/hero-text"
import { Button } from "@/registry/new-york-v4/ui/button"
import { HeroButton } from "@/registry/new-york-v4/ui/hero-button"

// Hero 25 - Service Library/Docs Hero with ScrollExpand + FuzzyText
// Technical polish for documentation sites and developer tools
const hero25Defaults = {
  badge: "v2.0 Released",
  title: "pitsi/ui",
  subtitle: "Beautiful components for modern apps",
  description:
    "Accessible and customizable components that you can copy and paste into your apps. Free. Open Source. Built with Radix UI and Tailwind CSS.",
  primaryCta: { label: "Get Started", href: "/docs" },
  secondaryCta: {
    label: "Components",
    href: "/docs/components",
    variant: "outline" as const,
  },
  codeExample: {
    command: "npx pitsi add button",
    output: [
      "Installing button...",
      "Created: src/components/ui/button.tsx",
      "Updated: package.json",
      "Done in 1.2s",
    ],
  },
  features: [
    { label: "50+ Components", icon: "components" },
    { label: "TypeScript", icon: "typescript" },
    { label: "Dark Mode", icon: "theme" },
    { label: "Accessible", icon: "accessible" },
  ],
}

export function Hero25({ content = {}, classNames = {} }: HeroBlockProps) {
  const [isHovering, setIsHovering] = useState(false)
  const {
    badge = hero25Defaults.badge,
    title = hero25Defaults.title,
    subtitle = hero25Defaults.subtitle,
    description = hero25Defaults.description,
    primaryCta = hero25Defaults.primaryCta,
    secondaryCta = hero25Defaults.secondaryCta,
    codeExample = hero25Defaults.codeExample,
    features = hero25Defaults.features,
  } = content as typeof hero25Defaults

  return (
    <section
      className={cn(
        "relative flex min-h-[calc(100svh-5rem)] flex-col items-center justify-center overflow-hidden px-6 py-24",
        classNames.root
      )}
    >
      {/* Grid pattern background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Radial gradient overlay */}
      <div className="from-background via-background/80 to-background pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--background)_70%)]" />

      {/* Content */}
      <div
        className={cn(
          "relative z-10 mx-auto max-w-5xl text-center",
          classNames.container
        )}
      >
        {/* Badge */}
        {badge && (
          <div className="mb-6 inline-flex items-center gap-2">
            <span className="bg-muted text-muted-foreground rounded-full px-3 py-1 font-mono text-xs font-medium">
              {badge}
            </span>
          </div>
        )}

        {/* Title with FuzzyText on hover */}
        <div
          className="mb-4 flex flex-col items-center justify-center"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="relative flex items-center justify-center">
            {isHovering ? (
              <FuzzyText
                fontSize="clamp(3rem, 10vw, 6rem)"
                fontWeight={700}
                fontFamily="var(--font-heading), system-ui, sans-serif"
                color="hsl(var(--foreground))"
                enableHover={true}
                baseIntensity={0.15}
                hoverIntensity={0.4}
                fuzzRange={20}
                direction="horizontal"
                className="cursor-pointer"
              >
                {title}
              </FuzzyText>
            ) : (
              <h1
                className="cursor-pointer font-heading text-[clamp(3rem,10vw,6rem)] font-bold tracking-tight"
                style={{ lineHeight: 1.1 }}
              >
                {title}
              </h1>
            )}
          </div>
        </div>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-muted-foreground mb-6 text-lg md:text-xl">
            {subtitle}
          </p>
        )}

        {/* Description */}
        <HeroText
          title=""
          description={description}
          size="default"
          align="center"
          classNames={{
            ...classNames.header,
            title: "hidden",
            description: cn(
              "max-w-2xl mx-auto",
              classNames.header?.description
            ),
          }}
        />

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {primaryCta && (
            <Link href={primaryCta.href} className={classNames.cta?.primary}>
              <HeroButton>{primaryCta.label}</HeroButton>
            </Link>
          )}
          {secondaryCta && (
            <Button
              asChild
              variant="outline"
              size="lg"
              className={cn("rounded-full px-6", classNames.cta?.secondary)}
            >
              <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
            </Button>
          )}
        </div>

        {/* Code Preview with ScrollExpand */}
        <ScrollExpand
          marginX="2rem"
          borderRadius="1.5rem"
          scrollBased={true}
          className="mx-auto mt-16 w-full max-w-2xl"
        >
          <div className="bg-neutral-950 overflow-hidden rounded-xl border border-neutral-800 shadow-2xl">
            {/* Terminal header */}
            <div className="flex items-center gap-2 border-b border-neutral-800 bg-neutral-900 px-4 py-3">
              <div className="size-3 rounded-full bg-red-500/80" />
              <div className="size-3 rounded-full bg-yellow-500/80" />
              <div className="size-3 rounded-full bg-green-500/80" />
              <span className="ml-3 font-mono text-xs text-neutral-500">
                terminal
              </span>
            </div>

            {/* Terminal content */}
            <div className="p-4 font-mono text-sm">
              {/* Command line */}
              <div className="flex items-center gap-2">
                <span className="text-green-400">$</span>
                <span className="text-neutral-100">{codeExample.command}</span>
                <span className="ml-1 inline-block h-4 w-2 animate-pulse bg-neutral-400" />
              </div>

              {/* Output lines */}
              <div className="mt-4 space-y-1">
                {codeExample.output.map((line, i) => (
                  <div
                    key={i}
                    className={cn(
                      "text-xs",
                      line.includes("Done")
                        ? "text-green-400"
                        : line.includes("Created")
                          ? "text-blue-400"
                          : line.includes("Updated")
                            ? "text-yellow-400"
                            : "text-neutral-500"
                    )}
                  >
                    {line}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollExpand>

        {/* Features strip */}
        {features && features.length > 0 && (
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
            {features.map((feature, i) => (
              <div
                key={i}
                className="text-muted-foreground flex items-center gap-2 text-sm"
              >
                <FeatureIcon type={feature.icon} />
                <span>{feature.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

// Simple icon component for features
function FeatureIcon({ type }: { type: string }) {
  const iconClass = "size-4 text-muted-foreground"

  switch (type) {
    case "components":
      return (
        <svg
          className={iconClass}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
        </svg>
      )
    case "typescript":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
        </svg>
      )
    case "theme":
      return (
        <svg
          className={iconClass}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      )
    case "accessible":
      return (
        <svg
          className={iconClass}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="4" r="2" />
          <path d="M12 6v6m0 0l-4 4m4-4l4 4" />
          <path d="M8 10h8" />
        </svg>
      )
    default:
      return (
        <svg
          className={iconClass}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4M12 8h.01" />
        </svg>
      )
  }
}

// Re-export for backwards compatibility
export { Hero25 as HeroLibraryDocs }
