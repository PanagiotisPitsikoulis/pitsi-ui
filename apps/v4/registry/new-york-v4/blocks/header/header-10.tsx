"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Github, Search, User } from "lucide-react"

import { type HeaderBlockProps } from "@/lib/blocks/header.types"
import { cn } from "@/lib/utils"
import Noise from "@/registry/new-york-v4/animations/noise/noise"
import { ScrollFade } from "@/registry/new-york-v4/animations/scroll-fade/scroll-fade"
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/new-york-v4/ui/popover"

// Block-specific defaults matching the actual site header
const header10Defaults = {
  logo: {
    text: "Acme",
    href: "/",
  },
  navigation: [
    { label: "Docs", href: "/docs" },
    { label: "Components", href: "/docs/components" },
    { label: "Blocks", href: "/blocks" },
    { label: "Pricing", href: "/pricing" },
  ],
  quickLinks: [
    { label: "Get Started", href: "/docs" },
    { label: "Changelog", href: "/changelog" },
    { label: "GitHub", href: "https://github.com", external: true },
  ],
  cta: { label: "Sign In", href: "/login" },
}

// Logo Icon Component
function LogoIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 1 21.5 6.5V17.5L13 22.4211V11.4234L3.49793 5.92225 12 1ZM2.5 7.6555V17.5L11 22.4211V12.5765L2.5 7.6555Z" />
    </svg>
  )
}

// Main Navigation (Desktop)
function MainNav({
  items,
  className,
}: {
  items: { label: string; href: string }[]
  className?: string
}) {
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <nav className={cn("flex items-center gap-1", className)}>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "text-muted-foreground hover:text-foreground inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors",
            isActive(item.href) && "text-foreground"
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}

// Mobile Navigation
function MobileNav({
  items,
  quickLinks,
  logoText,
  open,
  onOpenChange,
}: {
  items: { label: string; href: string }[]
  quickLinks: { label: string; href: string; external?: boolean }[]
  logoText: string
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const router = useRouter()

  return (
    <Popover open={open} onOpenChange={onOpenChange}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          className="extend-touch-target h-8 touch-manipulation items-center justify-start gap-2.5 !p-0 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 active:bg-transparent"
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
          <LogoIcon className="size-5" />
          <span className="font-semibold tracking-tight">{logoText}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="bg-background no-scrollbar h-[var(--radix-popper-available-height)] w-[var(--radix-popper-available-width)] overflow-y-auto rounded-none border-none p-0 duration-100"
        align="start"
        side="bottom"
        alignOffset={-16}
        sideOffset={14}
      >
        <div className="flex flex-col gap-6 overflow-auto px-6 py-6">
          {/* Main Navigation */}
          <div className="flex flex-col gap-3">
            <h3 className="text-muted-foreground text-xs font-semibold tracking-wider uppercase">
              Navigation
            </h3>
            <div className="flex flex-col gap-1">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    router.push(item.href)
                    onOpenChange(false)
                  }}
                  className="text-foreground/80 hover:text-foreground py-1.5 text-sm font-medium transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h3 className="text-muted-foreground text-xs font-semibold tracking-wider uppercase">
              Quick Links
            </h3>
            <div className="flex flex-col gap-1">
              {quickLinks.map((link) =>
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => onOpenChange(false)}
                    className="text-foreground/80 hover:text-foreground py-1.5 text-sm font-medium transition-colors"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => {
                      router.push(link.href)
                      onOpenChange(false)
                    }}
                    className="text-foreground/80 hover:text-foreground py-1.5 text-sm font-medium transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export function Header10({ content = {}, classNames = {} }: HeaderBlockProps) {
  const [hasScrolled, setHasScrolled] = React.useState(false)
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const {
    logo = header10Defaults.logo,
    navigation = header10Defaults.navigation,
    cta = header10Defaults.cta,
  } = content

  React.useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <ScrollFade scrollBased={false} delay={0.1} duration={0.5}>
      <header
        className={cn(
          "sticky top-0 z-[99] w-full transition-colors",
          hasScrolled ? "bg-background" : "bg-transparent",
          classNames.root
        )}
      >
        {/* Subtle Noise texture overlay */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.03]">
          <Noise patternAlpha={25} patternRefreshInterval={4} />
        </div>

        <div
          className={cn(
            "relative container flex h-14 items-center px-6 lg:px-3",
            classNames.container
          )}
        >
          {/* Mobile Navigation */}
          <div className="flex lg:hidden">
            <MobileNav
              items={navigation}
              quickLinks={header10Defaults.quickLinks}
              logoText={logo?.text ?? "Acme"}
              open={mobileOpen}
              onOpenChange={setMobileOpen}
            />
          </div>

          {/* Desktop Logo */}
          <Button
            asChild
            variant="ghost"
            className={cn("hidden h-8 gap-2 px-2 lg:flex", classNames.logo)}
          >
            <Link href={logo?.href ?? "/"}>
              <LogoIcon className="size-5" />
              <span className="font-semibold tracking-tight">{logo?.text}</span>
            </Link>
          </Button>

          {/* Desktop Navigation */}
          <MainNav
            items={navigation}
            className={cn("hidden lg:flex", classNames.nav?.root)}
          />

          {/* Right Side Actions */}
          <div className="ml-auto flex items-center gap-1 md:flex-1 md:justify-end md:gap-2">
            {/* Search Button (Placeholder) */}
            <Button
              variant="ghost"
              size="icon"
              className="hidden h-8 w-8 md:flex"
            >
              <Search className="size-4" />
              <span className="sr-only">Search</span>
            </Button>

            {/* Mobile Search */}
            <Button variant="ghost" size="icon" className="h-8 w-8 md:hidden">
              <Search className="size-4" />
              <span className="sr-only">Search</span>
            </Button>

            {/* GitHub Link */}
            <Button asChild variant="ghost" size="icon" className="h-8 w-8">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="size-4" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>

            {/* User Navigation / CTA */}
            {cta && (
              <Button
                asChild
                variant="ghost"
                size="sm"
                className={cn("h-8", classNames.cta)}
              >
                <Link href={cta.href}>
                  <User className="mr-2 size-4" />
                  {cta.label}
                </Link>
              </Button>
            )}
          </div>
        </div>
      </header>
    </ScrollFade>
  )
}

// Backward compatibility export
export default Header10
