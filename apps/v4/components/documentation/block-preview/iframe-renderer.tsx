"use client"

import React, { RefObject, useMemo } from "react"

import { cn } from "@/lib/utils"

interface IframeRendererProps {
  src: string
  title: string
  ariaLabel?: string
  id: string
  iframeRef: RefObject<HTMLIFrameElement | null>
  isCached: boolean
  className?: string
}

const IframeRenderer: React.FC<IframeRendererProps> = ({
  src,
  title,
  ariaLabel,
  id,
  iframeRef,
  isCached,
  className,
}) => {
  const urlWithCacheBusting = useMemo(() => {
    try {
      const url = new URL(src, window.location.origin)
      url.searchParams.set("_", Date.now().toString())
      return url.toString()
    } catch {
      return src
    }
  }, [src])

  return (
    <>
      <iframe
        key={`${id}-iframe`}
        loading={isCached ? "eager" : "lazy"}
        allowFullScreen
        ref={iframeRef}
        title={title}
        aria-label={ariaLabel || `${title}-preview`}
        className={cn("pointer-events-none absolute inset-0 size-full overflow-hidden", className)}
        src={urlWithCacheBusting}
        id={id}
        sandbox="allow-scripts allow-same-origin"
        scrolling="no"
      />
      {/* Invisible overlay to prevent scrolling */}
      <div className="absolute inset-0 z-10" />
    </>
  )
}

export default IframeRenderer
