"use client"

import * as React from "react"
import Link from "next/link"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { type HeaderBlockProps } from "@/lib/blocks/header.types"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/registry/new-york-v4/ui/navigation-menu"

const header13Defaults = {
  logo: {
    text: "Adventure Co",
    href: "#",
  },
  navigation: [
    { label: "Destinations", href: "#" },
    { label: "Tours", href: "#" },
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#" },
  ],
  cta: { label: "Explore Tours", href: "#" },
}

const destinations = [
  {
    title: "Europe",
    description:
      "Discover historic cities, stunning architecture, and rich culture",
    href: "#",
    icon: "Building",
  },
  {
    title: "Asia",
    description:
      "Ancient temples, vibrant markets, and breathtaking landscapes",
    href: "#",
    icon: "Globe",
  },
  {
    title: "Americas",
    description: "From tropical beaches to majestic mountains and canyons",
    href: "#",
    icon: "Map",
  },
  {
    title: "Africa",
    description: "Safari adventures, diverse wildlife, and stunning savannas",
    href: "#",
    icon: "Compass",
  },
]

const tourTypes = [
  {
    title: "Adventure Tours",
    description: "Hiking, trekking, and outdoor expeditions",
    href: "#",
    icon: "Navigation",
  },
  {
    title: "Cultural Tours",
    description: "Immersive experiences in local traditions",
    href: "#",
    icon: "Heart",
  },
  {
    title: "Luxury Escapes",
    description: "Premium travel with exclusive amenities",
    href: "#",
    icon: "Star",
  },
  {
    title: "Group Tours",
    description: "Travel with like-minded explorers",
    href: "#",
    icon: "Users",
  },
]

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon?: string }
>(({ className, title, children, icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-2">
            {icon && <DynamicIcon name={icon} className="text-brand h-4 w-4" />}
            <div className="text-sm leading-none font-medium">{title}</div>
          </div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export function Header13({ content = {}, classNames = {} }: HeaderBlockProps) {
  const {
    logo = header13Defaults.logo,
    navigation = header13Defaults.navigation,
    cta = header13Defaults.cta,
  } = content

  // Filter out Destinations and Tours from regular navigation
  const regularNavItems = navigation.filter(
    (item) => !["Destinations", "Tours"].includes(item.label)
  )

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
          <div className="bg-brand flex h-8 w-8 items-center justify-center rounded-lg">
            <DynamicIcon
              name="Globe"
              className="text-brand-foreground h-5 w-5"
            />
          </div>
          <span className="text-foreground text-lg font-bold">
            {logo?.text}
          </span>
        </Link>

        {/* Navigation with Mega Menus */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {/* Destinations Mega Menu */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent">
                Destinations
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {destinations.map((destination) => (
                    <ListItem
                      key={destination.title}
                      title={destination.title}
                      href={destination.href}
                      icon={destination.icon}
                    >
                      {destination.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Tours Mega Menu */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent">
                Tours
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {tourTypes.map((tour) => (
                    <ListItem
                      key={tour.title}
                      title={tour.title}
                      href={tour.href}
                      icon={tour.icon}
                    >
                      {tour.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Regular Navigation Items */}
            {regularNavItems.map((item) => (
              <NavigationMenuItem key={item.label}>
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent"
                    )}
                  >
                    {item.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* CTA */}
        {cta && (
          <Button
            className={cn("bg-brand hover:bg-brand/90", classNames.cta)}
            asChild
          >
            <Link href={cta.href}>
              <DynamicIcon name="Navigation" className="mr-2 h-4 w-4" />
              {cta.label}
            </Link>
          </Button>
        )}
      </div>
    </header>
  )
}

export { Header13 as HeaderServiceTravel13 }
