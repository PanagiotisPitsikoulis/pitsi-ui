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
function parseSizeFromClassName(
  className: string | undefined
): number | undefined {
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

// Accessibility icons
export const Accessibility = createIcon("Accessibility")

// Alert / Warning icons
export const AlertCircle = createIcon("AlertCircle")
export const AlertCircleIcon = createIcon("AlertCircleIcon")
export const AlertTriangleIcon = createIcon("AlertTriangleIcon")
export const TriangleAlert = createIcon("TriangleAlert")
export const TriangleAlertIcon = createIcon("TriangleAlertIcon")

// Archive icons
export const Archive = createIcon("Archive")

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

// Bar Chart icons
export const BarChart3 = createIcon("BarChart3")

// Bell / Notification icons
export const Bell = createIcon("Bell")

// Block icons
export const Blocks = createIcon("Blocks")

// Box icons
export const Box = createIcon("Box")

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
// Bath / Bathroom icons
export const Bath = createIcon("Bath")

// Bed icons
export const Bed = createIcon("Bed")

export const Bot = createIcon("Bot")
export const BotIcon = createIcon("BotIcon")

// Brain icons
export const Brain = createIcon("Brain")

// Calculator icons
export const Calculator = createIcon("Calculator")

// Calendar icons
export const Calendar = createIcon("Calendar")
export const CalendarIcon = createIcon("CalendarIcon")
export const CalendarDays = createIcon("CalendarDays")

// Camera icons
export const Camera = createIcon("Camera")

// Chart icons
export const ChartPie = createIcon("ChartPie")
export const PieChart = createIcon("PieChart")
export const TrendingUp = createIcon("TrendingUp")

// Check icons
export const Check = createIcon("Check")
export const CheckIcon = createIcon("CheckIcon")
export const CheckCircle = createIcon("CheckCircle")
export const CheckCircle2 = createIcon("CheckCircle2")
export const CheckCircle2Icon = createIcon("CheckCircle2Icon")
export const CircleCheckIcon = createIcon("CircleCheckIcon")

// Clipboard icons
export const Clipboard = createIcon("Clipboard")

// Compass icons
export const Compass = createIcon("Compass")

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
export const CopyIcon = createIcon("CopyIcon")

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

// Form / Input icons
export const FormInput = createIcon("FormInput")

// Frame icons
export const Frame = createIcon("Frame")
export const FrameIcon = createIcon("FrameIcon")

// Globe icons
export const Globe = createIcon("Globe")

// Grid icons
export const Grid2X2 = createIcon("Grid2X2")
export const Grid3X3 = createIcon("Grid3X3")

// Grip / Drag icons
export const GripVertical = createIcon("GripVertical")
export const GripVerticalIcon = createIcon("GripVerticalIcon")

// Handshake icons
export const HeartHandshake = createIcon("HeartHandshake")

// Heart icons
export const Heart = createIcon("Heart")

// History icons
export const History = createIcon("History")

// Help icons
export const HelpCircle = createIcon("HelpCircle")

// Home icons
export const Home = createIcon("Home")

// Image icons
export const ImageIcon = createIcon("ImageIcon")

// Inbox icons
export const Inbox = createIcon("Inbox")

// Info icons
export const Info = createIcon("Info")
export const InfoIcon = createIcon("InfoIcon")

// Inspect icons
export const Inspect = createIcon("Inspect")

// Key icons
export const Key = createIcon("Key")
export const KeyRound = createIcon("KeyRound")

// Layers icons
export const Layers = createIcon("Layers")
export const Layers2 = createIcon("Layers2")
export const Layers3 = createIcon("Layers3")

// Layout icons
export const Layout = createIcon("Layout")
export const LayoutDashboard = createIcon("LayoutDashboard")
export const LayoutGrid = createIcon("LayoutGrid")
export const LayoutTemplate = createIcon("LayoutTemplate")

// Leaf / Plant icons
export const Leaf = createIcon("Leaf")

// Library icons
export const Library = createIcon("Library")

// Lifebuoy icons
export const LifeBuoyIcon = createIcon("LifeBuoyIcon")

// Link icons
export const Link2Icon = createIcon("Link2Icon")

// List icons
export const List = createIcon("List")
export const ListPlus = createIcon("ListPlus")

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
export const MailCheck = createIcon("MailCheck")

// Map icons
export const Map = createIcon("Map")
export const MapIcon = createIcon("MapIcon")

// Maximize icons
export const Maximize = createIcon("Maximize")

// Megaphone icons
export const Megaphone = createIcon("Megaphone")

// Message icons
export const MessageSquare = createIcon("MessageSquare")
export const MessageCircle = createIcon("MessageCircle")

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
export const MoreHorizontalIcon = createIcon("MoreHorizontalIcon")
export const MoreVertical = createIcon("MoreVertical")

// Location icons
export const Locate = createIcon("Locate")
export const MapPin = createIcon("MapPin")

// Navigation icons
export const Navigation = createIcon("Navigation")

// Octagon icons
export const OctagonX = createIcon("OctagonX")
export const OctagonXIcon = createIcon("OctagonXIcon")

// Package icons
export const Package = createIcon("Package")

// Palette / Color icons
export const Palette = createIcon("Palette")
export const PipetteIcon = createIcon("PipetteIcon")

// Panel icons
export const PanelLeftIcon = createIcon("PanelLeftIcon")
export const PanelLeftCloseIcon = createIcon("PanelLeftCloseIcon")
export const PanelLeftOpenIcon = createIcon("PanelLeftOpenIcon")
export const PanelTop = createIcon("PanelTop")

// Pause icons
export const Pause = createIcon("Pause")

// Phone icons
export const Phone = createIcon("Phone")

// Pencil / Edit icons
export const Pencil = createIcon("Pencil")
export const SquarePen = createIcon("SquarePen")

// Square icons
export const Square = createIcon("Square")

// Pie Chart icon with variant
export const PieChartIcon = createIcon("PieChartIcon")

// Play icons
export const Play = createIcon("Play")

// Popcorn icons
export const PopcornIcon = createIcon("PopcornIcon")

// Radio icons
export const Radio = createIcon("Radio")

// Recycle icons
export const Recycle = createIcon("Recycle")

// Redo / Undo icons
export const Redo2 = createIcon("Redo2")

// Refresh / Rotate icons
export const RefreshCcwIcon = createIcon("RefreshCcwIcon")
export const RotateCcw = createIcon("RotateCcw")
export const RotateCw = createIcon("RotateCw")

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
export const ShareIcon = createIcon("ShareIcon")

// Shield icons
export const ShieldAlertIcon = createIcon("ShieldAlertIcon")
export const Shield = createIcon("Shield")

// Shopping icons
export const ShoppingCart = createIcon("ShoppingCart")

// Shuffle icons
export const Shuffle = createIcon("Shuffle")

// Slash icons
export const SlashIcon = createIcon("SlashIcon")

// Slider icons
export const SlidersHorizontal = createIcon("SlidersHorizontal")

// Smartphone icons
export const Smartphone = createIcon("Smartphone")

// Smile / Emoji icons
export const Smile = createIcon("Smile")

// Sparkle icons
export const Sparkles = createIcon("Sparkles")

// Star icons
export const Star = createIcon("Star")

// Tag icons
export const Tag = createIcon("Tag")

// Target icons
export const Target = createIcon("Target")

// Terminal icons
export const Terminal = createIcon("Terminal")

// Type / Text icons
export const Type = createIcon("Type")

// Trash / Delete icons
export const Trash2 = createIcon("Trash2")
export const TrashIcon = createIcon("TrashIcon")

// Trophy / Award icons
export const Trophy = createIcon("Trophy")

// Truck / Delivery icons
export const Truck = createIcon("Truck")

// User icons
export const User = createIcon("User")
export const Users = createIcon("Users")
export const UserRoundXIcon = createIcon("UserRoundXIcon")

// Wand / Magic icons
export const Wand2 = createIcon("Wand2")

// Wave icons
export const Waves = createIcon("Waves")

// X / Cancel / Close icons
export const X = createIcon("X")
export const XCircle = createIcon("XCircle")
export const XIcon = createIcon("XIcon")

// Volume icons
export const VolumeOffIcon = createIcon("VolumeOffIcon")

// Zap / Lightning icons
export const Zap = createIcon("Zap")

// Building icons
export const Building2 = createIcon("Building2")
export const Building = createIcon("Building")

// Receipt / Invoice icons
export const Receipt = createIcon("Receipt")

// Tablet icons
export const Tablet = createIcon("Tablet")

// News icons
export const Newspaper = createIcon("Newspaper")

// Quote icons
export const Quote = createIcon("Quote")

// Shopping Bag icons
export const ShoppingBag = createIcon("ShoppingBag")

// Panel Bottom icon
export const PanelBottom = createIcon("PanelBottom")

// Mouse Pointer Click icon
export const MousePointerClick = createIcon("MousePointerClick")

// Images / Gallery icon
export const Images = createIcon("Images")

// Send icon
export const Send = createIcon("Send")

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
