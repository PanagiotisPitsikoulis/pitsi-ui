"use client"

import { useCallback, useState } from "react"

interface PresetBase {
  label: string
}

interface UsePresetsOptions<T> {
  /**
   * Callback when preset value changes
   */
  onValueChange?: (value: T) => void
}

/**
 * Hook for managing preset selection with custom/modified state tracking
 */
function usePresets<T extends PresetBase>(
  presets: Record<string, T>,
  defaultPresetKey: string,
  options: UsePresetsOptions<T> = {}
) {
  const { onValueChange } = options

  const [currentPresetKey, setCurrentPresetKey] = useState(defaultPresetKey)
  const [isCustom, setIsCustom] = useState(false)

  const currentPreset = presets[currentPresetKey] || presets[defaultPresetKey]

  const applyPreset = useCallback(
    (presetKey: string) => {
      const preset = presets[presetKey]
      if (preset) {
        setCurrentPresetKey(presetKey)
        setIsCustom(false)
        onValueChange?.(preset)
      }
    },
    [presets, onValueChange]
  )

  const randomize = useCallback(() => {
    const presetKeys = Object.keys(presets)
    const randomIndex = Math.floor(Math.random() * presetKeys.length)
    applyPreset(presetKeys[randomIndex])
  }, [presets, applyPreset])

  const markAsCustom = useCallback(() => {
    setIsCustom(true)
    setCurrentPresetKey("custom")
  }, [])

  const reset = useCallback(() => {
    applyPreset(defaultPresetKey)
  }, [defaultPresetKey, applyPreset])

  return {
    currentPresetKey: isCustom ? "custom" : currentPresetKey,
    currentPreset,
    applyPreset,
    randomize,
    markAsCustom,
    reset,
    isCustom,
    presetKeys: Object.keys(presets),
  }
}

export { usePresets }
export type { UsePresetsOptions, PresetBase }
