"use client"

import * as React from "react"

import { Bath, Bed, Heart, Square } from "@/lib/icons"
import { Badge } from "@/registry/new-york-v4/ui/badge"
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Map,
  MapControls,
  MapMarker,
  MarkerContent,
  MarkerPopup,
} from "@/registry/new-york-v4/ui/map"

const properties = [
  {
    id: 1,
    title: "Modern Downtown Loft",
    price: "$850,000",
    address: "123 Market St, Unit 4A",
    beds: 2,
    baths: 2,
    sqft: 1200,
    type: "For Sale",
    image: "/placeholder.svg",
    coordinates: { lat: 37.7849, lng: -122.4094 },
  },
  {
    id: 2,
    title: "Waterfront Condo",
    price: "$1,250,000",
    address: "456 Embarcadero",
    beds: 3,
    baths: 2.5,
    sqft: 1800,
    type: "For Sale",
    image: "/placeholder.svg",
    coordinates: { lat: 37.7999, lng: -122.3994 },
  },
  {
    id: 3,
    title: "Victorian Townhouse",
    price: "$4,500/mo",
    address: "789 Hayes Street",
    beds: 4,
    baths: 3,
    sqft: 2400,
    type: "For Rent",
    image: "/placeholder.svg",
    coordinates: { lat: 37.7749, lng: -122.4294 },
  },
  {
    id: 4,
    title: "Sunset District Home",
    price: "$1,100,000",
    address: "321 Irving Street",
    beds: 3,
    baths: 2,
    sqft: 1650,
    type: "For Sale",
    image: "/placeholder.svg",
    coordinates: { lat: 37.7639, lng: -122.4594 },
  },
]

export function Maps5() {
  const [selectedProperty, setSelectedProperty] = React.useState<number | null>(
    null
  )
  const [favorites, setFavorites] = React.useState<number[]>([])

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    )
  }

  return (
    <div className="bg-card h-[600px] overflow-hidden rounded-xl border">
      <div className="relative h-full">
        <Map center={[-122.4294, 37.7749]} zoom={12}>
          <MapControls showZoom showFullscreen position="bottom-right" />
          {properties.map((property) => (
            <MapMarker
              key={property.id}
              longitude={property.coordinates.lng}
              latitude={property.coordinates.lat}
              onClick={() => setSelectedProperty(property.id)}
            >
              <MarkerContent>
                <div
                  className={`rounded-lg border-2 border-white px-2 py-1 font-semibold shadow-lg transition-transform ${
                    selectedProperty === property.id
                      ? "bg-primary text-primary-foreground scale-110"
                      : "bg-card text-foreground hover:bg-primary hover:text-primary-foreground"
                  }`}
                >
                  <span className="text-xs">{property.price}</span>
                </div>
              </MarkerContent>
              <MarkerPopup closeButton offset={20}>
                <div className="w-[280px]">
                  <div className="bg-muted relative aspect-[4/3] overflow-hidden rounded-lg">
                    <div className="text-muted-foreground absolute inset-0 flex items-center justify-center">
                      Property Image
                    </div>
                    <Badge
                      className="absolute top-2 left-2"
                      variant={
                        property.type === "For Sale" ? "default" : "secondary"
                      }
                    >
                      {property.type}
                    </Badge>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="absolute top-2 right-2 size-8 bg-white/80 hover:bg-white"
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleFavorite(property.id)
                      }}
                    >
                      <Heart
                        className={`size-4 ${favorites.includes(property.id) ? "fill-red-500 text-red-500" : ""}`}
                      />
                    </Button>
                  </div>
                  <div className="mt-3">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold">
                        {property.price}
                      </span>
                    </div>
                    <h3 className="mt-1 font-medium">{property.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {property.address}
                    </p>
                    <div className="text-muted-foreground mt-3 flex items-center gap-4 text-sm">
                      <span className="flex items-center gap-1">
                        <Bed className="size-4" />
                        {property.beds} beds
                      </span>
                      <span className="flex items-center gap-1">
                        <Bath className="size-4" />
                        {property.baths} baths
                      </span>
                      <span className="flex items-center gap-1">
                        <Square className="size-4" />
                        {property.sqft.toLocaleString()} sqft
                      </span>
                    </div>
                  </div>
                </div>
              </MarkerPopup>
            </MapMarker>
          ))}
        </Map>
        <div className="absolute bottom-4 left-4 flex gap-2">
          <Badge variant="outline" className="bg-card">
            {properties.length} properties
          </Badge>
        </div>
      </div>
    </div>
  )
}
