import { cn } from "@/lib/utils"

interface LayoutGridProps {
  children: React.ReactNode
  className?: string
  as?: "div" | "section" | "article" | "main" | "aside"
}

/**
 * A layout grid component that aligns content to a 6-column grid with gap-6.
 * Use this to ensure consistent grid alignment across all sections.
 *
 * Children should use col-span-* classes to define their width:
 * - col-span-1: 1 column
 * - col-span-2: 2 columns (1/3 width)
 * - col-span-3: 3 columns (1/2 width)
 * - col-span-4: 4 columns (2/3 width)
 * - col-span-6: full width
 */
export function LayoutGrid({
  children,
  className,
  as: Component = "div",
}: LayoutGridProps) {
  return (
    <Component className={cn("grid grid-cols-6 gap-6", className)}>
      {children}
    </Component>
  )
}

interface LayoutGridItemProps {
  children: React.ReactNode
  className?: string
  span?: 1 | 2 | 3 | 4 | 5 | 6
  spanMd?: 1 | 2 | 3 | 4 | 5 | 6
  spanLg?: 1 | 2 | 3 | 4 | 5 | 6
  start?: 1 | 2 | 3 | 4 | 5 | 6
  startMd?: 1 | 2 | 3 | 4 | 5 | 6
  as?: "div" | "article" | "section" | "aside"
}

const spanClasses = {
  1: "col-span-1",
  2: "col-span-2",
  3: "col-span-3",
  4: "col-span-4",
  5: "col-span-5",
  6: "col-span-6",
}

const spanMdClasses = {
  1: "md:col-span-1",
  2: "md:col-span-2",
  3: "md:col-span-3",
  4: "md:col-span-4",
  5: "md:col-span-5",
  6: "md:col-span-6",
}

const spanLgClasses = {
  1: "lg:col-span-1",
  2: "lg:col-span-2",
  3: "lg:col-span-3",
  4: "lg:col-span-4",
  5: "lg:col-span-5",
  6: "lg:col-span-6",
}

const startClasses = {
  1: "col-start-1",
  2: "col-start-2",
  3: "col-start-3",
  4: "col-start-4",
  5: "col-start-5",
  6: "col-start-6",
}

const startMdClasses = {
  1: "md:col-start-1",
  2: "md:col-start-2",
  3: "md:col-start-3",
  4: "md:col-start-4",
  5: "md:col-start-5",
  6: "md:col-start-6",
}

/**
 * A grid item that spans columns in the LayoutGrid.
 *
 * @param span - Number of columns to span on mobile (default: 6 = full width)
 * @param spanMd - Number of columns to span on md+ screens
 * @param spanLg - Number of columns to span on lg+ screens
 * @param start - Starting column position
 * @param startMd - Starting column position on md+ screens
 */
export function LayoutGridItem({
  children,
  className,
  span = 6,
  spanMd,
  spanLg,
  start,
  startMd,
  as: Component = "div",
}: LayoutGridItemProps) {
  return (
    <Component
      className={cn(
        spanClasses[span],
        spanMd && spanMdClasses[spanMd],
        spanLg && spanLgClasses[spanLg],
        start && startClasses[start],
        startMd && startMdClasses[startMd],
        className
      )}
    >
      {children}
    </Component>
  )
}
