/**
 * Icon Mapping: Lucide React -> Hugeicons
 *
 * This file maps lucide-react icon names to their @hugeicons/core-free-icons equivalents.
 * Used by the Icon wrapper component for the migration from lucide-react to hugeicons.
 *
 * Naming conventions:
 * - Hugeicons typically uses suffixes like 01Icon, 02Icon for variants
 * - Some icons have direct name matches (e.g., BotIcon)
 * - Circle/Square variants often have CircleIcon/SquareIcon suffixes
 */

import {
  // Alert / Warning icons
  AlertCircleIcon,
  Alert01Icon,
  InformationCircleIcon,
  TriangleIcon,

  // Arrow icons
  ArrowDown01Icon,
  ArrowLeft01Icon,
  ArrowRight01Icon,
  ArrowUp01Icon,
  CircleArrowUp01Icon,
  ArrowUpDownIcon,
  ArrowUpRight01Icon,

  // Badge icons
  CheckmarkBadge01Icon,
  DollarCircleIcon,

  // Bell / Notification icons
  Notification01Icon,

  // Block icons
  CubeIcon,

  // Bold / Text icons
  TextBoldIcon,
  TextItalicIcon,
  TextUnderlineIcon,

  // Bookmark icons
  Bookmark01Icon,

  // Book icons
  BookOpen01Icon,

  // Bot / AI / Brain icons
  BotIcon,
  Brain01Icon,

  // Calendar icons
  Calendar01Icon,

  // Camera icons
  Camera01Icon,

  // Chart icons
  PieChartIcon,
  ChartIncreaseIcon,

  // Check icons
  Tick01Icon,
  CheckmarkCircle01Icon,

  // Chevron icons
  ArrowDown02Icon,
  ArrowUp02Icon,
  ArrowLeft02Icon,
  ArrowRight02Icon,
  ArrowExpandIcon,

  // Circle icons
  CircleIcon,
  DashedLineCircleIcon,
  HelpCircleIcon,

  // Clock / Time icons
  Clock01Icon,
  Timer01Icon,

  // Code icons
  CodeIcon,

  // Copy icons
  Copy01Icon,

  // Corner / Turn icons
  ArrowTurnDownIcon,

  // CPU / Computer icons
  CpuIcon,

  // Credit Card icons
  CreditCardIcon,

  // Database icons
  DatabaseIcon,

  // Download / Upload icons
  Download01Icon,
  Upload01Icon,

  // Dumbbell / Gym icons
  Dumbbell01Icon,
  WeightIcon,

  // External / Link icons
  LinkSquare01Icon,

  // Eye / View icons
  EyeIcon,
  ViewOffIcon,

  // File icons
  File01Icon,
  FileScriptIcon,
  FileAttachmentIcon,

  // Flame / Fire icons
  FireIcon,

  // Folder icons
  Folder01Icon,
  FolderOpenIcon,

  // Frame icons
  FramerIcon,

  // Globe icons
  GlobeIcon,

  // Grip / Drag icons
  DragDropVerticalIcon,


  // Heart icons
  HeartAddIcon,
  HeartCheckIcon,

  // History icons
  TransactionHistoryIcon,

  // Home icons
  Home01Icon,

  // Inbox icons
  InboxIcon,

  // Info icons
  InformationSquareIcon,

  // Inspect icons
  InspectCodeIcon,

  // Key icons
  Key01Icon,

  // Layers icons
  Layers01Icon,
  Layers02Icon,

  // Layout icons
  Layout01Icon,
  DashboardSquare01Icon,
  GridViewIcon,

  // Leaf / Plant icons
  Leaf01Icon,

  // Library icons
  LibraryIcon,

  // Lifebuoy icons
  LifebuoyIcon,

  // Link icons
  Link01Icon,

  // List icons
  ListViewIcon,

  // Loader icons
  Loading01Icon,
  Loading02Icon,

  // Lock icons
  LockIcon,

  // Login / Logout icons
  Login01Icon,
  Logout01Icon,

  // Mail icons
  Mail01Icon,

  // Map icons
  MapsIcon,

  // Maximize icons
  Maximize01Icon,

  // Message icons
  Message01Icon,
  BubbleChatIcon,

  // Minus / Plus icons
  MinusSignIcon,
  PlusSignIcon,

  // Monitor icons
  ComputerIcon,

  // Moon / Sun icons
  Moon01Icon,
  Sun01Icon,

  // More icons
  MoreHorizontalIcon,
  MoreVerticalIcon,

  // Octagon icons
  OctagonIcon,

  // Package icons
  PackageIcon,

  // Palette / Color icons
  SwatchIcon,
  DropperIcon,

  // Panel icons
  PanelLeftIcon,

  // Pencil / Edit icons
  PencilEdit01Icon,
  SquareArrowUp01Icon,

  // Play icons
  PlayIcon,

  // Popcorn icons
  PopcornIcon,

  // Radio icons
  RadioIcon,

  // Recycle icons
  RecycleIcon,

  // Refresh / Rotate icons
  RefreshIcon,
  RotateLeft01Icon,

  // Save icons
  FloppyDiskIcon,

  // Search icons
  Search01Icon,

  // Send icons
  MailSend01Icon,

  // Server icons
  ServerStack01Icon,

  // Settings icons
  Settings01Icon,
  Settings02Icon,

  // Share icons
  Share01Icon,

  // Shield icons
  Shield01Icon,
  ShieldIcon,

  // Shuffle icons
  ShuffleIcon,

  // Slash icons
  Cancel01Icon,

  // Slider icons
  SlidersHorizontalIcon,

  // Smartphone icons
  SmartPhone01Icon,

  // Sparkle icons
  SparklesIcon,

  // Star icons
  StarIcon,

  // Target icons
  Target01Icon,

  // Terminal icons
  CodeSimpleIcon,

  // Trash / Delete icons
  Delete01Icon,

  // Trophy / Award icons
  Award01Icon,

  // Truck / Delivery icons
  TruckDeliveryIcon,

  // User icons
  UserIcon,
  UserGroupIcon,

  // Wand / Magic icons
  MagicWand01Icon,

  // X / Cancel / Close icons
  Cancel02Icon,
  CancelCircleIcon,

  // Zap / Lightning icons
  ZapIcon,
} from "@hugeicons/core-free-icons"

/**
 * Type for icon SVG data from @hugeicons/core-free-icons
 * Icons are SVG path data arrays, not React components.
 * Use with HugeiconsIcon from @hugeicons/react to render.
 */
type IconSvgObject = readonly (readonly [
  string,
  { readonly [key: string]: string | number },
])[]

/**
 * Mapping from Lucide icon names to Hugeicons SVG data.
 *
 * Icons that don't have exact equivalents are mapped to the closest match.
 * See comments for icons that may need custom SVG implementations.
 */
export const iconMapping = {
  // Alert / Warning icons
  AlertCircle: AlertCircleIcon,
  AlertCircleIcon: AlertCircleIcon,
  TriangleAlert: TriangleIcon,
  TriangleAlertIcon: TriangleIcon,

  // Arrow icons
  ArrowDown: ArrowDown01Icon,
  ArrowLeft: ArrowLeft01Icon,
  ArrowRight: ArrowRight01Icon,
  ArrowUp: ArrowUp01Icon,
  ArrowUpCircle: CircleArrowUp01Icon,
  ArrowUpDown: ArrowUpDownIcon,
  ArrowUpRight: ArrowUpRight01Icon,

  // Badge icons
  BadgeCheckIcon: CheckmarkBadge01Icon,
  BadgeDollarSign: DollarCircleIcon,

  // Bell / Notification icons
  Bell: Notification01Icon,

  // Block icons
  Blocks: CubeIcon,

  // Text formatting icons
  Bold: TextBoldIcon,
  Italic: TextItalicIcon,
  Underline: TextUnderlineIcon,

  // Bookmark icons
  Bookmark: Bookmark01Icon,
  BookmarkIcon: Bookmark01Icon,

  // Book icons
  BookOpen: BookOpen01Icon,

  // Bot / AI icons
  Bot: BotIcon,
  BotIcon: BotIcon,

  // Brain icons
  Brain: Brain01Icon,

  // Calendar icons
  Calendar: Calendar01Icon,

  // Camera icons
  Camera: Camera01Icon,

  // Chart icons
  ChartPie: PieChartIcon,
  PieChart: PieChartIcon,
  TrendingUp: ChartIncreaseIcon,

  // Check icons
  Check: Tick01Icon,
  CheckCircle: CheckmarkCircle01Icon,
  CheckCircle2Icon: CheckmarkCircle01Icon,
  CircleCheckIcon: CheckmarkCircle01Icon,

  // Chevron icons
  ChevronDown: ArrowDown02Icon,
  ChevronDownIcon: ArrowDown02Icon,
  ChevronUp: ArrowUp02Icon,
  ChevronUpIcon: ArrowUp02Icon,
  ChevronLeft: ArrowLeft02Icon,
  ChevronLeftIcon: ArrowLeft02Icon,
  ChevronRight: ArrowRight02Icon,
  ChevronRightIcon: ArrowRight02Icon,
  ChevronsUpDown: ArrowExpandIcon,

  // Circle icons
  CircleIcon: CircleIcon,
  CircleDashed: DashedLineCircleIcon,
  CircleHelpIcon: HelpCircleIcon,

  // Clock / Time icons
  Clock: Clock01Icon,
  Timer: Timer01Icon,

  // Code icons
  Code2: CodeIcon,

  // Copy icons
  Copy: Copy01Icon,

  // Corner / Turn icons
  CornerDownLeft: ArrowTurnDownIcon,

  // CPU / Computer icons
  Cpu: CpuIcon,

  // Credit Card icons
  CreditCard: CreditCardIcon,

  // Database icons
  Database: DatabaseIcon,

  // Download / Upload icons
  Download: Download01Icon,
  Upload: Upload01Icon,

  // Dumbbell / Gym icons
  Dumbbell: Dumbbell01Icon,
  Weight: WeightIcon,

  // External / Link icons
  ExternalLink: LinkSquare01Icon,
  ExternalLinkIcon: LinkSquare01Icon,

  // Eye / View icons
  Eye: EyeIcon,

  // File icons
  File: File01Icon,
  FileCode: FileScriptIcon,
  FileText: FileAttachmentIcon,

  // Flame / Fire icons
  Flame: FireIcon,

  // Folder icons
  Folder: Folder01Icon,
  FolderOpen: FolderOpenIcon,

  // Frame icons
  Frame: FramerIcon,

  // Globe icons
  Globe: GlobeIcon,

  // Grip / Drag icons
  GripVertical: DragDropVerticalIcon,
  GripVerticalIcon: DragDropVerticalIcon,

  // Heart icons (including HeartHandshake mapped to HeartCheck)
  Heart: HeartAddIcon,
  HeartHandshake: HeartCheckIcon,

  // History icons
  History: TransactionHistoryIcon,

  // Help icons
  HelpCircle: HelpCircleIcon,

  // Home icons
  Home: Home01Icon,

  // Inbox icons
  Inbox: InboxIcon,

  // Info icons
  Info: InformationCircleIcon,
  InfoIcon: InformationCircleIcon,

  // Inspect icons
  Inspect: InspectCodeIcon,

  // Key icons
  Key: Key01Icon,

  // Layers icons
  Layers: Layers01Icon,
  Layers2: Layers02Icon,

  // Layout icons
  Layout: Layout01Icon,
  LayoutDashboard: DashboardSquare01Icon,
  LayoutGrid: GridViewIcon,

  // Leaf / Plant icons
  Leaf: Leaf01Icon,

  // Library icons
  Library: LibraryIcon,

  // Lifebuoy icons
  LifeBuoyIcon: LifebuoyIcon,

  // Link icons
  Link2Icon: Link01Icon,

  // List icons
  List: ListViewIcon,

  // Loader icons
  Loader2: Loading02Icon,
  Loader2Icon: Loading02Icon,
  LoaderIcon: Loading01Icon,

  // Lock icons
  Lock: LockIcon,

  // Login / Logout icons
  LogIn: Login01Icon,
  LogOut: Logout01Icon,

  // Lucide base icon type (used for type references, not actual icon)
  // LucideIcon: This is a type, not an actual icon - handle in wrapper

  // Mail icons
  Mail: Mail01Icon,

  // Map icons
  Map: MapsIcon,

  // Maximize icons
  Maximize: Maximize01Icon,

  // Message icons
  MessageSquare: Message01Icon,
  MessageCircle: BubbleChatIcon,

  // Minus / Plus icons
  Minus: MinusSignIcon,
  Plus: PlusSignIcon,

  // Monitor icons
  Monitor: ComputerIcon,

  // Moon / Sun icons
  Moon: Moon01Icon,
  Sun: Sun01Icon,

  // More icons
  MoreHorizontal: MoreHorizontalIcon,
  MoreHorizontalIcon: MoreHorizontalIcon,
  MoreVertical: MoreVerticalIcon,

  // Octagon icons
  OctagonX: OctagonIcon,
  OctagonXIcon: OctagonIcon,

  // Package icons
  Package: PackageIcon,

  // Palette / Color icons
  Palette: SwatchIcon,
  PipetteIcon: DropperIcon,

  // Panel icons
  PanelLeftIcon: PanelLeftIcon,

  // Pencil / Edit icons
  Pencil: PencilEdit01Icon,
  SquarePen: SquareArrowUp01Icon, // Note: Not exact match, closest available

  // Play icons
  Play: PlayIcon,

  // Popcorn icons
  PopcornIcon: PopcornIcon,

  // Radio icons
  Radio: RadioIcon,

  // Recycle icons
  Recycle: RecycleIcon,

  // Refresh / Rotate icons
  RefreshCcwIcon: RefreshIcon,
  RotateCcw: RotateLeft01Icon,

  // Save icons
  Save: FloppyDiskIcon,

  // Search icons
  Search: Search01Icon,
  SearchIcon: Search01Icon,

  // Send icons
  SendIcon: MailSend01Icon,

  // Server icons
  Server: ServerStack01Icon,

  // Settings icons
  Settings: Settings01Icon,
  Settings2: Settings02Icon,

  // Share icons
  Share2: Share01Icon,

  // Shield icons
  ShieldAlertIcon: Shield01Icon,
  Shield: ShieldIcon,

  // Shuffle icons
  Shuffle: ShuffleIcon,

  // Slash icons
  SlashIcon: Cancel01Icon,

  // Slider icons
  SlidersHorizontal: SlidersHorizontalIcon,

  // Smartphone icons
  Smartphone: SmartPhone01Icon,

  // Sparkle icons
  Sparkles: SparklesIcon,

  // Star icons
  Star: StarIcon,

  // Target icons
  Target: Target01Icon,

  // Terminal icons
  Terminal: CodeSimpleIcon,

  // Trash / Delete icons
  Trash2: Delete01Icon,

  // Trophy / Award icons
  Trophy: Award01Icon,

  // Truck / Delivery icons
  Truck: TruckDeliveryIcon,

  // User icons
  User: UserIcon,
  Users: UserGroupIcon,

  // Wand / Magic icons
  Wand2: MagicWand01Icon,

  // X / Cancel / Close icons
  X: Cancel02Icon,
  XCircle: CancelCircleIcon,
  XIcon: Cancel02Icon,

  // Zap / Lightning icons
  Zap: ZapIcon,
} as const

/**
 * Type representing all available icon names from Lucide that we support
 */
export type IconName = keyof typeof iconMapping

/**
 * Helper type to get the Hugeicon component type from the mapping
 */
export type MappedIcon = (typeof iconMapping)[IconName]

/**
 * Icons that don't have good equivalents in hugeicons-free and may need custom SVG implementations:
 *
 * - Trophy: No direct match, using Award01Icon as closest alternative
 * - SquarePen: No direct match, using SquareArrowUp01Icon as placeholder
 * - Frame: No direct match, using FramerIcon (Framer brand icon) as placeholder
 * - CircleDashed: Using DashedLineCircleIcon, may not be visually identical
 * - CornerDownLeft: Using ArrowTurnDownIcon, may not match exactly
 *
 * Consider creating custom SVG components for these if visual fidelity is critical.
 */

/**
 * Get the Hugeicon SVG data for a given Lucide icon name.
 * Returns IconSvgObject that can be used with HugeiconsIcon component.
 */
export function getIcon(name: IconName): IconSvgObject {
  return iconMapping[name] as IconSvgObject
}

/**
 * Check if an icon name is supported
 */
export function isValidIconName(name: string): name is IconName {
  return name in iconMapping
}
