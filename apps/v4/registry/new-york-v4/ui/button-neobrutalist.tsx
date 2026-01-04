import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonNeobrutalistVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px]",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        destructive: "bg-destructive text-white",
        outline: "bg-background text-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        ghost: "bg-transparent text-foreground",
        link: "text-primary underline-offset-4",
      },
      size: {
        default: "h-10 px-6 has-[>svg]:px-4",
        sm: "h-8 gap-1.5 px-5 has-[>svg]:px-3 text-xs",
        lg: "h-12 px-8 has-[>svg]:px-5 text-base",
        icon: "size-10",
        "icon-sm": "size-8",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function ButtonNeobrutalist({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonNeobrutalistVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"
  const clipId = React.useId().replace(/:/g, "")

  return (
    <>
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id={clipId} clipPathUnits="objectBoundingBox">
            <polygon points="0.04,0 1,0 0.96,1 0,1" />
          </clipPath>
        </defs>
      </svg>
      <Comp
        data-slot="button"
        className={cn(buttonNeobrutalistVariants({ variant, size, className }))}
        style={{ clipPath: `url(#${clipId})` }}
        {...props}
      />
    </>
  )
}

export { ButtonNeobrutalist, buttonNeobrutalistVariants }
