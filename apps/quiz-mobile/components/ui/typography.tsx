import { cva, type VariantProps } from "class-variance-authority"
import { forwardRef } from "react"
import { Text as RNText, type TextProps as RNTextProps } from "react-native"

import { cn } from "@/lib/utils"

const textVariants = cva("text-foreground", {
  variants: {
    variant: {
      default: "",
      h1: "text-3xl font-bold",
      h2: "text-2xl font-bold",
      h3: "text-xl font-semibold",
      h4: "text-lg font-semibold",
      body: "text-base",
      small: "text-sm",
      muted: "text-muted-foreground",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export interface TextProps
  extends RNTextProps,
    VariantProps<typeof textVariants> {
  className?: string
}

const Typography = forwardRef<React.ComponentRef<typeof RNText>, TextProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <RNText
        ref={ref}
        className={cn(textVariants({ variant, className }))}
        {...props}
      />
    )
  }
)

Typography.displayName = "Typography"

export { Typography, textVariants }
