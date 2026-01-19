"use client"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Input } from "@/registry/new-york-v4/ui/input"

interface NewsletterBlockProps {
  content?: {
    title?: string
    placeholder?: string
    buttonLabel?: string
  }
  classNames?: {
    root?: string
    container?: string
  }
}

const newsletter7Defaults = {
  title: "Get exclusive travel deals in your inbox",
  placeholder: "Enter your email",
  buttonLabel: "Subscribe",
}

export function Newsletter7({
  content = {},
  classNames = {},
}: NewsletterBlockProps) {
  const {
    title = newsletter7Defaults.title,
    placeholder = newsletter7Defaults.placeholder,
    buttonLabel = newsletter7Defaults.buttonLabel,
  } = content

  return (
    <section className={cn("bg-muted", classNames.root)}>
      <div className={cn("container px-6 py-8", classNames.container)}>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
              <DynamicIcon name="Plane" className="text-primary h-5 w-5" />
            </div>
            <p className="text-foreground text-lg font-medium">{title}</p>
          </div>
          <div className="flex w-full max-w-md gap-2">
            <Input
              type="email"
              placeholder={placeholder}
              className="bg-background h-11"
            />
            <Button className="group h-11 shrink-0">
              {buttonLabel}
              <DynamicIcon
                name="ArrowRight"
                className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
              />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
