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
  // Accessibility icons
  AccessIcon,
  AddToListIcon,
  Alert01Icon,
  // Alert / Warning icons
  AlertCircleIcon,
  // Archive icons
  ArchiveIcon,
  // Arrow icons
  ArrowDown01Icon,
  // Chevron icons
  ArrowDown02Icon,
  ArrowExpandIcon,
  ArrowLeft01Icon,
  ArrowLeft02Icon,
  ArrowRight01Icon,
  ArrowRight02Icon,
  // Corner / Turn icons
  ArrowTurnDownIcon,
  ArrowUp01Icon,
  ArrowUp02Icon,
  ArrowUpDownIcon,
  ArrowUpRight01Icon,
  // Wave icons
  AudioWave01Icon,
  // Trophy / Award icons
  Award01Icon,
  // Bath / Bathroom icons
  Bathtub01Icon,
  // Bed icons
  BedIcon,
  // Bookmark icons
  Bookmark01Icon,
  // Book icons
  BookOpen01Icon,
  // Bot / AI / Brain icons
  BotIcon,
  // Box icons
  BoundingBoxIcon,
  Brain01Icon,
  BubbleChatIcon,
  // Building icons
  Building01Icon,
  Building02Icon,
  // Calculator icons
  CalculatorIcon,
  // Calendar icons
  Calendar01Icon,
  // Call / Phone icons
  Call02Icon,
  // Camera icons
  Camera01Icon,
  // Slash icons
  Cancel01Icon,
  // X / Cancel / Close icons
  Cancel02Icon,
  CancelCircleIcon,
  // Bar Chart icons
  ChartColumnIcon,
  ChartIncreaseIcon,
  // Badge icons
  CheckmarkBadge01Icon,
  CheckmarkCircle01Icon,
  CheckmarkCircle02Icon,
  CircleArrowUp01Icon,
  // Circle icons
  CircleIcon,
  // Clipboard icons
  ClipboardIcon,
  // Clock / Time icons
  Clock01Icon,
  // Code icons
  CodeIcon,
  // Terminal icons
  CodeSimpleIcon,
  // Command icons
  CommandIcon,
  // Compass icons
  Compass01Icon,
  // Monitor icons
  ComputerIcon,
  // Copy icons
  Copy01Icon,
  Copy02Icon,
  // CPU / Computer icons
  CpuIcon,
  // Credit Card icons
  CreditCardIcon,
  // Block icons
  CubeIcon,
  // Cursor icons (for MousePointerClick)
  CursorPointer01Icon,
  DashboardSquare01Icon,
  DashedLineCircleIcon,
  // Database icons
  DatabaseIcon,
  // Trash / Delete icons
  Delete01Icon,
  Delete02Icon,
  DollarCircleIcon,
  // Download / Upload icons
  Download01Icon,
  // Grip / Drag icons
  DragDropVerticalIcon,
  DropperIcon,
  // Dumbbell / Gym icons
  Dumbbell01Icon,
  // Eye / View icons
  EyeIcon,
  // File icons
  File01Icon,
  FileAttachmentIcon,
  FileScriptIcon,
  // Flame / Fire icons
  FireIcon,
  // Save icons
  FloppyDiskIcon,
  // Folder icons
  Folder01Icon,
  FolderOpenIcon,
  // Frame icons
  FramerIcon,
  // Gift icons
  GiftIcon,
  // Globe icons
  GlobeIcon,
  // Grid icons
  Grid02Icon,
  GridIcon,
  GridViewIcon,
  HappyIcon,
  // Heart icons
  HeartAddIcon,
  HeartCheckIcon,
  HelpCircleIcon,
  // Home icons
  Home01Icon,
  // Image icons
  Image01Icon,
  // Image/Gallery icons (for Images)
  Image02Icon,
  // Inbox icons
  InboxIcon,
  InformationCircleIcon,
  // Info icons
  InformationSquareIcon,
  // Form / Input icons
  InputTextIcon,
  // Inspect icons
  InspectCodeIcon,
  // Invoice / Receipt icons
  InvoiceIcon,
  // Key icons
  Key01Icon,
  Key02Icon,
  // Layers icons
  Layers01Icon,
  Layers02Icon,
  // Layout icons
  Layout01Icon,
  Layout02Icon,
  // Layout Bottom icon (for PanelBottom)
  LayoutBottomIcon,
  // Layout Top icon (for PanelTop)
  LayoutTopIcon,
  // Leaf / Plant icons
  Leaf01Icon,
  // Library icons
  LibraryIcon,
  // Lifebuoy icons
  LifebuoyIcon,
  // Link icons
  Link01Icon,
  // External / Link icons
  LinkSquare01Icon,
  // List icons
  ListViewIcon,
  // Loader icons
  Loading01Icon,
  Loading02Icon,
  // Location icons
  Location01Icon,
  Location04Icon,
  // Lock icons
  LockIcon,
  // Login / Logout icons
  Login01Icon,
  Logout01Icon,
  // Wand / Magic icons
  MagicWand01Icon,
  // Mail icons
  Mail01Icon,
  MailOpen01Icon,
  // Send icons
  MailSend01Icon,
  // Map icons
  MapsIcon,
  // Maximize icons
  Maximize01Icon,
  // Megaphone icons
  Megaphone01Icon,
  // Menu icons
  Menu01Icon,
  // Message icons
  Message01Icon,
  // Minus / Plus icons
  MinusSignIcon,
  // Moon / Sun icons
  Moon01Icon,
  // More icons
  MoreHorizontalIcon,
  MoreVerticalIcon,
  MultiplicationSignCircleIcon,
  MultiplicationSignIcon,
  // Navigation icons
  Navigation01Icon,
  // News icons
  NewsIcon,
  // Bell / Notification icons
  Notification01Icon,
  // Octagon icons
  OctagonIcon,
  // Package icons
  PackageIcon,
  PanelLeftCloseIcon,
  // Panel icons
  PanelLeftIcon,
  PanelLeftOpenIcon,
  // Pause icons
  PauseIcon,
  // Pencil / Edit icons
  PencilEdit01Icon,
  PieChart01Icon,
  // Chart icons
  PieChartIcon,
  // Play icons
  PlayIcon,
  PlusSignIcon,
  // Popcorn icons
  PopcornIcon,
  // Quote icons
  QuoteDownIcon,
  // Radio icons
  RadioIcon,
  // Recycle icons
  RecycleIcon,
  // Redo / Undo icons
  RedoIcon,
  // Refresh / Rotate icons
  RefreshIcon,
  // Repeat icons
  RepeatIcon,
  RotateClockwiseIcon,
  RotateLeft01Icon,
  // Search icons
  Search01Icon,
  // Server icons
  ServerStack01Icon,
  // Settings icons
  Settings01Icon,
  Settings02Icon,
  // Share icons
  Share01Icon,
  Share02Icon,
  // Shield icons
  Shield01Icon,
  ShieldIcon,
  // Shopping Bag icons
  ShoppingBag01Icon,
  // Shopping icons
  ShoppingCart01Icon,
  // Shuffle icons
  ShuffleIcon,
  // Slider icons
  SlidersHorizontalIcon,
  // Smartphone icons
  SmartPhone01Icon,
  // Smile / Emoji icons
  SmileIcon,
  // Sparkle icons
  SparklesIcon,
  SquareArrowUp01Icon,
  // Square icons
  SquareIcon,
  // Star icons
  StarIcon,
  Sun01Icon,
  // Palette / Color icons
  SwatchIcon,
  // Tablet icons
  Tablet01Icon,
  // Tag icons
  Tag01Icon,
  // Target icons
  Target01Icon,
  // Bold / Text icons
  TextBoldIcon,
  TextFontIcon,
  TextItalicIcon,
  TextUnderlineIcon,
  // Check icons
  Tick01Icon,
  Tick02Icon,
  Timer01Icon,
  // History icons
  TransactionHistoryIcon,
  TriangleIcon,
  // Truck / Delivery icons
  TruckDeliveryIcon,
  Upload01Icon,
  UserGroupIcon,
  // User icons
  UserIcon,
  UserRemove01Icon,
  ViewOffIcon,
  // Volume icons
  VolumeOffIcon,
  WeightIcon,
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
 * Custom social media icons (not available in hugeicons-free)
 * These are defined as SVG path data matching the HugeiconsIcon format
 */
const InstagramIcon: IconSvgObject = [
  [
    "rect",
    {
      x: "2",
      y: "2",
      width: "20",
      height: "20",
      rx: "5",
      ry: "5",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "1.5",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
    },
  ],
  [
    "path",
    {
      d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "1.5",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
    },
  ],
  [
    "line",
    {
      x1: "17.5",
      x2: "17.51",
      y1: "6.5",
      y2: "6.5",
      stroke: "currentColor",
      "stroke-width": "1.5",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
    },
  ],
]

const TwitterIcon: IconSvgObject = [
  [
    "path",
    {
      d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "1.5",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
    },
  ],
]

const YoutubeIcon: IconSvgObject = [
  [
    "path",
    {
      d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "1.5",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
    },
  ],
  [
    "path",
    {
      d: "m10 15 5-3-5-3z",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "1.5",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
    },
  ],
]

const LinkedinIcon: IconSvgObject = [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "1.5",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
    },
  ],
  [
    "rect",
    {
      width: "4",
      height: "12",
      x: "2",
      y: "9",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "1.5",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
    },
  ],
  [
    "circle",
    {
      cx: "4",
      cy: "4",
      r: "2",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "1.5",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
    },
  ],
]

const FacebookIcon: IconSvgObject = [
  [
    "path",
    {
      d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "1.5",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
    },
  ],
]

const GithubIcon: IconSvgObject = [
  [
    "path",
    {
      d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "1.5",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
    },
  ],
  [
    "path",
    {
      d: "M9 18c-4.51 2-5-2-7-2",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "1.5",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
    },
  ],
]

/**
 * Mapping from Lucide icon names to Hugeicons SVG data.
 *
 * Icons that don't have exact equivalents are mapped to the closest match.
 * See comments for icons that may need custom SVG implementations.
 */
export const iconMapping = {
  // Accessibility icons
  Accessibility: AccessIcon,

  // Alert / Warning icons
  AlertCircle: AlertCircleIcon,
  AlertCircleIcon: AlertCircleIcon,
  AlertTriangleIcon: TriangleIcon,
  TriangleAlert: TriangleIcon,
  TriangleAlertIcon: TriangleIcon,

  // Archive icons
  Archive: ArchiveIcon,

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

  // Bar Chart icons
  BarChart3: ChartColumnIcon,

  // Bell / Notification icons
  Bell: Notification01Icon,

  // Block icons
  Blocks: CubeIcon,

  // Box icons
  Box: BoundingBoxIcon,

  // Text formatting icons
  Bold: TextBoldIcon,
  Italic: TextItalicIcon,
  Underline: TextUnderlineIcon,

  // Bookmark icons
  Bookmark: Bookmark01Icon,
  BookmarkIcon: Bookmark01Icon,

  // Book icons
  BookOpen: BookOpen01Icon,

  // Bath / Bathroom icons
  Bath: Bathtub01Icon,

  // Bed icons
  Bed: BedIcon,

  // Bot / AI icons
  Bot: BotIcon,
  BotIcon: BotIcon,

  // Brain icons
  Brain: Brain01Icon,

  // Calculator icons
  Calculator: CalculatorIcon,

  // Calendar icons
  Calendar: Calendar01Icon,
  CalendarIcon: Calendar01Icon,
  CalendarDays: Calendar01Icon,

  // Camera icons
  Camera: Camera01Icon,

  // Chart icons
  ChartPie: PieChartIcon,
  PieChart: PieChartIcon,
  TrendingUp: ChartIncreaseIcon,

  // Check icons
  Check: Tick01Icon,
  CheckIcon: Tick02Icon,
  Tick01Icon: Tick01Icon,
  Tick02Icon: Tick02Icon,
  CheckCircle: CheckmarkCircle01Icon,
  CheckCircle2: CheckmarkCircle02Icon,
  CheckCircle2Icon: CheckmarkCircle01Icon,
  CircleCheckIcon: CheckmarkCircle01Icon,

  // Clipboard icons
  Clipboard: ClipboardIcon,

  // Compass icons
  Compass: Compass01Icon,

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

  // Command icons
  Command: CommandIcon,

  // Copy icons
  Copy: Copy01Icon,
  CopyIcon: Copy02Icon,

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

  // Gift icons
  Gift: GiftIcon,

  // Folder icons
  Folder: Folder01Icon,
  FolderOpen: FolderOpenIcon,

  // Form / Input icons
  FormInput: InputTextIcon,

  // Frame icons
  Frame: FramerIcon,
  FrameIcon: FramerIcon,

  // Globe icons
  Globe: GlobeIcon,

  // Grid icons
  Grid2X2: Grid02Icon,
  Grid3X3: GridIcon,

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

  // Image icons
  ImageIcon: Image01Icon,

  // Inbox icons
  Inbox: InboxIcon,

  // Info icons
  Info: InformationCircleIcon,
  InfoIcon: InformationCircleIcon,

  // Inspect icons
  Inspect: InspectCodeIcon,

  // Key icons
  Key: Key01Icon,
  KeyRound: Key02Icon,

  // Layers icons
  Layers: Layers01Icon,
  Layers2: Layers02Icon,
  Layers3: Layers02Icon,

  // Layout icons
  Layout: Layout01Icon,
  LayoutDashboard: DashboardSquare01Icon,
  LayoutGrid: GridViewIcon,
  LayoutTemplate: Layout02Icon,

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
  ListPlus: AddToListIcon,

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
  MailCheck: MailOpen01Icon,

  // Map icons
  Map: MapsIcon,
  MapIcon: MapsIcon,

  // Maximize icons
  Maximize: Maximize01Icon,

  // Megaphone icons
  Megaphone: Megaphone01Icon,

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

  // Menu icons
  Menu: Menu01Icon,

  // More icons
  MoreHorizontal: MoreHorizontalIcon,
  MoreHorizontalIcon: MoreHorizontalIcon,
  MoreVertical: MoreVerticalIcon,

  // Location icons
  Locate: Location04Icon,
  MapPin: Location01Icon,

  // Navigation icons
  Navigation: Navigation01Icon,

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
  PanelLeftCloseIcon: PanelLeftCloseIcon,
  PanelLeftOpenIcon: PanelLeftOpenIcon,
  PanelTop: LayoutTopIcon,

  // Pause icons
  Pause: PauseIcon,

  // Phone icons
  Phone: Call02Icon,

  // Pencil / Edit icons
  Pencil: PencilEdit01Icon,
  SquarePen: SquareArrowUp01Icon, // Note: Not exact match, closest available

  // Square icons
  Square: SquareIcon,

  // Pie Chart icon with variant
  PieChartIcon: PieChart01Icon,

  // Play icons
  Play: PlayIcon,

  // Popcorn icons
  PopcornIcon: PopcornIcon,

  // Radio icons
  Radio: RadioIcon,

  // Recycle icons
  Recycle: RecycleIcon,

  // Repeat icons
  Repeat: RepeatIcon,
  Repeat2: RepeatIcon,

  // Redo / Undo icons
  Redo2: RedoIcon,

  // Refresh / Rotate icons
  RefreshCcw: RefreshIcon,
  RefreshCcwIcon: RefreshIcon,
  RotateCcw: RotateLeft01Icon,
  RotateCw: RotateClockwiseIcon,

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
  ShareIcon: Share02Icon,

  // Shield icons
  ShieldAlertIcon: Shield01Icon,
  Shield: ShieldIcon,

  // Shopping icons
  ShoppingCart: ShoppingCart01Icon,

  // Shuffle icons
  Shuffle: ShuffleIcon,

  // Slash icons
  SlashIcon: Cancel01Icon,

  // Slider icons
  SlidersHorizontal: SlidersHorizontalIcon,

  // Smartphone icons
  Smartphone: SmartPhone01Icon,

  // Smile / Emoji icons
  Smile: SmileIcon,

  // Sparkle icons
  Sparkles: SparklesIcon,

  // Star icons
  Star: StarIcon,

  // Tag icons
  Tag: Tag01Icon,

  // Target icons
  Target: Target01Icon,

  // Terminal icons
  Terminal: CodeSimpleIcon,

  // Type / Text icons
  Type: TextFontIcon,

  // Trash / Delete icons
  Trash2: Delete01Icon,
  TrashIcon: Delete02Icon,

  // Trophy / Award icons
  Trophy: Award01Icon,

  // Truck / Delivery icons
  Truck: TruckDeliveryIcon,

  // User icons
  User: UserIcon,
  Users: UserGroupIcon,
  UserRoundXIcon: UserRemove01Icon,

  // Wand / Magic icons
  Wand2: MagicWand01Icon,

  // Wave icons
  Waves: AudioWave01Icon,

  // X / Cancel / Close icons
  X: MultiplicationSignIcon,
  XCircle: MultiplicationSignCircleIcon,
  XIcon: MultiplicationSignIcon,

  // Volume icons
  VolumeOffIcon: VolumeOffIcon,

  // Zap / Lightning icons
  Zap: ZapIcon,

  // Building icons
  Building2: Building02Icon,
  Building: Building01Icon,

  // Receipt / Invoice icons
  Receipt: InvoiceIcon,

  // Tablet icons
  Tablet: Tablet01Icon,

  // News icons
  Newspaper: NewsIcon,

  // Quote icons
  Quote: QuoteDownIcon,

  // Shopping Bag icons
  ShoppingBag: ShoppingBag01Icon,

  // Panel Bottom icon
  PanelBottom: LayoutBottomIcon,

  // Mouse Pointer Click icon
  MousePointerClick: CursorPointer01Icon,

  // Images / Gallery icon
  Images: Image02Icon,

  // Send icon (not MailSend)
  Send: MailSend01Icon,

  // Social Media icons (custom SVG definitions)
  Instagram: InstagramIcon,
  Twitter: TwitterIcon,
  Youtube: YoutubeIcon,
  YouTube: YoutubeIcon,
  Linkedin: LinkedinIcon,
  LinkedIn: LinkedinIcon,
  Facebook: FacebookIcon,
  Github: GithubIcon,
  GitHub: GithubIcon,
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
