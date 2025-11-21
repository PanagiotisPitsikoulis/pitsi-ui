import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Merges class names using clsx and tailwind-merge.
 *
 * This utility combines multiple class values and intelligently merges Tailwind CSS classes,
 * resolving conflicts by keeping the last conflicting class (e.g., if both 'px-2' and 'px-4'
 * are provided, only 'px-4' will be kept).
 *
 * @param inputs - Any number of class values (strings, objects, arrays, etc.) supported by clsx.
 *
 * @returns A single merged class name string with Tailwind conflicts resolved.
 *
 * @example
 * ```tsx
 * cn('px-2 py-1', 'px-4') // Returns: 'py-1 px-4'
 * cn('text-red-500', someCondition && 'text-blue-500') // Conditionally applies classes
 * ```
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
