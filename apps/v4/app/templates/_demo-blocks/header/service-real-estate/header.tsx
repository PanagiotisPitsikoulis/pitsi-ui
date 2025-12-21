"use client"

import Link from "next/link"
import { Button } from "@/registry/new-york-v4/ui/button"

export function HeaderServiceRealEstate() {
  return (
    <header className="py-5 border-b border-border">
      <div className="container px-6">
        <div className="flex items-center justify-between">
          <Link href="#" className="text-2xl font-semibold text-foreground">
            HomeKey
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Buy</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Sell</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Rent</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Agents</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="hidden md:inline-flex">Sign In</Button>
            <Button>List Property</Button>
          </div>
        </div>
      </div>
    </header>
  )
}
