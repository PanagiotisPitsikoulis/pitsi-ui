import React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/registry/new-york-v4/lib/utils"

type HTMLDivProps = React.HTMLAttributes<HTMLDivElement>

// Spacer variants using 4-based spacing system
export const spacerVariants = cva("shrink-0", {
  variants: {
    size: {
      xxs: "h-1", // 4px
      xs: "h-2", // 8px
      sm: "h-3", // 12px
      md: "h-4", // 16px
      lg: "h-6", // 24px
      xl: "h-8", // 32px
      "2xl": "h-10", // 40px
      "3xl": "h-12", // 48px
      "4xl": "h-16", // 64px
      "5xl": "h-20", // 80px
      "6xl": "h-24", // 96px
      "7xl": "h-32", // 128px
      "8xl": "h-40", // 160px
      "9xl": "h-48", // 192px
    },
    axis: {
      vertical: "",
      horizontal: "",
    },
  },
  compoundVariants: [
    // Horizontal variants - set width instead of height
    {
      axis: "horizontal",
      size: "xxs",
      className: "w-1 h-auto",
    },
    {
      axis: "horizontal",
      size: "xs",
      className: "w-2 h-auto",
    },
    {
      axis: "horizontal",
      size: "sm",
      className: "w-3 h-auto",
    },
    {
      axis: "horizontal",
      size: "md",
      className: "w-4 h-auto",
    },
    {
      axis: "horizontal",
      size: "lg",
      className: "w-6 h-auto",
    },
    {
      axis: "horizontal",
      size: "xl",
      className: "w-8 h-auto",
    },
    {
      axis: "horizontal",
      size: "2xl",
      className: "w-10 h-auto",
    },
    {
      axis: "horizontal",
      size: "3xl",
      className: "w-12 h-auto",
    },
    {
      axis: "horizontal",
      size: "4xl",
      className: "w-16 h-auto",
    },
    {
      axis: "horizontal",
      size: "5xl",
      className: "w-20 h-auto",
    },
    {
      axis: "horizontal",
      size: "6xl",
      className: "w-24 h-auto",
    },
    {
      axis: "horizontal",
      size: "7xl",
      className: "w-32 h-auto",
    },
    {
      axis: "horizontal",
      size: "8xl",
      className: "w-40 h-auto",
    },
    {
      axis: "horizontal",
      size: "9xl",
      className: "w-48 h-auto",
    },
  ],
  defaultVariants: {
    size: "md",
    axis: "vertical",
  },
})

export interface SpacerProps
  extends HTMLDivProps,
    VariantProps<typeof spacerVariants> {
  asChild?: boolean
}

export const Spacer = React.forwardRef<HTMLDivElement, SpacerProps>(
  ({ className, size, axis, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div"
    return (
      <Comp
        ref={ref}
        className={cn(spacerVariants({ size, axis }), className)}
        aria-hidden="true"
        {...props}
      />
    )
  }
)
Spacer.displayName = "Spacer"
