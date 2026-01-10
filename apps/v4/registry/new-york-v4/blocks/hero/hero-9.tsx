"use client"

import Image from "next/image"
import Link from "next/link"

import { type HeroBlockProps } from "@/lib/blocks/hero.types"
import { cn } from "@/lib/utils"
import { HeroText } from "@/registry/new-york-v4/lib/hero-text"
import { Button } from "@/registry/new-york-v4/ui/button"

import { HeroButton } from "../../ui/hero-button"

// Hero 9 - Masonry Grid (Variable height Pinterest-style)
const hero9Defaults = {
  badge: "Elevate Your Game",
  title: "Strength\nRedefined",
  description:
    "World-class coaching and cutting-edge facilities to transform your body and mind.",
  primaryCta: { label: "Join Now", href: "#" },
  secondaryCta: {
    label: "Watch Video",
    href: "#",
    variant: "outline" as const,
  },
  images: [
    {
      src: "/elements/portrait/gym/5.webp",
      alt: "Training session 1",
    },
    {
      src: "/elements/subject/gym/8.webp",
      alt: "Gym equipment",
    },
    {
      src: "/elements/portrait/gym/6.webp",
      alt: "Training session 2",
    },
  ],
}

export function Hero9({ content = {}, classNames = {} }: HeroBlockProps) {
  const {
    badge = hero9Defaults.badge,
    title = hero9Defaults.title,
    description = hero9Defaults.description,
    primaryCta = hero9Defaults.primaryCta,
    secondaryCta = hero9Defaults.secondaryCta,
    images = hero9Defaults.images,
  } = content as typeof hero9Defaults

  return (
    <section
      className={cn(
        "relative flex min-h-[calc(100svh-5rem)] flex-col overflow-hidden",
        classNames.root
      )}
    >
      <div className="container flex-1 px-4 py-6">
        <div className="grid h-full min-h-[calc(100svh-8rem)] gap-4 lg:grid-cols-4">
          {/* Column 1 - Tall Image */}
          <div className="bg-muted relative min-h-[20rem] overflow-hidden rounded-3xl lg:row-span-2 lg:min-h-full">
            <Image
              src={images[0].src}
              alt={images[0].alt}
              fill
              className="object-cover object-top"
              priority
            />
          </div>

          {/* Column 2 - Text Content */}
          <div className="flex flex-col gap-4 lg:col-span-2 lg:row-span-2">
            {/* Title Card */}
            <div className="bg-muted flex flex-1 flex-col justify-center rounded-3xl p-8 lg:p-10">
              <HeroText
                badge={badge}
                title={title}
                description={description}
                size="large"
                classNames={classNames.header}
              />

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
            </div>

            {/* Wide Image - Below text */}
            <div className="bg-muted relative min-h-[12rem] overflow-hidden rounded-3xl">
              <Image
                src={images[1].src}
                alt={images[1].alt}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Column 4 - Tall Image */}
          <div className="bg-muted relative min-h-[20rem] overflow-hidden rounded-3xl lg:row-span-2 lg:min-h-full">
            <Image
              src={images[2].src}
              alt={images[2].alt}
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
