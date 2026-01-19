"use client"

import Image from "next/image"
import Link from "next/link"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
import { ScrollFade } from "@/registry/new-york-v4/animations/scroll-fade/scroll-fade"
import { SlideUp } from "@/registry/new-york-v4/animations/slide-up/slide-up"
import { Badge } from "@/registry/new-york-v4/ui/badge"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Input } from "@/registry/new-york-v4/ui/input"

interface BlogBlockProps {
  content?: {
    title?: string
    posts?: Array<{
      title: string
      excerpt: string
      image: string
      category: string
      readTime: string
      date: string
      href: string
    }>
  }
  classNames?: {
    root?: string
    container?: string
    header?: { title?: string }
  }
}

const blog12Defaults = {
  title: "Travel Resources",
  posts: [
    {
      title: "The Complete Visa Application Guide",
      excerpt:
        "Step-by-step instructions for navigating visa requirements for popular destinations worldwide.",
      image: "/elements/landscape/plane/1.webp",
      category: "Planning",
      readTime: "15 min",
      date: "Jan 10, 2025",
      href: "#",
    },
    {
      title: "Best Travel Credit Cards of 2025",
      excerpt:
        "Compare rewards, benefits, and fees to find the perfect card for your travel style.",
      image: "/elements/landscape/plane/2.webp",
      category: "Finance",
      readTime: "12 min",
      date: "Jan 8, 2025",
      href: "#",
    },
    {
      title: "Travel Photography: Capturing the Perfect Shot",
      excerpt:
        "Tips and techniques for documenting your travels like a professional.",
      image: "/elements/landscape/sea/5.webp",
      category: "Photography",
      readTime: "10 min",
      date: "Jan 6, 2025",
      href: "#",
    },
    {
      title: "Language Learning Apps for Travelers",
      excerpt:
        "The best apps to learn basic phrases before your next international trip.",
      image: "/elements/landscape/plane/3.webp",
      category: "Resources",
      readTime: "8 min",
      date: "Jan 4, 2025",
      href: "#",
    },
  ],
  resourceCategories: [
    { name: "Planning", icon: "CalendarDays", count: 24 },
    { name: "Finance", icon: "CreditCard", count: 18 },
    { name: "Photography", icon: "Camera", count: 15 },
    { name: "Health", icon: "Heart", count: 12 },
    { name: "Gear", icon: "Backpack", count: 20 },
    { name: "Apps", icon: "Smartphone", count: 16 },
  ],
  popularDestinations: [
    { name: "Japan", flag: "JP", href: "#" },
    { name: "Italy", flag: "IT", href: "#" },
    { name: "Thailand", flag: "TH", href: "#" },
    { name: "Portugal", flag: "PT", href: "#" },
    { name: "Mexico", flag: "MX", href: "#" },
  ],
}

export function Blog12({ content = {}, classNames = {} }: BlogBlockProps) {
  const { title = blog12Defaults.title, posts = blog12Defaults.posts } = content

  return (
    <section className={cn("bg-background", classNames.root)}>
      <div
        className={cn("container px-6 py-16 md:py-24", classNames.container)}
      >
        <SlideUp delay={0} distance={20}>
          <h2
            className={cn(
              "text-foreground mb-12 text-3xl font-bold md:text-4xl",
              classNames.header?.title
            )}
          >
            {title}
          </h2>
        </SlideUp>

        <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
          {/* Main Content */}
          <div className="space-y-8">
            {posts.map((post, i) => (
              <ScrollFade key={i} delay={0.1 * i} scrollBased>
                <Link
                  href={post.href}
                  className="bg-card group grid gap-6 overflow-hidden rounded-xl p-4 md:grid-cols-[220px_1fr] md:p-0"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg md:aspect-auto md:rounded-none md:rounded-l-xl">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col justify-center md:py-6 md:pr-6">
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <Badge variant="secondary" className="text-xs">
                        {post.category}
                      </Badge>
                      <span className="text-muted-foreground text-xs">
                        {post.date}
                      </span>
                    </div>
                    <h3 className="text-foreground mb-2 text-lg font-semibold group-hover:underline md:text-xl">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-3 line-clamp-2 text-sm">
                      {post.excerpt}
                    </p>
                    <div className="text-muted-foreground flex items-center gap-4 text-sm">
                      <span className="flex items-center gap-1">
                        <DynamicIcon name="Clock" className="h-4 w-4" />
                        {post.readTime}
                      </span>
                      <span className="text-primary group-hover:text-primary/80 inline-flex items-center font-medium transition-colors">
                        Read More
                        <DynamicIcon
                          name="ArrowRight"
                          className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                        />
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollFade>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Newsletter */}
            <SlideUp delay={0.1} distance={30}>
              <div className="bg-primary text-primary-foreground rounded-2xl p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                  <DynamicIcon name="Mail" className="h-6 w-6" />
                </div>
                <h4 className="mb-2 text-lg font-semibold">
                  Travel Newsletter
                </h4>
                <p className="mb-4 text-sm opacity-90">
                  Get weekly travel tips, destination guides, and exclusive
                  deals delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    className="border-white/20 bg-white/10 text-white placeholder:text-white/60"
                  />
                  <Button
                    variant="secondary"
                    className="text-primary w-full bg-white hover:bg-white/90"
                  >
                    Subscribe Free
                  </Button>
                </div>
              </div>
            </SlideUp>

            {/* Resource Categories */}
            <SlideUp delay={0.2} distance={30}>
              <div className="border-border rounded-xl border p-5">
                <h4 className="text-foreground mb-4 font-semibold">
                  Browse by Category
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {blog12Defaults.resourceCategories.map((cat, i) => (
                    <Link
                      key={i}
                      href="#"
                      className="hover:bg-muted flex items-center gap-2 rounded-lg p-2 transition-colors"
                    >
                      <div className="bg-primary/10 flex h-8 w-8 items-center justify-center rounded-lg">
                        <DynamicIcon
                          name={cat.icon}
                          className="text-primary h-4 w-4"
                        />
                      </div>
                      <div>
                        <p className="text-foreground text-sm font-medium">
                          {cat.name}
                        </p>
                        <p className="text-muted-foreground text-xs">
                          {cat.count} guides
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </SlideUp>

            {/* Popular Destinations */}
            <SlideUp delay={0.3} distance={30}>
              <div className="border-border rounded-xl border p-5">
                <h4 className="text-foreground mb-4 flex items-center gap-2 font-semibold">
                  <DynamicIcon name="Globe" className="text-primary h-5 w-5" />
                  Popular Destinations
                </h4>
                <ul className="space-y-2">
                  {blog12Defaults.popularDestinations.map((dest, i) => (
                    <li key={i}>
                      <Link
                        href={dest.href}
                        className="text-muted-foreground hover:text-foreground flex items-center gap-3 py-1 text-sm transition-colors"
                      >
                        <span className="text-base">{dest.flag}</span>
                        {dest.name}
                        <DynamicIcon
                          name="ArrowRight"
                          className="ml-auto h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </SlideUp>

            {/* Quick Links */}
            <SlideUp delay={0.4} distance={30}>
              <div className="border-border rounded-xl border p-5">
                <h4 className="text-foreground mb-4 font-semibold">
                  Quick Links
                </h4>
                <ul className="space-y-2">
                  {[
                    { label: "Packing Checklists", icon: "ListChecks" },
                    { label: "Budget Calculator", icon: "Calculator" },
                    { label: "Currency Converter", icon: "ArrowLeftRight" },
                    { label: "Flight Tracker", icon: "Plane" },
                  ].map((link, i) => (
                    <li key={i}>
                      <Link
                        href="#"
                        className="text-muted-foreground hover:text-primary flex items-center gap-2 py-1 text-sm transition-colors"
                      >
                        <DynamicIcon name={link.icon} className="h-4 w-4" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </SlideUp>
          </aside>
        </div>
      </div>
    </section>
  )
}
