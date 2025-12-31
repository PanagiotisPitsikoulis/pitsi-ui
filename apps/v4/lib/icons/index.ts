/**
 * Hugeicons Icon Library with Lucide-compatible API
 *
 * This module provides a compatibility layer that allows using Hugeicons
 * with the same API as lucide-react. Simply change your import from
 * "lucide-react" to "@/lib/icons" and existing code should work.
 *
 * @example
 * // Before (lucide-react)
 * import { ArrowRight, Search } from "lucide-react"
 *
 * // After (hugeicons with compat layer)
 * import { ArrowRight, Search } from "@/lib/icons"
 *
 * // Usage remains the same
 * <ArrowRight className="size-4" />
 * <Search size={24} strokeWidth={2} />
 */

export * from "./icon"
export {
  iconMapping,
  getIcon,
  isValidIconName,
  type MappedIcon,
} from "./icon-mapping"
