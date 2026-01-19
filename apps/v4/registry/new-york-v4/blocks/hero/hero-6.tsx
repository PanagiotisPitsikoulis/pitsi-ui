"use client"

import Link from "next/link"

import { type HeroBlockProps } from "@/lib/blocks/hero.types"
import { cn } from "@/lib/utils"
import GridDistortion from "@/registry/new-york-v4/animations/grid-distortion/grid-distortion"
import { ScrollFade } from "@/registry/new-york-v4/animations/scroll-fade/scroll-fade"
import { HeroText } from "@/registry/new-york-v4/lib/hero-text"
import { Button } from "@/registry/new-york-v4/ui/button"

import { HeroButton } from "../../ui/hero-button"

// Hero 6 - GridDistortion on Featured Image + ScrollFade Content
const hero6Defaults = {
  badge: "Proven Results",
  title: "Train Smarter\nGet Stronger",
  description:
    "Evidence-based coaching. Measurable progress. Your transformation starts here.",
  primaryCta: { label: "Start Now", href: "#" },
  secondaryCta: {
    label: "See Results",
    href: "#",
    variant: "outline" as const,
  },
  mainImage: {
    src: "/elements/subject/gym/4.webp",
    alt: "Main fitness training",
  },
  gridDistortionConfig: {
    grid: 15,
    mouse: 0.15,
    strength: 0.2,
    relaxation: 0.9,
  },
  stats: [
    { value: "98%", label: "Success Rate" },
    { value: "10K+", label: "Transformations" },
    { value: "50+", label: "Expert Trainers" },
  ],
}

export function Hero6({ content = {}, classNames = {} }: HeroBlockProps) {
  const {
    badge = hero6Defaults.badge,
    title = hero6Defaults.title,
    description = hero6Defaults.description,
    primaryCta = hero6Defaults.primaryCta,
    secondaryCta = hero6Defaults.secondaryCta,
    mainImage = hero6Defaults.mainImage,
    gridDistortionConfig = hero6Defaults.gridDistortionConfig,
    stats = hero6Defaults.stats,
  } = content as typeof hero6Defaults

  return (
    <section
      className={cn(
        "bg-background relative flex min-h-[calc(100svh-5rem)] flex-col overflow-hidden",
        classNames.root
      )}
    >
      <div className="container flex-1 px-4 py-6">
        <div className="grid h-full min-h-[calc(100svh-8rem)] gap-6 lg:grid-cols-2">
          {/* Left: Text Content with ScrollFade */}
          <ScrollFade scrollBased={false} delay={0.2}>
            <div className="flex flex-col justify-center py-8 lg:py-12">
              <HeroText
                badge={badge}
                title={title}
                description={description}
                size="large"
                classNames={classNames.header}
              />

              {/* Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                {primaryCta && (
                  <Link
                    href={primaryCta.href}
                    className={classNames.cta?.primary}
                  >
                    <HeroButton>{primaryCta.label}</HeroButton>
                  </Link>
                )}
                {secondaryCta && (
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className={cn("text-foreground", classNames.cta?.secondary)}
                  >
                    <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
                  </Button>
                )}
              </div>

              {/* Stats Grid with Distortion Effect */}
              <div className="mt-12 grid grid-cols-3 gap-4">
                {stats.map((stat, i) => (
                  <ScrollFade key={i} scrollBased={false} delay={0.3 + i * 0.1}>
                    <div className="bg-muted border-brand/20 hover:border-brand/50 rounded-2xl border p-4 text-center transition-colors">
                      <div className="display text-brand text-2xl font-bold md:text-3xl">
                        {stat.value}
                      </div>
                      <div className="text-muted-foreground mt-1 text-sm">
                        {stat.label}
                      </div>
                    </div>
                  </ScrollFade>
                ))}
              </div>
            </div>
          </ScrollFade>

          {/* Right: GridDistortion Image */}
          <ScrollFade scrollBased={false} delay={0.4}>
            <div className="relative min-h-[25rem] overflow-hidden rounded-3xl lg:min-h-full">
              <GridDistortion
                grid={gridDistortionConfig.grid}
                mouse={gridDistortionConfig.mouse}
                strength={gridDistortionConfig.strength}
                relaxation={gridDistortionConfig.relaxation}
                imageSrc={mainImage.src}
                className="h-full w-full"
              />
              {/* Gradient overlay for depth */}
              <div className="from-background/30 pointer-events-none absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />
              {/* Corner accent */}
              <div className="bg-brand absolute right-4 bottom-4 rounded-full px-4 py-2">
                <span className="text-foreground text-sm font-semibold">
                  Interactive
                </span>
              </div>
            </div>
          </ScrollFade>
        </div>
      </div>
    </section>
  )
}

// Re-export for backwards compatibility
export { Hero6 as HeroFitnessStats }
