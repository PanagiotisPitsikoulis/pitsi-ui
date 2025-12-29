"use client"

import * as LucideIcons from "lucide-react"
import type { LucideIcon } from "lucide-react"

type IconName = keyof typeof LucideIcons

/**
 * Renders a Lucide icon by name
 * @param name - The name of the Lucide icon (e.g., "Sparkles", "Heart", "Package")
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
  const Icon = LucideIcons[name as IconName] as LucideIcon | undefined

  if (!Icon) {
    console.warn(`Icon "${name}" not found in lucide-react`)
    return null
  }

  return <Icon {...props} />
}

/**
 * Get a Lucide icon component by name
 * Returns undefined if the icon is not found
 */
export function getIcon(name: string): LucideIcon | undefined {
  return LucideIcons[name as IconName] as LucideIcon | undefined
}
