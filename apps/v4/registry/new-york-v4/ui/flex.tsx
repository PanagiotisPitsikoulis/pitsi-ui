"use client"

import React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { useIsMobile } from "@/registry/new-york-v4/hooks/use-mobile"
import { cn } from "@/registry/new-york-v4/lib/utils"

import type {
  PolymorphicComponent,
  PolymorphicComponentProps,
  PolymorphicRef,
} from "../lib/polymorphic"

export const flexVariants = cva("flex", {
  variants: {
    direction: {
      row: "flex-row",
      "row-reverse": "flex-row-reverse",
      col: "flex-col",
      "col-reverse": "flex-col-reverse",
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
    wrap: {
      wrap: "flex-wrap",
      nowrap: "flex-nowrap",
      "wrap-reverse": "flex-wrap-reverse",
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
  },
  defaultVariants: {
    direction: "row",
    align: "start",
    justify: "start",
    wrap: "nowrap",
  },
})

export type FlexOwnProps = VariantProps<typeof flexVariants> & {
  directionMobile?: VariantProps<typeof flexVariants>["direction"]
  alignMobile?: VariantProps<typeof flexVariants>["align"]
  justifyMobile?: VariantProps<typeof flexVariants>["justify"]
  wrapMobile?: VariantProps<typeof flexVariants>["wrap"]
  gapMobile?: VariantProps<typeof flexVariants>["gap"]
}

const FlexInner = function Flex<T extends React.ElementType = "div">(
  {
    as,
    className,
    direction,
    align,
    justify,
    wrap,
    gap,
    directionMobile,
    alignMobile,
    justifyMobile,
    wrapMobile,
    gapMobile,
    ...props
  }: PolymorphicComponentProps<T, FlexOwnProps>,
  ref?: PolymorphicRef<T>
) {
  const isMobile = useIsMobile()
  const Component = as || "div"

  const activeDirection =
    isMobile && directionMobile !== undefined ? directionMobile : direction
  const activeAlign =
    isMobile && alignMobile !== undefined ? alignMobile : align
  const activeJustify =
    isMobile && justifyMobile !== undefined ? justifyMobile : justify
  const activeWrap = isMobile && wrapMobile !== undefined ? wrapMobile : wrap
  const activeGap = isMobile && gapMobile !== undefined ? gapMobile : gap

  return (
    <Component
      ref={ref}
      className={cn(
        flexVariants({
          direction: activeDirection,
          align: activeAlign,
          justify: activeJustify,
          wrap: activeWrap,
          gap: activeGap,
        }),
        className
      )}
      {...props}
    />
  )
}

const Flex = React.forwardRef(
  FlexInner as any
) as unknown as PolymorphicComponent<FlexOwnProps>

export default Flex
