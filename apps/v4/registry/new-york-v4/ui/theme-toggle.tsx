"use client"

import {
  useEffect,
  useLayoutEffect,
  useState,
  type HTMLAttributes,
} from "react"
import { RiEqualizer3Fill, RiMoonLine, RiSunLine } from "@remixicon/react"
import { useTheme } from "next-themes"

import { cn } from "@/registry/new-york-v4/lib/utils"
import {
  SegmentedControl,
  SegmentedControlList,
  SegmentedControlTrigger,
} from "@/registry/new-york-v4/ui/segmented-control"

const themes = [
  ["light", RiSunLine] as const,
  ["dark", RiMoonLine] as const,
  ["system", RiEqualizer3Fill] as const,
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
      <div className={cn("w-full max-w-sm", className)} {...props}>
        <SegmentedControl
          value={value}
          className="bg-sufrace"
          onValueChange={(newTheme) => {
            const nextTheme = value === "light" ? "dark" : "light"
            handleThemeChange(nextTheme)
          }}
        >
          <SegmentedControlList
            className="border-border bg-sufrace w-fit rounded-full border shadow-sm"
            floatingBgClassName="rounded-full border border-border bg-sufrace shadow-md"
          >
            {themes.map(([key, Icon]) => {
              if (key === "system") return null

              return (
                <SegmentedControlTrigger
                  key={key}
                  value={key}
                  className="aspect-square h-9 data-[state=inactive]:text-muted-foreground data-[state=inactive]:opacity-60"
                >
                  <Icon className="size-5 shrink-0" />
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
    <div className={cn("w-full max-w-sm", className)} {...props}>
      <SegmentedControl
        value={value}
        className="bg-sufrace"
        onValueChange={handleThemeChange}
        defaultValue="system"
      >
        <SegmentedControlList
          className="border-border bg-sufrace w-fit rounded-full border shadow-sm"
          floatingBgClassName="rounded-full border border-border bg-sufrace shadow-md"
        >
          {themes.map(([key, Icon]) => (
            <SegmentedControlTrigger
              key={key}
              value={key}
              className="aspect-square h-6 data-[state=inactive]:text-muted-foreground data-[state=inactive]:opacity-60"
            >
              <Icon className="size-4 shrink-0" />
            </SegmentedControlTrigger>
          ))}
        </SegmentedControlList>
      </SegmentedControl>
    </div>
  )
}
