import { Skeleton } from "@/registry/new-york-v4/ui/skeleton"

export default function HomeLoading() {
  return (
    <div className="relative min-h-screen">
      {/* Background grid skeleton */}
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

      <div className="container px-6 pt-32">
        {/* Hero skeleton */}
        <div className="mx-auto max-w-4xl space-y-8 text-center">
          <Skeleton className="mx-auto h-8 w-32 rounded-full" />
          <Skeleton className="mx-auto h-16 w-full max-w-2xl" />
          <Skeleton className="mx-auto h-16 w-full max-w-xl" />
          <Skeleton className="mx-auto h-6 w-full max-w-lg" />
          <div className="flex justify-center gap-4 pt-4">
            <Skeleton className="h-12 w-36 rounded-md" />
            <Skeleton className="h-12 w-36 rounded-md" />
          </div>
        </div>

        {/* Section skeleton */}
        <div className="mt-32 space-y-8">
          <Skeleton className="mx-auto h-10 w-64" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <Skeleton key={i} className="h-64 w-full rounded-lg" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
