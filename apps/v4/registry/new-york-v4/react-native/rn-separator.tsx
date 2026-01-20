import { forwardRef } from "react"
import { clsx } from "clsx"
import { View, type ViewProps } from "react-native"
import { twMerge } from "tailwind-merge"

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs))
}

export interface SeparatorProps extends ViewProps {
  orientation?: "horizontal" | "vertical"
  className?: string
}

const Separator = forwardRef<React.ComponentRef<typeof View>, SeparatorProps>(
  ({ orientation = "horizontal", className, ...props }, ref) => {
    return (
      <View
        ref={ref}
        className={cn(
          "bg-border",
          orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
          className
        )}
        {...props}
      />
    )
  }
)

Separator.displayName = "Separator"

export { Separator }
