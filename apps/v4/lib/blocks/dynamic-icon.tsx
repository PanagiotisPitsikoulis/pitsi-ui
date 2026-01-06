"use client"

import { HugeiconsIcon } from "@hugeicons/react"

import {
  iconMapping,
  type IconName as MappedIconName,
} from "@/lib/icons/icon-mapping"

/**
 * Renders an icon by name
 * @param name - The name of the icon (e.g., "Sparkles", "Heart", "Package")
 * @param props - Props to pass to the icon component
 */
export function DynamicIcon({
  name,
  className,
  size,
  strokeWidth = 1.5,
}: {
  name: string
  className?: string
  size?: number
  strokeWidth?: number
}) {
  const hugeicon = iconMapping[name as MappedIconName]

  if (!hugeicon) {
    console.warn(`Icon "${name}" not found in iconMapping`)
    return null
  }

  // Parse size from Tailwind className if not provided
  let computedSize: number | undefined = size
  if (computedSize === undefined && className) {
    const match = className.match(/\b(?:size|[wh])-(\d+(?:\.\d+)?)\b/)
    if (match) {
      computedSize = parseFloat(match[1]) * 4
    }
  }

  return (
    <HugeiconsIcon
      icon={hugeicon}
      size={computedSize ?? 24}
      strokeWidth={strokeWidth}
      className={className}
    />
  )
}

/**
 * Get an icon data by name
 * Returns undefined if the icon is not found
 */
export function getIcon(name: string) {
  return iconMapping[name as MappedIconName]
}
