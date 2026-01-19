import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "products-5",
  type: "registry:block",
  description: "Product list view with large images and stock status",
  registryDependencies: ["button"],
  categories: ["products", "landing"],
  tier: "free",
  readiness: "alpha",
  blockConfig: {
    template: "service-plants",
    blockType: "products",
    order: 5,
    palette: "sage",
    typography: "elegant",
    tint: "tinted",
  },
}
