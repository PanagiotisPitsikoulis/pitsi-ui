import React from "react"

import { Spinner } from "@/registry/new-york-v4/ui/spinner"

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex min-h-56 items-center justify-center">
      <Spinner className="size-6" />
    </div>
  )
}

export default LoadingSpinner
