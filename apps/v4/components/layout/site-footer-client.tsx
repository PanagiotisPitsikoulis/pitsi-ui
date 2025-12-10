"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { formatName } from "@/lib/format"
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
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  // Filter docs pages to exclude components and animations (they have dedicated sections)
  const docsPages = allDocsPages.filter(
    (page) =>
      !page.url.includes("/components/") && !page.url.includes("/animations/")
  )

  return (
    <footer className="relative bg-transparent py-12">
      <div className="container px-6">
        {/* General Section - Only on home page */}
        {isHomePage && <div className="mb-12">
          <h5 className="mb-6 border-b border-border text-sm font-semibold">General</h5>
          <div className="grid grid-cols-2 gap-6 text-[13px] leading-relaxed tracking-[-0.15px] md:grid-cols-6">
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
              <div className="py-px">
                <Link
                  href="/changelog"
                  className="opacity-60 transition-opacity hover:opacity-100"
                >
                  Changelog
                </Link>
              </div>
              <div className="py-px">
                <Link
                  href="/blog"
                  className="opacity-60 transition-opacity hover:opacity-100"
                >
                  Blog
                </Link>
              </div>
              <div className="py-px">
                <Link
                  href="/roadmap"
                  className="opacity-60 transition-opacity hover:opacity-100"
                >
                  Roadmap
                </Link>
              </div>
            </div>

            {/* Changelog */}
            <div className="flex flex-col items-start">
              <h6 className="mb-2 font-medium">Changelog</h6>
              <div className="py-px">
                <Link
                  href="/changelog"
                  className="opacity-60 transition-opacity hover:opacity-100"
                >
                  Latest Updates
                </Link>
              </div>
              <div className="py-px">
                <Link
                  href="/changelog#v0.2.0"
                  className="opacity-60 transition-opacity hover:opacity-100"
                >
                  v0.2.0
                </Link>
              </div>
              <div className="py-px">
                <Link
                  href="/changelog#v0.1.5"
                  className="opacity-60 transition-opacity hover:opacity-100"
                >
                  v0.1.5
                </Link>
              </div>
              <div className="py-px">
                <Link
                  href="/changelog#v0.1.4"
                  className="opacity-60 transition-opacity hover:opacity-100"
                >
                  v0.1.4
                </Link>
              </div>
              <div className="py-px">
                <Link
                  href="/changelog#v0.1.3"
                  className="opacity-60 transition-opacity hover:opacity-100"
                >
                  v0.1.3
                </Link>
              </div>
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
                  href="/changelog"
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
        </div>}

        {/* Blocks Section - Only on home page */}
        {isHomePage && <div className="mb-12 hidden md:block">
          <h5 className="mb-6 border-b border-border text-sm font-semibold">Blocks</h5>
          <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-[13px] leading-relaxed tracking-[-0.15px] md:grid-cols-6">
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
        </div>}

        {/* Components Section - Only on home page */}
        {isHomePage && <div className="mb-12 hidden md:block">
          <h5 className="mb-6 border-b border-border text-sm font-semibold">Components</h5>
          <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-[13px] leading-relaxed tracking-[-0.15px] md:grid-cols-6">
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
        </div>}

        {/* Animations Section - Only on home page */}
        {isHomePage && <div className="mb-12 hidden md:block">
          <h5 className="mb-6 border-b border-border text-sm font-semibold">Animations</h5>
          <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-[13px] leading-relaxed tracking-[-0.15px] md:grid-cols-6">
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
        </div>}

        {/* Bottom section with logo and copyright */}
        <div className={`flex items-center justify-between pt-6 ${isHomePage ? "border-t border-border" : ""}`}>
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
  )
}
