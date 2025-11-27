"use client"

import Link from "next/link"

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
  const footerClassName = "bg-page pt-16 pb-24 md:pt-32 md:pb-16"

  const containerClassName =
    "container relative grid grid-cols-1 gap-y-6 md:grid-cols-[1fr_4fr_16px] xl:grid-cols-5 px-6"

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
      <div className={containerClassName}>
        {/* Top Separator */}
        <div className="bg-border h-px md:col-span-2 xl:col-span-5" />

        {/* General Row - with Documentation, Pages, Templates, and Connect */}
        <div className="text-foreground grid grid-cols-2 gap-x-4 gap-y-6 text-[13px] leading-relaxed tracking-[-0.15px] md:col-span-2 md:grid-cols-5 xl:col-span-5">
          {/* General - Title and Description */}
          <div className="col-span-2 flex flex-col items-start md:col-span-1">
            <div className="flex h-[22px] items-center">
              <h6 className="font-medium">General</h6>
            </div>
            <p className="text-muted-foreground mt-1 max-w-[140px] text-xs leading-relaxed">
              Resources, guides, and helpful links.
            </p>
          </div>
          <div className="col-span-2 grid grid-cols-2 gap-x-4 gap-y-6 md:col-span-4 md:grid-cols-4 xl:grid-cols-5">
            {/* Documentation */}
            <div className="flex flex-col items-start">
              <div className="mb-px flex flex-col items-start">
                <h6 className="font-medium">Documentation</h6>
              </div>
              {docsPages.slice(0, 8).map((page) => (
                <div key={page.url} className="py-px">
                  <Link
                    href={page.url}
                    className="max-w-[140px] truncate opacity-60 transition-opacity hover:opacity-100"
                  >
                    {page.name}
                  </Link>
                </div>
              ))}
            </div>

            {/* Pages (Navigation) */}
            <div className="flex flex-col items-start">
              <div className="mb-px flex flex-col items-start">
                <h6 className="font-medium">Pages</h6>
              </div>
              {navItems.slice(0, navItems.length > 6 ? 6 : 8).map((item) => (
                <div key={item.href} className="py-px">
                  <Link
                    href={item.href}
                    className="max-w-[140px] truncate opacity-60 transition-opacity hover:opacity-100"
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
              {navItems.length > 6 && (
                <div className="py-px">
                  <Link
                    href="/"
                    className="text-foreground opacity-60 transition-opacity hover:opacity-100"
                  >
                    Home
                  </Link>
                </div>
              )}
            </div>

            {/* Templates */}
            <div className="flex flex-col items-start">
              <div className="mb-px flex flex-col items-start">
                <h6 className="font-medium">Templates</h6>
              </div>
              {allBlockSubcategories.slice(0, 8).map((sub) => (
                <div
                  key={`template-${sub.category}-${sub.name}`}
                  className="py-px"
                >
                  <Link
                    href={`/blocks/category/${sub.category}/subcategory/${sub.name}`}
                    className="max-w-[140px] truncate opacity-60 transition-opacity hover:opacity-100"
                  >
                    {formatName(sub.name)}
                  </Link>
                </div>
              ))}
            </div>

            {/* Connect */}
            <div className="flex flex-col items-start">
              <div className="mb-px flex flex-col items-start">
                <h6 className="font-medium">Connect</h6>
              </div>
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
              <div className="mb-px flex flex-col items-start">
                <h6 className="font-medium">Legal</h6>
              </div>
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
          </div>
        </div>

        {/* Separator */}
        <div className="bg-border h-px md:col-span-2 xl:col-span-5" />

        {/* Blocks Row */}
        <div className="text-foreground grid grid-cols-2 gap-x-4 gap-y-6 text-[13px] leading-relaxed tracking-[-0.15px] md:col-span-2 md:grid-cols-5 xl:col-span-5">
          <div className="col-span-2 flex flex-col items-start md:col-span-1">
            <div className="flex h-[22px] items-center">
              <h6 className="font-medium">Blocks</h6>
            </div>
            <p className="text-muted-foreground mt-1 max-w-[140px] text-xs leading-relaxed">
              Larger composed sections for building pages.
            </p>
          </div>
          <div className="col-span-2 grid grid-cols-2 gap-x-4 gap-y-1 md:col-span-4 md:grid-cols-4 xl:grid-cols-5">
            {allBlockSubcategories.map((sub) => (
              <div key={`${sub.category}-${sub.name}`} className="py-px">
                <Link
                  href={`/blocks/category/${sub.category}/subcategory/${sub.name}`}
                  className="max-w-[140px] truncate opacity-60 transition-opacity hover:opacity-100"
                >
                  {formatName(sub.name)}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Separator */}
        <div className="bg-border h-px md:col-span-2 xl:col-span-5" />

        {/* Components Row */}
        <div className="text-foreground grid grid-cols-2 gap-x-4 gap-y-6 text-[13px] leading-relaxed tracking-[-0.15px] md:col-span-2 md:grid-cols-5 xl:col-span-5">
          <div className="col-span-2 flex flex-col items-start md:col-span-1">
            <div className="flex h-[22px] items-center">
              <h6 className="font-medium">Components</h6>
            </div>
            <p className="text-muted-foreground mt-1 max-w-[140px] text-xs leading-relaxed">
              Copy and paste UI components into your apps.
            </p>
          </div>
          <div className="col-span-2 grid grid-cols-2 gap-x-4 gap-y-1 md:col-span-4 md:grid-cols-4 xl:grid-cols-5">
            {componentPages.map((page) => (
              <div key={page.url} className="py-px">
                <Link
                  href={page.url}
                  className="max-w-[140px] truncate opacity-60 transition-opacity hover:opacity-100"
                >
                  {page.name}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Separator */}
        <div className="bg-border h-px md:col-span-2 xl:col-span-5" />

        {/* Animations Row */}
        <div className="text-foreground grid grid-cols-2 gap-x-4 gap-y-6 text-[13px] leading-relaxed tracking-[-0.15px] md:col-span-2 md:grid-cols-5 xl:col-span-5">
          <div className="col-span-2 flex flex-col items-start md:col-span-1">
            <div className="flex h-[22px] items-center">
              <h6 className="font-medium">Animations</h6>
            </div>
            <p className="text-muted-foreground mt-1 max-w-[140px] text-xs leading-relaxed">
              Beautiful animations and effects for your UI.
            </p>
          </div>
          <div className="col-span-2 grid grid-cols-2 gap-x-4 gap-y-1 md:col-span-4 md:grid-cols-4 xl:grid-cols-5">
            {animationPages.map((page) => (
              <div key={page.url} className="py-px">
                <Link
                  href={page.url}
                  className="max-w-[140px] truncate opacity-60 transition-opacity hover:opacity-100"
                >
                  {page.name}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Vertical line after first column - desktop only */}
        <div className="bg-border absolute top-0 bottom-0 left-[200px] hidden w-px md:block" />

        {/* Logo in top right */}
        <div className="absolute top-[26px] right-8">
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
