"use client"

import Link from "next/link"
import { Button } from "@/registry/new-york-v4/ui/button"

export function HeaderBoat() {
  return (
    <header className="py-5 border-b-2 border-border">
      <div className="container px-6">
        <div className="flex items-center justify-between">
          <Link href="#" className="text-2xl font-serif font-bold text-foreground">
            Coastal
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full">Fleet</Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full">Charters</Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full">Routes</Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full">Contact</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="hidden md:inline-flex border-2">Book Now</Button>
          </div>
        </div>
      </div>
    </header>
  )
}
