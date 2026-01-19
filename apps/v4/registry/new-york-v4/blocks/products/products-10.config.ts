import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "products-10",
  type: "registry:block",
  description:
    "Tour packages grid with category filtering and slide-up animations",
  registryDependencies: ["button"],
  categories: ["products", "landing"],
  tier: "free",
  readiness: "alpha",
  blockConfig: {
    template: "service-travel",
    blockType: "products",
    order: 5,
    palette: "azure",
    typography: "modern",
    tint: "tinted",
  },
}
