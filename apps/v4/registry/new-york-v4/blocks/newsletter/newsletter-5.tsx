"use client"

import { useState } from "react"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
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

const newsletter5Defaults = {
  title: "Get 10% Off",
  description: "Subscribe and receive an exclusive discount code.",
  placeholder: "Your email",
  buttonLabel: "Get Discount",
}

export function Newsletter5({
  content = {},
  classNames = {},
}: NewsletterBlockProps) {
  const {
    title = newsletter5Defaults.title,
    description = newsletter5Defaults.description,
    placeholder = newsletter5Defaults.placeholder,
    buttonLabel = newsletter5Defaults.buttonLabel,
  } = content

  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <section className={cn("bg-background", classNames.root)}>
      <div
        className={cn("container px-6 py-16 md:py-24", classNames.container)}
      >
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

            {/* Content */}
            <div className="text-center">
              <div className="bg-primary/10 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                <svg
                  className="text-primary h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
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
      </div>
    </section>
  )
}
