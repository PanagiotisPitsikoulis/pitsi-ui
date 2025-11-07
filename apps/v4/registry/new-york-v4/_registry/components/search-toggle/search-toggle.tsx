"use client"

import type { ComponentProps } from "react"
import type { VariantProps } from "class-variance-authority"
import { useSearchContext } from "fumadocs-ui/contexts/search"
import { Search } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

type ButtonProps = VariantProps<typeof buttonVariants>

export interface SearchToggleProps
  extends Omit<ComponentProps<"button">, "color">,
    ButtonProps {
  hideIfDisabled?: boolean
}

export function SearchToggle({
  hideIfDisabled,
  size = "icon-sm",
  variant = "ghost",
  ...props
}: SearchToggleProps) {
  const { setOpenSearch, enabled } = useSearchContext()
  if (hideIfDisabled && !enabled) return null

  return (
    <button
      className={cn(
        buttonVariants({
          size,
          variant,
        }),
        "text-foreground",
        props.className
      )}
      data-search=""
      aria-label="Open Search"
      onClick={() => {
        setOpenSearch(true)
      }}
    >
      <Search />
    </button>
  )
}

export interface LargeSearchToggleProps extends ComponentProps<"button"> {
  hideIfDisabled?: boolean
}

export function LargeSearchToggle({
  hideIfDisabled,
  ...props
}: LargeSearchToggleProps) {
  const { enabled, hotKey, setOpenSearch } = useSearchContext()
  if (hideIfDisabled && !enabled) return null

  return (
    <button
      data-search-full=""
      {...props}
      className={cn(
        "bg-secondary/50 text-muted-foreground hover:bg-accent hover:text-accent-foreground inline-flex items-center gap-2 rounded-lg border p-1.5 ps-2 text-sm transition-colors",
        props.className
      )}
      onClick={() => {
        setOpenSearch(true)
      }}
    >
      <Search className="size-4" />
      {props.children ?? "Search"}
      <div className="ms-auto inline-flex gap-0.5">
        {hotKey.map((k, i) => (
          <kbd key={i} className="bg-background rounded-md border px-1.5">
            {k.display}
          </kbd>
        ))}
      </div>
    </button>
  )
}
