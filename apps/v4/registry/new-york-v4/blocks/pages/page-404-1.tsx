"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

// Striped Background Component
function StripedBackground({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 z-0 overflow-hidden",
        className
      )}
    >
      <div className="container relative mx-auto h-full px-6">
        <div className="absolute inset-0 flex justify-between">
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i} className="bg-border/30 h-full w-px" />
          ))}
        </div>
      </div>
    </div>
  )
}

// Default content
const page404Defaults = {
  statusLabel: "Error 404",
  title: "Page not found",
  description:
    "The page you're looking for doesn't exist or has been moved. Let's get you back on track.",
  message:
    "This could happen if the page was removed, renamed, or if you followed an outdated link. Try checking the URL or navigate back to a known page.",
  primaryCta: { label: "Go home", href: "/" },
  secondaryCta: { label: "View docs", href: "/docs" },
  backLink: { label: "Back to home", href: "/" },
}

interface Page404Props {
  statusLabel?: string
  title?: string
  description?: string
  message?: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  backLink?: { label: string; href: string }
  className?: string
}

export function Page404({
  statusLabel = page404Defaults.statusLabel,
  title = page404Defaults.title,
  description = page404Defaults.description,
  message = page404Defaults.message,
  primaryCta = page404Defaults.primaryCta,
  secondaryCta = page404Defaults.secondaryCta,
  backLink = page404Defaults.backLink,
  className,
}: Page404Props) {
  return (
    <div
      className={cn(
        "relative -mt-14 min-h-screen overflow-x-clip",
        className
      )}
    >
      <StripedBackground />

      <div className="relative z-10 container px-6">
        <Spacer size="6xl" sizeMobile="4xl" />

        <div className="grid grid-cols-6 gap-6">
          {/* Left Column - Sticky Sidebar */}
          <div className="col-span-6 lg:col-span-2">
            <div className="lg:sticky lg:top-24">
              {/* Back Link */}
              <Link
                href={backLink.href}
                className="text-muted-foreground hover:text-foreground mb-6 inline-flex items-center gap-2 text-sm transition-colors"
              >
                <ArrowLeft className="size-4" />
                {backLink.label}
              </Link>

              {/* Status Label */}
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <span className="text-muted-foreground text-sm font-medium tracking-wider uppercase">
                  {statusLabel}
                </span>
              </div>

              <Spacer size="sm" sizeMobile="xs" />

              {/* Title */}
              <h1 className="text-3xl font-bold leading-[1.1] tracking-tight md:text-4xl lg:text-5xl">
                {title}
              </h1>

              <Spacer size="md" sizeMobile="sm" />

              {/* Description */}
              <p className="text-muted-foreground text-base md:text-lg">
                {description}
              </p>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="col-span-6 lg:col-span-3 lg:col-start-4">
            <div className="flex flex-col gap-6">
              {/* Message */}
              <div>
                <p className="text-muted-foreground leading-relaxed">{message}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="min-w-40">
                  <Link href={primaryCta.href}>{primaryCta.label}</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="min-w-40">
                  <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Spacer size="6xl" sizeMobile="4xl" />
      </div>
    </div>
  )
}
