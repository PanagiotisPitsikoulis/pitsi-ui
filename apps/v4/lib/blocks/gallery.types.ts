import type {
  BlockBaseClassNames,
  BlockHeaderClassNames,
  BlockImage,
  BlockSectionHeader,
} from "./types"

// ============================================================================
// Gallery Content Types
// ============================================================================

export interface GalleryItem extends BlockImage {
  caption?: string
  href?: string
}

export interface GalleryContent extends BlockSectionHeader {
  /** Array of gallery images */
  images: GalleryItem[]
}

// ============================================================================
// Gallery ClassNames Types
// ============================================================================

export interface GalleryItemClassNames {
  root?: string
  wrapper?: string
  img?: string
  caption?: string
}

export interface GalleryClassNames extends BlockBaseClassNames {
  container?: string
  header?: BlockHeaderClassNames
  grid?: string
  image?: GalleryItemClassNames
}

// ============================================================================
// Gallery Props
// ============================================================================

export interface GalleryBlockProps {
  content?: Partial<GalleryContent>
  classNames?: GalleryClassNames
}

// ============================================================================
// Gallery Defaults
// ============================================================================

export const galleryDefaults: GalleryContent = {
  badge: "Gallery",
  title: "Plant Inspiration",
  images: [
    {
      src: "/placeholders/blocks/service-plants/assets/item-1.webp",
      alt: "Plant arrangement 1",
    },
    {
      src: "/placeholders/blocks/service-plants/assets/item-2.webp",
      alt: "Plant arrangement 2",
    },
    {
      src: "/placeholders/blocks/service-plants/assets/item-3.webp",
      alt: "Plant arrangement 3",
    },
    {
      src: "/placeholders/blocks/service-plants/assets/item-4.webp",
      alt: "Plant arrangement 4",
    },
    {
      src: "/placeholders/blocks/service-plants/assets/item-5.webp",
      alt: "Plant arrangement 5",
    },
    {
      src: "/placeholders/blocks/service-plants/assets/item-6.webp",
      alt: "Plant arrangement 6",
    },
  ],
}
