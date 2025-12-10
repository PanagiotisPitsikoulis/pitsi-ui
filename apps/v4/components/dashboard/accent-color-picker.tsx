"use client"

import { Label } from "@/registry/new-york-v4/ui/label"

const colors = ["blue", "green", "purple", "red", "orange"] as const

interface AccentColorPickerProps {
  value?: string
  onChange?: (color: string) => void
}

export function AccentColorPicker({ value = "blue", onChange }: AccentColorPickerProps) {
  return (
    <div className="space-y-2">
      <Label>Accent Color</Label>
      <div className="flex gap-2">
        {colors.map((color) => (
          <button
            key={color}
            className="size-10 rounded-full border-2 transition-all hover:scale-110"
            style={{
              backgroundColor: color,
              borderColor: value === color ? "black" : "transparent",
            }}
            onClick={() => onChange?.(color)}
          />
        ))}
      </div>
    </div>
  )
}
