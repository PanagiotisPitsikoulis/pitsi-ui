import Link from "next/link"

import { Code2 } from "lucide-react"

export function ServicesFooter() {
  return (
    <footer className="border-t py-12">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <Link href="/websites" className="flex items-center gap-2">
              <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-lg">
                <Code2 className="text-primary-foreground h-5 w-5" />
              </div>
              <span className="font-bold">Pitsi Services</span>
            </Link>
            <p className="text-muted-foreground mt-4 text-sm">
              Custom websites and mobile apps built by experts.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Services</h4>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li>
                <Link href="/websites" className="hover:text-foreground">
                  Custom Websites
                </Link>
              </li>
              <li>
                <Link href="/apps" className="hover:text-foreground">
                  Mobile Apps
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Resources</h4>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-foreground">
                  Component Library
                </Link>
              </li>
              <li>
                <Link href="/docs" className="hover:text-foreground">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Legal</h4>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-muted-foreground mt-8 border-t pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Pitsi Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
