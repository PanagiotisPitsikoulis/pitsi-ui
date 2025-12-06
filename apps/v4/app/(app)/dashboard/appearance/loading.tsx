import { Skeleton } from "@/registry/new-york-v4/ui/skeleton"

export default function AppearanceLoading() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <Skeleton className="h-8 w-32" />
        <Skeleton className="mt-2 h-4 w-56" />
      </div>

      {/* Theme selector */}
      <div className="rounded-lg border p-6">
        <Skeleton className="mb-4 h-6 w-20" />
        <div className="grid grid-cols-3 gap-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="space-y-2">
              <Skeleton className="aspect-video w-full rounded-md" />
              <Skeleton className="mx-auto h-4 w-16" />
            </div>
          ))}
        </div>
      </div>

      {/* Accent color */}
      <div className="rounded-lg border p-6">
        <Skeleton className="mb-4 h-6 w-28" />
        <div className="flex gap-3">
          {[...Array(6)].map((_, i) => (
            <Skeleton key={i} className="size-10 rounded-full" />
          ))}
        </div>
      </div>

      {/* Font size */}
      <div className="rounded-lg border p-6">
        <Skeleton className="mb-4 h-6 w-24" />
        <Skeleton className="h-10 w-full" />
      </div>

      {/* Save button */}
      <Skeleton className="h-10 w-32" />
    </div>
  )
}
