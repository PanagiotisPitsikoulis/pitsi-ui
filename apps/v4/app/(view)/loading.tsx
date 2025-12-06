import { Skeleton } from "@/registry/new-york-v4/ui/skeleton"

export default function ViewLoading() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Toolbar */}
      <div className="flex h-14 items-center justify-between border-b px-4">
        <div className="flex items-center gap-4">
          <Skeleton className="h-8 w-8" />
          <Skeleton className="h-5 w-32" />
        </div>
        <div className="flex items-center gap-2">
          <Skeleton className="h-8 w-8" />
          <Skeleton className="h-8 w-8" />
          <Skeleton className="h-8 w-20" />
        </div>
      </div>

      {/* Preview area */}
      <div className="flex flex-1 items-center justify-center p-8">
        <Skeleton className="h-full w-full max-w-5xl rounded-lg" />
      </div>
    </div>
  )
}
