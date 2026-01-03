"use client"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
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

const newsletter3Defaults = {
  title: "Join 50,000+ subscribers",
  description: "Get the latest news and updates delivered to your inbox.",
  placeholder: "Enter your email",
  buttonLabel: "Subscribe",
  benefits: [
    { icon: "Bell", text: "Weekly insights" },
    { icon: "Gift", text: "Exclusive offers" },
    { icon: "Shield", text: "No spam, ever" },
  ],
}

export function Newsletter3({
  content = {},
  classNames = {},
}: NewsletterBlockProps) {
  const {
    title = newsletter3Defaults.title,
    description = newsletter3Defaults.description,
    placeholder = newsletter3Defaults.placeholder,
    buttonLabel = newsletter3Defaults.buttonLabel,
  } = content

  return (
    <section className={cn("bg-background", classNames.root)}>
      <div
        className={cn("container px-6 py-16 md:py-24", classNames.container)}
      >
        <div className="mx-auto max-w-2xl text-center">
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
              "text-muted-foreground mb-8",
              classNames.header?.description
            )}
          >
            {description}
          </p>

          {/* Benefits */}
          <div className="mb-8 flex flex-wrap items-center justify-center gap-6">
            {newsletter3Defaults.benefits.map((benefit, i) => (
              <div key={i} className="flex items-center gap-2">
                <DynamicIcon
                  name={benefit.icon}
                  className="text-primary h-5 w-5"
                />
                <span className="text-foreground text-sm">{benefit.text}</span>
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
      </div>
    </section>
  )
}
