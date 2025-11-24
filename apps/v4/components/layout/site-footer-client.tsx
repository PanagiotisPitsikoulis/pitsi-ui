"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

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
  const isHomepage = pathname === "/"

  // Only show footer on homepage
  if (!isHomepage) {
    return null
  }

  const footerClassName = "bg-page py-16 md:py-32"

  const containerClassName =
    "max-w-5xl mx-auto relative grid grid-cols-1 gap-y-10 md:grid-cols-[repeat(5,1fr)_16px] px-6 lg:px-3"

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

  return (
    <footer className={footerClassName}>
      <div className={cn("container", containerClassName)}>
        {/* Components Row */}
        <div className="text-foreground md:col-span-5 grid grid-cols-1 md:grid-cols-5 gap-4 text-[13px] leading-none tracking-[-0.15px]">
          <div className="flex flex-col items-start">
            <div className="flex h-[22px] items-center">
              <h6 className="font-medium">Components</h6>
            </div>
            <p className="text-muted-foreground text-xs leading-relaxed mt-1 max-w-[140px]">
              Copy and paste UI components into your apps.
            </p>
          </div>
          <div className="flex flex-col md:col-span-4 grid grid-cols-1 md:grid-cols-4">
            {componentPages.slice(0, componentPages.length > 20 ? 20 : 24).map((page) => (
              <div key={page.url} className="flex h-[24px] items-center">
                <Link
                  href={page.url}
                  className="opacity-60 transition-opacity hover:opacity-100"
                >
                  {page.name}
                </Link>
              </div>
            ))}
            {componentPages.length > 20 && (
              <div className="flex h-[24px] items-center">
                <Link
                  href="/docs/components"
                  className="text-foreground opacity-60 transition-opacity hover:opacity-100"
                >
                  All components
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Blocks Row */}
        <div className="text-foreground md:col-span-5 grid grid-cols-1 md:grid-cols-5 gap-4 text-[13px] leading-none tracking-[-0.15px]">
          <div className="flex flex-col items-start">
            <div className="flex h-[22px] items-center">
              <h6 className="font-medium">Blocks</h6>
            </div>
            <p className="text-muted-foreground text-xs leading-relaxed mt-1 max-w-[140px]">
              Larger composed sections for building pages.
            </p>
          </div>
          <div className="flex flex-col md:col-span-4 grid grid-cols-1 md:grid-cols-4">
            {blockCategories.slice(0, 20).map((category) => (
              <div key={category.name} className="flex flex-col gap-0">
                <div className="flex h-[24px] items-center">
                  <Link
                    href={`/blocks/category/${category.name}/subcategory/${category.subcategories[0]?.name || ""}`}
                    className="font-medium opacity-60 transition-opacity hover:opacity-100"
                  >
                    {formatName(category.name)}
                  </Link>
                </div>
                {category.subcategories.slice(0, 4).map((subcategory) => (
                  <div key={subcategory.name} className="flex h-[24px] items-center">
                    <Link
                      href={`/blocks/category/${category.name}/subcategory/${subcategory.name}`}
                      className="opacity-60 transition-opacity hover:opacity-100"
                    >
                      {formatName(subcategory.name)}
                    </Link>
                  </div>
                ))}
              </div>
            ))}
            {blockCategories.length > 20 && (
              <div className="flex h-[24px] items-center">
                <Link
                  href="/blocks"
                  className="text-foreground opacity-60 transition-opacity hover:opacity-100"
                >
                  All blocks
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Animations Row */}
        <div className="text-foreground md:col-span-5 grid grid-cols-1 md:grid-cols-5 gap-4 text-[13px] leading-none tracking-[-0.15px]">
          <div className="flex flex-col items-start">
            <div className="flex h-[22px] items-center">
              <h6 className="font-medium">Animations</h6>
            </div>
            <p className="text-muted-foreground text-xs leading-relaxed mt-1 max-w-[140px]">
              Beautiful animations and effects for your UI.
            </p>
          </div>
          <div className="flex flex-col md:col-span-4 grid grid-cols-1 md:grid-cols-4">
            {animationPages.slice(0, animationPages.length > 20 ? 20 : 24).map((page) => (
              <div key={page.url} className="flex h-[24px] items-center">
                <Link
                  href={page.url}
                  className="opacity-60 transition-opacity hover:opacity-100"
                >
                  {page.name}
                </Link>
              </div>
            ))}
            {animationPages.length > 20 && (
              <div className="flex h-[24px] items-center">
                <Link
                  href="/docs/animations"
                  className="text-foreground opacity-60 transition-opacity hover:opacity-100"
                >
                  Read more →
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* General Row - with Documentation, Pages, and Templates */}
        <div className="text-foreground md:col-span-5 grid grid-cols-1 md:grid-cols-5 gap-4 text-[13px] leading-none tracking-[-0.15px]">
          {/* General - Title and Description */}
          <div className="flex flex-col items-start">
            <div className="flex h-[22px] items-center">
              <h6 className="font-medium">General</h6>
            </div>
            <p className="text-muted-foreground text-xs leading-relaxed mt-1 max-w-[140px]">
              Resources, guides, and helpful links.
            </p>
          </div>

          {/* Documentation */}
          <div className="flex flex-col items-start">
            <div className="flex h-[22px] items-center">
              <h6 className="font-medium">Documentation</h6>
            </div>
            <div className="flex flex-col">
              {docsPages.slice(0, docsPages.length > 5 ? 5 : 6).map((page) => (
                <div key={page.url} className="flex h-[24px] items-center">
                  <Link
                    href={page.url}
                    className="opacity-60 transition-opacity hover:opacity-100"
                  >
                    {page.name}
                  </Link>
                </div>
              ))}
              {docsPages.length > 5 && (
                <div className="flex h-[24px] items-center">
                  <Link
                    href="/docs"
                    className="text-foreground opacity-60 transition-opacity hover:opacity-100"
                  >
                    Read more →
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Pages (Navigation) */}
          <div className="flex flex-col items-start">
            <div className="flex h-[22px] items-center">
              <h6 className="font-medium">Pages</h6>
            </div>
            <div className="flex flex-col">
              {navItems.slice(0, navItems.length > 5 ? 5 : 6).map((item) => (
                <div key={item.href} className="flex h-[24px] items-center">
                  <Link
                    href={item.href}
                    className="opacity-60 transition-opacity hover:opacity-100"
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
              {navItems.length > 5 && (
                <div className="flex h-[24px] items-center">
                  <Link
                    href="/"
                    className="text-foreground opacity-60 transition-opacity hover:opacity-100"
                  >
                    Home
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Templates - Only 4 items */}
          <div className="flex flex-col items-start">
            <div className="flex h-[22px] items-center">
              <h6 className="font-medium">Templates</h6>
            </div>
            <div className="flex flex-col">
              {allBlockSubcategories.slice(0, allBlockSubcategories.length > 5 ? 5 : 6).map((sub) => (
                <div key={`template-${sub.category}-${sub.name}`} className="flex h-[24px] items-center">
                  <Link
                    href={`/blocks/category/${sub.category}/subcategory/${sub.name}`}
                    className="opacity-60 transition-opacity hover:opacity-100"
                  >
                    {formatName(sub.name)}
                  </Link>
                </div>
              ))}
              {allBlockSubcategories.length > 5 && (
                <div className="flex h-[24px] items-center">
                  <Link
                    href="/templates"
                    className="text-foreground opacity-60 transition-opacity hover:opacity-100"
                  >
                    Read more →
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Logo in top right */}
        <div className="absolute right-0 top-0">
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
    </footer>
  )
}
