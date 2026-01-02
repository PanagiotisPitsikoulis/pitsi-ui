"use client"

import { Clock, Mail, MapPin, Phone } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Input } from "@/registry/new-york-v4/ui/input"
import { Textarea } from "@/registry/new-york-v4/ui/textarea"

interface ContactBlockProps {
  content?: {
    title?: string
    description?: string
    locations?: Array<{
      name: string
      address: string
      phone: string
      email: string
      hours: string
    }>
  }
  classNames?: {
    root?: string
    container?: string
    header?: { title?: string; description?: string }
  }
}

const contact2Defaults = {
  title: "Get In Touch",
  description:
    "Have a question or want to work together? We'd love to hear from you.",
  locations: [
    {
      name: "Headquarters",
      address: "123 Business Ave, Suite 100, San Francisco, CA 94107",
      phone: "+1 (555) 123-4567",
      email: "hello@company.com",
      hours: "Mon-Fri 9AM-6PM PST",
    },
  ],
}

export function Contact2({ content = {}, classNames = {} }: ContactBlockProps) {
  const {
    title = contact2Defaults.title,
    description = contact2Defaults.description,
    locations = contact2Defaults.locations,
  } = content

  return (
    <section className={cn("bg-background", classNames.root)}>
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

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="border-border rounded-xl border p-6 md:p-8">
            <h3 className="text-foreground mb-6 text-xl font-semibold">
              Send us a message
            </h3>
            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Input placeholder="First name" />
                <Input placeholder="Last name" />
              </div>
              <Input type="email" placeholder="Email address" />
              <Input placeholder="Subject" />
              <Textarea placeholder="Your message" rows={5} />
              <Button className="w-full">Send Message</Button>
            </form>
          </div>

          {/* Map & Info */}
          <div className="space-y-6">
            {/* Map Placeholder */}
            <div className="bg-muted flex aspect-video items-center justify-center rounded-xl">
              <div className="text-center">
                <MapPin className="text-muted-foreground mx-auto mb-2 h-12 w-12" />
                <p className="text-muted-foreground text-sm">
                  Map integration placeholder
                </p>
              </div>
            </div>

            {/* Location Info */}
            {locations.map((location, i) => (
              <div key={i} className="border-border rounded-xl border p-6">
                <h4 className="text-foreground mb-4 font-semibold">
                  {location.name}
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-muted-foreground mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-muted-foreground text-sm">
                      {location.address}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="text-muted-foreground h-5 w-5 shrink-0" />
                    <a
                      href={`tel:${location.phone}`}
                      className="text-foreground text-sm hover:underline"
                    >
                      {location.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="text-muted-foreground h-5 w-5 shrink-0" />
                    <a
                      href={`mailto:${location.email}`}
                      className="text-foreground text-sm hover:underline"
                    >
                      {location.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="text-muted-foreground h-5 w-5 shrink-0" />
                    <span className="text-muted-foreground text-sm">
                      {location.hours}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
