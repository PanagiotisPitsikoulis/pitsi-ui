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

// Error boundary for catching render errors - renders nothing on error
class ComponentErrorBoundary extends ReactComponent<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return null
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
    const blockTint = settings.tint || DEFAULT_TINT

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
        <Suspense fallback={null}>
          <div className="flex min-h-screen w-full items-center justify-center p-8">
            <Component />
          </div>
        </Suspense>
      </ComponentErrorBoundary>
    )
  }

  // Wrap blocks with template theming when applicable
  return (
    <ComponentErrorBoundary>
      <Suspense fallback={null}>
        <BlockWrapper name={name}>
          <Component />
        </BlockWrapper>
      </Suspense>
    </ComponentErrorBoundary>
  )
})
