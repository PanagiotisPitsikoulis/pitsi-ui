"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowUpRight, Search } from "lucide-react"

import { cn } from "@/lib/utils"
import { Input } from "@/registry/new-york-v4/ui/input"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/registry/new-york-v4/ui/navigation-menu"

export function MainNav({
  items,
  componentPages,
  animationPages,
  allBlockSubcategories,
  className,
  ...props
}: React.ComponentProps<"nav"> & {
  items: { href: string; label: string }[]
  componentPages: Array<{ name: string; url: string }>
  animationPages: Array<{ name: string; url: string }>
  allBlockSubcategories: Array<{ category: string; name: string; count: number }>
}) {
  const pathname = usePathname()
  const [blocksSearch, setBlocksSearch] = useState("")
  const [componentsSearch, setComponentsSearch] = useState("")
  const [animationsSearch, setAnimationsSearch] = useState("")

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  // Format category name for display
  const formatName = (name: string) => {
    return name
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }

  // Filter nav items to separate dropdowns from regular links
  const blocksItem = items.find((item) => item.href === "/blocks")
  const componentsItem = items.find((item) => item.href === "/docs/components")
  const animationsItem = items.find((item) => item.href === "/docs/animations")
  const otherItems = items.filter(
    (item) =>
      item.href !== "/blocks" &&
      item.href !== "/docs/components" &&
      item.href !== "/docs/animations"
  )

  return (
    <NavigationMenu className={cn("items-center", className)} {...props}>
      <NavigationMenuList>
        {/* Regular nav items */}
        {otherItems.map((item) => (
          <NavigationMenuItem key={item.href}>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link
                href={item.href}
                className={cn(
                  "text-muted-foreground hover:text-foreground",
                  isActive(item.href) && "text-foreground"
                )}
              >
                {item.label}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}

        {/* Blocks dropdown */}
        {blocksItem && allBlockSubcategories.length > 0 && (
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={cn(
                "text-muted-foreground hover:text-foreground bg-transparent hover:bg-transparent data-[state=open]:bg-transparent",
                isActive(blocksItem.href) && "text-foreground"
              )}
            >
              {blocksItem.label}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="flex gap-4 p-4 md:w-[600px] lg:w-[800px]">
                <div className="flex w-[180px] shrink-0 flex-col gap-3">
                  <NavigationMenuLink asChild>
                    <Link
                      href="/blocks"
                      className="group flex h-fit flex-col justify-end rounded-md border border-input bg-transparent p-4 no-underline shadow-sm outline-none select-none hover:bg-transparent dark:bg-input/30 dark:hover:bg-input/30"
                    >
                      <div className="mb-2 flex items-center justify-between text-lg font-medium">
                        Blocks
                        <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-foreground" />
                      </div>
                      <p className="text-muted-foreground text-sm leading-tight">
                        300+ professionally designed blocks ready to use.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                  <div className="relative">
                    <Search className="text-muted-foreground absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2" />
                    <Input
                      placeholder="Search blocks..."
                      value={blocksSearch}
                      onChange={(e) => setBlocksSearch(e.target.value)}
                      className="h-8 pl-8 text-sm"
                    />
                  </div>
                </div>
                <ul className="grid max-h-[50vh] flex-1 auto-rows-min grid-cols-3 content-start gap-1 overflow-y-auto">
                  {allBlockSubcategories
                    .filter((sub) =>
                      formatName(sub.name).toLowerCase().includes(blocksSearch.toLowerCase())
                    )
                    .map((sub) => (
                      <li key={`${sub.category}-${sub.name}`}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={`/blocks/category/${sub.category}/subcategory/${sub.name}`}
                            className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            {formatName(sub.name)}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        )}

        {/* Components dropdown */}
        {componentsItem && componentPages.length > 0 && (
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={cn(
                "text-muted-foreground hover:text-foreground bg-transparent hover:bg-transparent data-[state=open]:bg-transparent",
                isActive(componentsItem.href) && "text-foreground"
              )}
            >
              {componentsItem.label}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="flex gap-4 p-4 md:w-[600px] lg:w-[800px]">
                <div className="flex w-[180px] shrink-0 flex-col gap-3">
                  <NavigationMenuLink asChild>
                    <Link
                      href="/docs/components"
                      className="group flex h-fit flex-col justify-end rounded-md border border-input bg-transparent p-4 no-underline shadow-sm outline-none select-none hover:bg-transparent dark:bg-input/30 dark:hover:bg-input/30"
                    >
                      <div className="mb-2 flex items-center justify-between text-lg font-medium">
                        Components
                        <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-foreground" />
                      </div>
                      <p className="text-muted-foreground text-sm leading-tight">
                        80+ accessible components built with Radix UI.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                  <div className="relative">
                    <Search className="text-muted-foreground absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2" />
                    <Input
                      placeholder="Search components..."
                      value={componentsSearch}
                      onChange={(e) => setComponentsSearch(e.target.value)}
                      className="h-8 pl-8 text-sm"
                    />
                  </div>
                </div>
                <ul className="grid max-h-[50vh] flex-1 auto-rows-min grid-cols-3 content-start gap-1 overflow-y-auto">
                  {componentPages
                    .filter((page) =>
                      page.name.toLowerCase().includes(componentsSearch.toLowerCase())
                    )
                    .map((page) => (
                      <li key={page.url}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={page.url}
                            className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            {page.name}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        )}

        {/* Animations dropdown */}
        {animationsItem && animationPages.length > 0 && (
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={cn(
                "text-muted-foreground hover:text-foreground bg-transparent hover:bg-transparent data-[state=open]:bg-transparent",
                isActive(animationsItem.href) && "text-foreground"
              )}
            >
              {animationsItem.label}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="flex gap-4 p-4 md:w-[600px] lg:w-[800px]">
                <div className="flex w-[180px] shrink-0 flex-col gap-3">
                  <NavigationMenuLink asChild>
                    <Link
                      href="/docs/animations"
                      className="group flex h-fit flex-col justify-end rounded-md border border-input bg-transparent p-4 no-underline shadow-sm outline-none select-none hover:bg-transparent dark:bg-input/30 dark:hover:bg-input/30"
                    >
                      <div className="mb-2 flex items-center justify-between text-lg font-medium">
                        Animations
                        <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-foreground" />
                      </div>
                      <p className="text-muted-foreground text-sm leading-tight">
                        30+ smooth animations powered by Motion.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                  <div className="relative">
                    <Search className="text-muted-foreground absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2" />
                    <Input
                      placeholder="Search animations..."
                      value={animationsSearch}
                      onChange={(e) => setAnimationsSearch(e.target.value)}
                      className="h-8 pl-8 text-sm"
                    />
                  </div>
                </div>
                <ul className="grid max-h-[50vh] flex-1 auto-rows-min grid-cols-3 content-start gap-1 overflow-y-auto">
                  {animationPages
                    .filter((page) =>
                      page.name.toLowerCase().includes(animationsSearch.toLowerCase())
                    )
                    .map((page) => (
                      <li key={page.url}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={page.url}
                            className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            {page.name}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        )}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
