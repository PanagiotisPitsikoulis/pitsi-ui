import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "products-2",
  type: "registry:block",
  description: "Product card grid with rating, price, add to cart",
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
