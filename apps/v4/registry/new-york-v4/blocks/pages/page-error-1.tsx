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
      <div className="relative container mx-auto h-full px-6">
        <div className="absolute inset-0 flex justify-between">
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i} className="bg-border/30 h-full w-px" />
          ))}
        </div>
      </div>
    </div>
  )
}

// Layout Grid Components
function LayoutGrid({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("grid grid-cols-6 gap-6", className)}>{children}</div>
  )
}

function LayoutGridItem({
  children,
  span = 6,
  spanLg,
  className,
}: {
  children: React.ReactNode
  span?: number
  spanLg?: number
  className?: string
}) {
  return (
    <div
      className={cn(
        `col-span-${span}`,
        spanLg && `lg:col-span-${spanLg}`,
        className
      )}
      style={{
        gridColumn: `span ${span} / span ${span}`,
        ...(spanLg && {
          "@media (min-width: 1024px)": {
            gridColumn: `span ${spanLg} / span ${spanLg}`,
          },
        }),
      }}
    >
      {children}
    </div>
  )
}

// Default content
const pageError1Defaults = {
  statusLabel: "Something went wrong",
  title: "Unexpected error",
  description:
    "We encountered an unexpected error. Our team has been notified.",
  message:
    "Please try again or contact support if the issue persists. We apologize for any inconvenience this may have caused.",
  primaryCta: { label: "Try again", href: "#" },
  secondaryCta: { label: "Go home", href: "/" },
  backLink: { label: "Back to home", href: "/" },
}

interface PageError1Props {
  statusLabel?: string
  title?: string
  description?: string
  message?: string
  errorDigest?: string
  primaryCta?: { label: string; href?: string; onClick?: () => void }
  secondaryCta?: { label: string; href: string }
  backLink?: { label: string; href: string }
  className?: string
}

export function PageError1({
  statusLabel = pageError1Defaults.statusLabel,
  title = pageError1Defaults.title,
  description = pageError1Defaults.description,
  message = pageError1Defaults.message,
  errorDigest,
  primaryCta = pageError1Defaults.primaryCta,
  secondaryCta = pageError1Defaults.secondaryCta,
  backLink = pageError1Defaults.backLink,
  className,
}: PageError1Props) {
  return (
    <div
      className={cn("relative -mt-14 min-h-screen overflow-x-clip", className)}
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
              <h1 className="text-3xl leading-[1.1] font-bold tracking-tight md:text-4xl lg:text-5xl">
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
              {/* Error Message */}
              <div>
                <p className="text-muted-foreground leading-relaxed">
                  {message}
                </p>
                {errorDigest && (
                  <p className="text-muted-foreground mt-4 font-mono text-sm">
                    Error ID: {errorDigest}
                  </p>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-4 sm:flex-row">
                {primaryCta.onClick ? (
                  <Button
                    size="lg"
                    onClick={primaryCta.onClick}
                    className="min-w-40"
                  >
                    {primaryCta.label}
                  </Button>
                ) : (
                  <Button asChild size="lg" className="min-w-40">
                    <Link href={primaryCta.href || "#"}>
                      {primaryCta.label}
                    </Link>
                  </Button>
                )}
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="min-w-40"
                >
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
