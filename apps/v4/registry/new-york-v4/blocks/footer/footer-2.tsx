"use client"

import Link from "next/link"
import { Instagram, Twitter, Youtube } from "lucide-react"

import { Button } from "@/registry/new-york-v4/ui/button"
import { Input } from "@/registry/new-york-v4/ui/input"

const navigation = {
  classes: [
    { name: "HIIT", href: "#" },
    { name: "Boxing", href: "#" },
    { name: "Strength", href: "#" },
    { name: "Yoga", href: "#" },
    { name: "Spin", href: "#" },
    { name: "Recovery", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Coaches", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Press", href: "#" },
  ],
  support: [
    { name: "FAQ", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Membership", href: "#" },
    { name: "Gift Cards", href: "#" },
  ],
  legal: [
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
    { name: "Cookies", href: "#" },
  ],
}

const social = [
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
]

export function Footer2() {
  return (
    <footer className="bg-black">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container px-6 py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
              Stay In The Loop
            </h2>
            <p className="mt-4 text-white/60">
              Get workout tips, class updates, and exclusive member offers
              delivered to your inbox.
            </p>
            <form className="mt-8 flex gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 border-white/20 bg-white/5 text-white placeholder:text-white/40"
              />
              <Button className="bg-white text-black hover:bg-white/90">
                Subscribe
              </Button>
            </form>
            <p className="mt-3 text-xs text-white/40">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-6">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <span className="font-display text-2xl font-bold text-white">
                FUEL
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-white/60">
              Where athletes are made. Join the community that pushes limits and
              breaks barriers.
            </p>
            {/* Social */}
            <div className="mt-6 flex gap-4">
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Classes */}
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-white uppercase">
              Classes
            </h3>
            <ul className="space-y-3">
              {navigation.classes.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-white uppercase">
              Company
            </h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-white uppercase">
              Support
            </h3>
            <ul className="space-y-3">
              {navigation.support.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-white uppercase">
              Legal
            </h3>
            <ul className="space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container flex flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} FUEL Studio. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-sm text-white/40 transition-colors hover:text-white"
            >
              Accessibility
            </Link>
            <Link
              href="#"
              className="text-sm text-white/40 transition-colors hover:text-white"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
