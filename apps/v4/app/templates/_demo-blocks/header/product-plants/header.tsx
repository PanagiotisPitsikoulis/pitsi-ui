"use client"

import Link from "next/link"
import { Button } from "@/registry/new-york-v4/ui/button"

export function HeaderProductPlants() {
  return (
    <header className="py-4">
      <div className="container px-6">
        <div className="flex items-center justify-between">
          <Link href="#" className="text-xl font-bold text-foreground">
            Plantify
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Shop</Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Care</Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">About</Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden md:inline-flex">Sign In</Button>
            <Button className="rounded-full">Get Started</Button>
          </div>
        </div>
      </div>
    </header>
  )
}
