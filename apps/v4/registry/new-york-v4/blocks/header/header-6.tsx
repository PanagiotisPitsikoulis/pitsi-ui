"use client"

import { useState } from "react"
import dynamic from "next/dynamic"
import Link from "next/link"
import { AnimatePresence, motion } from "motion/react"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { type HeaderBlockProps } from "@/lib/blocks/header.types"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Input } from "@/registry/new-york-v4/ui/input"

// Dynamic import for Dither to avoid SSR issues with Three.js
const Dither = dynamic(
  () => import("@/registry/new-york-v4/animations/dither/dither"),
  { ssr: false }
)

const header6Defaults = {
  logo: {
    text: "Foliage",
    href: "#",
  },
  navigation: [
    { label: "Shop Plants", href: "#" },
    { label: "Care Guide", href: "#" },
    { label: "Workshops", href: "#" },
    { label: "About", href: "#" },
  ],
  cta: { label: "Get Started", href: "#" },
}

const searchResults = [
  {
    title: "Monstera Deliciosa",
    description: "Tropical statement plant",
    href: "#",
  },
  { title: "Snake Plant", description: "Low-light tolerant", href: "#" },
  { title: "Pothos", description: "Trailing vine plant", href: "#" },
  { title: "Plant Care Tips", description: "Complete guide", href: "#" },
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
              <DynamicIcon name="Search" className="h-4 w-4" />
              <span className="text-sm">Search plants...</span>
            </div>
            <kbd className="bg-muted pointer-events-none flex h-5 items-center gap-1 rounded border px-1.5 text-xs">
              <DynamicIcon name="Command" className="h-3 w-3" />K
            </kbd>
          </Button>

          {/* Mobile Search */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsSearchOpen(true)}
          >
            <DynamicIcon name="Search" className="h-5 w-5" />
          </Button>

          {/* CTA */}
          {cta && (
            <Button
              size="sm"
              className={cn("bg-brand hover:bg-brand/90", classNames.cta)}
              asChild
            >
              <Link href={cta.href}>{cta.label}</Link>
            </Button>
          )}
        </div>
      </header>

      {/* Search Overlay with Dither Background Effect */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-start justify-center pt-20"
          >
            {/* Dither Background */}
            <div className="absolute inset-0 overflow-hidden">
              <Dither
                waveSpeed={0.03}
                waveFrequency={2}
                waveAmplitude={0.4}
                waveColor={[0.24, 0.42, 0.34]} // Sage green color
                colorNum={4}
                pixelSize={3}
                disableAnimation={false}
                enableMouseInteraction={true}
                mouseRadius={0.8}
              />
              {/* Overlay to darken the dither effect */}
              <div className="bg-background/80 absolute inset-0" />
            </div>

            {/* Search Content */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="bg-background border-border relative z-10 mx-4 w-full max-w-xl rounded-xl border p-6 shadow-2xl"
            >
              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4"
                onClick={() => setIsSearchOpen(false)}
              >
                <DynamicIcon name="X" className="h-5 w-5" />
                <span className="sr-only">Close search</span>
              </Button>

              <div className="space-y-4">
                <div className="relative">
                  <DynamicIcon
                    name="Search"
                    className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2"
                  />
                  <Input
                    placeholder="Search plants, care tips..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                  />
                </div>
                <div className="space-y-2">
                  {filteredResults.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className="hover:bg-muted group flex items-center gap-3 rounded-lg p-3 transition-colors"
                        onClick={() => setIsSearchOpen(false)}
                      >
                        <div className="bg-brand/10 group-hover:bg-brand/20 flex h-10 w-10 items-center justify-center rounded-lg transition-colors">
                          <DynamicIcon
                            name="Leaf"
                            className="text-brand h-4 w-4"
                          />
                        </div>
                        <div>
                          <div className="text-foreground group-hover:text-brand text-sm font-medium transition-colors">
                            {item.title}
                          </div>
                          <div className="text-muted-foreground text-xs">
                            {item.description}
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                  {filteredResults.length === 0 && searchQuery && (
                    <div className="text-muted-foreground py-8 text-center text-sm">
                      No results found for "{searchQuery}"
                    </div>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Click outside to close */}
            <div
              className="absolute inset-0 -z-10"
              onClick={() => setIsSearchOpen(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

// Re-export for backwards compatibility
export { Header6 as Header6ServicePlants }
