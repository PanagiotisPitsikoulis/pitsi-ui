# Lucide to Hugeicons Migration Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace all lucide-react icons with hugeicons throughout the codebase and remove the lucide-react dependency.

**Architecture:** Create a compatibility layer that wraps hugeicons with the same API as lucide-react, then systematically replace imports across 211 files. The wrapper approach minimizes breaking changes and allows gradual migration.

**Tech Stack:** @hugeicons/react, @hugeicons/core-free-icons, TypeScript

---

## Migration Overview

| Category | Files | Priority |
|----------|-------|----------|
| UI Components (`registry/new-york-v4/ui`) | 22 | High - core components |
| Blocks (`registry/new-york-v4/blocks`) | 16 | High - shipped to users |
| Examples (`registry/new-york-v4/examples`) | 66 | Medium - demos |
| Marketing (`app/(app)/(marketing)`) | 21 | Medium |
| Tools (`app/(app)/(tools)`) | 14 | Low |
| Internal (`registry/new-york-v4/internal`) | 12 | Low |
| Other scattered files | ~60 | Mixed |

## Unique Icons to Map (~130)

```
AlertCircle, ArrowDown, ArrowLeft, ArrowRight, ArrowUp, ArrowUpCircle,
ArrowUpDown, ArrowUpRight, Bell, Blocks, Bold, Bookmark, BookOpen, Bot,
Calendar, Camera, ChartPie, Check, CheckCircle, ChevronDown, ChevronLeft,
ChevronRight, ChevronsUpDown, ChevronUp, CircleDashed, CircleIcon, Clock,
Code2, Copy, CornerDownLeft, Cpu, CreditCard, Database, Download, Dumbbell,
ExternalLink, Eye, File, FileCode, FileText, Flame, Folder, FolderOpen,
Frame, Globe, GripVertical, Heart, HelpCircle, Home, Inbox, Info, Inspect,
Italic, Key, Layers, Layers2, Layout, LayoutDashboard, LayoutGrid, Leaf,
Link2Icon, List, Loader2, Lock, LogIn, LogOut, Mail, Map, Maximize,
MessageSquare, Minus, Monitor, Moon, MoreHorizontal, MoreVertical, OctagonX,
Palette, PanelLeftIcon, Pencil, PieChart, PipetteIcon, Play, Plus, Radio,
RotateCcw, Save, Search, Server, Settings, Settings2, Share2, Shuffle,
SlidersHorizontal, Smartphone, Sparkles, SquarePen, Star, Sun, Target,
Terminal, Timer, Trash2, TrendingUp, TriangleAlert, Trophy, Underline,
Upload, User, Users, Wand2, Weight, X, XCircle, Zap
```

---

## Task 1: Install Hugeicons Packages

**Files:**
- Modify: `package.json`

**Step 1: Install hugeicons packages**

Run:
```bash
bun add @hugeicons/react @hugeicons/core-free-icons
```

Expected: Packages added to dependencies

**Step 2: Verify installation**

Run:
```bash
bun run typecheck 2>&1 | head -5
```

Expected: No new errors related to hugeicons

**Step 3: Commit**

```bash
git add package.json bun.lockb
git commit -m "$(cat <<'EOF'
chore: add hugeicons packages

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>
EOF
)"
```

---

## Task 2: Create Icon Mapping File

**Files:**
- Create: `lib/icons/icon-mapping.ts`

**Step 1: Create the mapping file**

Create `lib/icons/icon-mapping.ts`:

```typescript
/**
 * Mapping from Lucide icon names to Hugeicons equivalents
 *
 * Naming convention:
 * - Lucide: PascalCase (e.g., ArrowRight, ChevronDown)
 * - Hugeicons: PascalCase with numeric suffix (e.g., ArrowRight01Icon, ArrowDown01Icon)
 */

// Import all hugeicons we need
import {
  AlertCircleIcon,
  ArrowDown01Icon,
  ArrowLeft01Icon,
  ArrowRight01Icon,
  ArrowUp01Icon,
  ArrowUpCircleIcon,
  ArrowMoveUpDownIcon,
  ArrowUpRight01Icon,
  Notification01Icon,
  BlocksIcon,
  TextBoldIcon,
  Bookmark01Icon,
  Book01Icon,
  AiBrainIcon,
  Calendar01Icon,
  Camera01Icon,
  PieChart01Icon,
  Tick01Icon,
  CheckmarkCircle01Icon,
  ArrowDown01Icon as ChevronDownIcon,
  ArrowLeft01Icon as ChevronLeftIcon,
  ArrowRight01Icon as ChevronRightIcon,
  ArrowUp01Icon as ChevronUpIcon,
  UnfoldMoreIcon,
  Circle01Icon,
  DashboardCircleIcon,
  Clock01Icon,
  Code01Icon,
  Copy01Icon,
  CornerDownLeftIcon,
  Cpu01Icon,
  CreditCard01Icon,
  Database01Icon,
  Download01Icon,
  Dumbbell01Icon,
  LinkExternal01Icon,
  Eye01Icon,
  File01Icon,
  FileCode01Icon,
  FileTextIcon,
  Flame01Icon,
  Folder01Icon,
  FolderOpen01Icon,
  GridViewIcon,
  Globe01Icon,
  DragDropIcon,
  Heart01Icon,
  HelpCircleIcon,
  Home01Icon,
  Mail01Icon as InboxIcon,
  InformationCircleIcon,
  Search01Icon as InspectIcon,
  TextItalicIcon,
  Key01Icon,
  Layers01Icon,
  LayersIcon,
  Layout01Icon,
  DashboardSquare01Icon,
  GridIcon,
  Leaf01Icon,
  Link01Icon,
  ListViewIcon,
  Loading01Icon,
  Lock01Icon,
  Login01Icon,
  Logout01Icon,
  Mail01Icon,
  Map01Icon,
  Maximize01Icon,
  Message01Icon,
  Minus01Icon,
  Monitor01Icon,
  Moon01Icon,
  MoreHorizontalIcon,
  MoreVerticalIcon,
  StopIcon,
  Colour01Icon,
  Sidebar01Icon,
  Pencil01Icon,
  PieChartIcon,
  Pipette01Icon,
  Play01Icon,
  Add01Icon,
  Radio01Icon,
  ArrowReloadHorizontalIcon,
  Save01Icon,
  Search01Icon,
  Server01Icon,
  Settings01Icon,
  Settings02Icon,
  Share01Icon,
  Shuffle01Icon,
  HorizontalResizeIcon,
  Smartphone01Icon,
  SparklesIcon,
  Edit01Icon,
  Star01Icon,
  Sun01Icon,
  Target01Icon,
  Terminal01Icon,
  Timer01Icon,
  Delete01Icon,
  TrendingUp01Icon,
  Alert01Icon,
  Trophy01Icon,
  TextUnderlineIcon,
  Upload01Icon,
  User01Icon,
  UserGroup01Icon,
  MagicWand01Icon,
  WeightScale01Icon,
  Cancel01Icon,
  XCircleIcon,
  Zap01Icon,
} from "@hugeicons/core-free-icons"

export const iconMapping = {
  // Alert/Warning
  AlertCircle: AlertCircleIcon,
  AlertCircleIcon: AlertCircleIcon,
  TriangleAlert: Alert01Icon,
  OctagonX: StopIcon,

  // Arrows
  ArrowDown: ArrowDown01Icon,
  ArrowLeft: ArrowLeft01Icon,
  ArrowRight: ArrowRight01Icon,
  ArrowUp: ArrowUp01Icon,
  ArrowUpCircle: ArrowUpCircleIcon,
  ArrowUpDown: ArrowMoveUpDownIcon,
  ArrowUpRight: ArrowUpRight01Icon,

  // Chevrons
  ChevronDown: ArrowDown01Icon,
  ChevronDownIcon: ArrowDown01Icon,
  ChevronLeft: ArrowLeft01Icon,
  ChevronLeftIcon: ArrowLeft01Icon,
  ChevronRight: ArrowRight01Icon,
  ChevronRightIcon: ArrowRight01Icon,
  ChevronUp: ArrowUp01Icon,
  ChevronUpIcon: ArrowUp01Icon,
  ChevronsUpDown: UnfoldMoreIcon,

  // Common UI
  Bell: Notification01Icon,
  Blocks: BlocksIcon,
  Bold: TextBoldIcon,
  Bookmark: Bookmark01Icon,
  BookmarkIcon: Bookmark01Icon,
  BookOpen: Book01Icon,
  Bot: AiBrainIcon,
  BotIcon: AiBrainIcon,
  Calendar: Calendar01Icon,
  Camera: Camera01Icon,
  ChartPie: PieChart01Icon,
  Check: Tick01Icon,
  CheckCircle: CheckmarkCircle01Icon,
  CheckCircle2Icon: CheckmarkCircle01Icon,
  CircleCheckIcon: CheckmarkCircle01Icon,
  CircleDashed: DashboardCircleIcon,
  CircleHelpIcon: HelpCircleIcon,
  CircleIcon: Circle01Icon,
  Clock: Clock01Icon,
  Code2: Code01Icon,
  Copy: Copy01Icon,
  CornerDownLeft: CornerDownLeftIcon,
  Cpu: Cpu01Icon,
  CreditCard: CreditCard01Icon,
  Database: Database01Icon,
  Download: Download01Icon,
  Dumbbell: Dumbbell01Icon,

  // Links/External
  ExternalLink: LinkExternal01Icon,
  ExternalLinkIcon: LinkExternal01Icon,
  Link2Icon: Link01Icon,

  // View/Display
  Eye: Eye01Icon,

  // Files
  File: File01Icon,
  FileCode: FileCode01Icon,
  FileText: FileTextIcon,
  Folder: Folder01Icon,
  FolderOpen: FolderOpen01Icon,

  // Layout
  Frame: GridViewIcon,
  Globe: Globe01Icon,
  GripVertical: DragDropIcon,
  GripVerticalIcon: DragDropIcon,

  // Social/Engagement
  Heart: Heart01Icon,
  HelpCircle: HelpCircleIcon,
  Home: Home01Icon,
  Inbox: InboxIcon,
  Info: InformationCircleIcon,
  InfoIcon: InformationCircleIcon,
  Inspect: InspectIcon,

  // Text Formatting
  Italic: TextItalicIcon,
  Underline: TextUnderlineIcon,

  // Security
  Key: Key01Icon,
  Lock: Lock01Icon,

  // Layers/Layout
  Layers: Layers01Icon,
  Layers2: LayersIcon,
  Layout: Layout01Icon,
  LayoutDashboard: DashboardSquare01Icon,
  LayoutGrid: GridIcon,

  // Nature
  Flame: Flame01Icon,
  Leaf: Leaf01Icon,

  // Lists
  List: ListViewIcon,

  // Loading
  Loader2: Loading01Icon,
  Loader2Icon: Loading01Icon,
  LoaderIcon: Loading01Icon,

  // Auth
  LogIn: Login01Icon,
  LogOut: Logout01Icon,

  // Communication
  Mail: Mail01Icon,
  MessageSquare: Message01Icon,

  // Navigation/Location
  Map: Map01Icon,
  Maximize: Maximize01Icon,

  // Math
  Minus: Minus01Icon,
  Plus: Add01Icon,

  // Devices
  Monitor: Monitor01Icon,
  Smartphone: Smartphone01Icon,

  // Theme
  Moon: Moon01Icon,
  Sun: Sun01Icon,

  // Menu
  MoreHorizontal: MoreHorizontalIcon,
  MoreVertical: MoreVerticalIcon,

  // Tools
  Palette: Colour01Icon,
  PanelLeftIcon: Sidebar01Icon,
  Pencil: Pencil01Icon,
  PieChart: PieChartIcon,
  PipetteIcon: Pipette01Icon,

  // Media
  Play: Play01Icon,

  // Actions
  Radio: Radio01Icon,
  RefreshCcwIcon: ArrowReloadHorizontalIcon,
  RotateCcw: ArrowReloadHorizontalIcon,
  Save: Save01Icon,
  Search: Search01Icon,
  SearchIcon: Search01Icon,

  // Server
  Server: Server01Icon,

  // Settings
  Settings: Settings01Icon,
  Settings2: Settings02Icon,
  SlidersHorizontal: HorizontalResizeIcon,

  // Share
  Share2: Share01Icon,
  Shuffle: Shuffle01Icon,

  // Effects
  Sparkles: SparklesIcon,

  // Edit
  SquarePen: Edit01Icon,

  // Rating
  Star: Star01Icon,

  // Goals
  Target: Target01Icon,

  // Terminal
  Terminal: Terminal01Icon,

  // Time
  Timer: Timer01Icon,

  // Delete
  Trash2: Delete01Icon,

  // Trends
  TrendingUp: TrendingUp01Icon,

  // Achievement
  Trophy: Trophy01Icon,

  // Upload
  Upload: Upload01Icon,

  // Users
  User: User01Icon,
  Users: UserGroup01Icon,

  // Magic
  Wand2: MagicWand01Icon,

  // Fitness
  Weight: WeightScale01Icon,

  // Close
  X: Cancel01Icon,
  XIcon: Cancel01Icon,
  XCircle: XCircleIcon,

  // Power
  Zap: Zap01Icon,

  // Misc
  BadgeCheckIcon: CheckmarkCircle01Icon,
  BadgeDollarSign: CreditCard01Icon,
  LifeBuoyIcon: HelpCircleIcon,
  PopcornIcon: Play01Icon,
  SendIcon: ArrowUpRight01Icon,
  ShieldAlertIcon: Alert01Icon,
  SlashIcon: Minus01Icon,
} as const

export type IconName = keyof typeof iconMapping
```

**Step 2: Verify file compiles**

Run:
```bash
bun run typecheck lib/icons/icon-mapping.ts 2>&1 | head -20
```

Expected: File compiles or shows import errors (we'll fix these as we discover actual hugeicons names)

**Step 3: Commit**

```bash
git add lib/icons/icon-mapping.ts
git commit -m "$(cat <<'EOF'
feat: add lucide to hugeicons mapping file

Maps ~130 Lucide icon names to their Hugeicons equivalents.

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>
EOF
)"
```

---

## Task 3: Create Icon Wrapper Component

**Files:**
- Create: `lib/icons/icon.tsx`

**Step 1: Create the wrapper component**

Create `lib/icons/icon.tsx`:

```typescript
"use client"

import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import type { IconSvgElement } from "@hugeicons/react"

import { iconMapping, type IconName } from "./icon-mapping"

export interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: number | string
  strokeWidth?: number
  absoluteStrokeWidth?: boolean
}

/**
 * Icon component that wraps Hugeicons with Lucide-compatible API
 *
 * Usage:
 *   import { ArrowRight } from "@/lib/icons"
 *   <ArrowRight className="size-4" />
 */
function createIcon(name: IconName) {
  const hugeicon = iconMapping[name]

  const Icon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, strokeWidth = 1.5, ...props }, ref) => {
      // Extract size from className if using Tailwind size-* classes
      let computedSize = size
      if (!computedSize && className) {
        const sizeMatch = className.match(/\bsize-(\d+(?:\.\d+)?)\b/)
        if (sizeMatch) {
          // Convert Tailwind size to pixels (size-4 = 16px, size-5 = 20px, etc.)
          computedSize = parseFloat(sizeMatch[1]) * 4
        }
      }

      return (
        <HugeiconsIcon
          ref={ref}
          icon={hugeicon as IconSvgElement}
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

// Export all icons with Lucide-compatible names
export const AlertCircle = createIcon("AlertCircle")
export const AlertCircleIcon = createIcon("AlertCircleIcon")
export const ArrowDown = createIcon("ArrowDown")
export const ArrowLeft = createIcon("ArrowLeft")
export const ArrowRight = createIcon("ArrowRight")
export const ArrowUp = createIcon("ArrowUp")
export const ArrowUpCircle = createIcon("ArrowUpCircle")
export const ArrowUpDown = createIcon("ArrowUpDown")
export const ArrowUpRight = createIcon("ArrowUpRight")
export const BadgeCheckIcon = createIcon("BadgeCheckIcon")
export const BadgeDollarSign = createIcon("BadgeDollarSign")
export const Bell = createIcon("Bell")
export const Blocks = createIcon("Blocks")
export const Bold = createIcon("Bold")
export const Bookmark = createIcon("Bookmark")
export const BookmarkIcon = createIcon("BookmarkIcon")
export const BookOpen = createIcon("BookOpen")
export const Bot = createIcon("Bot")
export const BotIcon = createIcon("BotIcon")
export const Calendar = createIcon("Calendar")
export const Camera = createIcon("Camera")
export const ChartPie = createIcon("ChartPie")
export const Check = createIcon("Check")
export const CheckCircle = createIcon("CheckCircle")
export const CheckCircle2Icon = createIcon("CheckCircle2Icon")
export const ChevronDown = createIcon("ChevronDown")
export const ChevronDownIcon = createIcon("ChevronDownIcon")
export const ChevronLeft = createIcon("ChevronLeft")
export const ChevronLeftIcon = createIcon("ChevronLeftIcon")
export const ChevronRight = createIcon("ChevronRight")
export const ChevronRightIcon = createIcon("ChevronRightIcon")
export const ChevronsUpDown = createIcon("ChevronsUpDown")
export const ChevronUp = createIcon("ChevronUp")
export const ChevronUpIcon = createIcon("ChevronUpIcon")
export const CircleCheckIcon = createIcon("CircleCheckIcon")
export const CircleDashed = createIcon("CircleDashed")
export const CircleHelpIcon = createIcon("CircleHelpIcon")
export const CircleIcon = createIcon("CircleIcon")
export const Clock = createIcon("Clock")
export const Code2 = createIcon("Code2")
export const Copy = createIcon("Copy")
export const CornerDownLeft = createIcon("CornerDownLeft")
export const Cpu = createIcon("Cpu")
export const CreditCard = createIcon("CreditCard")
export const Database = createIcon("Database")
export const Download = createIcon("Download")
export const Dumbbell = createIcon("Dumbbell")
export const ExternalLink = createIcon("ExternalLink")
export const ExternalLinkIcon = createIcon("ExternalLinkIcon")
export const Eye = createIcon("Eye")
export const File = createIcon("File")
export const FileCode = createIcon("FileCode")
export const FileText = createIcon("FileText")
export const Flame = createIcon("Flame")
export const Folder = createIcon("Folder")
export const FolderOpen = createIcon("FolderOpen")
export const Frame = createIcon("Frame")
export const Globe = createIcon("Globe")
export const GripVertical = createIcon("GripVertical")
export const GripVerticalIcon = createIcon("GripVerticalIcon")
export const Heart = createIcon("Heart")
export const HelpCircle = createIcon("HelpCircle")
export const Home = createIcon("Home")
export const Inbox = createIcon("Inbox")
export const Info = createIcon("Info")
export const InfoIcon = createIcon("InfoIcon")
export const Inspect = createIcon("Inspect")
export const Italic = createIcon("Italic")
export const Key = createIcon("Key")
export const Layers = createIcon("Layers")
export const Layers2 = createIcon("Layers2")
export const Layout = createIcon("Layout")
export const LayoutDashboard = createIcon("LayoutDashboard")
export const LayoutGrid = createIcon("LayoutGrid")
export const Leaf = createIcon("Leaf")
export const LifeBuoyIcon = createIcon("LifeBuoyIcon")
export const Link2Icon = createIcon("Link2Icon")
export const List = createIcon("List")
export const Loader2 = createIcon("Loader2")
export const Loader2Icon = createIcon("Loader2Icon")
export const LoaderIcon = createIcon("LoaderIcon")
export const Lock = createIcon("Lock")
export const LogIn = createIcon("LogIn")
export const LogOut = createIcon("LogOut")
export const Mail = createIcon("Mail")
export const Map = createIcon("Map")
export const Maximize = createIcon("Maximize")
export const MessageSquare = createIcon("MessageSquare")
export const Minus = createIcon("Minus")
export const Monitor = createIcon("Monitor")
export const Moon = createIcon("Moon")
export const MoreHorizontal = createIcon("MoreHorizontal")
export const MoreVertical = createIcon("MoreVertical")
export const OctagonX = createIcon("OctagonX")
export const Palette = createIcon("Palette")
export const PanelLeftIcon = createIcon("PanelLeftIcon")
export const Pencil = createIcon("Pencil")
export const PieChart = createIcon("PieChart")
export const PipetteIcon = createIcon("PipetteIcon")
export const Play = createIcon("Play")
export const Plus = createIcon("Plus")
export const PopcornIcon = createIcon("PopcornIcon")
export const Radio = createIcon("Radio")
export const RefreshCcwIcon = createIcon("RefreshCcwIcon")
export const RotateCcw = createIcon("RotateCcw")
export const Save = createIcon("Save")
export const Search = createIcon("Search")
export const SearchIcon = createIcon("SearchIcon")
export const SendIcon = createIcon("SendIcon")
export const Server = createIcon("Server")
export const Settings = createIcon("Settings")
export const Settings2 = createIcon("Settings2")
export const Share2 = createIcon("Share2")
export const ShieldAlertIcon = createIcon("ShieldAlertIcon")
export const Shuffle = createIcon("Shuffle")
export const SlashIcon = createIcon("SlashIcon")
export const SlidersHorizontal = createIcon("SlidersHorizontal")
export const Smartphone = createIcon("Smartphone")
export const Sparkles = createIcon("Sparkles")
export const SquarePen = createIcon("SquarePen")
export const Star = createIcon("Star")
export const Sun = createIcon("Sun")
export const Target = createIcon("Target")
export const Terminal = createIcon("Terminal")
export const Timer = createIcon("Timer")
export const Trash2 = createIcon("Trash2")
export const TrendingUp = createIcon("TrendingUp")
export const TriangleAlert = createIcon("TriangleAlert")
export const Trophy = createIcon("Trophy")
export const Underline = createIcon("Underline")
export const Upload = createIcon("Upload")
export const User = createIcon("User")
export const Users = createIcon("Users")
export const Wand2 = createIcon("Wand2")
export const Weight = createIcon("Weight")
export const X = createIcon("X")
export const XIcon = createIcon("XIcon")
export const XCircle = createIcon("XCircle")
export const Zap = createIcon("Zap")

// Type export for compatibility
export type { IconProps as LucideIcon }
export type { IconProps }
```

**Step 2: Create index export**

Create `lib/icons/index.ts`:

```typescript
export * from "./icon"
export * from "./icon-mapping"
```

**Step 3: Verify compilation**

Run:
```bash
bun run typecheck lib/icons/ 2>&1 | head -30
```

Expected: No errors or only mapping errors we'll fix

**Step 4: Commit**

```bash
git add lib/icons/
git commit -m "$(cat <<'EOF'
feat: create Hugeicons wrapper with Lucide-compatible API

Creates a compatibility layer that allows using Hugeicons with the same
API as lucide-react. Supports className, size-* Tailwind classes, and
standard props.

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>
EOF
)"
```

---

## Task 4: Update DynamicIcon Component

**Files:**
- Modify: `lib/blocks/dynamic-icon.tsx`

**Step 1: Read current file**

Read `lib/blocks/dynamic-icon.tsx` to understand current implementation.

**Step 2: Update to use new icon system**

Replace content with:

```typescript
"use client"

import * as Icons from "@/lib/icons"
import type { IconProps } from "@/lib/icons"

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
  const Icon = Icons[name as IconName] as React.ComponentType<IconProps> | undefined

  if (!Icon) {
    console.warn(`Icon "${name}" not found`)
    return null
  }

  return <Icon {...props} />
}

/**
 * Get an icon component by name
 * Returns undefined if the icon is not found
 */
export function getIcon(name: string): React.ComponentType<IconProps> | undefined {
  return Icons[name as IconName] as React.ComponentType<IconProps> | undefined
}
```

**Step 3: Verify compilation**

Run:
```bash
bun run typecheck lib/blocks/dynamic-icon.tsx 2>&1
```

Expected: PASS

**Step 4: Commit**

```bash
git add lib/blocks/dynamic-icon.tsx
git commit -m "$(cat <<'EOF'
refactor: update DynamicIcon to use new icon system

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>
EOF
)"
```

---

## Task 5: Migrate UI Components (22 files)

**Files:**
- Modify: All files in `registry/new-york-v4/ui/` that use lucide-react

**Step 1: List all UI files using lucide**

Run:
```bash
grep -l "from \"lucide-react\"" registry/new-york-v4/ui/*.tsx
```

**Step 2: For each file, replace imports**

Replace:
```typescript
import { IconName, AnotherIcon } from "lucide-react"
```

With:
```typescript
import { IconName, AnotherIcon } from "@/lib/icons"
```

**Important patterns to handle:**

1. **Simple imports** - direct replacement
2. **Type imports** - `type LucideIcon` → `type IconProps` from `@/lib/icons`
3. **Spread imports** - rare, needs special handling

**Step 3: Test each file compiles**

Run:
```bash
bun run typecheck registry/new-york-v4/ui/ 2>&1 | head -50
```

**Step 4: Commit**

```bash
git add registry/new-york-v4/ui/
git commit -m "$(cat <<'EOF'
refactor(ui): migrate UI components to hugeicons

Migrates 22 UI components from lucide-react to hugeicons wrapper.

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>
EOF
)"
```

---

## Task 6: Migrate Block Components (16 files)

**Files:**
- Modify: All files in `registry/new-york-v4/blocks/` that use lucide-react

**Step 1: List all block files using lucide**

Run:
```bash
grep -rl "from \"lucide-react\"" registry/new-york-v4/blocks/
```

**Step 2: Replace imports in each file**

Same pattern as Task 5.

**Step 3: Test compilation**

Run:
```bash
bun run typecheck registry/new-york-v4/blocks/ 2>&1 | head -50
```

**Step 4: Commit**

```bash
git add registry/new-york-v4/blocks/
git commit -m "$(cat <<'EOF'
refactor(blocks): migrate blocks to hugeicons

Migrates 16 block components from lucide-react to hugeicons wrapper.

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>
EOF
)"
```

---

## Task 7: Migrate Example Components (66 files)

**Files:**
- Modify: All files in `registry/new-york-v4/examples/` that use lucide-react

**Step 1: List all example files using lucide**

Run:
```bash
grep -rl "from \"lucide-react\"" registry/new-york-v4/examples/ | wc -l
```

**Step 2: Batch replace imports**

Use sed or manual replacement:

```bash
# Preview changes
grep -l "from \"lucide-react\"" registry/new-york-v4/examples/*.tsx | head -5

# For each file, update imports
```

**Step 3: Test compilation**

Run:
```bash
bun run typecheck registry/new-york-v4/examples/ 2>&1 | head -50
```

**Step 4: Commit**

```bash
git add registry/new-york-v4/examples/
git commit -m "$(cat <<'EOF'
refactor(examples): migrate examples to hugeicons

Migrates 66 example files from lucide-react to hugeicons wrapper.

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>
EOF
)"
```

---

## Task 8: Migrate Internal Components (12 files)

**Files:**
- Modify: All files in `registry/new-york-v4/internal/` that use lucide-react

**Step 1: List and replace**

Same pattern as previous tasks.

**Step 2: Commit**

```bash
git add registry/new-york-v4/internal/
git commit -m "$(cat <<'EOF'
refactor(internal): migrate internal components to hugeicons

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>
EOF
)"
```

---

## Task 9: Migrate Marketing Components (21 files)

**Files:**
- Modify: All files in `app/(app)/(marketing)/` that use lucide-react

**Step 1: List and replace**

Same pattern as previous tasks.

**Step 2: Handle LucideIcon type references**

Files using `LucideIcon` type need to import `IconProps` instead.

**Step 3: Commit**

```bash
git add app/\(app\)/\(marketing\)/
git commit -m "$(cat <<'EOF'
refactor(marketing): migrate marketing components to hugeicons

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>
EOF
)"
```

---

## Task 10: Migrate Tools Components (14 files)

**Files:**
- Modify: All files in `app/(app)/(tools)/` that use lucide-react

**Step 1: List and replace**

Same pattern as previous tasks.

**Step 2: Commit**

```bash
git add app/\(app\)/\(tools\)/
git commit -m "$(cat <<'EOF'
refactor(tools): migrate tools components to hugeicons

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>
EOF
)"
```

---

## Task 11: Migrate Content Components (9 files)

**Files:**
- Modify: All files in `app/(app)/(content)/` that use lucide-react

**Step 1: List and replace**

Same pattern as previous tasks.

**Step 2: Commit**

```bash
git add app/\(app\)/\(content\)/
git commit -m "$(cat <<'EOF'
refactor(content): migrate content components to hugeicons

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>
EOF
)"
```

---

## Task 12: Migrate Remaining Components (~60 files)

**Files:**
- Modify: All remaining files in `components/`, `app/dashboard/`, etc.

**Step 1: Find all remaining files**

Run:
```bash
grep -rl "from \"lucide-react\"" . --include="*.tsx" --include="*.ts" | grep -v node_modules | grep -v registry/new-york-v4
```

**Step 2: Replace imports in each file**

Group by directory and replace.

**Step 3: Special handling for icons.tsx**

Update `components/shared/icons.tsx` to import `File` from `@/lib/icons` instead of lucide-react.

**Step 4: Test full compilation**

Run:
```bash
bun run typecheck 2>&1 | grep -i lucide
```

Expected: No lucide-related errors

**Step 5: Commit**

```bash
git add .
git commit -m "$(cat <<'EOF'
refactor: migrate remaining components to hugeicons

Completes migration of all components from lucide-react to hugeicons.

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>
EOF
)"
```

---

## Task 13: Remove lucide-react Dependency

**Files:**
- Modify: `package.json`

**Step 1: Verify no lucide imports remain**

Run:
```bash
grep -r "from \"lucide-react\"" . --include="*.tsx" --include="*.ts" | grep -v node_modules | wc -l
```

Expected: 0

**Step 2: Remove lucide-react**

Run:
```bash
bun remove lucide-react
```

**Step 3: Verify build works**

Run:
```bash
bun run build 2>&1 | tail -20
```

Expected: Build succeeds

**Step 4: Commit**

```bash
git add package.json bun.lockb
git commit -m "$(cat <<'EOF'
chore: remove lucide-react dependency

Lucide has been fully replaced with Hugeicons.

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>
EOF
)"
```

---

## Task 14: Rebuild Registry

**Files:**
- Regenerate: Registry JSON files

**Step 1: Rebuild registry**

Run:
```bash
bun run registry:build
```

Expected: Build succeeds

**Step 2: Verify registry output**

Run:
```bash
grep -i lucide public/r/styles/new-york-v4/*.json | wc -l
```

Expected: 0 (no lucide references in registry)

**Step 3: Commit**

```bash
git add public/r/ registry/
git commit -m "$(cat <<'EOF'
chore: rebuild registry with hugeicons

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>
EOF
)"
```

---

## Task 15: Final Testing

**Step 1: Run full typecheck**

Run:
```bash
bun run typecheck
```

Expected: No new errors related to icons

**Step 2: Run dev server**

Run:
```bash
bun run dev
```

Expected: Server starts without icon-related errors

**Step 3: Visual verification**

Open http://localhost:4000 and verify:
- Icons render correctly
- No console errors about missing icons
- Interactive components work (dropdowns, buttons with icons)

**Step 4: Test CLI**

Run:
```bash
cd /tmp && mkdir test-hugeicons && cd test-hugeicons
bun init -y
REGISTRY_URL=http://localhost:4000/r bunx pitsi@latest add button
```

Expected: Button component installs without lucide-react dependency

---

## Rollback Plan

If issues arise:

1. **Revert commits**: `git revert HEAD~N` where N is number of commits
2. **Restore lucide**: `bun add lucide-react`
3. **Keep wrapper**: The icon wrapper can coexist with lucide-react for gradual migration

---

## Notes for Implementation

### Icon Name Discovery

If an icon doesn't exist in hugeicons free tier:
1. Search https://hugeicons.com/react-icons for equivalent
2. Update `icon-mapping.ts` with correct hugeicons name
3. If no equivalent, create a custom SVG in `components/shared/icons.tsx`

### Common Issues

1. **Animation icons (Loader2)**: Hugeicons may not have spinning animation by default. May need CSS animation.
2. **Stroke width**: Hugeicons default is 1.5, Lucide is 2. Adjust if icons look too thin.
3. **Size-* classes**: The wrapper parses Tailwind size-* classes but may need adjustment.

### Testing Checklist

- [ ] All UI components render icons
- [ ] Sidebar icons visible
- [ ] Dropdown menus show icons
- [ ] Button icons aligned properly
- [ ] Dark mode icons have correct color
- [ ] Mobile responsive icons sized correctly
