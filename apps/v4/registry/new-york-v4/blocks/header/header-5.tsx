"use client"

import { useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "motion/react"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { type HeaderBlockProps } from "@/lib/blocks/header.types"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"

const header5Defaults = {
  logo: {
    text: "Verdant",
    href: "#",
  },
  navigation: [
    { label: "Plants", href: "#" },
    { label: "Planters", href: "#" },
    { label: "Care", href: "#" },
    { label: "Journal", href: "#" },
    { label: "About", href: "#" },
  ],
  cta: { label: "Shop Collection", href: "#" },
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
            <DynamicIcon name="Menu" className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </Button>
        </div>
      </header>

      {/* Full-Screen Overlay Menu with 3D Perspective Transition */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, rotateX: -15, scale: 0.95 }}
            animate={{ opacity: 1, rotateX: 0, scale: 1 }}
            exit={{ opacity: 0, rotateX: 15, scale: 0.95 }}
            transition={{
              duration: 0.5,
              ease: [0.25, 0.4, 0.25, 1],
            }}
            style={{
              perspective: "1000px",
              transformOrigin: "top center",
            }}
            className="bg-background fixed inset-0 z-50 flex flex-col"
          >
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="container flex h-16 items-center justify-between px-6"
            >
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
                <DynamicIcon name="X" className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>
            </motion.div>

            {/* Navigation with staggered 3D entrance */}
            <nav className="container flex flex-1 flex-col justify-center px-6">
              <ul className="space-y-4">
                {navigation.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{
                      opacity: 0,
                      rotateX: -30,
                      y: 30,
                    }}
                    animate={{
                      opacity: 1,
                      rotateX: 0,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.15 + i * 0.08,
                      duration: 0.5,
                      ease: [0.25, 0.4, 0.25, 1],
                    }}
                    style={{
                      perspective: "800px",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <Link
                      href={item.href}
                      className="text-foreground hover:text-brand group block text-4xl font-bold transition-all duration-300 md:text-6xl"
                      onClick={() => setIsOpen(false)}
                    >
                      <motion.span
                        className="inline-block"
                        whileHover={{
                          x: 20,
                          transition: { duration: 0.3 },
                        }}
                      >
                        {item.label}
                      </motion.span>
                      <span className="text-brand ml-4 inline-block opacity-0 transition-opacity group-hover:opacity-100">
                        &#8594;
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Footer CTA with 3D entrance */}
            <motion.div
              initial={{ opacity: 0, rotateX: -20, y: 20 }}
              animate={{ opacity: 1, rotateX: 0, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="container flex items-center justify-between px-6 py-8"
            >
              {cta && (
                <Button
                  size="lg"
                  className="bg-brand hover:bg-brand/90 text-lg"
                  asChild
                >
                  <Link href={cta.href} onClick={() => setIsOpen(false)}>
                    {cta.label}
                  </Link>
                </Button>
              )}
              <div className="text-muted-foreground text-sm">
                hello@verdant.com
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

// Re-export for backwards compatibility
export { Header5 as Header5ServicePlants }
