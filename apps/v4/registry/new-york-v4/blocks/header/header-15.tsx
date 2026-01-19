"use client"

import Link from "next/link"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { type HeaderBlockProps } from "@/lib/blocks/header.types"
import { cn } from "@/lib/utils"
import { ScrollFade } from "@/registry/new-york-v4/animations/scroll-fade/scroll-fade"
import { Badge } from "@/registry/new-york-v4/ui/badge"
import { Button } from "@/registry/new-york-v4/ui/button"

const header15Defaults = {
  logo: {
    text: "Trailblaze",
    href: "#",
  },
  navigation: [
    { label: "Destinations", href: "#" },
    { label: "Experiences", href: "#" },
    { label: "Packages", href: "#" },
    { label: "About", href: "#" },
    { label: "Contact", href: "#" },
  ],
  cta: { label: "Start Planning", href: "#" },
}

const featuredDestination = {
  name: "Santorini, Greece",
  discount: "25% OFF",
  href: "#",
}

export function Header15({ content = {}, classNames = {} }: HeaderBlockProps) {
  const {
    logo = header15Defaults.logo,
    navigation = header15Defaults.navigation,
    cta = header15Defaults.cta,
  } = content

  return (
    <header className={cn("sticky top-0 z-50", classNames.root)}>
      {/* Featured Destination Banner */}
      <div className="bg-brand text-brand-foreground">
        <div
          className={cn(
            "container flex h-10 items-center justify-center px-6",
            classNames.container
          )}
        >
          <Link
            href={featuredDestination.href}
            className="group flex items-center gap-3 text-sm"
          >
            <Badge
              variant="secondary"
              className="bg-brand-foreground text-brand hover:bg-brand-foreground/90 font-semibold"
            >
              <DynamicIcon name="Sparkles" className="mr-1 h-3 w-3" />
              Featured
            </Badge>
            <span className="hidden sm:inline">
              Discover {featuredDestination.name}
            </span>
            <span className="sm:hidden">{featuredDestination.name}</span>
            <Badge className="bg-brand-foreground/20 text-brand-foreground hover:bg-brand-foreground/30 border-0">
              {featuredDestination.discount}
            </Badge>
            <DynamicIcon
              name="ArrowRight"
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-background border-border border-b">
        <div
          className={cn(
            "container flex h-16 items-center justify-between px-6",
            classNames.container
          )}
        >
          {/* Logo */}
          <ScrollFade scrollBased={false} delay={0} duration={0.6}>
            <Link
              href={logo?.href ?? "#"}
              className={cn("flex items-center gap-2", classNames.logo)}
            >
              <div className="from-brand to-brand/70 flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br shadow-md">
                <DynamicIcon
                  name="Navigation"
                  className="text-brand-foreground h-5 w-5"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-foreground text-lg leading-none font-bold">
                  {logo?.text}
                </span>
                <span className="text-muted-foreground text-[10px] tracking-widest uppercase">
                  Travel Agency
                </span>
              </div>
            </Link>
          </ScrollFade>

          {/* Navigation */}
          <nav
            className={cn(
              "hidden items-center gap-6 lg:flex",
              classNames.nav?.root
            )}
          >
            {navigation.map((item, i) => (
              <ScrollFade
                key={i}
                scrollBased={false}
                delay={0.1 + i * 0.05}
                duration={0.5}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "text-muted-foreground hover:text-brand relative text-sm font-medium transition-colors",
                    "after:bg-brand after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-300 hover:after:w-full",
                    classNames.nav?.link
                  )}
                >
                  {item.label}
                </Link>
              </ScrollFade>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Quick Actions */}
            <div className="hidden items-center gap-1 md:flex">
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <DynamicIcon name="Search" className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <DynamicIcon name="Heart" className="h-4 w-4" />
                <span className="sr-only">Wishlist</span>
              </Button>
            </div>

            {/* CTA */}
            {cta && (
              <ScrollFade scrollBased={false} delay={0.3} duration={0.5}>
                <Button
                  className={cn(
                    "bg-brand hover:bg-brand/90 shadow-md",
                    classNames.cta
                  )}
                  asChild
                >
                  <Link href={cta.href}>
                    <DynamicIcon name="Calendar" className="mr-2 h-4 w-4" />
                    {cta.label}
                  </Link>
                </Button>
              </ScrollFade>
            )}

            {/* Mobile Menu */}
            <Button variant="ghost" size="icon" className="h-9 w-9 lg:hidden">
              <DynamicIcon name="Menu" className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export { Header15 as HeaderServiceTravel15 }
