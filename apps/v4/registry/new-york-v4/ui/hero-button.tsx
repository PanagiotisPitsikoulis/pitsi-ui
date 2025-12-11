import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/registry/new-york-v4/ui/button"

const circleVariants = cva(
  "absolute inset-y-0 right-1 my-auto flex items-center justify-center overflow-hidden rounded-full transition-all duration-300 ease-out",
  {
    variants: {
      variant: {
        default: "bg-primary-foreground text-primary",
        destructive: "bg-white text-destructive",
        outline: "bg-foreground text-background",
        secondary: "bg-secondary-foreground text-secondary",
        ghost: "bg-accent text-accent-foreground",
        link: "bg-primary-foreground text-primary",
      },
      size: {
        default: "size-7",
        sm: "size-6",
        lg: "size-8",
        icon: "size-7",
        "icon-sm": "size-6",
        "icon-lg": "size-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const paddingBySize = {
  default: "pr-10",
  sm: "pr-9",
  lg: "pr-12",
  icon: "pr-10",
  "icon-sm": "pr-9",
  "icon-lg": "pr-12",
} as const

function HeroButton({
  className,
  children,
  expandCircle,
  variant,
  size = "lg",
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
    expandCircle?: boolean
  }) {
  return (
    <Button
      variant={variant}
      size={size}
      className={cn(
        "group relative rounded-full",
        paddingBySize[size || "default"],
        className
      )}
      {...props}
    >
      {children}
      {expandCircle ? (
        <div
          className={cn(
            circleVariants({ variant, size }),
            "aspect-square group-hover:aspect-auto group-hover:w-[calc(100%-0.5rem)]"
          )}
        >
          <span className="absolute left-0 flex h-full items-center pl-4 text-sm font-medium whitespace-nowrap opacity-0 transition-all duration-300 ease-out group-hover:opacity-100">
            {children}
          </span>
          <div
            className={cn(
              "absolute right-0 flex shrink-0 items-center justify-center",
              size === "sm" ? "size-6" : size === "lg" ? "size-8" : "size-7"
            )}
          >
            <ArrowRight className="size-4 transition-transform duration-300 ease-out group-hover:-rotate-45" />
          </div>
        </div>
      ) : (
        <div className={cn(circleVariants({ variant, size }), "aspect-square")}>
          <ArrowRight className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-6" />
          <ArrowRight className="absolute size-4 -translate-x-6 transition-transform duration-300 ease-out group-hover:translate-x-0" />
        </div>
      )}
    </Button>
  )
}

export { HeroButton }
