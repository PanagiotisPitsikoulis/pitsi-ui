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

// Hero 4 defaults - Fitness/Personal Training theme
const hero4Defaults = {
  badge: "Transform Your Body",
  title: "Unlock Your\nFull Potential",
  description:
    "Personalized training programs. Expert guidance.\nResults that last a lifetime.",
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
  decorationImages: [
    {
      src: "/placeholders/blocks/service-fitness/assets/item-1.webp",
      alt: "Fitness decoration",
      width: 300,
      height: 300,
    },
  ],
}

export function Hero4({ content = {}, classNames = {} }: HeroBlockProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const scrollContainer = useScrollContainer()

  // Merge content with defaults
  const {
    badge = hero4Defaults.badge,
    title = hero4Defaults.title,
    description = hero4Defaults.description,
    primaryCta = hero4Defaults.primaryCta,
    secondaryCta = hero4Defaults.secondaryCta,
    image = hero4Defaults.image,
    backgroundImage = hero4Defaults.backgroundImage,
    decorationImages = hero4Defaults.decorationImages,
  } = content

  // Track scroll progress relative to the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    container: scrollContainer || undefined,
    offset: ["start end", "end start"],
  })

  // Image scale effect - slight zoom out as user scrolls (1.05 to 1)
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 1])

  // Subtle parallax on the image (moves slower than scroll)
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 50])

  // Decoration rotation as user scrolls
  const decorationRotation = useTransform(scrollYProgress, [0, 1], [0, 15])

  return (
    <section
      ref={sectionRef}
      className={cn(
        "relative -mt-20 flex min-h-[calc(80svh+5rem)] flex-col overflow-x-clip lg:flex-row",
        classNames.root
      )}
    >
      {/* Background decoration - extends up behind header */}
      {backgroundImage && (
        <div
          className={cn(
            "pointer-events-none absolute top-0 right-0 bottom-0 left-0 z-0 opacity-30",
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

      {/* Left side - Image */}
      <div className="relative z-10 flex w-full items-center justify-center overflow-hidden pt-20 lg:w-1/2 lg:pt-0">
        {image && (
          <motion.div
            className={cn(
              "relative h-[400px] w-full lg:h-full",
              classNames.image?.wrapper
            )}
            style={{ scale: imageScale, y: imageY }}
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
            {/* Gradient overlay for text readability on mobile */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
          </motion.div>
        )}

        {/* Decoration element */}
        {decorationImages?.[0] && (
          <motion.div
            className={cn(
              "pointer-events-none absolute bottom-8 left-8 z-20 hidden lg:block",
              classNames.decoration
            )}
            style={{
              rotate: decorationRotation,
            }}
          >
            <Image
              draggable={false}
              src={decorationImages[0].src}
              alt={decorationImages[0].alt}
              width={decorationImages[0].width ?? 300}
              height={decorationImages[0].height ?? 300}
              className="pointer-events-none object-contain select-none"
            />
          </motion.div>
        )}
      </div>

      {/* Right side - Content */}
      <div
        className={cn(
          "relative z-10 flex w-full flex-col justify-center px-6 py-16 lg:w-1/2 lg:px-16 lg:py-0",
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

        <Spacer className="hidden lg:block" size={"xl"} />
      </div>
    </section>
  )
}

// Re-export for backwards compatibility
export { Hero4 as HeroFitnessSplit }
