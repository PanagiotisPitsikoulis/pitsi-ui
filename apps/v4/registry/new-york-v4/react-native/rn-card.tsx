import { forwardRef } from "react"
import { clsx } from "clsx"
import { View, type ViewProps } from "react-native"
import { twMerge } from "tailwind-merge"

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs))
}

const Card = forwardRef<React.ComponentRef<typeof View>, ViewProps>(
  ({ className, ...props }, ref) => (
    <View
      ref={ref}
      className={cn(
        "border-border bg-card rounded-xl border p-4 shadow-sm",
        className
      )}
      {...props}
    />
  )
)

Card.displayName = "Card"

const CardHeader = forwardRef<React.ComponentRef<typeof View>, ViewProps>(
  ({ className, ...props }, ref) => (
    <View ref={ref} className={cn("pb-3", className)} {...props} />
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
      className={cn("flex-row items-center pt-3", className)}
      {...props}
    />
  )
)

CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardContent, CardFooter }
