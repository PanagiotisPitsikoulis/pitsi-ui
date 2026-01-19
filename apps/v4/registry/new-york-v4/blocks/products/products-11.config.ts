import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "products-11",
  type: "registry:block",
  description:
    "Travel bundle packages with pricing tiers and scroll scale animations",
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
