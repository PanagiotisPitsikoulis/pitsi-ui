"use client"

import { Button } from "@/registry/new-york-v4/ui/button"
import { Label } from "@/registry/new-york-v4/ui/label"

const themes = [
  { id: "light", label: "Light", className: "bg-background" },
  { id: "dark", label: "Dark", className: "bg-foreground" },
  {
    id: "system",
    label: "System",
    className: "from-background to-foreground bg-gradient-to-br",
  },
] as const

interface ThemeSelectorProps {
  value?: string
  onChange?: (theme: string) => void
}

export function ThemeSelector({ value, onChange }: ThemeSelectorProps) {
  return (
    <div className="space-y-2">
      <Label>Theme</Label>
      <div className="grid grid-cols-3 gap-4">
        {themes.map((theme) => (
          <Button
            key={theme.id}
            variant="outline"
            className="h-auto flex-col gap-2 py-4"
            onClick={() => onChange?.(theme.id)}
            data-active={value === theme.id}
          >
            <div className={`size-12 rounded border ${theme.className}`} />
            {theme.label}
          </Button>
        ))}
      </div>
    </div>
  )
}
