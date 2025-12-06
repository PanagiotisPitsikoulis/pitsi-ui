import { Skeleton } from "@/registry/new-york-v4/ui/skeleton"

export default function BlocksLoading() {
  return (
    <div className="container px-6 py-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <Skeleton className="h-10 w-48" />
          <Skeleton className="h-5 w-96" />
        </div>

        {/* Filter tabs */}
        <div className="flex gap-2">
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} className="h-9 w-24 rounded-md" />
          ))}
        </div>

        {/* Blocks grid */}
        <div className="grid gap-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="space-y-4">
              <div className="flex items-center justify-between">
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-8 w-24" />
              </div>
              <Skeleton className="h-[400px] w-full rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
