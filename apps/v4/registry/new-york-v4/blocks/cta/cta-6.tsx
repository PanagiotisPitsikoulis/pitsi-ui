"use client"

import { useState } from "react"
import Link from "next/link"

import { type CtaBlockProps } from "@/lib/blocks/cta.types"
import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Input } from "@/registry/new-york-v4/ui/input"

const cta6Defaults = {
  badge: "Wait! Before you go...",
  title: "Get 25% Off Your Order",
  description: "Sign up now and we'll send you an exclusive discount code.",
  placeholder: "Enter your email",
  primaryCta: { label: "Get My Discount", href: "#" },
  terms: "By signing up, you agree to our Terms and Privacy Policy.",
}

export function Cta6({ content = {}, classNames = {} }: CtaBlockProps) {
  const {
    title = cta6Defaults.title,
    description = cta6Defaults.description,
    primaryCta = cta6Defaults.primaryCta,
  } = content

  const [isOpen, setIsOpen] = useState(true)

  if (!isOpen) return null

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4",
        classNames.root
      )}
    >
      <div
        className={cn(
          "bg-background relative w-full max-w-md overflow-hidden rounded-2xl shadow-2xl",
          classNames.content
        )}
      >
        {/* Close button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 z-10"
          onClick={() => setIsOpen(false)}
        >
          <DynamicIcon name="X" className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Button>

        {/* Header with gradient */}
        <div className="bg-gradient-to-br from-rose-500 to-pink-600 px-8 py-10 text-center text-white">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
            <DynamicIcon name="Gift" className="h-8 w-8" />
          </div>
          <div className="mb-2 text-sm font-medium tracking-wide uppercase opacity-90">
            {cta6Defaults.badge}
          </div>
          <h2
            className={cn(
              "text-2xl font-bold md:text-3xl",
              classNames.header?.title
            )}
          >
            {title}
          </h2>
        </div>

        {/* Form */}
        <div className="p-8">
          <p
            className={cn(
              "text-muted-foreground mb-6 text-center",
              classNames.header?.description
            )}
          >
            {description}
          </p>

          <div className="space-y-4">
            <Input
              type="email"
              placeholder={cta6Defaults.placeholder}
              className="h-12"
            />
            {primaryCta && (
              <Button className="group h-12 w-full" asChild>
                <Link href={primaryCta.href}>
                  {primaryCta.label}
                  <DynamicIcon
                    name="ArrowRight"
                    className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </Button>
            )}
          </div>

          <p className="text-muted-foreground mt-4 text-center text-xs">
            {cta6Defaults.terms}
          </p>

          <button
            onClick={() => setIsOpen(false)}
            className="text-muted-foreground hover:text-foreground mt-4 block w-full text-center text-sm transition-colors"
          >
            No thanks, I'll pay full price
          </button>
        </div>
      </div>
    </div>
  )
}
