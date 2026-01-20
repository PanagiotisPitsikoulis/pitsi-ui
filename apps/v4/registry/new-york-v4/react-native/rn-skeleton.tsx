"use client"

import { forwardRef, useEffect } from "react"
import { clsx } from "clsx"
import { View, type ViewProps } from "react-native"
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated"
import { twMerge } from "tailwind-merge"

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs))
}

export interface SkeletonProps extends ViewProps {
  className?: string
}

const Skeleton = forwardRef<React.ComponentRef<typeof View>, SkeletonProps>(
  ({ className, ...props }, ref) => {
    const opacity = useSharedValue(1)

    useEffect(() => {
      opacity.value = withRepeat(withTiming(0.5, { duration: 1000 }), -1, true)
    }, [opacity])

    const animatedStyle = useAnimatedStyle(() => ({
      opacity: opacity.value,
    }))

    return (
      <Animated.View
        ref={ref}
        style={animatedStyle}
        className={cn("bg-muted rounded-md", className)}
        {...props}
      />
    )
  }
)

Skeleton.displayName = "Skeleton"

export { Skeleton }
