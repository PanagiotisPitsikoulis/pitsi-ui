"use client"

import { useEffect, useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

import { cn } from "@/lib/utils"

interface ControlSectionProps {
  title: string
  children: React.ReactNode
  /**
   * Initial expanded state (uncontrolled mode)
   */
  defaultExpanded?: boolean
  /**
   * Controlled open state
   */
  open?: boolean
  /**
   * Callback when open state changes
   */
  onOpenChange?: (open: boolean) => void
  className?: string
}

function ControlSection({
  title,
  children,
  defaultExpanded = false,
  open,
  onOpenChange,
  className,
}: ControlSectionProps) {
  const [internalOpen, setInternalOpen] = useState(defaultExpanded)

  // Controlled mode: sync with external open prop
  useEffect(() => {
    if (open !== undefined) {
      setInternalOpen(open)
    }
  }, [open])

  const isExpanded = open !== undefined ? open : internalOpen

  const handleToggle = () => {
    const newValue = !isExpanded
    setInternalOpen(newValue)
    onOpenChange?.(newValue)
  }

  return (
    <div className={cn("mb-4 overflow-hidden rounded-lg border shadow-xs", className)}>
      <button
        type="button"
        className="bg-background flex w-full cursor-pointer items-center justify-between p-3"
        onClick={handleToggle}
      >
        <h3 className="text-sm font-medium">{title}</h3>
        <span className="text-muted-foreground hover:text-foreground transition-colors">
          {isExpanded ? (
            <ChevronUp className="size-4" />
          ) : (
            <ChevronDown className="size-4" />
          )}
        </span>
      </button>

      <div
        className={cn(
          "overflow-hidden transition-all duration-200",
          isExpanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="bg-background border-t p-3">{children}</div>
      </div>
    </div>
  )
}

export { ControlSection }
export type { ControlSectionProps }
