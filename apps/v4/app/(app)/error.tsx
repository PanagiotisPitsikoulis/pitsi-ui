"use client"

import { useEffect } from "react"

import { ErrorActionButtons } from "@/components/layout/error-action-buttons"
import { ErrorContent } from "@/components/layout/error-page-content"
import { ErrorPageLayout } from "@/components/layout/error-page-layout"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <ErrorPageLayout
      statusLabel="Something went wrong"
      title="Unexpected error"
      description="We encountered an unexpected error. Our team has been notified."
      content={
        <ErrorContent
          message="Please try again or contact support if the issue persists. We apologize for any inconvenience this may have caused."
          errorDigest={error.digest}
        />
      }
      actions={
        <ErrorActionButtons
          primaryLabel="Try again"
          primaryOnClick={reset}
          secondaryLabel="Go home"
          secondaryHref="/"
        />
      }
    />
  )
}
