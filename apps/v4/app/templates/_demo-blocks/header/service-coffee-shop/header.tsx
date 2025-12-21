"use client"

import Link from "next/link"
import { Button } from "@/registry/new-york-v4/ui/button"

export function HeaderServiceCoffeeShop() {
  return (
    <header className="py-5 border-b-4 border-border/50">
      <div className="container px-6">
        <div className="flex items-center justify-between">
          <Link href="#" className="text-3xl font-handwriting font-bold text-foreground" style={{ fontFamily: 'cursive' }}>
            Brew
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Menu</Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Events</Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">About</Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Visit</Link>
          </nav>
          <Button variant="default" className="font-medium">Order Ahead</Button>
        </div>
      </div>
    </header>
  )
}
