"use client"

import * as React from "react"

interface LazyComponentPreviewProps {
  children: React.ReactNode
  className?: string
}

export function LazyComponentPreview({
  children,
  className,
}: LazyComponentPreviewProps) {
  const [isInView, setIsInView] = React.useState(false)
  const containerRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const element = containerRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting)
        })
      },
      {
        threshold: 0.1,
        rootMargin: "300px",
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div ref={containerRef} className={className}>
      {isInView && children}
    </div>
  )
}
