"use client"

import Link from "next/link"
import { Button } from "@/registry/new-york-v4/ui/button"

export function HeaderAi() {
  return (
    <header className="py-4 backdrop-blur-sm bg-background/80 border-b border-border/40">
      <div className="container px-6">
        <div className="flex items-center justify-between">
          <Link href="#" className="text-xl font-light tracking-wide text-foreground">
            NeuralMind
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Solutions</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Technology</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Pricing</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Docs</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="hidden md:inline-flex">Login</Button>
            <Button size="sm">Get Started</Button>
          </div>
        </div>
      </div>
    </header>
  )
}
