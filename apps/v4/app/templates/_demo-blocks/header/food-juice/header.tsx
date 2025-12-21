"use client"

import Link from "next/link"
import { Button } from "@/registry/new-york-v4/ui/button"

export function HeaderFoodJuice() {
  return (
    <header className="py-4">
      <div className="container px-6">
        <div className="flex items-center justify-between">
          <Link href="#" className="text-2xl font-bold text-foreground">
            Juicery
          </Link>
          <nav className="hidden md:flex items-center gap-2">
            <Link href="#" className="px-4 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all">Menu</Link>
            <Link href="#" className="px-4 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all">Cleanses</Link>
            <Link href="#" className="px-4 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all">About</Link>
            <Link href="#" className="px-4 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all">Locations</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Button className="rounded-full bg-gradient-to-r from-primary to-primary/80">Order Now</Button>
          </div>
        </div>
      </div>
    </header>
  )
}
