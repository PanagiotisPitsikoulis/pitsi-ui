"use client"

import Image from "next/image"

import { cn } from "@/lib/utils"
import { ScrollFade } from "@/registry/new-york-v4/animations/scroll-fade/scroll-fade"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Input } from "@/registry/new-york-v4/ui/input"

interface NewsletterBlockProps {
  content?: {
    title?: string
    description?: string
    image?: { src: string; alt: string }
    placeholder?: string
    buttonLabel?: string
  }
  classNames?: {
    root?: string
    container?: string
    header?: { title?: string; description?: string }
  }
}

const newsletter9Defaults = {
  title: "Discover Your Next Destination",
  description:
    "Get curated travel guides, insider tips, and exclusive deals delivered straight to your inbox.",
  image: {
    src: "/elements/landscape/travel/1.webp",
    alt: "Beautiful travel destination",
  },
  placeholder: "Enter your email address",
  buttonLabel: "Start Exploring",
}

export function Newsletter9({
  content = {},
  classNames = {},
}: NewsletterBlockProps) {
  const {
    title = newsletter9Defaults.title,
    description = newsletter9Defaults.description,
    image = newsletter9Defaults.image,
    placeholder = newsletter9Defaults.placeholder,
    buttonLabel = newsletter9Defaults.buttonLabel,
  } = content

  return (
    <section className={cn("bg-muted", classNames.root)}>
      <div
        className={cn("container px-6 py-16 md:py-24", classNames.container)}
      >
        <ScrollFade delay={0}>
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2 lg:items-center">
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:order-2">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
              <div className="from-foreground/40 absolute inset-0 bg-gradient-to-t to-transparent" />
              <div className="absolute right-4 bottom-4 left-4">
                <p className="text-background text-sm font-medium">
                  Featured Destination
                </p>
                <p className="text-background/80 text-xs">
                  Explore hidden gems around the world
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="lg:order-1">
              <BlockHeader
                title={title}
                description={description}
                align="left"
                spacing="none"
                className="mb-8"
                classNames={classNames.header}
              />

              <div className="space-y-4">
                <Input
                  type="email"
                  placeholder={placeholder}
                  className="bg-background h-12"
                />
                <Button size="lg" className="w-full">
                  {buttonLabel}
                </Button>
              </div>

              <p className="text-muted-foreground mt-4 text-sm">
                Join 25,000+ travelers. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </ScrollFade>
      </div>
    </section>
  )
}
