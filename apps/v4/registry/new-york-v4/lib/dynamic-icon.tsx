import { memo, type FC } from "react"
import dynamic from "next/dynamic"
import dynamicIconImports from "lucide-react/dynamicIconImports"

/**
 * Valid icon names from lucide-react's dynamic icon imports.
 */
type IconName = keyof typeof dynamicIconImports

/**
 * Array of all available icon names from lucide-react.
 */
const icons = Object.keys(dynamicIconImports) as IconName[]

/**
 * Basic React component type for icon components.
 */
type ReactComponent = FC<{ className?: string }>

/**
 * Cache of dynamically loaded icon components.
 */
const icons_components = {} as Record<IconName, ReactComponent>

/**
 * Pre-load all lucide-react icons as dynamically imported components.
 * This allows for tree-shaking while maintaining SSR support.
 */
for (const name of icons) {
  const NewIcon = dynamic(dynamicIconImports[name], {
    ssr: true,
  }) as ReactComponent
  icons_components[name] = NewIcon
}

/**
 * Props for the DynamicIcon component.
 */
type DynamicIconProps = {
  /** Icon name in PascalCase or kebab-case (e.g., "ArrowRight" or "arrow-right") */
  name: string
  /** Optional className to apply to the icon */
  className?: string
}

/**
 * Dynamically renders a Lucide icon by name.
 *
 * This component accepts icon names in various formats (PascalCase, kebab-case, or with numbers)
 * and automatically transforms them to the correct format for lucide-react. The icons are
 * dynamically imported for better performance and tree-shaking.
 *
 * @param props - Component props including icon name and optional className.
 *
 * @returns The requested icon component, or null if the icon is not found.
 *
 * @example
 * ```tsx
 * <DynamicIcon name="ArrowRight" className="w-4 h-4" />
 * <DynamicIcon name="arrow-right" />
 * <DynamicIcon name="Settings2" />
 * ```
 */
const DynamicIcon = memo(({ name, ...props }: DynamicIconProps) => {
  const transformedName = name
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/([a-zA-Z])(\d)/g, "$1-$2")
    .toLowerCase() as IconName

  const Icon = icons_components[transformedName]
  if (!Icon)
    console.warn("Icon not found:", name, "-> transformed:", transformedName)
  if (!Icon) return null
  return <Icon {...props} />
})
DynamicIcon.displayName = "DynamicIcon"

export default DynamicIcon
