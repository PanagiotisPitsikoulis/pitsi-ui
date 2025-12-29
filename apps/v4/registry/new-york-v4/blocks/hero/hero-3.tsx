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

// Hero 3 defaults - Boat/Yacht theme
const hero3Defaults = {
  badge: "Luxury Marine Experiences",
  title: "Navigate Your\nPerfect Escape",
  description: "Premium yacht charters. Expert crew.\nEndless horizons await.",
  primaryCta: { label: "Explore Fleet", href: "#" },
  secondaryCta: {
    label: "Book Charter",
    href: "#",
    variant: "outline" as const,
  },
  image: {
    src: "/placeholders/blocks/service-boat/subject/1.webp",
    alt: "Luxury yacht on crystal waters",
    width: 950,
    height: 1140,
    priority: true,
  },
  backgroundImage: {
    src: "/placeholders/blocks/service-boat/assets/decoration-1.svg",
    alt: "",
  },
  decorationImages: [
    {
      src: "/placeholders/blocks/service-boat/assets/item-1.webp",
      alt: "Nautical decoration",
      width: 450,
      height: 450,
    },
  ],
}

export function Hero3({ content = {}, classNames = {} }: HeroBlockProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const scrollContainer = useScrollContainer()

  // Merge content with defaults
  const {
    badge = hero3Defaults.badge,
    title = hero3Defaults.title,
    description = hero3Defaults.description,
    primaryCta = hero3Defaults.primaryCta,
    secondaryCta = hero3Defaults.secondaryCta,
    image = hero3Defaults.image,
    backgroundImage = hero3Defaults.backgroundImage,
    decorationImages = hero3Defaults.decorationImages,
  } = content

  // Track scroll progress relative to the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    container: scrollContainer || undefined,
    offset: ["start end", "end start"],
  })

  // Hero image slides left as user scrolls (0 to -80px)
  const heroImageX = useTransform(scrollYProgress, [0, 1], [0, -80])

  // Anchor decoration has subtle floating effect (rotation)
  const anchorRotation = useTransform(scrollYProgress, [0, 1], [-8, 12])

  // Anchor floats up slightly on scroll
  const anchorY = useTransform(scrollYProgress, [0, 1], [0, -30])

  return (
    <section
      ref={sectionRef}
      className={cn(
        "relative -mt-20 flex min-h-[calc(70svh+5rem)] flex-col items-center overflow-x-clip px-6 pt-48 pb-16 lg:pt-56 lg:pb-48",
        classNames.root
      )}
    >
      {/* Background decoration - wave pattern */}
      {backgroundImage && (
        <div
          className={cn(
            "pointer-events-none absolute top-0 right-0 bottom-0 left-0 z-0 opacity-40",
            classNames.background
          )}
          style={{
            backgroundImage: `url('${backgroundImage.src}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          aria-hidden="true"
        />
      )}

      {/* Hero image - desktop: absolute left, slides left on scroll */}
      {image && (
        <motion.div
          className={cn(
            "pointer-events-none absolute -bottom-48 -left-36 z-0 hidden lg:block",
            classNames.image?.wrapper
          )}
          style={{ x: heroImageX }}
        >
          <Image
            draggable={false}
            src={image.src}
            alt={image.alt}
            width={image.width ?? 950}
            height={image.height ?? 1140}
            priority={image.priority}
            className={cn(
              "pointer-events-none object-contain select-none",
              classNames.image?.img
            )}
          />
        </motion.div>
      )}

      {/* Bottom right anchor decoration - floats and rotates on scroll */}
      {decorationImages?.[0] && (
        <motion.div
          className={cn(
            "pointer-events-none absolute z-20 hidden lg:block",
            classNames.decoration
          )}
          style={{
            bottom: "-6rem",
            right: "-8rem",
            rotate: anchorRotation,
            y: anchorY,
          }}
        >
          <Image
            draggable={false}
            src={decorationImages[0].src}
            alt={decorationImages[0].alt}
            width={decorationImages[0].width ?? 450}
            height={decorationImages[0].height ?? 450}
            className="pointer-events-none object-contain select-none"
          />
        </motion.div>
      )}

      {/* Content */}
      <div
        className={cn(
          "relative flex flex-col items-center",
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
              "display text-center text-4xl leading-[0.9] tracking-tight text-white sm:text-5xl md:text-7xl",
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
                "mt-8 text-center text-lg text-white/80 md:text-2xl",
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
      </div>

      {/* Hero image - mobile only - extends beyond section */}
      {image && (
        <div
          className={cn(
            "relative z-10 mt-8 h-[500px] w-full overflow-visible lg:hidden",
            classNames.image?.root
          )}
        >
          <Image
            draggable={false}
            src={image.src}
            alt={image.alt}
            width={image.width ?? 900}
            height={image.height ?? 1080}
            className="pointer-events-none absolute top-0 left-1/2 h-[700px] w-auto -translate-x-1/2 object-contain select-none"
          />
        </div>
      )}

      <Spacer className="hidden lg:block" size={"3xl"} />
    </section>
  )
}

// Re-export for backwards compatibility
export { Hero3 as HeroServiceBoat }
