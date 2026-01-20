import { forwardRef } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { clsx } from "clsx"
import { Text as RNText, type TextProps as RNTextProps } from "react-native"
import { twMerge } from "tailwind-merge"

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs))
}

const typographyVariants = cva("text-foreground", {
  variants: {
    variant: {
      h1: "text-4xl font-bold tracking-tight",
      h2: "text-3xl font-bold tracking-tight",
      h3: "text-2xl font-semibold",
      h4: "text-xl font-semibold",
      h5: "text-lg font-semibold",
      h6: "text-base font-semibold",
      body: "text-base",
      bodySmall: "text-sm",
      caption: "text-xs",
      muted: "text-sm text-muted-foreground",
      lead: "text-xl text-muted-foreground",
    },
  },
  defaultVariants: {
    variant: "body",
  },
})

export interface TypographyProps
  extends RNTextProps, VariantProps<typeof typographyVariants> {
  className?: string
}

const Typography = forwardRef<
  React.ComponentRef<typeof RNText>,
  TypographyProps
>(({ className, variant, ...props }, ref) => {
  return (
    <RNText
      ref={ref}
      className={cn(typographyVariants({ variant, className }))}
      {...props}
    />
  )
})

Typography.displayName = "Typography"

export { Typography, typographyVariants }
