"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
  BarChart3,
  Building2,
  Check,
  ChevronsUpDown,
  CreditCard,
  Grid3X3,
  HelpCircle,
  Images,
  Layout,
  LayoutGrid,
  Layers,
  Mail,
  Monitor,
  MousePointerClick,
  Newspaper,
  PanelBottom,
  Quote,
  Search,
  Send,
  ShoppingBag,
  Sparkles,
  Users,
  type LucideIcon,
} from "@/lib/icons"

import { cn } from "@/lib/utils"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/registry/new-york-v4/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/new-york-v4/ui/popover"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/registry/new-york-v4/ui/sidebar"

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  all: Layers,
  header: Layout,
  hero: Sparkles,
  features: Grid3X3,
  products: ShoppingBag,
  pricing: CreditCard,
  testimonials: Quote,
  gallery: Images,
  team: Users,
  stats: BarChart3,
  logos: Building2,
  faq: HelpCircle,
  blog: Newspaper,
  contact: Mail,
  newsletter: Send,
  cta: MousePointerClick,
  footer: PanelBottom,
  showcase: LayoutGrid,
  bento: Grid3X3,
  application: Monitor,
}

type CategoryLink = {
  category: string
  href: string
  count: number
}

function useBlocksNavState(categoryLinks: CategoryLink[]) {
  const pathname = usePathname()

  // Extract active category from pathname (e.g., /blocks/header or /block/header/header-1)
  const blocksMatch = pathname.match(/\/blocks\/([^/]+)/)
  const blockMatch = pathname.match(/\/block\/([^/]+)/)
  const activeCategory = blocksMatch?.[1] || blockMatch?.[1] || null

  // Build items for search
  const allItems = React.useMemo(() => {
    return categoryLinks.map(({ category, href, count }) => {
      const formattedCategory = category
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")

      return { label: formattedCategory, href, count, category }
    })
  }, [categoryLinks])

  // Get current selection label
  const currentLabel = React.useMemo(() => {
    if (activeCategory) {
      return activeCategory
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    }
    return "Search blocks..."
  }, [activeCategory])

  return { activeCategory, allItems, currentLabel }
}

export function BlocksSearch({
  categoryLinks,
  className,
}: {
  categoryLinks: CategoryLink[]
  className?: string
}) {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)
  const { activeCategory, allItems, currentLabel } = useBlocksNavState(categoryLinks)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          role="combobox"
          aria-expanded={open}
          className={cn(
            "border-input bg-background hover:text-muted-foreground flex h-9 w-full items-center justify-between rounded-md border px-3 py-2 text-sm whitespace-nowrap shadow-xs",
            className
          )}
        >
          <div className="flex items-center gap-2 truncate">
            <Search className="size-4 shrink-0 opacity-50" />
            <span className="truncate">{currentLabel}</span>
          </div>
          <ChevronsUpDown className="size-4 shrink-0 opacity-50" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-[--radix-popover-trigger-width] p-0" align="start">
        <Command>
          <CommandInput placeholder="Search blocks..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Categories">
              {allItems.map((item) => (
                <CommandItem
                  key={item.href}
                  value={item.label}
                  onSelect={() => {
                    router.push(item.href)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 size-4",
                      activeCategory === item.category ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {(() => {
                    const Icon = CATEGORY_ICONS[item.category] || Layers
                    return <Icon className="size-4 shrink-0" />
                  })()}
                  {item.label}
                  <span className="text-muted-foreground ml-auto text-xs">{item.count}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export function BlocksNav({
  categoryLinks,
}: {
  categoryLinks: CategoryLink[]
}) {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)
  const { activeCategory, allItems, currentLabel } = useBlocksNavState(categoryLinks)

  return (
    <Sidebar
      className="sticky top-[calc(var(--header-height)+1px)] z-30 mr-4 -ml-5 hidden h-[calc(100svh-var(--header-height))] overscroll-none bg-transparent lg:flex"
      collapsible="none"
    >
      <SidebarContent className="no-scrollbar overflow-x-hidden pr-2">
        <SidebarGroup>
          <SidebarGroupLabel className="text-muted-foreground font-medium">
            Search
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <button
                  role="combobox"
                  aria-expanded={open}
                  className="border-input bg-background hover:text-muted-foreground flex h-9 w-full items-center justify-between rounded-md border px-3 py-2 text-sm whitespace-nowrap shadow-xs"
                >
                  <div className="flex items-center gap-2 truncate">
                    <Search className="size-4 shrink-0 opacity-50" />
                    <span className="truncate">{currentLabel}</span>
                  </div>
                  <ChevronsUpDown className="size-4 shrink-0 opacity-50" />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-[--radix-popover-trigger-width] p-0" align="start">
                <Command>
                  <CommandInput placeholder="Search blocks..." />
                  <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Categories">
                      {allItems.map((item) => (
                        <CommandItem
                          key={item.href}
                          value={item.label}
                          onSelect={() => {
                            router.push(item.href)
                            setOpen(false)
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 size-4",
                              activeCategory === item.category ? "opacity-100" : "opacity-0"
                            )}
                          />
                          {(() => {
                            const Icon = CATEGORY_ICONS[item.category] || Layers
                            return <Icon className="size-4 shrink-0" />
                          })()}
                          {item.label}
                          <span className="text-muted-foreground ml-auto text-xs">{item.count}</span>
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel className="text-muted-foreground font-medium">
            Categories
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-0.5">
              {categoryLinks.map(({ category, href, count }) => {
                const formattedName = category
                  .split("-")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")
                const Icon = CATEGORY_ICONS[category] || Layers

                return (
                  <SidebarMenuItem key={category}>
                    <SidebarMenuButton
                      asChild
                      isActive={activeCategory === category}
                      className="text-muted-foreground hover:text-foreground data-[active=true]:text-foreground data-[active=true]:bg-accent data-[active=true]:border-accent 3xl:fixed:w-full 3xl:fixed:max-w-48 relative h-[30px] w-fit overflow-visible border border-transparent text-[0.8rem] font-medium after:absolute after:inset-x-0 after:-inset-y-1 after:z-0 after:rounded-md"
                    >
                      <Link href={href}>
                        <span className="absolute inset-0 flex w-(--sidebar-width) bg-transparent" />
                        <Icon className="size-4 shrink-0" />
                        {formattedName}
                        <span className="text-muted-foreground/50 ml-auto text-xs font-normal">
                          {count}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
