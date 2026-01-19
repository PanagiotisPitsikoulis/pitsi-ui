"use client"

import Image from "next/image"
import Link from "next/link"

import { type CtaBlockProps } from "@/lib/blocks/cta.types"
import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
import { SlideUp } from "@/registry/new-york-v4/animations/slide-up/slide-up"
import { Button } from "@/registry/new-york-v4/ui/button"

const cta8Defaults = {
  badge: "Adventure Awaits",
  title: "Book Your Next Adventure",
  description:
    "Discover breathtaking destinations and create memories that last a lifetime. Let us plan your perfect getaway.",
  image: {
    src: "/elements/landscape/plane/1.webp",
    alt: "Airplane flying over mountains",
  },
  primaryCta: { label: "Start Exploring", href: "#" },
  secondaryCta: { label: "View Destinations", href: "#" },
}

export function Cta8({ content = {}, classNames = {} }: CtaBlockProps) {
  const {
    title = cta8Defaults.title,
    description = cta8Defaults.description,
    image = cta8Defaults.image,
    primaryCta = cta8Defaults.primaryCta,
    secondaryCta = cta8Defaults.secondaryCta,
  } = content

  return (
    <section className={cn("relative overflow-hidden", classNames.root)}>
      {/* Background Image */}
      {image && (
        <div className="absolute inset-0">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0369a1]/90 via-[#0284c7]/80 to-[#0ea5e9]/70" />
        </div>
      )}

      <div
        className={cn(
          "relative z-10 container px-6 py-20 md:py-32",
          classNames.container
        )}
      >
        <div className="mx-auto max-w-3xl text-center">
          <SlideUp delay={0}>
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
              <DynamicIcon name="Plane" className="h-4 w-4" />
              {cta8Defaults.badge}
            </div>
          </SlideUp>

          <SlideUp delay={0.1}>
            <h2
              className={cn(
                "mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl",
                classNames.header?.title
              )}
            >
              {title}
            </h2>
          </SlideUp>

          <SlideUp delay={0.2}>
            <p
              className={cn(
                "mb-10 text-lg text-white/90 md:text-xl",
                classNames.header?.description
              )}
            >
              {description}
            </p>
          </SlideUp>

          <SlideUp delay={0.3}>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              {primaryCta && (
                <Button
                  size="lg"
                  className="group bg-white text-[#0369a1] hover:bg-white/90"
                  asChild
                >
                  <Link href={primaryCta.href}>
                    {primaryCta.label}
                    <DynamicIcon
                      name="ArrowRight"
                      className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </Button>
              )}
              {secondaryCta && (
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                  asChild
                >
                  <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
                </Button>
              )}
            </div>
          </SlideUp>
        </div>
      </div>
    </section>
  )
}
