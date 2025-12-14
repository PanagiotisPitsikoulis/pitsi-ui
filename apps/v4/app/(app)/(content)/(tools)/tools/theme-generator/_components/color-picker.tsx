"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import Color from "color"

import { colorFormatter, convertToHex } from "@/lib/colors"
import { cn } from "@/lib/utils"
import {
  ColorPicker as KiboColorPicker,
  ColorPickerEyeDropper,
  ColorPickerFormat,
  ColorPickerHue,
  ColorPickerOutput,
  ColorPickerSelection,
} from "@/components/kibo-ui/color-picker"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/new-york-v4/ui/input-group"
import { Label } from "@/registry/new-york-v4/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/new-york-v4/ui/popover"

import { TailwindColorPopover } from "./tailwind-color-popover"

interface ColorPickerProps {
  color: string
  onChange: (color: string) => void
  label: string
  name?: string
  highlighted?: boolean
  infoButton?: React.ReactNode
}

// Simple debounce function
function debounce<T extends (...args: Parameters<T>) => void>(
  fn: T,
  delay: number
): T & { cancel: () => void } {
  let timeoutId: ReturnType<typeof setTimeout> | null = null

  const debouncedFn = ((...args: Parameters<T>) => {
    if (timeoutId) clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn(...args), delay)
  }) as T & { cancel: () => void }

  debouncedFn.cancel = () => {
    if (timeoutId) clearTimeout(timeoutId)
  }

  return debouncedFn
}

const DEBOUNCE_DELAY = 150

export function ColorPicker({ color, onChange, label, name, highlighted, infoButton }: ColorPickerProps) {
  const [localValue, setLocalValue] = useState(color)
  const [isPickerOpen, setIsPickerOpen] = useState(false)
  const textInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setLocalValue(color)
    if (textInputRef.current) {
      textInputRef.current.value = color
    }
  }, [color])

  const safeHexColor = useMemo(() => {
    try {
      return convertToHex(localValue)
    } catch {
      return "#000000"
    }
  }, [localValue])

  const debouncedOnChange = useMemo(
    () =>
      debounce((value: string) => {
        onChange(value)
      }, DEBOUNCE_DELAY),
    [onChange]
  )

  const handleKiboColorChange = useCallback(
    (value: Parameters<typeof Color.rgb>[0]) => {
      const rgba = value as number[]
      const hex = Color.rgb(rgba[0], rgba[1], rgba[2]).hex()
      const oklchColor = colorFormatter(hex, "oklch")
      setLocalValue(oklchColor)
      debouncedOnChange(oklchColor)
    },
    [debouncedOnChange]
  )

  const handleTextInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const colorString = e.target.value
      setLocalValue(colorString)
      debouncedOnChange(colorString)
    },
    [debouncedOnChange]
  )

  const handleColorSelect = useCallback(
    (newColor: string) => {
      setLocalValue(newColor)
      onChange(newColor)
      if (textInputRef.current) {
        textInputRef.current.value = newColor
      }
    },
    [onChange]
  )

  useEffect(() => {
    return () => debouncedOnChange.cancel()
  }, [debouncedOnChange])

  const inputId = `color-${name || label.replace(/\s+/g, "-").toLowerCase()}`

  return (
    <div
      id={`color-${name}`}
      className={cn(
        "mb-3 rounded-lg p-2 -mx-2 transition-all duration-300",
        highlighted && "bg-brand/10 ring-brand ring-2"
      )}
    >
      <div className="mb-1.5 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Label htmlFor={inputId} className="text-xs font-medium">
            {label}
          </Label>
          {infoButton}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Popover open={isPickerOpen} onOpenChange={setIsPickerOpen}>
          <PopoverTrigger asChild>
            <button
              type="button"
              id={inputId}
              className="relative flex size-8 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-input"
              style={{ backgroundColor: localValue }}
            />
          </PopoverTrigger>
          <PopoverContent className="w-64 p-3" align="start">
            {isPickerOpen && (
              <KiboColorPicker defaultValue={safeHexColor} onChange={handleKiboColorChange}>
                <ColorPickerSelection className="mb-3 h-32 rounded-md" />
                <ColorPickerHue className="mb-3" />
                <div className="flex items-center gap-2">
                  <ColorPickerOutput />
                  <ColorPickerFormat className="flex-1" />
                  <ColorPickerEyeDropper />
                </div>
              </KiboColorPicker>
            )}
          </PopoverContent>
        </Popover>
        <InputGroup className="h-8 flex-1">
          <InputGroupInput
            ref={textInputRef}
            type="text"
            defaultValue={color}
            onChange={handleTextInputChange}
            className="font-mono text-xs"
            placeholder="oklch, hsl, hex..."
          />
          <InputGroupAddon align="inline-end">
            <TailwindColorPopover
              currentColor={localValue}
              onChange={handleColorSelect}
            />
          </InputGroupAddon>
        </InputGroup>
      </div>
    </div>
  )
}
