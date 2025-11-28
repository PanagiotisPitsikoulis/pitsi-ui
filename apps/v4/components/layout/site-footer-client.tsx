"use client"

import { useState } from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { StickyRevealFooter } from "@/registry/new-york-v4/animations/sticky-footer/sticky-footer"

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
        {/* Background images */}
        <img
          src="/marketing/surfing.jpg"
          alt=""
          className="absolute inset-x-0 bottom-0 h-[50%] w-full object-cover object-top [mask-image:linear-gradient(to_bottom,transparent_0%,transparent_30%,black_80%,black_100%)] dark:hidden"
        />
        <img
          src="/marketing/sky-night.jpg"
          alt=""
          className="absolute inset-x-0 bottom-0 hidden h-[50%] w-full object-cover object-top [mask-image:linear-gradient(to_bottom,transparent_0%,transparent_30%,black_80%,black_100%)] dark:block"
        />
        <div className="container relative px-6">
          <div className="mb-32 rounded-3xl border border-zinc-800 bg-zinc-950 px-4 py-4 text-white shadow-2xl md:mb-0">
          {/* Tabs */}
          <div className="mb-6 flex gap-1 border-b border-zinc-800">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-colors",
                  activeTab === tab.id
                    ? "border-b-2 border-white text-white"
                    : "text-zinc-400 hover:text-white"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="h-[280px] overflow-auto px-4 text-[13px] leading-relaxed tracking-[-0.15px] text-white">
            {/* General Tab */}
            {activeTab === "general" && (
              <div className="grid grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-5">
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
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 md:grid-cols-4 xl:grid-cols-5">
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
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 md:grid-cols-4 xl:grid-cols-5">
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
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 md:grid-cols-4 xl:grid-cols-5">
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
          <div className="mx-4 mt-6 flex items-center justify-between border-t border-zinc-800 pt-6">
            <p className="text-zinc-400 text-xs">
              © 2025 pitsi/ui. All rights reserved.
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-white"
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
