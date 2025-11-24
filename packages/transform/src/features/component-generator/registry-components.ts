/**
 * Available shadcn/ui components from the pitsi-ui registry
 * These can be used when generating React components
 */

export interface RegistryComponent {
  name: string
  description: string
  importPath: string
  exports: string[]
}

export const registryComponents: RegistryComponent[] = [
  // Layout Components
  {
    name: "container",
    description: "Responsive container with max-width constraints",
    importPath: "@/components/ui/container",
    exports: ["Container"],
  },
  {
    name: "flex",
    description: "Flexbox layout component with gap, direction, align, justify props",
    importPath: "@/components/ui/flex",
    exports: ["Flex"],
  },
  {
    name: "grid",
    description: "CSS Grid layout component with columns, gap props",
    importPath: "@/components/ui/grid",
    exports: ["Grid"],
  },
  {
    name: "spacer",
    description: "Adds vertical or horizontal spacing",
    importPath: "@/components/ui/spacer",
    exports: ["Spacer"],
  },

  // Typography
  {
    name: "typography",
    description: "Text components: H1, H2, H3, H4, P, Lead, Large, Small, Muted, Code, Blockquote",
    importPath: "@/components/ui/typography",
    exports: ["H1", "H2", "H3", "H4", "P", "Lead", "Large", "Small", "Muted", "Code", "Blockquote"],
  },

  // Buttons & Actions
  {
    name: "button",
    description: "Button with variants: default, destructive, outline, secondary, ghost, link. Sizes: default, sm, lg, icon",
    importPath: "@/components/ui/button",
    exports: ["Button", "buttonVariants"],
  },
  {
    name: "button-group",
    description: "Group buttons together with consistent spacing",
    importPath: "@/components/ui/button-group",
    exports: ["ButtonGroup"],
  },
  {
    name: "toggle",
    description: "Toggle button for on/off states",
    importPath: "@/components/ui/toggle",
    exports: ["Toggle"],
  },
  {
    name: "toggle-group",
    description: "Group of toggle buttons, single or multiple selection",
    importPath: "@/components/ui/toggle-group",
    exports: ["ToggleGroup", "ToggleGroupItem"],
  },

  // Form Components
  {
    name: "input",
    description: "Text input field",
    importPath: "@/components/ui/input",
    exports: ["Input"],
  },
  {
    name: "textarea",
    description: "Multi-line text input",
    importPath: "@/components/ui/textarea",
    exports: ["Textarea"],
  },
  {
    name: "select",
    description: "Dropdown select with trigger, content, item, group, label, separator",
    importPath: "@/components/ui/select",
    exports: ["Select", "SelectTrigger", "SelectContent", "SelectItem", "SelectGroup", "SelectLabel", "SelectSeparator", "SelectValue"],
  },
  {
    name: "checkbox",
    description: "Checkbox input",
    importPath: "@/components/ui/checkbox",
    exports: ["Checkbox"],
  },
  {
    name: "radio-group",
    description: "Radio button group",
    importPath: "@/components/ui/radio-group",
    exports: ["RadioGroup", "RadioGroupItem"],
  },
  {
    name: "switch",
    description: "Toggle switch for boolean values",
    importPath: "@/components/ui/switch",
    exports: ["Switch"],
  },
  {
    name: "slider",
    description: "Range slider input",
    importPath: "@/components/ui/slider",
    exports: ["Slider"],
  },
  {
    name: "label",
    description: "Form label component",
    importPath: "@/components/ui/label",
    exports: ["Label"],
  },
  {
    name: "field",
    description: "Form field wrapper with label, description, error message",
    importPath: "@/components/ui/field",
    exports: ["Field", "FieldLabel", "FieldDescription", "FieldError"],
  },
  {
    name: "input-group",
    description: "Group input with addons (prefix, suffix, buttons)",
    importPath: "@/components/ui/input-group",
    exports: ["InputGroup", "InputGroupAddon"],
  },
  {
    name: "input-otp",
    description: "One-time password input",
    importPath: "@/components/ui/input-otp",
    exports: ["InputOTP", "InputOTPGroup", "InputOTPSlot", "InputOTPSeparator"],
  },
  {
    name: "form",
    description: "React Hook Form integration components",
    importPath: "@/components/ui/form",
    exports: ["Form", "FormField", "FormItem", "FormLabel", "FormControl", "FormDescription", "FormMessage"],
  },

  // Display Components
  {
    name: "card",
    description: "Card container with header, title, description, content, footer",
    importPath: "@/components/ui/card",
    exports: ["Card", "CardHeader", "CardTitle", "CardDescription", "CardContent", "CardFooter"],
  },
  {
    name: "badge",
    description: "Badge/tag with variants: default, secondary, destructive, outline",
    importPath: "@/components/ui/badge",
    exports: ["Badge", "badgeVariants"],
  },
  {
    name: "avatar",
    description: "User avatar with image and fallback",
    importPath: "@/components/ui/avatar",
    exports: ["Avatar", "AvatarImage", "AvatarFallback"],
  },
  {
    name: "separator",
    description: "Visual divider line",
    importPath: "@/components/ui/separator",
    exports: ["Separator"],
  },
  {
    name: "skeleton",
    description: "Loading placeholder skeleton",
    importPath: "@/components/ui/skeleton",
    exports: ["Skeleton"],
  },
  {
    name: "spinner",
    description: "Loading spinner animation",
    importPath: "@/components/ui/spinner",
    exports: ["Spinner"],
  },
  {
    name: "progress",
    description: "Progress bar indicator",
    importPath: "@/components/ui/progress",
    exports: ["Progress"],
  },
  {
    name: "alert",
    description: "Alert message with title and description",
    importPath: "@/components/ui/alert",
    exports: ["Alert", "AlertTitle", "AlertDescription"],
  },
  {
    name: "empty",
    description: "Empty state placeholder",
    importPath: "@/components/ui/empty",
    exports: ["Empty", "EmptyIcon", "EmptyTitle", "EmptyDescription", "EmptyActions"],
  },
  {
    name: "kbd",
    description: "Keyboard key display",
    importPath: "@/components/ui/kbd",
    exports: ["Kbd"],
  },
  {
    name: "aspect-ratio",
    description: "Maintain aspect ratio for content",
    importPath: "@/components/ui/aspect-ratio",
    exports: ["AspectRatio"],
  },
  {
    name: "squircle",
    description: "Squircle (rounded square) shape container",
    importPath: "@/components/ui/squircle",
    exports: ["Squircle"],
  },

  // Navigation
  {
    name: "navigation-menu",
    description: "Full navigation menu with dropdowns",
    importPath: "@/components/ui/navigation-menu",
    exports: ["NavigationMenu", "NavigationMenuList", "NavigationMenuItem", "NavigationMenuTrigger", "NavigationMenuContent", "NavigationMenuLink"],
  },
  {
    name: "breadcrumb",
    description: "Breadcrumb navigation trail",
    importPath: "@/components/ui/breadcrumb",
    exports: ["Breadcrumb", "BreadcrumbList", "BreadcrumbItem", "BreadcrumbLink", "BreadcrumbPage", "BreadcrumbSeparator", "BreadcrumbEllipsis"],
  },
  {
    name: "tabs",
    description: "Tabbed interface",
    importPath: "@/components/ui/tabs",
    exports: ["Tabs", "TabsList", "TabsTrigger", "TabsContent"],
  },
  {
    name: "pagination",
    description: "Page navigation",
    importPath: "@/components/ui/pagination",
    exports: ["Pagination", "PaginationContent", "PaginationItem", "PaginationLink", "PaginationPrevious", "PaginationNext", "PaginationEllipsis"],
  },
  {
    name: "segmented-control",
    description: "Segmented control for switching views",
    importPath: "@/components/ui/segmented-control",
    exports: ["SegmentedControl", "SegmentedControlItem"],
  },

  // Overlays & Modals
  {
    name: "dialog",
    description: "Modal dialog with header, title, description, content, footer",
    importPath: "@/components/ui/dialog",
    exports: ["Dialog", "DialogTrigger", "DialogContent", "DialogHeader", "DialogTitle", "DialogDescription", "DialogFooter", "DialogClose"],
  },
  {
    name: "alert-dialog",
    description: "Confirmation dialog with action and cancel",
    importPath: "@/components/ui/alert-dialog",
    exports: ["AlertDialog", "AlertDialogTrigger", "AlertDialogContent", "AlertDialogHeader", "AlertDialogTitle", "AlertDialogDescription", "AlertDialogFooter", "AlertDialogAction", "AlertDialogCancel"],
  },
  {
    name: "sheet",
    description: "Slide-out panel from edge of screen",
    importPath: "@/components/ui/sheet",
    exports: ["Sheet", "SheetTrigger", "SheetContent", "SheetHeader", "SheetTitle", "SheetDescription", "SheetFooter", "SheetClose"],
  },
  {
    name: "drawer",
    description: "Mobile-friendly bottom drawer",
    importPath: "@/components/ui/drawer",
    exports: ["Drawer", "DrawerTrigger", "DrawerContent", "DrawerHeader", "DrawerTitle", "DrawerDescription", "DrawerFooter", "DrawerClose"],
  },
  {
    name: "popover",
    description: "Floating content triggered by button",
    importPath: "@/components/ui/popover",
    exports: ["Popover", "PopoverTrigger", "PopoverContent"],
  },
  {
    name: "tooltip",
    description: "Hover tooltip with content",
    importPath: "@/components/ui/tooltip",
    exports: ["Tooltip", "TooltipTrigger", "TooltipContent", "TooltipProvider"],
  },
  {
    name: "hover-card",
    description: "Card that appears on hover",
    importPath: "@/components/ui/hover-card",
    exports: ["HoverCard", "HoverCardTrigger", "HoverCardContent"],
  },

  // Menus
  {
    name: "dropdown-menu",
    description: "Dropdown menu with items, checkboxes, radio groups, sub-menus",
    importPath: "@/components/ui/dropdown-menu",
    exports: ["DropdownMenu", "DropdownMenuTrigger", "DropdownMenuContent", "DropdownMenuItem", "DropdownMenuCheckboxItem", "DropdownMenuRadioGroup", "DropdownMenuRadioItem", "DropdownMenuLabel", "DropdownMenuSeparator", "DropdownMenuGroup", "DropdownMenuSub", "DropdownMenuSubTrigger", "DropdownMenuSubContent"],
  },
  {
    name: "context-menu",
    description: "Right-click context menu",
    importPath: "@/components/ui/context-menu",
    exports: ["ContextMenu", "ContextMenuTrigger", "ContextMenuContent", "ContextMenuItem", "ContextMenuCheckboxItem", "ContextMenuRadioGroup", "ContextMenuRadioItem", "ContextMenuLabel", "ContextMenuSeparator", "ContextMenuGroup", "ContextMenuSub", "ContextMenuSubTrigger", "ContextMenuSubContent"],
  },
  {
    name: "menubar",
    description: "Horizontal menu bar with dropdowns",
    importPath: "@/components/ui/menubar",
    exports: ["Menubar", "MenubarMenu", "MenubarTrigger", "MenubarContent", "MenubarItem", "MenubarSeparator", "MenubarLabel", "MenubarCheckboxItem", "MenubarRadioGroup", "MenubarRadioItem", "MenubarSub", "MenubarSubTrigger", "MenubarSubContent"],
  },
  {
    name: "command",
    description: "Command palette / search interface",
    importPath: "@/components/ui/command",
    exports: ["Command", "CommandInput", "CommandList", "CommandEmpty", "CommandGroup", "CommandItem", "CommandSeparator", "CommandDialog"],
  },

  // Data Display
  {
    name: "table",
    description: "Data table with header, body, row, cell, caption, footer",
    importPath: "@/components/ui/table",
    exports: ["Table", "TableHeader", "TableBody", "TableRow", "TableHead", "TableCell", "TableCaption", "TableFooter"],
  },
  {
    name: "accordion",
    description: "Expandable accordion sections",
    importPath: "@/components/ui/accordion",
    exports: ["Accordion", "AccordionItem", "AccordionTrigger", "AccordionContent"],
  },
  {
    name: "collapsible",
    description: "Collapsible content section",
    importPath: "@/components/ui/collapsible",
    exports: ["Collapsible", "CollapsibleTrigger", "CollapsibleContent"],
  },
  {
    name: "carousel",
    description: "Image/content carousel slider",
    importPath: "@/components/ui/carousel",
    exports: ["Carousel", "CarouselContent", "CarouselItem", "CarouselPrevious", "CarouselNext"],
  },
  {
    name: "calendar",
    description: "Date picker calendar",
    importPath: "@/components/ui/calendar",
    exports: ["Calendar"],
  },
  {
    name: "chart",
    description: "Chart components built with Recharts",
    importPath: "@/components/ui/chart",
    exports: ["ChartContainer", "ChartTooltip", "ChartTooltipContent", "ChartLegend", "ChartLegendContent"],
  },

  // Layout Utilities
  {
    name: "scroll-area",
    description: "Custom scrollable area with styled scrollbar",
    importPath: "@/components/ui/scroll-area",
    exports: ["ScrollArea", "ScrollBar"],
  },
  {
    name: "resizable",
    description: "Resizable panel layout",
    importPath: "@/components/ui/resizable",
    exports: ["ResizablePanelGroup", "ResizablePanel", "ResizableHandle"],
  },
  {
    name: "sidebar",
    description: "Application sidebar with menu, header, footer, content",
    importPath: "@/components/ui/sidebar",
    exports: ["Sidebar", "SidebarContent", "SidebarFooter", "SidebarGroup", "SidebarGroupAction", "SidebarGroupContent", "SidebarGroupLabel", "SidebarHeader", "SidebarMenu", "SidebarMenuButton", "SidebarMenuItem", "SidebarProvider", "SidebarTrigger"],
  },

  // Misc
  {
    name: "sonner",
    description: "Toast notifications",
    importPath: "@/components/ui/sonner",
    exports: ["Toaster"],
  },
  {
    name: "theme-toggle",
    description: "Dark/light mode toggle button",
    importPath: "@/components/ui/theme-toggle",
    exports: ["ThemeToggle"],
  },
  {
    name: "item",
    description: "Generic list item component",
    importPath: "@/components/ui/item",
    exports: ["Item", "ItemIcon", "ItemContent", "ItemTitle", "ItemDescription", "ItemActions"],
  },
]

/**
 * Get list of available components for prompt
 */
export function getAvailableComponents(): string {
  return registryComponents
    .map((c) => `- ${c.name}: ${c.description}\n  Import: ${c.importPath}\n  Exports: ${c.exports.join(", ")}`)
    .join("\n\n")
}

/**
 * Get component by name
 */
export function getComponent(name: string): RegistryComponent | undefined {
  return registryComponents.find((c) => c.name === name)
}

/**
 * Get all component names
 */
export function getComponentNames(): string[] {
  return registryComponents.map((c) => c.name)
}
