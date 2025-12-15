"use client"

import { useCallback, useEffect, useState } from "react"

import { Input } from "@/registry/new-york-v4/ui/input"
import { Label } from "@/registry/new-york-v4/ui/label"
import { Slider } from "@/registry/new-york-v4/ui/slider"

interface SliderWithInputProps {
  value: number
  onChange: (value: number) => void
  min: number
  max: number
  step: number
  unit?: string
  label: string
}

export function SliderWithInput({
  value,
  onChange,
  min,
  max,
  step,
  unit = "",
  label,
}: SliderWithInputProps) {
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

  return (
    <div className="mb-3">
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
        className="w-full"
      />
    </div>
  )
}
