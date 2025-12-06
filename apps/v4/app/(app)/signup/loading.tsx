import { Skeleton } from "@/registry/new-york-v4/ui/skeleton"

export default function SignUpLoading() {
  return (
    <div className="container flex min-h-[calc(100vh-var(--header-height))] items-center justify-center px-6">
      <div className="w-full max-w-sm space-y-6">
        <div className="space-y-2 text-center">
          <Skeleton className="mx-auto h-8 w-40" />
          <Skeleton className="mx-auto h-4 w-56" />
        </div>

        <div className="space-y-4">
          {/* Social buttons */}
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />

          {/* Divider */}
          <div className="flex items-center gap-4">
            <Skeleton className="h-px flex-1" />
            <Skeleton className="h-4 w-8" />
            <Skeleton className="h-px flex-1" />
          </div>

          {/* Form fields */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Skeleton className="h-4 w-12" />
              <Skeleton className="h-10 w-full" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-12" />
              <Skeleton className="h-10 w-full" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-10 w-full" />
            </div>
          </div>

          {/* Submit button */}
          <Skeleton className="h-10 w-full" />

          {/* Links */}
          <div className="flex justify-center gap-4">
            <Skeleton className="h-4 w-40" />
          </div>
        </div>
      </div>
    </div>
  )
}
