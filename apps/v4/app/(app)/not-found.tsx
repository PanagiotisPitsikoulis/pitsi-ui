import { ErrorActionButtons } from "@/components/layout/error-action-buttons"
import { NotFoundContent } from "@/components/layout/error-page-content"
import { ErrorPageLayout } from "@/components/layout/error-page-layout"

export default function NotFound() {
  return (
    <ErrorPageLayout
      statusLabel="Error 404"
      title="Page not found"
      description="The page you're looking for doesn't exist or has been moved. Let's get you back on track."
      content={<NotFoundContent />}
      actions={
        <ErrorActionButtons
          primaryLabel="Go home"
          primaryHref="/"
          secondaryLabel="View docs"
          secondaryHref="/docs"
        />
      }
    />
  )
}
