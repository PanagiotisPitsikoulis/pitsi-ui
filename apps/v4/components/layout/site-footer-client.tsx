"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { StickyRevealFooter } from "@/registry/new-york-v4/animations/sticky-footer/sticky-footer"
import { ThemeToggle } from "@/registry/new-york-v4/ui/theme-toggle"

interface SiteFooterClientProps {
  githubUrl: string
  twitterUrl: string
  siteName: string
  navItems: Array<{ href: string; label: string }>
  allDocsPages: Array<{
    name: string
    url: string
  }>
  componentPages: Array<{
    name: string
    url: string
  }>
  animationPages: Array<{
    name: string
    url: string
  }>
  blockCategories: Array<{
    name: string
    subcategories: Array<{ name: string; count: number }>
  }>
  allBlockSubcategories: Array<{
    category: string
    name: string
    count: number
  }>
}

type TabType = "general" | "blocks" | "components" | "animations"

export function SiteFooterClient({
  githubUrl,
  twitterUrl,
  siteName,
  navItems,
  allDocsPages,
  componentPages,
  animationPages,
  blockCategories,
  allBlockSubcategories,
}: SiteFooterClientProps) {
  const [activeTab, setActiveTab] = useState<TabType>("general")
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 })
  const tabsRef = useRef<HTMLDivElement>(null)
  const tabRefs = useRef<Map<TabType, HTMLButtonElement>>(new Map())

  useEffect(() => {
    const activeButton = tabRefs.current.get(activeTab)
    if (activeButton && tabsRef.current) {
      const containerRect = tabsRef.current.getBoundingClientRect()
      const buttonRect = activeButton.getBoundingClientRect()
      setIndicatorStyle({
        left: buttonRect.left - containerRect.left,
        width: buttonRect.width,
      })
    }
  }, [activeTab])

  // Format category name for display
  const formatName = (name: string) => {
    return name
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }

  // Filter docs pages to exclude components and animations (they have dedicated sections)
  const docsPages = allDocsPages.filter(
    (page) =>
      !page.url.includes("/components/") && !page.url.includes("/animations/")
  )

  const tabs: { id: TabType; label: string }[] = [
    { id: "general", label: "General" },
    { id: "blocks", label: "Blocks" },
    { id: "components", label: "Components" },
    { id: "animations", label: "Animations" },
  ]

  return (
    <StickyRevealFooter height={600}>
      <footer className="relative flex h-full flex-col justify-end pb-6">
        <div className="container relative px-6">
          {/* Tabs */}
          <div ref={tabsRef} className="relative mb-6 flex gap-1 overflow-x-auto border-b border-border">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                ref={(el) => {
                  if (el) tabRefs.current.set(tab.id, el)
                }}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "relative z-10 px-4 py-2 text-sm font-medium transition-colors",
                  activeTab === tab.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {tab.label}
              </button>
            ))}
            {/* Animated border-bottom indicator */}
            <div
              className="bg-foreground absolute bottom-0 h-[2px] transition-all duration-300 ease-out"
              style={{
                left: indicatorStyle.left,
                width: indicatorStyle.width,
              }}
            />
          </div>

          {/* Tab Content */}
          <div className="h-[280px] overflow-auto text-[13px] leading-relaxed tracking-[-0.15px]">
            {/* General Tab */}
            {activeTab === "general" && (
              <div className="grid grid-cols-2 gap-6 md:grid-cols-6">
                {/* Documentation */}
                <div className="flex flex-col items-start">
                  <h6 className="mb-2 font-medium">Documentation</h6>
                  {docsPages.slice(0, 8).map((page) => (
                    <div key={page.url} className="py-px">
                      <Link
                        href={page.url}
                        className="opacity-60 transition-opacity hover:opacity-100"
                      >
                        {page.name}
                      </Link>
                    </div>
                  ))}
                </div>

                {/* Pages */}
                <div className="flex flex-col items-start">
                  <h6 className="mb-2 font-medium">Pages</h6>
                  {navItems.slice(0, 8).map((item) => (
                    <div key={item.href} className="py-px">
                      <Link
                        href={item.href}
                        className="opacity-60 transition-opacity hover:opacity-100"
                      >
                        {item.label}
                      </Link>
                    </div>
                  ))}
                </div>

                {/* Connect */}
                <div className="flex flex-col items-start">
                  <h6 className="mb-2 font-medium">Connect</h6>
                  <div className="py-px">
                    <a
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="opacity-60 transition-opacity hover:opacity-100"
                    >
                      GitHub
                    </a>
                  </div>
                  <div className="py-px">
                    <a
                      href={twitterUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="opacity-60 transition-opacity hover:opacity-100"
                    >
                      Twitter
                    </a>
                  </div>
                  <div className="py-px">
                    <Link
                      href="/docs"
                      className="opacity-60 transition-opacity hover:opacity-100"
                    >
                      Get Started
                    </Link>
                  </div>
                  <div className="py-px">
                    <Link
                      href="/docs/changelog"
                      className="opacity-60 transition-opacity hover:opacity-100"
                    >
                      Changelog
                    </Link>
                  </div>
                </div>

                {/* Legal */}
                <div className="flex flex-col items-start">
                  <h6 className="mb-2 font-medium">Legal</h6>
                  <div className="py-px">
                    <Link
                      href="/privacy"
                      className="opacity-60 transition-opacity hover:opacity-100"
                    >
                      Privacy
                    </Link>
                  </div>
                  <div className="py-px">
                    <Link
                      href="/terms"
                      className="opacity-60 transition-opacity hover:opacity-100"
                    >
                      Terms
                    </Link>
                  </div>
                </div>

                {/* Account */}
                <div className="flex flex-col items-start">
                  <h6 className="mb-2 font-medium">Account</h6>
                  <div className="py-px">
                    <Link
                      href="/login"
                      className="opacity-60 transition-opacity hover:opacity-100"
                    >
                      Sign In
                    </Link>
                  </div>
                  <div className="py-px">
                    <Link
                      href="/signup"
                      className="opacity-60 transition-opacity hover:opacity-100"
                    >
                      Sign Up
                    </Link>
                  </div>
                  <div className="py-px">
                    <Link
                      href="/dashboard"
                      className="opacity-60 transition-opacity hover:opacity-100"
                    >
                      Dashboard
                    </Link>
                  </div>
                  <div className="py-px">
                    <Link
                      href="/#pricing"
                      className="opacity-60 transition-opacity hover:opacity-100"
                    >
                      Pricing
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* Blocks Tab */}
            {activeTab === "blocks" && (
              <div className="grid grid-cols-2 gap-x-6 gap-y-1 md:grid-cols-6">
                {allBlockSubcategories.map((sub) => (
                  <div key={`${sub.category}-${sub.name}`} className="py-px">
                    <Link
                      href={`/blocks/category/${sub.category}/subcategory/${sub.name}`}
                      className="opacity-60 transition-opacity hover:opacity-100"
                    >
                      {formatName(sub.name)}
                    </Link>
                  </div>
                ))}
              </div>
            )}

            {/* Components Tab */}
            {activeTab === "components" && (
              <div className="grid grid-cols-2 gap-x-6 gap-y-1 md:grid-cols-6">
                {componentPages.map((page) => (
                  <div key={page.url} className="py-px">
                    <Link
                      href={page.url}
                      className="opacity-60 transition-opacity hover:opacity-100"
                    >
                      {page.name}
                    </Link>
                  </div>
                ))}
              </div>
            )}

            {/* Animations Tab */}
            {activeTab === "animations" && (
              <div className="grid grid-cols-2 gap-x-6 gap-y-1 md:grid-cols-6">
                {animationPages.map((page) => (
                  <div key={page.url} className="py-px">
                    <Link
                      href={page.url}
                      className="opacity-60 transition-opacity hover:opacity-100"
                    >
                      {page.name}
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Bottom section with logo and copyright */}
          <div className="mt-6 flex items-center justify-between pt-6">
            <p className="text-muted-foreground text-xs">
              © 2025 pitsi/ui. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              <ThemeToggle mode="light-dark-system" className="w-auto" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-foreground"
              >
                <path d="M12 1 21.5 6.5V17.5L13 22.4211V11.4234L3.49793 5.92225 12 1ZM2.5 7.6555V17.5L11 22.4211V12.5765L2.5 7.6555Z" />
              </svg>
            </div>
          </div>
        </div>
      </footer>
    </StickyRevealFooter>
  )
}
