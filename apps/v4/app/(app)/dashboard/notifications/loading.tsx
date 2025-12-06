import { Skeleton } from "@/registry/new-york-v4/ui/skeleton"

export default function NotificationsLoading() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <Skeleton className="h-8 w-32" />
        <Skeleton className="mt-2 h-4 w-64" />
      </div>

      {/* Notification preferences */}
      <div className="rounded-lg border p-6">
        <Skeleton className="mb-6 h-6 w-40" />
        <div className="space-y-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center justify-between">
              <div className="space-y-1">
                <Skeleton className="h-4 w-36" />
                <Skeleton className="h-3 w-56" />
              </div>
              <Skeleton className="h-6 w-12" />
            </div>
          ))}
        </div>
      </div>

      {/* Email preferences */}
      <div className="rounded-lg border p-6">
        <Skeleton className="mb-6 h-6 w-36" />
        <div className="space-y-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center justify-between">
              <div className="space-y-1">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-3 w-48" />
              </div>
              <Skeleton className="h-6 w-12" />
            </div>
          ))}
        </div>
      </div>

      {/* Save button */}
      <Skeleton className="h-10 w-32" />
    </div>
  )
}
