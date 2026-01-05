"use client"

import Image from "next/image"
import Link from "next/link"

import { type HeroBlockProps } from "@/lib/blocks/hero.types"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"

import { HeroButton } from "../../ui/hero-button"

// Hero 8 - Subject Spotlight (Large centered transparent subject behind glass card)
const hero8Defaults = {
  badge: "Transform Your Body",
  title: "Strength\nRedefined",
  description:
    "Professional-grade equipment meets expert guidance. Your transformation starts with the right tools.",
  primaryCta: { label: "Get Started", href: "#" },
  secondaryCta: {
    label: "View Equipment",
    href: "#",
    variant: "outline" as const,
  },
  // Large hero subject (transparent background)
  heroSubject: {
    src: "/elements/subject/gym/8.webp",
    alt: "Premium gym equipment",
  },
  // Accent subjects floating around
  accentSubjects: [
    {
      src: "/elements/subject/gym/1.webp",
      alt: "Dumbbell",
      position: { top: "10%", left: "5%" },
      size: 120,
      rotation: -15,
    },
    {
      src: "/elements/subject/gym/3.webp",
      alt: "Weight",
      position: { bottom: "15%", left: "8%" },
      size: 100,
      rotation: 10,
    },
    {
      src: "/elements/subject/gym/2.webp",
      alt: "Kettlebell",
      position: { top: "20%", right: "5%" },
      size: 90,
      rotation: 20,
    },
    {
      src: "/elements/subject/gym/4.webp",
      alt: "Equipment",
      position: { bottom: "20%", right: "10%" },
      size: 110,
      rotation: -10,
    },
  ],
  features: [
    { icon: "💪", label: "Pro Equipment" },
    { icon: "🎯", label: "Expert Coaching" },
    { icon: "⚡", label: "Fast Results" },
  ],
}

export function Hero8({ content = {}, classNames = {} }: HeroBlockProps) {
  const {
    badge = hero8Defaults.badge,
    title = hero8Defaults.title,
    description = hero8Defaults.description,
    primaryCta = hero8Defaults.primaryCta,
    secondaryCta = hero8Defaults.secondaryCta,
    heroSubject = hero8Defaults.heroSubject,
    accentSubjects = hero8Defaults.accentSubjects,
    features = hero8Defaults.features,
  } = content as typeof hero8Defaults

  return (
    <section
      className={cn(
        "relative flex min-h-[calc(100svh-5rem)] flex-col overflow-hidden",
        classNames.root
      )}
    >
      {/* Radial Gradient Background */}
      <div className="from-brand/10 pointer-events-none absolute inset-0 bg-radial-[ellipse_80%_60%_at_50%_40%] via-transparent to-transparent" />

      {/* Large Hero Subject - Centered Behind */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="relative h-[70%] w-[70%] opacity-30 lg:h-[80%] lg:w-[60%] lg:opacity-40">
          <Image
            src={heroSubject.src}
            alt={heroSubject.alt}
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Floating Accent Subjects */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        {accentSubjects.map((subject, i) => (
          <div
            key={i}
            className="absolute opacity-60 transition-transform duration-500"
            style={{
              ...subject.position,
              width: subject.size,
              height: subject.size,
              transform: `rotate(${subject.rotation}deg)`,
            }}
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

      {/* Content Container */}
      <div className="relative z-10 container flex flex-1 items-center justify-center px-4 py-12">
        {/* Glassmorphism Card */}
        <div className="bg-background/70 w-full max-w-2xl rounded-3xl p-8 text-center shadow-2xl backdrop-blur-xl md:p-12">
          {/* Badge */}
          {badge && (
            <div className="mb-6 inline-block">
              <span
                className={cn(
                  "bg-brand text-brand-foreground rounded-full px-4 py-1.5 text-sm font-semibold tracking-widest uppercase",
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
                "text-muted-foreground mx-auto mt-6 max-w-md text-lg md:text-xl",
                classNames.header?.description
              )}
            >
              {description}
            </p>
          )}

          {/* Feature Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {features.map((feature, i) => (
              <div
                key={i}
                className="bg-muted/50 flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
              >
                <span>{feature.icon}</span>
                <span>{feature.label}</span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
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
        </div>
      </div>
    </section>
  )
}
