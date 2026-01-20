import { forwardRef } from "react"
import { clsx } from "clsx"
import { View, type ViewProps } from "react-native"
import { twMerge } from "tailwind-merge"

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs))
}

export interface ProgressProps extends ViewProps {
  value?: number
  max?: number
  className?: string
  indicatorClassName?: string
}

const Progress = forwardRef<React.ComponentRef<typeof View>, ProgressProps>(
  ({ value = 0, max = 100, className, indicatorClassName, ...props }, ref) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100)

    return (
      <View
        ref={ref}
        className={cn(
          "bg-muted h-3 w-full overflow-hidden rounded-full",
          className
        )}
        {...props}
      >
        <View
          className={cn("bg-primary h-full rounded-full", indicatorClassName)}
          style={{ width: `${percentage}%` }}
        />
      </View>
    )
  }
)

Progress.displayName = "Progress"

export { Progress }
