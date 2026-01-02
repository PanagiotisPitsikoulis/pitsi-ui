"use client"

import { Clock, Mail, MapPin, Phone } from "@/lib/icons"
import {
  Map,
  MapControls,
  MapMarker,
  MarkerContent,
} from "@/registry/new-york-v4/ui/map"

const businessInfo = {
  name: "Downtown Office",
  address: "350 5th Avenue, Suite 1200",
  city: "New York, NY 10118",
  phone: "+1 (555) 123-4567",
  email: "hello@company.com",
  hours: "Mon-Fri: 9:00 AM - 6:00 PM",
  coordinates: { lat: 40.7484, lng: -73.9857 },
}

export function Maps2() {
  return (
    <div className="bg-card overflow-hidden rounded-xl border">
      <div className="grid lg:grid-cols-2">
        <div className="flex flex-col justify-center p-8 lg:p-12">
          <h2 className="text-2xl font-bold tracking-tight">Visit Us</h2>
          <p className="text-muted-foreground mt-2">
            We&apos;d love to meet you. Drop by our office anytime.
          </p>
          <div className="mt-8 space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 flex size-10 shrink-0 items-center justify-center rounded-lg">
                <MapPin className="text-primary size-5" />
              </div>
              <div>
                <p className="font-medium">{businessInfo.name}</p>
                <p className="text-muted-foreground text-sm">
                  {businessInfo.address}
                </p>
                <p className="text-muted-foreground text-sm">
                  {businessInfo.city}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 flex size-10 shrink-0 items-center justify-center rounded-lg">
                <Phone className="text-primary size-5" />
              </div>
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-muted-foreground text-sm">
                  {businessInfo.phone}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 flex size-10 shrink-0 items-center justify-center rounded-lg">
                <Mail className="text-primary size-5" />
              </div>
              <div>
                <p className="font-medium">Email</p>
                <p className="text-muted-foreground text-sm">
                  {businessInfo.email}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 flex size-10 shrink-0 items-center justify-center rounded-lg">
                <Clock className="text-primary size-5" />
              </div>
              <div>
                <p className="font-medium">Business Hours</p>
                <p className="text-muted-foreground text-sm">
                  {businessInfo.hours}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[400px] lg:h-auto">
          <Map
            center={[
              businessInfo.coordinates.lng,
              businessInfo.coordinates.lat,
            ]}
            zoom={15}
          >
            <MapControls showZoom position="bottom-right" />
            <MapMarker
              longitude={businessInfo.coordinates.lng}
              latitude={businessInfo.coordinates.lat}
            >
              <MarkerContent>
                <div className="bg-primary flex size-10 items-center justify-center rounded-full border-2 border-white shadow-lg">
                  <MapPin className="text-primary-foreground size-5" />
                </div>
              </MarkerContent>
            </MapMarker>
          </Map>
        </div>
      </div>
    </div>
  )
}
