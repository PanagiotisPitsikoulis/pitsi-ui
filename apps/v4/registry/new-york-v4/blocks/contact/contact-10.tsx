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
    offices?: Array<{
      city: string
      country: string
      address: string
      phone: string
      email: string
      hours: string
      specialties: string[]
    }>
  }
  classNames?: {
    root?: string
    container?: string
    header?: { title?: string; description?: string }
  }
}

const contact10Defaults = {
  title: "Visit Our Travel Centers",
  description:
    "Meet our travel experts in person at one of our worldwide locations.",
  offices: [
    {
      city: "New York",
      country: "United States",
      address: "350 Fifth Avenue, Floor 25, New York, NY 10118",
      phone: "+1 (212) 555-0123",
      email: "nyc@voyagetravel.com",
      hours: "Mon-Sat 9:00 AM - 7:00 PM EST",
      specialties: ["Luxury Travel", "Corporate Retreats"],
    },
    {
      city: "London",
      country: "United Kingdom",
      address: "1 Canada Square, Canary Wharf, London E14 5AB",
      phone: "+44 20 7555 0123",
      email: "london@voyagetravel.com",
      hours: "Mon-Sat 9:00 AM - 6:00 PM GMT",
      specialties: ["European Tours", "Safari Adventures"],
    },
    {
      city: "Dubai",
      country: "United Arab Emirates",
      address: "Burj Khalifa, Level 124, Dubai, UAE",
      phone: "+971 4 555 0123",
      email: "dubai@voyagetravel.com",
      hours: "Sun-Thu 10:00 AM - 8:00 PM GST",
      specialties: ["Middle East", "Maldives Getaways"],
    },
    {
      city: "Sydney",
      country: "Australia",
      address: "1 Circular Quay West, Sydney NSW 2000",
      phone: "+61 2 5555 0123",
      email: "sydney@voyagetravel.com",
      hours: "Mon-Sat 9:00 AM - 6:00 PM AEST",
      specialties: ["Pacific Islands", "New Zealand"],
    },
  ],
}

export function Contact10({
  content = {},
  classNames = {},
}: ContactBlockProps) {
  const {
    title = contact10Defaults.title,
    description = contact10Defaults.description,
    offices = contact10Defaults.offices,
  } = content

  return (
    <section className={cn("bg-background", classNames.root)}>
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

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {offices.map((office, i) => (
            <SlideUp key={i} delay={0.1 * i}>
              <div className="bg-muted group rounded-2xl p-6 transition-all hover:shadow-lg">
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <h3 className="text-foreground text-lg font-semibold">
                      {office.city}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {office.country}
                    </p>
                  </div>
                  <div className="bg-primary/10 text-primary rounded-full p-2">
                    <DynamicIcon name="Building" className="h-5 w-5" />
                  </div>
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

                {/* Specialties */}
                <div className="border-border/50 mt-4 border-t pt-4">
                  <p className="text-muted-foreground mb-2 text-xs font-medium tracking-wide uppercase">
                    Specialties
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {office.specialties.map((specialty, j) => (
                      <span
                        key={j}
                        className="bg-background text-muted-foreground rounded-full px-2 py-1 text-xs"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="mt-4 w-full"
                  asChild
                >
                  <Link href="#">
                    Book Appointment{" "}
                    <DynamicIcon name="ArrowRight" className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </SlideUp>
          ))}
        </div>

        {/* Virtual Consultation CTA */}
        <SlideUp delay={0.4}>
          <div className="border-border bg-muted mt-12 rounded-2xl border p-8 text-center">
            <div className="mx-auto max-w-2xl">
              <DynamicIcon
                name="Video"
                className="text-primary mx-auto mb-4 h-10 w-10"
              />
              <h3 className="text-foreground mb-2 text-xl font-semibold">
                Can&apos;t Visit In Person?
              </h3>
              <p className="text-muted-foreground mb-6">
                Schedule a virtual consultation with our travel experts from
                anywhere in the world. We&apos;ll plan your dream trip together
                over video call.
              </p>
              <div className="flex flex-col justify-center gap-3 sm:flex-row">
                <Button asChild>
                  <Link href="#">
                    Schedule Video Call
                    <DynamicIcon name="Video" className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="mailto:virtual@voyagetravel.com">
                    Email Us Instead
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </SlideUp>
      </div>
    </section>
  )
}
