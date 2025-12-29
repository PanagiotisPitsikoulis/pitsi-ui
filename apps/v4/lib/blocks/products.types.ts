import type {
  BlockBaseClassNames,
  BlockCTA,
  BlockHeaderClassNames,
  BlockImage,
  BlockSectionHeader,
} from "./types"

// ============================================================================
// Products Content Types
// ============================================================================

export interface ProductItem {
  name: string
  price: string
  originalPrice?: string
  image: BlockImage
  description?: string
  href: string
  badge?: string
  rating?: number
  reviews?: number
}

export interface ProductsContent extends BlockSectionHeader {
  /** Array of product items */
  products: ProductItem[]
  /** View all button */
  cta?: BlockCTA
}

// ============================================================================
// Products ClassNames Types
// ============================================================================

export interface ProductItemClassNames {
  root?: string
  image?: string
  content?: string
  name?: string
  price?: string
  originalPrice?: string
  description?: string
  badge?: string
  rating?: string
  cta?: string
}

export interface ProductsClassNames extends BlockBaseClassNames {
  container?: string
  header?: BlockHeaderClassNames
  grid?: string
  product?: ProductItemClassNames
  cta?: string
}

// ============================================================================
// Products Props
// ============================================================================

export interface ProductsBlockProps {
  content?: Partial<ProductsContent>
  classNames?: ProductsClassNames
}

// ============================================================================
// Products Defaults
// ============================================================================

export const productsDefaults: ProductsContent = {
  badge: "Best Sellers",
  title: "Customer Favorites",
  description: "The plants everyone's talking about.",
  products: [
    {
      name: "Monstera Deliciosa",
      price: "$45",
      image: { src: "/placeholders/blocks/service-plants/assets/item-1.webp", alt: "Monstera Deliciosa" },
      description: "The iconic Swiss cheese plant",
      href: "#",
      rating: 5,
      reviews: 128,
    },
    {
      name: "Fiddle Leaf Fig",
      price: "$65",
      image: { src: "/placeholders/blocks/service-plants/assets/item-2.webp", alt: "Fiddle Leaf Fig" },
      description: "Statement plant for any room",
      href: "#",
      rating: 4,
      reviews: 89,
    },
    {
      name: "Snake Plant",
      price: "$35",
      image: { src: "/placeholders/blocks/service-plants/assets/item-3.webp", alt: "Snake Plant" },
      description: "Nearly indestructible beauty",
      href: "#",
      rating: 5,
      reviews: 256,
      badge: "Best Seller",
    },
    {
      name: "Pothos",
      price: "$25",
      image: { src: "/placeholders/blocks/service-plants/assets/item-4.webp", alt: "Pothos" },
      description: "Perfect for beginners",
      href: "#",
      rating: 5,
      reviews: 312,
    },
  ],
  cta: { label: "View All Plants", href: "#" },
}
