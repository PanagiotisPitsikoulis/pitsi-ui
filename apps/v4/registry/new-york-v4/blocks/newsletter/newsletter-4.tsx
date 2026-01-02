"use client"

import Image from "next/image"

import { cn } from "@/lib/utils"
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

const newsletter4Defaults = {
  title: "Stay in the loop",
  description:
    "Join our newsletter and get access to exclusive content, early releases, and special discounts.",
  image: {
    src: "/placeholders/blocks/service-plants/1.webp",
    alt: "Newsletter",
  },
  placeholder: "Enter your email address",
  buttonLabel: "Subscribe Now",
}

export function Newsletter4({
  content = {},
  classNames = {},
}: NewsletterBlockProps) {
  const {
    title = newsletter4Defaults.title,
    description = newsletter4Defaults.description,
    image = newsletter4Defaults.image,
    placeholder = newsletter4Defaults.placeholder,
    buttonLabel = newsletter4Defaults.buttonLabel,
  } = content

  return (
    <section className={cn("bg-muted", classNames.root)}>
      <div
        className={cn("container px-6 py-16 md:py-24", classNames.container)}
      >
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2 lg:items-center">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:order-2">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="lg:order-1">
            <h2
              className={cn(
                "text-foreground mb-4 text-3xl font-bold md:text-4xl",
                classNames.header?.title
              )}
            >
              {title}
            </h2>
            <p
              className={cn(
                "text-muted-foreground mb-8 text-lg",
                classNames.header?.description
              )}
            >
              {description}
            </p>

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
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
