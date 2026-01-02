"use client"

import { Clock, Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/registry/new-york-v4/ui/button"

const hours = [
  { day: "Monday - Friday", time: "5:00 AM - 10:00 PM" },
  { day: "Saturday", time: "7:00 AM - 8:00 PM" },
  { day: "Sunday", time: "8:00 AM - 6:00 PM" },
]

const amenities = [
  "Locker Rooms & Showers",
  "Towel Service",
  "Recovery Room",
  "Juice Bar",
  "Free Parking",
  "Bike Storage",
]

export function Features8() {
  return (
    <section className="bg-neutral-950 py-24 lg:py-32">
      <div className="container px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Info */}
          <div>
            <p className="mb-4 text-sm font-medium tracking-[0.3em] text-white/60 uppercase">
              Visit Us
            </p>
            <h2 className="font-display text-4xl font-bold text-white md:text-5xl">
              Come See
              <br />
              The Space
            </h2>
            <p className="mt-6 text-lg text-white/60">
              Our 15,000 sq ft facility is designed to inspire greatness. Book a
              free tour and experience it yourself.
            </p>

            {/* Contact Info */}
            <div className="mt-10 space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white">Address</p>
                  <p className="text-white/60">
                    123 Fitness Street
                    <br />
                    Downtown, NY 10001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white">Phone</p>
                  <p className="text-white/60">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p className="text-white/60">hello@fuelstudio.com</p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="mt-10">
              <div className="mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5 text-white/60" />
                <h3 className="font-semibold text-white">Studio Hours</h3>
              </div>
              <div className="space-y-2">
                {hours.map((item) => (
                  <div
                    key={item.day}
                    className="flex justify-between border-b border-white/10 py-2"
                  >
                    <span className="text-white/60">{item.day}</span>
                    <span className="font-medium text-white">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90"
              >
                Book a Free Tour
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 bg-transparent text-white hover:bg-white/10"
              >
                Get Directions
              </Button>
            </div>
          </div>

          {/* Map / Image area */}
          <div className="flex flex-col gap-6">
            {/* Map placeholder */}
            <div className="relative flex-1 overflow-hidden rounded-2xl bg-neutral-900">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Stylized map placeholder */}
                <div className="relative h-full w-full">
                  {/* Grid pattern */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
                      backgroundSize: "40px 40px",
                    }}
                  />
                  {/* Location pin */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <div className="absolute -inset-8 animate-ping rounded-full bg-white/20" />
                      <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white">
                        <MapPin className="h-8 w-8 text-black" />
                      </div>
                    </div>
                  </div>
                  {/* Fake streets */}
                  <div className="absolute top-1/3 right-0 left-0 h-px bg-white/20" />
                  <div className="absolute right-0 bottom-1/4 left-0 h-px bg-white/20" />
                  <div className="absolute top-0 bottom-0 left-1/4 w-px bg-white/20" />
                  <div className="absolute top-0 right-1/3 bottom-0 w-px bg-white/20" />
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-neutral-900 to-transparent p-6">
                <p className="text-center text-sm text-white/60">
                  Interactive map coming soon
                </p>
              </div>
            </div>

            {/* Amenities */}
            <div className="rounded-2xl bg-white/5 p-6">
              <h3 className="mb-4 font-semibold text-white">Amenities</h3>
              <div className="grid grid-cols-2 gap-3">
                {amenities.map((amenity) => (
                  <div key={amenity} className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-white" />
                    <span className="text-sm text-white/70">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
