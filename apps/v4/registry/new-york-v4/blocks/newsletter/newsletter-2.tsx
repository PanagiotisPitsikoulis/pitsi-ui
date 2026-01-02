"use client"

import { ArrowRight } from "lucide-react"

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

const newsletter2Defaults = {
  title: "Subscribe to our newsletter",
  placeholder: "Enter your email",
  buttonLabel: "Subscribe",
}

export function Newsletter2({
  content = {},
  classNames = {},
}: NewsletterBlockProps) {
  const {
    title = newsletter2Defaults.title,
    placeholder = newsletter2Defaults.placeholder,
    buttonLabel = newsletter2Defaults.buttonLabel,
  } = content

  return (
    <section className={cn("bg-muted", classNames.root)}>
      <div className={cn("container px-6 py-8", classNames.container)}>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-foreground text-lg font-medium">{title}</p>
          <div className="flex w-full max-w-md gap-2">
            <Input
              type="email"
              placeholder={placeholder}
              className="bg-background h-11"
            />
            <Button className="group h-11 shrink-0">
              {buttonLabel}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
