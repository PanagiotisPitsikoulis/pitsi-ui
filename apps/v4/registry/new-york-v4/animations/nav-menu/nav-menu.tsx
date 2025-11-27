// @ts-nocheck
"use client"

import type { ReactNode } from "react"
import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"

import { cn } from "@/lib/utils"

export type NavLink = {
  title: string
  href: string
  src?: string
}

export type NavMenuProps = {
  /** Brand name or logo content */
  brand?: ReactNode
  /** Array of navigation links */
  links: NavLink[]
  /** Right side content (e.g., cart, CTA) */
  rightContent?: ReactNode
  /** Additional CSS classes */
  className?: string
}

const transition = { duration: 1, ease: [0.76, 0, 0.24, 1] }

const opacity = {
  initial: { opacity: 0 },
  open: { opacity: 1, transition: { duration: 0.35 } },
  closed: { opacity: 0, transition: { duration: 0.35 } },
}

const height = {
  initial: { height: 0 },
  enter: { height: "auto", transition },
  exit: { height: 0, transition },
}

const background = {
  initial: { height: 0 },
  open: { height: "100vh", transition },
  closed: { height: 0, transition },
}

const blur = {
  initial: { filter: "blur(0px)", opacity: 1 },
  open: { filter: "blur(4px)", opacity: 0.6, transition: { duration: 0.3 } },
  closed: { filter: "blur(0px)", opacity: 1, transition: { duration: 0.3 } },
}

const translate = {
  initial: { y: "100%", opacity: 0 },
  enter: (i: number[]) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: i[0] },
  }),
  exit: (i: number[]) => ({
    y: "100%",
    opacity: 0,
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: i[1] },
  }),
}

/**
 * An animated navigation menu with character-by-character animations and hover image reveal.
 */
export function NavMenu({
  brand = "Brand",
  links,
  rightContent,
  className,
}: NavMenuProps) {
  const [isActive, setIsActive] = useState(false)
  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  })

  return (
    <div className={cn("fixed top-0 left-0 z-50 w-full", className)}>
      {/* Header Bar */}
      <div className="bg-background/80 flex items-center justify-between px-6 py-4 backdrop-blur-sm">
        <a href="/" className="text-foreground text-lg font-medium">
          {brand}
        </a>

        <button
          onClick={() => setIsActive(!isActive)}
          className="flex items-center gap-3"
        >
          <div
            className={cn(
              "relative h-4 w-6 transition-all",
              isActive && "rotate-45"
            )}
          >
            <span
              className={cn(
                "bg-foreground absolute top-0 left-0 h-0.5 w-full transition-all",
                isActive && "top-1/2 -translate-y-1/2"
              )}
            />
            <span
              className={cn(
                "bg-foreground absolute bottom-0 left-0 h-0.5 w-full transition-all",
                isActive && "top-1/2 -translate-y-1/2 -rotate-90"
              )}
            />
          </div>
          <div className="relative h-5 overflow-hidden">
            <motion.p
              variants={opacity}
              animate={!isActive ? "open" : "closed"}
              className="text-foreground text-sm"
            >
              Menu
            </motion.p>
            <motion.p
              variants={opacity}
              animate={isActive ? "open" : "closed"}
              className="text-foreground absolute top-0 text-sm"
            >
              Close
            </motion.p>
          </div>
        </button>

        <motion.div
          variants={opacity}
          animate={!isActive ? "open" : "closed"}
          className="flex items-center gap-4"
        >
          {rightContent}
        </motion.div>
      </div>

      {/* Background Overlay */}
      <motion.div
        variants={background}
        initial="initial"
        animate={isActive ? "open" : "closed"}
        className="bg-background/95 absolute top-0 left-0 -z-10 w-full"
      />

      {/* Nav Content */}
      <AnimatePresence mode="wait">
        {isActive && (
          <motion.nav
            variants={height}
            initial="initial"
            animate="enter"
            exit="exit"
            className="bg-background overflow-hidden"
          >
            <div className="flex gap-12 p-12">
              <div className="flex flex-1 flex-col gap-4">
                {links.map((link, index) => {
                  const chars = link.title.split("")
                  return (
                    <a
                      key={index}
                      href={link.href}
                      onMouseOver={() =>
                        setSelectedLink({ isActive: true, index })
                      }
                      onMouseLeave={() =>
                        setSelectedLink({ isActive: false, index })
                      }
                    >
                      <motion.p
                        variants={blur}
                        animate={
                          selectedLink.isActive && selectedLink.index !== index
                            ? "open"
                            : "closed"
                        }
                        className="text-foreground flex overflow-hidden text-5xl font-medium md:text-7xl"
                      >
                        {chars.map((char, i) => (
                          <motion.span
                            key={i}
                            custom={[i * 0.02, (chars.length - i) * 0.01]}
                            variants={translate}
                            initial="initial"
                            animate="enter"
                            exit="exit"
                          >
                            {char === " " ? "\u00A0" : char}
                          </motion.span>
                        ))}
                      </motion.p>
                    </a>
                  )
                })}

                <div className="mt-12 flex gap-8">
                  <div className="flex flex-col gap-2">
                    <p className="text-muted-foreground text-sm uppercase">
                      Socials
                    </p>
                    <a href="#" className="text-foreground text-sm">
                      Instagram
                    </a>
                    <a href="#" className="text-foreground text-sm">
                      Twitter
                    </a>
                    <a href="#" className="text-foreground text-sm">
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              {/* Image Preview */}
              {links[selectedLink.index]?.src && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: selectedLink.isActive ? 1 : 0,
                    scale: selectedLink.isActive ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.4 }}
                  className="hidden w-[400px] md:block"
                >
                  <img
                    src={links[selectedLink.index].src}
                    alt={links[selectedLink.index].title}
                    className="h-[300px] w-full object-cover"
                  />
                </motion.div>
              )}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  )
}

export default NavMenu
