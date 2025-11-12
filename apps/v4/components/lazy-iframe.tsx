"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Spinner } from "@/registry/new-york-v4/ui/spinner"

interface LazyIframeProps extends React.IframeHTMLAttributes<HTMLIFrameElement> {
  src: string
  className?: string
}

export function LazyIframe({ src, className, ...props }: LazyIframeProps) {
  const [isLoading, setIsLoading] = React.useState(true)
  const [shouldLoad, setShouldLoad] = React.useState(false)
  const iframeRef = React.useRef<HTMLIFrameElement>(null)

  // Load iframe after page loads
  React.useEffect(() => {
    // Use requestIdleCallback if available, otherwise setTimeout
    if (typeof window !== "undefined") {
      if ("requestIdleCallback" in window) {
        const id = requestIdleCallback(() => setShouldLoad(true))
        return () => cancelIdleCallback(id)
      } else {
        const timeout = setTimeout(() => setShouldLoad(true), 100)
        return () => clearTimeout(timeout)
      }
    }
  }, [])

  const handleLoad = React.useCallback(() => {
    setIsLoading(false)
  }, [])

  return (
    <div className="relative size-full">
      {isLoading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-background/80 backdrop-blur-sm">
          <Spinner className="size-8 text-muted-foreground" />
        </div>
      )}
      {shouldLoad && (
        <iframe
          ref={iframeRef}
          src={src}
          className={cn(className, isLoading && "opacity-0")}
          onLoad={handleLoad}
          {...props}
        />
      )}
    </div>
  )
}
