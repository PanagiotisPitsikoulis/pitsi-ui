"use client"

import { useState } from "react"
import Link from "next/link"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { type HeaderBlockProps } from "@/lib/blocks/header.types"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Input } from "@/registry/new-york-v4/ui/input"

const header14Defaults = {
  logo: {
    text: "Voyager",
    href: "#",
  },
  navigation: [
    { label: "Destinations", href: "#" },
    { label: "Tours", href: "#" },
    { label: "Deals", href: "#" },
    { label: "About", href: "#" },
  ],
  cta: { label: "Book Now", href: "#" },
}

export function Header14({ content = {}, classNames = {} }: HeaderBlockProps) {
  const {
    logo = header14Defaults.logo,
    navigation = header14Defaults.navigation,
    cta = header14Defaults.cta,
  } = content

  const [searchQuery, setSearchQuery] = useState("")
  const [isSearchFocused, setIsSearchFocused] = useState(false)

  return (
    <header
      className={cn(
        "bg-background border-border sticky top-0 z-50 border-b",
        classNames.root
      )}
    >
      {/* Top Bar with Search */}
      <div className="bg-muted/30 border-border border-b">
        <div
          className={cn(
            "container flex h-12 items-center justify-between px-6",
            classNames.container
          )}
        >
          {/* Contact Info */}
          <div className="text-muted-foreground hidden items-center gap-6 text-sm md:flex">
            <div className="flex items-center gap-2">
              <DynamicIcon name="Phone" className="h-4 w-4" />
              <span>1-800-TRAVEL</span>
            </div>
            <div className="flex items-center gap-2">
              <DynamicIcon name="Mail" className="h-4 w-4" />
              <span>info@voyager.com</span>
            </div>
          </div>

          {/* Search Bar */}
          <div
            className={cn(
              "relative flex-1 transition-all duration-300 md:ml-8 md:max-w-md",
              isSearchFocused && "md:max-w-lg"
            )}
          >
            <DynamicIcon
              name="Search"
              className={cn(
                "absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transition-colors",
                isSearchFocused ? "text-brand" : "text-muted-foreground"
              )}
            />
            <Input
              type="search"
              placeholder="Search destinations, tours, packages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              className={cn(
                "h-9 pr-4 pl-10 transition-all duration-300",
                isSearchFocused && "ring-brand ring-2"
              )}
            />
          </div>

          {/* Quick Links */}
          <div className="hidden items-center gap-4 lg:flex">
            <Button variant="ghost" size="sm" className="h-8 gap-2">
              <DynamicIcon name="Heart" className="h-4 w-4" />
              <span>Wishlist</span>
            </Button>
            <Button variant="ghost" size="sm" className="h-8 gap-2">
              <DynamicIcon name="User" className="h-4 w-4" />
              <span>Account</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div
        className={cn(
          "container flex h-16 items-center justify-between px-6",
          classNames.container
        )}
      >
        {/* Logo */}
        <Link
          href={logo?.href ?? "#"}
          className={cn("flex items-center gap-3", classNames.logo)}
        >
          <div className="relative">
            <div className="bg-brand/10 absolute inset-0 animate-pulse rounded-full" />
            <div className="bg-brand relative flex h-10 w-10 items-center justify-center rounded-full">
              <DynamicIcon
                name="Globe"
                className="text-brand-foreground h-6 w-6"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-foreground text-lg leading-tight font-bold">
              {logo?.text}
            </span>
            <span className="text-muted-foreground text-xs">
              Travel & Adventures
            </span>
          </div>
        </Link>

        {/* Navigation */}
        <nav
          className={cn(
            "hidden items-center gap-1 md:flex",
            classNames.nav?.root
          )}
        >
          {navigation.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className={cn(
                "text-muted-foreground hover:text-foreground hover:bg-muted rounded-md px-4 py-2 text-sm font-medium transition-colors",
                classNames.nav?.link
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          {cta && (
            <Button
              className={cn("bg-brand hover:bg-brand/90", classNames.cta)}
              asChild
            >
              <Link href={cta.href}>
                <DynamicIcon name="Calendar" className="mr-2 h-4 w-4" />
                {cta.label}
              </Link>
            </Button>
          )}

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <DynamicIcon name="Menu" className="h-5 w-5" />
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </div>
    </header>
  )
}

export { Header14 as HeaderServiceTravel14 }
