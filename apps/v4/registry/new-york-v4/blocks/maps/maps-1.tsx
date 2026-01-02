"use client"

import {
  Map,
  MapControls,
  MapMarker,
  MarkerContent,
  MarkerPopup,
} from "@/registry/new-york-v4/ui/map"

const locations = [
  {
    id: 1,
    name: "San Francisco HQ",
    address: "123 Market Street",
    coordinates: { lat: 37.7749, lng: -122.4194 },
  },
  {
    id: 2,
    name: "New York Office",
    address: "456 Broadway",
    coordinates: { lat: 40.7128, lng: -74.006 },
  },
  {
    id: 3,
    name: "Austin Office",
    address: "789 Congress Ave",
    coordinates: { lat: 30.2672, lng: -97.7431 },
  },
]

export function Maps1() {
  return (
    <div className="h-[500px] w-full overflow-hidden rounded-xl border">
      <Map center={[-98.5795, 39.8283]} zoom={3.5}>
        <MapControls showZoom showLocate />
        {locations.map((location) => (
          <MapMarker
            key={location.id}
            longitude={location.coordinates.lng}
            latitude={location.coordinates.lat}
          >
            <MarkerContent>
              <div className="bg-primary text-primary-foreground flex size-8 items-center justify-center rounded-full border-2 border-white shadow-lg">
                <span className="text-xs font-semibold">{location.id}</span>
              </div>
            </MarkerContent>
            <MarkerPopup closeButton>
              <div className="min-w-[160px]">
                <h3 className="font-semibold">{location.name}</h3>
                <p className="text-muted-foreground text-sm">
                  {location.address}
                </p>
              </div>
            </MarkerPopup>
          </MapMarker>
        ))}
      </Map>
    </div>
  )
}
