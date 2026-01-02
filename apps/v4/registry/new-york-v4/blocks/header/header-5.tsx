"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { type HeaderBlockProps } from "@/lib/blocks/header.types"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"

const header5Defaults = {
  logo: {
    text: "Studio",
    href: "#",
  },
  navigation: [
    { label: "Work", href: "#" },
    { label: "Services", href: "#" },
    { label: "About", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
  ],
  cta: { label: "Start Project", href: "#" },
}

export function Header5({ content = {}, classNames = {} }: HeaderBlockProps) {
  const {
    logo = header5Defaults.logo,
    navigation = header5Defaults.navigation,
    cta = header5Defaults.cta,
  } = content

  const [isOpen, setIsOpen] = useState(false)

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
            "container flex h-16 items-center justify-between px-6",
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

          {/* Hamburger Button (Always Visible) */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(true)}
            className={classNames.cta}
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </Button>
        </div>
      </header>

      {/* Full-Screen Overlay Menu */}
      {isOpen && (
        <div className="bg-background fixed inset-0 z-50 flex flex-col">
          {/* Header */}
          <div className="container flex h-16 items-center justify-between px-6">
            <Link
              href={logo?.href ?? "#"}
              className="text-xl font-bold"
              onClick={() => setIsOpen(false)}
            >
              {logo?.text}
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>

          {/* Navigation */}
          <nav className="container flex flex-1 flex-col justify-center px-6">
            <ul className="space-y-6">
              {navigation.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="text-foreground hover:text-muted-foreground block text-4xl font-bold transition-colors md:text-6xl"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer CTA */}
          <div className="container flex items-center justify-between px-6 py-8">
            {cta && (
              <Button size="lg" className="text-lg" asChild>
                <Link href={cta.href} onClick={() => setIsOpen(false)}>
                  {cta.label}
                </Link>
              </Button>
            )}
            <div className="text-muted-foreground text-sm">
              hello@studio.com
            </div>
          </div>
        </div>
      )}
    </>
  )
}
