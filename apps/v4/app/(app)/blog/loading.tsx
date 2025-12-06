import { Skeleton } from "@/registry/new-york-v4/ui/skeleton"

export default function BlogLoading() {
  return (
    <div className="container px-6 py-8">
      <div className="mx-auto max-w-4xl space-y-12">
        {/* Header */}
        <div className="space-y-4 text-center">
          <Skeleton className="mx-auto h-10 w-32" />
          <Skeleton className="mx-auto h-5 w-80" />
        </div>

        {/* Blog posts */}
        <div className="space-y-8">
          {[...Array(5)].map((_, i) => (
            <article key={i} className="space-y-4 border-b pb-8">
              <div className="flex items-center gap-4">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-16" />
              </div>
              <Skeleton className="h-8 w-full max-w-lg" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <div className="flex gap-2">
                {[...Array(3)].map((_, j) => (
                  <Skeleton key={j} className="h-6 w-16 rounded-full" />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
