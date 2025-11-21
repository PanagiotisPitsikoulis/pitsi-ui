"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Check, ChevronsUpDown, Search } from "lucide-react"

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

type SubcategoryLink = {
  subcategory: string
  href: string
  count: number
}

type CategoryLink = {
  category: string
  href: string
  count: number
  subcategories: SubcategoryLink[]
}

function useBlocksNavState(categoryLinks: CategoryLink[]) {
  const pathname = usePathname()

  // Extract active category and subcategory from pathname
  const categoryMatch = pathname.match(/\/blocks\/category\/([^/]+)/)
  const subcategoryMatch = pathname.match(
    /\/blocks\/category\/[^/]+\/subcategory\/([^/]+)/
  )
  const activeCategory = categoryMatch ? categoryMatch[1] : null
  const activeSubcategory = subcategoryMatch ? subcategoryMatch[1] : null

  // Flatten all items for search
  const allItems = React.useMemo(() => {
    const items: { label: string; href: string; type: "category" | "subcategory"; category?: string; count?: number }[] = []

    categoryLinks.forEach(({ category, href, subcategories }) => {
      const formattedCategory = category
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")

      items.push({ label: formattedCategory, href, type: "category" })

      subcategories.forEach(({ subcategory, href: subHref, count: subCount }) => {
        const formattedSub = subcategory
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")
        items.push({ label: formattedSub, href: subHref, type: "subcategory", category: formattedCategory, count: subCount })
      })
    })

    return items
  }, [categoryLinks])

  // Get current selection label
  const currentLabel = React.useMemo(() => {
    if (activeSubcategory) {
      return activeSubcategory
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    }
    if (activeCategory) {
      return activeCategory
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    }
    return "Search blocks..."
  }, [activeCategory, activeSubcategory])

  return { activeCategory, activeSubcategory, allItems, currentLabel }
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
  const { activeCategory, activeSubcategory, allItems, currentLabel } = useBlocksNavState(categoryLinks)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          role="combobox"
          aria-expanded={open}
          className={cn(
            "border-input bg-background hover:bg-accent hover:text-accent-foreground flex h-9 w-full items-center justify-between rounded-md border px-3 py-2 text-sm whitespace-nowrap shadow-xs",
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
              {allItems
                .filter((item) => item.type === "category")
                .map((item) => (
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
                        activeCategory === item.label.toLowerCase().replace(/ /g, "-")
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                    {item.label}
                  </CommandItem>
                ))}
            </CommandGroup>
            <CommandGroup heading="Subcategories">
              {allItems
                .filter((item) => item.type === "subcategory")
                .map((item) => (
                  <CommandItem
                    key={item.href}
                    value={`${item.category} ${item.label}`}
                    onSelect={() => {
                      router.push(item.href)
                      setOpen(false)
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 size-4",
                        activeSubcategory === item.label.toLowerCase().replace(/ /g, "-")
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                    <span className="truncate">{item.label}</span>
                    <span className="text-muted-foreground ml-auto text-xs">{item.category}</span>
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
  const { activeCategory, activeSubcategory, allItems, currentLabel } = useBlocksNavState(categoryLinks)

  return (
    <Sidebar
      className="sticky top-[calc(var(--header-height)+1px)] z-30 mr-4 -ml-5 hidden h-[calc(100svh-var(--header-height))] overscroll-none bg-transparent lg:flex"
      collapsible="none"
    >
      <SidebarContent className="no-scrollbar overflow-x-hidden pr-2">
        <div className="from-background via-background/80 to-background/50 sticky -top-1 z-10 h-8 shrink-0 bg-gradient-to-b blur-xs" />
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
                  className="border-input bg-background hover:bg-accent hover:text-accent-foreground flex h-9 w-full items-center justify-between rounded-md border px-3 py-2 text-sm whitespace-nowrap shadow-xs"
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
                      {allItems
                        .filter((item) => item.type === "category")
                        .map((item) => (
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
                                activeCategory === item.label.toLowerCase().replace(/ /g, "-")
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {item.label}
                          </CommandItem>
                        ))}
                    </CommandGroup>
                    <CommandGroup heading="Subcategories">
                      {allItems
                        .filter((item) => item.type === "subcategory")
                        .map((item) => (
                          <CommandItem
                            key={item.href}
                            value={`${item.category} ${item.label}`}
                            onSelect={() => {
                              router.push(item.href)
                              setOpen(false)
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 size-4",
                                activeSubcategory === item.label.toLowerCase().replace(/ /g, "-")
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            <span className="truncate">{item.label}</span>
                            <span className="text-muted-foreground ml-auto text-xs">{item.category}</span>
                          </CommandItem>
                        ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </SidebarGroupContent>
        </SidebarGroup>
        {categoryLinks.map(({ category, count, subcategories }) => {
          const formattedName = category
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")

          return (
            <SidebarGroup key={category}>
              <SidebarGroupLabel className="text-muted-foreground font-medium">
                {formattedName}
                <span className="text-muted-foreground/50 ml-auto text-xs font-normal">
                  {count}
                </span>
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu className="gap-0.5">
                  {subcategories.map(({ subcategory, href: subHref, count: subCount }) => {
                    const formattedSubName = subcategory
                      .split("-")
                      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                      .join(" ")

                    return (
                      <SidebarMenuItem key={subcategory}>
                        <SidebarMenuButton
                          asChild
                          isActive={activeSubcategory === subcategory}
                          className="data-[active=true]:bg-accent data-[active=true]:border-accent 3xl:fixed:w-full 3xl:fixed:max-w-48 relative h-[30px] w-fit overflow-visible border border-transparent text-[0.8rem] font-medium after:absolute after:inset-x-0 after:-inset-y-1 after:z-0 after:rounded-md"
                        >
                          <Link href={subHref}>
                            <span className="absolute inset-0 flex w-(--sidebar-width) bg-transparent" />
                            {formattedSubName}
                            <span className="text-muted-foreground/50 ml-auto text-xs font-normal">
                              {subCount}
                            </span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    )
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          )
        })}
      </SidebarContent>
    </Sidebar>
  )
}
