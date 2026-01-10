"use client"

import { useState } from "react"
import Link from "next/link"
import { AnimatePresence } from "motion/react"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { type HeaderBlockProps } from "@/lib/blocks/header.types"
import { cn } from "@/lib/utils"
import {
  PerspectiveContainer,
  PerspectiveSection,
} from "@/registry/new-york-v4/animations/perspective-section-transition/perspective-section-transition"
import { SlideDown } from "@/registry/new-york-v4/animations/slide-down/slide-down"
import { SlideUp } from "@/registry/new-york-v4/animations/slide-up/slide-up"
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

      {/* Full-Screen Overlay Menu with PerspectiveSectionTransition */}
      <AnimatePresence>
        {isOpen && (
          <div className="bg-background fixed inset-0 z-50 flex flex-col">
            <PerspectiveContainer
              height="100%"
              className="flex flex-1 flex-col"
              scrollBased={false}
            >
              {/* Header with SlideDown */}
              <SlideDown
                scrollBased={false}
                delay={0.1}
                duration={0.4}
                distance={20}
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
              </SlideDown>

              {/* Navigation with PerspectiveSection and staggered entrance */}
              <PerspectiveSection
                sticky={false}
                scaleRange={[0.95, 1]}
                rotateRange={[-5, 0]}
                scrollBased={false}
                className="container flex flex-1 flex-col justify-center px-6 h-auto"
              >
                <nav>
                  <ul className="space-y-4">
                    {navigation.map((item, i) => (
                      <li
                        key={i}
                        style={{
                          perspective: "800px",
                          transformStyle: "preserve-3d",
                        }}
                      >
                        <SlideUp
                          scrollBased={false}
                          delay={0.15 + i * 0.08}
                          duration={0.5}
                          distance={30}
                        >
                          <Link
                            href={item.href}
                            className="text-foreground hover:text-brand group block text-4xl font-bold transition-all duration-300 md:text-6xl"
                            onClick={() => setIsOpen(false)}
                          >
                            <span className="inline-block transition-transform duration-300 group-hover:translate-x-5">
                              {item.label}
                            </span>
                            <span className="text-brand ml-4 inline-block opacity-0 transition-opacity group-hover:opacity-100">
                              &#8594;
                            </span>
                          </Link>
                        </SlideUp>
                      </li>
                    ))}
                  </ul>
                </nav>
              </PerspectiveSection>

              {/* Footer CTA with SlideUp */}
              <SlideUp
                scrollBased={false}
                delay={0.5}
                duration={0.4}
                distance={20}
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
              </SlideUp>
            </PerspectiveContainer>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}

// Re-export for backwards compatibility
export { Header5 as Header5ServicePlants }
