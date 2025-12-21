"use client"

import Link from "next/link"
import { Button } from "@/registry/new-york-v4/ui/button"

export function HeaderServicePetSitting() {
  return (
    <header className="py-4 bg-gradient-to-r from-primary/10 via-background to-primary/10">
      <div className="container px-6">
        <div className="flex items-center justify-between">
          <Link href="#" className="text-2xl font-bold text-foreground rounded-xl">
            Pawsome
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="px-4 py-2 rounded-2xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all">Services</Link>
            <Link href="#" className="px-4 py-2 rounded-2xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all">Sitters</Link>
            <Link href="#" className="px-4 py-2 rounded-2xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all">Pricing</Link>
            <Link href="#" className="px-4 py-2 rounded-2xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all">About</Link>
          </nav>
          <Button className="rounded-full">Book a Sitter</Button>
        </div>
      </div>
    </header>
  )
}
