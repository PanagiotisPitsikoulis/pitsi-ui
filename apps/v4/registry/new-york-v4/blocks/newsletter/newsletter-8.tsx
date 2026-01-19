"use client"

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

const newsletter8Defaults = {
  title: "Never Miss a Travel Deal",
  description:
    "Join over 50,000 travelers who receive exclusive deals, destination guides, and travel tips every week.",
  placeholder: "you@example.com",
  buttonLabel: "Subscribe",
}

export function Newsletter8({
  content = {},
  classNames = {},
}: NewsletterBlockProps) {
  const {
    title = newsletter8Defaults.title,
    description = newsletter8Defaults.description,
    placeholder = newsletter8Defaults.placeholder,
    buttonLabel = newsletter8Defaults.buttonLabel,
  } = content

  return (
    <section className={cn("bg-foreground text-background", classNames.root)}>
      <div
        className={cn("container px-6 py-16 md:py-24", classNames.container)}
      >
        <SlideUp delay={0} distance={20}>
          <div className="mx-auto max-w-2xl text-center">
            {/* Icon */}
            <div className="bg-background/10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full">
              <DynamicIcon name="Globe" className="text-background h-8 w-8" />
            </div>

            <BlockHeader
              title={title}
              description={description}
              spacing="none"
              className="mb-8"
              classNames={{
                ...classNames.header,
                title: cn("text-background", classNames.header?.title),
                description: cn(
                  "text-background/70",
                  classNames.header?.description
                ),
              }}
            />

            {/* Form */}
            <div className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
              <Input
                type="email"
                placeholder={placeholder}
                className="border-background/20 bg-background/10 text-background placeholder:text-background/50 h-12 flex-1"
              />
              <Button size="lg" variant="secondary" className="h-12 shrink-0">
                {buttonLabel}
              </Button>
            </div>

            <p className="text-background/50 mt-6 text-sm">
              We respect your inbox. Unsubscribe anytime.
            </p>
          </div>
        </SlideUp>
      </div>
    </section>
  )
}
