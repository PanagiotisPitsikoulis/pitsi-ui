"use client"

import Link from "next/link"
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"

interface ContactBlockProps {
  content?: {
    title?: string
    description?: string
    channels?: Array<{
      icon: "email" | "phone" | "chat"
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

const contact3Defaults = {
  title: "How Can We Help?",
  description: "Choose the best way to reach us. We're here to assist you.",
  channels: [
    {
      icon: "email" as const,
      title: "Email Us",
      description:
        "Get a response within 24 hours. Best for detailed inquiries.",
      action: "Send an Email",
      href: "mailto:support@company.com",
    },
    {
      icon: "phone" as const,
      title: "Call Us",
      description: "Speak directly with our team. Available Mon-Fri 9AM-6PM.",
      action: "Call Now",
      href: "tel:+15551234567",
    },
    {
      icon: "chat" as const,
      title: "Live Chat",
      description:
        "Chat with us in real-time. Average response time under 5 minutes.",
      action: "Start Chat",
      href: "#",
    },
  ],
  info: {
    address: "123 Business Ave, San Francisco, CA 94107",
    hours: "Monday - Friday, 9:00 AM - 6:00 PM PST",
  },
  social: [
    { platform: "twitter", href: "#" },
    { platform: "linkedin", href: "#" },
    { platform: "facebook", href: "#" },
  ],
}

const IconMap = {
  email: Mail,
  phone: Phone,
  chat: MessageCircle,
}

export function Contact3({ content = {}, classNames = {} }: ContactBlockProps) {
  const {
    title = contact3Defaults.title,
    description = contact3Defaults.description,
    channels = contact3Defaults.channels,
  } = content

  return (
    <section className={cn("bg-muted", classNames.root)}>
      <div
        className={cn("container px-6 py-16 md:py-24", classNames.container)}
      >
        <div className="mb-12 text-center">
          <h2
            className={cn(
              "text-foreground mb-4 text-3xl font-bold md:text-4xl",
              classNames.header?.title
            )}
          >
            {title}
          </h2>
          <p
            className={cn(
              "text-muted-foreground mx-auto max-w-2xl",
              classNames.header?.description
            )}
          >
            {description}
          </p>
        </div>

        {/* Channel Cards */}
        <div className="mx-auto mb-12 grid max-w-4xl gap-6 md:grid-cols-3">
          {channels.map((channel, i) => {
            const Icon = IconMap[channel.icon]
            return (
              <div
                key={i}
                className="bg-background border-border rounded-xl border p-6 text-center transition-shadow hover:shadow-lg"
              >
                <div className="bg-primary/10 text-primary mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-foreground mb-2 text-lg font-semibold">
                  {channel.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {channel.description}
                </p>
                <Button asChild className="w-full">
                  <Link href={channel.href}>{channel.action}</Link>
                </Button>
              </div>
            )
          })}
        </div>

        {/* Additional Info */}
        <div className="border-border mx-auto max-w-2xl rounded-xl border p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex items-start gap-3">
              <MapPin className="text-muted-foreground mt-0.5 h-5 w-5 shrink-0" />
              <div>
                <h4 className="text-foreground mb-1 font-medium">
                  Our Location
                </h4>
                <p className="text-muted-foreground text-sm">
                  {contact3Defaults.info.address}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="text-muted-foreground mt-0.5 h-5 w-5 shrink-0" />
              <div>
                <h4 className="text-foreground mb-1 font-medium">
                  Business Hours
                </h4>
                <p className="text-muted-foreground text-sm">
                  {contact3Defaults.info.hours}
                </p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="border-border mt-6 flex items-center justify-center gap-4 border-t pt-6">
            <span className="text-muted-foreground text-sm">Follow us:</span>
            {contact3Defaults.social.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.platform === "twitter" && (
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                )}
                {item.platform === "linkedin" && (
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                )}
                {item.platform === "facebook" && (
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
