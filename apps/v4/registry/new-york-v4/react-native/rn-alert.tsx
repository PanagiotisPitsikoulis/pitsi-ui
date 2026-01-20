import { forwardRef } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { clsx } from "clsx"
import {
  AlertCircle,
  AlertTriangle,
  CheckCircle,
  Info,
} from "lucide-react-native"
import { Text, View, type ViewProps } from "react-native"
import { twMerge } from "tailwind-merge"

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs))
}

const alertVariants = cva("flex-row items-start gap-3 rounded-xl border p-4", {
  variants: {
    variant: {
      default: "border-border bg-background",
      info: "border-blue-200 bg-blue-50",
      success: "border-green-200 bg-green-50",
      warning: "border-yellow-200 bg-yellow-50",
      destructive: "border-red-200 bg-red-50",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

const iconColors = {
  default: "#71717a",
  info: "#3b82f6",
  success: "#22c55e",
  warning: "#eab308",
  destructive: "#ef4444",
}

const textColors = {
  default: "text-foreground",
  info: "text-blue-900",
  success: "text-green-900",
  warning: "text-yellow-900",
  destructive: "text-red-900",
}

export interface AlertProps
  extends ViewProps, VariantProps<typeof alertVariants> {
  title?: string
  children?: React.ReactNode
  className?: string
}

const Alert = forwardRef<React.ComponentRef<typeof View>, AlertProps>(
  ({ variant = "default", title, children, className, ...props }, ref) => {
    const Icon =
      variant === "info"
        ? Info
        : variant === "success"
          ? CheckCircle
          : variant === "warning"
            ? AlertTriangle
            : AlertCircle

    return (
      <View
        ref={ref}
        className={cn(alertVariants({ variant, className }))}
        {...props}
      >
        <Icon size={20} color={iconColors[variant || "default"]} />
        <View className="flex-1">
          {title && (
            <Text
              className={cn(
                "mb-1 font-semibold",
                textColors[variant || "default"]
              )}
            >
              {title}
            </Text>
          )}
          {typeof children === "string" ? (
            <Text className={cn("text-sm", textColors[variant || "default"])}>
              {children}
            </Text>
          ) : (
            children
          )}
        </View>
      </View>
    )
  }
)

Alert.displayName = "Alert"

export { Alert, alertVariants }
