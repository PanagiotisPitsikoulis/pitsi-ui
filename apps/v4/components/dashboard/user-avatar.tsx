import { cn } from "@/lib/utils"

interface UserAvatarProps {
  initial: string
  size?: "sm" | "md" | "lg"
  className?: string
}

const sizeClasses = {
  sm: "size-8 text-sm",
  md: "size-12 text-base",
  lg: "size-20 text-xl",
}

export function UserAvatar({
  initial,
  size = "sm",
  className,
}: UserAvatarProps) {
  return (
    <div
      className={cn(
        "bg-muted flex items-center justify-center rounded-full",
        sizeClasses[size],
        className
      )}
    >
      <span className="font-medium">{initial.toUpperCase()}</span>
    </div>
  )
}
