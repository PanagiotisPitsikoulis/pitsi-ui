import { cva, type VariantProps } from "class-variance-authority"
import { forwardRef } from "react"
import { Pressable, Text, type PressableProps } from "react-native"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "flex flex-row items-center justify-center rounded-xl",
  {
    variants: {
      variant: {
        default: "bg-primary active:bg-primary/90",
        secondary: "bg-secondary active:bg-secondary/90",
        destructive: "bg-destructive active:bg-destructive/90",
        outline: "border-2 border-border bg-transparent active:bg-muted",
        ghost: "bg-transparent active:bg-muted",
      },
      size: {
        default: "px-6 py-3",
        sm: "px-4 py-2",
        lg: "px-8 py-4",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const buttonTextVariants = cva("font-semibold", {
  variants: {
    variant: {
      default: "text-primary-foreground",
      secondary: "text-secondary-foreground",
      destructive: "text-destructive-foreground",
      outline: "text-foreground",
      ghost: "text-foreground",
    },
    size: {
      default: "text-base",
      sm: "text-sm",
      lg: "text-lg",
      icon: "text-base",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
})

export interface ButtonProps
  extends PressableProps,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode
  className?: string
  textClassName?: string
}

const Button = forwardRef<React.ComponentRef<typeof Pressable>, ButtonProps>(
  ({ className, textClassName, variant, size, children, ...props }, ref) => {
    return (
      <Pressable
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {typeof children === "string" ? (
          <Text
            className={cn(buttonTextVariants({ variant, size }), textClassName)}
          >
            {children}
          </Text>
        ) : (
          children
        )}
      </Pressable>
    )
  }
)

Button.displayName = "Button"

export { Button, buttonVariants, buttonTextVariants }
