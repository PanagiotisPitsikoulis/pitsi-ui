"use client"

import Link from "next/link"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
import { SlideUp } from "@/registry/new-york-v4/animations/slide-up/slide-up"
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

const contact8Defaults = {
  title: "Let's Plan Your Adventure",
  description:
    "From exotic getaways to family vacations, our travel experts are here to create your perfect trip. Reach out and let the journey begin.",
  email: "hello@wanderlusttravel.com",
  phone: "+1 (888) 555-TRIP",
  address: "456 Voyage Avenue, Suite 200, Miami, FL 33139",
  services: [
    { label: "Custom Itineraries", href: "#" },
    { label: "Group Travel", href: "#" },
    { label: "Honeymoon Packages", href: "#" },
    { label: "Adventure Tours", href: "#" },
  ],
  stats: [
    { value: "50+", label: "Countries" },
    { value: "10K+", label: "Happy Travelers" },
    { value: "15", label: "Years Experience" },
  ],
}

export function Contact8({ content = {}, classNames = {} }: ContactBlockProps) {
  const {
    title = contact8Defaults.title,
    description = contact8Defaults.description,
    email = contact8Defaults.email,
    phone = contact8Defaults.phone,
    address = contact8Defaults.address,
  } = content

  return (
    <section className={cn("bg-background", classNames.root)}>
      <div className={cn("container px-0 lg:px-6", classNames.container)}>
        <div className="grid lg:grid-cols-2">
          {/* Info Panel */}
          <SlideUp delay={0.1}>
            <div className="bg-primary text-primary-foreground flex flex-col justify-between p-8 md:p-12 lg:min-h-[650px] lg:rounded-l-2xl">
              <div>
                <div className="mb-6 flex items-center gap-2">
                  <DynamicIcon name="Compass" className="h-8 w-8" />
                  <span className="text-lg font-semibold">
                    Wanderlust Travel
                  </span>
                </div>

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
                    "text-primary-foreground/80 mb-8 text-lg",
                    classNames.header?.description
                  )}
                >
                  {description}
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary-foreground/20 flex h-10 w-10 items-center justify-center rounded-full">
                      <DynamicIcon name="Mail" className="h-5 w-5" />
                    </div>
                    <a href={`mailto:${email}`} className="hover:underline">
                      {email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary-foreground/20 flex h-10 w-10 items-center justify-center rounded-full">
                      <DynamicIcon name="Phone" className="h-5 w-5" />
                    </div>
                    <a href={`tel:${phone}`} className="hover:underline">
                      {phone}
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-primary-foreground/20 flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                      <DynamicIcon name="MapPin" className="h-5 w-5" />
                    </div>
                    <span className="text-primary-foreground/90">
                      {address}
                    </span>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="border-primary-foreground/20 mt-8 grid grid-cols-3 gap-4 border-t pt-8">
                {contact8Defaults.stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <p className="text-2xl font-bold md:text-3xl">
                      {stat.value}
                    </p>
                    <p className="text-primary-foreground/70 mt-1 text-sm">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Services */}
              <div className="border-primary-foreground/20 mt-8 border-t pt-8">
                <p className="text-primary-foreground/70 mb-4 text-sm font-medium tracking-wider uppercase">
                  Our Services
                </p>
                <div className="flex flex-wrap gap-2">
                  {contact8Defaults.services.map((service, i) => (
                    <Link
                      key={i}
                      href={service.href}
                      className="bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full px-4 py-2 text-sm transition-colors"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </SlideUp>

          {/* Form Panel */}
          <SlideUp delay={0.2}>
            <div className="bg-muted p-8 md:p-12 lg:rounded-r-2xl">
              <h3 className="text-foreground mb-2 text-xl font-semibold">
                Request a Free Consultation
              </h3>
              <p className="text-muted-foreground mb-6">
                Tell us about your dream destination and travel dates.
              </p>

              <form className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
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
                      htmlFor="phone"
                      className="text-foreground text-sm font-medium"
                    >
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      className="bg-background"
                    />
                  </div>
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

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="destination"
                      className="text-foreground text-sm font-medium"
                    >
                      Dream Destination
                    </label>
                    <Input
                      id="destination"
                      placeholder="e.g., Bali, Italy"
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="travelers"
                      className="text-foreground text-sm font-medium"
                    >
                      Group Size
                    </label>
                    <Input
                      id="travelers"
                      type="number"
                      placeholder="2"
                      min="1"
                      className="bg-background"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="dates"
                    className="text-foreground text-sm font-medium"
                  >
                    Preferred Travel Dates
                  </label>
                  <Input
                    id="dates"
                    placeholder="e.g., June 2024, Flexible"
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-foreground text-sm font-medium"
                  >
                    Tell Us More
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Share your travel wishes, interests, and any special requirements..."
                    rows={4}
                    className="bg-background"
                  />
                </div>

                <Button type="submit" className="w-full">
                  Start Planning My Trip
                </Button>

                <p className="text-muted-foreground text-center text-xs">
                  We typically respond within 24 hours. No commitment required.
                </p>
              </form>
            </div>
          </SlideUp>
        </div>
      </div>
    </section>
  )
}
