"use client"

import * as React from "react"
import Link, { LinkProps } from "next/link"
import { useRouter } from "next/navigation"

import { formatName } from "@/lib/format"
import { source } from "@/lib/source"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/shared/icons"
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/new-york-v4/ui/popover"

const TOP_LEVEL_SECTIONS = [
  { name: "Get Started", href: "/docs" },
  {
    name: "MCP Server",
    href: "/docs/mcp",
  },
  {
    name: "Changelog",
    href: "/changelog",
  },
]

export function MobileNav({
  tree,
  items,
  componentPages = [],
  animationPages = [],
  allBlockSubcategories = [],
  className,
}: {
  tree: typeof source.pageTree
  items: { href: string; label: string }[]
  componentPages?: Array<{ name: string; url: string }>
  animationPages?: Array<{ name: string; url: string }>
  allBlockSubcategories?: Array<{ category: string; name: string; count: number }>
  className?: string
}) {
  const [open, setOpen] = React.useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          className={cn(
            "extend-touch-target h-8 touch-manipulation items-center justify-start gap-2.5 !p-0 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 active:bg-transparent dark:hover:bg-transparent",
            className
          )}
        >
          <div className="relative flex h-8 w-4 items-center justify-center">
            <div className="relative size-4">
              <span
                className={cn(
                  "bg-foreground absolute left-0 block h-0.5 w-4 transition-all duration-100",
                  open ? "top-[0.4rem] -rotate-45" : "top-1"
                )}
              />
              <span
                className={cn(
                  "bg-foreground absolute left-0 block h-0.5 w-4 transition-all duration-100",
                  open ? "top-[0.4rem] rotate-45" : "top-2.5"
                )}
              />
            </div>
            <span className="sr-only">Toggle Menu</span>
          </div>
          <Icons.logo className="size-5" />
          <span className="display font-semibold tracking-tight">Pitsi UI</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="bg-background no-scrollbar h-(--radix-popper-available-height) w-(--radix-popper-available-width) overflow-y-auto rounded-none border-none p-0 duration-100"
        align="start"
        side="bottom"
        alignOffset={-16}
        sideOffset={14}
      >
        <div className="flex flex-col gap-12 overflow-auto px-6 py-6">
          <div className="flex flex-col gap-4">
            <div className="text-muted-foreground text-sm font-medium">
              Menu
            </div>
            <div className="flex flex-col gap-3">
              <MobileLink href="/" onOpenChange={setOpen}>
                Home
              </MobileLink>
              {items.map((item, index) => (
                <MobileLink key={index} href={item.href} onOpenChange={setOpen}>
                  {item.label}
                </MobileLink>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-muted-foreground text-sm font-medium">
              Quick Links
            </div>
            <div className="flex flex-col gap-3">
              {TOP_LEVEL_SECTIONS.map(({ name, href }) => {
                return (
                  <MobileLink key={name} href={href} onOpenChange={setOpen}>
                    {name}
                  </MobileLink>
                )
              })}
            </div>
          </div>
          {/* Blocks Section */}
          {allBlockSubcategories.length > 0 && (
            <div className="flex flex-col gap-4">
              <div className="text-muted-foreground text-sm font-medium">
                Blocks
              </div>
              <div className="grid grid-cols-2 gap-2">
                {allBlockSubcategories.map((sub) => (
                  <MobileLink
                    key={`${sub.category}-${sub.name}`}
                    href={`/blocks/category/${sub.category}/subcategory/${sub.name}`}
                    onOpenChange={setOpen}
                    className="text-base"
                  >
                    {formatName(sub.name)}
                  </MobileLink>
                ))}
              </div>
            </div>
          )}
          {/* Components Section */}
          {componentPages.length > 0 && (
            <div className="flex flex-col gap-4">
              <div className="text-muted-foreground text-sm font-medium">
                Components
              </div>
              <div className="grid grid-cols-2 gap-2">
                {componentPages.map((page) => (
                  <MobileLink
                    key={page.url}
                    href={page.url}
                    onOpenChange={setOpen}
                    className="text-base"
                  >
                    {page.name}
                  </MobileLink>
                ))}
              </div>
            </div>
          )}
          {/* Animations Section */}
          {animationPages.length > 0 && (
            <div className="flex flex-col gap-4">
              <div className="text-muted-foreground text-sm font-medium">
                Animations
              </div>
              <div className="grid grid-cols-2 gap-2">
                {animationPages.map((page) => (
                  <MobileLink
                    key={page.url}
                    href={page.url}
                    onOpenChange={setOpen}
                    className="text-base"
                  >
                    {page.name}
                  </MobileLink>
                ))}
              </div>
            </div>
          )}
          <div className="flex flex-col gap-8">
            {tree?.children?.map((group, index) => {
              if (group.type === "folder") {
                return (
                  <div key={index} className="flex flex-col gap-4">
                    <div className="text-muted-foreground text-sm font-medium">
                      {group.name}
                    </div>
                    <div className="flex flex-col gap-3">
                      {group.children.map((item) => {
                        if (item.type === "page") {
                          return (
                            <MobileLink
                              key={`${item.url}-${index}`}
                              href={item.url}
                              onOpenChange={setOpen}
                            >
                              {item.name}
                            </MobileLink>
                          )
                        }
                      })}
                    </div>
                  </div>
                )
              }
            })}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: LinkProps & {
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
}) {
  const router = useRouter()
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString())
        onOpenChange?.(false)
      }}
      className={cn("text-2xl font-medium", className)}
      {...props}
    >
      {children}
    </Link>
  )
}
