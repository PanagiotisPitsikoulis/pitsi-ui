"use client"

import * as React from "react"

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }
      return (
        <div className="flex min-h-[200px] w-full flex-col items-center justify-center gap-4 rounded-lg border border-dashed p-8 text-center">
          <p className="text-muted-foreground text-sm">
            Something went wrong loading this content.
          </p>
          <button
            onClick={() => this.setState({ hasError: false, error: null })}
            className="text-primary text-sm underline underline-offset-4 hover:no-underline"
          >
            Try again
          </button>
        </div>
      )
    }

    return this.props.children
  }
}
