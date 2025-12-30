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
import {
  applicationTemplateConfigs,
  getApplicationShellForBlock,
} from "@/app/(app)/(content)/(blocks)/template-config"

interface LazyComponentRendererProps {
  name: string
  styleName: string
  isComponent: boolean
  componentType?: string
  filePath?: string
}

// Error boundary for catching render errors - shows empty state instead of crashing
class ComponentErrorBoundary extends ReactComponent<
  { children: React.ReactNode; name?: string; silent?: boolean },
  { hasError: boolean; error?: Error }
> {
  constructor(props: { children: React.ReactNode; name?: string; silent?: boolean }) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error }
  }

  render() {
    if (this.state.hasError) {
      // Silent mode: just show empty background (for blocks that may fail gracefully)
      if (this.props.silent) {
        return <div className="bg-background min-h-screen w-full" />
      }
      // Normal mode: show subtle error indicator
      return (
        <div className="bg-background flex min-h-screen w-full items-center justify-center p-16">
          <div className="text-muted-foreground text-center text-sm">
            Unable to load component
          </div>
        </div>
      )
    }
    return this.props.children
  }
}

// Application block wrapper - renders view inside its shell
// Note: Shell components have their own theme baked in (sageTheme, violetTheme, etc.)
// so we don't wrap with BlockThemeWrapper to avoid conflicts
function ApplicationBlockWrapper({
  name,
  styleName,
  ViewComponent,
}: {
  name: string
  styleName: string
  ViewComponent: React.ComponentType
}) {
  const shellInfo = getApplicationShellForBlock(name)

  if (!shellInfo) {
    // Not an application view, render component directly
    return <ViewComponent />
  }

  // Get the shell component from the index
  const styleIndex = Index[styleName as keyof typeof Index]
  const shellItem = styleIndex?.[shellInfo.shell as keyof typeof styleIndex]

  // Get template config for navigation and metadata
  const templateConfig = applicationTemplateConfigs[shellInfo.templateSlug]

  if (!shellItem?.component) {
    // Shell not found, render view standalone
    return (
      <div className="bg-background min-h-screen">
        <ViewComponent />
      </div>
    )
  }

  // Type the shell component with the props it actually accepts
  const ShellComponent = shellItem.component as React.ComponentType<{
    children?: React.ReactNode
    activeView?: string
    content?: {
      appName?: string
      navigation?: Array<{
        name: string
        label: string
        icon: string
        shortcut?: string
      }>
    }
  }>

  // Map navigation from template config to shell format
  const navigation = templateConfig?.navigation.map((nav) => ({
    name: nav.name,
    label: nav.label,
    icon: nav.icon,
    shortcut: nav.shortcut,
  }))

  return (
    <div className="min-h-screen">
      <ShellComponent
        activeView={name}
        content={{
          appName: templateConfig?.metadata.name,
          navigation,
        }}
      >
        <ViewComponent />
      </ShellComponent>
    </div>
  )
}

// Block wrapper for template-associated blocks
function BlockWrapper({
  children,
  name,
  styleName,
  Component,
}: {
  children: React.ReactNode
  name: string
  styleName: string
  Component: React.ComponentType
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const settings = getBlockSettings(name)

  // Check if this is an application view block
  const shellInfo = getApplicationShellForBlock(name)
  if (shellInfo) {
    // Render application block with its shell
    return (
      <ApplicationBlockWrapper
        name={name}
        styleName={styleName}
        ViewComponent={Component}
      />
    )
  }

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
    // Use the block's configured tint (tinted themes now have neutral backgrounds)
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
      <BlockWrapper name={name} styleName={styleName} Component={Component}>
        <Suspense fallback={<div className="bg-background min-h-screen w-full" />}>
          <Component />
        </Suspense>
      </BlockWrapper>
    </ComponentErrorBoundary>
  )
})
