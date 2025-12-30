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

// Hero 5 defaults - Fitness/Elite Training theme (full-bleed video style)
const hero5Defaults = {
  badge: "Elite Training",
  title: "Push Beyond\nYour Limits",
  description:
    "World-class coaching. Cutting-edge facilities.\nTransform your body and mind.",
  primaryCta: { label: "Join Now", href: "#" },
  secondaryCta: {
    label: "Watch Video",
    href: "#",
    variant: "outline" as const,
  },
  backgroundImage: {
    src: "/placeholders/blocks/service-fitness/subject/2.webp",
    alt: "Intense fitness training session",
    priority: true,
  },
}

export function Hero5({ content = {}, classNames = {} }: HeroBlockProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const scrollContainer = useScrollContainer()

  // Merge content with defaults
  const {
    badge = hero5Defaults.badge,
    title = hero5Defaults.title,
    description = hero5Defaults.description,
    primaryCta = hero5Defaults.primaryCta,
    secondaryCta = hero5Defaults.secondaryCta,
    backgroundImage = hero5Defaults.backgroundImage,
  } = content

  // Track scroll progress relative to the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    container: scrollContainer || undefined,
    offset: ["start start", "end start"],
  })

  // Parallax effect on background image (moves slower than scroll)
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  // Slight scale on background for depth
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  // Content fade out as user scrolls
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  // Content moves up as user scrolls
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -50])

  return (
    <section
      ref={sectionRef}
      className={cn(
        "relative -mt-20 flex min-h-[100svh] items-center justify-center overflow-hidden",
        classNames.root
      )}
    >
      {/* Full-bleed background image with parallax */}
      {backgroundImage && (
        <motion.div
          className={cn("absolute inset-0 z-0", classNames.background)}
          style={{
            y: backgroundY,
            scale: backgroundScale,
          }}
        >
          <Image
            draggable={false}
            src={backgroundImage.src}
            alt={backgroundImage.alt}
            fill
            priority={backgroundImage.priority}
            className="pointer-events-none object-cover object-center select-none"
          />
        </motion.div>
      )}

      {/* Dark overlay for text readability */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-black/50"
        aria-hidden="true"
      />

      {/* Centered content */}
      <motion.div
        className={cn(
          "relative z-10 flex flex-col items-center px-6 pt-20",
          classNames.container
        )}
        style={{
          opacity: contentOpacity,
          y: contentY,
        }}
      >
        {/* Tagline */}
        {badge && (
          <p
            className={cn(
              "relative z-10 mb-6 text-sm font-medium tracking-[0.3em] text-white/80 uppercase",
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
              "display text-center text-5xl leading-[0.9] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl",
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
                "mt-8 text-center text-lg text-white/80 md:text-xl lg:text-2xl",
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
            "relative z-10 mt-10 flex flex-col gap-3 sm:flex-row",
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
                "rounded-full border-white/30 bg-white/10 px-8 text-white backdrop-blur-sm hover:bg-white/20",
                classNames.cta?.secondary
              )}
              asChild
            >
              <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
            </Button>
          )}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        style={{ opacity: contentOpacity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest text-white/60 uppercase">
            Scroll
          </span>
          <div className="h-10 w-6 rounded-full border-2 border-white/30">
            <motion.div
              className="mx-auto mt-2 h-2 w-1 rounded-full bg-white/60"
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}

// Re-export for backwards compatibility
export { Hero5 as HeroFitnessFullBleed }
