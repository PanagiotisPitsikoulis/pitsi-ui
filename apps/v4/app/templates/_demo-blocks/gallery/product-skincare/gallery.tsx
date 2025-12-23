"use client"

import Image from "next/image"

export function GalleryProductSkincare() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">Gallery</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">Product Collection</h2>
          <p className="text-muted-foreground mt-4">Minimalist beauty, maximum results</p>
        </div>

        {/* Clean minimalist grid - product flatlay */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="relative aspect-square rounded-xl overflow-hidden bg-white dark:bg-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300">
            <Image
              src="/placeholders/blocks/product-skincare/1.webp"
              alt="Cleanser"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500 p-4"
            />
          </div>

          <div className="relative aspect-square rounded-xl overflow-hidden bg-white dark:bg-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300">
            <Image
              src="/placeholders/blocks/product-skincare/2.webp"
              alt="Serum"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500 p-4"
            />
          </div>

          <div className="relative aspect-square rounded-xl overflow-hidden bg-white dark:bg-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300">
            <Image
              src="/placeholders/blocks/product-skincare/3.webp"
              alt="Moisturizer"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500 p-4"
            />
          </div>

          <div className="relative aspect-square rounded-xl overflow-hidden bg-white dark:bg-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300">
            <Image
              src="/placeholders/blocks/product-skincare/4.webp"
              alt="Eye Cream"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500 p-4"
            />
          </div>

          <div className="relative aspect-square rounded-xl overflow-hidden bg-white dark:bg-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300">
            <Image
              src="/placeholders/blocks/product-skincare/5.webp"
              alt="Face Mask"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500 p-4"
            />
          </div>

          <div className="relative aspect-square rounded-xl overflow-hidden bg-white dark:bg-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300">
            <Image
              src="/placeholders/blocks/product-skincare/6.webp"
              alt="Toner"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500 p-4"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
