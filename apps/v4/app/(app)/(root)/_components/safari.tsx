import type { HTMLAttributes } from "react"
import { Layers, Lock, Plus, Share2 } from "lucide-react"

import { cn } from "@/lib/utils"

export interface SafariProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Whether to wrap the safari in a GridContainer
   * @default true
   */
  withGrid?: boolean
  /**
   * URL to display in the address bar
   * @default "pitsi.vercel.app"
   */
  url?: string
  /**
   * Whether to apply 3D skewed transform
   * @default false
   */
  isSkewed?: boolean
}

export function Safari({
  children,
  className,
  url = "pitsiui.com",
  isSkewed = false,
  ...props
}: SafariProps) {
  const content = (
    <div
      className="relative w-full overflow-x-clip"
      style={isSkewed ? { perspective: "2000px" } : undefined}
    >
      <div
        className={cn(
          "bg-background relative w-full overflow-hidden rounded-3xl border shadow-lg",
          isSkewed && "transform-gpu transition-transform duration-500",
          className
        )}
        style={
          isSkewed
            ? {
                transform:
                  "matrix(0.965926, -0.258819, 0.707107, 0.707107, 0, 0)",
                transformOrigin: "center center",
              }
            : undefined
        }
        {...props}
      >
        {/* Safari Chrome Header */}
        <div className="bg-background flex items-center justify-between gap-3 px-6 py-3">
          {/* Left: Traffic Lights */}
          <div className="flex items-center gap-2">
            <div className="size-3.5 rounded-full bg-[#FF5F57]" />
            <div className="size-3.5 rounded-full bg-[#FFBD2E]" />
            <div className="size-3.5 rounded-full bg-[#28C840]" />
          </div>

          {/* Center: URL Bar */}
          <div className="mx-4 flex max-w-md flex-1 flex-row items-center justify-center gap-2">
            <Lock className="text-muted-foreground size-4 shrink-0" />
            <span className="text-md text-muted-foreground truncate">
              {url}
            </span>
          </div>

          {/* Right: Share and Tabs */}
          <div className="flex items-center gap-1">
            <button className="hover:bg-secondary rounded-md p-1.5 transition-colors">
              <Share2 className="text-muted-foreground size-5" />
            </button>
            <button className="hover:bg-secondary rounded-md p-1.5 transition-colors">
              <Plus className="text-muted-foreground size-6" />
            </button>
            <button className="hover:bg-secondary rounded-md p-1.5 transition-colors">
              <Layers className="text-muted-foreground size-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 pt-0">{children}</div>
      </div>
    </div>
  )

  return content
}
