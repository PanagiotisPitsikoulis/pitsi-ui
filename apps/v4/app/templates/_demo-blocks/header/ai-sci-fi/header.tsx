"use client"

import Link from "next/link"
import { Button } from "@/registry/new-york-v4/ui/button"

export function HeaderAiSciFi() {
  return (
    <header className="py-3 border-b border-primary/20 bg-gradient-to-r from-background via-primary/5 to-background">
      <div className="container px-6">
        <div className="flex items-center justify-between">
          <Link href="#" className="text-xl font-bold tracking-wider text-foreground relative">
            <span className="relative z-10">NEXUS AI</span>
            <div className="absolute inset-0 bg-primary/10 blur-sm -z-10"></div>
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            <Link href="#" className="px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all clip-corner">INTERFACE</Link>
            <Link href="#" className="px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all clip-corner">SYSTEMS</Link>
            <Link href="#" className="px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all clip-corner">NETWORK</Link>
            <Link href="#" className="px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all clip-corner">ACCESS</Link>
          </nav>
          <Button className="bg-primary text-primary-foreground shadow-lg shadow-primary/20">INITIALIZE</Button>
        </div>
      </div>
    </header>
  )
}
