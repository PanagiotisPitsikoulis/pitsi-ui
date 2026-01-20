import { forwardRef } from "react"
import { View, type ViewProps } from "react-native"

import { cn } from "@/lib/utils"

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
        className={cn("h-2 w-full overflow-hidden rounded-full bg-muted", className)}
        {...props}
      >
        <View
          className={cn("h-full bg-primary", indicatorClassName)}
          style={{ width: `${percentage}%` }}
        />
      </View>
    )
  }
)

Progress.displayName = "Progress"

export { Progress }
