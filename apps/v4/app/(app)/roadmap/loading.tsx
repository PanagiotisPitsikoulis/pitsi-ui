import { Skeleton } from "@/registry/new-york-v4/ui/skeleton"

export default function RoadmapLoading() {
  return (
    <div className="relative min-h-screen">
      {/* Background grid */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="container h-full w-full px-6">
          <div className="relative grid h-full grid-cols-6 gap-6">
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className="absolute inset-y-0 w-px"
                style={{
                  left: i === 0 ? "0" : i === 6 ? "100%" : `calc(${i} * (100% + 1.5rem) / 6)`,
                  backgroundImage: `linear-gradient(to bottom, hsl(var(--muted-foreground) / 0.1) 50%, transparent 50%)`,
                  backgroundSize: "1px 8px",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="container px-6 pt-24">
        <div className="grid grid-cols-6 gap-6">
          {/* Header */}
          <div className="col-span-6 lg:col-span-2">
            <div className="lg:sticky lg:top-24">
              <Skeleton className="mb-4 h-4 w-20" />
              <Skeleton className="mb-2 h-12 w-full max-w-xs" />
              <Skeleton className="h-5 w-full max-w-sm" />
            </div>
          </div>

          {/* Roadmap items */}
          <div className="col-span-6 lg:col-span-3 lg:col-start-4">
            <div className="space-y-8">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="space-y-4 rounded-lg border p-6">
                  <div className="flex items-center justify-between">
                    <Skeleton className="h-6 w-24 rounded-full" />
                    <Skeleton className="h-4 w-16" />
                  </div>
                  <Skeleton className="h-6 w-48" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                  <div className="flex gap-2">
                    {[...Array(3)].map((_, j) => (
                      <Skeleton key={j} className="h-5 w-16 rounded-full" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
