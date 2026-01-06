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

const QUICK_LINKS = [
  { name: "Get Started", href: "/docs" },
  { name: "Changelog", href: "/changelog" },
  {
    name: "GitHub",
    href: "https://github.com/PanagiotisPitsikoulis/pitsi-ui",
    external: true,
  },
]

export function MobileNav({
  tree,
  items,
  componentPages = [],
  animationPages = [],
  toolPages = [],
  blockCategories = [],
  className,
}: {
  tree: typeof source.pageTree
  items: { href: string; label: string }[]
  componentPages?: Array<{ name: string; url: string }>
  animationPages?: Array<{ name: string; url: string }>
  toolPages?: Array<{ name: string; url: string }>
  blockCategories?: Array<{ name: string; count: number }>
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
        <div className="flex flex-col gap-6 overflow-auto px-6 py-6">
          {/* Main Navigation */}
          <NavSection title="Navigation">
            <div className="flex flex-col gap-1">
              {items.map((item, index) => (
                <MobileLink key={index} href={item.href} onOpenChange={setOpen}>
                  {item.label}
                </MobileLink>
              ))}
            </div>
          </NavSection>

          {/* Quick Links */}
          <NavSection title="Quick Links">
            <div className="flex flex-col gap-1">
              {QUICK_LINKS.map(({ name, href, external }) => (
                <MobileLink
                  key={name}
                  href={href}
                  onOpenChange={setOpen}
                  external={external}
                >
                  {name}
                </MobileLink>
              ))}
            </div>
          </NavSection>

          {/* Tools Section */}
          {toolPages.length > 0 && (
            <NavSection title="Tools">
              <div className="flex flex-col gap-1">
                {toolPages.map((page) => (
                  <MobileLink
                    key={page.url}
                    href={page.url}
                    onOpenChange={setOpen}
                  >
                    {page.name}
                  </MobileLink>
                ))}
              </div>
            </NavSection>
          )}

          {/* Blocks Section */}
          {blockCategories.length > 0 && (
            <NavSection title="Blocks">
              <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                {blockCategories.map((cat) => (
                  <MobileLink
                    key={cat.name}
                    href={`/blocks/${cat.name}`}
                    onOpenChange={setOpen}
                  >
                    {formatName(cat.name)}
                  </MobileLink>
                ))}
              </div>
            </NavSection>
          )}

          {/* Components Section */}
          {componentPages.length > 0 && (
            <NavSection title="Components">
              <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                {componentPages.map((page) => (
                  <MobileLink
                    key={page.url}
                    href={page.url}
                    onOpenChange={setOpen}
                  >
                    {page.name}
                  </MobileLink>
                ))}
              </div>
            </NavSection>
          )}

          {/* Animations Section */}
          {animationPages.length > 0 && (
            <NavSection title="Animations">
              <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                {animationPages.map((page) => (
                  <MobileLink
                    key={page.url}
                    href={page.url}
                    onOpenChange={setOpen}
                  >
                    {page.name}
                  </MobileLink>
                ))}
              </div>
            </NavSection>
          )}
        </div>
      </PopoverContent>
    </Popover>
  )
}

function NavSection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-muted-foreground text-xs font-semibold tracking-wider uppercase">
        {title}
      </h3>
      {children}
    </div>
  )
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  external,
  ...props
}: LinkProps & {
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
  external?: boolean
}) {
  const router = useRouter()

  if (external) {
    return (
      <a
        href={href.toString()}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => onOpenChange?.(false)}
        className={cn(
          "text-foreground/80 hover:text-foreground py-1.5 text-sm font-medium transition-colors",
          className
        )}
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString())
        onOpenChange?.(false)
      }}
      className={cn(
        "text-foreground/80 hover:text-foreground py-1.5 text-sm font-medium transition-colors",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  )
}
