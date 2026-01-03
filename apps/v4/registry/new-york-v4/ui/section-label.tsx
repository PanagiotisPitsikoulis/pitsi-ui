import { cn } from "@/lib/utils"

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <p
      className={cn(
        "text-muted-foreground text-[10px] font-medium tracking-wider uppercase",
        className
      )}
    >
      {children}
    </p>
  )
}
