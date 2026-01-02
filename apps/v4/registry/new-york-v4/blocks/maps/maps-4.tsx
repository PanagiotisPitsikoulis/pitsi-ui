"use client"

import { Check, Home, Package, Truck } from "@/lib/icons"
import { Badge } from "@/registry/new-york-v4/ui/badge"
import {
  Map,
  MapControls,
  MapMarker,
  MapRoute,
  MarkerContent,
  MarkerTooltip,
} from "@/registry/new-york-v4/ui/map"

const deliveryData = {
  orderId: "ORD-2024-8847",
  status: "In Transit",
  eta: "Today, 2:30 PM - 3:30 PM",
  driver: "Alex M.",
  vehicle: "White Ford Transit",
  stops: [
    {
      id: 1,
      type: "warehouse",
      label: "Distribution Center",
      time: "9:15 AM",
      completed: true,
      coordinates: { lat: 37.8044, lng: -122.2712 },
    },
    {
      id: 2,
      type: "current",
      label: "Current Location",
      time: "Now",
      completed: false,
      coordinates: { lat: 37.7849, lng: -122.4094 },
    },
    {
      id: 3,
      type: "destination",
      label: "Your Address",
      address: "456 Oak Street, San Francisco",
      time: "Est. 2:30 PM",
      completed: false,
      coordinates: { lat: 37.7649, lng: -122.4294 },
    },
  ],
}

const routeCoordinates: [number, number][] = [
  [-122.2712, 37.8044],
  [-122.35, 37.79],
  [-122.4094, 37.7849],
  [-122.42, 37.775],
  [-122.4294, 37.7649],
]

export function Maps4() {
  return (
    <div className="bg-card overflow-hidden rounded-xl border">
      <div className="grid lg:grid-cols-[1fr_360px]">
        <div className="h-[400px] lg:h-[500px]">
          <Map center={[-122.38, 37.78]} zoom={11.5}>
            <MapControls showZoom position="bottom-right" />
            <MapRoute
              coordinates={routeCoordinates}
              color="#3b82f6"
              width={4}
            />
            {deliveryData.stops.map((stop) => (
              <MapMarker
                key={stop.id}
                longitude={stop.coordinates.lng}
                latitude={stop.coordinates.lat}
              >
                <MarkerContent>
                  <div
                    className={`flex size-10 items-center justify-center rounded-full border-2 border-white shadow-lg ${
                      stop.type === "current"
                        ? "animate-pulse bg-blue-500"
                        : stop.completed
                          ? "bg-green-500"
                          : "bg-muted-foreground"
                    }`}
                  >
                    {stop.type === "warehouse" && (
                      <Package className="size-5 text-white" />
                    )}
                    {stop.type === "current" && (
                      <Truck className="size-5 text-white" />
                    )}
                    {stop.type === "destination" && (
                      <Home className="size-5 text-white" />
                    )}
                  </div>
                </MarkerContent>
                <MarkerTooltip>
                  <span>{stop.label}</span>
                </MarkerTooltip>
              </MapMarker>
            ))}
          </Map>
        </div>
        <div className="border-l p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground text-sm">Order</p>
              <p className="font-mono font-semibold">{deliveryData.orderId}</p>
            </div>
            <Badge variant="secondary" className="bg-blue-500/10 text-blue-600">
              {deliveryData.status}
            </Badge>
          </div>
          <div className="bg-muted/50 mt-4 rounded-lg p-4">
            <p className="text-muted-foreground text-sm">Estimated Arrival</p>
            <p className="mt-1 text-lg font-semibold">{deliveryData.eta}</p>
          </div>
          <div className="mt-6">
            <p className="text-sm font-medium">Delivery Progress</p>
            <div className="mt-4 space-y-4">
              {deliveryData.stops.map((stop, index) => (
                <div key={stop.id} className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div
                      className={`flex size-8 items-center justify-center rounded-full ${
                        stop.completed
                          ? "bg-green-500"
                          : stop.type === "current"
                            ? "bg-blue-500"
                            : "bg-muted"
                      }`}
                    >
                      {stop.completed ? (
                        <Check className="size-4 text-white" />
                      ) : stop.type === "current" ? (
                        <Truck className="size-4 text-white" />
                      ) : (
                        <span className="text-muted-foreground text-xs">
                          {index + 1}
                        </span>
                      )}
                    </div>
                    {index < deliveryData.stops.length - 1 && (
                      <div
                        className={`h-8 w-0.5 ${stop.completed ? "bg-green-500" : "bg-muted"}`}
                      />
                    )}
                  </div>
                  <div className="flex-1 pb-4">
                    <p className="font-medium">{stop.label}</p>
                    {stop.address && (
                      <p className="text-muted-foreground text-sm">
                        {stop.address}
                      </p>
                    )}
                    <p className="text-muted-foreground mt-1 text-xs">
                      {stop.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 rounded-lg border p-4">
            <p className="text-muted-foreground text-sm">Driver</p>
            <p className="font-medium">{deliveryData.driver}</p>
            <p className="text-muted-foreground text-sm">
              {deliveryData.vehicle}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
