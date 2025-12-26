"use client"

import Image from "next/image"
import Link from "next/link"

import { Button } from "@/registry/new-york-v4/ui/button"

export function ProductsServicePlants() {
  return (
    <section>
      <div className="container px-6">
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-primary mb-4 text-sm font-medium tracking-[0.3em] uppercase">
              Our Collection
            </p>
            <h2 className="text-foreground text-3xl font-bold md:text-5xl">
              Best Sellers
            </h2>
          </div>
          <Link href="#" className="mt-4 md:mt-0">
            <Button variant="secondary" className="rounded-full">
              View All Plants
            </Button>
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              name: "Monstera Deliciosa",
              price: "$45",
              image: "/placeholders/blocks/service-plants/assets/item-1.webp",
            },
            {
              name: "Fiddle Leaf Fig",
              price: "$65",
              image: "/placeholders/blocks/service-plants/assets/item-2.webp",
            },
            {
              name: "Snake Plant",
              price: "$35",
              image: "/placeholders/blocks/service-plants/assets/item-3.webp",
            },
            {
              name: "Pothos Golden",
              price: "$25",
              image: "/placeholders/blocks/service-plants/assets/item-4.webp",
            },
          ].map((product, i) => (
            <Link href="#" key={i} className="group">
              <div className="border-border bg-muted relative mb-4 aspect-[3/4] overflow-hidden rounded-[2.5rem] border">
                <Image
                  draggable={false}
                  src={product.image}
                  alt={product.name}
                  fill
                  className="pointer-events-none object-contain p-6 transition-transform duration-500 select-none group-hover:scale-105"
                />
              </div>
              <h3 className="text-foreground group-hover:text-primary font-medium transition-colors">
                {product.name}
              </h3>
              <p className="text-primary font-semibold">{product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
