"use client"

import {
  useEffect,
  useLayoutEffect,
  useState,
  type HTMLAttributes,
} from "react"
import { Moon, SlidersHorizontal, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { cn } from "@/registry/new-york-v4/lib/utils"
import {
  SegmentedControl,
  SegmentedControlList,
  SegmentedControlTrigger,
} from "@/registry/new-york-v4/ui/segmented-control"

const themes = [
  ["light", Sun] as const,
  ["dark", Moon] as const,
  ["system", SlidersHorizontal] as const,
]

export interface ThemeToggleProps extends HTMLAttributes<HTMLDivElement> {
  mode?: "light-dark" | "light-dark-system"
}

export function ThemeToggle({
  className,
  mode = "light-dark-system",
  ...props
}: ThemeToggleProps) {
  const { setTheme, theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [localValue, setLocalValue] = useState<string | null>(null)

  useLayoutEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  // Sync local value with theme after mount
  useEffect(() => {
    if (mounted) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLocalValue(
        mode === "light-dark" ? (resolvedTheme as string) : (theme as string)
      )
    }
  }, [mounted, theme, resolvedTheme, mode])

  const handleThemeChange = (newTheme: string) => {
    // Update local state immediately for animation
    setLocalValue(newTheme)

    // Delay actual theme change to allow animation to complete (300ms duration)
    setTimeout(() => {
      setTheme(newTheme)
    }, 300)
  }

  // Light-dark toggle (only sun and moon)
  if (mode === "light-dark") {
    const value = localValue ?? (mounted ? resolvedTheme : "system")

    return (
      <div className={cn("w-fit", className)} {...props}>
        <SegmentedControl
          value={value}
          onValueChange={(newTheme) => {
            const nextTheme = value === "light" ? "dark" : "light"
            handleThemeChange(nextTheme)
          }}
        >
          <SegmentedControlList
            className="border-border bg-background w-fit rounded-full border p-px shadow-xs"
            floatingBgClassName="rounded-full border border-border bg-background shadow-2xs dark:bg-secondary"
          >
            {themes.map(([key, Icon]) => {
              if (key === "system") return null

              return (
                <SegmentedControlTrigger
                  key={key}
                  value={key}
                  className="data-[state=inactive]:text-muted-foreground size-6 data-[state=inactive]:opacity-60"
                >
                  <Icon className="size-3.5 shrink-0" />
                </SegmentedControlTrigger>
              )
            })}
          </SegmentedControlList>
        </SegmentedControl>
      </div>
    )
  }

  // Full toggle with system option
  const value = localValue ?? (mounted ? theme : "system")

  return (
    <div className={cn("w-fit", className)} {...props}>
      <SegmentedControl
        value={value}
        onValueChange={handleThemeChange}
        defaultValue="system"
      >
        <SegmentedControlList
          className="border-border bg-background w-fit rounded-full border p-px shadow-xs"
          floatingBgClassName="rounded-full border border-border bg-background shadow-2xs dark:bg-secondary"
        >
          {themes.map(([key, Icon]) => (
            <SegmentedControlTrigger
              key={key}
              value={key}
              className="data-[state=inactive]:text-muted-foreground size-6 data-[state=inactive]:opacity-60"
            >
              <Icon className="size-4 shrink-0" />
            </SegmentedControlTrigger>
          ))}
        </SegmentedControlList>
      </SegmentedControl>
    </div>
  )
}
