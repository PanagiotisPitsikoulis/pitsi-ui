"use client"

import { Component as ReactComponent, memo, Suspense, useMemo } from "react"
import dynamic from "next/dynamic"
import { AlertCircle, RotateCcw } from "lucide-react"

import { Button } from "@/registry/new-york-v4/ui/button"
import { Spinner } from "@/registry/new-york-v4/ui/spinner"

interface LazyComponentRendererProps {
  name: string
  styleName: string
  isComponent: boolean
  componentType?: string
  filePath?: string
}

// Error boundary for catching render errors
class ComponentErrorBoundary extends ReactComponent<
  { children: React.ReactNode; name: string },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: React.ReactNode; name: string }) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.warn(`Component "${this.props.name}" failed to render:`, error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex h-screen items-center justify-center">
          <div className="flex flex-col items-center gap-4 text-center px-4">
            <AlertCircle className="size-10 text-muted-foreground" />
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">
                Failed to load component
              </p>
              <p className="text-xs text-muted-foreground/70">
                {this.state.error?.message || "An error occurred"}
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                this.setState({ hasError: false, error: null })
                window.location.reload()
              }}
            >
              <RotateCcw className="mr-2 size-3" />
              Reload
            </Button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

// Helper to extract the module default export
function getModuleDefault(mod: Record<string, unknown>) {
  if (mod.default) return mod.default
  const exportName = Object.keys(mod).find(
    (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
  )
  return exportName ? mod[exportName] : null
}

// Parse file path to extract category/subcategory for blocks
function parseBlockPath(filePath: string): { category: string; subcategory: string; name: string } | null {
  // filePath is like "registry/new-york-v4/blocks/marketing/hero-section/hero-1.tsx"
  const match = filePath.match(/blocks\/([^/]+)\/([^/]+)\/([^/]+)\.tsx$/)
  if (match) {
    return { category: match[1], subcategory: match[2], name: match[3] }
  }
  return null
}

export const LazyComponentRenderer = memo(function LazyComponentRenderer({
  name,
  styleName,
  isComponent,
  componentType,
  filePath,
}: LazyComponentRendererProps) {
  // Create dynamic component based on type and path
  const Component = useMemo(() => {
    // For UI components
    if (componentType === "registry:ui") {
      return dynamic(
        () =>
          import(`@/registry/new-york-v4/ui/${name}`).then((mod) => ({
            default: getModuleDefault(mod) as React.ComponentType,
          })),
        { ssr: false }
      )
    }

    // For example components
    if (componentType === "registry:example") {
      return dynamic(
        () =>
          import(`@/registry/new-york-v4/examples/${name}`).then((mod) => ({
            default: getModuleDefault(mod) as React.ComponentType,
          })),
        { ssr: false }
      )
    }

    // For blocks and internal components
    if (componentType === "registry:block" || componentType === "registry:internal") {
      if (filePath) {
        const blockInfo = parseBlockPath(filePath)
        if (blockInfo) {
          return dynamic(
            () =>
              import(
                `@/registry/new-york-v4/blocks/${blockInfo.category}/${blockInfo.subcategory}/${blockInfo.name}`
              ).then((mod) => ({
                default: getModuleDefault(mod) as React.ComponentType,
              })),
            { ssr: false }
          )
        }
      }
    }

    // Fallback: return null component
    return () => null
  }, [name, componentType, filePath])

  if (!Component) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-muted-foreground">Component not found</div>
      </div>
    )
  }

  // For components/examples, center them without squishing
  if (isComponent) {
    return (
      <ComponentErrorBoundary name={name}>
        <Suspense
          fallback={
            <div className="flex min-h-screen items-center justify-center">
              <Spinner className="size-6" />
            </div>
          }
        >
          <div className="flex min-h-screen w-full items-center justify-center p-8">
            <Component />
          </div>
        </Suspense>
      </ComponentErrorBoundary>
    )
  }

  // For blocks/animations, render full width
  return (
    <ComponentErrorBoundary name={name}>
      <Suspense
        fallback={
          <div className="flex h-screen items-center justify-center">
            <Spinner className="size-6" />
          </div>
        }
      >
        <Component />
      </Suspense>
    </ComponentErrorBoundary>
  )
})
