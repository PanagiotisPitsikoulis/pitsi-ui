"use client"

import { useState } from "react"
import Link from "next/link"
import { Command, Search } from "lucide-react"

import { type HeaderBlockProps } from "@/lib/blocks/header.types"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/registry/new-york-v4/ui/dialog"
import { Input } from "@/registry/new-york-v4/ui/input"

const header6Defaults = {
  logo: {
    text: "Docs",
    href: "#",
  },
  navigation: [
    { label: "Documentation", href: "#" },
    { label: "Components", href: "#" },
    { label: "Examples", href: "#" },
    { label: "GitHub", href: "#" },
  ],
  cta: { label: "Get Started", href: "#" },
}

const searchResults = [
  { title: "Getting Started", description: "Learn the basics", href: "#" },
  { title: "Installation", description: "Install the package", href: "#" },
  { title: "Components", description: "Browse all components", href: "#" },
  { title: "API Reference", description: "Complete API docs", href: "#" },
]

export function Header6({ content = {}, classNames = {} }: HeaderBlockProps) {
  const {
    logo = header6Defaults.logo,
    navigation = header6Defaults.navigation,
    cta = header6Defaults.cta,
  } = content

  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredResults = searchResults.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <>
      <header
        className={cn(
          "bg-background border-border sticky top-0 z-50 border-b",
          classNames.root
        )}
      >
        <div
          className={cn(
            "container flex h-16 items-center gap-6 px-6",
            classNames.container
          )}
        >
          {/* Logo */}
          <Link
            href={logo?.href ?? "#"}
            className={cn("text-xl font-bold", classNames.logo)}
          >
            {logo?.text}
          </Link>

          {/* Navigation */}
          <nav
            className={cn(
              "hidden items-center gap-6 md:flex",
              classNames.nav?.root
            )}
          >
            {navigation.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className={cn(
                  "text-muted-foreground hover:text-foreground text-sm font-medium transition-colors",
                  classNames.nav?.link
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Search Button */}
          <Button
            variant="outline"
            className="text-muted-foreground hidden h-9 w-64 justify-between px-3 md:flex"
            onClick={() => setIsSearchOpen(true)}
          >
            <div className="flex items-center gap-2">
              <Search className="h-4 w-4" />
              <span className="text-sm">Search documentation...</span>
            </div>
            <kbd className="bg-muted pointer-events-none flex h-5 items-center gap-1 rounded border px-1.5 text-xs">
              <Command className="h-3 w-3" />K
            </kbd>
          </Button>

          {/* Mobile Search */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsSearchOpen(true)}
          >
            <Search className="h-5 w-5" />
          </Button>

          {/* CTA */}
          {cta && (
            <Button size="sm" className={classNames.cta} asChild>
              <Link href={cta.href}>{cta.label}</Link>
            </Button>
          )}
        </div>
      </header>

      {/* Search Dialog */}
      <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
        <DialogContent className="sm:max-w-xl">
          <DialogHeader>
            <DialogTitle className="sr-only">Search</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="relative">
              <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
              <Input
                placeholder="Search documentation..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
            </div>
            <div className="space-y-2">
              {filteredResults.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="hover:bg-muted flex items-center gap-3 rounded-lg p-3 transition-colors"
                  onClick={() => setIsSearchOpen(false)}
                >
                  <div className="bg-muted flex h-10 w-10 items-center justify-center rounded-lg">
                    <Search className="text-muted-foreground h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-foreground text-sm font-medium">
                      {item.title}
                    </div>
                    <div className="text-muted-foreground text-xs">
                      {item.description}
                    </div>
                  </div>
                </Link>
              ))}
              {filteredResults.length === 0 && searchQuery && (
                <div className="text-muted-foreground py-8 text-center text-sm">
                  No results found for "{searchQuery}"
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
