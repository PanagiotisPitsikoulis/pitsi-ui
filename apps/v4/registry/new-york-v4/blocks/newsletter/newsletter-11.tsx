"use client"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
import { ScrollFade } from "@/registry/new-york-v4/animations/scroll-fade/scroll-fade"
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

const newsletter11Defaults = {
  title: "Join Our Travel Community",
  description:
    "Get weekly destination inspiration, travel tips, and exclusive deals delivered to your inbox.",
  placeholder: "Enter your email",
  buttonLabel: "Subscribe",
  benefits: [
    { icon: "Compass", text: "Weekly destination guides" },
    { icon: "Percent", text: "Exclusive discounts" },
    { icon: "ShieldCheck", text: "No spam, ever" },
  ],
}

export function Newsletter11({
  content = {},
  classNames = {},
}: NewsletterBlockProps) {
  const {
    title = newsletter11Defaults.title,
    description = newsletter11Defaults.description,
    placeholder = newsletter11Defaults.placeholder,
    buttonLabel = newsletter11Defaults.buttonLabel,
  } = content

  return (
    <section className={cn("bg-background", classNames.root)}>
      <div
        className={cn("container px-6 py-16 md:py-24", classNames.container)}
      >
        <ScrollFade delay={0}>
          <div className="mx-auto max-w-2xl text-center">
            <BlockHeader
              title={title}
              description={description}
              spacing="none"
              className="mb-8"
              classNames={classNames.header}
            />

            {/* Benefits */}
            <div className="mb-8 flex flex-wrap items-center justify-center gap-6">
              {newsletter11Defaults.benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-2">
                  <DynamicIcon
                    name={benefit.icon}
                    className="text-primary h-5 w-5"
                  />
                  <span className="text-foreground text-sm">
                    {benefit.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Input
                type="email"
                placeholder={placeholder}
                className="h-12 sm:w-80"
              />
              <Button size="lg" className="h-12">
                {buttonLabel}
              </Button>
            </div>

            <p className="text-muted-foreground mt-4 text-xs">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </ScrollFade>
      </div>
    </section>
  )
}
