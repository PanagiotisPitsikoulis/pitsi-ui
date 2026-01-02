"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight, X } from "lucide-react"

import { type CtaBlockProps } from "@/lib/blocks/cta.types"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"

const cta5Defaults = {
  title: "Get 20% off your first order",
  primaryCta: { label: "Shop Now", href: "#" },
}

export function Cta5({ content = {}, classNames = {} }: CtaBlockProps) {
  const { title = cta5Defaults.title, primaryCta = cta5Defaults.primaryCta } =
    content

  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300 && !isDismissed) {
        setIsVisible(true)
      } else if (window.scrollY <= 300) {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isDismissed])

  const handleDismiss = () => {
    setIsDismissed(true)
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div
      className={cn(
        "fixed right-0 bottom-0 left-0 z-50 transform transition-transform duration-300",
        isVisible ? "translate-y-0" : "translate-y-full",
        classNames.root
      )}
    >
      <div className="bg-primary text-primary-foreground shadow-lg">
        <div
          className={cn(
            "container flex items-center justify-between gap-4 px-6 py-3",
            classNames.container
          )}
        >
          <p className="text-sm font-medium md:text-base">{title}</p>

          <div className="flex items-center gap-3">
            {primaryCta && (
              <Button
                size="sm"
                variant="secondary"
                className="group whitespace-nowrap"
                asChild
              >
                <Link href={primaryCta.href}>
                  {primaryCta.label}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            )}
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-primary-foreground/10 h-8 w-8 shrink-0"
              onClick={handleDismiss}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Dismiss</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
