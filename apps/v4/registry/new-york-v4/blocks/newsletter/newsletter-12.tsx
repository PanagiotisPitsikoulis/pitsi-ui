"use client"

import { useState } from "react"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
import { SlideUp } from "@/registry/new-york-v4/animations/slide-up/slide-up"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Input } from "@/registry/new-york-v4/ui/input"

interface NewsletterBlockProps {
  content?: {
    title?: string
    description?: string
    placeholder?: string
    buttonLabel?: string
  }
  classNames?: {
    root?: string
    container?: string
    header?: { title?: string; description?: string }
  }
}

const newsletter12Defaults = {
  title: "Get 15% Off Your First Trip",
  description:
    "Subscribe and receive an exclusive discount code for your next adventure.",
  placeholder: "Your email",
  buttonLabel: "Get My Discount",
}

export function Newsletter12({
  content = {},
  classNames = {},
}: NewsletterBlockProps) {
  const {
    title = newsletter12Defaults.title,
    description = newsletter12Defaults.description,
    placeholder = newsletter12Defaults.placeholder,
    buttonLabel = newsletter12Defaults.buttonLabel,
  } = content

  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <section className={cn("bg-background", classNames.root)}>
      <div
        className={cn("container px-6 py-16 md:py-24", classNames.container)}
      >
        <SlideUp delay={0} distance={20}>
          <div className="mx-auto max-w-md">
            <div className="border-border bg-card relative overflow-hidden rounded-2xl border p-8 shadow-lg">
              {/* Close button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2"
                onClick={() => setIsVisible(false)}
              >
                <DynamicIcon name="X" className="h-4 w-4" />
              </Button>

              {/* Decorative element */}
              <div className="bg-primary/5 absolute -top-12 -right-12 h-32 w-32 rounded-full" />
              <div className="bg-primary/5 absolute -bottom-8 -left-8 h-24 w-24 rounded-full" />

              {/* Content */}
              <div className="relative text-center">
                <div className="bg-primary/10 mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full">
                  <DynamicIcon name="Plane" className="text-primary h-7 w-7" />
                </div>

                <BlockHeader
                  title={title}
                  description={description}
                  titleAs="h3"
                  spacing="none"
                  className="mb-6"
                  classNames={{
                    ...classNames.header,
                    title: cn("text-xl", classNames.header?.title),
                    description: cn("text-sm", classNames.header?.description),
                  }}
                />

                <div className="space-y-3">
                  <Input
                    type="email"
                    placeholder={placeholder}
                    className="h-11 text-center"
                  />
                  <Button className="w-full">{buttonLabel}</Button>
                </div>

                <p className="text-muted-foreground mt-4 text-xs">
                  No spam. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>
        </SlideUp>
      </div>
    </section>
  )
}
