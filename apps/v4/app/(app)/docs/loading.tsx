import { Skeleton } from "@/registry/new-york-v4/ui/skeleton"

export default function DocsLoading() {
  return (
    <div className="container flex gap-12 px-6 py-8">
      {/* Sidebar skeleton */}
      <aside className="hidden w-64 shrink-0 lg:block">
        <div className="sticky top-20 space-y-6">
          <div className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <div className="space-y-1 pl-2">
              {[...Array(5)].map((_, i) => (
                <Skeleton key={i} className="h-8 w-full" />
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-28" />
            <div className="space-y-1 pl-2">
              {[...Array(8)].map((_, i) => (
                <Skeleton key={i} className="h-8 w-full" />
              ))}
            </div>
          </div>
        </div>
      </aside>

      {/* Main content skeleton */}
      <main className="min-w-0 flex-1">
        <div className="space-y-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-12" />
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-4 w-20" />
          </div>

          {/* Title */}
          <div className="space-y-4">
            <Skeleton className="h-12 w-64" />
            <Skeleton className="h-5 w-full max-w-lg" />
          </div>

          {/* Content blocks */}
          <div className="space-y-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="space-y-3">
                <Skeleton className="h-6 w-48" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            ))}
          </div>

          {/* Code block skeleton */}
          <Skeleton className="h-48 w-full rounded-lg" />
        </div>
      </main>

      {/* TOC skeleton */}
      <aside className="hidden w-48 shrink-0 xl:block">
        <div className="sticky top-20 space-y-2">
          <Skeleton className="h-4 w-24" />
          <div className="space-y-1">
            {[...Array(6)].map((_, i) => (
              <Skeleton key={i} className="h-6 w-full" />
            ))}
          </div>
        </div>
      </aside>
    </div>
  )
}
