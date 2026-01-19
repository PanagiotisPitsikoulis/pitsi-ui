"use client"

import Link from "next/link"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
import { ScrollFade } from "@/registry/new-york-v4/animations/scroll-fade/scroll-fade"
import { SlideUp } from "@/registry/new-york-v4/animations/slide-up/slide-up"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"
import { Button } from "@/registry/new-york-v4/ui/button"

interface ContactBlockProps {
  content?: {
    title?: string
    description?: string
    channels?: Array<{
      icon: string
      title: string
      description: string
      action: string
      href: string
    }>
  }
  classNames?: {
    root?: string
    container?: string
    header?: { title?: string; description?: string }
  }
}

const contact9Defaults = {
  title: "How Can We Help You Travel?",
  description:
    "Choose the best way to connect with our travel specialists. We're here to make your journey seamless.",
  channels: [
    {
      icon: "Headphones",
      title: "Booking Support",
      description:
        "Need help with an existing reservation? Our support team is available around the clock.",
      action: "Call Support",
      href: "tel:+18005550123",
    },
    {
      icon: "Calendar",
      title: "Schedule Consultation",
      description:
        "Book a free 30-minute call with a travel expert to plan your perfect trip.",
      action: "Book a Call",
      href: "#",
    },
    {
      icon: "MessageSquare",
      title: "Live Chat",
      description:
        "Chat with us instantly for quick questions. Average response time: 2 minutes.",
      action: "Start Chat",
      href: "#",
    },
  ],
  travelTips: {
    title: "Planning Your First Trip With Us?",
    description:
      "Download our free travel planning guide with tips, checklists, and insider recommendations.",
    cta: "Get Free Guide",
  },
  social: [
    { platform: "instagram", href: "#", label: "@wanderlust" },
    { platform: "twitter", href: "#", label: "@wanderlusttravel" },
    { platform: "youtube", href: "#", label: "Travel Vlogs" },
  ],
}

export function Contact9({ content = {}, classNames = {} }: ContactBlockProps) {
  const {
    title = contact9Defaults.title,
    description = contact9Defaults.description,
    channels = contact9Defaults.channels,
  } = content

  return (
    <section className={cn("bg-muted", classNames.root)}>
      <div
        className={cn("container px-6 py-16 md:py-24", classNames.container)}
      >
        <ScrollFade>
          <BlockHeader
            title={title}
            description={description}
            spacing="compact"
            classNames={classNames.header}
          />
        </ScrollFade>

        {/* Channel Cards */}
        <div className="mx-auto mb-12 grid max-w-5xl gap-6 md:grid-cols-3">
          {channels.map((channel, i) => (
            <SlideUp key={i} delay={0.1 * i}>
              <div className="bg-background border-border group rounded-2xl border p-6 text-center transition-all hover:shadow-lg">
                <div className="bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl transition-colors">
                  <DynamicIcon name={channel.icon} className="h-8 w-8" />
                </div>
                <h3 className="text-foreground mb-2 text-lg font-semibold">
                  {channel.title}
                </h3>
                <p className="text-muted-foreground mb-5 text-sm">
                  {channel.description}
                </p>
                <Button asChild className="w-full">
                  <Link href={channel.href}>{channel.action}</Link>
                </Button>
              </div>
            </SlideUp>
          ))}
        </div>

        {/* Travel Tips CTA */}
        <SlideUp delay={0.3}>
          <div className="bg-primary text-primary-foreground mx-auto max-w-3xl rounded-2xl p-8 text-center md:p-10">
            <DynamicIcon
              name="BookOpen"
              className="mx-auto mb-4 h-10 w-10 opacity-80"
            />
            <h3 className="mb-2 text-xl font-semibold">
              {contact9Defaults.travelTips.title}
            </h3>
            <p className="text-primary-foreground/80 mb-6 text-sm">
              {contact9Defaults.travelTips.description}
            </p>
            <Button
              variant="secondary"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              <DynamicIcon name="Download" className="mr-2 h-4 w-4" />
              {contact9Defaults.travelTips.cta}
            </Button>
          </div>
        </SlideUp>

        {/* Social & Quick Links */}
        <SlideUp delay={0.4}>
          <div className="mx-auto mt-12 max-w-2xl text-center">
            <p className="text-muted-foreground mb-4 text-sm">
              Follow our adventures and get travel inspiration
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {contact9Defaults.social.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="bg-background border-border hover:border-primary text-muted-foreground hover:text-foreground flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors"
                >
                  {item.platform === "instagram" && (
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  )}
                  {item.platform === "twitter" && (
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  )}
                  {item.platform === "youtube" && (
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  )}
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </SlideUp>
      </div>
    </section>
  )
}
