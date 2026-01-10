"use client"

import { cn } from "@/lib/utils"
import DomeGallery from "@/registry/new-york-v4/animations/dome-gallery/dome-gallery"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"

interface GalleryBlockProps {
  content?: {
    title?: string
    description?: string
    images?: Array<{ src: string; alt: string }>
  }
  classNames?: {
    root?: string
    container?: string
    header?: { title?: string; description?: string }
  }
}

const gallery5Defaults = {
  title: "Image Gallery",
  description: "Click any image to view it in full screen.",
  images: [
    { src: "/elements/landscape/plants/1.webp", alt: "Monstera" },
    { src: "/elements/landscape/plants/2.webp", alt: "Fiddle Leaf" },
    { src: "/elements/landscape/plants/3.webp", alt: "Snake Plant" },
    { src: "/elements/landscape/plants/4.webp", alt: "Peace Lily" },
    { src: "/elements/landscape/plants/5.webp", alt: "Pothos" },
    { src: "/elements/landscape/plants/6.webp", alt: "Rubber Plant" },
    { src: "/elements/landscape/plants/7.webp", alt: "ZZ Plant" },
    { src: "/elements/landscape/plants/8.webp", alt: "Bird of Paradise" },
    { src: "/elements/landscape/plants/9.webp", alt: "Calathea" },
  ],
}

export function Gallery5({ content = {}, classNames = {} }: GalleryBlockProps) {
  const {
    title = gallery5Defaults.title,
    description = gallery5Defaults.description,
    images = gallery5Defaults.images,
  } = content

  // Transform images to the format DomeGallery expects
  const domeImages = images.map((img) => ({
    src: img.src,
    alt: img.alt,
  }))

  return (
    <section className={cn("bg-background", classNames.root)}>
      <div
        className={cn("container px-6 py-16 md:py-24", classNames.container)}
      >
        {/* Header */}
        <BlockHeader
          title={title}
          description={description}
          spacing="compact"
          classNames={classNames.header}
        />

        {/* DomeGallery with Lightbox */}
        <div className="relative h-[500px] w-full md:h-[700px]">
          <DomeGallery
            images={domeImages}
            fit={0.55}
            fitBasis="auto"
            minRadius={400}
            overlayBlurColor="hsl(var(--background))"
            maxVerticalRotationDeg={8}
            dragSensitivity={18}
            enlargeTransitionMs={350}
            segments={30}
            dragDampening={1.5}
            openedImageWidth="500px"
            openedImageHeight="400px"
            imageBorderRadius="16px"
            openedImageBorderRadius="24px"
            grayscale={false}
          />
        </div>
      </div>
    </section>
  )
}
