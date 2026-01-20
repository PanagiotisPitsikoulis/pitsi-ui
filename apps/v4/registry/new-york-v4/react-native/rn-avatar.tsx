"use client"

import { forwardRef, useState } from "react"
import { clsx } from "clsx"
import {
  Image,
  Text,
  View,
  type ImageSourcePropType,
  type ViewProps,
} from "react-native"
import { twMerge } from "tailwind-merge"

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs))
}

export interface AvatarProps extends ViewProps {
  source?: ImageSourcePropType
  fallback?: string
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
}

const sizeClasses = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-12 w-12",
  xl: "h-16 w-16",
}

const textSizeClasses = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base",
  xl: "text-lg",
}

const Avatar = forwardRef<React.ComponentRef<typeof View>, AvatarProps>(
  ({ source, fallback, size = "md", className, ...props }, ref) => {
    const [imageError, setImageError] = useState(false)

    const showFallback = !source || imageError

    return (
      <View
        ref={ref}
        className={cn(
          "bg-muted items-center justify-center overflow-hidden rounded-full",
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {showFallback ? (
          <Text
            className={cn(
              "text-muted-foreground font-semibold uppercase",
              textSizeClasses[size]
            )}
          >
            {fallback?.slice(0, 2) || "?"}
          </Text>
        ) : (
          <Image
            source={source}
            className="h-full w-full"
            onError={() => setImageError(true)}
          />
        )}
      </View>
    )
  }
)

Avatar.displayName = "Avatar"

export { Avatar }
