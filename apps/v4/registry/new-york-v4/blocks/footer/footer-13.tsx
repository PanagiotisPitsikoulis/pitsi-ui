"use client"

import Image from "next/image"
import Link from "next/link"
import { Instagram, Twitter, Youtube } from "lucide-react"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { type FooterBlockProps } from "@/lib/blocks/footer.types"
import { cn } from "@/lib/utils"
import { ScrollFade } from "@/registry/new-york-v4/animations/scroll-fade/scroll-fade"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Input } from "@/registry/new-york-v4/ui/input"

const footer13Defaults = {
  logo: {
    text: "Wanderlust",
    href: "#",
  },
  tagline: "Your Gateway to Extraordinary Adventures",
  destinations: [
    {
      name: "Santorini",
      country: "Greece",
      image:
        "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=200&h=200&fit=crop",
      href: "#",
    },
    {
      name: "Bali",
      country: "Indonesia",
      image:
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=200&h=200&fit=crop",
      href: "#",
    },
    {
      name: "Machu Picchu",
      country: "Peru",
      image:
        "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=200&h=200&fit=crop",
      href: "#",
    },
    {
      name: "Tokyo",
      country: "Japan",
      image:
        "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=200&h=200&fit=crop",
      href: "#",
    },
  ],
  navigation: {
    destinations: {
      title: "Destinations",
      links: [
        { name: "Europe", href: "#" },
        { name: "Asia Pacific", href: "#" },
        { name: "Americas", href: "#" },
        { name: "Africa & Middle East", href: "#" },
        { name: "All Destinations", href: "#" },
      ],
    },
    experiences: {
      title: "Experiences",
      links: [
        { name: "Beach & Island", href: "#" },
        { name: "Adventure & Safari", href: "#" },
        { name: "City Breaks", href: "#" },
        { name: "Cruise Holidays", href: "#" },
        { name: "Honeymoon", href: "#" },
      ],
    },
    support: {
      title: "Support",
      links: [
        { name: "Help Center", href: "#" },
        { name: "Booking Info", href: "#" },
        { name: "Travel Insurance", href: "#" },
        { name: "Visa Services", href: "#" },
        { name: "Contact Us", href: "#" },
      ],
    },
    company: {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Press", href: "#" },
        { name: "Partners", href: "#" },
        { name: "Blog", href: "#" },
      ],
    },
  },
  trustBadges: [
    { icon: "ShieldCheck", label: "Secure Booking" },
    { icon: "Award02", label: "Award Winning" },
    { icon: "CustomerService01", label: "24/7 Support" },
    { icon: "MoneyReceiveCircle", label: "Best Price Guarantee" },
  ],
  social: [
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "YouTube", icon: Youtube, href: "#" },
  ],
  newsletter: {
    title: "Get Travel Deals",
    placeholder: "Enter your email",
    buttonLabel: "Subscribe",
  },
  copyright: "2025 Wanderlust Travel. All rights reserved.",
  bottomLinks: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Settings", href: "#" },
    { label: "Accessibility", href: "#" },
  ],
}

export function Footer13({ content = {}, classNames = {} }: FooterBlockProps) {
  const {
    logo = footer13Defaults.logo,
    copyright = footer13Defaults.copyright,
  } = content

  const {
    destinations,
    navigation,
    trustBadges,
    social,
    newsletter,
    bottomLinks,
    tagline,
  } = footer13Defaults

  return (
    <footer
      className={cn("bg-background border-border border-t", classNames.root)}
    >
      {/* Featured Destinations Section */}
      <div className="border-border border-b py-12">
        <div className={cn("container px-6", classNames.container)}>
          <ScrollFade scrollBased={false} delay={0.1}>
            <div className="mb-8 text-center">
              <h3 className="text-foreground mb-2 text-lg font-semibold">
                Trending Destinations
              </h3>
              <p className="text-muted-foreground text-sm">
                Start planning your next adventure
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {destinations.map((dest, i) => (
                <Link
                  key={i}
                  href={dest.href}
                  className="group relative overflow-hidden rounded-lg"
                >
                  <div className="aspect-square">
                    <Image
                      src={dest.image}
                      alt={dest.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <p className="text-sm font-semibold text-white">
                        {dest.name}
                      </p>
                      <p className="text-xs text-white/80">{dest.country}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </ScrollFade>
        </div>
      </div>

      {/* Main Navigation Section */}
      <div className="py-12">
        <div className={cn("container px-6", classNames.container)}>
          <ScrollFade scrollBased={false} delay={0.2}>
            <div className="grid gap-8 lg:grid-cols-6">
              {/* Brand Column */}
              <div className="lg:col-span-2">
                <Link
                  href={logo?.href ?? "#"}
                  className={cn(
                    "text-primary text-2xl font-bold",
                    classNames.logo
                  )}
                >
                  {logo?.text}
                </Link>
                <p className="text-muted-foreground mt-2 text-sm">{tagline}</p>

                {/* Newsletter */}
                <div className="mt-6">
                  <p className="text-foreground mb-3 text-sm font-medium">
                    {newsletter.title}
                  </p>
                  <div className="flex gap-2">
                    <Input
                      type="email"
                      placeholder={newsletter.placeholder}
                      className="h-10 flex-1"
                    />
                    <Button size="sm" className="h-10">
                      {newsletter.buttonLabel}
                    </Button>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-6 flex items-center gap-3">
                  {social.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-muted-foreground hover:text-primary hover:bg-primary/10 flex h-9 w-9 items-center justify-center rounded-full transition-colors"
                      aria-label={item.name}
                    >
                      <item.icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Navigation Columns */}
              {Object.values(navigation).map((section, i) => (
                <div key={i}>
                  <h4 className="text-foreground mb-4 text-sm font-semibold">
                    {section.title}
                  </h4>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-muted-foreground hover:text-primary text-sm transition-colors"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </ScrollFade>
        </div>
      </div>

      {/* Trust Badges Section */}
      <div className="border-border border-t py-8">
        <div className={cn("container px-6", classNames.container)}>
          <ScrollFade scrollBased={false} delay={0.3}>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {trustBadges.map((badge, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="bg-primary/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                    <DynamicIcon
                      name={badge.icon}
                      className="text-primary h-5 w-5"
                    />
                  </div>
                  <span className="text-foreground text-sm font-medium">
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>
          </ScrollFade>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-border border-t py-6">
        <div className={cn("container px-6", classNames.container)}>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-muted-foreground text-sm">&copy; {copyright}</p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              {bottomLinks.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer13
