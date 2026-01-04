import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { ArrowRight } from "@/lib/icons"
import { cn } from "@/lib/utils"

const heroButtonNeobrutalistVariants = cva(
  "group relative inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "bg-destructive text-white hover:bg-destructive/90",
        outline: "bg-background text-foreground hover:bg-accent",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
      },
      size: {
        default: "h-10 pl-6 pr-14",
        sm: "h-8 pl-5 pr-12 text-xs",
        lg: "h-12 pl-8 pr-16 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const innerVariants = cva(
  "absolute inset-y-0 right-0 flex items-center justify-center transition-all duration-300 ease-out",
  {
    variants: {
      variant: {
        default: "bg-primary-foreground text-primary",
        secondary: "bg-secondary-foreground text-secondary",
        destructive: "bg-white text-destructive",
        outline: "bg-foreground text-background",
        ghost: "bg-accent text-accent-foreground",
      },
      size: {
        default: "w-10",
        sm: "w-8",
        lg: "w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function HeroButtonNeobrutalist({
  className,
  children,
  expandCircle,
  variant = "default",
  size = "lg",
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof heroButtonNeobrutalistVariants> & {
    expandCircle?: boolean
  }) {
  const clipId = React.useId().replace(/:/g, "")
  const innerClipId = `${clipId}-inner`

  return (
    <>
      {/* SVG definitions for tilted clip paths */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id={clipId} clipPathUnits="objectBoundingBox">
            <polygon points="0.06,0 1,0 0.94,1 0,1" />
          </clipPath>
          <clipPath id={innerClipId} clipPathUnits="objectBoundingBox">
            <polygon points="0.06,0 1,0 0.94,1 0,1" />
          </clipPath>
        </defs>
      </svg>
      <button
        className={cn(
          heroButtonNeobrutalistVariants({ variant, size, className })
        )}
        style={{ clipPath: `url(#${clipId})` }}
        {...props}
      >
        {children}
        {expandCircle ? (
          <div
            className={cn(
              innerVariants({ variant, size }),
              "group-hover:w-[calc(100%-1rem)]"
            )}
            style={{ clipPath: `url(#${innerClipId})` }}
          >
            <span className="absolute left-0 flex h-full items-center pl-4 text-sm font-medium whitespace-nowrap opacity-0 transition-all duration-300 ease-out group-hover:opacity-100">
              {children}
            </span>
            <div className="absolute right-0 flex h-full w-10 items-center justify-center">
              <ArrowRight className="size-4 transition-transform duration-300 ease-out group-hover:-rotate-45" />
            </div>
          </div>
        ) : (
          <div
            className={cn(innerVariants({ variant, size }))}
            style={{ clipPath: `url(#${innerClipId})` }}
          >
            <ArrowRight className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-6" />
            <ArrowRight className="absolute size-4 -translate-x-6 transition-transform duration-300 ease-out group-hover:translate-x-0" />
          </div>
        )}
      </button>
    </>
  )
}

export { HeroButtonNeobrutalist, heroButtonNeobrutalistVariants }
