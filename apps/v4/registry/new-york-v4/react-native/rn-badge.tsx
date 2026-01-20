import { forwardRef } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { clsx } from "clsx"
import { Text, View, type ViewProps } from "react-native"
import { twMerge } from "tailwind-merge"

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs))
}

const badgeVariants = cva(
  "flex-row items-center justify-center rounded-full px-2.5 py-0.5",
  {
    variants: {
      variant: {
        default: "bg-primary",
        secondary: "bg-secondary",
        destructive: "bg-destructive",
        outline: "border border-border bg-transparent",
        success: "bg-green-500",
        warning: "bg-yellow-500",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const badgeTextVariants = cva("text-xs font-semibold", {
  variants: {
    variant: {
      default: "text-primary-foreground",
      secondary: "text-secondary-foreground",
      destructive: "text-destructive-foreground",
      outline: "text-foreground",
      success: "text-white",
      warning: "text-white",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export interface BadgeProps
  extends ViewProps, VariantProps<typeof badgeVariants> {
  children: React.ReactNode
  className?: string
  textClassName?: string
}

const Badge = forwardRef<React.ComponentRef<typeof View>, BadgeProps>(
  ({ className, textClassName, variant, children, ...props }, ref) => {
    return (
      <View
        ref={ref}
        className={cn(badgeVariants({ variant, className }))}
        {...props}
      >
        {typeof children === "string" ? (
          <Text className={cn(badgeTextVariants({ variant }), textClassName)}>
            {children}
          </Text>
        ) : (
          children
        )}
      </View>
    )
  }
)

Badge.displayName = "Badge"

export { Badge, badgeVariants, badgeTextVariants }
