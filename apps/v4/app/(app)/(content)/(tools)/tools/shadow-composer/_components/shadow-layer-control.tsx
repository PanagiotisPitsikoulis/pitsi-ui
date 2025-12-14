"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import Color from "color"
import { Trash2 } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  ColorPicker,
  ColorPickerAlpha,
  ColorPickerEyeDropper,
  ColorPickerFormat,
  ColorPickerHue,
  ColorPickerOutput,
  ColorPickerSelection,
} from "@/components/kibo-ui/color-picker"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Input } from "@/registry/new-york-v4/ui/input"
import { Label } from "@/registry/new-york-v4/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/new-york-v4/ui/popover"
import { RadioGroup, RadioGroupItem } from "@/registry/new-york-v4/ui/radio-group"
import { Separator } from "@/registry/new-york-v4/ui/separator"
import { Slider } from "@/registry/new-york-v4/ui/slider"

import { ShadowLayer } from "./shadow-types"

interface ShadowLayerControlProps {
  layer: ShadowLayer
  index: number
  onChange: (layer: ShadowLayer) => void
  onDelete: () => void
  canDelete: boolean
}

interface SliderRowProps {
  label: string
  value: number
  onChange: (value: number) => void
  min: number
  max: number
  step?: number
}

function SliderRow({ label, value, onChange, min, max, step = 1 }: SliderRowProps) {
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
    <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
      <Label className="text-sm font-medium">{label}</Label>
      <Slider
        value={[localValue]}
        onValueChange={handleSliderChange}
        min={min}
        max={max}
        step={step}
        className="w-24 [&_[data-slot=slider-range]]:bg-brand [&_[data-slot=slider-thumb]]:border-brand"
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

interface ColorPickerRowProps {
  label: string
  color: string
  onChange: (color: string) => void
}

function ColorPickerRow({ label, color, onChange }: ColorPickerRowProps) {
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
    <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
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

export function ShadowLayerControl({
  layer,
  index,
  onChange,
  onDelete,
  canDelete,
}: ShadowLayerControlProps) {
  const updateLayer = useCallback(
    <K extends keyof ShadowLayer>(key: K, value: ShadowLayer[K]) => {
      onChange({ ...layer, [key]: value })
    },
    [layer, onChange]
  )

  return (
    <div className="space-y-4">
      {/* Header with type toggle and delete */}
      <div className="flex items-center justify-between">
        <span className="text-muted-foreground text-sm font-medium">
          Shadow
        </span>
        <div className="flex items-center gap-4">
          <RadioGroup
            value={layer.type}
            onValueChange={(value) => updateLayer("type", value as "outer" | "inset")}
            className="flex gap-4"
          >
            <div className="flex items-center gap-2">
              <RadioGroupItem value="outer" id={`type-outer-${layer.id}`} className="text-brand [&_[data-slot=radio-group-indicator]_svg]:fill-brand" />
              <Label htmlFor={`type-outer-${layer.id}`} className="text-sm">
                Outer
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="inset" id={`type-inset-${layer.id}`} className="text-brand [&_[data-slot=radio-group-indicator]_svg]:fill-brand" />
              <Label htmlFor={`type-inset-${layer.id}`} className="text-sm">
                Inset
              </Label>
            </div>
          </RadioGroup>
          {canDelete && (
            <Button
              variant="ghost"
              size="icon"
              className="size-7 shadow-none"
              onClick={onDelete}
            >
              <Trash2 className="size-3.5" />
            </Button>
          )}
        </div>
      </div>

      <Separator />

      {/* Controls */}
      <div className="space-y-4">
        {/* Color */}
        <ColorPickerRow
          label="Color"
          color={layer.color}
          onChange={(color) => updateLayer("color", color)}
        />

        {/* Horizontal */}
        <SliderRow
          label="Horizontal"
          value={layer.horizontal}
          onChange={(value) => updateLayer("horizontal", value)}
          min={-50}
          max={50}
        />

        {/* Vertical */}
        <SliderRow
          label="Vertical"
          value={layer.vertical}
          onChange={(value) => updateLayer("vertical", value)}
          min={-50}
          max={50}
        />

        {/* Blur */}
        <SliderRow
          label="Blur"
          value={layer.blur}
          onChange={(value) => updateLayer("blur", value)}
          min={0}
          max={100}
        />

        {/* Spread */}
        <SliderRow
          label="Spread"
          value={layer.spread}
          onChange={(value) => updateLayer("spread", value)}
          min={-50}
          max={50}
        />

        {/* Opacity */}
        <SliderRow
          label="Opacity"
          value={layer.opacity}
          onChange={(value) => updateLayer("opacity", value)}
          min={0}
          max={1}
          step={0.01}
        />
      </div>
    </div>
  )
}
