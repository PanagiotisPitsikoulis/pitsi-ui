"use client"

import Link from "next/link"
import { Button } from "@/registry/new-york-v4/ui/button"

export function HeaderServiceMarketing() {
  return (
    <header className="py-4 border-b border-border bg-background">
      <div className="container px-6">
        <div className="flex items-center justify-between">
          <Link href="#" className="text-xl font-semibold text-foreground">
            Growth Co
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Services</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Case Studies</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Resources</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="hidden md:inline-flex">Login</Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </header>
  )
}
