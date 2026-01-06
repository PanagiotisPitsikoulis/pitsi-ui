"use client"

import { Suspense, useCallback, useEffect, useMemo, useState } from "react"
import { parseAsBoolean, parseAsStringLiteral, useQueryState } from "nuqs"

import { generateFigmaColorVariables } from "@/lib/figma-export"
import {
  AlertCircle,
  Bookmark,
  Bot,
  Check,
  ChevronDown,
  Compass,
  Download,
  Info,
  Inspect,
  Moon,
  Palette,
  Redo2,
  RotateCcw,
  Save,
  Shuffle,
  Sun,
} from "@/lib/icons"
import { STORAGE_KEYS, useLocalStorage } from "@/lib/local-storage"
import { cn } from "@/lib/utils"
import { Deck, DeckCards, DeckEmpty, DeckItem } from "@/components/kibo-ui/deck"
import {
  AIJsonEditor,
  CodeBlock,
  InspectorOverlay,
  PreviewNavigation,
  SavedItemsList,
  ToolLayout,
  ToolLayoutBackground,
  ToolLayoutCard,
  ToolLayoutContainer,
  ToolLayoutHeader,
  ToolLayoutPreview,
  ToolLayoutPreviewContent,
  ToolLayoutPreviewHeader,
  ToolLayoutPreviewTitle,
  ToolLayoutSidebar,
  ToolLayoutTabs,
  ToolLayoutTabsContent,
  ToolLayoutTabsList,
  ToolLayoutTabsTrigger,
  useInspector,
} from "@/components/tools"
import { Index } from "@/registry/__index__"
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/registry/new-york-v4/ui/command"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/new-york-v4/ui/dialog"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/new-york-v4/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/new-york-v4/ui/select"
import { Separator } from "@/registry/new-york-v4/ui/separator"
import { Skeleton } from "@/registry/new-york-v4/ui/skeleton"
import { Spinner } from "@/registry/new-york-v4/ui/spinner"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/new-york-v4/ui/tooltip"

import { ColorPicker } from "./_components/color-picker"
import { ControlSection } from "./_components/control-section"
import {
  generateTailwindV4Theme,
  generateThemeCSS,
} from "./_components/generate-css"
import { SliderWithInput } from "./_components/slider-with-input"
import { themePresets } from "./_components/theme-presets"
import {
  defaultThemeState,
  type ThemeEditorState,
  type ThemeStyleProps,
  type ThemeStyles,
} from "./_components/theme-types"

interface SavedTheme {
  id: string
  name: string
  styles: ThemeStyles
  createdAt: number
}

function ThemeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 126"
      fill="none"
      className={className}
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M47.12 85.9004L46.84 86.0504C46.95 86.0504 47.07 86.0504 47.19 86.0604C47.17 86.0104 47.14 85.9604 47.12 85.9004Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M32.48 99.3002C31.72 98.4102 30.78 97.6401 29.66 96.9901C28.54 96.3501 27.6 96.0302 26.84 96.0502C26.57 96.0602 26.35 96.1002 26.18 96.1802L26.12 96.2102C25.85 96.3602 25.71 96.6201 25.71 96.9801C25.71 97.6601 26.01 98.6301 26.6 99.8701C27.19 101.12 27.85 102.15 28.57 102.94L30.75 104.2C31.2 104.23 31.63 104.13 32.04 103.91L32.08 103.89C32.3 103.76 32.51 103.61 32.72 103.41C33.32 102.85 33.61 102.22 33.61 101.54C33.61 100.94 33.23 100.19 32.48 99.3002Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M25.71 85.6502C25.71 86.5502 25.51 87.2302 25.12 87.6802C25.01 87.8102 24.89 87.9102 24.77 87.9702L24.65 88.0302C24.37 88.1402 24.07 88.1002 23.73 87.9102C23.21 87.6002 22.75 87.0002 22.35 86.0902C21.96 85.1802 21.76 84.2701 21.76 83.3601C21.76 82.4501 21.96 81.7802 22.35 81.3302C22.48 81.1802 22.61 81.0702 22.75 81.0102H22.77C23.07 80.8602 23.39 80.9002 23.73 81.1002C24.26 81.4102 24.72 82.0102 25.12 82.9202C25.51 83.8302 25.71 84.7402 25.71 85.6502Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M23.45 59.4303L18.1 62.1003C15.47 55.8203 13.44 49.6203 12.03 43.5103C10.61 37.4103 9.9 31.7803 9.9 26.6503C9.9 25.5903 9.95 24.7303 10.05 24.0703C10.15 23.4103 10.27 22.8903 10.4 22.5103C11.91 23.9903 13.43 26.2103 14.94 29.1603C16.46 32.1103 17.84 35.4603 19.09 39.2003C20.34 42.8703 21.38 46.7403 22.2 50.8103C22.81 53.7803 23.22 56.6503 23.45 59.4303Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M47.38 63.5803C47.35 63.6803 47.32 63.7802 47.29 63.8802C46.43 66.5902 45.35 69.0703 44.04 71.3303C43.38 72.4703 42.67 73.5603 41.89 74.5803C41.67 74.8703 41.45 75.1603 41.22 75.4403C40.52 74.5503 39.81 73.6903 39.07 72.8503C38.9 72.6503 38.73 72.4603 38.55 72.2603C37.63 71.2403 36.67 70.2903 35.69 69.4203L47.38 63.5803Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M49.42 49.4603C49.42 54.3303 48.78 58.9003 47.5 63.1803C47.47 63.3103 47.42 63.4403 47.38 63.5703L35.69 69.4203C35.74 68.5503 35.8 67.6903 35.89 66.8403C36.15 64.2703 36.6 61.8203 37.22 59.4703C37.98 56.5903 38.9 54.0602 39.98 51.9102C40.06 51.7402 40.14 51.5702 40.23 51.4102C41.16 49.7002 42.15 48.3003 43.23 47.2003C43.6 46.8103 43.99 46.4602 44.38 46.1502C45.89 44.9502 47.41 44.4802 48.92 44.7502C49.05 45.2802 49.17 45.9303 49.27 46.7103C49.37 47.4803 49.42 48.4003 49.42 49.4603Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M55.64 102.42C55.02 100.83 54.12 98.8905 52.92 96.5905C52.52 95.8105 52.08 94.9904 51.61 94.1304C51.61 94.1204 51.59 94.1105 51.59 94.1005C50.93 92.9005 50.21 91.6204 49.42 90.2704C49.14 89.7904 48.87 89.3004 48.62 88.8104C48.5 88.6104 48.39 88.4004 48.28 88.1904C47.99 87.6304 47.63 86.9204 47.19 86.0604C47.07 86.0504 46.95 86.0504 46.84 86.0504L47.12 85.9004C47.03 85.7304 46.94 85.5604 46.85 85.3804C48.33 83.6504 49.65 81.7704 50.82 79.7504C52.33 77.1604 53.58 74.3605 54.6 71.3305C54.89 70.4705 55.15 69.5905 55.39 68.7105C56.12 66.0905 56.64 63.3805 56.96 60.6005C57.2 58.4505 57.32 56.2604 57.32 54.0204C57.32 52.6004 57.25 51.2505 57.1 49.9605C56.8 47.2705 56.18 44.8604 55.24 42.7404C54.2 40.3604 52.84 38.4805 51.16 37.0805C50.61 36.6205 50.03 36.2104 49.42 35.8604C48.98 35.6104 48.55 35.3904 48.12 35.1904H48.11C45.68 34.1204 43.43 34.0404 41.35 35.0004L40.91 35.2205C40.37 35.5005 39.85 35.8504 39.34 36.2704C37.27 37.9804 35.56 39.7404 34.24 41.5504C33.66 42.3204 33.16 43.1104 32.72 43.9004C32.06 45.0304 31.49 46.2304 30.99 47.4904C30.7 48.2504 30.42 49.0405 30.16 49.8505C29.99 50.4005 29.82 50.9604 29.66 51.5404C29.27 49.6504 28.82 47.7905 28.33 45.9505C27.83 44.1205 27.29 42.2804 26.7 40.4204C25.18 36.0704 22.94 30.9605 19.98 25.1005C17.02 19.2305 13.66 15.2104 9.9 13.0404C8.21 12.0704 6.77 11.7704 5.59 12.1704H5.58C5.02 12.3504 4.52 12.6904 4.08 13.1904C2.69 14.7404 2 17.7005 2 22.0805C2 28.2005 2.91 35.0204 4.72 42.5304C6.53 50.0304 9.11 57.7004 12.47 65.5304C11.88 66.0204 11.4 66.4104 11.04 66.6904C10.68 66.9704 10.3 67.2305 9.9 67.4505C6.87 69.1805 4.8 70.8304 3.68 72.4204C2.56 74.0004 2 76.1104 2 78.7604C2 84.4304 3.73 90.2405 7.19 96.2105C10.64 102.17 14.84 106.58 19.78 109.43C22.75 111.14 25.13 112.14 26.94 112.43L29.66 112.86L32.38 115.57C34.19 117.37 36.57 119.12 39.54 120.83C44.48 123.69 48.68 124.13 52.13 122.15C55.59 120.18 57.32 116.36 57.32 110.7C57.32 110.28 57.31 109.86 57.27 109.44C57.13 107.18 56.58 104.84 55.64 102.42Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M77.32 100.7C77.32 106.36 75.59 110.18 72.13 112.15L52.13 122.15C55.59 120.18 57.32 116.36 57.32 110.7C57.32 110.28 57.31 109.86 57.27 109.44C57.13 107.18 56.58 104.84 55.64 102.42C55.02 100.83 54.12 98.8905 52.92 96.5905C52.52 95.8105 52.08 94.9904 51.61 94.1304C51.61 94.1204 51.59 94.1105 51.59 94.1005C50.93 92.9005 50.21 91.6204 49.42 90.2704C49.14 89.7904 48.87 89.3004 48.62 88.8104C48.5 88.6104 48.39 88.4004 48.28 88.1904C47.99 87.6304 47.63 86.9204 47.19 86.0604C47.17 86.0104 47.14 85.9604 47.12 85.9004L53.94 82.2604L57.24 80.5004L61.13 78.4304L66.85 75.3804C67.44 76.5604 67.92 77.4904 68.28 78.1904C68.64 78.8904 69.02 79.5804 69.42 80.2704C72.45 85.4904 74.52 89.5404 75.64 92.4204C76.76 95.2904 77.32 98.0504 77.32 100.7Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M47.21 32.0805L41.35 35.0004L40.91 35.2205C40.37 35.5005 39.85 35.8504 39.34 36.2704C37.27 37.9804 35.56 39.7405 34.24 41.5505C33.66 42.3205 33.16 43.1104 32.72 43.9004C32.06 45.0304 31.49 46.2304 30.99 47.4904C30.7 48.2504 30.42 49.0405 30.16 49.8505C29.99 50.4005 29.82 50.9604 29.66 51.5404C29.27 49.6504 28.82 47.7905 28.33 45.9505C27.83 44.1205 27.29 42.2804 26.7 40.4204C25.18 36.0704 22.94 30.9605 19.98 25.1005C17.02 19.2305 13.66 15.2104 9.9 13.0404C8.21 12.0704 6.77 11.7704 5.59 12.1704L24.89 2.50041L25.43 2.23039C26.64 1.75039 28.13 2.02044 29.9 3.04044C33.66 5.21044 37.02 9.2305 39.98 15.1005C42.94 20.9605 45.18 26.0705 46.7 30.4205C46.87 30.9505 47.03 31.4804 47.19 32.0104C47.2 32.0304 47.2 32.0605 47.21 32.0805Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M77.32 44.0203C77.32 50.1403 76.41 55.9104 74.6 61.3304C72.79 66.7404 70.21 71.4303 66.85 75.3803L61.13 78.4304L57.24 80.5003L53.94 82.2603L47.12 85.9003C47.03 85.7303 46.94 85.5603 46.85 85.3803C48.33 83.6503 49.65 81.7703 50.82 79.7503C52.33 77.1603 53.58 74.3604 54.6 71.3304C54.89 70.4704 55.15 69.5904 55.39 68.7104C56.12 66.0904 56.64 63.3804 56.96 60.6004C57.2 58.4504 57.32 56.2603 57.32 54.0203C57.32 52.6003 57.25 51.2504 57.1 49.9604C56.8 47.2704 56.18 44.8603 55.24 42.7403C54.2 40.3603 52.84 38.4804 51.16 37.0804C50.61 36.6204 50.03 36.2103 49.42 35.8603C48.98 35.6103 48.55 35.3904 48.12 35.1904H48.11C45.68 34.1204 43.43 34.0403 41.35 35.0003L47.21 32.0804L60.32 25.5704H60.33C63.04 23.8304 66.07 23.9303 69.42 25.8603C71.92 27.3003 73.86 29.5903 75.24 32.7403C76.63 35.8803 77.32 39.6403 77.32 44.0203Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M23.63 62.4604C22.51 62.1904 21.49 62.0204 20.57 61.9404C19.65 61.8604 18.83 61.9105 18.1 62.1005L23.45 59.4304C23.54 60.4504 23.6 61.4604 23.63 62.4604Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      <path
        d="M37.56 92.4902C37.56 93.4002 37.37 94.0802 36.97 94.5302C36.88 94.6402 36.78 94.7202 36.68 94.7802L36.48 94.8802C36.2 94.9802 35.91 94.9302 35.59 94.7502C35.06 94.4502 34.6 93.8402 34.2 92.9302C34.11 92.7202 34.03 92.5002 33.96 92.2902C33.73 91.5902 33.61 90.9003 33.61 90.2103C33.61 89.3003 33.81 88.6202 34.2 88.1702C34.26 88.1102 34.31 88.0502 34.37 88.0002C34.43 87.9502 34.49 87.9102 34.55 87.8802C34.58 87.8602 34.61 87.8403 34.64 87.8403C34.64 87.8403 34.66 87.8203 34.67 87.8203C34.95 87.7103 35.26 87.7603 35.59 87.9503C36.11 88.2503 36.57 88.8602 36.97 89.7702C37.1 90.0602 37.2 90.3402 37.28 90.6302C37.47 91.2502 37.56 91.8702 37.56 92.4902Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// Map color keys to their section names
const COLOR_TO_SECTION: Record<string, string> = {
  brand: "brand",
  "brand-complementary": "brand",
  primary: "primary",
  "primary-foreground": "primary",
  secondary: "secondary",
  "secondary-foreground": "secondary",
  accent: "accent",
  "accent-foreground": "accent",
  background: "base",
  foreground: "base",
  page: "base",
  card: "card",
  "card-foreground": "card",
  popover: "popover",
  "popover-foreground": "popover",
  muted: "muted",
  "muted-foreground": "muted",
  destructive: "destructive",
  "destructive-foreground": "destructive",
  border: "border",
  input: "border",
  ring: "border",
  "chart-1": "chart",
  "chart-2": "chart",
  "chart-3": "chart",
  "chart-4": "chart",
  "chart-5": "chart",
  sidebar: "sidebar",
  "sidebar-foreground": "sidebar",
  "sidebar-primary": "sidebar",
  "sidebar-primary-foreground": "sidebar",
  "sidebar-accent": "sidebar",
  "sidebar-accent-foreground": "sidebar",
  "sidebar-border": "sidebar",
  "sidebar-ring": "sidebar",
}

// Color descriptions for semantic meaning
const COLOR_DESCRIPTIONS: Record<
  string,
  { title: string; description: string }
> = {
  brand: {
    title: "Brand",
    description:
      "Your main brand color. Used for logos, key visual elements, and brand identity. This color represents your company or product.",
  },
  "brand-complementary": {
    title: "Brand Complementary",
    description:
      "A complementary accent to your brand color. Used for secondary branding, call-to-action highlights, and visual variety.",
  },
  primary: {
    title: "Primary",
    description:
      "The main interactive color. Used for buttons, links, and primary actions. Should have good contrast with its foreground.",
  },
  "primary-foreground": {
    title: "Primary Foreground",
    description:
      "Text and icon color on primary backgrounds. Must be highly legible against the primary color.",
  },
  secondary: {
    title: "Secondary",
    description:
      "Less prominent interactive elements. Used for secondary buttons, alternative actions, and supporting UI elements.",
  },
  "secondary-foreground": {
    title: "Secondary Foreground",
    description:
      "Text and icon color on secondary backgrounds. Provides readable contrast for secondary elements.",
  },
  accent: {
    title: "Accent",
    description:
      "Highlights and emphasis. Used for badges, tags, hover states, and elements that need visual distinction.",
  },
  "accent-foreground": {
    title: "Accent Foreground",
    description:
      "Text and icon color on accent backgrounds. Ensures readability on accent-colored elements.",
  },
  background: {
    title: "Background",
    description:
      "The main surface color of your app. Used for cards, modals, and content areas. Usually white or near-white in light mode.",
  },
  foreground: {
    title: "Foreground",
    description:
      "Default text color. Must have excellent contrast against the background for readability.",
  },
  page: {
    title: "Page",
    description:
      "The outermost background color. Creates depth by contrasting with card and content backgrounds.",
  },
  card: {
    title: "Card",
    description:
      "Surface color for cards and elevated content. Slightly different from background to create visual hierarchy.",
  },
  "card-foreground": {
    title: "Card Foreground",
    description:
      "Text color inside cards. Optimized for readability on card backgrounds.",
  },
  popover: {
    title: "Popover",
    description:
      "Background for dropdowns, tooltips, and floating elements. Often matches card color.",
  },
  "popover-foreground": {
    title: "Popover Foreground",
    description:
      "Text color inside popovers. Ensures clarity in floating UI elements.",
  },
  muted: {
    title: "Muted",
    description:
      "Subtle background for less prominent content. Used for disabled states, placeholders, and secondary areas.",
  },
  "muted-foreground": {
    title: "Muted Foreground",
    description:
      "Subdued text color. Used for placeholders, help text, and less important information.",
  },
  destructive: {
    title: "Destructive",
    description:
      "Danger and error states. Used for delete actions, error messages, and warnings. Typically red-based.",
  },
  "destructive-foreground": {
    title: "Destructive Foreground",
    description:
      "Text on destructive backgrounds. Must be clearly visible to communicate urgency.",
  },
  border: {
    title: "Border",
    description:
      "Default border color for dividers, separators, and element outlines. Subtle but visible.",
  },
  input: {
    title: "Input",
    description:
      "Border color for form inputs, text fields, and interactive form elements.",
  },
  ring: {
    title: "Ring",
    description:
      "Focus ring color. Appears around focused elements for accessibility. Usually matches primary or brand.",
  },
  "chart-1": {
    title: "Chart 1",
    description:
      "First color in data visualizations. Used for the primary data series in charts and graphs.",
  },
  "chart-2": {
    title: "Chart 2",
    description:
      "Second chart color. Distinguishes the second data series from the first.",
  },
  "chart-3": {
    title: "Chart 3",
    description:
      "Third chart color. Provides additional visual distinction in multi-series charts.",
  },
  "chart-4": {
    title: "Chart 4",
    description:
      "Fourth chart color. Extends the palette for complex data visualizations.",
  },
  "chart-5": {
    title: "Chart 5",
    description:
      "Fifth chart color. Completes the chart palette for diverse data sets.",
  },
  sidebar: {
    title: "Sidebar",
    description:
      "Background color for navigation sidebars. Can match or contrast with main content.",
  },
  "sidebar-foreground": {
    title: "Sidebar Foreground",
    description:
      "Text color in the sidebar. Optimized for the sidebar background.",
  },
  "sidebar-primary": {
    title: "Sidebar Primary",
    description:
      "Active or selected state in sidebar. Highlights the current navigation item.",
  },
  "sidebar-primary-foreground": {
    title: "Sidebar Primary Foreground",
    description: "Text color for active sidebar items.",
  },
  "sidebar-accent": {
    title: "Sidebar Accent",
    description:
      "Hover and subtle emphasis in sidebar. Indicates interactivity.",
  },
  "sidebar-accent-foreground": {
    title: "Sidebar Accent Foreground",
    description: "Text color for hovered sidebar items.",
  },
  "sidebar-border": {
    title: "Sidebar Border",
    description: "Dividers and separators within the sidebar.",
  },
  "sidebar-ring": {
    title: "Sidebar Ring",
    description:
      "Focus indicator for sidebar elements. Aids keyboard navigation.",
  },
}

// Theme psychology descriptions
const THEME_PSYCHOLOGY: Record<
  string,
  { mood: string; description: string; bestFor: string }
> = {
  slate: {
    mood: "Professional & Neutral",
    description:
      "A purely neutral palette that lets content speak for itself. Gray tones convey sophistication, reliability, and timelessness without any color bias.",
    bestFor: "Business apps, documentation, content-focused sites",
  },
  azure: {
    mood: "Trustworthy & Calm",
    description:
      "Blue evokes trust, stability, and professionalism. It's calming and dependable, making users feel secure and confident in your product.",
    bestFor: "Finance, healthcare, enterprise software, SaaS",
  },
  "azure-tinted": {
    mood: "Fresh & Airy",
    description:
      "Soft blue undertones create a light, breathable atmosphere while maintaining the trustworthy qualities of azure.",
    bestFor: "Productivity tools, cloud services, modern dashboards",
  },
  "azure-deep": {
    mood: "Bold & Authoritative",
    description:
      "Deep blue commands attention and conveys expertise. It's confident and assertive while remaining professional.",
    bestFor: "Corporate sites, premium services, authority brands",
  },
  violet: {
    mood: "Creative & Premium",
    description:
      "Purple represents creativity, luxury, and innovation. It sparks imagination and suggests premium quality.",
    bestFor: "Creative tools, luxury brands, innovative tech",
  },
  "violet-tinted": {
    mood: "Mystical & Subtle",
    description:
      "Gentle violet undertones add a touch of magic and creativity without overwhelming the interface.",
    bestFor: "Design tools, meditation apps, creative platforms",
  },
  "violet-deep": {
    mood: "Luxurious & Bold",
    description:
      "Rich purple creates a sense of opulence and exclusivity. It's dramatic and memorable.",
    bestFor: "Premium products, exclusive services, VIP features",
  },
  rose: {
    mood: "Warm & Approachable",
    description:
      "Pink/rose tones are warm, friendly, and inviting. They create emotional connection and feel personal.",
    bestFor: "Social apps, wellness, dating, lifestyle brands",
  },
  "rose-tinted": {
    mood: "Soft & Caring",
    description:
      "Gentle rose undertones add warmth and humanity to the interface, making technology feel more approachable.",
    bestFor: "Health apps, parenting tools, community platforms",
  },
  "rose-deep": {
    mood: "Passionate & Energetic",
    description:
      "Bold rose/magenta creates excitement and energy. It's passionate and attention-grabbing.",
    bestFor: "Fashion, beauty, entertainment, bold startups",
  },
  sage: {
    mood: "Natural & Balanced",
    description:
      "Green represents nature, growth, and harmony. It's refreshing, calming, and suggests sustainability.",
    bestFor: "Eco brands, wellness, finance (growth), agriculture",
  },
  "sage-tinted": {
    mood: "Fresh & Organic",
    description:
      "Subtle green undertones create a natural, organic feel that's easy on the eyes and promotes focus.",
    bestFor: "Note-taking apps, reading platforms, nature brands",
  },
  "sage-deep": {
    mood: "Earthy & Grounded",
    description:
      "Deep green is sophisticated and grounding. It conveys stability, prosperity, and environmental consciousness.",
    bestFor: "Sustainable brands, luxury outdoor, investment platforms",
  },
  amber: {
    mood: "Warm & Optimistic",
    description:
      "Yellow/amber radiates warmth, optimism, and energy. It's cheerful and draws attention naturally.",
    bestFor: "Food apps, children's products, positive messaging",
  },
  "amber-tinted": {
    mood: "Sunny & Inviting",
    description:
      "Soft golden undertones create a welcoming, comfortable atmosphere that feels like sunshine.",
    bestFor: "Travel apps, hospitality, friendly services",
  },
  "amber-deep": {
    mood: "Rich & Prestigious",
    description:
      "Deep gold/amber suggests wealth, quality, and premium value. It's warm but sophisticated.",
    bestFor: "Luxury goods, premium tiers, award programs",
  },
  cyan: {
    mood: "Fresh & Modern",
    description:
      "Cyan is refreshing, modern, and tech-forward. It combines the trust of blue with the freshness of green.",
    bestFor: "Tech startups, water/energy brands, innovation",
  },
  "cyan-tinted": {
    mood: "Cool & Clean",
    description:
      "Light cyan undertones create a clean, clinical feel that's precise and focused.",
    bestFor: "Healthcare tech, cleaning services, precision tools",
  },
  "cyan-deep": {
    mood: "Oceanic & Deep",
    description:
      "Deep cyan/teal is mysterious and sophisticated. It suggests depth of knowledge and expertise.",
    bestFor: "Marine brands, deep tech, analytics platforms",
  },
  indigo: {
    mood: "Wise & Thoughtful",
    description:
      "Indigo combines blue's trust with purple's creativity. It's intellectual, intuitive, and contemplative.",
    bestFor: "Education, AI/ML products, research tools",
  },
  "indigo-tinted": {
    mood: "Dreamy & Intuitive",
    description:
      "Soft indigo undertones create a thoughtful, meditative atmosphere that encourages deep thinking.",
    bestFor: "Note apps, learning platforms, creative writing tools",
  },
  "indigo-deep": {
    mood: "Cosmic & Powerful",
    description:
      "Deep indigo is vast and powerful, evoking the night sky and infinite possibilities.",
    bestFor: "Space tech, advanced AI, visionary brands",
  },
  coral: {
    mood: "Vibrant & Energetic",
    description:
      "Coral is playful, energetic, and modern. It's warm like red but friendlier and more approachable.",
    bestFor: "Social apps, creative tools, trendy brands",
  },
  "coral-tinted": {
    mood: "Peachy & Friendly",
    description:
      "Soft coral undertones are warm and welcoming, creating a friendly, approachable environment.",
    bestFor: "Community apps, lifestyle brands, friendly services",
  },
  "coral-deep": {
    mood: "Bold & Adventurous",
    description:
      "Deep coral is bold and adventurous. It demands attention and conveys confidence.",
    bestFor: "Travel, adventure brands, bold startups",
  },
  forest: {
    mood: "Natural & Trustworthy",
    description:
      "Forest green is deep and natural. It represents growth, reliability, and environmental awareness.",
    bestFor: "Outdoor brands, eco-friendly products, nature apps",
  },
  "forest-tinted": {
    mood: "Mossy & Serene",
    description:
      "Subtle forest undertones create a serene, natural environment that promotes calm focus.",
    bestFor: "Meditation apps, nature guides, peaceful products",
  },
  "forest-deep": {
    mood: "Rich & Established",
    description:
      "Deep forest green is classic and established. It conveys heritage, quality, and enduring value.",
    bestFor: "Heritage brands, universities, established enterprises",
  },
}

function themeStylesToCSS(styles: ThemeStyleProps): React.CSSProperties {
  return {
    "--background": styles.background,
    "--foreground": styles.foreground,
    "--card": styles.card,
    "--card-foreground": styles["card-foreground"],
    "--popover": styles.popover,
    "--popover-foreground": styles["popover-foreground"],
    "--primary": styles.primary,
    "--primary-foreground": styles["primary-foreground"],
    "--secondary": styles.secondary,
    "--secondary-foreground": styles["secondary-foreground"],
    "--muted": styles.muted,
    "--muted-foreground": styles["muted-foreground"],
    "--accent": styles.accent,
    "--accent-foreground": styles["accent-foreground"],
    "--destructive": styles.destructive,
    "--destructive-foreground": styles["destructive-foreground"],
    "--success": styles.success,
    "--success-foreground": styles["success-foreground"],
    "--warning": styles.warning,
    "--warning-foreground": styles["warning-foreground"],
    "--info": styles.info,
    "--info-foreground": styles["info-foreground"],
    "--border": styles.border,
    "--input": styles.input,
    "--ring": styles.ring,
    "--chart-1": styles["chart-1"],
    "--chart-2": styles["chart-2"],
    "--chart-3": styles["chart-3"],
    "--chart-4": styles["chart-4"],
    "--chart-5": styles["chart-5"],
    "--sidebar": styles.sidebar,
    "--sidebar-foreground": styles["sidebar-foreground"],
    "--sidebar-primary": styles["sidebar-primary"],
    "--sidebar-primary-foreground": styles["sidebar-primary-foreground"],
    "--sidebar-accent": styles["sidebar-accent"],
    "--sidebar-accent-foreground": styles["sidebar-accent-foreground"],
    "--sidebar-border": styles["sidebar-border"],
    "--sidebar-ring": styles["sidebar-ring"],
    "--code": styles.code,
    "--code-foreground": styles["code-foreground"],
    "--code-highlight": styles["code-highlight"],
    "--code-number": styles["code-number"],
    "--selection": styles.selection,
    "--selection-foreground": styles["selection-foreground"],
    "--page": styles.page,
    "--brand": styles.brand,
    "--brand-complementary": styles["brand-complementary"],
    "--radius": styles.radius,
  } as React.CSSProperties
}

function LiveBlockPreview({
  blockName,
  themeStyles,
  isDark,
  inspectorEnabled,
  onColorClick,
}: {
  blockName: string
  themeStyles: ThemeStyleProps
  isDark: boolean
  inspectorEnabled: boolean
  onColorClick?: (colorKey: string) => void
}) {
  const { rootRef, inspector, handleMouseMove, handleMouseLeave } =
    useInspector(inspectorEnabled)
  const styleIndex = Index["new-york-v4"]

  if (!styleIndex || !styleIndex[blockName]) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="text-muted-foreground flex flex-col items-center gap-2">
          <AlertCircle className="size-8 opacity-50" />
          <p>Block not found</p>
        </div>
      </div>
    )
  }

  const registryItem = styleIndex[blockName]
  const Component = registryItem.component

  if (!Component) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="text-muted-foreground">Component not found</div>
      </div>
    )
  }

  const cssVars = themeStylesToCSS(themeStyles)

  return (
    <div
      ref={rootRef}
      className={cn(
        "relative isolate h-full w-full overflow-clip",
        isDark && "dark"
      )}
      style={{
        ...cssVars,
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
        contain: "paint",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <InspectorOverlay
        inspector={inspector}
        enabled={inspectorEnabled}
        rootRef={rootRef}
        styles={themeStyles as unknown as Record<string, string>}
        onColorClick={onColorClick}
      />
      <div className="h-full w-full overflow-auto">
        <Suspense
          fallback={
            <div className="flex h-full items-center justify-center">
              <Spinner className="size-6" />
            </div>
          }
        >
          <Component />
        </Suspense>
      </div>
    </div>
  )
}

const previewBlocks = [
  {
    value: "marketing-hero-section-hero-section-with-customer-logos",
    label: "Hero with Logos",
  },
  {
    value: "marketing-hero-section-side-by-side-hero-section-with-image",
    label: "Hero Side by Side",
  },
  {
    value: "marketing-hero-section-simple-hero-section-with-creative-image",
    label: "Hero Creative",
  },
  {
    value: "marketing-hero-section-hero-section-with-gradient-background",
    label: "Hero Gradient",
  },
  {
    value: "marketing-hero-section-hero-section-with-stat-cards",
    label: "Hero with Stats",
  },
  {
    value: "marketing-features-default-feature-tailwind-css-block",
    label: "Features Default",
  },
  {
    value: "marketing-features-grid-layout-feature-cards",
    label: "Features Grid",
  },
  {
    value: "marketing-features-tailwind-feature-cards",
    label: "Features Cards",
  },
  {
    value: "marketing-features-two-column-feature-grid",
    label: "Features Two Column",
  },
  {
    value: "marketing-features-feature-section-with-card-layout",
    label: "Features Card Layout",
  },
  {
    value: "marketing-features-vertical-feature-card-with-tailwind-css",
    label: "Features Vertical",
  },
  { value: "login-01", label: "Login 01" },
  { value: "login-02", label: "Login 02" },
]

function ColorBox({ color }: { color: string }) {
  return (
    <div
      className="border-background ring-border/50 size-4 shrink-0 rounded-full border ring-1"
      style={{ backgroundColor: color }}
    />
  )
}

function ColorInfoButton({ colorKey }: { colorKey: string }) {
  const info = COLOR_DESCRIPTIONS[colorKey]
  if (!info) return null

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:text-foreground size-5 shrink-0"
        >
          <Info className="size-3" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{info.title}</DialogTitle>
          <DialogDescription>{info.description}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

function ThemePsychologyButton({
  themeKey,
  styles,
}: {
  themeKey: string
  styles: ThemeStyleProps
}) {
  const psychology = THEME_PSYCHOLOGY[themeKey]
  if (!psychology) return null

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="absolute top-5 right-5 flex size-5 items-center justify-center rounded-full border shadow-xs"
          style={{
            backgroundColor: styles.background,
            borderColor: styles.border,
            color: styles["muted-foreground"],
          }}
        >
          <Info className="size-3" />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <div className="flex -space-x-1">
              <div
                className="border-background ring-border/50 size-4 rounded-full border ring-1"
                style={{ backgroundColor: styles.brand }}
              />
              <div
                className="border-background ring-border/50 size-4 rounded-full border ring-1"
                style={{ backgroundColor: styles["brand-complementary"] }}
              />
            </div>
            {psychology.mood}
          </DialogTitle>
          <DialogDescription>{psychology.description}</DialogDescription>
        </DialogHeader>
        <div className="bg-muted/50 rounded-lg border p-3">
          <p className="text-foreground text-xs font-medium">Best for:</p>
          <p className="text-muted-foreground text-xs">{psychology.bestFor}</p>
        </div>
      </DialogContent>
    </Dialog>
  )
}

function PresetSelector({
  presets,
  currentPreset,
  onSelect,
  onSave,
  currentMode,
  styles,
  savedThemes,
  onLoadSavedTheme,
}: {
  presets: Record<string, ThemePreset>
  currentPreset: string
  onSelect: (preset: string) => void
  onSave: () => void
  currentMode: "light" | "dark"
  styles: ThemeEditorState["styles"]
  savedThemes: SavedTheme[]
  onLoadSavedTheme: (theme: SavedTheme) => void
}) {
  const [open, setOpen] = useState(false)

  const randomize = useCallback(() => {
    const presetNames = Object.keys(presets)
    const random = Math.floor(Math.random() * presetNames.length)
    onSelect(presetNames[random])
  }, [onSelect])

  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="min-w-0 flex-1 justify-between gap-2 shadow-2xs"
            size="sm"
          >
            <div className="flex min-w-0 items-center gap-2">
              <div className="flex shrink-0 -space-x-1.5">
                <ColorBox color={styles[currentMode].brand} />
                <ColorBox color={styles[currentMode]["brand-complementary"]} />
                <ColorBox color={styles[currentMode].primary} />
              </div>
              <span className="truncate font-medium">
                {presets[currentPreset]?.label || "Custom"}
              </span>
            </div>
            <ChevronDown className="size-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[280px] p-0" align="start">
          <Command>
            <CommandInput placeholder="Search themes..." />
            <CommandList>
              <CommandEmpty>No theme found.</CommandEmpty>
              {savedThemes.length > 0 && (
                <CommandGroup heading="Saved Themes">
                  {savedThemes.map((theme) => (
                    <CommandItem
                      key={theme.id}
                      value={`saved-${theme.name}`}
                      onSelect={() => {
                        onLoadSavedTheme(theme)
                        setOpen(false)
                      }}
                      className="flex items-center gap-2 py-2"
                    >
                      <div className="flex -space-x-1.5">
                        <ColorBox color={theme.styles[currentMode].brand} />
                        <ColorBox
                          color={
                            theme.styles[currentMode]["brand-complementary"]
                          }
                        />
                        <ColorBox color={theme.styles[currentMode].primary} />
                      </div>
                      <span className="flex-1 font-medium">{theme.name}</span>
                    </CommandItem>
                  ))}
                </CommandGroup>
              )}
              <CommandGroup heading="Built-in Themes">
                {Object.entries(presets).map(([key, preset]) => (
                  <CommandItem
                    key={key}
                    value={key}
                    onSelect={() => {
                      onSelect(key)
                      setOpen(false)
                    }}
                    className="flex items-center gap-2 py-2"
                  >
                    <div className="flex -space-x-1.5">
                      <ColorBox color={preset.styles[currentMode].brand} />
                      <ColorBox
                        color={
                          preset.styles[currentMode]["brand-complementary"]
                        }
                      />
                      <ColorBox color={preset.styles[currentMode].primary} />
                    </div>
                    <span className="flex-1 font-medium">{preset.label}</span>
                    {key === currentPreset && (
                      <Check className="size-4 shrink-0 opacity-70" />
                    )}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="size-8 shrink-0 shadow-2xs"
              onClick={onSave}
            >
              <Save className="size-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Save theme</TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="size-8 shrink-0 shadow-2xs"
              onClick={randomize}
            >
              <Shuffle className="size-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Random theme</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  )
}

interface ThemeGeneratorPageClientProps {
  hasBackgroundDecoration?: boolean
}

const colorFormats = ["oklch", "hsl", "hex"] as const
const sidebarTabs = ["colors", "saved", "export", "explore"] as const
const themeModes = ["light", "dark"] as const

// Preview block options for URL state
const previewBlockValues = [
  "marketing-hero-section-hero-section-with-customer-logos",
  "marketing-hero-section-side-by-side-hero-section-with-image",
  "marketing-hero-section-simple-hero-section-with-creative-image",
  "marketing-hero-section-hero-section-with-gradient-background",
  "marketing-hero-section-hero-section-with-stat-cards",
  "marketing-features-default-feature-tailwind-css-block",
  "marketing-features-grid-layout-feature-cards",
  "marketing-features-tailwind-feature-cards",
  "marketing-features-two-column-feature-grid",
  "marketing-features-feature-section-with-card-layout",
  "marketing-features-vertical-feature-card-with-tailwind-css",
  "login-01",
  "login-02",
] as const

export default function ThemeGeneratorPageClient({
  hasBackgroundDecoration = true,
}: ThemeGeneratorPageClientProps = {}) {
  const presets = themePresets
  const defaultState = defaultThemeState
  // URL state with nuqs
  // Include "custom" in allowed values since it's set when user modifies theme
  const presetParser = useMemo(() => {
    const presetKeys = Object.keys(presets)
    const allowedValues: [string, ...string[]] = ["custom", ...presetKeys]
    return parseAsStringLiteral(allowedValues).withDefault("azure")
  }, [presets])
  const [currentPreset, setCurrentPreset] = useQueryState(
    "preset",
    presetParser
  )
  const [currentMode, setCurrentMode] = useQueryState(
    "mode",
    parseAsStringLiteral(themeModes).withDefault("light")
  )
  const [sidebarTab, setSidebarTab] = useQueryState(
    "tab",
    parseAsStringLiteral(sidebarTabs).withDefault("colors")
  )
  const [selectedBlock, setSelectedBlock] = useQueryState(
    "block",
    parseAsStringLiteral(previewBlockValues).withDefault(
      "marketing-hero-section-hero-section-with-customer-logos"
    )
  )
  const [colorFormat, setColorFormat] = useQueryState(
    "format",
    parseAsStringLiteral(colorFormats).withDefault("oklch")
  )
  const [inspectorEnabled, setInspectorEnabled] = useQueryState(
    "inspector",
    parseAsBoolean.withDefault(false)
  )

  // Local state (not persisted to URL)
  const [themeStyles, setThemeStyles] = useState<ThemeStyles>(
    defaultState.styles
  )
  const [savedThemes, setSavedThemes, isHydrated] = useLocalStorage<
    SavedTheme[]
  >(STORAGE_KEYS.THEME_GENERATOR, [])
  const presetKeys = useMemo(() => Object.keys(presets), [presets])
  const [deckIndex, setDeckIndex] = useState(
    Math.max(0, presetKeys.indexOf(currentPreset))
  )
  const [highlightedColor, setHighlightedColor] = useState<string | null>(null)
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    brand: true,
    primary: true,
    secondary: true,
  })

  // Sync theme styles when preset changes
  useEffect(() => {
    if (currentPreset !== "custom" && presets[currentPreset]) {
      setThemeStyles(presets[currentPreset].styles)
    }
  }, [currentPreset, presets])

  const currentStyles = themeStyles[currentMode]

  const updateStyle = useCallback(
    <K extends keyof ThemeStyleProps>(key: K, value: ThemeStyleProps[K]) => {
      setThemeStyles((prev) => ({
        ...prev,
        [currentMode]: {
          ...prev[currentMode],
          [key]: value,
        },
      }))
      setCurrentPreset("custom")
    },
    [currentMode, setCurrentPreset]
  )

  const applyPreset = useCallback(
    (presetKey: string) => {
      const preset = presets[presetKey]
      if (preset) {
        setThemeStyles(preset.styles)
        setCurrentPreset(presetKey)
        const index = presetKeys.indexOf(presetKey)
        if (index >= 0) {
          setDeckIndex(index)
        }
      }
    },
    [presets, presetKeys, setCurrentPreset]
  )

  const toggleMode = useCallback(() => {
    setCurrentMode(currentMode === "light" ? "dark" : "light")
  }, [currentMode, setCurrentMode])

  const resetTheme = useCallback(() => {
    setThemeStyles(defaultState.styles)
    setCurrentPreset("azure")
    setCurrentMode("light")
    setDeckIndex(presetKeys.indexOf("azure"))
  }, [defaultState.styles, presetKeys, setCurrentPreset, setCurrentMode])

  const handleInspectorColorClick = useCallback((colorKey: string) => {
    // Switch to colors tab
    setSidebarTab("colors")
    // Open the section containing this color
    const section = COLOR_TO_SECTION[colorKey]
    if (section) {
      setOpenSections((prev) => ({ ...prev, [section]: true }))
    }
    // Highlight the color
    setHighlightedColor(colorKey)
    // Clear highlight after animation
    setTimeout(() => setHighlightedColor(null), 2000)
    // Scroll to the color picker element (wait for section to open)
    setTimeout(() => {
      const element = document.getElementById(`color-${colorKey}`)
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" })
      }
    }, 250)
  }, [])

  const generatedCSS = useMemo(() => {
    return generateThemeCSS(themeStyles, colorFormat)
  }, [themeStyles, colorFormat])

  const generatedTailwind = useMemo(() => {
    return generateTailwindV4Theme(themeStyles)
  }, [themeStyles])

  const saveTheme = useCallback(() => {
    const newTheme: SavedTheme = {
      id: crypto.randomUUID(),
      name: `Theme ${savedThemes.length + 1}`,
      styles: themeStyles,
      createdAt: Date.now(),
    }
    setSavedThemes((prev) => [...prev, newTheme])
    setSidebarTab("saved")
  }, [savedThemes.length, themeStyles, setSidebarTab])

  const deleteTheme = useCallback((id: string) => {
    setSavedThemes((prev) => prev.filter((t) => t.id !== id))
  }, [])

  const renameTheme = useCallback((id: string, name: string) => {
    setSavedThemes((prev) =>
      prev.map((t) => (t.id === id ? { ...t, name } : t))
    )
  }, [])

  const loadTheme = useCallback(
    (theme: SavedTheme) => {
      setThemeStyles(theme.styles)
      setCurrentPreset("custom")
    },
    [setCurrentPreset]
  )

  const radius = parseFloat(currentStyles.radius.replace("rem", ""))

  return (
    <ToolLayout>
      {hasBackgroundDecoration && <ToolLayoutBackground />}

      <ToolLayoutContainer>
        {/* Controls - First 2 columns */}
        <ToolLayoutSidebar>
          <ToolLayoutHeader
            backHref="/tools"
            title="Theme Generator"
            description="Customize your shadcn/ui theme"
          />

          {/* Sidebar Tabs */}
          <ToolLayoutCard>
            <ToolLayoutTabs
              value={sidebarTab}
              onValueChange={(v) =>
                setSidebarTab(v as "colors" | "saved" | "export" | "explore")
              }
            >
              <ToolLayoutTabsList>
                <ToolLayoutTabsTrigger value="explore" icon={Compass}>
                  Explore
                </ToolLayoutTabsTrigger>
                <ToolLayoutTabsTrigger value="colors" icon={Palette}>
                  Colors
                </ToolLayoutTabsTrigger>
                <ToolLayoutTabsTrigger value="saved" icon={Bookmark}>
                  Saved
                </ToolLayoutTabsTrigger>
                <ToolLayoutTabsTrigger value="export" icon={Download}>
                  Export
                </ToolLayoutTabsTrigger>
              </ToolLayoutTabsList>

              <ToolLayoutTabsContent value="colors">
                {/* Preset selector & controls */}
                <div className="flex items-center gap-1">
                  <PresetSelector
                    presets={presets}
                    currentPreset={currentPreset}
                    onSelect={applyPreset}
                    onSave={saveTheme}
                    currentMode={currentMode}
                    styles={themeStyles}
                    savedThemes={savedThemes}
                    onLoadSavedTheme={loadTheme}
                  />

                  <TooltipProvider delayDuration={0}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={toggleMode}
                          className="size-8 shrink-0 shadow-2xs"
                        >
                          {currentMode === "light" ? (
                            <Sun className="size-4" />
                          ) : (
                            <Moon className="size-4" />
                          )}
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        {currentMode === "light"
                          ? "Switch to dark"
                          : "Switch to light"}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <TooltipProvider delayDuration={0}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={resetTheme}
                          className="size-8 shrink-0 shadow-2xs"
                        >
                          <RotateCcw className="size-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Reset to defaults</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <AIJsonEditor
                    value={themeStyles}
                    onChange={setThemeStyles}
                    title="Edit Theme JSON"
                    description="Edit the theme colors directly or use ChatGPT to modify"
                    tooltip="Edit with AI"
                    hints={[
                      'Change color values (e.g., "make brand color purple")',
                      "Adjust lightness/saturation of colors",
                      "Create color harmony (complementary, analogous)",
                      "Generate accessible contrast ratios",
                    ]}
                    trigger={
                      <Button
                        variant="outline"
                        size="icon"
                        className="size-8 shrink-0 shadow-2xs"
                      >
                        <Bot className="size-4" />
                      </Button>
                    }
                  />
                </div>

                <div className="space-y-0">
                  <ControlSection
                    title="Brand Colors"
                    open={openSections.brand}
                    onOpenChange={(open) =>
                      setOpenSections((prev) => ({ ...prev, brand: open }))
                    }
                  >
                    <ColorPicker
                      name="brand"
                      color={currentStyles.brand}
                      onChange={(color) => updateStyle("brand", color)}
                      label="Brand"
                      highlighted={highlightedColor === "brand"}
                      infoButton={<ColorInfoButton colorKey="brand" />}
                    />
                    <ColorPicker
                      name="brand-complementary"
                      color={currentStyles["brand-complementary"]}
                      onChange={(color) =>
                        updateStyle("brand-complementary", color)
                      }
                      label="Brand Complementary"
                      highlighted={highlightedColor === "brand-complementary"}
                      infoButton={
                        <ColorInfoButton colorKey="brand-complementary" />
                      }
                    />
                  </ControlSection>

                  <ControlSection
                    title="Primary Colors"
                    open={openSections.primary}
                    onOpenChange={(open) =>
                      setOpenSections((prev) => ({ ...prev, primary: open }))
                    }
                  >
                    <ColorPicker
                      name="primary"
                      color={currentStyles.primary}
                      onChange={(color) => updateStyle("primary", color)}
                      label="Primary"
                      highlighted={highlightedColor === "primary"}
                      infoButton={<ColorInfoButton colorKey="primary" />}
                    />
                    <ColorPicker
                      name="primary-foreground"
                      color={currentStyles["primary-foreground"]}
                      onChange={(color) =>
                        updateStyle("primary-foreground", color)
                      }
                      label="Primary Foreground"
                      highlighted={highlightedColor === "primary-foreground"}
                      infoButton={
                        <ColorInfoButton colorKey="primary-foreground" />
                      }
                    />
                  </ControlSection>

                  <ControlSection
                    title="Secondary Colors"
                    open={openSections.secondary}
                    onOpenChange={(open) =>
                      setOpenSections((prev) => ({ ...prev, secondary: open }))
                    }
                  >
                    <ColorPicker
                      name="secondary"
                      color={currentStyles.secondary}
                      onChange={(color) => updateStyle("secondary", color)}
                      label="Secondary"
                      highlighted={highlightedColor === "secondary"}
                      infoButton={<ColorInfoButton colorKey="secondary" />}
                    />
                    <ColorPicker
                      name="secondary-foreground"
                      color={currentStyles["secondary-foreground"]}
                      onChange={(color) =>
                        updateStyle("secondary-foreground", color)
                      }
                      label="Secondary Foreground"
                      highlighted={highlightedColor === "secondary-foreground"}
                      infoButton={
                        <ColorInfoButton colorKey="secondary-foreground" />
                      }
                    />
                  </ControlSection>

                  <ControlSection
                    title="Accent Colors"
                    open={openSections.accent}
                    onOpenChange={(open) =>
                      setOpenSections((prev) => ({ ...prev, accent: open }))
                    }
                  >
                    <ColorPicker
                      name="accent"
                      color={currentStyles.accent}
                      onChange={(color) => updateStyle("accent", color)}
                      label="Accent"
                      highlighted={highlightedColor === "accent"}
                      infoButton={<ColorInfoButton colorKey="accent" />}
                    />
                    <ColorPicker
                      name="accent-foreground"
                      color={currentStyles["accent-foreground"]}
                      onChange={(color) =>
                        updateStyle("accent-foreground", color)
                      }
                      label="Accent Foreground"
                      highlighted={highlightedColor === "accent-foreground"}
                      infoButton={
                        <ColorInfoButton colorKey="accent-foreground" />
                      }
                    />
                  </ControlSection>

                  <ControlSection
                    title="Base Colors"
                    open={openSections.base}
                    onOpenChange={(open) =>
                      setOpenSections((prev) => ({ ...prev, base: open }))
                    }
                  >
                    <ColorPicker
                      name="background"
                      color={currentStyles.background}
                      onChange={(color) => updateStyle("background", color)}
                      label="Background"
                      highlighted={highlightedColor === "background"}
                      infoButton={<ColorInfoButton colorKey="background" />}
                    />
                    <ColorPicker
                      name="foreground"
                      color={currentStyles.foreground}
                      onChange={(color) => updateStyle("foreground", color)}
                      label="Foreground"
                      highlighted={highlightedColor === "foreground"}
                      infoButton={<ColorInfoButton colorKey="foreground" />}
                    />
                    <ColorPicker
                      name="page"
                      color={currentStyles.page}
                      onChange={(color) => updateStyle("page", color)}
                      label="Page"
                      highlighted={highlightedColor === "page"}
                      infoButton={<ColorInfoButton colorKey="page" />}
                    />
                  </ControlSection>

                  <ControlSection
                    title="Card Colors"
                    open={openSections.card}
                    onOpenChange={(open) =>
                      setOpenSections((prev) => ({ ...prev, card: open }))
                    }
                  >
                    <ColorPicker
                      name="card"
                      color={currentStyles.card}
                      onChange={(color) => updateStyle("card", color)}
                      label="Card Background"
                      highlighted={highlightedColor === "card"}
                      infoButton={<ColorInfoButton colorKey="card" />}
                    />
                    <ColorPicker
                      name="card-foreground"
                      color={currentStyles["card-foreground"]}
                      onChange={(color) =>
                        updateStyle("card-foreground", color)
                      }
                      label="Card Foreground"
                      highlighted={highlightedColor === "card-foreground"}
                      infoButton={
                        <ColorInfoButton colorKey="card-foreground" />
                      }
                    />
                  </ControlSection>

                  <ControlSection
                    title="Popover Colors"
                    open={openSections.popover}
                    onOpenChange={(open) =>
                      setOpenSections((prev) => ({ ...prev, popover: open }))
                    }
                  >
                    <ColorPicker
                      name="popover"
                      color={currentStyles.popover}
                      onChange={(color) => updateStyle("popover", color)}
                      label="Popover Background"
                      highlighted={highlightedColor === "popover"}
                      infoButton={<ColorInfoButton colorKey="popover" />}
                    />
                    <ColorPicker
                      name="popover-foreground"
                      color={currentStyles["popover-foreground"]}
                      onChange={(color) =>
                        updateStyle("popover-foreground", color)
                      }
                      label="Popover Foreground"
                      highlighted={highlightedColor === "popover-foreground"}
                      infoButton={
                        <ColorInfoButton colorKey="popover-foreground" />
                      }
                    />
                  </ControlSection>

                  <ControlSection
                    title="Muted Colors"
                    open={openSections.muted}
                    onOpenChange={(open) =>
                      setOpenSections((prev) => ({ ...prev, muted: open }))
                    }
                  >
                    <ColorPicker
                      name="muted"
                      color={currentStyles.muted}
                      onChange={(color) => updateStyle("muted", color)}
                      label="Muted"
                      highlighted={highlightedColor === "muted"}
                      infoButton={<ColorInfoButton colorKey="muted" />}
                    />
                    <ColorPicker
                      name="muted-foreground"
                      color={currentStyles["muted-foreground"]}
                      onChange={(color) =>
                        updateStyle("muted-foreground", color)
                      }
                      label="Muted Foreground"
                      highlighted={highlightedColor === "muted-foreground"}
                      infoButton={
                        <ColorInfoButton colorKey="muted-foreground" />
                      }
                    />
                  </ControlSection>

                  <ControlSection
                    title="Destructive Colors"
                    open={openSections.destructive}
                    onOpenChange={(open) =>
                      setOpenSections((prev) => ({
                        ...prev,
                        destructive: open,
                      }))
                    }
                  >
                    <ColorPicker
                      name="destructive"
                      color={currentStyles.destructive}
                      onChange={(color) => updateStyle("destructive", color)}
                      label="Destructive"
                      highlighted={highlightedColor === "destructive"}
                      infoButton={<ColorInfoButton colorKey="destructive" />}
                    />
                    <ColorPicker
                      name="destructive-foreground"
                      color={currentStyles["destructive-foreground"]}
                      onChange={(color) =>
                        updateStyle("destructive-foreground", color)
                      }
                      label="Destructive Foreground"
                      highlighted={
                        highlightedColor === "destructive-foreground"
                      }
                      infoButton={
                        <ColorInfoButton colorKey="destructive-foreground" />
                      }
                    />
                  </ControlSection>

                  <ControlSection
                    title="Border & Input"
                    open={openSections.border}
                    onOpenChange={(open) =>
                      setOpenSections((prev) => ({ ...prev, border: open }))
                    }
                  >
                    <ColorPicker
                      name="border"
                      color={currentStyles.border}
                      onChange={(color) => updateStyle("border", color)}
                      label="Border"
                      highlighted={highlightedColor === "border"}
                      infoButton={<ColorInfoButton colorKey="border" />}
                    />
                    <ColorPicker
                      name="input"
                      color={currentStyles.input}
                      onChange={(color) => updateStyle("input", color)}
                      label="Input"
                      highlighted={highlightedColor === "input"}
                      infoButton={<ColorInfoButton colorKey="input" />}
                    />
                    <ColorPicker
                      name="ring"
                      color={currentStyles.ring}
                      onChange={(color) => updateStyle("ring", color)}
                      label="Ring"
                      highlighted={highlightedColor === "ring"}
                      infoButton={<ColorInfoButton colorKey="ring" />}
                    />
                  </ControlSection>

                  <ControlSection
                    title="Chart Colors"
                    open={openSections.chart}
                    onOpenChange={(open) =>
                      setOpenSections((prev) => ({ ...prev, chart: open }))
                    }
                  >
                    <ColorPicker
                      name="chart-1"
                      color={currentStyles["chart-1"]}
                      onChange={(color) => updateStyle("chart-1", color)}
                      label="Chart 1"
                      highlighted={highlightedColor === "chart-1"}
                      infoButton={<ColorInfoButton colorKey="chart-1" />}
                    />
                    <ColorPicker
                      name="chart-2"
                      color={currentStyles["chart-2"]}
                      onChange={(color) => updateStyle("chart-2", color)}
                      label="Chart 2"
                      highlighted={highlightedColor === "chart-2"}
                      infoButton={<ColorInfoButton colorKey="chart-2" />}
                    />
                    <ColorPicker
                      name="chart-3"
                      color={currentStyles["chart-3"]}
                      onChange={(color) => updateStyle("chart-3", color)}
                      label="Chart 3"
                      highlighted={highlightedColor === "chart-3"}
                      infoButton={<ColorInfoButton colorKey="chart-3" />}
                    />
                    <ColorPicker
                      name="chart-4"
                      color={currentStyles["chart-4"]}
                      onChange={(color) => updateStyle("chart-4", color)}
                      label="Chart 4"
                      highlighted={highlightedColor === "chart-4"}
                      infoButton={<ColorInfoButton colorKey="chart-4" />}
                    />
                    <ColorPicker
                      name="chart-5"
                      color={currentStyles["chart-5"]}
                      onChange={(color) => updateStyle("chart-5", color)}
                      label="Chart 5"
                      highlighted={highlightedColor === "chart-5"}
                      infoButton={<ColorInfoButton colorKey="chart-5" />}
                    />
                  </ControlSection>

                  <ControlSection
                    title="Sidebar Colors"
                    open={openSections.sidebar}
                    onOpenChange={(open) =>
                      setOpenSections((prev) => ({ ...prev, sidebar: open }))
                    }
                  >
                    <ColorPicker
                      name="sidebar"
                      color={currentStyles.sidebar}
                      onChange={(color) => updateStyle("sidebar", color)}
                      label="Sidebar Background"
                      highlighted={highlightedColor === "sidebar"}
                      infoButton={<ColorInfoButton colorKey="sidebar" />}
                    />
                    <ColorPicker
                      name="sidebar-foreground"
                      color={currentStyles["sidebar-foreground"]}
                      onChange={(color) =>
                        updateStyle("sidebar-foreground", color)
                      }
                      label="Sidebar Foreground"
                      highlighted={highlightedColor === "sidebar-foreground"}
                      infoButton={
                        <ColorInfoButton colorKey="sidebar-foreground" />
                      }
                    />
                    <ColorPicker
                      name="sidebar-primary"
                      color={currentStyles["sidebar-primary"]}
                      onChange={(color) =>
                        updateStyle("sidebar-primary", color)
                      }
                      label="Sidebar Primary"
                      highlighted={highlightedColor === "sidebar-primary"}
                      infoButton={
                        <ColorInfoButton colorKey="sidebar-primary" />
                      }
                    />
                    <ColorPicker
                      name="sidebar-primary-foreground"
                      color={currentStyles["sidebar-primary-foreground"]}
                      onChange={(color) =>
                        updateStyle("sidebar-primary-foreground", color)
                      }
                      label="Sidebar Primary Foreground"
                      highlighted={
                        highlightedColor === "sidebar-primary-foreground"
                      }
                      infoButton={
                        <ColorInfoButton colorKey="sidebar-primary-foreground" />
                      }
                    />
                    <ColorPicker
                      name="sidebar-accent"
                      color={currentStyles["sidebar-accent"]}
                      onChange={(color) => updateStyle("sidebar-accent", color)}
                      label="Sidebar Accent"
                      highlighted={highlightedColor === "sidebar-accent"}
                      infoButton={<ColorInfoButton colorKey="sidebar-accent" />}
                    />
                    <ColorPicker
                      name="sidebar-accent-foreground"
                      color={currentStyles["sidebar-accent-foreground"]}
                      onChange={(color) =>
                        updateStyle("sidebar-accent-foreground", color)
                      }
                      label="Sidebar Accent Foreground"
                      highlighted={
                        highlightedColor === "sidebar-accent-foreground"
                      }
                      infoButton={
                        <ColorInfoButton colorKey="sidebar-accent-foreground" />
                      }
                    />
                    <ColorPicker
                      name="sidebar-border"
                      color={currentStyles["sidebar-border"]}
                      onChange={(color) => updateStyle("sidebar-border", color)}
                      label="Sidebar Border"
                      highlighted={highlightedColor === "sidebar-border"}
                      infoButton={<ColorInfoButton colorKey="sidebar-border" />}
                    />
                    <ColorPicker
                      name="sidebar-ring"
                      color={currentStyles["sidebar-ring"]}
                      onChange={(color) => updateStyle("sidebar-ring", color)}
                      label="Sidebar Ring"
                      highlighted={highlightedColor === "sidebar-ring"}
                      infoButton={<ColorInfoButton colorKey="sidebar-ring" />}
                    />
                  </ControlSection>

                  <ControlSection title="Radius">
                    <SliderWithInput
                      value={radius}
                      onChange={(value) => updateStyle("radius", `${value}rem`)}
                      min={0}
                      max={2}
                      step={0.025}
                      unit="rem"
                      label="Border Radius"
                    />
                  </ControlSection>
                </div>
              </ToolLayoutTabsContent>

              <ToolLayoutTabsContent value="saved" scrollable={false}>
                {!isHydrated ? (
                  <div className="space-y-2">
                    {[1, 2, 3].map((i) => (
                      <Skeleton key={i} className="h-12 w-full rounded-lg" />
                    ))}
                  </div>
                ) : (
                  <SavedItemsList
                    items={savedThemes}
                    onLoad={loadTheme}
                    onRename={renameTheme}
                    onDelete={deleteTheme}
                    emptyIcon={<ThemeIcon className="text-brand size-40" />}
                    emptyText="No saved themes yet"
                    emptySubtext="Click the save button to save your current theme"
                    renderPreview={(theme) => (
                      <div className="flex -space-x-1.5">
                        <ColorBox color={theme.styles[currentMode].brand} />
                        <ColorBox
                          color={
                            theme.styles[currentMode]["brand-complementary"]
                          }
                        />
                        <ColorBox color={theme.styles[currentMode].primary} />
                      </div>
                    )}
                    className="h-full"
                  />
                )}
              </ToolLayoutTabsContent>

              <ToolLayoutTabsContent value="export">
                <div className="space-y-2">
                  <Select
                    value={colorFormat}
                    onValueChange={(v) =>
                      setColorFormat(v as "oklch" | "hsl" | "hex")
                    }
                  >
                    <SelectTrigger className="bg-background hover:bg-background h-7 w-24 text-xs shadow-2xs">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="oklch">oklch</SelectItem>
                      <SelectItem value="hsl">hsl</SelectItem>
                      <SelectItem value="hex">hex</SelectItem>
                    </SelectContent>
                  </Select>
                  <CodeBlock
                    code={generatedCSS}
                    language="css"
                    filename="index.css"
                    height={120}
                  />
                  <CodeBlock
                    code={generatedTailwind}
                    language="css"
                    filename="tailwind v4"
                    height={120}
                  />
                </div>

                <div className="space-y-2 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-7 gap-1 text-xs"
                    onClick={() => {
                      const json = generateFigmaColorVariables(
                        currentStyles as unknown as Record<string, string>
                      )
                      const blob = new Blob([json], {
                        type: "application/json",
                      })
                      const url = URL.createObjectURL(blob)
                      const a = document.createElement("a")
                      a.href = url
                      a.download = "figma-colors.json"
                      document.body.appendChild(a)
                      a.click()
                      document.body.removeChild(a)
                      URL.revokeObjectURL(url)
                    }}
                  >
                    <Download className="size-3" />
                    Download Figma JSON
                  </Button>
                  <CodeBlock
                    code={generateFigmaColorVariables(
                      currentStyles as unknown as Record<string, string>
                    )}
                    language="json"
                    filename="figma-colors.json"
                    height={120}
                  />
                </div>
              </ToolLayoutTabsContent>

              <ToolLayoutTabsContent value="explore" scrollable={false}>
                <div className="flex h-full flex-col items-center justify-center">
                  <Deck className="h-80 w-full max-w-xs">
                    <DeckCards
                      currentIndex={deckIndex}
                      onCurrentIndexChange={(index) => {
                        setDeckIndex(index)
                        if (presetKeys[index]) {
                          applyPreset(presetKeys[index])
                        }
                      }}
                    >
                      {Object.entries(presets).map(([key, preset]) => {
                        const styles =
                          currentMode === "dark"
                            ? preset.styles.dark
                            : preset.styles.light
                        const colorStrips = [
                          {
                            key: "brand",
                            label: "brand",
                            fg: styles.background,
                          },
                          {
                            key: "brand-complementary",
                            label: "complementary",
                            fg: styles.background,
                          },
                          {
                            key: "primary",
                            label: "primary",
                            fg: styles["primary-foreground"],
                          },
                          {
                            key: "secondary",
                            label: "secondary",
                            fg: styles["secondary-foreground"],
                          },
                          {
                            key: "muted",
                            label: "muted",
                            fg: styles["muted-foreground"],
                          },
                          {
                            key: "card",
                            label: "card",
                            fg: styles["card-foreground"],
                          },
                        ]
                        return (
                          <DeckItem
                            key={key}
                            className="overflow-hidden rounded-[32px] p-0 shadow-sm"
                          >
                            <div
                              className="relative flex size-full flex-col gap-1 p-2"
                              style={{ backgroundColor: styles.background }}
                            >
                              {/* Psychology info button */}
                              <ThemePsychologyButton
                                themeKey={key}
                                styles={styles}
                              />
                              {/* Color strips */}
                              <div className="flex flex-1 flex-col overflow-hidden rounded-t-[24px]">
                                {colorStrips.map((color) => (
                                  <div
                                    key={color.key}
                                    className="flex flex-1 items-end px-2 pb-0.5"
                                    style={{
                                      backgroundColor:
                                        styles[
                                          color.key as keyof typeof styles
                                        ],
                                    }}
                                  >
                                    <span
                                      className="text-[8px] font-medium lowercase"
                                      style={{ color: color.fg }}
                                    >
                                      {color.label}
                                    </span>
                                  </div>
                                ))}
                              </div>
                              {/* Label */}
                              <div className="flex justify-center px-1">
                                <div className="flex items-center gap-2">
                                  <div className="flex -space-x-1.5">
                                    <div
                                      className="border-background ring-border/50 size-5 rounded-full border ring-1"
                                      style={{ backgroundColor: styles.brand }}
                                    />
                                    <div
                                      className="border-background ring-border/50 size-5 rounded-full border ring-1"
                                      style={{
                                        backgroundColor:
                                          styles["brand-complementary"],
                                      }}
                                    />
                                  </div>
                                  <div className="-space-y-0.5">
                                    <h3
                                      className="text-sm leading-none font-semibold tracking-tight"
                                      style={{ color: styles.foreground }}
                                    >
                                      {preset.label}
                                    </h3>
                                    <p
                                      className="text-[10px]"
                                      style={{
                                        color: styles["muted-foreground"],
                                      }}
                                    >
                                      color palette
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </DeckItem>
                        )
                      })}
                    </DeckCards>
                    <DeckEmpty>
                      <div className="text-center">
                        <p className="text-sm font-medium">
                          All themes explored!
                        </p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-2"
                          onClick={() => {
                            setDeckIndex(0)
                            if (presetKeys[0]) {
                              applyPreset(presetKeys[0])
                            }
                          }}
                        >
                          <RotateCcw className="mr-1.5 size-3.5" />
                          Start over
                        </Button>
                      </div>
                    </DeckEmpty>
                  </Deck>
                  {/* Navigation buttons */}
                  {deckIndex < presetKeys.length && (
                    <div className="mt-6 flex items-center gap-3">
                      <TooltipProvider delayDuration={0}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="outline"
                              size="icon"
                              className="size-12 rounded-full shadow-none"
                              disabled={deckIndex === 0}
                              onClick={() => {
                                const prevIndex = deckIndex - 1
                                setDeckIndex(prevIndex)
                                if (presetKeys[prevIndex]) {
                                  applyPreset(presetKeys[prevIndex])
                                }
                              }}
                            >
                              <RotateCcw className="size-5" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>Back</TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <TooltipProvider delayDuration={0}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="outline"
                              size="icon"
                              className="size-12 rounded-full shadow-none"
                              disabled={deckIndex >= presetKeys.length}
                              onClick={() => {
                                const newIndex = deckIndex + 1
                                setDeckIndex(newIndex)
                                if (presetKeys[newIndex]) {
                                  applyPreset(presetKeys[newIndex])
                                }
                              }}
                            >
                              <Redo2 className="size-5" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>Next</TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  )}
                </div>
              </ToolLayoutTabsContent>
            </ToolLayoutTabs>
          </ToolLayoutCard>
        </ToolLayoutSidebar>

        {/* Preview - Remaining 4 columns */}
        <ToolLayoutPreview>
          <ToolLayoutPreviewHeader>
            <div className="flex items-center gap-1.5">
              <ToolLayoutPreviewTitle>Preview</ToolLayoutPreviewTitle>
              <TooltipProvider delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      className="h-auto gap-1.5 px-1 py-0.5"
                      onClick={() => setInspectorEnabled(!inspectorEnabled)}
                    >
                      <span
                        className={cn(
                          "text-sm font-medium tracking-wider uppercase",
                          inspectorEnabled
                            ? "text-brand"
                            : "text-muted-foreground"
                        )}
                      >
                        Inspector
                      </span>
                      <Inspect
                        className={cn(
                          "size-3.5",
                          inspectorEnabled
                            ? "text-brand"
                            : "text-muted-foreground"
                        )}
                      />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    {inspectorEnabled
                      ? "Disable inspector"
                      : "Enable inspector"}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <PreviewNavigation
              items={previewBlocks.map((block) => ({
                key: block.value,
                label: block.label,
              }))}
              value={selectedBlock}
              onValueChange={(v) =>
                setSelectedBlock(v as (typeof previewBlockValues)[number])
              }
            />
          </ToolLayoutPreviewHeader>

          {/* Block Preview - Live Render */}
          <ToolLayoutPreviewContent
            className={cn(
              inspectorEnabled && "ring-brand/50 border-transparent ring-2"
            )}
          >
            <LiveBlockPreview
              key={selectedBlock}
              blockName={selectedBlock}
              themeStyles={currentStyles}
              isDark={currentMode === "dark"}
              inspectorEnabled={inspectorEnabled}
              onColorClick={handleInspectorColorClick}
            />
          </ToolLayoutPreviewContent>
        </ToolLayoutPreview>
      </ToolLayoutContainer>
    </ToolLayout>
  )
}
