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

// Hero 6 defaults - Fitness/Stats theme
const hero6Defaults = {
  badge: "Proven Results",
  title: "Train Smarter\nGet Stronger",
  description:
    "Evidence-based coaching. Measurable progress.\nYour transformation starts with data.",
  primaryCta: { label: "Start Now", href: "#" },
  secondaryCta: {
    label: "See Results",
    href: "#",
    variant: "outline" as const,
  },
  image: {
    src: "/placeholders/blocks/service-fitness/subject/3.webp",
    alt: "Fitness training with results",
    width: 800,
    height: 1000,
    priority: true,
  },
  stats: [
    { value: "500+", label: "Clients" },
    { value: "98%", label: "Goal Achievement" },
    { value: "10+", label: "Years Experience" },
  ],
}

interface Hero6Stats {
  value: string
  label: string
}

interface Hero6Props extends HeroBlockProps {
  content?: HeroBlockProps["content"] & {
    stats?: Hero6Stats[]
  }
}

export function Hero6({ content = {}, classNames = {} }: Hero6Props) {
  const sectionRef = useRef<HTMLElement>(null)
  const scrollContainer = useScrollContainer()

  // Merge content with defaults
  const {
    badge = hero6Defaults.badge,
    title = hero6Defaults.title,
    description = hero6Defaults.description,
    primaryCta = hero6Defaults.primaryCta,
    secondaryCta = hero6Defaults.secondaryCta,
    image = hero6Defaults.image,
  } = content
  const stats = (content as Hero6Props["content"])?.stats ?? hero6Defaults.stats

  // Track scroll progress relative to the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    container: scrollContainer || undefined,
    offset: ["start end", "end start"],
  })

  // Parallax Y effect on the image (moves slower than scroll)
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80])

  // Subtle scale effect
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 1])

  return (
    <section
      ref={sectionRef}
      className={cn(
        "relative -mt-20 min-h-[calc(80svh+5rem)] overflow-x-clip",
        classNames.root
      )}
    >
      {/* Grid layout: content+stats on left, image on right */}
      <div className="grid min-h-[calc(80svh+5rem)] lg:grid-cols-2">
        {/* Left side - Content and Stats */}
        <div
          className={cn(
            "relative z-10 flex flex-col justify-center px-6 py-20 pt-28 lg:px-16 lg:py-20",
            classNames.container
          )}
        >
          {/* Tagline */}
          {badge && (
            <p
              className={cn(
                "text-brand relative z-10 mb-6 text-sm font-medium tracking-[0.3em] uppercase",
                classNames.header?.badge
              )}
            >
              {badge}
            </p>
          )}

          {/* Typography block with knockout effect */}
          <KnockoutText padX={40} padY={50} intensity={1}>
            {/* Main headline */}
            <h1
              className={cn(
                "display text-4xl leading-[0.9] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl",
                classNames.header?.title
              )}
            >
              {title.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i < title.split("\n").length - 1 && <br />}
                </span>
              ))}
            </h1>

            {/* Subheading */}
            {description && (
              <p
                className={cn(
                  "mt-8 text-lg text-white/80 md:text-xl lg:text-2xl",
                  classNames.header?.description
                )}
              >
                {description.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < description.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </p>
            )}
          </KnockoutText>

          {/* Buttons - above blend layer */}
          <div
            className={cn(
              "relative z-10 mt-10 flex flex-row gap-3",
              classNames.cta?.root
            )}
          >
            {primaryCta && (
              <Link href={primaryCta.href} className={classNames.cta?.primary}>
                <HeroButton>{primaryCta.label}</HeroButton>
              </Link>
            )}
            {secondaryCta && (
              <Button
                variant={secondaryCta.variant ?? "outline"}
                size="lg"
                className={cn(
                  "bg-background text-foreground rounded-full px-8",
                  classNames.cta?.secondary
                )}
                asChild
              >
                <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
              </Button>
            )}
          </div>

          {/* Stats row - separated by border */}
          {stats && stats.length > 0 && (
            <div className="border-border/50 relative z-10 mt-12 border-t pt-8">
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center lg:text-left">
                    <div className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground mt-1 text-xs font-medium tracking-wide uppercase sm:text-sm">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <Spacer className="hidden lg:block" size={"xl"} />
        </div>

        {/* Right side - Image with parallax */}
        <div className="relative z-0 hidden overflow-hidden lg:block">
          {image && (
            <motion.div
              className={cn(
                "absolute inset-0 h-full w-full",
                classNames.image?.wrapper
              )}
              style={{ y: imageY, scale: imageScale }}
            >
              <Image
                draggable={false}
                src={image.src}
                alt={image.alt}
                fill
                priority={image.priority}
                className={cn(
                  "pointer-events-none object-cover object-center select-none",
                  classNames.image?.img
                )}
              />
              {/* Subtle gradient overlay on left edge for blend */}
              <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r to-transparent" />
            </motion.div>
          )}
        </div>

        {/* Mobile image - shown below content on mobile */}
        <div className="relative h-[300px] overflow-hidden lg:hidden">
          {image && (
            <Image
              draggable={false}
              src={image.src}
              alt={image.alt}
              fill
              priority={image.priority}
              className="pointer-events-none object-cover object-center select-none"
            />
          )}
        </div>
      </div>
    </section>
  )
}

// Re-export for backwards compatibility
export { Hero6 as HeroFitnessStats }
