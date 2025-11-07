"use client"

import type React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { useIsMobile } from "@/registry/new-york-v4/hooks/use-mobile"
import { cn } from "@/registry/new-york-v4/lib/utils"

import type { PolymorphicComponentProps } from "../lib/polymorphic"

export const gridVariants = cva("grid", {
  variants: {
    cols: {
      1: "grid-cols-1",
      2: "grid-cols-2",
      3: "grid-cols-3",
      4: "grid-cols-4",
      5: "grid-cols-5",
      6: "grid-cols-6",
      7: "grid-cols-7",
      8: "grid-cols-8",
      9: "grid-cols-9",
      10: "grid-cols-10",
      11: "grid-cols-11",
      12: "grid-cols-12",
    },
    rows: {
      1: "grid-rows-1",
      2: "grid-rows-2",
      3: "grid-rows-3",
      4: "grid-rows-4",
      5: "grid-rows-5",
      6: "grid-rows-6",
    },
    flow: {
      row: "grid-flow-row",
      col: "grid-flow-col",
      dense: "grid-flow-dense",
      "row-dense": "grid-flow-row-dense",
      "col-dense": "grid-flow-col-dense",
    },
    gap: {
      xxs: "gap-1",
      xs: "gap-2",
      sm: "gap-3",
      md: "gap-4",
      lg: "gap-6",
      xl: "gap-8",
      "2xl": "gap-10",
      "3xl": "gap-12",
      "4xl": "gap-16",
      "5xl": "gap-20",
      "6xl": "gap-24",
      "7xl": "gap-32",
      "8xl": "gap-40",
      "9xl": "gap-48",
    },
    gapX: {
      xxs: "gap-x-1",
      xs: "gap-x-2",
      sm: "gap-x-3",
      md: "gap-x-4",
      lg: "gap-x-6",
      xl: "gap-x-8",
      "2xl": "gap-x-10",
      "3xl": "gap-x-12",
      "4xl": "gap-x-16",
      "5xl": "gap-x-20",
      "6xl": "gap-x-24",
      "7xl": "gap-x-32",
      "8xl": "gap-x-40",
      "9xl": "gap-x-48",
    },
    gapY: {
      xxs: "gap-y-1",
      xs: "gap-y-2",
      sm: "gap-y-3",
      md: "gap-y-4",
      lg: "gap-y-6",
      xl: "gap-y-8",
      "2xl": "gap-y-10",
      "3xl": "gap-y-12",
      "4xl": "gap-y-16",
      "5xl": "gap-y-20",
      "6xl": "gap-y-24",
      "7xl": "gap-y-32",
      "8xl": "gap-y-40",
      "9xl": "gap-y-48",
    },
    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
      baseline: "items-baseline",
    },
    justify: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
      around: "justify-around",
      evenly: "justify-evenly",
    },
  },
  defaultVariants: {
    flow: "row",
    align: "start",
    justify: "start",
  },
})

export type GridOwnProps = VariantProps<typeof gridVariants> & {
  colsMobile?: VariantProps<typeof gridVariants>["cols"]
  rowsMobile?: VariantProps<typeof gridVariants>["rows"]
  flowMobile?: VariantProps<typeof gridVariants>["flow"]
  gapMobile?: VariantProps<typeof gridVariants>["gap"]
  gapXMobile?: VariantProps<typeof gridVariants>["gapX"]
  gapYMobile?: VariantProps<typeof gridVariants>["gapY"]
  alignMobile?: VariantProps<typeof gridVariants>["align"]
  justifyMobile?: VariantProps<typeof gridVariants>["justify"]
}

export default function Grid<T extends React.ElementType = "div">({
  as,
  className,
  cols,
  rows,
  flow,
  gap,
  gapX,
  gapY,
  align,
  justify,
  colsMobile,
  rowsMobile,
  flowMobile,
  gapMobile,
  gapXMobile,
  gapYMobile,
  alignMobile,
  justifyMobile,
  ...props
}: PolymorphicComponentProps<T, GridOwnProps>) {
  const isMobile = useIsMobile()
  const Component = as || "div"

  const activeCols = isMobile && colsMobile !== undefined ? colsMobile : cols
  const activeRows = isMobile && rowsMobile !== undefined ? rowsMobile : rows
  const activeFlow = isMobile && flowMobile !== undefined ? flowMobile : flow
  const activeGap = isMobile && gapMobile !== undefined ? gapMobile : gap
  const activeGapX = isMobile && gapXMobile !== undefined ? gapXMobile : gapX
  const activeGapY = isMobile && gapYMobile !== undefined ? gapYMobile : gapY
  const activeAlign =
    isMobile && alignMobile !== undefined ? alignMobile : align
  const activeJustify =
    isMobile && justifyMobile !== undefined ? justifyMobile : justify

  return (
    <Component
      className={cn(
        gridVariants({
          cols: activeCols,
          rows: activeRows,
          flow: activeFlow,
          gap: activeGap,
          gapX: activeGapX,
          gapY: activeGapY,
          align: activeAlign,
          justify: activeJustify,
        }),
        className
      )}
      {...props}
    />
  )
}
