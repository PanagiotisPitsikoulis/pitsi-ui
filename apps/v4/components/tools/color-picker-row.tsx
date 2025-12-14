"use client"

import { useCallback, useMemo, useState } from "react"
import Color from "color"

import { cn } from "@/lib/utils"
import {
  ColorPicker,
  ColorPickerEyeDropper,
  ColorPickerFormat,
  ColorPickerHue,
  ColorPickerOutput,
  ColorPickerSelection,
} from "@/components/kibo-ui/color-picker"
import { Input } from "@/registry/new-york-v4/ui/input"
import { Label } from "@/registry/new-york-v4/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/new-york-v4/ui/popover"

interface ColorPickerRowProps {
  label: string
  color: string
  onChange: (color: string) => void
  className?: string
}

function ColorPickerRow({ label, color, onChange, className }: ColorPickerRowProps) {
  const [isOpen, setIsOpen] = useState(false)

  const safeHexColor = useMemo(() => {
    try {
      return Color(color).hex()
    } catch {
      return "#000000"
    }
  }, [color])

  const handleColorChange = useCallback(
    (value: Parameters<typeof Color.rgb>[0]) => {
      const rgba = value as number[]
      const hex = Color.rgb(rgba[0], rgba[1], rgba[2]).hex()
      onChange(hex)
    },
    [onChange]
  )

  return (
    <div className={cn("grid grid-cols-[1fr_auto_1fr] items-center gap-3", className)}>
      <Label className="text-sm font-medium">{label}</Label>
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <button
            type="button"
            className="size-8 cursor-pointer rounded-full border"
            style={{ backgroundColor: color }}
          />
        </PopoverTrigger>
        <PopoverContent className="w-64 p-3" align="start">
          {isOpen && (
            <ColorPicker defaultValue={safeHexColor} onChange={handleColorChange}>
              <ColorPickerSelection className="mb-3 h-32 rounded-md" />
              <ColorPickerHue className="mb-3" />
              <div className="flex items-center gap-2">
                <ColorPickerOutput />
                <ColorPickerFormat className="flex-1" />
                <ColorPickerEyeDropper />
              </div>
            </ColorPicker>
          )}
        </PopoverContent>
      </Popover>
      <Input
        type="text"
        value={color}
        onChange={(e) => onChange(e.target.value)}
        className="h-8 w-full font-mono text-xs"
      />
    </div>
  )
}

export { ColorPickerRow }
export type { ColorPickerRowProps }
