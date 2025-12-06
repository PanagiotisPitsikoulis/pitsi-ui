import { Skeleton } from "@/registry/new-york-v4/ui/skeleton"

export default function DashboardLoading() {
  return (
    <div className="space-y-6">
      {/* Header skeleton */}
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-4 w-64" />
        </div>
        <Skeleton className="h-6 w-16 rounded-full" />
      </div>

      {/* Stats cards skeleton */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="rounded-lg border p-6">
            <div className="flex items-center justify-between pb-2">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="size-4" />
            </div>
            <Skeleton className="h-8 w-16" />
            <Skeleton className="mt-1 h-3 w-32" />
          </div>
        ))}
      </div>

      {/* Upgrade card skeleton */}
      <div className="rounded-lg border p-6">
        <div className="space-y-2">
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-4 w-80" />
        </div>
        <div className="mt-4 flex items-center justify-between">
          <Skeleton className="h-4 w-48" />
          <Skeleton className="h-10 w-32" />
        </div>
      </div>
    </div>
  )
}
