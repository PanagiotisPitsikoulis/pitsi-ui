"use client"

import * as Icons from "@/lib/icons"
import type { IconProps, LucideIcon } from "@/lib/icons"

type IconName = keyof typeof Icons

/**
 * Renders an icon by name
 * @param name - The name of the icon (e.g., "Sparkles", "Heart", "Package")
 * @param props - Props to pass to the icon component
 */
export function DynamicIcon({
  name,
  ...props
}: {
  name: string
  className?: string
  size?: number
  strokeWidth?: number
}) {
  const Icon = Icons[name as IconName] as LucideIcon | undefined

  if (!Icon || typeof Icon !== "function") {
    console.warn(`Icon "${name}" not found`)
    return null
  }

  return <Icon {...props} />
}

/**
 * Get an icon component by name
 * Returns undefined if the icon is not found
 */
export function getIcon(name: string): LucideIcon | undefined {
  const icon = Icons[name as IconName]
  if (icon && typeof icon === "function") {
    return icon as LucideIcon
  }
  return undefined
}
