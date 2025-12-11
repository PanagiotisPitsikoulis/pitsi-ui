"use client"

import { Component as ReactComponent, memo, Suspense } from "react"
import { AlertCircle, RotateCcw } from "lucide-react"

import { Index } from "@/registry/__index__"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Spinner } from "@/registry/new-york-v4/ui/spinner"

interface LazyComponentRendererProps {
  name: string
  styleName: string
  isComponent: boolean
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

export const LazyComponentRenderer = memo(function LazyComponentRenderer({
  name,
  styleName,
  isComponent,
}: LazyComponentRendererProps) {
  // Get the component from the registry index
  const styleIndex = Index[styleName]

  if (!styleIndex || !styleIndex[name]) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-muted-foreground">Component not found</div>
      </div>
    )
  }

  const registryItem = styleIndex[name]
  const Component = registryItem.component

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
