"use client"

import { Component as ReactComponent, memo, Suspense, useRef } from "react"

import { Index } from "@/registry/__index__"
import { getBlockSettings } from "@/app/(app)/(content)/(blocks)/blocks"
import {
  BlockContainer,
  BlockThemeWrapper,
  DEFAULT_TINT,
} from "@/app/(app)/(content)/(blocks)/_components"
import { ScrollContainerProvider } from "@/app/(app)/(content)/(blocks)/_components/scroll-container-context"

interface LazyComponentRendererProps {
  name: string
  styleName: string
  isComponent: boolean
  componentType?: string
  filePath?: string
}

// Error boundary for catching render errors - shows visible error state
class ComponentErrorBoundary extends ReactComponent<
  { children: React.ReactNode; name?: string },
  { hasError: boolean; error?: Error }
> {
  constructor(props: { children: React.ReactNode; name?: string }) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen w-full items-center justify-center bg-red-50 p-16">
          <div className="max-w-md rounded-lg border border-red-200 bg-white p-8 text-center shadow-sm">
            <div className="mb-4 text-4xl">⚠️</div>
            <h2 className="mb-2 text-lg font-semibold text-red-600">
              Component Error
            </h2>
            <p className="text-sm text-red-500">
              {this.state.error?.message || "Failed to render component"}
            </p>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}

// Block wrapper for template-associated blocks
function BlockWrapper({
  children,
  name,
}: {
  children: React.ReactNode
  name: string
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const settings = getBlockSettings(name)

  // If block belongs to a template, wrap with theme and container
  if (settings.templateSlug) {
    const blockType = settings.blockType
    const skipAlternatingBg =
      blockType === "hero" ||
      blockType === "header" ||
      settings.forceDark ||
      settings.forceLight
    const skipPadding =
      blockType === "hero" || blockType === "header" || blockType === "footer"
    // When viewing standalone, only use "deep" tint - never "tinted"
    // "tinted" is only for blocks shown within their full template context
    const blockTint = settings.tint === "deep" ? "deep" : DEFAULT_TINT

    return (
      <ScrollContainerProvider value={containerRef}>
        <div ref={containerRef} className="min-h-screen overflow-auto">
          <BlockThemeWrapper
            slug={settings.templateSlug}
            tint={blockTint}
            forceDark={settings.forceDark}
            forceLight={settings.forceLight}
          >
            <BlockContainer
              index={settings.index}
              tint={blockTint}
              forceBg={skipAlternatingBg ? "none" : undefined}
              noPadding={skipPadding}
            >
              {children}
            </BlockContainer>
          </BlockThemeWrapper>
        </div>
      </ScrollContainerProvider>
    )
  }

  // For non-template blocks, render without wrapper
  return <>{children}</>
}

export const LazyComponentRenderer = memo(function LazyComponentRenderer({
  name,
  styleName,
  isComponent,
}: LazyComponentRendererProps) {
  const styleIndex = Index[styleName as keyof typeof Index]
  if (!styleIndex) return null

  const item = styleIndex[name as keyof typeof styleIndex]
  if (!item?.component) return null

  const Component = item.component

  if (isComponent) {
    return (
      <ComponentErrorBoundary>
        <div className="bg-background flex min-h-screen w-full items-center justify-center p-16">
          <div className="flex w-full max-w-4xl items-center justify-center">
            <Suspense fallback={<div className="bg-background min-h-screen w-full" />}>
              <Component />
            </Suspense>
          </div>
        </div>
      </ComponentErrorBoundary>
    )
  }

  // Wrap blocks with template theming when applicable
  return (
    <ComponentErrorBoundary>
      <BlockWrapper name={name}>
        <Suspense fallback={<div className="bg-background min-h-screen w-full" />}>
          <Component />
        </Suspense>
      </BlockWrapper>
    </ComponentErrorBoundary>
  )
})
