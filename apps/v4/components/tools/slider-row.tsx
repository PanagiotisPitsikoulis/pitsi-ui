"use client"

import { useCallback, useEffect, useState } from "react"

import { cn } from "@/lib/utils"
import { Input } from "@/registry/new-york-v4/ui/input"
import { Label } from "@/registry/new-york-v4/ui/label"
import { Slider } from "@/registry/new-york-v4/ui/slider"

interface SliderRowProps {
  label: string
  value: number
  onChange: (value: number) => void
  min: number
  max: number
  step?: number
  unit?: string
  /**
   * Layout variant:
   * - "inline": Label | Slider | Input in a row (shadow-composer style)
   * - "stacked": Label on top, slider below (theme-generator style)
   */
  layout?: "inline" | "stacked"
  className?: string
  /**
   * Use brand colors for slider
   */
  brandColors?: boolean
}

function SliderRow({
  label,
  value,
  onChange,
  min,
  max,
  step = 1,
  unit,
  layout = "inline",
  className,
  brandColors = false,
}: SliderRowProps) {
  const [localValue, setLocalValue] = useState(value)

  useEffect(() => {
    setLocalValue(value)
  }, [value])

  const handleSliderChange = useCallback(
    (values: number[]) => {
      const newValue = values[0]
      setLocalValue(newValue)
      onChange(newValue)
    },
    [onChange]
  )

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = parseFloat(e.target.value) || 0
      const clampedValue = Math.min(max, Math.max(min, newValue))
      setLocalValue(clampedValue)
      onChange(clampedValue)
    },
    [onChange, min, max]
  )

  const sliderClassName = brandColors
    ? "w-24 [&_[data-slot=slider-range]]:bg-brand [&_[data-slot=slider-thumb]]:border-brand"
    : "w-24"

  if (layout === "stacked") {
    return (
      <div className={cn("mb-3", className)}>
        <div className="mb-2 flex items-center justify-between">
          <Label className="text-sm font-medium">{label}</Label>
          <div className="flex items-center gap-1">
            <Input
              type="number"
              value={localValue}
              onChange={handleInputChange}
              min={min}
              max={max}
              step={step}
              className="h-8 w-20 px-2 text-right font-mono text-xs"
            />
            {unit && (
              <span className="text-muted-foreground text-xs">{unit}</span>
            )}
          </div>
        </div>
        <Slider
          value={[localValue]}
          onValueChange={handleSliderChange}
          min={min}
          max={max}
          step={step}
          className={cn("w-full", brandColors && "[&_[data-slot=slider-range]]:bg-brand [&_[data-slot=slider-thumb]]:border-brand")}
        />
      </div>
    )
  }

  // Default: inline layout
  return (
    <div className={cn("grid grid-cols-[1fr_auto_1fr] items-center gap-3", className)}>
      <Label className="text-sm font-medium">{label}</Label>
      <Slider
        value={[localValue]}
        onValueChange={handleSliderChange}
        min={min}
        max={max}
        step={step}
        className={sliderClassName}
      />
      <Input
        type="number"
        value={localValue}
        onChange={handleInputChange}
        min={min}
        max={max}
        step={step}
        className="h-8 w-full font-mono text-xs"
      />
    </div>
  )
}

export { SliderRow }
export type { SliderRowProps }
