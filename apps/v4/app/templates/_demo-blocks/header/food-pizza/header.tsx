"use client"

import Link from "next/link"
import { Button } from "@/registry/new-york-v4/ui/button"

export function HeaderFoodPizza() {
  return (
    <header className="py-4 border-b-4 border-primary/20 bg-background">
      <div className="container px-6">
        <div className="flex items-center justify-between">
          <Link href="#" className="text-2xl font-bold text-foreground italic">
            Slice
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Menu</Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Specials</Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Catering</Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Locations</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="hidden md:inline-flex">Sign In</Button>
            <Button className="bg-primary">Order Online</Button>
          </div>
        </div>
      </div>
    </header>
  )
}
