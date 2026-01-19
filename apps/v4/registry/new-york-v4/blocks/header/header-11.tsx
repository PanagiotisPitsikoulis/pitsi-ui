"use client"

import Link from "next/link"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { type HeaderBlockProps } from "@/lib/blocks/header.types"
import { cn } from "@/lib/utils"
import { ScrollFade } from "@/registry/new-york-v4/animations/scroll-fade/scroll-fade"
import { Button } from "@/registry/new-york-v4/ui/button"

const header11Defaults = {
  logo: {
    text: "Wanderlust",
    href: "#",
  },
  navigation: [
    { label: "Destinations", href: "#" },
    { label: "Tours", href: "#" },
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#" },
  ],
  cta: { label: "Book Now", href: "#" },
}

export function Header11({ content = {}, classNames = {} }: HeaderBlockProps) {
  const {
    logo = header11Defaults.logo,
    navigation = header11Defaults.navigation,
    cta = header11Defaults.cta,
  } = content

  // Split navigation for centered logo layout
  const leftNav = navigation.slice(0, Math.ceil(navigation.length / 2))
  const rightNav = navigation.slice(Math.ceil(navigation.length / 2))

  return (
    <ScrollFade scrollBased={false} delay={0} duration={0.8}>
      <header
        className={cn(
          "bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b backdrop-blur",
          classNames.root
        )}
      >
        <div
          className={cn(
            "container flex h-20 items-center justify-between px-6",
            classNames.container
          )}
        >
          {/* Left Navigation */}
          <nav
            className={cn(
              "hidden flex-1 items-center justify-end gap-8 md:flex",
              classNames.nav?.root
            )}
          >
            {leftNav.map((item, i) => (
              <ScrollFade
                key={i}
                scrollBased={false}
                delay={0.1 + i * 0.05}
                duration={0.6}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "text-muted-foreground hover:text-brand text-sm font-medium tracking-wide uppercase transition-colors",
                    classNames.nav?.link
                  )}
                >
                  {item.label}
                </Link>
              </ScrollFade>
            ))}
          </nav>

          {/* Centered Logo */}
          <ScrollFade scrollBased={false} delay={0.2} duration={0.6}>
            <Link
              href={logo?.href ?? "#"}
              className={cn(
                "mx-8 flex flex-col items-center gap-1",
                classNames.logo
              )}
            >
              <DynamicIcon name="Compass" className="text-brand h-8 w-8" />
              <span className="text-foreground text-xl font-bold tracking-wider uppercase">
                {logo?.text}
              </span>
            </Link>
          </ScrollFade>

          {/* Right Navigation */}
          <nav
            className={cn(
              "hidden flex-1 items-center justify-start gap-8 md:flex",
              classNames.nav?.root
            )}
          >
            {rightNav.map((item, i) => (
              <ScrollFade
                key={i}
                scrollBased={false}
                delay={0.15 + i * 0.05}
                duration={0.6}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "text-muted-foreground hover:text-brand text-sm font-medium tracking-wide uppercase transition-colors",
                    classNames.nav?.link
                  )}
                >
                  {item.label}
                </Link>
              </ScrollFade>
            ))}
          </nav>

          {/* CTA Button */}
          {cta && (
            <ScrollFade
              scrollBased={false}
              delay={0.3}
              duration={0.6}
              className="md:hidden"
            >
              <Button
                size="sm"
                className={cn("bg-brand hover:bg-brand/90", classNames.cta)}
                asChild
              >
                <Link href={cta.href}>{cta.label}</Link>
              </Button>
            </ScrollFade>
          )}
        </div>
      </header>
    </ScrollFade>
  )
}

export { Header11 as HeaderServiceTravel11 }
