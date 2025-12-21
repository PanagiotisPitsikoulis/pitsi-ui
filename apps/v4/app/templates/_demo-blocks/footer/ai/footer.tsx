"use client"

import Link from "next/link"

export function FooterAi() {
  return (
    <footer className="border-t border-border py-16">
      <div className="container px-6">
        {/* Minimal tech footer - clean grid, API docs link style */}
        <div className="grid md:grid-cols-6 gap-8 max-w-5xl">
          <div className="md:col-span-2">
            <div className="font-mono text-sm text-foreground mb-2">NeuralAI</div>
            <p className="text-xs text-muted-foreground font-mono">v2.4.1</p>
          </div>
          <div>
            <h4 className="text-xs font-mono text-muted-foreground mb-3 uppercase tracking-wider">Docs</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground font-mono transition-colors">API Reference</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground font-mono transition-colors">SDK</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground font-mono transition-colors">CLI</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-mono text-muted-foreground mb-3 uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground font-mono transition-colors">Models</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground font-mono transition-colors">Pricing</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground font-mono transition-colors">Status</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-mono text-muted-foreground mb-3 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground font-mono transition-colors">About</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground font-mono transition-colors">Blog</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground font-mono transition-colors">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-mono text-muted-foreground mb-3 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground font-mono transition-colors">Privacy</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground font-mono transition-colors">Terms</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground font-mono transition-colors">Security</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground font-mono">&copy; 2024 NeuralAI, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
