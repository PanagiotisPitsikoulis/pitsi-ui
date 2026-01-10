"use client"

import Link from "next/link"

import { type CtaBlockProps } from "@/lib/blocks/cta.types"
import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
import { ParallaxImage } from "@/registry/new-york-v4/animations/background-image-parallax/background-image-parallax"
import { Button } from "@/registry/new-york-v4/ui/button"

const cta2Defaults = {
  title: "Transform Your Space",
  description:
    "Join thousands of plant lovers who have already transformed their homes with our curated collection.",
  image: {
    src: "/elements/landscape/plants/1.webp",
    alt: "Plants in natural setting",
  },
  primaryCta: { label: "Shop Plants", href: "#" },
  secondaryCta: { label: "Learn More", href: "#" },
  features: ["Free shipping over $50", "30-day guarantee", "Expert plant care"],
}

export function Cta2({ content = {}, classNames = {} }: CtaBlockProps) {
  const {
    title = cta2Defaults.title,
    description = cta2Defaults.description,
    image = cta2Defaults.image,
    primaryCta = cta2Defaults.primaryCta,
    secondaryCta = cta2Defaults.secondaryCta,
  } = content

  return (
    <section
      className={cn(
        "bg-gradient-to-br from-[#52796f] to-[#344e41]",
        classNames.root
      )}
    >
      <div
        className={cn("container px-6 py-16 md:py-24", classNames.container)}
      >
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image with Parallax */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:order-2">
            {image && (
              <ParallaxImage
                src={image.src}
                alt={image.alt}
                className="absolute inset-0 -top-[10%] h-[120%]"
                range={["-5%", "5%"]}
                offset={["start end", "end start"]}
              />
            )}
          </div>

          {/* Content */}
          <div className="lg:order-1">
            <h2
              className={cn(
                "mb-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl",
                classNames.header?.title
              )}
            >
              {title}
            </h2>
            <p
              className={cn(
                "mb-8 text-lg text-white/80",
                classNames.header?.description
              )}
            >
              {description}
            </p>

            <div className="mb-8 flex flex-col gap-4 sm:flex-row">
              {primaryCta && (
                <Button
                  size="lg"
                  className="group bg-white text-[#344e41] hover:bg-white/90"
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

            <div className="flex flex-wrap gap-4 text-sm text-white/70">
              {cta2Defaults.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4 text-[#84a98c]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
