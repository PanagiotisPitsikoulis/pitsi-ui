"use client"

import Link from "next/link"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { type HeaderBlockProps } from "@/lib/blocks/header.types"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback } from "@/registry/new-york-v4/ui/avatar"
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/new-york-v4/ui/dropdown-menu"

const header16Defaults = {
  logo: {
    text: "Explore Hub",
    href: "#",
  },
  navigation: [
    { label: "Destinations", href: "#" },
    { label: "Tours", href: "#" },
    { label: "Flights", href: "#" },
    { label: "Hotels", href: "#" },
    { label: "Deals", href: "#" },
  ],
  cta: { label: "Book a Trip", href: "#" },
}

const userMenuItems = {
  profile: [
    { label: "My Profile", href: "#", icon: "User" },
    { label: "My Bookings", href: "#", icon: "Calendar" },
    { label: "Saved Trips", href: "#", icon: "Heart" },
    { label: "Travel Rewards", href: "#", icon: "Star" },
  ],
  settings: [
    { label: "Account Settings", href: "#", icon: "Settings" },
    { label: "Notifications", href: "#", icon: "Bell" },
    { label: "Help & Support", href: "#", icon: "HelpCircle" },
  ],
}

export function Header16({ content = {}, classNames = {} }: HeaderBlockProps) {
  const {
    logo = header16Defaults.logo,
    navigation = header16Defaults.navigation,
    cta = header16Defaults.cta,
  } = content

  return (
    <header
      className={cn(
        "bg-background border-border sticky top-0 z-50 border-b",
        classNames.root
      )}
    >
      <div
        className={cn(
          "container flex h-16 items-center justify-between px-6",
          classNames.container
        )}
      >
        {/* Logo */}
        <Link
          href={logo?.href ?? "#"}
          className={cn("flex items-center gap-2", classNames.logo)}
        >
          <div className="bg-brand flex h-9 w-9 items-center justify-center rounded-full">
            <DynamicIcon
              name="Globe"
              className="text-brand-foreground h-5 w-5"
            />
          </div>
          <span className="text-foreground text-lg font-bold tracking-tight">
            {logo?.text}
          </span>
        </Link>

        {/* Navigation */}
        <nav
          className={cn(
            "hidden items-center gap-1 lg:flex",
            classNames.nav?.root
          )}
        >
          {navigation.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className={cn(
                "text-muted-foreground hover:text-foreground hover:bg-muted rounded-md px-3 py-2 text-sm font-medium transition-colors",
                classNames.nav?.link
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2">
          {/* Search */}
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <DynamicIcon name="Search" className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>

          {/* Notifications */}
          <Button
            variant="ghost"
            size="icon"
            className="relative hidden h-9 w-9 md:flex"
          >
            <DynamicIcon name="Bell" className="h-4 w-4" />
            <span className="bg-brand absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full" />
            <span className="sr-only">Notifications</span>
          </Button>

          {/* CTA Button */}
          {cta && (
            <Button
              className={cn(
                "bg-brand hover:bg-brand/90 hidden md:flex",
                classNames.cta
              )}
              asChild
            >
              <Link href={cta.href}>{cta.label}</Link>
            </Button>
          )}

          {/* User Account Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="relative h-9 w-9 rounded-full p-0"
              >
                <Avatar className="h-9 w-9">
                  <AvatarFallback className="bg-brand/10 text-brand">
                    <DynamicIcon name="User" className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm leading-none font-medium">
                    Welcome, Traveler
                  </p>
                  <p className="text-muted-foreground text-xs leading-none">
                    traveler@example.com
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                {userMenuItems.profile.map((item, i) => (
                  <DropdownMenuItem key={i} asChild>
                    <Link href={item.href} className="cursor-pointer">
                      <DynamicIcon name={item.icon} className="mr-2 h-4 w-4" />
                      <span>{item.label}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                {userMenuItems.settings.map((item, i) => (
                  <DropdownMenuItem key={i} asChild>
                    <Link href={item.href} className="cursor-pointer">
                      <DynamicIcon name={item.icon} className="mr-2 h-4 w-4" />
                      <span>{item.label}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive cursor-pointer">
                <DynamicIcon name="LogOut" className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile Menu */}
          <Button variant="ghost" size="icon" className="h-9 w-9 lg:hidden">
            <DynamicIcon name="Menu" className="h-5 w-5" />
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </div>
    </header>
  )
}

export { Header16 as HeaderServiceTravel16 }
