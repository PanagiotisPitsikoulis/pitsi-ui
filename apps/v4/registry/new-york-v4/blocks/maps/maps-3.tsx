"use client"

import * as React from "react"

import { MapPin, Navigation, Search } from "@/lib/icons"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Input } from "@/registry/new-york-v4/ui/input"
import {
  Map,
  MapControls,
  MapMarker,
  MarkerContent,
  MarkerPopup,
} from "@/registry/new-york-v4/ui/map"
import { ScrollArea } from "@/registry/new-york-v4/ui/scroll-area"

const stores = [
  {
    id: 1,
    name: "Downtown Store",
    address: "123 Main Street, Suite 100",
    city: "San Francisco, CA 94102",
    phone: "(415) 555-0101",
    hours: "9 AM - 9 PM",
    distance: "0.3 mi",
    coordinates: { lat: 37.7849, lng: -122.4094 },
  },
  {
    id: 2,
    name: "Marina District",
    address: "456 Chestnut Street",
    city: "San Francisco, CA 94123",
    phone: "(415) 555-0102",
    hours: "10 AM - 8 PM",
    distance: "1.2 mi",
    coordinates: { lat: 37.8024, lng: -122.4344 },
  },
  {
    id: 3,
    name: "Mission Bay",
    address: "789 Third Street",
    city: "San Francisco, CA 94158",
    phone: "(415) 555-0103",
    hours: "8 AM - 10 PM",
    distance: "2.1 mi",
    coordinates: { lat: 37.7749, lng: -122.3894 },
  },
  {
    id: 4,
    name: "SOMA Location",
    address: "101 Howard Street",
    city: "San Francisco, CA 94105",
    phone: "(415) 555-0104",
    hours: "9 AM - 7 PM",
    distance: "0.8 mi",
    coordinates: { lat: 37.7929, lng: -122.3994 },
  },
]

export function Maps3() {
  const [selectedStore, setSelectedStore] = React.useState<number | null>(null)
  const [searchQuery, setSearchQuery] = React.useState("")

  const filteredStores = stores.filter(
    (store) =>
      store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      store.address.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="bg-card h-[600px] overflow-hidden rounded-xl border">
      <div className="grid h-full lg:grid-cols-[380px_1fr]">
        <div className="flex flex-col border-r">
          <div className="border-b p-4">
            <h2 className="text-lg font-semibold">Find a Store</h2>
            <div className="relative mt-3">
              <Search className="text-muted-foreground absolute top-1/2 left-3 size-4 -translate-y-1/2" />
              <Input
                placeholder="Search by city or zip code..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <ScrollArea className="flex-1">
            <div className="divide-y">
              {filteredStores.map((store) => (
                <button
                  key={store.id}
                  className={`hover:bg-muted/50 w-full p-4 text-left transition-colors ${
                    selectedStore === store.id ? "bg-muted" : ""
                  }`}
                  onClick={() => setSelectedStore(store.id)}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium">{store.name}</h3>
                      <p className="text-muted-foreground mt-1 text-sm">
                        {store.address}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {store.city}
                      </p>
                    </div>
                    <span className="text-primary text-sm font-medium">
                      {store.distance}
                    </span>
                  </div>
                  <div className="text-muted-foreground mt-2 flex items-center gap-4 text-xs">
                    <span>{store.hours}</span>
                    <span>{store.phone}</span>
                  </div>
                  <Button size="sm" variant="outline" className="mt-3">
                    <Navigation className="mr-2 size-3" />
                    Get Directions
                  </Button>
                </button>
              ))}
            </div>
          </ScrollArea>
        </div>
        <div className="relative h-full">
          <Map center={[-122.4094, 37.7849]} zoom={12}>
            <MapControls showZoom showLocate position="bottom-right" />
            {filteredStores.map((store) => (
              <MapMarker
                key={store.id}
                longitude={store.coordinates.lng}
                latitude={store.coordinates.lat}
                onClick={() => setSelectedStore(store.id)}
              >
                <MarkerContent>
                  <div
                    className={`flex size-8 items-center justify-center rounded-full border-2 border-white shadow-lg transition-transform ${
                      selectedStore === store.id
                        ? "bg-primary scale-125"
                        : "bg-muted-foreground"
                    }`}
                  >
                    <MapPin className="size-4 text-white" />
                  </div>
                </MarkerContent>
                <MarkerPopup closeButton>
                  <div className="min-w-[180px]">
                    <h3 className="font-semibold">{store.name}</h3>
                    <p className="text-muted-foreground text-sm">
                      {store.address}
                    </p>
                    <p className="text-primary mt-1 text-sm font-medium">
                      {store.hours}
                    </p>
                  </div>
                </MarkerPopup>
              </MapMarker>
            ))}
          </Map>
        </div>
      </div>
    </div>
  )
}
