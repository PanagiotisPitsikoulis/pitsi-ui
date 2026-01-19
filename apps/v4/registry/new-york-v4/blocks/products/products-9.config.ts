import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "products-9",
  type: "registry:block",
  description:
    "Travel deals stacking cards with parallax scroll effect for limited offers",
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
