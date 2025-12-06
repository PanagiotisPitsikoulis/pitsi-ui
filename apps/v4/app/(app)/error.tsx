"use client"

import { useEffect } from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/registry/new-york-v4/ui/button"
import { Spacer } from "@/registry/new-york-v4/ui/spacer"

import { LayoutGrid, LayoutGridItem } from "./(root)/_components/layout-grid"
import { StripeBgGuides } from "./(root)/_components/striped-bg-guides"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="relative -mt-[56px] min-h-screen overflow-x-clip">
      <StripeBgGuides columnCount={6} animated={false} />

      <div className="relative z-10 container px-6">
        <Spacer size="6xl" sizeMobile="4xl" />
        <LayoutGrid>
          {/* Left Column - Header (sticky on desktop) */}
          <LayoutGridItem span={6} spanLg={2}>
            <div className="lg:sticky lg:top-24">
              <Link
                href="/"
                className="text-muted-foreground hover:text-foreground mb-6 inline-flex items-center gap-2 text-sm transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m12 19-7-7 7-7" />
                  <path d="M19 12H5" />
                </svg>
                Back to home
              </Link>
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <span className="text-muted-foreground text-sm font-medium tracking-wider uppercase">
                  Something went wrong
                </span>
              </div>
              <Spacer size="sm" sizeMobile="xs" />
              <h1 className="display text-3xl leading-[1.1] tracking-tight md:text-4xl lg:text-5xl">
                Unexpected error
              </h1>
              <Spacer size="md" sizeMobile="sm" />
              <p className="text-muted-foreground text-base md:text-lg">
                We encountered an unexpected error. Our team has been notified.
              </p>
            </div>
          </LayoutGridItem>

          {/* Right Column - Content */}
          <LayoutGridItem span={6} spanLg={3} className="lg:col-start-4">
            <div className="flex flex-col gap-6">
              <p className="text-muted-foreground leading-relaxed">
                Please try again or contact support if the issue persists. We
                apologize for any inconvenience this may have caused.
              </p>
              {error.digest && (
                <p className="text-muted-foreground font-mono text-xs">
                  Error ID: {error.digest}
                </p>
              )}
              <div className="flex flex-col gap-4 sm:flex-row">
                <button
                  onClick={reset}
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "min-w-[160px]"
                  )}
                >
                  Try again
                </button>
                <Link
                  href="/"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "min-w-[160px]"
                  )}
                >
                  Go home
                </Link>
              </div>
            </div>
          </LayoutGridItem>
        </LayoutGrid>
        <Spacer size="6xl" sizeMobile="4xl" />
      </div>
    </div>
  )
}
