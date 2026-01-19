import type { RegistryItemConfig } from "@/registry/types"

export const registryConfig: RegistryItemConfig = {
  name: "features-16",
  type: "registry:block",
  description: "Travel agency bento grid features layout",
  registryDependencies: [],
  categories: ["features", "landing"],
  tier: "free",
  readiness: "alpha",
  blockConfig: {
    template: "service-travel",
    blockType: "features",
    order: 4,
    palette: "azure",
    typography: "modern",
    tint: "tinted",
  },
}
