"use client"

import Link from "next/link"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Input } from "@/registry/new-york-v4/ui/input"
import { Textarea } from "@/registry/new-york-v4/ui/textarea"

interface ContactBlockProps {
  content?: {
    title?: string
    description?: string
    email?: string
    phone?: string
    address?: string
  }
  classNames?: {
    root?: string
    container?: string
    header?: { title?: string; description?: string }
  }
}

const contact5Defaults = {
  title: "Let's Start a Conversation",
  description:
    "Whether you have a question, want to collaborate, or just want to say hello, we'd love to hear from you.",
  email: "hello@company.com",
  phone: "+1 (555) 123-4567",
  address: "123 Innovation Drive, San Francisco, CA 94107",
  links: [
    { label: "Careers", href: "#" },
    { label: "Press Kit", href: "#" },
    { label: "Support Center", href: "#" },
  ],
}

export function Contact5({ content = {}, classNames = {} }: ContactBlockProps) {
  const {
    title = contact5Defaults.title,
    description = contact5Defaults.description,
    email = contact5Defaults.email,
    phone = contact5Defaults.phone,
    address = contact5Defaults.address,
  } = content

  return (
    <section className={cn("bg-background", classNames.root)}>
      <div className={cn("container px-0 lg:px-6", classNames.container)}>
        <div className="grid lg:grid-cols-2">
          {/* Dark Info Panel */}
          <div className="bg-foreground text-background flex flex-col justify-between p-8 md:p-12 lg:min-h-[600px] lg:rounded-l-xl">
            <div>
              <h2
                className={cn(
                  "mb-4 text-3xl font-bold md:text-4xl",
                  classNames.header?.title
                )}
              >
                {title}
              </h2>
              <p
                className={cn(
                  "text-background/70 mb-8 text-lg",
                  classNames.header?.description
                )}
              >
                {description}
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <DynamicIcon
                    name="Mail"
                    className="text-background/70 h-5 w-5 shrink-0"
                  />
                  <a
                    href={`mailto:${email}`}
                    className="hover:text-background/80 transition-colors"
                  >
                    {email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <DynamicIcon
                    name="Phone"
                    className="text-background/70 h-5 w-5 shrink-0"
                  />
                  <a
                    href={`tel:${phone}`}
                    className="hover:text-background/80 transition-colors"
                  >
                    {phone}
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <DynamicIcon
                    name="MapPin"
                    className="text-background/70 mt-0.5 h-5 w-5 shrink-0"
                  />
                  <span className="text-background/90">{address}</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="border-background/20 mt-8 border-t pt-8">
              <p className="text-background/60 mb-4 text-sm font-medium tracking-wider uppercase">
                Quick Links
              </p>
              <div className="space-y-2">
                {contact5Defaults.links.map((link, i) => (
                  <Link
                    key={i}
                    href={link.href}
                    className="group flex items-center gap-2 transition-colors hover:opacity-80"
                  >
                    {link.label}
                    <DynamicIcon
                      name="ArrowRight"
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Light Form Panel */}
          <div className="bg-muted p-8 md:p-12 lg:rounded-r-xl">
            <h3 className="text-foreground mb-6 text-xl font-semibold">
              Send us a message
            </h3>

            <form className="space-y-5">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-foreground text-sm font-medium"
                >
                  Full Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-foreground text-sm font-medium"
                >
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="company"
                  className="text-foreground text-sm font-medium"
                >
                  Company (Optional)
                </label>
                <Input
                  id="company"
                  placeholder="Your company"
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-foreground text-sm font-medium"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="How can we help you?"
                  rows={5}
                  className="bg-background"
                />
              </div>

              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
