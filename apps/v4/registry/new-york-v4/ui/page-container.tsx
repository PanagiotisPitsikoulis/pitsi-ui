import { cn } from "@/lib/utils"

const maxWidthMap = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  "3xl": "max-w-3xl",
  "4xl": "max-w-4xl",
  "5xl": "max-w-5xl",
  "6xl": "max-w-6xl",
  "7xl": "max-w-7xl",
  full: "max-w-full",
} as const

interface PageContainerProps {
  children: React.ReactNode
  maxWidth?: keyof typeof maxWidthMap
  padding?: "none" | "sm" | "md" | "lg"
  spacing?: "none" | "sm" | "md" | "lg"
  className?: string
}

export function PageContainer({
  children,
  maxWidth = "3xl",
  padding = "md",
  spacing = "md",
  className,
}: PageContainerProps) {
  const paddingClasses = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  }

  const spacingClasses = {
    none: "",
    sm: "space-y-4",
    md: "space-y-6",
    lg: "space-y-8",
  }

  return (
    <div className={paddingClasses[padding]}>
      <div
        className={cn(
          "mx-auto",
          maxWidthMap[maxWidth],
          spacingClasses[spacing],
          className
        )}
      >
        {children}
      </div>
    </div>
  )
}
