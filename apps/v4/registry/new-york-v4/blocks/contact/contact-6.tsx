"use client"

import Link from "next/link"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"

interface ContactBlockProps {
  content?: {
    title?: string
    description?: string
    offices?: Array<{
      city: string
      country: string
      address: string
      phone: string
      email: string
      hours: string
      mapUrl: string
    }>
  }
  classNames?: {
    root?: string
    container?: string
    header?: { title?: string; description?: string }
  }
}

const contact6Defaults = {
  title: "Our Offices",
  description: "Visit us at one of our global locations.",
  offices: [
    {
      city: "San Francisco",
      country: "United States",
      address: "123 Market Street, Suite 500, San Francisco, CA 94105",
      phone: "+1 (415) 555-0123",
      email: "sf@company.com",
      hours: "Mon-Fri 9:00 AM - 6:00 PM PST",
      mapUrl: "#",
    },
    {
      city: "London",
      country: "United Kingdom",
      address: "45 Chancery Lane, London WC2A 1JB",
      phone: "+44 20 7555 0123",
      email: "london@company.com",
      hours: "Mon-Fri 9:00 AM - 6:00 PM GMT",
      mapUrl: "#",
    },
    {
      city: "Singapore",
      country: "Singapore",
      address: "1 Raffles Place, #20-01, Singapore 048616",
      phone: "+65 6555 0123",
      email: "sg@company.com",
      hours: "Mon-Fri 9:00 AM - 6:00 PM SGT",
      mapUrl: "#",
    },
    {
      city: "Tokyo",
      country: "Japan",
      address: "1-1-1 Marunouchi, Chiyoda-ku, Tokyo 100-0005",
      phone: "+81 3 5555 0123",
      email: "tokyo@company.com",
      hours: "Mon-Fri 9:00 AM - 6:00 PM JST",
      mapUrl: "#",
    },
  ],
}

export function Contact6({ content = {}, classNames = {} }: ContactBlockProps) {
  const {
    title = contact6Defaults.title,
    description = contact6Defaults.description,
    offices = contact6Defaults.offices,
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

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {offices.map((office, i) => (
            <div
              key={i}
              className="bg-background border-border group rounded-xl border p-6 transition-shadow hover:shadow-lg"
            >
              <div className="mb-4">
                <h3 className="text-foreground text-lg font-semibold">
                  {office.city}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {office.country}
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <DynamicIcon
                    name="MapPin"
                    className="text-muted-foreground mt-0.5 h-4 w-4 shrink-0"
                  />
                  <span className="text-muted-foreground text-sm">
                    {office.address}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <DynamicIcon
                    name="Phone"
                    className="text-muted-foreground h-4 w-4 shrink-0"
                  />
                  <a
                    href={`tel:${office.phone}`}
                    className="text-foreground text-sm hover:underline"
                  >
                    {office.phone}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <DynamicIcon
                    name="Mail"
                    className="text-muted-foreground h-4 w-4 shrink-0"
                  />
                  <a
                    href={`mailto:${office.email}`}
                    className="text-foreground text-sm hover:underline"
                  >
                    {office.email}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <DynamicIcon
                    name="Clock"
                    className="text-muted-foreground h-4 w-4 shrink-0"
                  />
                  <span className="text-muted-foreground text-sm">
                    {office.hours}
                  </span>
                </div>
              </div>

              <Button
                variant="outline"
                size="sm"
                className="mt-6 w-full"
                asChild
              >
                <Link href={office.mapUrl}>
                  Get Directions{" "}
                  <DynamicIcon name="ExternalLink" className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Global Contact CTA */}
        <div className="border-border bg-background mt-12 rounded-xl border p-8 text-center">
          <h3 className="text-foreground mb-2 text-xl font-semibold">
            Can&apos;t find an office near you?
          </h3>
          <p className="text-muted-foreground mb-4">
            Reach out to our global support team for assistance.
          </p>
          <Button asChild>
            <Link href="mailto:support@company.com">
              Contact Global Support
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
