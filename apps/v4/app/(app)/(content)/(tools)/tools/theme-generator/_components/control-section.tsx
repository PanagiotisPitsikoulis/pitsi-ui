"use client"

import { useEffect, useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

import { cn } from "@/lib/utils"

interface ControlSectionProps {
  title: string
  children: React.ReactNode
  expanded?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
  className?: string
}

export function ControlSection({
  title,
  children,
  expanded = false,
  open,
  onOpenChange,
  className,
}: ControlSectionProps) {
  const [internalOpen, setInternalOpen] = useState(expanded)

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
    <div className={cn("mb-4 overflow-hidden rounded-lg border shadow-xs")}>
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
        <div className={cn("bg-background border-t p-3", className)}>
          {children}
        </div>
      </div>
    </div>
  )
}
