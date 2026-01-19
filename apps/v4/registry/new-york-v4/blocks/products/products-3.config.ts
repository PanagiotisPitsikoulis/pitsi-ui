import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "products-3",
  type: "registry:block",
  description: "Featured hero product with grid below",
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
