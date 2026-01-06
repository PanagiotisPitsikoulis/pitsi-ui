import Link from "next/link"

import { ChevronLeft, ChevronRight } from "@/lib/icons"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"

interface BlogPaginationProps {
  currentPage: number
  totalPages: number
  basePath: string
}

export function BlogPagination({
  currentPage,
  totalPages,
  basePath,
}: BlogPaginationProps) {
  const getPageUrl = (page: number) => {
    if (page === 1) {
      return basePath
    }
    return `${basePath}/page/${page}`
  }

  // Generate page numbers to show
  const getPageNumbers = () => {
    const pages: (number | "ellipsis")[] = []
    const showPages = 5 // Max pages to show

    if (totalPages <= showPages) {
      // Show all pages
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      // Always show first page
      pages.push(1)

      if (currentPage > 3) {
        pages.push("ellipsis")
      }

      // Show pages around current
      const start = Math.max(2, currentPage - 1)
      const end = Math.min(totalPages - 1, currentPage + 1)

      for (let i = start; i <= end; i++) {
        pages.push(i)
      }

      if (currentPage < totalPages - 2) {
        pages.push("ellipsis")
      }

      // Always show last page
      pages.push(totalPages)
    }

    return pages
  }

  const pageNumbers = getPageNumbers()

  return (
    <nav
      className="flex items-center justify-center gap-1"
      aria-label="Blog pagination"
    >
      {/* Previous button */}
      <Button
        variant="ghost"
        size="icon"
        className="size-9"
        disabled={currentPage <= 1}
        asChild={currentPage > 1}
      >
        {currentPage > 1 ? (
          <Link href={getPageUrl(currentPage - 1)} aria-label="Previous page">
            <ChevronLeft className="size-4" />
          </Link>
        ) : (
          <span>
            <ChevronLeft className="size-4" />
          </span>
        )}
      </Button>

      {/* Page numbers */}
      <div className="flex items-center gap-1">
        {pageNumbers.map((page, index) =>
          page === "ellipsis" ? (
            <span
              key={`ellipsis-${index}`}
              className="text-muted-foreground flex size-9 items-center justify-center text-sm"
            >
              ...
            </span>
          ) : (
            <Button
              key={page}
              variant={currentPage === page ? "default" : "ghost"}
              size="icon"
              className={cn(
                "size-9",
                currentPage === page && "pointer-events-none"
              )}
              asChild={currentPage !== page}
            >
              {currentPage === page ? (
                <span aria-current="page">{page}</span>
              ) : (
                <Link href={getPageUrl(page)} aria-label={`Page ${page}`}>
                  {page}
                </Link>
              )}
            </Button>
          )
        )}
      </div>

      {/* Next button */}
      <Button
        variant="ghost"
        size="icon"
        className="size-9"
        disabled={currentPage >= totalPages}
        asChild={currentPage < totalPages}
      >
        {currentPage < totalPages ? (
          <Link href={getPageUrl(currentPage + 1)} aria-label="Next page">
            <ChevronRight className="size-4" />
          </Link>
        ) : (
          <span>
            <ChevronRight className="size-4" />
          </span>
        )}
      </Button>
    </nav>
  )
}
