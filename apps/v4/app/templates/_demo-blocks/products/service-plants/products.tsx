"use client"

import Image from "next/image"
import Link from "next/link"

import { Button } from "@/registry/new-york-v4/ui/button"

export function ProductsServicePlants() {
  return (
    <section>
      <div className="container px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">Our Collection</p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Best Sellers
            </h2>
          </div>
          <Link href="#" className="mt-4 md:mt-0">
            <Button variant="secondary" className="rounded-full">
              View All Plants
            </Button>
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Monstera Deliciosa", price: "$45", image: "/placeholders/blocks/service-plants/assets/item-1.webp" },
            { name: "Fiddle Leaf Fig", price: "$65", image: "/placeholders/blocks/service-plants/assets/item-2.webp" },
            { name: "Snake Plant", price: "$35", image: "/placeholders/blocks/service-plants/assets/item-3.webp" },
            { name: "Pothos Golden", price: "$25", image: "/placeholders/blocks/service-plants/assets/item-4.webp" },
          ].map((product, i) => (
            <Link href="#" key={i} className="group">
              <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden border border-border bg-muted mb-4">
                <Image draggable={false}
                  src={product.image}
                  alt={product.name}
                  fill
                  className="select-none pointer-events-none object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">{product.name}</h3>
              <p className="text-primary font-semibold">{product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
