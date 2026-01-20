import { forwardRef } from "react"
import { View, type ViewProps } from "react-native"

import { cn } from "@/lib/utils"

const Card = forwardRef<React.ComponentRef<typeof View>, ViewProps>(
  ({ className, ...props }, ref) => (
    <View
      ref={ref}
      className={cn("rounded-xl bg-card p-4", className)}
      {...props}
    />
  )
)

Card.displayName = "Card"

const CardHeader = forwardRef<React.ComponentRef<typeof View>, ViewProps>(
  ({ className, ...props }, ref) => (
    <View ref={ref} className={cn("pb-2", className)} {...props} />
  )
)

CardHeader.displayName = "CardHeader"

const CardContent = forwardRef<React.ComponentRef<typeof View>, ViewProps>(
  ({ className, ...props }, ref) => (
    <View ref={ref} className={cn("", className)} {...props} />
  )
)

CardContent.displayName = "CardContent"

const CardFooter = forwardRef<React.ComponentRef<typeof View>, ViewProps>(
  ({ className, ...props }, ref) => (
    <View
      ref={ref}
      className={cn("flex-row items-center pt-2", className)}
      {...props}
    />
  )
)

CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardContent, CardFooter }
