"use client"

import Image from "next/image"
import Link from "next/link"

import { type HeroBlockProps } from "@/lib/blocks/hero.types"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"

import { HeroButton } from "../../ui/hero-button"

// Hero 7 - Floating Subjects (Dynamic scattered transparent images)
const hero7Defaults = {
  badge: "Elite Training",
  title: "Elevate Your\nFitness Game",
  description:
    "World-class equipment and expert coaching to push your limits and achieve your goals.",
  primaryCta: { label: "Start Training", href: "#" },
  secondaryCta: {
    label: "View Programs",
    href: "#",
    variant: "outline" as const,
  },
  // Floating subject images with transparent backgrounds
  floatingSubjects: [
    {
      src: "/elements/subject/gym/1.webp",
      alt: "Dumbbell",
      size: "lg",
      position: { top: "5%", right: "5%" },
      rotation: 12,
    },
    {
      src: "/elements/subject/gym/2.webp",
      alt: "Kettlebell",
      size: "md",
      position: { top: "35%", right: "25%" },
      rotation: -8,
    },
    {
      src: "/elements/subject/gym/3.webp",
      alt: "Weight plate",
      size: "sm",
      position: { top: "15%", right: "40%" },
      rotation: 20,
    },
    {
      src: "/elements/subject/gym/4.webp",
      alt: "Gym equipment",
      size: "md",
      position: { bottom: "20%", right: "8%" },
      rotation: -15,
    },
    {
      src: "/elements/subject/gym/5.webp",
      alt: "Fitness gear",
      size: "lg",
      position: { bottom: "5%", right: "30%" },
      rotation: 5,
    },
  ],
  stats: [
    { value: "50+", label: "Classes Weekly" },
    { value: "24/7", label: "Gym Access" },
    { value: "100%", label: "Results" },
  ],
}

const sizeMap = {
  sm: "h-20 w-20 lg:h-28 lg:w-28",
  md: "h-28 w-28 lg:h-40 lg:w-40",
  lg: "h-36 w-36 lg:h-52 lg:w-52",
}

export function Hero7({ content = {}, classNames = {} }: HeroBlockProps) {
  const {
    badge = hero7Defaults.badge,
    title = hero7Defaults.title,
    description = hero7Defaults.description,
    primaryCta = hero7Defaults.primaryCta,
    secondaryCta = hero7Defaults.secondaryCta,
    floatingSubjects = hero7Defaults.floatingSubjects,
    stats = hero7Defaults.stats,
  } = content as typeof hero7Defaults

  return (
    <section
      className={cn(
        "relative flex min-h-[calc(100svh-5rem)] flex-col overflow-hidden",
        classNames.root
      )}
    >
      {/* Gradient Background */}
      <div className="from-brand/5 via-background to-background pointer-events-none absolute inset-0 bg-gradient-to-br" />

      {/* Floating Subject Images */}
      <div className="pointer-events-none absolute inset-0">
        {floatingSubjects.map((subject, i) => (
          <div
            key={i}
            className={cn(
              "absolute hidden transition-transform duration-500 hover:scale-110 md:block",
              sizeMap[subject.size as keyof typeof sizeMap]
            )}
            style={{
              ...subject.position,
              transform: `rotate(${subject.rotation}deg)`,
            }}
          >
            <Image
              src={subject.src}
              alt={subject.alt}
              fill
              className="object-contain drop-shadow-2xl"
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container flex flex-1 items-center px-4 py-12">
        <div className="max-w-xl">
          {/* Badge */}
          {badge && (
            <div className="mb-6 inline-block">
              <span
                className={cn(
                  "bg-brand/10 text-brand rounded-full px-4 py-1.5 text-sm font-semibold tracking-widest uppercase",
                  classNames.header?.badge
                )}
              >
                {badge}
              </span>
            </div>
          )}

          {/* Main headline */}
          <h1
            className={cn(
              "display text-4xl leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl",
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

          {/* Description */}
          {description && (
            <p
              className={cn(
                "text-muted-foreground mt-6 text-lg md:text-xl",
                classNames.header?.description
              )}
            >
              {description}
            </p>
          )}

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
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
                className={cn("text-foreground", classNames.cta?.secondary)}
              >
                <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
              </Button>
            )}
          </div>

          {/* Stats Row */}
          <div className="mt-12 flex gap-8">
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="display text-brand text-2xl font-bold md:text-3xl">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: Show subjects in a row at bottom */}
      <div className="relative z-10 flex justify-center gap-4 overflow-x-auto px-4 pb-8 md:hidden">
        {floatingSubjects.slice(0, 3).map((subject, i) => (
          <div
            key={i}
            className="relative h-24 w-24 flex-shrink-0"
            style={{ transform: `rotate(${subject.rotation / 2}deg)` }}
          >
            <Image
              src={subject.src}
              alt={subject.alt}
              fill
              className="object-contain drop-shadow-xl"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
