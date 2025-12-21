"use client"

import Image from "next/image"

export function GalleryServiceMarketing() {
  const projects = [
    { client: "Tech Startup", category: "Brand Identity", image: "1.webp" },
    { client: "E-commerce", category: "Social Campaign", image: "2.webp" },
    { client: "Restaurant", category: "Digital Marketing", image: "3.webp" },
    { client: "Fashion Brand", category: "Content Strategy", image: "4.webp" },
    { client: "Real Estate", category: "Web Design", image: "5.webp" },
    { client: "Fitness App", category: "Product Launch", image: "6.webp" },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">Gallery</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">Our Work</h2>
          <p className="text-muted-foreground mt-4">Case studies from successful campaigns</p>
        </div>

        {/* Portfolio showcase - case study thumbnails */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <Image
                src={`/placeholders/blocks/service-marketing/${project.image}`}
                alt={project.client}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-bold text-2xl mb-2">{project.client}</h3>
                  <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View case study →
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
