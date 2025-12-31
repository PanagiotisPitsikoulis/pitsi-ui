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

  // Bar Chart icons
  ChartColumnIcon,

  // Bell / Notification icons
  Notification01Icon,

  // Block icons
  CubeIcon,

  // Bold / Text icons
  TextBoldIcon,
  TextItalicIcon,
  TextUnderlineIcon,
  TextFontIcon,

  // Bookmark icons
  Bookmark01Icon,

  // Book icons
  BookOpen01Icon,

  // Bot / AI / Brain icons
  BotIcon,
  Brain01Icon,

  // Box icons
  BoundingBoxIcon,

  // Calculator icons
  CalculatorIcon,

  // Calendar icons
  Calendar01Icon,

  // Camera icons
  Camera01Icon,

  // Chart icons
  PieChartIcon,
  PieChart01Icon,
  ChartIncreaseIcon,

  // Check icons
  Tick01Icon,
  Tick02Icon,
  CheckmarkCircle01Icon,
  CheckmarkCircle02Icon,

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

  // Clipboard icons
  ClipboardIcon,

  // Clock / Time icons
  Clock01Icon,
  Timer01Icon,

  // Code icons
  CodeIcon,

  // Compass icons
  Compass01Icon,

  // Copy icons
  Copy01Icon,
  Copy02Icon,

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

  // Form / Input icons
  InputTextIcon,

  // Frame icons
  FramerIcon,

  // Globe icons
  GlobeIcon,

  // Grid icons
  Grid02Icon,
  GridIcon,

  // Grip / Drag icons
  DragDropVerticalIcon,


  // Heart icons
  HeartAddIcon,
  HeartCheckIcon,

  // History icons
  TransactionHistoryIcon,

  // Home icons
  Home01Icon,

  // Image icons
  Image01Icon,

  // Inbox icons
  InboxIcon,

  // Info icons
  InformationSquareIcon,

  // Inspect icons
  InspectCodeIcon,

  // Key icons
  Key01Icon,
  Key02Icon,

  // Layers icons
  Layers01Icon,
  Layers02Icon,

  // Layout icons
  Layout01Icon,
  Layout02Icon,
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
  AddToListIcon,

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
  MailOpen01Icon,

  // Map icons
  MapsIcon,

  // Maximize icons
  Maximize01Icon,

  // Megaphone icons
  Megaphone01Icon,

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

  // Navigation icons
  Navigation01Icon,

  // Octagon icons
  OctagonIcon,

  // Package icons
  PackageIcon,

  // Palette / Color icons
  SwatchIcon,
  DropperIcon,

  // Panel icons
  PanelLeftIcon,
  PanelLeftOpenIcon,
  PanelLeftCloseIcon,

  // Layout Top icon (for PanelTop)
  LayoutTopIcon,

  // Pause icons
  PauseIcon,

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

  // Redo / Undo icons
  RedoIcon,

  // Refresh / Rotate icons
  RefreshIcon,
  RotateLeft01Icon,
  RotateClockwiseIcon,

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
  Share02Icon,

  // Shield icons
  Shield01Icon,
  ShieldIcon,

  // Shopping icons
  ShoppingCart01Icon,

  // Shuffle icons
  ShuffleIcon,

  // Slash icons
  Cancel01Icon,

  // Slider icons
  SlidersHorizontalIcon,

  // Smartphone icons
  SmartPhone01Icon,

  // Smile / Emoji icons
  SmileIcon,
  HappyIcon,

  // Sparkle icons
  SparklesIcon,

  // Star icons
  StarIcon,

  // Tag icons
  Tag01Icon,

  // Target icons
  Target01Icon,

  // Terminal icons
  CodeSimpleIcon,

  // Trash / Delete icons
  Delete01Icon,
  Delete02Icon,

  // Trophy / Award icons
  Award01Icon,

  // Truck / Delivery icons
  TruckDeliveryIcon,

  // User icons
  UserIcon,
  UserGroupIcon,
  UserRemove01Icon,

  // Wand / Magic icons
  MagicWand01Icon,

  // Wave icons
  AudioWave01Icon,

  // X / Cancel / Close icons
  Cancel02Icon,
  CancelCircleIcon,

  // Volume icons
  VolumeOffIcon,

  // Zap / Lightning icons
  ZapIcon,

  // Archive icons
  ArchiveIcon,

  // Building icons
  Building01Icon,
  Building02Icon,

  // Invoice / Receipt icons
  InvoiceIcon,

  // Tablet icons
  Tablet01Icon,

  // News icons
  NewsIcon,

  // Quote icons
  QuoteDownIcon,

  // Shopping Bag icons
  ShoppingBag01Icon,

  // Layout Bottom icon (for PanelBottom)
  LayoutBottomIcon,

  // Cursor icons (for MousePointerClick)
  CursorPointer01Icon,

  // Image/Gallery icons (for Images)
  Image02Icon,
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

  // More icons
  MoreHorizontal: MoreHorizontalIcon,
  MoreHorizontalIcon: MoreHorizontalIcon,
  MoreVertical: MoreVerticalIcon,

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

  // Pencil / Edit icons
  Pencil: PencilEdit01Icon,
  SquarePen: SquareArrowUp01Icon, // Note: Not exact match, closest available

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

  // Redo / Undo icons
  Redo2: RedoIcon,

  // Refresh / Rotate icons
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
  X: Cancel02Icon,
  XCircle: CancelCircleIcon,
  XIcon: Cancel02Icon,

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
