"use client"

import Image from "next/image"

export function GalleryServiceRealEstate() {
  const properties = [
    { title: "Modern Downtown Loft", price: "$1,250,000", beds: "2", baths: "2", sqft: "1,800", image: "1.webp" },
    { title: "Suburban Family Home", price: "$850,000", beds: "4", baths: "3", sqft: "3,200", image: "2.webp" },
    { title: "Beachfront Villa", price: "$2,500,000", beds: "5", baths: "4", sqft: "4,500", image: "3.webp" },
    { title: "Urban Penthouse", price: "$3,200,000", beds: "3", baths: "3", sqft: "2,800", image: "4.webp" },
    { title: "Mountain Retreat", price: "$1,800,000", beds: "4", baths: "3", sqft: "3,500", image: "5.webp" },
    { title: "Historic Townhouse", price: "$1,100,000", beds: "3", baths: "2.5", sqft: "2,400", image: "6.webp" },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">Gallery</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">Featured Properties</h2>
          <p className="text-muted-foreground mt-4">Discover your dream home</p>
        </div>

        {/* Property gallery with details overlay */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {properties.map((property, index) => (
            <div
              key={index}
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <Image
                src={`/placeholders/blocks/service-real-estate/${property.image}`}
                alt={property.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Overlay with property details */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent">
                {/* Price badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-4 py-2 bg-primary text-primary-foreground text-sm font-bold rounded-lg shadow-lg">
                    {property.price}
                  </span>
                </div>

                {/* Property info - always visible */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-bold text-xl mb-3">{property.title}</h3>

                  {/* Property details */}
                  <div className="flex items-center gap-4 text-white/90 text-sm">
                    <div className="flex items-center gap-1">
                      <span className="font-semibold">{property.beds}</span>
                      <span>beds</span>
                    </div>
                    <div className="w-1 h-1 bg-white/50 rounded-full" />
                    <div className="flex items-center gap-1">
                      <span className="font-semibold">{property.baths}</span>
                      <span>baths</span>
                    </div>
                    <div className="w-1 h-1 bg-white/50 rounded-full" />
                    <div className="flex items-center gap-1">
                      <span className="font-semibold">{property.sqft}</span>
                      <span>sqft</span>
                    </div>
                  </div>

                  {/* View details button - appears on hover */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <div className="inline-flex items-center gap-2 text-white text-sm font-semibold">
                      <span>View Details</span>
                      <span>→</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
