"use client"

import * as React from "react"

import { useIsMobile } from "@/registry/new-york-v4/hooks/use-mobile"

export interface ResponsiveProps {
  /** Content to render on mobile screens (< 768px) */
  mobile: React.ReactNode
  /** Content to render on desktop screens (>= 768px) */
  desktop: React.ReactNode
  /** Fallback content to render during SSR/hydration before client-side detection */
  fallback?: React.ReactNode
}

/**
 * Responsive component that renders different content based on screen size.
 * Uses the useIsMobile hook to detect mobile screens (< 768px).
 *
 * @example
 * ```tsx
 * <Responsive
 *   mobile={<MobileNav />}
 *   desktop={<DesktopNav />}
 * />
 * ```
 */
function Responsive({ mobile, desktop, fallback }: ResponsiveProps) {
  const isMobile = useIsMobile()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  // During SSR or before hydration, render fallback or desktop content
  if (!mounted) {
    return <>{fallback ?? desktop}</>
  }

  return <>{isMobile ? mobile : desktop}</>
}

export { Responsive }
