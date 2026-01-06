import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "products-6",
  type: "registry:block",
  description: "Product comparison layout with features",
  registryDependencies: ["button"],
  categories: ["products", "landing"],
  tier: "free",
  readiness: "production",
  blockConfig: {
    template: "service-plants",
    blockType: "products",
    order: 5,
    palette: "sage",
    typography: "elegant",
    tint: "tinted",
  },
}
