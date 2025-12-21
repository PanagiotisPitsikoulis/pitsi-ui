"use client"

import Link from "next/link"
import { Button } from "@/registry/new-york-v4/ui/button"

export function HeaderProductCoffee() {
  return (
    <header className="py-5 bg-gradient-to-b from-background to-background/50">
      <div className="container px-6">
        <div className="flex items-center justify-between">
          <Link href="#" className="text-2xl font-semibold text-foreground">
            Roast
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Shop</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Subscription</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Our Story</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Brewing Guide</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden md:inline-flex">Account</Button>
            <Button variant="default">Shop Now</Button>
          </div>
        </div>
      </div>
    </header>
  )
}
