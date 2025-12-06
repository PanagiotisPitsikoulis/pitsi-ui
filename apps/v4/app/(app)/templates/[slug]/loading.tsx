import { Skeleton } from "@/registry/new-york-v4/ui/skeleton"

export default function TemplateDetailLoading() {
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
              <Skeleton className="mb-4 h-10 w-full max-w-xs" />
              <Skeleton className="mb-6 h-5 w-full max-w-sm" />
              <div className="flex gap-3">
                <Skeleton className="h-10 w-28" />
                <Skeleton className="h-10 w-28" />
              </div>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-2">
                  <Skeleton className="size-5" />
                  <Skeleton className="h-4 w-24" />
                </div>
                <div className="flex items-center gap-2">
                  <Skeleton className="size-5" />
                  <Skeleton className="h-4 w-32" />
                </div>
                <div className="flex items-center gap-2">
                  <Skeleton className="size-5" />
                  <Skeleton className="h-4 w-28" />
                </div>
              </div>
            </div>
          </div>

          {/* Preview */}
          <div className="col-span-6 lg:col-span-4">
            <Skeleton className="aspect-[16/10] w-full rounded-lg" />
            <div className="mt-8 space-y-6">
              <Skeleton className="h-6 w-32" />
              <div className="grid gap-4 sm:grid-cols-2">
                {[...Array(4)].map((_, i) => (
                  <Skeleton key={i} className="aspect-[16/10] w-full rounded-md" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
