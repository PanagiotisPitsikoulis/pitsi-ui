"use client"

import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"

import { iconMapping, type IconName } from "./icon-mapping"

/**
 * Props for icon components, compatible with Lucide React API
 */
export interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: number | string
  strokeWidth?: number
  absoluteStrokeWidth?: boolean
}

/**
 * Type alias for Lucide icon component compatibility
 * Use this type when you need to type icon props or refs
 */
export type LucideIcon = React.ForwardRefExoticComponent<
  IconProps & React.RefAttributes<SVGSVGElement>
>

/**
 * Parse Tailwind size-* classes to pixel values
 * Tailwind size-* uses 4px increments (size-4 = 16px, size-6 = 24px)
 */
function parseSizeFromClassName(className: string | undefined): number | undefined {
  if (!className) return undefined

  // Match size-N or size-N.N patterns (e.g., size-4, size-3.5)
  const match = className.match(/\bsize-(\d+(?:\.\d+)?)\b/)
  if (match) {
    return parseFloat(match[1]) * 4
  }

  // Also support w-N and h-N if they match (for square icons)
  const widthMatch = className.match(/\bw-(\d+(?:\.\d+)?)\b/)
  const heightMatch = className.match(/\bh-(\d+(?:\.\d+)?)\b/)
  if (widthMatch && heightMatch && widthMatch[1] === heightMatch[1]) {
    return parseFloat(widthMatch[1]) * 4
  }

  return undefined
}

/**
 * Factory function to create Lucide-compatible icon components
 * from Hugeicons SVG data
 */
function createIcon(name: IconName): LucideIcon {
  const hugeicon = iconMapping[name]

  const Icon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, strokeWidth = 1.5, ...props }, ref) => {
      // Parse size from className if using Tailwind size-* classes
      let computedSize: number | string | undefined = size
      if (computedSize === undefined) {
        computedSize = parseSizeFromClassName(className)
      }

      return (
        <HugeiconsIcon
          ref={ref}
          icon={hugeicon}
          size={computedSize ?? 24}
          strokeWidth={strokeWidth}
          className={className}
          {...props}
        />
      )
    }
  )
  Icon.displayName = name
  return Icon
}

// =============================================================================
// EXPORTED ICONS
// All icons from iconMapping are exported with their Lucide-compatible names
// =============================================================================

// Alert / Warning icons
export const AlertCircle = createIcon("AlertCircle")
export const AlertCircleIcon = createIcon("AlertCircleIcon")
export const TriangleAlert = createIcon("TriangleAlert")

// Arrow icons
export const ArrowDown = createIcon("ArrowDown")
export const ArrowLeft = createIcon("ArrowLeft")
export const ArrowRight = createIcon("ArrowRight")
export const ArrowUp = createIcon("ArrowUp")
export const ArrowUpCircle = createIcon("ArrowUpCircle")
export const ArrowUpDown = createIcon("ArrowUpDown")
export const ArrowUpRight = createIcon("ArrowUpRight")

// Badge icons
export const BadgeCheckIcon = createIcon("BadgeCheckIcon")
export const BadgeDollarSign = createIcon("BadgeDollarSign")

// Bell / Notification icons
export const Bell = createIcon("Bell")

// Block icons
export const Blocks = createIcon("Blocks")

// Text formatting icons
export const Bold = createIcon("Bold")
export const Italic = createIcon("Italic")
export const Underline = createIcon("Underline")

// Bookmark icons
export const Bookmark = createIcon("Bookmark")
export const BookmarkIcon = createIcon("BookmarkIcon")

// Book icons
export const BookOpen = createIcon("BookOpen")

// Bot / AI icons
export const Bot = createIcon("Bot")
export const BotIcon = createIcon("BotIcon")

// Calendar icons
export const Calendar = createIcon("Calendar")

// Camera icons
export const Camera = createIcon("Camera")

// Chart icons
export const ChartPie = createIcon("ChartPie")
export const PieChart = createIcon("PieChart")
export const TrendingUp = createIcon("TrendingUp")

// Check icons
export const Check = createIcon("Check")
export const CheckCircle = createIcon("CheckCircle")
export const CheckCircle2Icon = createIcon("CheckCircle2Icon")
export const CircleCheckIcon = createIcon("CircleCheckIcon")

// Chevron icons
export const ChevronDown = createIcon("ChevronDown")
export const ChevronDownIcon = createIcon("ChevronDownIcon")
export const ChevronUp = createIcon("ChevronUp")
export const ChevronUpIcon = createIcon("ChevronUpIcon")
export const ChevronLeft = createIcon("ChevronLeft")
export const ChevronLeftIcon = createIcon("ChevronLeftIcon")
export const ChevronRight = createIcon("ChevronRight")
export const ChevronRightIcon = createIcon("ChevronRightIcon")
export const ChevronsUpDown = createIcon("ChevronsUpDown")

// Circle icons
export const CircleIcon = createIcon("CircleIcon")
export const CircleDashed = createIcon("CircleDashed")
export const CircleHelpIcon = createIcon("CircleHelpIcon")

// Clock / Time icons
export const Clock = createIcon("Clock")
export const Timer = createIcon("Timer")

// Code icons
export const Code2 = createIcon("Code2")

// Copy icons
export const Copy = createIcon("Copy")

// Corner / Turn icons
export const CornerDownLeft = createIcon("CornerDownLeft")

// CPU / Computer icons
export const Cpu = createIcon("Cpu")

// Credit Card icons
export const CreditCard = createIcon("CreditCard")

// Database icons
export const Database = createIcon("Database")

// Download / Upload icons
export const Download = createIcon("Download")
export const Upload = createIcon("Upload")

// Dumbbell / Gym icons
export const Dumbbell = createIcon("Dumbbell")
export const Weight = createIcon("Weight")

// External / Link icons
export const ExternalLink = createIcon("ExternalLink")
export const ExternalLinkIcon = createIcon("ExternalLinkIcon")

// Eye / View icons
export const Eye = createIcon("Eye")

// File icons
export const File = createIcon("File")
export const FileCode = createIcon("FileCode")
export const FileText = createIcon("FileText")

// Flame / Fire icons
export const Flame = createIcon("Flame")

// Folder icons
export const Folder = createIcon("Folder")
export const FolderOpen = createIcon("FolderOpen")

// Frame icons
export const Frame = createIcon("Frame")

// Globe icons
export const Globe = createIcon("Globe")

// Grip / Drag icons
export const GripVertical = createIcon("GripVertical")
export const GripVerticalIcon = createIcon("GripVerticalIcon")

// Heart icons
export const Heart = createIcon("Heart")

// Help icons
export const HelpCircle = createIcon("HelpCircle")

// Home icons
export const Home = createIcon("Home")

// Inbox icons
export const Inbox = createIcon("Inbox")

// Info icons
export const Info = createIcon("Info")
export const InfoIcon = createIcon("InfoIcon")

// Inspect icons
export const Inspect = createIcon("Inspect")

// Key icons
export const Key = createIcon("Key")

// Layers icons
export const Layers = createIcon("Layers")
export const Layers2 = createIcon("Layers2")

// Layout icons
export const Layout = createIcon("Layout")
export const LayoutDashboard = createIcon("LayoutDashboard")
export const LayoutGrid = createIcon("LayoutGrid")

// Leaf / Plant icons
export const Leaf = createIcon("Leaf")

// Lifebuoy icons
export const LifeBuoyIcon = createIcon("LifeBuoyIcon")

// Link icons
export const Link2Icon = createIcon("Link2Icon")

// List icons
export const List = createIcon("List")

// Loader icons
export const Loader2 = createIcon("Loader2")
export const Loader2Icon = createIcon("Loader2Icon")
export const LoaderIcon = createIcon("LoaderIcon")

// Lock icons
export const Lock = createIcon("Lock")

// Login / Logout icons
export const LogIn = createIcon("LogIn")
export const LogOut = createIcon("LogOut")

// Mail icons
export const Mail = createIcon("Mail")

// Map icons
export const Map = createIcon("Map")

// Maximize icons
export const Maximize = createIcon("Maximize")

// Message icons
export const MessageSquare = createIcon("MessageSquare")

// Minus / Plus icons
export const Minus = createIcon("Minus")
export const Plus = createIcon("Plus")

// Monitor icons
export const Monitor = createIcon("Monitor")

// Moon / Sun icons
export const Moon = createIcon("Moon")
export const Sun = createIcon("Sun")

// More icons
export const MoreHorizontal = createIcon("MoreHorizontal")
export const MoreVertical = createIcon("MoreVertical")

// Octagon icons
export const OctagonX = createIcon("OctagonX")

// Palette / Color icons
export const Palette = createIcon("Palette")
export const PipetteIcon = createIcon("PipetteIcon")

// Panel icons
export const PanelLeftIcon = createIcon("PanelLeftIcon")

// Pencil / Edit icons
export const Pencil = createIcon("Pencil")
export const SquarePen = createIcon("SquarePen")

// Play icons
export const Play = createIcon("Play")

// Popcorn icons
export const PopcornIcon = createIcon("PopcornIcon")

// Radio icons
export const Radio = createIcon("Radio")

// Refresh / Rotate icons
export const RefreshCcwIcon = createIcon("RefreshCcwIcon")
export const RotateCcw = createIcon("RotateCcw")

// Save icons
export const Save = createIcon("Save")

// Search icons
export const Search = createIcon("Search")
export const SearchIcon = createIcon("SearchIcon")

// Send icons
export const SendIcon = createIcon("SendIcon")

// Server icons
export const Server = createIcon("Server")

// Settings icons
export const Settings = createIcon("Settings")
export const Settings2 = createIcon("Settings2")

// Share icons
export const Share2 = createIcon("Share2")

// Shield icons
export const ShieldAlertIcon = createIcon("ShieldAlertIcon")

// Shuffle icons
export const Shuffle = createIcon("Shuffle")

// Slash icons
export const SlashIcon = createIcon("SlashIcon")

// Slider icons
export const SlidersHorizontal = createIcon("SlidersHorizontal")

// Smartphone icons
export const Smartphone = createIcon("Smartphone")

// Sparkle icons
export const Sparkles = createIcon("Sparkles")

// Star icons
export const Star = createIcon("Star")

// Target icons
export const Target = createIcon("Target")

// Terminal icons
export const Terminal = createIcon("Terminal")

// Trash / Delete icons
export const Trash2 = createIcon("Trash2")

// Trophy / Award icons
export const Trophy = createIcon("Trophy")

// User icons
export const User = createIcon("User")
export const Users = createIcon("Users")

// Wand / Magic icons
export const Wand2 = createIcon("Wand2")

// X / Cancel / Close icons
export const X = createIcon("X")
export const XCircle = createIcon("XCircle")
export const XIcon = createIcon("XIcon")

// Zap / Lightning icons
export const Zap = createIcon("Zap")

// =============================================================================
// UTILITY EXPORTS
// =============================================================================

/**
 * Get an icon component by name dynamically
 * Useful for cases where you need to render icons based on a string name
 */
export function getIconComponent(name: IconName): LucideIcon {
  return createIcon(name)
}

/**
 * Re-export IconName type for external use
 */
export type { IconName }
