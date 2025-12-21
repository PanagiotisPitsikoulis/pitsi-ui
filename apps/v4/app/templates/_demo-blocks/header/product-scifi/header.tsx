"use client"

import Link from "next/link"
import { Button } from "@/registry/new-york-v4/ui/button"

export function HeaderProductScifi() {
  return (
    <header className="py-4 border-b border-primary/30 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"></div>
      <div className="container px-6 relative z-10">
        <div className="flex items-center justify-between">
          <Link href="#" className="text-xl font-bold tracking-wider text-foreground flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            TechNova
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
              <div className="w-1 h-1 bg-primary/50 rounded-full"></div>
              Products
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
              <div className="w-1 h-1 bg-primary/50 rounded-full"></div>
              Technology
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
              <div className="w-1 h-1 bg-primary/50 rounded-full"></div>
              Research
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
              <div className="w-1 h-1 bg-primary/50 rounded-full"></div>
              Support
            </Link>
          </nav>
          <Button className="bg-primary/90 hover:bg-primary shadow-lg shadow-primary/20">Access Portal</Button>
        </div>
      </div>
    </header>
  )
}
