import type React from "react"
import Image, { type StaticImageData } from "next/image"

import { cn } from "@/lib/utils"

export type GalleryItem = {
  src: StaticImageData | string
  alt: string
  url: string
  label: string
  width?: number
  height?: number
}

export type GalleryColumn = GalleryItem[]

export type GalleryLinesProps = {
  columns: GalleryColumn[]
  columnVisibility?: {
    base?: boolean[]
    sm?: boolean[]
    lg?: boolean[]
    xl?: boolean[]
  }
  className?: string
  classNames?: {
    container?: string
    innerContainer?: string
    column?: string
    link?: string
    image?: string
    label?: string
    labelIcon?: string
  }
}

export function GalleryLines({
  columns,
  columnVisibility = {
    base: [false, true, false, false, true],
    sm: [false, true, true, false, true],
    lg: [true, true, true, false, true],
    xl: [true, true, true, true, true],
  },
  className,
  classNames = {},
}: GalleryLinesProps) {
  const getColumnVisibilityClass = (index: number) => {
    const classes: string[] = []

    // Base visibility
    if (!columnVisibility.base?.[index]) {
      classes.push("hidden")
    } else {
      classes.push("flex")
    }

    // sm breakpoint
    if (columnVisibility.sm?.[index] !== undefined) {
      classes.push(columnVisibility.sm[index] ? "sm:flex" : "sm:hidden")
    }

    // lg breakpoint
    if (columnVisibility.lg?.[index] !== undefined) {
      classes.push(columnVisibility.lg[index] ? "lg:flex" : "lg:hidden")
    }

    // xl breakpoint
    if (columnVisibility.xl?.[index] !== undefined) {
      classes.push(columnVisibility.xl[index] ? "xl:flex" : "xl:hidden")
    }

    return classes.join(" ")
  }

  return (
    <div
      className={cn(
        "bg-muted h-auto rounded-2xl p-2",
        classNames.container,
        className
      )}
    >
      <div
        className={cn(
          "bg-background flex h-full flex-row overflow-hidden rounded-xl",
          classNames.innerContainer
        )}
      >
        {columns.map((column, columnIndex) => (
          <div
            key={columnIndex}
            className={cn(
              "flex-col gap-2 p-2",
              getColumnVisibilityClass(columnIndex),
              classNames.column
            )}
          >
            {column.map((item, itemIndex) => (
              <a
                key={`${columnIndex}-${itemIndex}`}
                href={item.url}
                rel="noreferrer"
                target="_blank"
                className={cn(
                  "group relative overflow-hidden rounded-lg opacity-75 transition-all hover:scale-[1.02] hover:opacity-100",
                  classNames.link
                )}
              >
                <ExternalLinkLabel className={classNames.label}>
                  {item.label}
                  <svg
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className={cn("size-4", classNames.labelIcon)}
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </ExternalLinkLabel>
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={item.width || 300}
                  height={item.height || 400}
                  className={cn("object-cover", classNames.image)}
                />
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

function ExternalLinkLabel({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "border-foreground bg-foreground/90 text-background ring-border absolute top-1/2 left-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 transform flex-row items-center gap-[calc(1rem/16*7)] rounded-full border py-0.5 pr-2 pb-1 pl-3 text-center font-mono text-sm/6 font-medium opacity-0 ring-1 transition-opacity group-hover:flex group-hover:opacity-100",
        className
      )}
    >
      {children}
    </div>
  )
}
