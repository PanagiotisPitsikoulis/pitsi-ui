import Link from "next/link"

import { Code2, Menu } from "lucide-react"

export function ServicesHeader() {
  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/websites" className="flex items-center gap-2">
          <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-lg">
            <Code2 className="text-primary-foreground h-5 w-5" />
          </div>
          <span className="text-lg font-bold">Pitsi Services</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="/websites"
            className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
          >
            Websites
          </Link>
          <Link
            href="/apps"
            className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
          >
            Mobile Apps
          </Link>
          <Link
            href="/"
            className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
          >
            Component Library
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/signin"
            className="text-muted-foreground hover:text-foreground hidden text-sm font-medium transition-colors md:block"
          >
            Sign In
          </Link>
          <Link
            href="/websites"
            className="bg-primary text-primary-foreground hover:bg-primary/90 hidden rounded-md px-4 py-2 text-sm font-medium md:block"
          >
            Get Started
          </Link>
          <button className="md:hidden" aria-label="Menu">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  )
}
